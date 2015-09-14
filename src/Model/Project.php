<?php

namespace Pagekit\Portfolio\Model;

use Pagekit\Application as App;
use Pagekit\System\Model\DataModelTrait;

/**
 * @Entity(tableClass="@portfolio_project")
 */
class Project implements \JsonSerializable
{
    use  DataModelTrait, ProjectModelTrait;

    /** @Column(type="integer") @Id */
    public $id;

    /** @Column(type="integer") */
    public $priority;

    /** @Column(type="string") */
    public $title;

    /** @Column(type="string") */
    public $slug;

	/** @Column(type="string") */
	public $subtitle;

	/** @Column(type="text") */
	public $intro = '';

	/** @Column(type="text") */
    public $content = '';

	/** @Column(type="json_array") */
	public $image;

	/** @Column(type="text") */
    public $client = '';

	/** @Column(type="datetime") */
	public $date;

	/** @Column(type="simple_array") */
	public $tags;

	/** @Column(type="json_array") */
	public $images;

	public static function allTags () {
		//todo cache this
		$tags = [];
		foreach (self::findAll() as $project) {
			if (is_array($project->tags)) {
				$tags = array_merge($tags, $project->tags);
			}
		}
		$tags = array_unique($tags);
		natsort($tags);
		return $tags;
	}

	public static function getPrevious ($project) {
		return self::where(['date > ?'], [$project->date])->orderBy('date', 'ASC')->first();
	}

	public static function getNext ($project) {
		return self::where(['date < ?'], [$project->date])->orderBy('date', 'DESC')->first();
	}
    /**
     * {@inheritdoc}
     */
    public function jsonSerialize()
    {
        $data = [
            'url' => App::url('@portfolio/id', ['id' => $this->id ?: 0], 'base')
        ];

        return $this->toArray($data);
    }
}
