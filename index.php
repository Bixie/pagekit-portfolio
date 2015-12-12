<?php

use Pagekit\Application as App;
use Bixie\Portfolio\Event\RouteListener;
use Bixie\Portfolio\PortfolioImageHelper;

return [

	'name' => 'bixie/portfolio',

	'type' => 'extension',

	'main' => 'Bixie\\Portfolio\\PortfolioModule',

	'autoload' => [

		'Bixie\\Portfolio\\' => 'src'

	],

	'nodes' => [

		'portfolio' => [
			'name' => '@portfolio',
			'label' => 'Portfolio',
			'controller' => 'Bixie\\Portfolio\\Controller\\SiteController',
			'protected' => true,
			'frontpage' => true
		]

	],

	'routes' => [

		'/portfolio' => [
			'name' => '@portfolio',
			'controller' => [
				'Bixie\\Portfolio\\Controller\\PortfolioController'
			]
		],
		'/api/portfolio' => [
			'name' => '@portfolio/api',
			'controller' => [
				'Bixie\\Portfolio\\Controller\\ProjectApiController',
				'Bixie\\Portfolio\\Controller\\ImageApiController'
			]
		]

	],

	'resources' => [

		'bixie/portfolio:' => ''

	],

	'menu' => [

		'portfolio' => [
			'label' => 'Portfolio',
			'icon' => 'bixie/portfolio:icon.svg',
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
			'show_title' => true,
			'show_subtitle' => true,
			'show_intro' => true,
			'show_image' => true,
			'show_client' => true,
			'show_tags' => true,
			'show_date' => true,
			'show_data' => true,
			'show_readmore' => true,
			'show_thumbs' => true,
			'template' => 'panel',
			'panel_style' => 'uk-panel-box',
			'overlay' => 'uk-overlay uk-overlay-hover',
			'overlay_position' => '',
			'overlay_effect' => 'uk-overlay-fade',
			'overlay_image_effect' => 'uk-overlay-scale',
			'content_align' => 'left',
			'tags_align' => 'uk-flex-center',
			'title_size' => 'uk-h3',
			'title_color' => '',
			'read_more' => 'Read more',
			'read_more_style' => 'uk-button',
			'readmore_align' => 'uk-text-center',
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
		'cache_path' => str_replace(App::path(), '', App::get('path.cache') . '/portfolio'),
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
		},

        'console.init' => function ($event, $console) {

			$console->add(new Bixie\Portfolio\Console\Commands\TranslateCommand());

		}
	]

];
