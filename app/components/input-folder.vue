<template>

    <div @click="pick" :class="class">
        <ul class="uk-float-right uk-subnav pk-subnav-icon">
            <li><a class="pk-icon-delete pk-icon-hover" :title="'Delete' | trans"
                   data-uk-tooltip="{delay: 500, 'pos': 'left'}" @click="remove"></a></li>
        </ul>
        <a class="pk-icon-folder-circle uk-margin-right"></a>
        <a v-if="!folder" class="uk-text-muted">{{ 'Select folder' | trans }}</a>
        <a v-else>{{ folder }}</a>
    </div>

    <v-modal v-ref:modal large>

        <panel-finder :root="storage" v-ref:finder modal></panel-finder>

        <div class="uk-modal-footer uk-text-right">
            <button class="uk-button uk-button-link uk-modal-close" type="button">{{ 'Cancel' | trans }}</button>
            <button class="uk-button uk-button-primary" type="button" :disabled="!hasSelection()" @click="select()">{{ 'Select' | trans }}</button>
        </div>

    </v-modal>

</template>

<script>

    module.exports = {

        props: ['folder', 'class'],

        data: function () {
            return $pagekit;
        },

        methods: {

            pick: function() {
                this.$refs.modal.open();
            },

            select: function() {
                this.folder = this.$refs.finder.getSelected()[0];
                this.$dispatch('folder-selected', this.folder);
                this.$refs.finder.removeSelection();
                this.$refs.modal.close();
            },

            remove: function(e) {
                e.stopPropagation();
                this.folder = ''
            },

            hasSelection: function() {
                var selected = this.$refs.finder.getSelected();
                return selected.length === 1 && !selected[0].match(/\.(.+)$/i);
            }

        }

    };

    Vue.component('input-folder', function (resolve, reject) {
        Vue.asset({
            js: [
                'app/assets/uikit/js/components/upload.min.js',
                'app/system/modules/finder/app/bundle/panel-finder.js'
            ]
        }).then(function () {
            resolve(module.exports);
        })
    });

</script>
