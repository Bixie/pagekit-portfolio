<template>

    <div class="uk-flex uk-flex-wrap" data-uk-margin="">
        <div v-for="tag in tags" class="uk-badge uk-margin-small-right">
            <a class="uk-float-right uk-close" @click.prevent="removeTag(tag)"></a>
            {{ tag }}
        </div>
    </div>

    <div class="uk-flex uk-flex-middle uk-margin">
        <div>
            <div class="uk-position-relative" data-uk-dropdown="">
                <button type="button" class="uk-button uk-button-small">{{ 'Existing' | trans }}</button>

                <div class="uk-dropdown uk-dropdown-small">
                    <ul class="uk-nav uk-nav-dropdown">
                        <li v-for="tag in existing"><a
                                @click="addTag(tag)">{{ tag }}</a></li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="uk-flex-item-1 uk-margin-small-left">
            <div class="uk-form-password">
                <input type="text" class="uk-width-1-1" v-model="newtag">
                <a class="uk-form-password-toggle" @click.prevent="addTag()" @keyup.enter.prevent="addTag()">
                    <i class="uk-icon-check uk-icon-hover"></i></a>
            </div>
        </div>

    </div>

</template>

<script>

    module.exports = {

        props: {
            'tags': {
                type: Array,
                default: []
            },
            'existing': {
                type: Object,
                default: {}
            }
        },

        data: function () {
            return {
                'newtag': ''
            };
        },

        methods: {

            addTag: function(tag) {
                this.tags.push(tag || this.newtag);
                this.$nextTick(function () {
                    UIkit.$html.trigger('resize'); //todo why no check.display or changed.dom???
                });
                this.newtag = '';
            },

            removeTag: function(tag) {
                this.tags.$remove(tag)
            }

        }

    };

</script>
