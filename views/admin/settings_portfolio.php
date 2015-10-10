

<div class="uk-grid uk-grid-width-large-1-2 uk-form-horizontal" data-uk-grid-margin="">
	<div>

		<fields config="{{ $options.fields.portfolio }}" model="{{@ config }}" template="formrow"></fields>

	</div>
	<div>

		<fields config="{{ $options.fields.teaser_top }}" model="{{@ config }}" template="formrow"></fields>

		<fields config="{{ $options.fields.template[config.teaser.template] }}" model="{{@ config }}" template="formrow"></fields>

		<fields config="{{ $options.fields.teaser_bottom }}" model="{{@ config }}" template="formrow"></fields>

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

