<?php $view->style('codemirror'); $view->script('portfolio-settings', 'bixie/portfolio:app/bundle/portfolio-settings.js', ['vue', 'editor', 'uikit-nestable']) ?>

<div id="portfolio-settings" class="uk-form">

	<div class="uk-grid pk-grid-large" data-uk-grid-margin>
		<div class="pk-width-sidebar">

			<div class="uk-panel">

				<ul class="uk-nav uk-nav-side pk-nav-large" data-uk-tab="{ connect: '#tab-content' }">
					<li><a><i class="pk-icon-large-brush uk-margin-right"></i> {{ 'Portfolio content' | trans }}</a></li>
					<li><a><i class="pk-icon-large-settings uk-margin-right"></i> {{ 'Portfolio settings' | trans }}</a></li>
					<li><a><i class="pk-icon-large-settings uk-margin-right"></i> {{ 'Project settings' | trans }}</a></li>
					<li><a><i class="pk-icon-large-settings uk-margin-right"></i> {{ 'General settings' | trans }}</a></li>
					<li><a><i class="pk-icon-large-database uk-margin-right"></i> {{ 'Data fields' | trans }}</a></li>
				</ul>

			</div>

		</div>
		<div class="uk-flex-item-1">

			<ul id="tab-content" class="uk-switcher uk-margin">
				<li>

					<div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
						<div data-uk-margin>

							<h2 class="uk-margin-remove">{{ 'Portfolio content' | trans }}</h2>

						</div>
						<div data-uk-margin>

							<button class="uk-button uk-button-primary" @click="save">{{ 'Save' | trans }}</button>

						</div>
					</div>

					<div class="uk-form-horizontal">

						<div class="uk-form-row">
							<label for="form-portfoliotitle" class="uk-form-label">{{ 'Portfolio title' | trans }}</label>

							<div class="uk-form-controls">
								<input id="form-portfoliotitle" class="uk-width-1-1" type="text" name="portfolio_title"
									   v-model="config.portfolio_title">
							</div>
						</div>
					</div>


					<div class="uk-form-stacked uk-margin">
						<div class="uk-form-row">
							<span class="uk-form-label">{{ 'Portfolio text' | trans }}</span>

							<div class="uk-form-controls">
								<v-editor id="form-intro" :value.sync="config.portfolio_text"
										  :options="{markdown : config.markdown_enabled, height: 250}"></v-editor>
								<p>
									<label><input type="checkbox" v-model="config.markdown_enabled"> {{ 'Enable Markdown' | trans }}</label>
								</p>
							</div>
						</div>
					</div>


					<div class="uk-form-row">
						<label class="uk-form-label">{{ 'Image' | trans }}</label>
						<div class="uk-form-controls">
							<input-image :source="config.portfolio_image" class="pk-image-max-height"></input-image>
						</div>
					</div>

				</li>
				<li>

					<div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
						<div data-uk-margin>

							<h2 class="uk-margin-remove">{{ 'Portfolio settings' | trans }}</h2>

						</div>
						<div data-uk-margin>

							<button class="uk-button uk-button-primary" @click="save">{{ 'Save' | trans }}</button>

						</div>
					</div>

					<div class="uk-grid uk-grid-width-large-1-2 uk-form-horizontal" data-uk-grid-margin="">
						<div>
							<fields :config="$options.fields.portfolio" :model.sync="config" template="formrow"></fields>

						</div>
						<div>

							<h3>{{ 'Teaser settings' | trans }}</h3>
							<div class="uk-form-row">
								<span class="uk-form-label">{{ 'Show content' | trans }}</span>

								<div class="uk-form-controls uk-form-controls-text">

									<fields :config="$options.fields.teaser_show" :model.sync="config" template="raw"></fields>

								</div>
							</div>

							<fields :config="$options.fields.teaser_top" :model.sync="config" template="formrow"></fields>

							<fields :config="$options.fields.template[config.teaser.template]" :model.sync="config" template="formrow"></fields>

							<fields :config="$options.fields.teaser_bottom" :model.sync="config" template="formrow"></fields>

							<div class="uk-form-row">
								<label for="form-project_image_align" class="uk-form-label">{{ 'Thumbs size' | trans }}</label>

								<div class="uk-form-controls uk-form-controls-text">
									<p class="uk-form-controls-condensed">
										<label class="uk-form-label" style="width: 70px">{{ 'Width' | trans }}</label>
										<input type="number" placeholder="{{ 'Auto' | trans }}" class="uk-form-width-small" v-model="config.teaser.thumbsize.width">
									</p>
									<p class="uk-form-controls-condensed">
										<label class="uk-form-label" style="width: 70px">{{ 'Height' | trans }}</label>
										<input type="number" placeholder="{{ 'Auto' | trans }}" class="uk-form-width-small" v-model="config.teaser.thumbsize.height">

									</p>

								</div>
							</div>

						</div>
					</div>

				</li>
				<li>

					<div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
						<div data-uk-margin>

							<h2 class="uk-margin-remove">{{ 'Project settings' | trans }}</h2>

						</div>
						<div data-uk-margin>

							<button class="uk-button uk-button-primary" @click="save">{{ 'Save' | trans }}</button>

						</div>
					</div>

					<div class="uk-form-horizontal">

						<div class="uk-form-row">
							<label for="form-project_image_align" class="uk-form-label">{{ 'Thumbs size' | trans }}</label>

							<div class="uk-form-controls uk-form-controls-text">
								<p class="uk-form-controls-condensed">
									<label class="uk-form-label" style="width: 70px">{{ 'Width' | trans }}</label>
									<input type="number" placeholder="{{ 'Auto' | trans }}" class="uk-form-width-small" v-model="config.project.thumbsize.width">
								</p>
								<p class="uk-form-controls-condensed">
									<label class="uk-form-label" style="width: 70px">{{ 'Height' | trans }}</label>
									<input type="number" placeholder="{{ 'Auto' | trans }}" class="uk-form-width-small" v-model="config.project.thumbsize.height">

								</p>

							</div>
						</div>

						<fields :config="$options.fields.project" :model.sync="config" template="formrow"></fields>

					</div>

				</li>
				<li>

					<div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
						<div data-uk-margin>

							<h2 class="uk-margin-remove">{{ 'General settings' | trans }}</h2>

						</div>
						<div data-uk-margin>

							<button class="uk-button uk-button-primary" @click="save">{{ 'Save' | trans }}</button>

						</div>
					</div>

					<div class="uk-form-horizontal">

						<fields :config="$options.fields.general" :model.sync="config" template="formrow"></fields>

						<div class="uk-form-row">
							<span class="uk-form-label">{{ 'Cache path writable' | trans }}</span>

							<div class="uk-form-controls uk-form-controls-text">
								<p v-if="cache_path == false"
								   class="uk-alert uk-alert-danger">
									<i class="uk-icon-info uk-margin-small-right"  data-uk-tooltip=""
									   :title="'Refresh to check again. Try the /storage folder if /tmp/cache is unwritable' | trans"></i>
									{{ 'Current cache path not writable' | trans }}</p>
								<p v-else class="uk-text-success">{{ 'Current cache path is writable' | trans }}</p>
							</div>
						</div>

						<div class="uk-form-row">
							<span class="uk-form-label">{{ 'Image thumbs cache' | trans }}</span>

							<div class="uk-form-controls uk-form-controls-text">
								<p class="uk-form-controls-condensed">
									<button type="button" class="uk-button"
											v-confirm="'Clear image cache?' | trans"
											@click="clearCache">
										{{ 'Clear cache' | trans }}</button>
								</p>
							</div>
						</div>

					</div>
				</li>
				<li>

					<div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
						<div data-uk-margin>

							<h2 class="uk-margin-remove">{{ 'Custom data fields' | trans }}</h2>

						</div>
						<div data-uk-margin>

							<button class="uk-button uk-button-primary" @click="save">{{ 'Save' | trans }}</button>

						</div>
					</div>

					<div class="uk-form-horizontal">

						<ul class="uk-nestable uk-margin-remove" v-el:datafields-nestable
							v-show="config.datafields.length">
							<datafield v-for="datafield in config.datafields" :datafield="datafield"></datafield>
						</ul>

						<button type="button" class="uk-button uk-button-primary uk-button-small uk-margin"
								@click="addDatafield">{{ 'Add option' | trans }}
						</button>

					</div>
				</li>
			</ul>

		</div>
	</div>

</div>
