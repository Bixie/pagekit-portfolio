<?php $view->script('admin-portfolio', 'portfolio:app/bundle/admin-portfolio.js', ['vue', 'uikit-nestable']) ?>

<div id="portfolio-projects" class="uk-form uk-form-horizontal" v-cloak>

	<div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
		<div class="uk-flex uk-flex-middle uk-flex-wrap" data-uk-margin>

			<h2 class="uk-margin-remove">{{ menu.label | trans }}</h2>

			<div class="uk-margin-left" v-show="selected.length">
				<ul class="uk-subnav pk-subnav-icon">
					<li><a class="pk-icon-delete pk-icon-hover" title="{{ 'Delete' | trans }}"
						   data-uk-tooltip="{delay: 500}" v-on="click: removeProjects"
						   v-confirm="'Delete project? All data will be deleted from the database.' | trans"></a>
					</li>
				</ul>
			</div>

		</div>
		<div class="uk-position-relative" data-uk-margin>

			<div data-uk-dropdown="{ mode: 'click' }">
				<a class="uk-button uk-button-primary" v-attr="href: $url.route('admin/portfolio/project/edit')">
					{{ 'Add project' | trans }}</a>

			</div>

		</div>
	</div>

	<div class="uk-overflow-container">

		<div class="pk-table-fake pk-table-fake-header" v-class="pk-table-fake-border: !projects || !projects.length">
			<div class="pk-table-width-minimum pk-table-fake-nestable-padding"><input type="checkbox"
																					  v-check-all="selected: input[name=id]">
			</div>
			<div class="pk-table-min-width-100">{{ 'Title' | trans }}</div>
			<div class="pk-table-width-150">{{ 'Tags' | trans }}</div>
			<div class="pk-table-width-150">{{ 'Url' | trans }}</div>
		</div>

		<ul class="uk-nestable uk-margin-remove" v-el="nestable" v-show="projects.length">
			<formitem v-repeat="project: projects | orderBy 'priority'"></formitem>

		</ul>

	</div>

	<h3 class="uk-h1 uk-text-muted uk-text-center"
		v-show="projects && !projects.length">{{ 'No projects found.' | trans }}</h3>

</div>

<script id="project" type="text/template">
	<li class="uk-nestable-item" v-class="uk-active: isSelected(project)" data-id="{{ project.id }}">

		<div class="uk-nestable-panel pk-table-fake uk-form uk-visible-hover">
			<div class="pk-table-width-minimum pk-table-collapse">
				<div class="uk-nestable-toggle" data-nestable-action="toggle"></div>
			</div>
			<div class="pk-table-width-minimum"><input type="checkbox" name="id" value="{{ project.id }}"></div>
			<div class="pk-table-min-width-100">
				<a v-attr="href: $url.route('admin/portfolio/project/edit', { id: project.id })">{{ project.title }}</a>
			</div>
			<div class="pk-table-width-150 pk-table-max-width-150 uk-text-truncate">
				{{ project.tags }}
			</div>
			<div class="pk-table-width-150 pk-table-max-width-150 uk-text-truncate">
				<a v-attr="href: $url.route(project.url)" target="_blank">{{ project.url }}</a>
			</div>
		</div>


	</li>

</script>