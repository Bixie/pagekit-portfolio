<?php

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

    },

    'uninstall' => function ($app) {

        $util = $app['db']->getUtility();

        if ($util->tableExists('@portfolio_project')) {
            $util->dropTable('@portfolio_project');
        }

		// remove the config
		$app['config']->remove('bixie/portfolio');

	},

	'updates' => [

		'1.1.0' => function ($app) {
			//convert config to new module name
			$app['config']->set('bixie/portfolio', $app->config('portfolio')->toArray());
			$app['config']->remove('portfolio');
		}

	]

];