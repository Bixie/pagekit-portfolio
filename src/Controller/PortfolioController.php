<?php

namespace Pagekit\Portfolio\Controller;

use Pagekit\Application as App;
use Pagekit\Portfolio\Model\Project;

/**
 * @Access(admin=true)
 */
class PortfolioController
{
    /**
     * @Access("portfolio: manage portfolio")
     * @Request({"filter": "array", "page":"int"})
     */
    public function projectAction($filter = null, $page = 0)
    {
        return [
            '$view' => [
                'title' => __('Portfolio'),
                'name'  => 'portfolio:views/admin/portfolio.php'
            ],
            '$data' => [
                'config'   => [
                    'filter' => $filter,
                    'page'   => $page
                ]
            ]
        ];
    }

    /**
     * @Route("/project/edit", name="project/edit")
     * @Access("portfolio: manage portfolio")
     * @Request({"id": "int"})
     */
    public function editAction($id = 0)
    {
        try {

            if (!$project = Project::where(compact('id'))->first()) {

                if ($id) {
                    App::abort(404, __('Invalid project id.'));
                }

				$module = App::module('portfolio');

				$project = Project::create([
					'date' => new \DateTime()
				]);

				$project->set('markdown', $module->config('markdown'));

			}


            return [
                '$view' => [
                    'title' => $id ? __('Edit Project') : __('Add Project'),
                    'name'  => 'portfolio:views/admin/project.php'
                ],
                '$data' => [
                    'project'  => $project,
                    'tags'     => Project::allTags()
                ],
                'project' => $project
            ];

        } catch (\Exception $e) {

            App::message()->error($e->getMessage());

            return App::redirect('@portfolio/post');
        }
    }

    /**
     * @Access("system: manage settings")
     */
    public function settingsAction()
    {
        return [
            '$view' => [
                'title' => __('Portfolio Settings'),
                'name'  => 'portfolio:views/admin/settings.php'
            ],
            '$data' => [
                'config' => App::module('portfolio')->config()
            ]
        ];
    }
}
