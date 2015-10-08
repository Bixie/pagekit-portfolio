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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Vue.extend({

	    data: function () {
	        return _.merge({
	            tags: [],
	            project: {}
	        }, window.$data);
	    },

	    created: function () {
	        //check existing datafields
	        this.config.datafields.forEach(function (datafield) {
	            this.project.data[datafield.name] =  this.project.data[datafield.name] || '';
	        }.bind(this));
	    },

	    ready: function () {
	        this.Project = this.$resource('api/portfolio/project/:id');
	        this.tab = UIkit.tab(this.$$.tab, {connect: this.$$.content});
	    },

	    methods: {

	        save: function (e) {

	            e.preventDefault();

	            var data = {project: this.project};

	            this.$broadcast('save', data);

	            this.Project.save({id: this.project.id}, data, function (data) {

	                if (!this.project.id) {
	                    window.history.replaceState({}, '', this.$url.route('admin/portfolio/project/edit', {id: data.project.id}))
	                }

	                this.$set('project', data.project);

	                this.$notify(this.$trans('Project %title% saved.', {title: this.project.title}));

	            }, function (data) {
	                this.$notify(data, 'danger');
	            });
	        }

	    },

	    components: {

	        portfoliobasic: __webpack_require__(7),
	        portfolioimages: __webpack_require__(10),
	        portfoliodata: __webpack_require__(16),
	        'input-tags': __webpack_require__(19),
	        'input-folder': __webpack_require__(22)

	    }

	});

	$(function () {

	    (new module.exports()).$mount('#project-edit');

	});


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8)
	module.exports.template = __webpack_require__(9)


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {

	        inherit: true,

	        computed: {

	            statusOptions: function () {
	                return _.map(this.statuses, function (status, id) { return { text: status, value: id }; });
	            }

	        }

	    };

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-margin\">\r\n        <div class=\"uk-grid pk-grid-large\" data-uk-grid-margin>\r\n            <div class=\"uk-flex-item-1\">\r\n                <div class=\"uk-form-horizontal uk-margin\">\r\n                    <div class=\"uk-form-row\">\r\n                        <label for=\"form-title\" class=\"uk-form-label\">{{ 'Title' | trans }}</label>\r\n\r\n                        <div class=\"uk-form-controls\">\r\n                            <input id=\"form-title\" class=\"uk-width-1-1 uk-form-large\" type=\"text\" name=\"title\"\r\n                                   v-model=\"project.title\" v-validate=\"required\">\r\n                        </div>\r\n                        <p class=\"uk-form-help-block uk-text-danger\" v-show=\"form.title.invalid\">{{ 'Please enter a\r\n                            title' | trans }}</p>\r\n                    </div>\r\n\r\n                    <div class=\"uk-form-row\">\r\n                        <label for=\"form-subtitle\" class=\"uk-form-label\">{{ 'Subtitle' | trans }}</label>\r\n\r\n                        <div class=\"uk-form-controls\">\r\n                            <input id=\"form-subtitle\" class=\"uk-width-1-1\" type=\"text\" name=\"subtitle\"\r\n                                   v-model=\"project.subtitle\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"uk-form-stacked uk-margin\">\r\n                    <div class=\"uk-form-row\">\r\n                        <span class=\"uk-form-label\">{{ 'Intro' | trans }}</span>\r\n\r\n                        <div class=\"uk-form-controls\">\r\n                            <v-editor id=\"form-intro\" value=\"{{@ project.intro }}\"\r\n                                      options=\"{{ {markdown : project.data.markdown, height: 250} }}\"></v-editor>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"uk-form-row\">\r\n                        <span class=\"uk-form-label\">{{ 'Content' | trans }}</span>\r\n\r\n                        <div class=\"uk-form-controls\">\r\n                            <v-editor id=\"form-content\" value=\"{{@ project.content }}\"\r\n                                      options=\"{{ {markdown : project.data.markdown} }}\"></v-editor>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"pk-width-sidebar pk-width-sidebar-large uk-form-stacked\">\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <label for=\"form-slug\" class=\"uk-form-label\">{{ 'Slug' | trans }}</label>\r\n\r\n                    <div class=\"uk-form-controls\">\r\n                        <input id=\"form-slug\" class=\"uk-width-1-1\" type=\"text\" v-model=\"project.slug\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <label for=\"form-status\" class=\"uk-form-label\">{{ 'Status' | trans }}</label>\r\n                    <div class=\"uk-form-controls\">\r\n                        <select id=\"form-status\" class=\"uk-width-1-1\" v-model=\"project.status\" options=\"statusOptions\"></select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <label for=\"form-client\" class=\"uk-form-label\">{{ 'Client' | trans }}</label>\r\n\r\n                    <div class=\"uk-form-controls\">\r\n                        <input id=\"form-client\" class=\"uk-width-1-1\" type=\"text\" v-model=\"project.client\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <span class=\"uk-form-label\">{{ 'Date' | trans }}</span>\r\n                    <div class=\"uk-form-controls\">\r\n                        <input-date datetime=\"{{@ project.date}}\"></input-date>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <span class=\"uk-form-label\">{{ 'Tags' | trans }}</span>\r\n                    <div class=\"uk-form-controls\">\r\n                        <input-tags tags=\"{{@ project.tags}}\" existing=\"{{ tags }}\"></input-tags>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <span class=\"uk-form-label\">{{ 'Options' | trans }}</span>\r\n                    <div class=\"uk-form-controls uk-form-controls-text\">\r\n                        <label>\r\n                            <input type=\"checkbox\" value=\"markdown\" v-model=\"project.data.markdown\"> {{ 'Enable Markdown' |\r\n                            trans }}</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11)
	module.exports.template = __webpack_require__(15)


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {

	        inherit: true,

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
	                this.imageApi.query({ folder: folder }, function (data) {
	                    var existing = this.project.images,
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

	            portfolioimage: __webpack_require__(12)

	        }
	    };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13)
	module.exports.template = __webpack_require__(14)


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {

	        inherit: true

	    };

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<li>\r\n        <div class=\"uk-grid\" data-uk-grid-margin=\"\">\r\n            <div class=\"uk-width-medium-1-5\">\r\n\r\n                <div class=\"uk-overlay uk-overlay-hover uk-visible-hover pk-image-max-height\">\r\n\r\n                    <img v-attr=\"src: $url(image.src)\" alt=\"{{ image.filename }}\">\r\n\r\n                    <div class=\"uk-overlay-panel uk-overlay-background uk-overlay-fade\"></div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"uk-width-medium-2-5\">\r\n                <div class=\"uk-form-row\">\r\n                    <div class=\"uk-form-controls\">\r\n                        <input type=\"text\" v-model=\"image.title\" class=\"uk-form-large uk-form-width-large\"\r\n                               placeholder=\"{{ 'Image title' | trans }}\"/><br>\r\n                    </div>\r\n                </div>\r\n                <div class=\"uk-form-row\">\r\n                    <div class=\"uk-form-controls\">\r\n                            <textarea v-model=\"image.descr\" rows=\"3\" class=\"uk-form-width-large\"\r\n                                      placeholder=\"{{ 'Image description' | trans }}\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"uk-width-medium-2-5\">\r\n                <div class=\"uk-form-row\">\r\n                    <span class=\"uk-form-label\">{{ 'Options' | trans }}</span>\r\n                    <div class=\"uk-form-controls uk-form-controls-text\">\r\n                        <label>\r\n                            <input type=\"checkbox\" value=\"show-teaser\" v-model=\"image.show_teaser\"> {{ 'Show in teaser' |\r\n                            trans }}</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>";

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-margin uk-form-stacked\">\r\n\r\n        <div class=\"uk-grid uk-margin\" data-uk-frid-margin>\r\n            <div class=\"uk-width-medium-1-2\">\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <label class=\"uk-form-label\">{{ 'Main image' | trans }}</label>\r\n                    <div class=\"uk-form-controls\">\r\n                        <input-image-meta image=\"{{@ project.image.main }}\" class=\"pk-image-max-height\"></input-image-meta>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"uk-width-medium-1-2\">\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <label class=\"uk-form-label\">{{ 'Teaser image' | trans }}</label>\r\n                    <div class=\"uk-form-controls\">\r\n                        <input-image-meta image=\"{{@ project.image.teaser }}\" class=\"pk-image-max-height\"></input-image-meta>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-margin-large-top uk-form-horizontal uk-panel uk-panel-box\">\r\n            <div class=\"uk-form-row\">\r\n                <label class=\"uk-form-label\">{{ 'Image folder' | trans }}</label>\r\n\r\n                <div class=\"uk-form-controls\">\r\n                    <ul class=\"uk-float-right uk-subnav pk-subnav-icon\">\r\n                        <li><a class=\"pk-icon-help pk-icon-hover\" data-uk-modal=\"{target:'#folder-help'}\"></a></li>\r\n                    </ul>\r\n                    <input-folder folder=\"{{@ project.image.folder }}\" class=\"uk-width-medium-1-2\"></input-folder>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div v-show=\"project.images.length\" class=\"uk-margin\">\r\n            <ul class=\"uk-list uk-list-line\">\r\n                <portfolioimage v-repeat=\"image: project.images\"></portfolioimage>\r\n            </ul>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div id=\"folder-help\" class=\"uk-modal\">\r\n        <div class=\"uk-modal-dialog\">\r\n            <a class=\"uk-modal-close uk-close\"></a>\r\n            <div class=\"uk-modal-header\">\r\n                <h3><i class=\"pk-icon-info uk-margin-small-right\"></i>{{ 'Image folder' | trans }}</h3>\r\n            </div>\r\n            <p>\r\n                {{ 'Select the folder by checking the checkbox in front of the name! Click \"Select\" button at bottom to confirm.' | trans }}\r\n            </p>\r\n            <p>\r\n                {{ 'Images in the folder are sorted by alphabet. Numbers in front of the filename are removed, so you can influence the ordering by naming your images with numbers.' | trans }}\r\n            </p>\r\n        </div>\r\n    </div>";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17)
	module.exports.template = __webpack_require__(18)


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {

	        inherit: true,

	        created: function () {
	            this.$on('datafieldvalue.changed', function (name, value) {
	                this.project.data[name] = value;
	            });
	        },

	        components: {

	            datafieldvalue: {

	                data: function () {
	                    return {
	                        datafield: '',
	                        value: ''
	                    }
	                },

	                props: ['datafield', 'value'],

	                template: '<label for="form-{{ datafield.name }}" class="uk-form-label">{{ datafield.label }}</label>\n<div class="uk-form-controls">\n    <input id="form-{{ datafield.name }}" class="uk-form-width-medium" type="text" name="{{ datafield.name }}"\n           v-model="value">\n</div>\n',

	                watch: {
	                    value: function (value) {
	                        this.$dispatch('datafieldvalue.changed', this.datafield.name, value);
	                    }
	                }

	            }

	        }

	    };

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-form-horizontal uk-margin\">\r\n        <div v-repeat=\"datafield: config.datafields\" class=\"uk-form-row\">\r\n\r\n           <datafieldvalue datafield=\"{{ datafield }}\" value=\"{{@ project.data[datafield.name] }}\"></datafieldvalue>\r\n\r\n        </div>\r\n    </div>";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20)
	module.exports.template = __webpack_require__(21)


