
<div class="uk-form-horizontal">

	<div class="uk-form-row">
		<label for="form-project_image_align" class="uk-form-label">{{ 'Image align' | trans }}</label>

		<div class="uk-form-controls">
			<select name="project_image_align" id="form-project_image_align" class="uk-form-width-medium"
					v-model="config.project.image_align">
				<option value="left">{{ 'Left' | trans }}</option>
				<option value="right">{{ 'Right' | trans }}</option>
			</select>
		</div>
	</div>

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

	<div class="uk-form-row">
		<label for="form-project_metadata_position" class="uk-form-label">{{ 'Metadata position' | trans }}</label>

		<div class="uk-form-controls">
			<select name="project_metadata_position" id="form-project_metadata_position" class="uk-form-width-medium"
					v-model="config.project.metadata_position">
				<option value="">{{ "Don't show" | trans }}</option>
				<option value="content-top">{{ 'Content top' | trans }}</option>
				<option value="sidebar">{{ 'Sidebar' | trans }}</option>
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
		<label for="form-project_tags_position" class="uk-form-label">{{ 'Tags position' | trans }}</label>

		<div class="uk-form-controls">
			<select name="project_tags_position" id="form-project_tags_position" class="uk-form-width-medium"
					v-model="config.project.tags_position">
				<option value="">{{ "Don't show" | trans }}</option>
				<option value="content-bottom">{{ 'Content bottom' | trans }}</option>
				<option value="sidebar">{{ 'Sidebar' | trans }}</option>
			</select>
		</div>
	</div>

	<div class="uk-form-row">
		<label for="form-project_show_navigation" class="uk-form-label">{{ 'Show navigation' | trans }}</label>

		<div class="uk-form-controls">
			<select name="project_show_navigation" id="form-project_show_navigation" class="uk-form-width-medium"
					v-model="config.project.show_navigation">
				<option value="">{{ 'None' | trans }}</option>
				<option value="top">{{ 'Top' | trans }}</option>
				<option value="bottom">{{ 'Bottom' | trans }}</option>
				<option value="both">{{ 'Both' | trans }}</option>
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

