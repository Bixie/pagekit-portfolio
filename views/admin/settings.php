<?php $view->style('codemirror'); $view->script('portfolio-settings', 'portfolio:app/bundle/portfolio-settings.js', ['vue', 'editor']) ?>

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
					<div class="uk-grid uk-grid-width-medium-1-2 uk-form-horizontal">
						<div>
							<div class="uk-form-row">
								<label for="form-portfolio_image_align" class="uk-form-label">{{ 'Image align' | trans }}</label>

								<div class="uk-form-controls">
									<select name="portfolio_image_align" id="form-portfolio_image_align" class="uk-form-width-small"
											v-model="config.portfolio_image_align">
										<option value="left">{{ 'Left' | trans }}</option>
										<option value="right">{{ 'Right' | trans }}</option>
									</select>
								</div>
							</div>

							<div class="uk-form-row">
								<span class="uk-form-label">{{ 'Grid filter' | trans }}</span>

								<div class="uk-form-controls uk-form-controls-text">
									<p class="uk-form-controls-condensed">
										<label><input type="checkbox" v-model="config.filter_tags"> {{ 'Filter by tags' | trans }}</label>
									</p>
								</div>
							</div>

							<h3>{{ 'Project columns' | trans }}</h3>
							<div class="uk-form-row">
								<label for="form-cols" class="uk-form-label">{{ 'Phone Portrait' | trans }}</label>

								<div class="uk-form-controls">
									<select name="cols" id="form-cols" class="uk-form-width-small" v-model="config.columns">
										<option value="1">{{ '1' | trans }}</option>
										<option value="2">{{ '2' | trans }}</option>
										<option value="3">{{ '3' | trans }}</option>
										<option value="4">{{ '4' | trans }}</option>
										<option value="5">{{ '5' | trans }}</option>
										<option value="6">{{ '6' | trans }}</option>
									</select>
								</div>
							</div>

							<div class="uk-form-row">
								<label for="form-cols_small" class="uk-form-label">{{ 'Phone Landscape' | trans }}</label>

								<div class="uk-form-controls">
									<select name="cols_small" id="form-cols_small" class="uk-form-width-small" v-model="config.columns_small">
										<option value="">{{ 'Inherit' | trans }}</option>
										<option value="1">{{ '1' | trans }}</option>
										<option value="2">{{ '2' | trans }}</option>
										<option value="3">{{ '3' | trans }}</option>
										<option value="4">{{ '4' | trans }}</option>
										<option value="5">{{ '5' | trans }}</option>
										<option value="6">{{ '6' | trans }}</option>
									</select>
								</div>
							</div>

							<div class="uk-form-row">
								<label for="form-cols_medium" class="uk-form-label">{{ 'Tablet' | trans }}</label>

								<div class="uk-form-controls">
									<select name="cols_small" id="form-cols_medium" class="uk-form-width-small" v-model="config.columns_medium">
										<option value="">{{ 'Inherit' | trans }}</option>
										<option value="1">{{ '1' | trans }}</option>
										<option value="2">{{ '2' | trans }}</option>
										<option value="3">{{ '3' | trans }}</option>
										<option value="4">{{ '4' | trans }}</option>
										<option value="5">{{ '5' | trans }}</option>
										<option value="6">{{ '6' | trans }}</option>
									</select>
								</div>
							</div>

							<div class="uk-form-row">
								<label for="form-cols_large" class="uk-form-label">{{ 'Desktop' | trans }}</label>

								<div class="uk-form-controls">
									<select name="cols_large" id="form-cols_large" class="uk-form-width-small" v-model="config.columns_large">
										<option value="">{{ 'Inherit' | trans }}</option>
										<option value="1">{{ '1' | trans }}</option>
										<option value="2">{{ '2' | trans }}</option>
										<option value="3">{{ '3' | trans }}</option>
										<option value="4">{{ '4' | trans }}</option>
										<option value="5">{{ '5' | trans }}</option>
										<option value="6">{{ '6' | trans }}</option>
									</select>
								</div>
							</div>

							<div class="uk-form-row">
								<label for="form-cols_xlarge" class="uk-form-label">{{ 'Large screens' | trans }}</label>

								<div class="uk-form-controls">
									<select name="cols_xlarge" id="form-cols_xlarge" class="uk-form-width-small" v-model="config.columns_xlarge">
										<option value="">{{ 'Inherit' | trans }}</option>
										<option value="1">{{ '1' | trans }}</option>
										<option value="2">{{ '2' | trans }}</option>
										<option value="3">{{ '3' | trans }}</option>
										<option value="4">{{ '4' | trans }}</option>
										<option value="5">{{ '5' | trans }}</option>
										<option value="6">{{ '6' | trans }}</option>
									</select>
								</div>
							</div>

							<div class="uk-form-row">
								<label for="form-cols_gutter" class="uk-form-label">{{ 'Gutter width' | trans }}</label>

								<div class="uk-form-controls">
									<select name="columns_gutter" id="form-cols_gutter" class="uk-form-width-small" v-model="config.columns_gutter">
										<option value="0">{{ '0 px' | trans }}</option>
										<option value="10">{{ '10 px' | trans }}</option>
										<option value="20">{{ '20 px' | trans }}</option>
										<option value="30">{{ '30 px' | trans }}</option>
									</select>
								</div>
							</div>

							<h3>{{ 'Teaser image columns' | trans }}</h3>
							<div class="uk-form-row">
								<label for="form-cols_teaser" class="uk-form-label">{{ 'Phone Portrait' | trans }}</label>

								<div class="uk-form-controls">
									<select name="cols_teaser" id="form-cols_teaser" class="uk-form-width-small" v-model="config.teaser.columns">
										<option value="1">{{ '1' | trans }}</option>
										<option value="2">{{ '2' | trans }}</option>
										<option value="3">{{ '3' | trans }}</option>
										<option value="4">{{ '4' | trans }}</option>
										<option value="5">{{ '5' | trans }}</option>
										<option value="6">{{ '6' | trans }}</option>
									</select>
								</div>
							</div>

							<div class="uk-form-row">
								<label for="form-cols_teaser_small" class="uk-form-label">{{ 'Phone Landscape' | trans }}</label>

								<div class="uk-form-controls">
									<select name="cols_teaser_small" id="form-cols_teaser_small" class="uk-form-width-small"
											v-model="config.teaser.columns_small">
										<option value="">{{ 'Inherit' | trans }}</option>
										<option value="1">{{ '1' | trans }}</option>
										<option value="2">{{ '2' | trans }}</option>
										<option value="3">{{ '3' | trans }}</option>
										<option value="4">{{ '4' | trans }}</option>
										<option value="5">{{ '5' | trans }}</option>
										<option value="6">{{ '6' | trans }}</option>
									</select>
								</div>
							</div>

							<div class="uk-form-row">
								<label for="form-cols_teaser_medium" class="uk-form-label">{{ 'Tablet' | trans }}</label>

								<div class="uk-form-controls">
									<select name="cols_teaser_small" id="form-cols_teaser_medium" class="uk-form-width-small"
											v-model="config.teaser.columns_medium">
										<option value="">{{ 'Inherit' | trans }}</option>
										<option value="1">{{ '1' | trans }}</option>
										<option value="2">{{ '2' | trans }}</option>
										<option value="3">{{ '3' | trans }}</option>
										<option value="4">{{ '4' | trans }}</option>
										<option value="5">{{ '5' | trans }}</option>
										<option value="6">{{ '6' | trans }}</option>
									</select>
								</div>
							</div>

							<div class="uk-form-row">
								<label for="form-cols_teaser_large" class="uk-form-label">{{ 'Desktop' | trans }}</label>

								<div class="uk-form-controls">
									<select name="cols_teaser_large" id="form-cols_teaser_large" class="uk-form-width-small"
											v-model="config.teaser.columns_large">
										<option value="">{{ 'Inherit' | trans }}</option>
										<option value="1">{{ '1' | trans }}</option>
										<option value="2">{{ '2' | trans }}</option>
										<option value="3">{{ '3' | trans }}</option>
										<option value="4">{{ '4' | trans }}</option>
										<option value="5">{{ '5' | trans }}</option>
										<option value="6">{{ '6' | trans }}</option>
									</select>
								</div>
							</div>

							<div class="uk-form-row">
								<label for="form-cols_teaser_xlarge" class="uk-form-label">{{ 'Large screens' | trans }}</label>

								<div class="uk-form-controls">
									<select name="cols_teaser_xlarge" id="form-cols_teaser_xlarge" class="uk-form-width-small"
											v-model="config.teaser.columns_xlarge">
										<option value="">{{ 'Inherit' | trans }}</option>
										<option value="1">{{ '1' | trans }}</option>
										<option value="2">{{ '2' | trans }}</option>
										<option value="3">{{ '3' | trans }}</option>
										<option value="4">{{ '4' | trans }}</option>
										<option value="5">{{ '5' | trans }}</option>
										<option value="6">{{ '6' | trans }}</option>
									</select>
								</div>
							</div>

						</div>
						<div>
							<h3>{{ 'Teaser settings' | trans }}</h3>
							<div class="uk-form-row">
								<span class="uk-form-label">{{ 'Show content' | trans }}</span>

								<div class="uk-form-controls uk-form-controls-text">
									<p class="uk-form-controls-condensed">
										<label><input type="checkbox" v-model="config.teaser.show_title">
											{{ 'Show title' | trans }}</label>
									</p>

									<p class="uk-form-controls-condensed">
										<label><input type="checkbox" v-model="config.teaser.show_subtitle">
											{{ 'Show subtitle' | trans }}</label>
									</p>

									<p class="uk-form-controls-condensed">
										<label><input type="checkbox" v-model="config.teaser.show_intro">
											{{ 'Show intro' | trans }}</label>
									</p>

									<p class="uk-form-controls-condensed">
										<label><input type="checkbox" v-model="config.teaser.show_image">
											{{ 'Show image' | trans }}</label>
									</p>

									<p class="uk-form-controls-condensed">
										<label><input type="checkbox" v-model="config.teaser.show_date">
											{{ 'Show date' | trans }}</label>
									</p>

									<p class="uk-form-controls-condensed">
										<label><input type="checkbox" v-model="config.teaser.show_client">
											{{ 'Show client' | trans }}</label>
									</p>

									<p class="uk-form-controls-condensed">
										<label><input type="checkbox" v-model="config.teaser.show_tags">
											{{ 'Show tags' | trans }}</label>
									</p>

									<p class="uk-form-controls-condensed">
										<label><input type="checkbox" v-model="config.teaser.show_data">
											{{ 'Show data' | trans }}</label>
									</p>

									<p class="uk-form-controls-condensed">
										<label><input type="checkbox" v-model="config.teaser.show_readmore">
											{{ 'Show readmore' | trans }}</label>
									</p>
								</div>
							</div>

							<div class="uk-form-row">
								<label for="form-teaser_panel_style" class="uk-form-label">{{ 'Teaser panel style' | trans }}</label>

								<div class="uk-form-controls">
									<select name="teaser_panel_style" id="form-teaser_panel_style" class="uk-form-width-medium"
											v-model="config.teaser.panel_style">
										<option value="">{{ 'Raw' | trans }}</option>
										<option value="uk-panel-box">{{ 'Panel Box' | trans }}</option>
										<option value="uk-panel-box uk-panel-box-primary">{{ 'Panel Box Primary' | trans }}</option>
										<option value="uk-panel-box uk-panel-box-secondary">{{ 'Panel Box Secondary' | trans }}</option>
										<option value="uk-panel-space">{{ 'Panel Space' | trans }}</option>
									</select>
								</div>
							</div>

							<div class="uk-form-row">
								<label for="form-teaser_panel_align" class="uk-form-label">{{ 'Teaser panel alignment' | trans }}</label>

								<div class="uk-form-controls">
									<select name="teaser_panel_align" id="form-teaser_panel_align" class="uk-form-width-medium"
											v-model="config.teaser.panel_align">
										<option value="">{{ 'Left' | trans }}</option>
										<option value="uk-text-right">{{ 'Right' | trans }}</option>
										<option value="uk-text-center">{{ 'Center' | trans }}</option>
									</select>
								</div>
							</div>

							<div class="uk-form-row">
								<label for="form-teaser_title_size" class="uk-form-label">{{ 'Teaser title size' | trans }}</label>

								<div class="uk-form-controls">
									<select name="teaser_title_size" id="form-teaser_title_size" class="uk-form-width-medium"
											v-model="config.teaser.title_size">
										<option value="uk-h1">{{ 'Heading H1' | trans }}</option>
										<option value="uk-h2">{{ 'Heading H2' | trans }}</option>
										<option value="uk-h3">{{ 'Heading H3' | trans }}</option>
										<option value="uk-h4">{{ 'Heading H4' | trans }}</option>
										<option value="uk-heading-large">{{ 'Large header' | trans }}</option>
										<option value="uk-module-title">{{ 'Module header' | trans }}</option>
										<option value="uk-article-title">{{ 'Article header' | trans }}</option>
									</select>
								</div>
							</div>

							<div class="uk-form-row">
								<label for="form-teaser_tags_align" class="uk-form-label">{{ 'Tags alignment' | trans }}</label>

								<div class="uk-form-controls">
									<select name="teaser_tags_align" id="form-teaser_tags_align" class="uk-form-width-medium"
											v-model="config.teaser.tags_align">
										<option value="">{{ 'Left' | trans }}</option>
										<option value="uk-flex-right">{{ 'Right' | trans }}</option>
										<option value="uk-flex-center">{{ 'Center' | trans }}</option>
									</select>
								</div>
							</div>

							<div class="uk-form-row">
								<label for="form-teaser_read_more" class="uk-form-label">{{ 'Read more text' | trans }}</label>

								<div class="uk-form-controls">
									<input id="form-teaser_read_more" class="uk-form-width-medium" type="text"
										   v-model="config.teaser.read_more">
								</div>
							</div>

							<div class="uk-form-row">
								<label for="form-teaser_read_more_style" class="uk-form-label">{{ 'Read more style' | trans }}</label>

								<div class="uk-form-controls">
									<select name="teaser_read_more_style" id="form-teaser_read_more_style" class="uk-form-width-medium"
											v-model="config.teaser.read_more_style">
										<option value="uk-link">{{ 'Link' | trans }}</option>
										<option value="uk-button">{{ 'Button' | trans }}</option>
										<option value="uk-button uk-button-success">{{ 'Button Success' | trans }}</option>
										<option value="uk-button uk-button-primary">{{ 'Button Primary' | trans }}</option>
									</select>
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

							<button class="uk-button uk-button-primary" v-on="click: save">{{ 'Save' | trans }}</button>

						</div>
					</div>

					<div class="uk-form-horizontal">

						<div class="uk-form-row">
							<label for="form-project_image_align" class="uk-form-label">{{ 'Image align' | trans }}</label>

							<div class="uk-form-controls">
								<select name="project_image_align" id="form-project_image_align" class="uk-form-width-small"
										v-model="config.project.image_align">
									<option value="left">{{ 'Left' | trans }}</option>
									<option value="right">{{ 'Right' | trans }}</option>
								</select>
							</div>
						</div>

						<div class="uk-form-row">
							<label for="form-project_tags_align" class="uk-form-label">{{ 'Tags alignment' | trans }}</label>

							<div class="uk-form-controls">
								<select name="project_tags_align" id="form-project_tags_align" class="uk-form-width-medium"
										v-model="config.project.tags_align">
									<option value="">{{ 'Left' | trans }}</option>
									<option value="uk-flex-right">{{ 'Right' | trans }}</option>
									<option value="uk-flex-center">{{ 'Center' | trans }}</option>
								</select>
							</div>
						</div>

						<div class="uk-form-row">
							<label for="form-overlay_title_size" class="uk-form-label">{{ 'Overlay title size' | trans }}</label>

							<div class="uk-form-controls">
								<select name="overlay_title_size" id="form-overlay_title_size" class="uk-form-width-medium"
										v-model="config.project.overlay_title_size">
									<option value="uk-h1">{{ 'Heading H1' | trans }}</option>
									<option value="uk-h2">{{ 'Heading H2' | trans }}</option>
									<option value="uk-h3">{{ 'Heading H3' | trans }}</option>
									<option value="uk-h4">{{ 'Heading H4' | trans }}</option>
									<option value="uk-heading-large">{{ 'Large header' | trans }}</option>
									<option value="uk-module-title">{{ 'Module header' | trans }}</option>
									<option value="uk-article-title">{{ 'Article header' | trans }}</option>
								</select>
							</div>
						</div>

						<div class="uk-form-row">
							<label for="form-overlay" class="uk-form-label">{{ 'Overlay' | trans }}</label>

							<div class="uk-form-controls">
								<select name="overlay" id="form-overlay" class="uk-form-width-medium"
										v-model="config.project.overlay">
									<option value="">{{ 'None' | trans }}</option>
									<option value="uk-overlay">{{ 'Always' | trans }}</option>
									<option value="uk-overlay uk-overlay-hover">{{ 'On hover' | trans }}</option>
								</select>
							</div>
						</div>

						<div class="uk-form-row">
							<label for="form-overlay_position" class="uk-form-label">{{ 'Overlay position' | trans }}</label>

							<div class="uk-form-controls">
								<select name="overlay_position" id="form-overlay_position" class="uk-form-width-medium"
										v-model="config.project.overlay_position">
									<option value="">{{ 'Cover image' | trans }}</option>
									<option value="uk-overlay-top">{{ 'Top' | trans }}</option>
									<option value="uk-overlay-bottom">{{ 'Bottom' | trans }}</option>
									<option value="uk-overlay-left">{{ 'Left' | trans }}</option>
									<option value="uk-overlay-right">{{ 'Right' | trans }}</option>
								</select>
							</div>
						</div>

						<div class="uk-form-row">
							<label for="form-overlay_effect" class="uk-form-label">{{ 'Overlay effect' | trans }}</label>

							<div class="uk-form-controls">
								<select name="overlay_effect" id="form-overlay_effect" class="uk-form-width-medium"
										v-model="config.project.overlay_effect">
									<option value="">{{ 'None' | trans }}</option>
									<option value="uk-overlay-fade">{{ 'Fade' | trans }}</option>
									<option value="uk-overlay-slide-top">{{ 'Slide top' | trans }}</option>
									<option value="uk-overlay-slide-bottom">{{ 'Slide bottom' | trans }}</option>
									<option value="uk-overlay-slide-left">{{ 'Slide left' | trans }}</option>
									<option value="uk-overlay-slide-right">{{ 'Slide right' | trans }}</option>
								</select>
							</div>
						</div>

						<div class="uk-form-row">
							<label for="form-overlay_image_effect" class="uk-form-label">{{ 'Overlay image effect' | trans }}</label>

							<div class="uk-form-controls">
								<select name="overlay_image_effect" id="form-overlay_image_effect" class="uk-form-width-medium"
										v-model="config.project.overlay_image_effect">
									<option value="">{{ 'None' | trans }}</option>
									<option value="uk-overlay-scale">{{ 'Scale' | trans }}</option>
									<option value="uk-overlay-spin">{{ 'Rotate' | trans }}</option>
									<option value="uk-overlay-grayscale">{{ 'Grayscale' | trans }}</option>
								</select>
							</div>
						</div>

						<h3>{{ 'Image columns' | trans }}</h3>

						<div class="uk-form-row">
							<label for="form-cols_project" class="uk-form-label">{{ 'Phone Portrait' | trans }}</label>

							<div class="uk-form-controls">
								<select name="cols_project" id="form-cols_project" class="uk-form-width-small"
										v-model="config.project.columns">
									<option value="1">{{ '1' | trans }}</option>
									<option value="2">{{ '2' | trans }}</option>
									<option value="3">{{ '3' | trans }}</option>
									<option value="4">{{ '4' | trans }}</option>
									<option value="5">{{ '5' | trans }}</option>
									<option value="6">{{ '6' | trans }}</option>
								</select>
							</div>
						</div>

						<div class="uk-form-row">
							<label for="form-cols_project_small" class="uk-form-label">{{ 'Phone Landscape' | trans
								}}</label>

							<div class="uk-form-controls">
								<select name="cols_project_small" id="form-cols_project_small" class="uk-form-width-small"
										v-model="config.project.columns_small">
									<option value="">{{ 'Inherit' | trans }}</option>
									<option value="1">{{ '1' | trans }}</option>
									<option value="2">{{ '2' | trans }}</option>
									<option value="3">{{ '3' | trans }}</option>
									<option value="4">{{ '4' | trans }}</option>
									<option value="5">{{ '5' | trans }}</option>
									<option value="6">{{ '6' | trans }}</option>
								</select>
							</div>
						</div>

						<div class="uk-form-row">
							<label for="form-cols_project_medium" class="uk-form-label">{{ 'Tablet' | trans }}</label>

							<div class="uk-form-controls">
								<select name="cols_project_small" id="form-cols_project_medium"
										class="uk-form-width-small"
										v-model="config.project.columns_medium">
									<option value="">{{ 'Inherit' | trans }}</option>
									<option value="1">{{ '1' | trans }}</option>
									<option value="2">{{ '2' | trans }}</option>
									<option value="3">{{ '3' | trans }}</option>
									<option value="4">{{ '4' | trans }}</option>
									<option value="5">{{ '5' | trans }}</option>
									<option value="6">{{ '6' | trans }}</option>
								</select>
							</div>
						</div>

						<div class="uk-form-row">
							<label for="form-cols_project_large" class="uk-form-label">{{ 'Desktop' | trans }}</label>

							<div class="uk-form-controls">
								<select name="cols_project_large" id="form-cols_project_large" class="uk-form-width-small"
										v-model="config.project.columns_large">
									<option value="">{{ 'Inherit' | trans }}</option>
									<option value="1">{{ '1' | trans }}</option>
									<option value="2">{{ '2' | trans }}</option>
									<option value="3">{{ '3' | trans }}</option>
									<option value="4">{{ '4' | trans }}</option>
									<option value="5">{{ '5' | trans }}</option>
									<option value="6">{{ '6' | trans }}</option>
								</select>
							</div>
						</div>

						<div class="uk-form-row">
							<label for="form-cols_project_xlarge" class="uk-form-label">{{ 'Large screens' | trans
								}}</label>

							<div class="uk-form-controls">
								<select name="cols_project_xlarge" id="form-cols_project_xlarge"
										class="uk-form-width-small"
										v-model="config.project.columns_xlarge">
									<option value="">{{ 'Inherit' | trans }}</option>
									<option value="1">{{ '1' | trans }}</option>
									<option value="2">{{ '2' | trans }}</option>
									<option value="3">{{ '3' | trans }}</option>
									<option value="4">{{ '4' | trans }}</option>
									<option value="5">{{ '5' | trans }}</option>
									<option value="6">{{ '6' | trans }}</option>
								</select>
							</div>
						</div>
					</div>


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

					</div>
				</li>
				<li>

					<div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
						<div data-uk-margin>

							<h2 class="uk-margin-remove">{{ 'Data fields' | trans }}</h2>

						</div>
						<div data-uk-margin>

							<button class="uk-button uk-button-primary" v-on="click: save">{{ 'Save' | trans }}</button>

						</div>
					</div>

					<div class="uk-form-horizontal">

						Todo
						<div class="uk-form-row">
							<span class="uk-form-label">{{ 'Extra data fields' | trans }}</span>

							<div class="uk-form-controls uk-form-controls-text">
								<ul class="uk-list uk-list-line">
									<li v-repeat="label: config.datafields">
										{{ label }}
									</li>
								</ul>
							</div>
						</div>

					</div>
				</li>
			</ul>

		</div>
	</div>

</div>
