<?php

use Pagekit\Portfolio\Event\RouteListener;
use \Pagekit\Portfolio\PortfolioImageHelper;

return [

	'name' => 'portfolio',

	'type' => 'extension',

	'autoload' => [

		'Pagekit\\Portfolio\\' => 'src'

	],

	'nodes' => [

		'portfolio' => [
			'name' => '@portfolio',
			'label' => 'Portfolio',
			'controller' => 'Pagekit\\Portfolio\\Controller\\SiteController',
			'protected' => true,
			'frontpage' => true
		]

	],

	'routes' => [

		'/portfolio' => [
			'name' => '@portfolio',
			'controller' => [
				'Pagekit\\Portfolio\\Controller\\PortfolioController'
			]
		],
		'/api/portfolio' => [
			'name' => '@portfolio/api',
			'controller' => [
				'Pagekit\\Portfolio\\Controller\\ProjectApiController',
				'Pagekit\\Portfolio\\Controller\\ImageApiController'
			]
		]

	],

	'resources' => [

		'portfolio:' => ''

	],

	'menu' => [

		'portfolio' => [
			'label' => 'Portfolio',
			'icon' => 'portfolio:icon.svg',
			'url' => '@portfolio/project',
			'access' => 'portfolio: manage portfolio',
			'active' => '@portfolio/project*'
		],

		'portfolio: project' => [
			'label' => 'Projects',
			'parent' => 'portfolio',
			'url' => '@portfolio/project',
			'access' => 'portfolio: manage portfolio',
			'active' => '@portfolio/project*'
		],

		'portfolio: settings' => [
			'label' => 'Settings',
			'parent' => 'portfolio',
			'url' => '@portfolio/settings',
			'access' => 'portfolio: manage settings',
			'active' => '@portfolio/settings*'
		]

	],

	'permissions' => [

		'portfolio: manage portfolio' => [
			'title' => 'Manage portfolio'
		],

		'portfolio: manage settings' => [
			'title' => 'Manage settings'
		]

	],

	'settings' => '@portfolio/settings',

	'config' => [
		'portfolio_title' => 'My portfolio',
		'portfolio_text' => '<p>This is an overview of my latest projects.</p>',
		'portfolio_image' => '',
		'projects_per_page' => 20,
		'portfolio_image_align' => 'left',
		'columns' => 1,
		'columns_small' => 2,
		'columns_medium' => '',
		'columns_large' => 4,
		'columns_xlarge' => 6,
		'columns_gutter' => 20,
		'filter_tags' => true,
		'teaser' => [
			'show_subtitle' => true,
			'show_intro' => true,
			'show_image' => true,
			'show_client' => true,
			'show_tags' => true,
			'show_date' => true,
			'show_data' => true,
			'show_readmore' => true,
			'show_title' => true,
			'panel_style' => 'uk-panel-box',
			'panel_align' => '',
			'tags_align' => 'uk-flex-center',
			'title_size' => 'uk-h3',
			'read_more' => 'Read more',
			'read_more_style' => 'uk-button',
			'thumbsize' => ['width' => 400, 'height' => ''],
			'columns' => 1,
			'columns_small' => 2,
			'columns_medium' => '',
			'columns_large' => 4,
			'columns_xlarge' => 6,
			'columns_gutter' => 20
		],
		'project' => [
			'image_align' => 'left',
			'metadata_position' => 'content-top',
			'tags_align' => 'uk-flex-center',
			'tags_position' => 'sidebar',
			'show_navigation' => 'bottom',
			'thumbsize' => ['width' => 400, 'height' => ''],
			'overlay_title_size' => 'uk-h3',
			'overlay' => 'uk-overlay uk-overlay-hover',
			'overlay_position' => '',
			'overlay_effect' => 'uk-overlay-fade',
			'overlay_image_effect' => 'uk-overlay-scale',
			'columns' => 1,
			'columns_small' => 2,
			'columns_medium' => '',
			'columns_large' => 4,
			'columns_xlarge' => 6,
			'columns_gutter' => 20
		],
		'date_format' => 'F Y',
		'markdown' => true,
		'datafields' => []
		],

	'events' => [

		'boot' => function ($event, $app) {
			$app->subscribe(
				new RouteListener
			);
			$app->extend('view', function ($view) use ($app) {
				return $view->addHelper(new PortfolioImageHelper($app));
			});
			//todo event to clear cache?
		},

		'view.scripts' => function ($event, $scripts) use ($app) {

			$scripts->register('uikit-grid', 'app/assets/uikit/js/components/grid.min.js', 'uikit');
			$scripts->register('uikit-lightbox', 'app/assets/uikit/js/components/lightbox.min.js', 'uikit');
			$scripts->register('node-portfolio', 'portfolio:app/bundle/node-portfolio.js', '~site-edit');
		},

        'console.init' => function ($event, $console) {

			$console->add(new \Pagekit\Portfolio\Console\Commands\PortfolioTranslateCommand());

		}
	]

];
