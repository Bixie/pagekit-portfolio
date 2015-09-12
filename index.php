<?php

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
				'Pagekit\\Portfolio\\Controller\\ProjectApiController'
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
		'portfolio' => [
			'show_title' => true,
			'show_sub' => true,
			'show_intro' => true,
			'show_content' => false,
			'show_image' => false,
			'show_date' => true,
		],
		'project' => [
			'show_title' => true,
			'show_sub' => true,
			'show_intro' => true,
			'show_content' => true,
			'show_image' => true,
			'show_date' => true,
			'show_data' => true,
		],
		'markdown' => true,
		'projects_per_page' => 20
	],

	'events' => [

		'boot' => function ($event, $app) {

		},

		'view.scripts' => function ($event, $scripts) use ($app) {

			$scripts->register('node-portfolio', 'portfolio:app/bundle/node-portfolio.js', '~site-edit');
		},

        'console.init' => function ($event, $console) {

			$console->add(new \Pagekit\Portfolio\Console\Commands\PortfolioTranslateCommand());

		}
	]

];
