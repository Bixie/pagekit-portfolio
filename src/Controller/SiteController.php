<?php

namespace Pagekit\Portfolio\Controller;

use Pagekit\Application as App;
use Pagekit\Module\Module;
use Pagekit\Blog\Model\Post;

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
        $this->portfolio = App::module('portfolio');
    }

    /**
     * @Route("/")
     * @Route("/page/{page}", name="page", requirements={"page" = "\d+"})
     */
    public function indexAction($page = 1)
    {
        if (!App::node()->hasAccess(App::user())) {
            App::abort(403, __('Insufficient User Rights.'));
        }

        $query = Post::where(['status = ?', 'date < ?'], [Post::STATUS_PUBLISHED, new \DateTime])->where(function ($query) {
            return $query->where('roles IS NULL')->whereInSet('roles', App::user()->roles, false, 'OR');
        })->related('user');

        if (!$limit = $this->blog->config('posts.posts_per_page')) {
            $limit = 10;
        }

        $count = $query->count('id');
        $total = ceil($count / $limit);
        $page = max(1, min($total, $page));

        $query->offset(($page - 1) * $limit)->limit($limit)->orderBy('date', 'DESC');

        foreach ($posts = $query->get() as $post) {
            $post->excerpt = App::content()->applyPlugins($post->excerpt, ['post' => $post, 'markdown' => $post->get('markdown')]);
            $post->content = App::content()->applyPlugins($post->content, ['post' => $post, 'markdown' => $post->get('markdown'), 'readmore' => true]);
        }

        return [
            '$view' => [
                'title' => __('Blog'),
                'name' => 'portfolio/portfolio.php',
                'link:feed' => [
                    'rel' => 'alternate',
                    'href' => App::url('@blog/feed'),
                    'title' => App::module('system/site')->config('title'),
                    'type' => App::feed()->create($this->blog->config('feed.type'))->getMIMEType()
                ]
            ],
            'blog' => $this->blog,
            'posts' => $posts,
            'total' => $total,
            'page' => $page
        ];
    }

    /**
     * @Route("/{id}", name="id")
     */
    public function projectAction($id = 0)
    {
        if (!$project = Post::where(['id = ?', 'status = ?', 'date < ?'], [$id, Post::STATUS_PUBLISHED, new \DateTime])->related('user')->first()) {
            App::abort(404, __('Post not found!'));
        }

        if (!$project->hasAccess(App::user())) {
            App::abort(403, __('Insufficient User Rights.'));
        }

        $project->intro = App::content()->applyPlugins($project->intro, ['project' => $project, 'markdown' => $project->get('markdown')]);
        $project->content = App::content()->applyPlugins($project->content, ['project' => $project, 'markdown' => $project->get('markdown')]);

        return [
            '$view' => [
                'title' => __($project->title),
                'name' => 'portfolio/project.php'
            ],
            'portfolio' => $this->portfolio,
            'project' => $project
        ];
    }
}
