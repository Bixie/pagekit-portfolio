module.exports = Vue.extend({

    data: function () {
        return window.$data;
    },

    ready: function () {
        var vm = this;
        UIkit.nestable(this.$$.datafieldsNestable, {
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
            this.$http.post('admin/system/settings/config', { name: 'bixie/portfolio', config: this.config }, function () {
                this.$notify('Settings saved.');
            }).error(function (data) {
                this.$notify(data, 'danger');
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
                $(this.$$.datafieldsNestable).find('input:last').focus();
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

            template: '<li class="uk-nestable-item" data-name="{{ datafield.name }}">\n    <div class="uk-nestable-panel uk-visible-hover uk-form uk-flex uk-flex-middle">\n        <div class="uk-flex-item-1">\n            <div class="uk-form-row">\n                <small class="uk-form-label uk-text-muted uk-text-truncate" style="text-transform: none"\n                       v-show="datafield.attachValue"\n                       v-class="uk-text-danger: datafield.invalid">{{ datafield.name }}</small>\n                <span class="uk-form-label" v-show="!datafield.attachValue">\n                    <input type="text" class="uk-form-small"\n                           v-on="keyup: safeValue(true)"\n                           v-class="uk-text-danger: datafield.invalid"\n                           v-model="datafield.name"/></span>\n                <div class="uk-form-controls">\n                    <input type="text" class="uk-form-width-large" v-model="datafield.label"/></div>\n                <p class="uk-form-help-block uk-text-danger" v-show="datafield.invalid">{{ datafield.invalid | trans }}</p>\n\n            </div>\n        </div>\n        <div class="">\n            <ul class="uk-subnav pk-subnav-icon">\n                <li><a class="uk-icon uk-margin-small-top pk-icon-hover uk-invisible"\n                       data-uk-tooltip="{delay: 500}" title="{{ \'Link/Unlink name from label\' | trans }}"\n                       v-class="uk-icon-link: !datafield.attachValue, uk-icon-chain-broken: datafield.attachValue"\n                       v-on="click: datafield.attachValue = !datafield.attachValue"></a></li>\n                <li><a class="pk-icon-delete pk-icon-hover uk-invisible" v-on="click: deleteDatafield($index)"></a></li>\n                <li><a class="pk-icon-move pk-icon-hover uk-invisible uk-nestable-handle"></a></li>\n            </ul>\n        </div>\n    </div>\n</li>   \n',

            inherit: true,

            methods: {
                safeValue: function (checkDups) {
                    this.datafield.name = _.escape(_.snakeCase(this.datafield.name));
                    if (checkDups) {
                        this.checkDuplicates();
                    }
                }
            },

            watch: {
                "datafield.label": function (name) {
                    if (this.datafield.attachValue) {
                        this.datafield.name = _.escape(_.snakeCase(name));
                    }
                    this.checkDuplicates();
                }

            }
        }

    }

});

$(function () {

    (new module.exports()).$mount('#portfolio-settings');

});
