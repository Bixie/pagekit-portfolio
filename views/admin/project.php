<?php  $view->style('codemirror'); $view->script('admin-project', 'bixie/portfolio:app/bundle/admin-project.js', ['vue', 'editor']); ?>

<form id="project-edit" class="uk-form" name="form" v-validator="form" @submit.prevent="save | valid" v-cloak>

	<div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
		<div data-uk-margin>

			<h2 class="uk-margin-remove" v-if="project.id">{{ 'Edit project' | trans }} <em>{{
					project.title | trans }}</em> <a :href="$url.route(project.url)" target="_blank"
													  class="uk-icon-external-link uk-icon-hover uk-text-small uk-margin-small-left"
													  :title="'Preview project' | trans"
													  data-uk-tooltip="{delay:500}"></a></h2>

			<h2 class="uk-margin-remove" v-else>{{ 'Add project' | trans }}</h2>

		</div>
		<div data-uk-margin>

			<a class="uk-button uk-margin-small-right" :href="$url.route('admin/portfolio/project')">{{ project.id ?
				'Close' :
				'Cancel' | trans }}</a>
			<button class="uk-button uk-button-primary" type="submit">{{ 'Save' | trans }}</button>

		</div>
	</div>

	<ul class="uk-tab" v-el:tab>
		<li><a>{{ 'General' | trans }}</a></li>
		<li><a>{{ 'Images' | trans }}</a></li>
		<li><a>{{ 'Data' | trans }}</a></li>
	</ul>

	<div class="uk-switcher uk-margin" v-el:content>
		<div>
			<portfoliobasic :project.sync="project" :config="config" :form="form"></portfoliobasic>
		</div>
		<div>
			<portfolioimages :project.sync="project" :config="config" :form="form"></portfolioimages>
		</div>
		<div>
			<portfoliodata :project.sync="project" :config="config" :form="form"></portfoliodata>
		</div>
	</div>

</form>