/***/ },
/* 20 */
/***/ function(module, exports) {

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

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-flex uk-flex-wrap\" data-uk-margin=\"\">\r\n        <div v-repeat=\"tag: tags\" class=\"uk-badge uk-margin-small-right\">\r\n            <a class=\"uk-float-right uk-close\" v-on=\"click: removeTag($event, $index)\"></a>\r\n            {{ tag }}\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"uk-flex uk-flex-middle uk-margin\">\r\n        <div>\r\n            <div class=\"uk-position-relative\" data-uk-dropdown=\"\">\r\n                <button type=\"button\" class=\"uk-button uk-button-small\">{{ 'Existing' | trans }}</button>\r\n\r\n                <div class=\"uk-dropdown uk-dropdown-small\">\r\n                    <ul class=\"uk-nav uk-nav-dropdown\">\r\n                        <li v-repeat=\"tag: existing\"><a\r\n                                v-on=\"click: addTag($event, tag)\">{{ tag }}</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"uk-flex-item-1 uk-margin-small-left\">\r\n            <div class=\"uk-form-password\">\r\n                <input type=\"text\" class=\"uk-width-1-1\" v-model=\"newtag\">\r\n                <a class=\"uk-form-password-toggle\" v-on=\"click: addTag()\"><i class=\"uk-icon-check uk-icon-hover\"></i></a>\r\n            </div>\r\n        </div>\r\n\r\n    </div>";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(23)
	module.exports.template = __webpack_require__(24)


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = {

	        props: ['folder', 'class'],

	        data: function () {
	            return _.merge({
	                'folder': '',
	                'class': ''
	            }, $pagekit);
	        },

	        methods: {

	            pick: function() {
	                this.$.modal.open();
	            },

	            select: function() {
	                this.folder = this.$.finder.getSelected()[0];
	                this.$dispatch('folder-selected', this.folder);
	                this.$.finder.removeSelection();
	                this.$.modal.close();
	            },

	            remove: function(e) {
	                e.stopPropagation();
	                this.folder = ''
	            },

	            hasSelection: function() {
	                var selected = this.$.finder.getSelected();
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
	        }, function () {
	            resolve(module.exports);
	        })
	    });

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div v-on=\"click: pick\" class=\"{{ class }}\">\r\n        <ul class=\"uk-float-right uk-subnav pk-subnav-icon\">\r\n            <li><a class=\"pk-icon-delete pk-icon-hover\" title=\"{{ 'Delete' | trans }}\" data-uk-tooltip=\"{delay: 500, 'pos': 'left'}\" v-on=\"click: remove\"></a></li>\r\n        </ul>\r\n        <a class=\"pk-icon-folder-circle uk-margin-right\"></a>\r\n        <a v-if=\"!folder\" class=\"uk-text-muted\">{{ 'Select folder' | trans }}</a>\r\n        <a v-if=\"folder\">{{ folder }}</a>\r\n    </div>\r\n\r\n    <v-modal v-ref=\"modal\" large>\r\n\r\n        <panel-finder root=\"{{ storage }}\" v-ref=\"finder\" modal=\"true\"></panel-finder>\r\n\r\n        <div class=\"uk-modal-footer uk-text-right\">\r\n            <button class=\"uk-button uk-button-link uk-modal-close\" type=\"button\">{{ 'Cancel' | trans }}</button>\r\n            <button class=\"uk-button uk-button-primary\" type=\"button\" v-attr=\"disabled: !hasSelection()\" v-on=\"click: select()\">{{ 'Select' | trans }}</button>\r\n        </div>\r\n\r\n    </v-modal>";

/***/ }
/******/ ]);