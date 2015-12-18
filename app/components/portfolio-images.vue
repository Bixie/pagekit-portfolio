<template>

    <div class="uk-margin uk-form-stacked">

        <div class="uk-grid uk-margin" data-uk-grid-margin>
            <div class="uk-width-medium-1-2">

                <div class="uk-form-row">
                    <label class="uk-form-label">{{ 'Main image' | trans }}</label>
                    <div class="uk-form-controls">
                        <input-image-meta :image.sync="project.image.main" class="pk-image-max-height"></input-image-meta>
                    </div>
                </div>

            </div>
            <div class="uk-width-medium-1-2">

                <div class="uk-form-row">
                    <label class="uk-form-label">{{ 'Teaser image' | trans }}</label>
                    <div class="uk-form-controls">
                        <input-image-meta :image.sync="project.image.teaser" class="pk-image-max-height"></input-image-meta>
                    </div>
                </div>

            </div>
        </div>

        <div class="uk-margin-large-top uk-form-horizontal uk-panel uk-panel-box">
            <div class="uk-form-row">
                <label class="uk-form-label">{{ 'Image folder' | trans }}</label>

                <div class="uk-form-controls">
                    <ul class="uk-float-right uk-subnav pk-subnav-icon">
                        <li><a class="uk-icon-info pk-icon-hover" data-uk-modal="{target:'#folder-help'}"></a></li>
                    </ul>
                    <input-folder :folder="project.image.folder" class="uk-width-medium-1-2"></input-folder>
                </div>
            </div>
        </div>

        <div v-show="project.images.length" class="uk-margin">
            <ul class="uk-list uk-list-line">
                <portfolioimage v-for="image in project.images" :image="image"></portfolioimage>
            </ul>
        </div>

        <div id="folder-help" class="uk-modal">
            <div class="uk-modal-dialog">
                <a class="uk-modal-close uk-close"></a>
                <div class="uk-modal-header">
                    <h3><i class="pk-icon-info uk-margin-small-right"></i>{{ 'Image folder' | trans }}</h3>
                </div>
                <p>
                    {{ 'Select the folder by checking the checkbox in front of the name! Click "Select" button at bottom to confirm.' | trans }}
                </p>
                <p>
                    {{ 'Images in the folder are sorted by alphabet. Numbers in front of the filename are removed, so you can influence the ordering by naming your images with numbers.' | trans }}
                </p>
            </div>
        </div>

    </div>

</template>

<script>

    module.exports = {

        props: ['project', 'config', 'form'],

        data: function () {
            return {
                images: []
            };
        },

        created: function () {
            this.project.images = this.project.images || [];

            this.imageApi = this.$resource('api/portfolio/image/:source');

            this.$on('folder-selected', function (folder) {
                this.loadFolder(folder);
            });
            if (this.project.image && this.project.image.folder) {
                this.loadFolder(this.project.image.folder)
            }
        },

        methods: {
            loadFolder: function (folder) {
                this.imageApi.query({ folder: folder}).then(function (res) {
                    var data = res.data,
                        existing = this.project.images,
                        images = data.map(function (img) {
                            return _.assign({
                                show_teaser: true,
                                descr: ''
                            }, img, _.find(existing, 'src', img.src));
                        });

                    this.$set('project.images', images);

                });

            }
        },

        components: {

            portfolioimage: require('./portfolio-image.vue')

        }
    };

</script>
