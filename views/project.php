<?php
/**
 * @var $view
 * @var array $config
 * @var Pagekit\Module\Module $portfolio
 * @var Pagekit\Portfolio\Model\Project $project
 */

$view->script('portfolio', 'portfolio:app/bundle/portfolio.js', ['uikit-lightbox']);

// Grid
$grid  = 'uk-grid-width-1-'.$config['project']['columns'];
$grid .= $config['project']['columns_small'] ? ' uk-grid-width-small-1-'.$config['project']['columns_small'] : '';
$grid .= $config['project']['columns_medium'] ? ' uk-grid-width-medium-1-'.$config['project']['columns_medium'] : '';
$grid .= $config['project']['columns_large'] ? ' uk-grid-width-large-1-'.$config['project']['columns_large'] : '';
$grid .= $config['project']['columns_xlarge'] ? ' uk-grid-width-xlarge-1-'.$config['project']['columns_xlarge'] : '';


?>
<article id="portfolio-project">

	<h1 class="uk-article-title"><?= $project->title ?></h1>

	<?php if (!empty($project->subtitle)) : ?>
		<p class="uk-article-lead"><?= $project->subtitle ?></p>
	<?php endif; ?>

	<?php if (!empty($project->date) || !empty($project->client)) : ?>
		<p class="uk-article-meta">
			<?php if (!empty($project->date)) : ?>
				<?= $project->date->format($config['date_format']) ?>
			<?php endif; ?>
			<?php if (!empty($project->date) && !empty($project->client)) : ?>
				<span class="uk-text-muted"> | </span>
			<?php endif; ?>
			<?php if (!empty($project->client)) : ?>
				<?= $project->client ?>
			<?php endif; ?>
		</p>
	<?php endif; ?>

	<div class="uk-clearfix">

		<?php if (isset($project->image['main']['src'])): ?>
			<div class="uk-align-<?= $config['project']['image_align'] ?>">
				<img src="<?= $project->image['main']['src'] ?>" alt="<?= $project->image['main']['alt'] ?>">
			</div>
		<?php endif; ?>

		<?= $project->content ?>

	</div>

	<?php if (count($project->tags)) : ?>
		<div class="uk-flex uk-flex-wrap uk-margin <?= $config['project']['tags_align'] ?>" data-uk-margin="">
			<?php foreach ($project->tags as $tag) : ?>
				<div class="uk-badge uk-margin-small-right"><?= $tag ?></div>
			<?php endforeach; ?>
		</div>
	<?php endif; ?>

	<div class="uk-margin uk-grid uk-grid-small <?= $grid ?>" data-uk-grid-margin="">
		<?php foreach ($project->images as $image) : ?>
			<div>
					<figure class="<?= $config['project']['overlay'] ?>">
						<img src="<?= $image['src'] ?>" alt="<?= $image['title'] ?>"
							 class="<?= $config['project']['overlay_image_effect'] ?>">
						<?php if (!empty($config['project']['overlay'])): ?>
						<div class="uk-overlay-panel uk-overlay-background uk-flex uk-flex-center uk-flex-middle uk-text-center <?= $config['project']['overlay_position'] ?> <?= $config['project']['overlay_effect'] ?>">
							<div>
								<?php if (!empty($image['title'])): ?>
									<h3 class="<?= $config['project']['overlay_title_size'] ?>"><?= $image['title'] ?></h3>
								<?php endif; ?>
								<?php if (!empty($image['descr'])): ?>
									<p><?= $image['descr'] ?></p>
								<?php endif; ?>
							</div>
						</div>
						<?php endif; ?>
						<a class="uk-position-cover" href="<?= $image['src'] ?>" data-uk-lightbox="{group: 'project-<?= $project->id ?>'}"></a>
					</figure>

			</div>
		<?php endforeach; ?>
	</div>

</article>

