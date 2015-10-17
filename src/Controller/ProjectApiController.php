<?php

namespace Bixie\Portfolio\Controller;

use Pagekit\Application as App;
use Bixie\Portfolio\Model\Project;

/**
 * @Access("portfolio: manage portfolio")
 * @Route("project", name="project")
 */
class ProjectApiController
{
    /**
     * @Route("/", methods="GET")
     * @Request({"filter": "array", "page":"int"})
     */
    public function indexAction($filter = [], $page = 0)
    {
        $query  = Project::query();
        $filter = array_merge(array_fill_keys(['search', 'status', 'order', 'limit'], ''), $filter);

        extract($filter, EXTR_SKIP);

        if ($search) {
            $query->where(function ($query) use ($search) {
                $query->orWhere(['title LIKE :search', 'slug LIKE :search'], ['search' => "%{$search}%"]);
            });
        }

		if (is_numeric($status)) {
			$query->where(['status' => (int) $status]);
		}

		if (!preg_match('/^(date|title|status)\s(asc|desc)$/i', $order, $order)) {
            $order = [1 => 'date', 2 => 'desc'];
        }

        $limit = (int) $limit ?: App::module('bixie/portfolio')->config('projects_per_page');
        $count = $query->count();
        $pages = ceil($count / $limit);
        $page  = max(0, min($pages - 1, $page));

        $projects = array_values($query->offset($page * $limit)->limit($limit)->orderBy($order[1], $order[2])->get());

        return compact('projects', 'pages', 'count');
    }

    /**
     * @Route("/{id}", methods="GET", requirements={"id"="\d+"})
     */
    public function getAction($id)
    {
        return Project::where(compact('id'))->first();
    }

    /**
     * @Route("/", methods="POST")
     * @Route("/{id}", methods="POST", requirements={"id"="\d+"})
     * @Request({"project": "array", "id": "int"}, csrf=true)
     */
    public function saveAction($data, $id = 0)
    {
        if (!$id || !$project = Project::find($id)) {

            if ($id) {
                App::abort(404, __('Project not found.'));
            }

			$project = Project::create();
        }

        if (!$data['slug'] = App::filter($data['slug'] ?: $data['title'], 'slugify')) {
            App::abort(400, __('Invalid slug.'));
        }


		$project->save($data);

        return ['message' => 'success', 'project' => $project];
    }

    /**
     * @Route("/{id}", methods="DELETE", requirements={"id"="\d+"})
     * @Request({"id": "int"}, csrf=true)
     */
    public function deleteAction($id)
    {
        if ($project = Project::find($id)) {

            if(!App::user()->hasAccess('portfolio: manage portfolio')) {
                return ['error' => __('Access denied.')];
            }

			$project->delete();
        }

        return ['message' => 'success'];
    }

    /**
     * @Route("/bulk", methods="POST")
     * @Request({"projects": "array"}, csrf=true)
     */
    public function bulkSaveAction($projects = [])
    {
        foreach ($projects as $data) {
            $this->saveAction($data, isset($data['id']) ? $data['id'] : 0);
        }

        return ['message' => 'success'];
    }

    /**
     * @Route("/bulk", methods="DELETE")
     * @Request({"ids": "array"}, csrf=true)
     */
    public function bulkDeleteAction($ids = [])
    {
        foreach (array_filter($ids) as $id) {
            $this->deleteAction($id);
        }

        return ['message' => 'success'];
    }
}
