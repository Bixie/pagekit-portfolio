<?php
/**
 * @var $view
 * @var array $config
 * @var Pagekit\Module\Module $portfolio
 * @var Bixie\Portfolio\Model\Project $project
 * @var Bixie\Portfolio\Model\Project|null $previous
 * @var Bixie\Portfolio\Model\Project|null $next
 */

$view->script('portfolio', 'bixie/portfolio:app/bundle/portfolio.js', ['uikit-lightbox']);

// Grid
$grid  = 'uk-grid-width-1-'.$config['project']['columns'];
$grid .= $config['project']['columns_small'] ? ' uk-grid-width-small-1-'.$config['project']['columns_small'] : '';
$grid .= $config['project']['columns_medium'] ? ' uk-grid-width-medium-1-'.$config['project']['columns_medium'] : '';
$grid .= $config['project']['columns_large'] ? ' uk-grid-width-large-1-'.$config['project']['columns_large'] : '';
$grid .= $config['project']['columns_xlarge'] ? ' uk-grid-width-xlarge-1-'.$config['project']['columns_xlarge'] : '';

$config['project_sidebar'] = ($config['project']['tags_position'] == 'sidebar'
									|| $config['project']['metadata_position'] == 'sidebar'
									|| count($config['datafields']));

$config['project_image_class'] = in_array($config['project']['image_align'], ['right', 'left']) ? 'uk-align-' . $config['project']['image_align'] : 'uk-text-center'
?>
<article id="portfolio-project">

	<?php if (in_array($config['project']['show_navigation'], ['both', 'top']) && ($next || $previous)) : ?>
		<ul class="uk-pagination">
			<?php if ($previous) : ?>
				<li class="uk-pagination-previous"><a href="<?= $app->url('@portfolio/id', ['id' => $previous->id]) ?>">
						<i class="uk-icon-arrow-left uk-margin-small-right"></i><?= $previous->title ?></a></li>
			<?php endif; ?>
			<?php if ($next) : ?>
				<li class="uk-pagination-next"><a href="<?= $app->url('@portfolio/id', ['id' => $next->id]) ?>">
						<?= $next->title ?><i class="uk-icon-arrow-right uk-margin-small-left"></i></a></li>
			<?php endif; ?>
		</ul>
	<?php endif; ?>

	<h1 class="uk-article-title"><?= $project->title ?></h1>

	<?php if (!empty($project->subtitle)) : ?>
		<p class="uk-article-lead"><?= $project->subtitle ?></p>
	<?php endif; ?>

	<?php if ($config['project_sidebar']) : ?>

		<div class="uk-grid" data-uk-grid-margin="">
			<div class="uk-width-medium-3-4">

	<?php endif; ?>

	<?php if ($config['project']['metadata_position'] == 'content-top' && (!empty($project->date) || !empty($project->client))) : ?>
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
			<div class="<?= $config['project_image_class'] ?>">
				<img src="<?= $project->image['main']['src'] ?>" alt="<?= $project->image['main']['alt'] ?>">
			</div>
		<?php endif; ?>

		<?= $project->content ?>

	</div>

	<?php if ($config['project']['tags_position'] == 'content-bottom' && count($project->tags)) : ?>
		<div class="uk-flex uk-flex-wrap uk-margin <?= $config['project']['tags_align'] ?>" data-uk-margin="">
			<?php foreach ($project->tags as $tag) : ?>
				<div class="uk-badge uk-margin-small-right"><?= $tag ?></div>
			<?php endforeach; ?>
		</div>
	<?php endif; ?>

<?php if ($config['project_sidebar']) : ?>

			</div>
			<div class="uk-width-medium-1-4">
				<div class="uk-panel uk-panel-box">

					<?php if ($config['project']['metadata_position'] == 'sidebar' && (!empty($project->date) || !empty($project->client))) : ?>
							<?php if (!empty($project->date)) : ?>
								<dl class="uk-description-list">
									<dt><?= __('Date') ?></dt>
									<dd><?= $project->date->format($config['date_format']) ?></dd>

								</dl>
							<?php endif; ?>

							<?php if (!empty($project->client)) : ?>
								<dl class="uk-description-list">
									<dt><?= __('Client') ?></dt>
									<dd><?= $project->client ?></dd>

								</dl>
							<?php endif; ?>
					<?php endif; ?>

					<?php if (count($config['datafields'])) : ?>
						<dl class="uk-description-list">
							<?php foreach ($config['datafields'] as $datafield) :
								if (!$value = $project->get($datafield['name'])) continue; ?>
								<dt><?= $datafield['label'] ?></dt>
								<dd><?= $value ?></dd>
							<?php endforeach; ?>
						</dl>
					<?php endif; ?>



					<?php if ($config['project']['tags_position'] == 'sidebar' && count($project->tags)) : ?>
						<div class="uk-flex uk-flex-wrap uk-margin <?= $config['project']['tags_align'] ?>" data-uk-margin="">
							<?php foreach ($project->tags as $tag) : ?>
								<div class="uk-badge uk-margin-small-right"><?= $tag ?></div>
							<?php endforeach; ?>
						</div>
					<?php endif; ?>

				</div>
			</div>
		</div>

<?php endif; ?>


	<div class="uk-margin uk-grid uk-grid-small <?= $grid ?>" data-uk-grid-margin="">
		<?php foreach ($project->images as $image) : ?>
			<div>
					<figure class="<?= $config['project']['overlay'] ?>">
						<img src="<?= $view->portfolioimage('url', [$image, $config['project']['thumbsize']]) ?>" alt="<?= $image['title'] ?>"
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
						<a class="uk-position-cover" href="<?= $image['src'] ?>" title="<?= $image['title'] ?>"
						   data-uk-lightbox="{group: 'project-<?= $project->id ?>'}"></a>
					</figure>

			</div>
		<?php endforeach; ?>
	</div>

	<?php if (in_array($config['project']['show_navigation'], ['both', 'bottom']) && ($next || $previous)) : ?>
		<ul class="uk-pagination">
		<?php if ($previous) : ?>
			<li class="uk-pagination-previous"><a href="<?= $app->url('@portfolio/id', ['id' => $previous->id]) ?>">
					<i class="uk-icon-arrow-left uk-margin-small-right"></i><?= $previous->title ?></a></li>
		<?php endif; ?>
			<?php if ($next) : ?>
			<li class="uk-pagination-next"><a href="<?= $app->url('@portfolio/id', ['id' => $next->id]) ?>">
					<?= $next->title ?><i class="uk-icon-arrow-right uk-margin-small-left"></i></a></li>
		<?php endif; ?>
		</ul>
	<?php endif; ?>

</article>

