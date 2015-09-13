<?php
use Pagekit\Site\Model\Node;

return [

    'install' => function ($app) {

		$util = $app['db']->getUtility();

		if ($util->tableExists('@portfolio_project') === false) {
			$util->createTable('@portfolio_project', function ($table) {
				$table->addColumn('id', 'integer', ['unsigned' => true, 'length' => 10, 'autoincrement' => true]);
				$table->addColumn('priority', 'integer', ['default' => 0]);
				$table->addColumn('title', 'string', ['length' => 255]);
				$table->addColumn('slug', 'string', ['length' => 255]);
				$table->addColumn('subtitle', 'string', ['length' => 255, 'notnull' => false]);
				$table->addColumn('intro', 'text', ['notnull' => false]);
				$table->addColumn('content', 'text', ['notnull' => false]);
				$table->addColumn('client', 'string', ['length' => 255, 'notnull' => false]);
				$table->addColumn('image', 'json_array', ['length' => 255, 'notnull' => false]);
				$table->addColumn('date', 'datetime');
				$table->addColumn('tags', 'simple_array', ['notnull' => false]);
				$table->addColumn('images', 'json_array', ['notnull' => false]);
				$table->addColumn('data', 'json_array', ['notnull' => false]);
				$table->setPrimaryKey(['id']);
			});
		}
		//temp fix trigger install node
		$nodes = [

			'portfolio' => [
				'name' => '@portfolio',
				'label' => 'Portfolio',
				'controller' => 'Pagekit\\Portfolio\\Controller\\SiteController',
				'protected' => true,
				'frontpage' => true
			]

		];
		foreach ($nodes as $type => $route) {
			if (isset($route['protected']) and $route['protected'] and !Node::where(['type = ?'], [$type])->first()) {
				Node::create([
					'title' => $route['label'],
					'slug' => $app->filter($route['label'], 'slugify'),
					'type' => $type,
					'status' => 1,
					'link' => $route['name']
				])->save();
			}
		}

    },

    'uninstall' => function ($app) {

        $util = $app['db']->getUtility();

        if ($util->tableExists('@portfolio_project')) {
            $util->dropTable('@portfolio_project');
        }

		// remove the config
		$app['config']->remove('portfolio');

	}

];