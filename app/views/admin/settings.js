module.exports = {

    el: '#portfolio-settings',

    data: function () {
        return window.$data;
    },

    fields: require('../../settings/fields'),

    ready: function () {
        var vm = this;
        UIkit.nestable(this.$els.datafieldsNestable, {
            maxDepth: 1,
            handleClass: 'uk-nestable-handle',
            group: 'portfolio.datafields'
        }).on('change.uk.nestable', function (e, nestable, el, type) {
            if (type && type !== 'removed') {

                var datafields = [];
                _.forEach(nestable.list(), function (option) {
                    datafields.push(_.find(vm.config.datafields, 'name', option.name));
                });

                vm.$set('config.datafields', datafields);

            }
        });
        this.imageApi = this.$resource('api/portfolio/image/:task');

    },

    methods: {

        save: function () {
            this.$http.post('admin/portfolio/config', { config: this.config }).then(function () {
                this.$notify('Settings saved.');
            }, function (res) {
                this.$notify(res.data, 'danger');
            });
        },

        addDatafield: function () {
            this.config.datafields.push({
                name: '',
                label: '',
                attachValue: true,
                invalid: false
            });
            this.$nextTick(function () {
                $(this.$els.datafieldsNestable).find('input:last').focus();
            });
        },

        deleteDatafield: function (idx) {
            this.config.datafields.$remove(idx);
            this.checkDuplicates();
        },

        clearCache: function () {
            this.imageApi.query({task: 'clearcache'}, function (data) {
                this.$notify(data.message);
            });
        },

        checkDuplicates: function () {
            var current, dups = [];
            _.sortBy(this.config.datafields, 'name').forEach(function (datafield) {
                if (current && current === datafield.name) {
                    dups.push(datafield.name);
                }
                current = datafield.name;
            });
            this.config.datafields.forEach(function (datafield) {
                datafield.invalid = dups.indexOf(datafield.name) > -1 ? 'Duplicate name' : false;
            });
        }

    },

    components: {

        datafield: {

            template: '<li class="uk-nestable-item" data-name="{{ datafield.name }}">\n    <div class="uk-nestable-panel uk-visible-hover uk-form uk-flex uk-flex-middle">\n        <div class="uk-flex-item-1">\n            <div class="uk-form-row">\n                <small class="uk-form-label uk-text-muted uk-text-truncate" style="text-transform: none"\n                       v-show="datafield.attachValue"\n                       :class="{\'uk-text-danger\': datafield.invalid}">{{ datafield.name }}</small>\n                <span class="uk-form-label" v-show="!datafield.attachValue">\n                    <input type="text" class="uk-form-small"\n                           @keyup="safeValue(true)"\n                           :class="{\'uk-text-danger\': datafield.invalid}"\n                           v-model="datafield.name"/></span>\n                <div class="uk-form-controls">\n                    <input type="text" class="uk-form-width-large" v-model="datafield.label"/></div>\n                <p class="uk-form-help-block uk-text-danger" v-show="datafield.invalid">{{ datafield.invalid | trans }}</p>\n\n            </div>\n        </div>\n        <div class="">\n            <ul class="uk-subnav pk-subnav-icon">\n                <li><a class="uk-icon uk-margin-small-top pk-icon-hover uk-invisible"\n                       data-uk-tooltip="{delay: 500}" :title="\'Link/Unlink name from label\' | trans"\n                       :class="{\'uk-icon-link\': !datafield.attachValue, \'uk-icon-chain-broken\': datafield.attachValue}"\n                       @click="datafield.attachValue = !datafield.attachValue"></a></li>\n                <li><a class="pk-icon-delete pk-icon-hover uk-invisible" @click="$parent.deleteDatafield(datafield)"></a></li>\n                <li><a class="pk-icon-move pk-icon-hover uk-invisible uk-nestable-handle"></a></li>\n            </ul>\n        </div>\n    </div>\n</li>   \n',

            props: ['datafield'],

            methods: {
                safeValue: function (checkDups) {
                    this.datafield.name = _.escape(_.snakeCase(this.datafield.name));
                    if (checkDups) {
                        this.$parent.checkDuplicates();
                    }
                }
            },

            watch: {
                "datafield.label": function (name) {
                    if (this.datafield.attachValue) {
                        this.datafield.name = _.escape(_.snakeCase(name));
                    }
                    this.$parent.checkDuplicates();
                }

            }
        }

    }

};

Vue.field.templates.formrow = require('../../templates/formrow.html');
Vue.field.templates.raw = require('../../templates/raw.html');
Vue.field.types.text = '<input type="text" v-bind="attrs" v-model="value">';
Vue.field.types.textarea = '<textarea v-bind="attrs" v-model="value"></textarea>';
Vue.field.types.select = '<select v-bind="attrs" v-model="value"><option v-for="option in options" :value="option">{{ $key }}</option></select>';
Vue.field.types.radio = '<p class="uk-form-controls-condensed"><label v-for="option in options"><input type="radio" :value="option" v-model="value"> {{ $key | trans }}</label></p>';
Vue.field.types.checkbox = '<p class="uk-form-controls-condensed"><label><input type="checkbox" v-bind="attrs" v-model="value" v-bind:true-value="1" v-bind:false-value="0" number> {{ optionlabel | trans }}</label></p>';
Vue.field.types.number = '<input type="number" v-bind="attrs" v-model="value" number>';
Vue.field.types.title = '<h3 v-bind="attrs">{{ title | trans }}</h3>';

Vue.ready(module.exports);
