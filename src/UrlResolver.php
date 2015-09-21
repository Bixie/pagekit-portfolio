<?php

namespace Bixie\Portfolio;

use Pagekit\Application as App;
use Bixie\Portfolio\Model\Project;
use Pagekit\Routing\ParamsResolverInterface;
use Symfony\Component\Routing\Exception\RouteNotFoundException;

class UrlResolver implements ParamsResolverInterface
{
	const CACHE_KEY = 'bixie.portfolio.routing';

	/**
	 * @var bool
	 */
	protected $cacheDirty = false;

	/**
	 * @var array
	 */
	protected $cacheEntries;

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->cacheEntries = App::cache()->fetch(self::CACHE_KEY) ?: [];
	}

	/**
	 * {@inheritdoc}
	 */
	public function match(array $parameters = [])
	{
		if (isset($parameters['id'])) {
			return $parameters;
		}

		if (!isset($parameters['slug'])) {
			App::abort(404, 'Project not found.');
		}

		$slug = $parameters['slug'];

		$id = false;
		foreach ($this->cacheEntries as $entry) {
			if ($entry['slug'] === $slug) {
				$id = $entry['id'];
			}
		}

		if (!$id) {

			if (!$project = Project::where(compact('slug'))->first()) {
				App::abort(404, 'Project not found.');
			}

			$this->addCache($project);
			$id = $project->id;
		}

		$parameters['id'] = $id;
		return $parameters;
	}

	/**
	 * {@inheritdoc}
	 */
	public function generate(array $parameters = [])
	{
		$id = $parameters['id'];

		if (!isset($this->cacheEntries[$id])) {

			if (!$project = Project::where(compact('id'))->first()) {
				throw new RouteNotFoundException('Project not found.');
			}

			$this->addCache($project);
		}

		$meta = $this->cacheEntries[$id];

		$parameters['slug'] = $meta['slug'];

		unset($parameters['id']);
		return $parameters;
	}

	public function __destruct()
	{
		if ($this->cacheDirty) {
			App::cache()->save(self::CACHE_KEY, $this->cacheEntries);
		}
	}

	protected function addCache($project)
	{
		$this->cacheEntries[$project->id] = [
			'id'     => $project->id,
			'slug'   => $project->slug,
			'year'   => $project->date->format('Y'),
			'month'  => $project->date->format('m'),
			'day'    => $project->date->format('d'),
			'hour'   => $project->date->format('H'),
			'minute' => $project->date->format('i'),
			'second' => $project->date->format('s'),
		];

		$this->cacheDirty = true;
	}
}
