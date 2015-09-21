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

							<button class="uk-button uk-button-primary" v-on="click: save">{{ 'Save' | trans }}</button>

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
								<v-editor id="form-intro" value="{{@ config.portfolio_text }}"
										  options="{{ {markdown : config.markdown_enabled, height: 250} }}"></v-editor>
							</div>
						</div>
					</div>


					<div class="uk-form-row">
						<label class="uk-form-label">{{ 'Image' | trans }}</label>
						<div class="uk-form-controls">
							<input-image source="{{@ config.portfolio_image }}" class="pk-image-max-height"></input-image>
						</div>
					</div>

				</li>
				<li>

					<div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
						<div data-uk-margin>

							<h2 class="uk-margin-remove">{{ 'Portfolio settings' | trans }}</h2>

						</div>
						<div data-uk-margin>

							<button class="uk-button uk-button-primary" v-on="click: save">{{ 'Save' | trans }}</button>

						</div>
					</div>

					<?= $view->render('portfolio/admin/settings_portfolio.php') ?>

				</li>
				<li>

					<div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
						<div data-uk-margin>

							<h2 class="uk-margin-remove">{{ 'Project settings' | trans }}</h2>

						</div>
						<div data-uk-margin>

							<button class="uk-button uk-button-primary" v-on="click: save">{{ 'Save' | trans }}</button>

						</div>
					</div>

					<?= $view->render('portfolio/admin/settings_project.php') ?>

				</li>
				<li>

					<div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
						<div data-uk-margin>

							<h2 class="uk-margin-remove">{{ 'General settings' | trans }}</h2>

						</div>
						<div data-uk-margin>

							<button class="uk-button uk-button-primary" v-on="click: save">{{ 'Save' | trans }}</button>

						</div>
					</div>

					<div class="uk-form-horizontal">
						<div class="uk-form-row">
							<label class="uk-form-label">{{ 'Projects per page' | trans }}</label>

							<div class="uk-form-controls uk-form-controls-text">
								<p class="uk-form-controls-condensed">
									<input type="number" v-model="config.projects_per_page" class="uk-form-width-small">
								</p>
							</div>
						</div>

						<div class="uk-form-row">
							<span class="uk-form-label">{{ 'Markdown' | trans }}</span>

							<div class="uk-form-controls uk-form-controls-text">
								<p class="uk-form-controls-condensed">
									<label><input type="checkbox" v-model="config.markdown_enabled"> {{ 'Enable
										Markdown' | trans }}</label>
								</p>
							</div>
						</div>

						<div class="uk-form-row">
							<label for="form-date_format" class="uk-form-label">{{ 'Date format' | trans }}</label>

							<div class="uk-form-controls">
								<select name="date_format" id="form-date_format" class="uk-form-width-small"
										v-model="config.date_format">
									<option value="F Y">{{ 'January 2015' | trans }}</option>
									<option value="F d Y">{{ 'January 15 2015' | trans }}</option>
									<option value="d F Y">{{ '15 January 2015' | trans }}</option>
									<option value="M Y">{{ 'Jan 2015' | trans }}</option>
									<option value="m Y">{{ '1 2015' | trans }}</option>
									<option value="m-d-Y">{{ '1-15-2015' | trans }}</option>
									<option value="d-m-Y">{{ '15-1-2015' | trans }}</option>
								</select>
							</div>
						</div>

						<div class="uk-form-row">
							<span class="uk-form-label">{{ 'Image thumbs cache' | trans }}</span>

							<div class="uk-form-controls uk-form-controls-text">
								<p class="uk-form-controls-condensed">
									<button type="button" class="uk-button"
											v-confirm="'Clear image cache?' | trans"
											v-on="click: clearCache">
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

							<button class="uk-button uk-button-primary" v-on="click: save">{{ 'Save' | trans }}</button>

						</div>
					</div>

					<div class="uk-form-horizontal">

						<ul class="uk-nestable uk-margin-remove" v-el="datafieldsNestable"
							v-show="config.datafields.length">
							<datafield v-repeat="datafield: config.datafields"></datafield>
						</ul>

						<button type="button" class="uk-button uk-button-primary uk-button-small uk-margin"
								v-on="click: addDatafield">{{ 'Add option' | trans }}
						</button>

					</div>
				</li>
			</ul>

		</div>
	</div>

</div>
