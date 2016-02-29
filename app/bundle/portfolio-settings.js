/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {

	    el: '#portfolio-settings',

	    data: function () {
	        return window.$data;
	    },

	    fields: __webpack_require__(19),

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

	Vue.field.templates.formrow = __webpack_require__(21);
	Vue.field.templates.raw = __webpack_require__(22);
	Vue.field.types.text = '<input type="text" v-bind="attrs" v-model="value">';
	Vue.field.types.textarea = '<textarea v-bind="attrs" v-model="value"></textarea>';
	Vue.field.types.select = '<select v-bind="attrs" v-model="value"><option v-for="option in options" :value="option">{{ $key }}</option></select>';
	Vue.field.types.radio = '<p class="uk-form-controls-condensed"><label v-for="option in options"><input type="radio" :value="option" v-model="value"> {{ $key | trans }}</label></p>';
	Vue.field.types.checkbox = '<p class="uk-form-controls-condensed"><label><input type="checkbox" v-bind="attrs" v-model="value" v-bind:true-value="1" v-bind:false-value="0" number> {{ optionlabel | trans }}</label></p>';
	Vue.field.types.number = '<input type="number" v-bind="attrs" v-model="value" number>';
	Vue.field.types.title = '<h3 v-bind="attrs">{{ title | trans }}</h3>';

	Vue.ready(module.exports);


/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	
	var options = __webpack_require__(20);

	module.exports = {
	    portfolio: {
	        'portfolio_image_align': {
	            type: 'select',
	            label: 'Image alignment',
	            options: options.align.general,
	            attrs: {'class': 'uk-form-width-small'}
	        },
	        'filter_tags': {
	            type: 'checkbox',
	            label: 'Grid filter',
	            optionlabel: 'Filter by tags'
	        },
	        'title1': {
	            raw: true,
	            type: 'title',
	            label: '',
	            title: 'Project columns',
	            attrs: {'class': 'uk-margin-top'}
	        },
	        'columns': {
	            type: 'select',
	            label: 'Phone Portrait',
	            options: options.gridcols.base,
	            attrs: {'class': 'uk-form-width-small'}
	        },
	        'columns_small': {
	            type: 'select',
	            label: 'Phone Landscape',
	            options: options.gridcols.inherit,
	            attrs: {'class': 'uk-form-width-small'}
	        },
	        'columns_medium': {
	            type: 'select',
	            label: 'Tablet',
	            options: options.gridcols.inherit,
	            attrs: {'class': 'uk-form-width-small'}
	        },
	        'columns_large': {
	            type: 'select',
	            label: 'Desktop',
	            options: options.gridcols.inherit,
	            attrs: {'class': 'uk-form-width-small'}
	        },
	        'columns_xlarge': {
	            type: 'select',
	            label: 'Large screens',
	            options: options.gridcols.inherit,
	            attrs: {'class': 'uk-form-width-small'}
	        },
	        'columns_gutter': {
	            type: 'select',
	            label: 'Gutter width',
	            options: options.gutter,
	            attrs: {'class': 'uk-form-width-small'}
	        },
	        'title2': {
	            raw: true,
	            type: 'title',
	            label: '',
	            title: 'Teaser thumbs columns',
	            attrs: {'class': 'uk-margin-top'}
	        },
	        'teaser.columns': {
	            type: 'select',
	            label: 'Phone Portrait',
	            options: options.gridcols.base,
	            attrs: {'class': 'uk-form-width-small'}
	        },
	        'teaser.columns_small': {
	            type: 'select',
	            label: 'Phone Landscape',
	            options: options.gridcols.inherit,
	            attrs: {'class': 'uk-form-width-small'}
	        },
	        'teaser.columns_medium': {
	            type: 'select',
	            label: 'Tablet',
	            options: options.gridcols.inherit,
	            attrs: {'class': 'uk-form-width-small'}
	        },
	        'teaser.columns_large': {
	            type: 'select',
	            label: 'Desktop',
	            options: options.gridcols.inherit,
	            attrs: {'class': 'uk-form-width-small'}
	        },
	        'teaser.columns_xlarge': {
	            type: 'select',
	            label: 'Large screens',
	            options: options.gridcols.inherit,
	            attrs: {'class': 'uk-form-width-small'}
	        }
	    },
	    teaser_show: {
	        'teaser.show_title': {
	            type: 'checkbox',
	            label: 'Show content',
	            optionlabel: 'Show title'
	        },
	        'teaser.show_subtitle': {
	            type: 'checkbox',
	            optionlabel: 'Show subtitle'
	        },
	        'teaser.show_intro': {
	            type: 'checkbox',
	            optionlabel: 'Show intro'
	        },
	        'teaser.show_image': {
	            type: 'checkbox',
	            optionlabel: 'Show image'
	        },
	        'teaser.show_date': {
	            type: 'checkbox',
	            optionlabel: 'Show date'
	        },
	        'teaser.show_client': {
	            type: 'checkbox',
	            optionlabel: 'Show client'
	        },
	        'teaser.show_tags': {
	            type: 'checkbox',
	            optionlabel: 'Show tags'
	        },
	        'teaser.show_thumbs': {
	            type: 'checkbox',
	            optionlabel: 'Show thumbs'
	        },
	        'teaser.show_data': {
	            type: 'checkbox',
	            optionlabel: 'Show data'
	        },
	        'teaser.show_readmore': {
	            type: 'checkbox',
	            optionlabel: 'Show readmore'
	        }
	    },
	    teaser_top: {
	        'teaser.template': {
	            type: 'select',
	            label: 'Teaser template',
	            options: {
	                'Panel': 'panel',
	                'Overlay': 'overlay'
	            },
	            attrs: {'class': 'uk-form-width-medium'}
	        }
	    },
	    template: {
	        panel: {
	            'teaser.panel_style': {
	                type: 'select',
	                label: 'Panel style',
	                options: options.panel_style,
	                attrs: {'class': 'uk-form-width-medium'}
	            }
	        },
	        overlay: {
	            'teaser.overlay': {
	                type: 'select',
	                label: 'Overlay',
	                options: {
	                    'None': '', /*trans*/
	                    'Always': 'uk-overlay', /*trans*/
	                    'On hover': 'uk-overlay uk-overlay-hover' /*trans*/
	                },
	                attrs: {'class': 'uk-form-width-medium'}
	            },
	            'teaser.overlay_position': {
	                type: 'select',
	                label: 'Overlay position',
	                options: {
	                    'Cover image': '', /*trans*/
	                    'Top': 'uk-overlay-top', /*trans*/
	                    'Bottom': 'uk-overlay-bottom', /*trans*/
	                    'Left': 'uk-overlay-left', /*trans*/
	                    'Right': 'uk-overlay-right' /*trans*/
	                },
	                attrs: {'class': 'uk-form-width-medium'}
	            },
	            'teaser.overlay_effect': {
	                type: 'select',
	                label: 'Overlay effect',
	                options: {
	                    'None': '', /*trans*/
	                    'Fade': 'uk-overlay-fade', /*trans*/
	                    'Slide top': 'uk-overlay-slide-top', /*trans*/
	                    'Slide bottom': 'uk-overlay-slide-bottom', /*trans*/
	                    'Slide left': 'uk-overlay-slide-left', /*trans*/
	                    'Slide right': 'uk-overlay-slide-right' /*trans*/
	                },
	                attrs: {'class': 'uk-form-width-medium'}
	            },
	            'teaser.overlay_image_effect': {
	                type: 'select',
	                label: 'Overlay image effect',
	                options: {
	                    'None': '', /*trans*/
	                    'Scale': 'uk-overlay-scale', /*trans*/
	                    'Rotate': 'uk-overlay-rotate', /*trans*/
	                    'Grayscale': 'uk-overlay-grayscale' /*trans*/
	                },
	                attrs: {'class': 'uk-form-width-medium'}
	            }
	        }
	    },
	    teaser_bottom: {
	        'teaser.content_align': {
	            type: 'select',
	            label: 'Content alignment',
	            options: options.align.general,
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'teaser.title_size': {
	            type: 'select',
	            label: 'Teaser title size',
	            options: options.heading_size,
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'teaser.title_color': {
	            type: 'select',
	            label: 'Teaser title color',
	            options: options.text_color,
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'teaser.tags_align': {
	            type: 'select',
	            label: 'Tags alignment',
	            options: options.align.flex,
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'teaser.read_more': {
	            label: 'Read more text',
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'teaser.read_more_style': {
	            type: 'select',
	            label: 'Read more button style',
	            options: {
	                'Overlay (when selected)': 'overlay', /*trans*/
	                'Link': 'uk-link', /*trans*/
	                'Button': 'uk-button', /*trans*/
	                'Button primary': 'uk-button uk-button-primary', /*trans*/
	                'Button success': 'uk-button uk-button-success', /*trans*/
	                'Button link': 'uk-button uk-button-link' /*trans*/
	            },
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'teaser.readmore_align': {
	            type: 'select',
	            label: 'Readmore alignment',
	            options: options.align.text,
	            attrs: {'class': 'uk-form-width-medium'}
	        }
	    },
	    project: {
	        'project.image_align': {
	            type: 'select',
	            label: 'Image alignment',
	            options: options.align.general,
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'project.metadata_position': {
	            type: 'select',
	            label: 'Metadata position',
	            options: options.position.page,
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'project.tags_align': {
	            type: 'select',
	            label: 'Tags alignment',
	            options: options.align.flex,
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'project.tags_position': {
	            type: 'select',
	            label: 'Tags position',
	            options: options.position.page,
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'project.show_navigation': {
	            type: 'select',
	            label: 'Position navigation',
	            options: options.position.nav,
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'project.overlay_title_size': {
	            type: 'select',
	            label: 'Overlay title size',
	            options: options.heading_size,
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'project.overlay': {
	            type: 'select',
	            label: 'Overlay',
	            options: {
	                'None': '',
	                'Always': 'uk-overlay', /*trans*/
	                'On hover': 'uk-overlay uk-overlay-hover' /*trans*/
	            },
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'project.overlay_position': {
	            type: 'select',
	            label: 'Overlay position',
	            options: {
	                'Cover image': '', /*trans*/
	                'Top': 'uk-overlay-top', /*trans*/
	                'Bottom': 'uk-overlay-bottom', /*trans*/
	                'Left': 'uk-overlay-left', /*trans*/
	                'Right': 'uk-overlay-right' /*trans*/
	            },
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'project.overlay_effect': {
	            type: 'select',
	            label: 'Overlay effect',
	            options: {
	                'None': '', /*trans*/
	                'Fade': 'uk-overlay-fade', /*trans*/
	                'Slide top': 'uk-overlay-slide-top', /*trans*/
	                'Slide bottom': 'uk-overlay-slide-bottom', /*trans*/
	                'Slide left': 'uk-overlay-slide-left', /*trans*/
	                'Slide right': 'uk-overlay-slide-right' /*trans*/
	            },
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'project.overlay_image_effect': {
	            type: 'select',
	            label: 'Overlay image effect',
	            options: {
	                'None': '',
	                'Scale': 'uk-overlay-scale', /*trans*/
	                'Rotate': 'uk-overlay-rotate', /*trans*/
	                'Grayscale': 'uk-overlay-grayscale' /*trans*/
	            },
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'title1': {
	            raw: true,
	            type: 'title',
	            label: '',
	            title: 'Image columns',
	            attrs: {'class': 'uk-margin-top'}
	        },
	        'project.columns': {
	            type: 'select',
	            label: 'Phone Portrait',
	            options: options.gridcols.base,
	            attrs: {'class': 'uk-form-width-small'}
	        },
	        'project.columns_small': {
	            type: 'select',
	            label: 'Phone Landscape',
	            options: options.gridcols.inherit,
	            attrs: {'class': 'uk-form-width-small'}
	        },
	        'project.columns_medium': {
	            type: 'select',
	            label: 'Tablet',
	            options: options.gridcols.inherit,
	            attrs: {'class': 'uk-form-width-small'}
	        },
	        'project.columns_large': {
	            type: 'select',
	            label: 'Desktop',
	            options: options.gridcols.inherit,
	            attrs: {'class': 'uk-form-width-small'}
	        },
	        'project.columns_xlarge': {
	            type: 'select',
	            label: 'Large screens',
	            options: options.gridcols.inherit,
	            attrs: {'class': 'uk-form-width-small'}
	        }

	    },
	    general: {
	        'projects_per_page': {
	            type: 'number',
	            label: 'Projects per page',
	            attrs: {'class': 'uk-form-width-small'}
	        },
	        'date_format': {
	            type: 'select',
	            label: 'Date format',
	            options: {
	                'January 2015': 'F Y', /*trans*/
	                'January 15 2015': 'F d Y', /*trans*/
	                '15 January 2015': 'd F Y', /*trans*/
	                'Jan 2015': 'M Y', /*trans*/
	                '1 2015': 'm Y',
	                '1-15-2015': 'm-d-Y',
	                '15-1-2015': 'd-m-Y'
	            },
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'cache_path': {
	            type: 'text',
	            label: 'Cache folder images',
	            attrs: {'class': 'uk-form-width-large'}
	        }

	    }


	};

/***/ },

/***/ 20:
/***/ function(module, exports) {

	module.exports = {
	    gridcols: {
	        base: {
	            '1': '1',
	            '2': '2',
	            '3': '3',
	            '4': '4',
	            '5': '5',
	            '6': '6'
	        },
	        inherit: {
	            'Inherit': '', /*trans*/
	            '1': '1',
	            '2': '2',
	            '3': '3',
	            '4': '4',
	            '5': '5',
	            '6': '6'
	        }
	    },
	    gutter: {
	        'Collapse': '0', /*trans*/
	        '10 px': '10',
	        '20 px': '20',
	        '30 px': '30'
	    },
	    align: {
	        general: {
	            'Left': 'left', /*trans*/
	            'Right': 'right', /*trans*/
	            'Center': 'center' /*trans*/
	        },
	        text: {
	            'Left': 'uk-text-left', /*trans*/
	            'Right': 'uk-text-right', /*trans*/
	            'Center': 'uk-text-center' /*trans*/
	        },
	        flex: {
	            'Left': '', /*trans*/
	            'Right': 'uk-flex-right', /*trans*/
	            'Center': 'uk-flex-center' /*trans*/
	        }
	    },
	    heading_size: {
	        'Heading H1': 'uk-h1', /*trans*/
	        'Heading H2': 'uk-h2', /*trans*/
	        'Heading H3': 'uk-h3', /*trans*/
	        'Heading H4': 'uk-h4', /*trans*/
	        'Large header': 'uk-heading-large', /*trans*/
	        'Module header': 'uk-module-title', /*trans*/
	        'Article header': 'uk-article-title' /*trans*/
	    },
	    text_color: {
	        'Normal': '', /*trans*/
	        'Primary': 'uk-text-primary', /*trans*/
	        'Contrast': 'uk-text-contrast', /*trans*/
	        'Muted': 'uk-text-muted', /*trans*/
	        'Success': 'uk-text-success', /*trans*/
	        'Warning': 'uk-text-warning', /*trans*/
	        'Danger': 'uk-text-danger' /*trans*/
	    },
	    button_style: {
	        'Link': 'uk-link', /*trans*/
	        'Button': 'uk-button', /*trans*/
	        'Button primary': 'uk-button uk-button-primary', /*trans*/
	        'Button success': 'uk-button uk-button-success', /*trans*/
	        'Button link': 'uk-button uk-button-link' /*trans*/
	    },
	    panel_style: {
	        'Raw': '', /*trans*/
	        'Panel box': 'uk-panel-box', /*trans*/
	        'Panel box primary': 'uk-panel-box uk-panel-box-primary', /*trans*/
	        'Panel box secondary': 'uk-panel-box uk-panel-box-secondary', /*trans*/
	        'Panel space': 'uk-panel-space' /*trans*/
	    },
	    position: {
	        page:  {
	            'Don\'t show': '', /*trans*/
	            'Content top': 'content-top', /*trans*/
	            'Sidebar': 'sidebar' /*trans*/
	        },
	        nav:  {
	            'Don\'t show': '', /*trans*/
	            'Top': 'top', /*trans*/
	            'Bottom': 'bottom', /*trans*/
	            'Both': 'both' /*trans*/
	        }
	    }

	};

/***/ },

/***/ 21:
/***/ function(module, exports) {

	module.exports = "<div v-for=\"field in fields\" :class=\"{'uk-form-row': !field.raw}\">\r\n    <label v-if=\"field.label\" class=\"uk-form-label\">\r\n        <i v-if=\"field.tip\" class=\"uk-icon-info uk-icon-hover uk-margin-small-right\" data-uk-tooltip=\"{delay: 100}\" :title=\"field.tip\"></i>\r\n        {{ field.label | trans }}\r\n    </label>\r\n    <div v-if=\"!field.raw\" class=\"uk-form-controls\" :class=\"{'uk-form-controls-text': ['checkbox', 'radio'].indexOf(field.type)>-1}\">\r\n        <field :config=\"field\" :values.sync=\"values\"></field>\r\n    </div>\r\n    <field v-else :config=\"field\" :values.sync=\"values\"></field>\r\n</div>\r\n";

/***/ },

/***/ 22:
/***/ function(module, exports) {

	module.exports = "<template v-for=\"field in fields\">\r\n    <field :config=\"field\" :values.sync=\"values\"></field>\r\n</template>\r\n";

/***/ }

/******/ });