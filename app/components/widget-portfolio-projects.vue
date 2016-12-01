<template>

    <div class="uk-grid pk-grid-large pk-width-sidebar-large" data-uk-grid-margin>
        <div class="pk-width-content uk-form-horizontal">

            <div class="uk-form-row">
                <label for="form-title" class="uk-form-label">{{ 'Title' | trans }}</label>
                <div class="uk-form-controls">
                    <input id="form-title" class="uk-form-width-large" type="text" name="title"
                           v-model="widget.title" v-validate:required>
                    <p class="uk-form-help-block uk-text-danger" v-show="form.title.invalid">
                        {{ 'Title cannot be blank.' | trans }}</p>
                </div>
            </div>

            <div class="uk-form-row">
                <label for="form-content_selection" class="uk-form-label">{{ 'Content selectie' | trans }}</label>
                <div class="uk-form-controls">
                    <select id="form-content_selection" v-model="widget.data.content_selection"
                            class="uk-form-width-medium">
                        <option value="random">{{ 'Random' | trans }}</option>
                        <option value="latest">{{ 'New projects first' | trans }}</option>
                        <option value="pick">{{ 'Select items' | trans }}</option>
                    </select>
                </div>
            </div>

            <div v-if="widget.data.content_selection == 'pick'" class="uk-form-row">
                <label class="uk-form-label">{{ 'Select items' | trans }}</label>
                <div class="uk-form-controls">
                    <input-related-items :model.sync="widget.data.items"
                                         :selected.sync="widget.data.items_data"
                                         resource="api/portfolio/project"
                                         name="projects"></input-related-items>
                </div>
            </div>

            <div class="uk-form-row">
                <label for="form-count" class="uk-form-label">{{ 'Count' | trans }}</label>
                <div class="uk-form-controls">
                    <input id="form-count" class="uk-form-width-small uk-text-right" type="number" name="count"
                           v-model="widget.data.count" min="0" number>
                </div>
            </div>

            <h3>{{ 'Teaser settings' | trans }}</h3>

            <div class="uk-grid uk-grid-width-medium-1-2" data-uk-grid-margin>
                <div>
                    <div class="uk-form-row">
                        <span class="uk-form-label">{{ 'Show content' | trans }}</span>

                        <div class="uk-form-controls uk-form-controls-text">

                            <bixie-fields-raw :config="$options.fields.teaser_show" :values.sync="widget.data"></bixie-fields-raw>

                        </div>
                    </div>

                    <bixie-fields :config="$options.fields.teaser_top" :values.sync="widget.data"></bixie-fields>

                    <bixie-fields :config="$options.fields.template[widget.data.teaser.template]" :values.sync="widget.data"></bixie-fields>


                </div>
                <div>

                    <bixie-fields :config="$options.fields.teaser_bottom" :values.sync="widget.data"></bixie-fields>

                    <div class="uk-form-row">
                        <label for="form-project_image_align" class="uk-form-label">{{ 'Thumbs size' | trans }}</label>

                        <div class="uk-form-controls uk-form-controls-text">
                            <p class="uk-form-controls-condensed">
                                <label class="uk-form-label" style="width: 70px">{{ 'Width' | trans }}</label>
                                <input type="number" placeholder="{{ 'Auto' | trans }}" class="uk-form-width-small"
                                       v-model="widget.data.teaser.thumbsize.width">
                            </p>
                            <p class="uk-form-controls-condensed">
                                <label class="uk-form-label" style="width: 70px">{{ 'Height' | trans }}</label>
                                <input type="number" placeholder="{{ 'Auto' | trans }}" class="uk-form-width-small"
                                       v-model="widget.data.teaser.thumbsize.height">

                            </p>

                        </div>
                    </div>

                    <bixie-fields :config="$options.fields.teaser_columns" :values.sync="widget.data"></bixie-fields>

                </div>
            </div>

        </div>
        <div class="pk-width-sidebar">

            <partial name="settings"></partial>

        </div>
    </div>

</template>

<script>

    module.exports = {

        section: {
            label: 'Settings'
        },

        replace: false,

        fields: require('../settings/fields'),

        props: ['widget', 'config', 'form'],

        created: function () {
            this.$options.partials = this.$parent.$options.partials;
            this.$set('widget.data.content_selection', this.widget.data.content_selection || 'random');
            this.$set('widget.data.layout', this.widget.data.layout || 'panel');
            this.$set('widget.data.count', this.widget.data.count || 4);
            this.$set('widget.data.items', this.widget.data.items || []);
            this.$set('widget.data.items_data', this.widget.data.items_data || []);
            this.$set('widget.data.teaser', this.widget.data.teaser || {
                    'show_title': true,
                    'show_subtitle': true,
                    'show_intro': true,
                    'show_image': true,
                    'show_client': true,
                    'show_tags': true,
                    'show_date': true,
                    'show_data': true,
                    'show_readmore': true,
                    'show_thumbs': true,
                    'template': 'panel',
                    'panel_style': 'uk-panel-box',
                    'overlay': 'uk-overlay uk-overlay-hover',
                    'overlay_position': '',
                    'overlay_effect': 'uk-overlay-fade',
                    'overlay_image_effect': 'uk-overlay-scale',
                    'content_align': 'left',
                    'tags_align': 'uk-flex-center',
                    'title_size': 'uk-h3',
                    'title_color': '',
                    'read_more': 'Read more',
                    'link_image': 'uk-button',
                    'read_more_style': 'uk-button',
                    'readmore_align': 'uk-text-center',
                    'thumbsize': {'width': 400, 'height': ''},
                    'columns': 1,
                    'columns_small': 2,
                    'columns_medium': '',
                    'columns_large': 4,
                    'columns_xlarge': 6,
                    'columns_gutter': 20
                });
        },

    };
    require('../form-fields/fields');

    window.Vue.component('input-related-items', require('../../../pk-framework/app/components/input-related-items.vue'));
    window.Vue.component('table-list', require('../../../pk-framework/app/components/table-list.vue'));

    window.Widgets.components['bixie-portfolio-projects:settings'] = module.exports;

</script>
