<?php
/**
 * @var array $config
 * @var array $teaser_config
 * @var Bixie\Portfolio\Model\Project[] $projects
 * @var \Pagekit\Widget\Model\Widget $widget
 * @var \Pagekit\View\View $view
 */

// Grid
$grid  = 'uk-grid-width-1-'.$config['columns'];
$grid .= $config['columns_small'] ? ' uk-grid-width-small-1-'.$config['columns_small'] : '';
$grid .= $config['columns_medium'] ? ' uk-grid-width-medium-1-'.$config['columns_medium'] : '';
$grid .= $config['columns_large'] ? ' uk-grid-width-large-1-'.$config['columns_large'] : '';
$grid .= $config['columns_xlarge'] ? ' uk-grid-width-xlarge-1-'.$config['columns_xlarge'] : '';

// Grid teaser
$config['grid_teaser']  = 'uk-grid-width-1-'.$teaser_config['columns'];
$config['grid_teaser'] .= $teaser_config['columns_small'] ? ' uk-grid-width-small-1-'.$teaser_config['columns_small'] : '';
$config['grid_teaser'] .= $teaser_config['columns_medium'] ? ' uk-grid-width-medium-1-'.$teaser_config['columns_medium'] : '';
$config['grid_teaser'] .= $teaser_config['columns_large'] ? ' uk-grid-width-large-1-'.$teaser_config['columns_large'] : '';
$config['grid_teaser'] .= $teaser_config['columns_xlarge'] ? ' uk-grid-width-xlarge-1-'.$teaser_config['columns_xlarge'] : '';

?>

<div class="uk-margin uk-grid uk-grid-match <?= $grid ?>" data-uk-grid-margin data-uk-grid-match="target: '>div>.uk-panel'">

  <?php foreach ($projects as $project) : ?>
       <?= $view->render("bixie/portfolio/templates/teaser_{$widget->get('teaser.template', 'panel')}.php", compact('project', 'config', 'teaser_config')); ?>
  <?php endforeach; ?>

</div>
