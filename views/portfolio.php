<?php
/**
 * @var $view
 * @var array $tags
 * @var array $config
 * @var Pagekit\Module\Module $portfolio
 * @var Bixie\Portfolio\Model\Project $project
 */
$view->script('portfolio', 'bixie/portfolio:app/bundle/portfolio.js', ['uikit-grid', 'uikit-lightbox']);

// Grid
$grid  = 'uk-grid-width-1-'.$config['columns'];
$grid .= $config['columns_small'] ? ' uk-grid-width-small-1-'.$config['columns_small'] : '';
$grid .= $config['columns_medium'] ? ' uk-grid-width-medium-1-'.$config['columns_medium'] : '';
$grid .= $config['columns_large'] ? ' uk-grid-width-large-1-'.$config['columns_large'] : '';
$grid .= $config['columns_xlarge'] ? ' uk-grid-width-xlarge-1-'.$config['columns_xlarge'] : '';

// Grid teaser
$config['grid_teaser']  = 'uk-grid-width-1-'.$config['teaser']['columns'];
$config['grid_teaser'] .= $config['teaser']['columns_small'] ? ' uk-grid-width-small-1-'.$config['teaser']['columns_small'] : '';
$config['grid_teaser'] .= $config['teaser']['columns_medium'] ? ' uk-grid-width-medium-1-'.$config['teaser']['columns_medium'] : '';
$config['grid_teaser'] .= $config['teaser']['columns_large'] ? ' uk-grid-width-large-1-'.$config['teaser']['columns_large'] : '';
$config['grid_teaser'] .= $config['teaser']['columns_xlarge'] ? ' uk-grid-width-xlarge-1-'.$config['teaser']['columns_xlarge'] : '';

$config['portfolio_image_class'] = in_array($config['portfolio_image_align'], ['right', 'left']) ? 'uk-align-' . $config['portfolio_image_align'] : 'uk-text-center'
?>

<article id="portfolio-projects">

	<?php if ($config['portfolio_title']) : ?>
	    <h1 class="uk-article-title"><?= $config['portfolio_title'] ?></h1>
	<?php endif; ?>
	<div class="uk-clearfix">

		<?php if ($config['portfolio_image']) : ?>
			<div class="<?= $config['portfolio_image_class'] ?>">
				<img src="<?= $config['portfolio_image'] ?>" alt="">
			</div>

		<?php endif; ?>

		<?php if ($portfolio_text) : ?>
			<?= $portfolio_text ?>
		<?php endif; ?>

	</div>

	<?php if ($config['filter_tags'] && count($tags)) : ?>
	<div class="uk-tab-center uk-margin">
			<ul id="portfolio-filter" class="uk-tab">
			<li class="uk-active" data-uk-filter=""><a href=""><?= __('All') ?></a></li>
			<?php foreach ($tags as $tag) : ?>
				<li data-uk-filter="<?= $tag ?>"><a href=""><?= __($tag) ?></a></li>
			<?php endforeach; ?>

		</ul>
	</div>
	<?php endif; ?>
	
	<div class="uk-grid <?= $grid ?>" data-uk-grid="{gutter: <?= $config['columns_gutter'] ?>, controls: '<?= $config['filter_tags'] ? '#portfolio-filter': ''; ?>'}">

		<?php foreach ($projects as $project) : ?>

			<?= $view->render(sprintf('bixie/portfolio/templates/teaser_%s.php', $config['teaser']['template']), ['config' => $config, 'project' => $project]) ?>

		<?php endforeach; ?>

	</div>
</article>