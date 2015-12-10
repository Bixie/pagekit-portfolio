<?php $view->script('admin-portfolio', 'bixie/portfolio:app/bundle/admin-portfolio.js', ['vue']) ?>

<div id="portfolio-projects" class="uk-form uk-form-horizontal" v-cloak>

	<div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
		<div class="uk-flex uk-flex-middle uk-flex-wrap" data-uk-margin>

			<h2 class="uk-margin-remove" v-show="!selected.length">{{ '{0} %count% Projects|{1} %count% Project|]1,Inf[ %count% Projects' | transChoice count {count:count} }}</h2>
			<h2 class="uk-margin-remove" v-show="selected.length">{{ '{1} %count% Project selected|]1,Inf[ %count% Projects selected' | transChoice selected.length {count:selected.length} }}</h2>

			<div class="uk-margin-left" v-show="selected.length">
				<ul class="uk-subnav pk-subnav-icon">
					<li><a class="pk-icon-check pk-icon-hover" :title="'Publish' | trans" data-uk-tooltip="{delay: 500}"
						   @click.prevent="status(1)"></a></li>
					<li><a class="pk-icon-block pk-icon-hover" :title="'Unpublish' | trans" data-uk-tooltip="{delay: 500}"
						   @click.prevent="status(0)"></a></li>
					<li><a class="pk-icon-delete pk-icon-hover" :title="'Delete' | trans" data-uk-tooltip="{delay: 500}"
						   @click.prevent="removeProjects"
						   v-confirm="'Delete project? All data will be deleted from the database.' | trans"></a>
					</li>
				</ul>
			</div>

			<div class="pk-search">
				<div class="uk-search">
					<input class="uk-search-field" type="text" v-model="config.filter.search" debounce="300">
				</div>
			</div>


		</div>
		<div class="uk-position-relative" data-uk-margin>

			<div data-uk-dropdown="{ mode: 'click' }">
				<a class="uk-button uk-button-primary" :href="$url.route('admin/portfolio/project/edit')">
					{{ 'Add project' | trans }}</a>

			</div>

		</div>
	</div>

	<div class="uk-overflow-container">
		<table class="uk-table uk-table-hover uk-table-middle">
			<thead>
			<tr>
				<th class="pk-table-width-minimum"><input type="checkbox" v-check-all:selected.literal="input[name=id]"></th>
				<th class="pk-table-min-width-200" v-order:title="config.filter.order">{{ 'Title' | trans }}</th>
				<th class="pk-table-width-100 uk-text-center">
					<input-filter :title="$trans('Status')" :value.sync="config.filter.status" :options="statusOptions"></input-filter>
				</th>
				<th class="pk-table-width-100" v-order:client="config.filter.order">{{ 'Client' | trans }}</th>
				<th class="pk-table-width-100" v-order:date="config.filter.order">{{ 'Date' | trans }}</th>
				<th class="pk-table-width-200 pk-table-min-width-200">{{ 'Tags' | trans }}</th>
				<th class="pk-table-width-200 pk-table-min-width-200">{{ 'URL' | trans }}</th>
			</tr>
			</thead>
			<tbody>
			<tr class="check-item" v-for="project in projects" :class="{'uk-active': active(project)}">
				<td><input type="checkbox" name="id" value="{{ project.id }}"></td>
				<td>
					<a :href="$url.route('admin/portfolio/project/edit', { id: project.id })">{{ project.title }}</a>
				</td>
				<td class="uk-text-center">
					<a title="{{ getStatusText(project) }}" :class="{
                                'pk-icon-circle-danger': project.status == 0,
                                'pk-icon-circle-success': project.status == 1
                            }" @click="toggleStatus(project)"></a>
				</td>
				<td>
					{{ project.client }}
				</td>
				<td>
					{{ project.date | date }}
				</td>
				<td>
					{{ project.tags }}
				</td>
				<td class="pk-table-text-break">
					<a v-if="project.url" :href="$url.route(project.url)" target="_blank">{{ project.url }}</a>
				</td>
			</tr>
			</tbody>
		</table>
	</div>


	<h3 class="uk-h1 uk-text-muted uk-text-center"
		v-show="projects && !projects.length">{{ 'No projects found.' | trans }}</h3>

	<v-pagination :page.sync="config.page" :pages="pages" v-show="pages > 1"></v-pagination>

</div>
