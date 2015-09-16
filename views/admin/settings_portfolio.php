

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

		<h3>{{ 'Teaser thumbs columns' | trans }}</h3>
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
			<label for="form-teaser_template" class="uk-form-label">{{ 'Teaser template' | trans }}</label>

			<div class="uk-form-controls">
				<select name="teaser_template" id="form-teaser_template" class="uk-form-width-medium"
						v-model="config.teaser.template">
					<option value="panel">{{ 'Panel' | trans }}</option>
					<option value="overlay">{{ 'Overlay' | trans }}</option>
				</select>
			</div>
		</div>

		<div v-show="config.teaser.template == 'panel'" class="uk-form-row">
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

		<div v-show="config.teaser.template == 'overlay'" class="uk-form-row">
			<label for="form-teaser_overlay" class="uk-form-label">{{ 'Overlay' | trans }}</label>

			<div class="uk-form-controls">
				<select name="teaser_overlay" id="form-teaser_overlay" class="uk-form-width-medium"
						v-model="config.teaser.overlay">
					<option value="">{{ 'None' | trans }}</option>
					<option value="uk-overlay">{{ 'Always' | trans }}</option>
					<option value="uk-overlay uk-overlay-hover">{{ 'On hover' | trans }}</option>
				</select>
			</div>
		</div>

		<div v-show="config.teaser.template == 'overlay'" class="uk-form-row">
			<label for="form-teaser_overlay_position" class="uk-form-label">{{ 'Overlay position' | trans }}</label>

			<div class="uk-form-controls">
				<select name="teaser_overlay_teaser_position" id="form-teaser_overlay_position" class="uk-form-width-medium"
						v-model="config.teaser.overlay_position">
					<option value="">{{ 'Cover image' | trans }}</option>
					<option value="uk-overlay-top">{{ 'Top' | trans }}</option>
					<option value="uk-overlay-bottom">{{ 'Bottom' | trans }}</option>
					<option value="uk-overlay-left">{{ 'Left' | trans }}</option>
					<option value="uk-overlay-right">{{ 'Right' | trans }}</option>
				</select>
			</div>
		</div>

		<div v-show="config.teaser.template == 'overlay'" class="uk-form-row">
			<label for="form-teaser_overlay_effect" class="uk-form-label">{{ 'Overlay effect' | trans }}</label>

			<div class="uk-form-controls">
				<select name="teaser_overlay_effect" id="form-teaser_overlay_effect" class="uk-form-width-medium"
						v-model="config.teaser.overlay_effect">
					<option value="">{{ 'None' | trans }}</option>
					<option value="uk-overlay-fade">{{ 'Fade' | trans }}</option>
					<option value="uk-overlay-slide-top">{{ 'Slide top' | trans }}</option>
					<option value="uk-overlay-slide-bottom">{{ 'Slide bottom' | trans }}</option>
					<option value="uk-overlay-slide-left">{{ 'Slide left' | trans }}</option>
					<option value="uk-overlay-slide-right">{{ 'Slide right' | trans }}</option>
				</select>
			</div>
		</div>

		<div v-show="config.teaser.template == 'overlay'" class="uk-form-row">
			<label for="form-teaser_image_effect" class="uk-form-label">{{ 'Overlay image effect' | trans }}</label>

			<div class="uk-form-controls">
				<select name="teaser_image_effect" id="form-teaser_image_effect" class="uk-form-width-medium"
						v-model="config.teaser.overlay_image_effect">
					<option value="">{{ 'None' | trans }}</option>
					<option value="uk-overlay-scale">{{ 'Scale' | trans }}</option>
					<option value="uk-overlay-spin">{{ 'Rotate' | trans }}</option>
					<option value="uk-overlay-grayscale">{{ 'Grayscale' | trans }}</option>
				</select>
			</div>
		</div>

		<div class="uk-form-row">
			<label for="form-teaser_content_align" class="uk-form-label">{{ 'Content alignment' | trans }}</label>

			<div class="uk-form-controls">
				<select name="teaser_content_align" id="form-teaser_content_align" class="uk-form-width-medium"
						v-model="config.teaser.content_align">
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
					<option v-show="config.teaser.template == 'overlay'" value="overlay">{{ 'Overlay' | trans }}</option>
					<option value="uk-link">{{ 'Link' | trans }}</option>
					<option value="uk-button">{{ 'Button' | trans }}</option>
					<option value="uk-button uk-button-success">{{ 'Button Success' | trans }}</option>
					<option value="uk-button uk-button-primary">{{ 'Button Primary' | trans }}</option>
				</select>
			</div>
		</div>

		<div class="uk-form-row">
			<label for="form-teaser_readmore_align" class="uk-form-label">{{ 'Read more alignment' | trans }}</label>

			<div class="uk-form-controls">
				<select name="teaser_readmore_align" id="form-teaser_readmore_align" class="uk-form-width-medium"
						v-model="config.teaser.readmore_align">
					<option value="uk-text-left">{{ 'Left' | trans }}</option>
					<option value="uk-text-right">{{ 'Right' | trans }}</option>
					<option value="uk-text-center">{{ 'Center' | trans }}</option>
				</select>
			</div>
		</div>

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

