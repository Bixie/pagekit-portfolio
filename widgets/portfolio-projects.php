<?php

use Bixie\Portfolio\Model\Project;

return [

    'name' => 'bixie/portfolio-projects',

    'label' => 'Portfolio projects',

    'events' => [

        'view.scripts' => function ($event, $scripts) use ($app) {
            $scripts->register('widget-portfolio-projects', 'bixie/portfolio:app/bundle/widget-portfolio-projects.js', ['~widgets']);
        },

    ],

    'render' => function ($widget) use ($app) {

        $query = Project::query()->where(['status' => Project::STATUS_PUBLISHED]);

        switch ($widget->get('content_selection', 'random')) {
            case 'random':
                $query->orderBy('RAND()');
                break;
            case 'latest':
                $query->orderBy('date', 'desc');
                break;
            case 'pick':
                $query->whereInSet('id', $widget->get('items', []));
                $query->orderBy('title', 'asc');
                break;
            default:
                return 'No valid content select';
                break;
        }

        $query->limit($widget->get('count', 4));

        $projects = array_values($query->get());

        $config = $app->module('bixie/portfolio')->config();
        $teaser_config = $widget->get('teaser');

        return $app['view']('bixie/portfolio/widgets/portfolio-projects.php',
            compact('widget', 'projects', 'config', 'teaser_config'));

    }

];
