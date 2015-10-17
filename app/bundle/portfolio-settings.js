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

	module.exports = Vue.extend({

	    data: function () {
	        return window.$data;
	    },

	    fields: __webpack_require__(25),

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

	Vue.field.templates.formrow = __webpack_require__(27);
	Vue.field.templates.raw = __webpack_require__(28);
	Vue.field.types.checkbox = '<p class="uk-form-controls-condensed"><label><input type="checkbox" v-attr="attrs" v-model="value"> {{ optionlabel | trans }}</label></p>';
	Vue.field.types.number = '<input type="number" v-attr="attrs" v-model="value" number>';
	Vue.field.types.title = '<h3 v-attr="attrs">{{ title | trans }}</h3>';

	$(function () {

	    (new module.exports()).$mount('#portfolio-settings');

	});


/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	
	var options = __webpack_require__(26);

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
	                    'None': '',
	                    'Always': 'uk-overlay',
	                    'On hover': 'uk-overlay uk-overlay-hover'
	                },
	                attrs: {'class': 'uk-form-width-medium'}
	            },
	            'teaser.overlay_position': {
	                type: 'select',
	                label: 'Overlay position',
	                options: {
	                    'Cover image': '',
	                    'Top': 'uk-overlay-top',
	                    'Bottom': 'uk-overlay-bottom',
	                    'Left': 'uk-overlay-left',
	                    'Right': 'uk-overlay-right'
	                },
	                attrs: {'class': 'uk-form-width-medium'}
	            },
	            'teaser.overlay_effect': {
	                type: 'select',
	                label: 'Overlay effect',
	                options: {
	                    'None': '',
	                    'Fade': 'uk-overlay-fade',
	                    'Slide top': 'uk-overlay-slide-top',
	                    'Slide bottom': 'uk-overlay-slide-bottom',
	                    'Slide left': 'uk-overlay-slide-left',
	                    'Slide right': 'uk-overlay-slide-right'
	                },
	                attrs: {'class': 'uk-form-width-medium'}
	            },
	            'teaser.overlay_image_effect': {
	                type: 'select',
	                label: 'Overlay image effect',
	                options: {
	                    'None': '',
	                    'Scale': 'uk-overlay-scale',
	                    'Rotate': 'uk-overlay-rotate',
	                    'Grayscale': 'uk-overlay-grayscale'
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
	                'Overlay (when selected)': 'overlay',
	                'Link': 'uk-link',
	                'Button': 'uk-button',
	                'Button primary': 'uk-button uk-button-primary',
	                'Button success': 'uk-button uk-button-success',
	                'Button link': 'uk-button uk-button-link'
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
	                'Always': 'uk-overlay',
	                'On hover': 'uk-overlay uk-overlay-hover'
	            },
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'project.overlay_position': {
	            type: 'select',
	            label: 'Overlay position',
	            options: {
	                'Cover image': '',
	                'Top': 'uk-overlay-top',
	                'Bottom': 'uk-overlay-bottom',
	                'Left': 'uk-overlay-left',
	                'Right': 'uk-overlay-right'
	            },
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'project.overlay_effect': {
	            type: 'select',
	            label: 'Overlay effect',
	            options: {
	                'None': '',
	                'Fade': 'uk-overlay-fade',
	                'Slide top': 'uk-overlay-slide-top',
	                'Slide bottom': 'uk-overlay-slide-bottom',
	                'Slide left': 'uk-overlay-slide-left',
	                'Slide right': 'uk-overlay-slide-right'
	            },
	            attrs: {'class': 'uk-form-width-medium'}
	        },
	        'project.overlay_image_effect': {
	            type: 'select',
	            label: 'Overlay image effect',
	            options: {
	                'None': '',
	                'Scale': 'uk-overlay-scale',
	                'Rotate': 'uk-overlay-rotate',
	                'Grayscale': 'uk-overlay-grayscale'
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
	        'markdown_enabled': {
	            type: 'checkbox',
	            label: 'Markdown',
	            optionlabel: 'Markdown enabled'
	        },
	        'date_format': {
	            type: 'select',
	            label: 'Date format',
	            options: {
	                'January 2015': 'F Y',
	                'January 15 2015': 'F d Y',
	                '15 January 2015': 'd F Y',
	                'Jan 2015': 'M Y',
	                '1 2015': 'm Y',
	                '1-15-2015': 'm-d-Y',
	                '15-1-2015': 'd-m-Y'
	            },
	            attrs: {'class': 'uk-form-width-medium'}
	        }

	    }


	};

/***/ },

/***/ 26:
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
	            'Inherit': '',
	            '1': '1',
	            '2': '2',
	            '3': '3',
	            '4': '4',
	            '5': '5',
	            '6': '6'
	        }
	    },
	    gutter: {
	        'Collapse': '0',
	        '10 px': '10',
	        '20 px': '20',
	        '30 px': '30'
	    },
	    align: {
	        general: {
	            'Left': 'left',
	            'Right': 'right',
	            'Center': 'center'
	        },
	        text: {
	            'Left': 'uk-text-left',
	            'Right': 'uk-text-right',
	            'Center': 'uk-text-center'
	        },
	        flex: {
	            'Left': '',
	            'Right': 'uk-flex-right',
	            'Center': 'uk-flex-center'
	        }
	    },
	    heading_size: {
	        'Heading H1': 'uk-h1',
	        'Heading H2': 'uk-h2',
	        'Heading H3': 'uk-h3',
	        'Heading H4': 'uk-h4',
	        'Large header': 'uk-heading-large',
	        'Module header': 'uk-module-title',
	        'Article header': 'uk-article-title'
	    },
	    text_color: {
	        'Normal': '',
	        'Primary': 'uk-text-primary',
	        'Contrast': 'uk-text-contrast',
	        'Muted': 'uk-text-muted',
	        'Success': 'uk-text-success',
	        'Warning': 'uk-text-warning',
	        'Danger': 'uk-text-danger'
	    },
	    button_style: {
	        'Link': 'uk-link',
	        'Button': 'uk-button',
	        'Button primary': 'uk-button uk-button-primary',
	        'Button success': 'uk-button uk-button-success',
	        'Button link': 'uk-button uk-button-link'
	    },
	    panel_style: {
	        'Raw': '',
	        'Panel box': 'uk-panel-box',
	        'Panel box primary': 'uk-panel-box uk-panel-box-primary',
	        'Panel box secondary': 'uk-panel-box uk-panel-box-secondary',
	        'Panel space': 'uk-panel-space'
	    },
	    position: {
	        page:  {
	            'Don\'t show': '',
	            'Content top': 'content-top',
	            'Sidebar': 'sidebar'
	        },
	        nav:  {
	            'Don\'t show': '',
	            'Top': 'top',
	            'Bottom': 'bottom',
	            'Both': 'both'
	        }
	    }

	};

/***/ },

/***/ 27:
/***/ function(module, exports) {

	module.exports = "<div v-repeat=\"field in fields\" v-class=\"uk-form-row: !field.raw\">\r\n    <label v-if=\"field.label\" class=\"uk-form-label\">{{ field.label | trans }}</label>\r\n    <div v-if=\"!field.raw\" class=\"uk-form-controls\" v-class=\"uk-form-controls-text: ['checkbox', 'radio'].indexOf(field.type)>-1\">\r\n        <field config=\"{{ field }}\" values=\"{{@ values }}\"></field>\r\n    </div>\r\n    <field v-if=\"field.raw\" config=\"{{ field }}\" values=\"{{@ values }}\"></field>\r\n</div>\r\n";

/***/ },

/***/ 28:
/***/ function(module, exports) {

	module.exports = "<template v-repeat=\"field in fields\">\r\n    <field config=\"{{ field }}\" values=\"{{@ values }}\"></field>\r\n</template>\r\n";

/***/ }

/******/ });