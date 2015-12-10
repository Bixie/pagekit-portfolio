<template>

    <li>
        <div class="uk-grid" data-uk-grid-margin="">
            <div class="uk-width-medium-1-5">

                <div class="uk-overlay uk-overlay-hover uk-visible-hover pk-image-max-height">

                    <img :src="$url(image.src)" :alt="image.filename">

                    <div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
                </div>

            </div>
            <div class="uk-width-medium-2-5">
                <div class="uk-form-row">
                    <div class="uk-form-controls">
                        <input type="text" v-model="image.title" class="uk-form-large uk-form-width-large"
                               placeholder="{{ 'Image title' | trans }}"/><br>
                    </div>
                </div>
                <div class="uk-form-row">
                    <div class="uk-form-controls">
                            <textarea v-model="image.descr" rows="3" class="uk-form-width-large"
                                      placeholder="{{ 'Image description' | trans }}"></textarea>
                    </div>
                </div>
            </div>
            <div class="uk-width-medium-2-5">
                <div class="uk-form-row">
                    <span class="uk-form-label">{{ 'Options' | trans }}</span>
                    <div class="uk-form-controls uk-form-controls-text">
                        <label>
                            <input type="checkbox" value="show-teaser" v-model="image.show_teaser"> {{ 'Show in teaser' |
                            trans }}</label>
                    </div>
                </div>
            </div>
        </div>
    </li>


</template>

<script>

    module.exports = {

        props: ['image']

    };

</script>
