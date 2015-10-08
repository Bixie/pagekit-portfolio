<?php

namespace Bixie\Portfolio\Controller;

use Pagekit\Application as App;
use Pagekit\Module\Module;
use Bixie\Portfolio\Model\Project;

class SiteController
{
    /**
     * @var Module
     */
    protected $portfolio;

    /**
     * Constructor.
     */
    public function __construct()
    {
        $this->portfolio = App::module('bixie/portfolio');
    }

    /**
     * @Route("/")
     */
    public function indexAction()
    {
        if (!App::node()->hasAccess(App::user())) {
            App::abort(403, __('Insufficient User Rights.'));
        }

        $query = Project::where(['date < ?', 'status = 1'], [new \DateTime])->orderBy('date', 'DESC');

		$portfolio_text = '';
		if ($this->portfolio->config('portfolio_text')) {
			$portfolio_text = App::content()->applyPlugins($this->portfolio->config('portfolio_text'), ['markdown' => $this->portfolio->config('markdown_enabled')]);;
		}

		foreach ($projects = $query->get() as $project) {
			$project->intro = App::content()->applyPlugins($project->intro, ['project' => $project, 'markdown' => $project->get('markdown')]);
			$project->content = App::content()->applyPlugins($project->content, ['project' => $project, 'markdown' => $project->get('markdown'), 'readmore' => true]);
        }

        return [
            '$view' => [
                'title' => $this->portfolio->config('portfolio_title') ?: App::node()->title,
                'name' => 'bixie/portfolio/portfolio.php'
            ],
			'tags' => Project::allTags(),
      		'portfolio' => $this->portfolio,
			'config' => $this->portfolio->config(),
			'portfolio_text' => $portfolio_text,
            'projects' => $projects,
			'node' => App::node()
        ];
    }

    /**
     * @Route("/{id}", name="id")
     */
    public function projectAction($id = 0)
    {
        if (!$project = Project::where(['id = ?', 'date < ?', 'status = 1'], [$id, new \DateTime])->first()) {
            App::abort(404, __('Project not found.'));
        }

        $project->intro = App::content()->applyPlugins($project->intro, ['project' => $project, 'markdown' => $project->get('markdown')]);
        $project->content = App::content()->applyPlugins($project->content, ['project' => $project, 'markdown' => $project->get('markdown')]);

		$previous = Project::getPrevious($project);
		$next = Project::getNext($project);

        return [
            '$view' => [
                'title' => __($project->title),
                'name' => 'bixie/portfolio/project.php'
            ],
            'portfolio' => $this->portfolio,
			'config' => $this->portfolio->config(),
			'previous' => $previous,
			'next' => $next,
			'project' => $project,
			'node' => App::node()
        ];
    }
}
