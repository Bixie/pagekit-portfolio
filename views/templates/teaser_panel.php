<?php
/**
 * @var $view
 * @var array $config
 * @var array|null $teaser_config
 * @var Bixie\Portfolio\Model\Project $project
 */
$teaser_config = !empty($teaser_config) ? $teaser_config : $config['teaser'];
?>
<div data-uk-filter="<?= implode(',', $project->tags) ?>">
	<div class="uk-panel <?= $teaser_config['panel_style'] ?> uk-text-<?= $teaser_config['content_align'] ?>">

		<?php if ($teaser_config['show_image']) : ?>
			<div class="uk-panel-teaser">
                <?php if ($teaser_config['link_image']) : ?>
                    <a href="<?= $app->url('@portfolio/id', ['id' => $project->id]) ?>">
                <?php endif; ?>
				<img src="<?= $project->image['teaser']['src'] ?>" alt="<?= $project->image['teaser']['alt'] ?>">
                <?php if ($teaser_config['link_image']) : ?>
                    </a>
                <?php endif; ?>
			</div>
		<?php endif; ?>

		<?php if ($teaser_config['show_title']) : ?>
			<h3 class="<?= $teaser_config['title_size'] ?>">
                <a class="uk-link-reset <?= $teaser_config['title_color'] ?>"
                   href="<?= $app->url('@portfolio/id', ['id' => $project->id]) ?>"><?= $project->title ?></a>
            </h3>
		<?php endif; ?>

		<?php if ($teaser_config['show_subtitle']) : ?>
			<p class="uk-article-lead"><?= $project->subtitle ?></p>
		<?php endif; ?>

		<?php if ($teaser_config['show_date'] || $teaser_config['show_client']) : ?>
			<p class="uk-article-meta">
				<?php if ($teaser_config['show_date']) : ?>
					<?= $project->date->format($config['date_format']) ?>
				<?php endif; ?>
				<?php if ($teaser_config['show_date'] && $teaser_config['show_client']) : ?>
					<span class="uk-text-muted"> | </span>
				<?php endif; ?>
				<?php if ($teaser_config['show_client']) : ?>
					<?= $project->client ?>
				<?php endif; ?>
			</p>
		<?php endif; ?>

		<?php if ($teaser_config['show_intro']) : ?>
			<?= $project->intro ?>
		<?php endif; ?>

		<?php if ($teaser_config['show_tags']) : ?>
			<div class="uk-flex uk-flex-wrap uk-margin <?= $teaser_config['tags_align'] ?>" data-uk-margin="">
				<?php foreach ($project->tags as $tag) : ?>
					<div class="uk-badge uk-margin-small-right"><?= $tag ?></div>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>

		<?php if ($teaser_config['show_thumbs']) : ?>
			<ul class="uk-thumbnav  <?= $config['grid_teaser'] ?>">
				<?php foreach ($project->images as $image) :
					if (empty($image['show_teaser'])) continue;?>
					<li><a href="<?= $image['src'] ?>" title="<?= $image['title'] ?>"
						   data-uk-lightbox="{group:'project-<?= $project->id ?>'}">
							<img src="<?= $view->portfolioimage('url', [$image, $teaser_config['thumbsize']]) ?>"
                                 alt="<?= $image['title'] ?>"></a></li>
				<?php endforeach; ?>
			</ul>
		<?php endif; ?>

		<?php if ($teaser_config['show_readmore']) : ?>
			<div class="<?= $teaser_config['readmore_align']; ?>">
				<a class="<?= $teaser_config['read_more_style'] ?>"
				   href="<?= $app->url('@portfolio/id', ['id' => $project->id]) ?>">
					<?= $teaser_config['read_more'] ?></a>
			</div>
		<?php endif; ?>

	</div>

</div>
