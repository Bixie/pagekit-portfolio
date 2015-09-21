<?php
/**
 * @var $view
 * @var array $config
 * @var Bixie\Portfolio\Model\Project $project
 */
?>
<div data-uk-filter="<?= implode(',', $project->tags) ?>">
	<div class="uk-panel <?= $config['teaser']['panel_style'] ?> uk-text-<?= $config['teaser']['content_align'] ?>">

		<?php if ($config['teaser']['show_image']) : ?>
			<div class="uk-panel-teaser">
				<img src="<?= $project->image['teaser']['src'] ?>" alt="<?= $project->image['teaser']['alt'] ?>">
			</div>
		<?php endif; ?>

		<?php if ($config['teaser']['show_title']) : ?>
			<h3 class="<?= $config['teaser']['title_size'] ?>"><a class="uk-link-reset <?= $config['teaser']['title_color'] ?>" href="<?= $app->url('@portfolio/id', ['id' => $project->id]) ?>"><?= $project->title ?></a></h3>
		<?php endif; ?>

		<?php if ($config['teaser']['show_subtitle']) : ?>
			<p class="uk-article-lead"><?= $project->subtitle ?></p>
		<?php endif; ?>

		<?php if ($config['teaser']['show_date'] || $config['teaser']['show_client']) : ?>
			<p class="uk-article-meta">
				<?php if ($config['teaser']['show_date']) : ?>
					<?= $project->date->format($config['date_format']) ?>
				<?php endif; ?>
				<?php if ($config['teaser']['show_date'] && $config['teaser']['show_client']) : ?>
					<span class="uk-text-muted"> | </span>
				<?php endif; ?>
				<?php if ($config['teaser']['show_client']) : ?>
					<?= $project->client ?>
				<?php endif; ?>
			</p>
		<?php endif; ?>

		<?php if ($config['teaser']['show_intro']) : ?>
			<?= $project->intro ?>
		<?php endif; ?>

		<?php if ($config['teaser']['show_tags']) : ?>
			<div class="uk-flex uk-flex-wrap uk-margin <?= $config['teaser']['tags_align'] ?>" data-uk-margin="">
				<?php foreach ($project->tags as $tag) : ?>
					<div class="uk-badge uk-margin-small-right"><?= $tag ?></div>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>

		<?php if ($config['teaser']['show_thumbs']) : ?>
			<ul class="uk-thumbnav  <?= $config['grid_teaser'] ?>">
				<?php foreach ($project->images as $image) :
					if (empty($image['show_teaser'])) continue;?>
					<li><a href="<?= $image['src'] ?>" title="<?= $image['title'] ?>"
						   data-uk-lightbox="{group:'project-<?= $project->id ?>'}">
							<img src="<?= $view->portfolioimage('url', [$image, $config['teaser']['thumbsize']]) ?>" alt="<?= $image['title'] ?>"></a></li>
				<?php endforeach; ?>
			</ul>
		<?php endif; ?>

		<?php if ($config['teaser']['show_readmore']) : ?>
			<div class="<?= $config['teaser']['readmore_align']; ?>">
				<a class="<?= $config['teaser']['read_more_style'] ?>"
				   href="<?= $app->url('@portfolio/id', ['id' => $project->id]) ?>">
					<?= $config['teaser']['read_more'] ?></a>
			</div>
		<?php endif; ?>

	</div>

</div>
