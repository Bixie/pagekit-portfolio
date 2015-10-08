<?php

namespace Bixie\Portfolio\Model;

use Pagekit\Application as App;
use Pagekit\System\Model\DataModelTrait;

/**
 * @Entity(tableClass="@portfolio_project")
 */
class Project implements \JsonSerializable
{
    use DataModelTrait, ProjectModelTrait;

	/* Project published. */
	const STATUS_PUBLISHED = 1;

	/* Project unpublished. */
	const STATUS_UNPUBLISHED = 0;

	/** @Column(type="integer") @Id */
    public $id;

    /** @Column(type="integer") */
    public $status;

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

	public static function getStatuses () {
		return [
			self::STATUS_PUBLISHED => __('Published'),
			self::STATUS_UNPUBLISHED => __('Unpublished')
		];
	}

	public function getStatusText () {
		$statuses = self::getStatuses();

		return isset($statuses[$this->status]) ? $statuses[$this->status] : __('Unknown');
	}


	public static function getPrevious ($project) {
		return self::where(['date > ?', 'date < ?', 'status = 1'], [$project->date, new \DateTime])->orderBy('date', 'ASC')->first();
	}

	public static function getNext ($project) {
		return self::where(['date < ?', 'status = 1'], [$project->date])->orderBy('date', 'DESC')->first();
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
