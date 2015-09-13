<template>

    <div class="uk-flex uk-flex-wrap" data-uk-margin="">
        <div v-repeat="tag: tags" class="uk-badge uk-margin-small-right">
            <a class="uk-float-right uk-close" v-on="click: removeTag($event, $index)"></a>
            {{ tag }}
        </div>
    </div>

    <div class="uk-flex uk-flex-middle uk-margin">
        <div>
            <div class="uk-position-relative" data-uk-dropdown="">
                <button type="button" class="uk-button uk-button-small">{{ 'Existing' | trans }}</button>

                <div class="uk-dropdown uk-dropdown-small">
                    <ul class="uk-nav uk-nav-dropdown">
                        <li v-repeat="tag: existing"><a
                                v-on="click: addTag($event, tag)">{{ tag }}</a></li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="uk-flex-item-1 uk-margin-small-left">
            <div class="uk-form-password">
                <input type="text" class="uk-width-1-1" v-model="newtag">
                <a class="uk-form-password-toggle" v-on="click: addTag()"><i class="uk-icon-check uk-icon-hover"></i></a>
            </div>
        </div>

    </div>

</template>

<script>

    module.exports = {

        props: ['tags', 'existing'],

        data: function () {
            return {
                'newtag': '',
                'tags': '',
                'existing': ''
            };
        },

        methods: {

            addTag: function(e, tag) {
                if (e) {
                    e.stopImmediatePropagation(); //todo prevent enter from submitting! v-on="keyup:addTag | key 'enter'"
                    e.preventDefault();
                }
                this.tags.push(tag || this.newtag);
                this.$nextTick(function () {
                    UIkit.$html.trigger('resize'); //todo why no check.display or changed.dom???
                });
                this.newtag = '';
            },

            removeTag: function(e, idx) {
                if (e) {
                    e.preventDefault();
                }
                this.tags.$remove(idx)
            }

        }

    };

</script>
