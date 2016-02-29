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

	module.exports = {

	    el: '#project-edit',

	    data: function () {
	        return _.merge({
	            tags: [],
	            project: {},
	            form: {}
	        }, window.$data);
	    },

	    created: function () {
	        //check existing datafields
	        this.config.datafields.forEach(function (datafield) {
	            this.project.data[datafield.name] =  this.project.data[datafield.name] || '';
	        }.bind(this));
	    },

	    ready: function () {
	        this.Project = this.$resource('api/portfolio/project/{id}');
	        this.tab = UIkit.tab(this.$els.tab, {connect: this.$els.content});
	    },

	    methods: {

	        save: function () {

	            var data = {project: this.project};

	            this.$broadcast('save', data);

	            this.Project.save({id: this.project.id || 0}, data).then(function (res) {

	                if (!this.project.id) {
	                    window.history.replaceState({}, '', this.$url.route('admin/portfolio/project/edit', {id: res.data.project.id}));
	                }

	                this.$set('project', res.data.project);

	                this.$notify(this.$trans('Project %title% saved.', {title: this.project.title}));

	            }, function (data) {
	                this.$notify(data, 'danger');
	            });
	        }

	    },

	    components: {

	        portfoliobasic: __webpack_require__(1),
	        portfolioimages: __webpack_require__(7),
	        portfoliodata: __webpack_require__(13),
	        'input-folder': __webpack_require__(16)

	    }

	};

	Vue.ready(module.exports);



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(2)
	__vue_template__ = __webpack_require__(6)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\portfolio\\app\\components\\portfolio-basic.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// <template>
	//
	//     <div class="uk-margin">
	//         <div class="uk-grid pk-grid-large" data-uk-grid-margin>
	//             <div class="uk-flex-item-1">
	//                 <div class="uk-form-horizontal uk-margin">
	//                     <div class="uk-form-row">
	//                         <label for="form-title" class="uk-form-label">{{ 'Title' | trans }}</label>
	//
	//                         <div class="uk-form-controls">
	//                             <input id="form-title" class="uk-width-1-1 uk-form-large" type="text" name="title"
	//                                    v-model="project.title" v-validate:required>
	//                         </div>
	//                         <p class="uk-form-help-block uk-text-danger" v-show="form.title.invalid">{{ 'Please enter a
	//                             title' | trans }}</p>
	//                     </div>
	//
	//                     <div class="uk-form-row">
	//                         <label for="form-subtitle" class="uk-form-label">{{ 'Subtitle' | trans }}</label>
	//
	//                         <div class="uk-form-controls">
	//                             <input id="form-subtitle" class="uk-width-1-1" type="text" name="subtitle"
	//                                    v-model="project.subtitle">
	//                         </div>
	//                     </div>
	//                 </div>
	//
	//
	//                 <div class="uk-form-stacked uk-margin">
	//                     <div class="uk-form-row">
	//                         <span class="uk-form-label">{{ 'Intro' | trans }}</span>
	//
	//                         <div class="uk-form-controls">
	//                             <v-editor id="form-intro" :value.sync="project.intro"
	//                                       :options="{markdown : project.data.markdown, height: 250}"></v-editor>
	//                         </div>
	//                     </div>
	//
	//                     <div class="uk-form-row">
	//                         <span class="uk-form-label">{{ 'Content' | trans }}</span>
	//
	//                         <div class="uk-form-controls">
	//                             <v-editor id="form-content" :value.sync="project.content"
	//                                       :options="{markdown : project.data.markdown}"></v-editor>
	//                         </div>
	//                     </div>
	//                 </div>
	//
	//             </div>
	//             <div class="pk-width-sidebar pk-width-sidebar-large uk-form-stacked">
	//
	//                 <div class="uk-form-row">
	//                     <label for="form-slug" class="uk-form-label">{{ 'Slug' | trans }}</label>
	//
	//                     <div class="uk-form-controls">
	//                         <input id="form-slug" class="uk-width-1-1" type="text" v-model="project.slug">
	//                     </div>
	//                 </div>
	//
	//                 <div class="uk-form-row">
	//                     <label for="form-status" class="uk-form-label">{{ 'Status' | trans }}</label>
	//                     <div class="uk-form-controls">
	//                         <select id="form-status" class="uk-width-1-1" v-model="project.status">
	//                             <option v-for="status in statuses" :value="$key">{{ status | trans }}</option>
	//                         </select>
	//                     </div>
	//                 </div>
	//
	//                 <div class="uk-form-row">
	//                     <label for="form-client" class="uk-form-label">{{ 'Client' | trans }}</label>
	//
	//                     <div class="uk-form-controls">
	//                         <input id="form-client" class="uk-width-1-1" type="text" v-model="project.client">
	//                     </div>
	//                 </div>
	//
	//                 <div class="uk-form-row">
	//                     <span class="uk-form-label">{{ 'Date' | trans }}</span>
	//                     <div class="uk-form-controls">
	//                         <input-date :datetime.sync="project.date"></input-date>
	//                     </div>
	//                 </div>
	//
	//                 <div class="uk-form-row">
	//                     <span class="uk-form-label">{{ 'Tags' | trans }}</span>
	//                     <div class="uk-form-controls">
	//                         <input-tags :tags.sync="project.tags" :existing="tags"></input-tags>
	//                     </div>
	//                 </div>
	//
	//                 <div class="uk-form-row">
	//                     <span class="uk-form-label">{{ 'Options' | trans }}</span>
	//                     <div class="uk-form-controls uk-form-controls-text">
	//                         <label>
	//                             <input type="checkbox" value="markdown" v-model="project.data.markdown"> {{ 'Enable Markdown' |
	//                             trans }}</label>
	//                     </div>
	//                 </div>
	//             </div>
	//         </div>
	//
	//     </div>
	//
	// </template>
	//
	// <script>

	module.exports = {

	    props: ['project', 'config', 'form'],

	    data: function data() {
	        return _.merge({
	            tags: [],
	            statuses: {}
	        }, window.$data);
	    },

	    components: {
	        'input-tags': __webpack_require__(3)
	    }

	};

	// </script>
	//

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(4)
	__vue_template__ = __webpack_require__(5)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\portfolio\\app\\components\\input-tags.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	// <template>
	//
	//     <div class="uk-flex uk-flex-wrap" data-uk-margin="">
	//         <div v-for="tag in tags" class="uk-badge uk-margin-small-right">
	//             <a class="uk-float-right uk-close" @click.prevent="removeTag(tag)"></a>
	//             {{ tag }}
	//         </div>
	//     </div>
	//
	//     <div class="uk-flex uk-flex-middle uk-margin">
	//         <div>
	//             <div class="uk-position-relative" data-uk-dropdown="">
	//                 <button type="button" class="uk-button uk-button-small">{{ 'Existing' | trans }}</button>
	//
	//                 <div class="uk-dropdown uk-dropdown-small">
	//                     <ul class="uk-nav uk-nav-dropdown">
	//                         <li v-for="tag in existing"><a
	//                                 @click="addTag(tag)">{{ tag }}</a></li>
	//                     </ul>
	//                 </div>
	//             </div>
	//
	//         </div>
	//         <div class="uk-flex-item-1 uk-margin-small-left">
	//             <div class="uk-form-password">
	//                 <input type="text" class="uk-width-1-1" v-model="newtag">
	//                 <a class="uk-form-password-toggle" @click.prevent="addTag()" @keyup.enter.prevent="addTag()">
	//                     <i class="uk-icon-check uk-icon-hover"></i></a>
	//             </div>
	//         </div>
	//
	//     </div>
	//
	// </template>
	//
	// <script>

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

	    data: function data() {
	        return {
	            'newtag': ''
	        };
	    },

	    methods: {

	        addTag: function addTag(tag) {
	            this.tags.push(tag || this.newtag);
	            this.$nextTick(function () {
	                UIkit.$html.trigger('resize'); //todo why no check.display or changed.dom???
	            });
	            this.newtag = '';
	        },

	        removeTag: function removeTag(tag) {
	            this.tags.$remove(tag);
	        }

	    }

	};

	// </script>
	//

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n    <div class=\"uk-flex uk-flex-wrap\" data-uk-margin=\"\">\r\n        <div v-for=\"tag in tags\" class=\"uk-badge uk-margin-small-right\">\r\n            <a class=\"uk-float-right uk-close\" @click.prevent=\"removeTag(tag)\"></a>\r\n            {{ tag }}\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"uk-flex uk-flex-middle uk-margin\">\r\n        <div>\r\n            <div class=\"uk-position-relative\" data-uk-dropdown=\"\">\r\n                <button type=\"button\" class=\"uk-button uk-button-small\">{{ 'Existing' | trans }}</button>\r\n\r\n                <div class=\"uk-dropdown uk-dropdown-small\">\r\n                    <ul class=\"uk-nav uk-nav-dropdown\">\r\n                        <li v-for=\"tag in existing\"><a\r\n                                @click=\"addTag(tag)\">{{ tag }}</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"uk-flex-item-1 uk-margin-small-left\">\r\n            <div class=\"uk-form-password\">\r\n                <input type=\"text\" class=\"uk-width-1-1\" v-model=\"newtag\">\r\n                <a class=\"uk-form-password-toggle\" @click.prevent=\"addTag()\" @keyup.enter.prevent=\"addTag()\">\r\n                    <i class=\"uk-icon-check uk-icon-hover\"></i></a>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n";

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n    <div class=\"uk-margin\">\r\n        <div class=\"uk-grid pk-grid-large\" data-uk-grid-margin>\r\n            <div class=\"uk-flex-item-1\">\r\n                <div class=\"uk-form-horizontal uk-margin\">\r\n                    <div class=\"uk-form-row\">\r\n                        <label for=\"form-title\" class=\"uk-form-label\">{{ 'Title' | trans }}</label>\r\n\r\n                        <div class=\"uk-form-controls\">\r\n                            <input id=\"form-title\" class=\"uk-width-1-1 uk-form-large\" type=\"text\" name=\"title\"\r\n                                   v-model=\"project.title\" v-validate:required>\r\n                        </div>\r\n                        <p class=\"uk-form-help-block uk-text-danger\" v-show=\"form.title.invalid\">{{ 'Please enter a\r\n                            title' | trans }}</p>\r\n                    </div>\r\n\r\n                    <div class=\"uk-form-row\">\r\n                        <label for=\"form-subtitle\" class=\"uk-form-label\">{{ 'Subtitle' | trans }}</label>\r\n\r\n                        <div class=\"uk-form-controls\">\r\n                            <input id=\"form-subtitle\" class=\"uk-width-1-1\" type=\"text\" name=\"subtitle\"\r\n                                   v-model=\"project.subtitle\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"uk-form-stacked uk-margin\">\r\n                    <div class=\"uk-form-row\">\r\n                        <span class=\"uk-form-label\">{{ 'Intro' | trans }}</span>\r\n\r\n                        <div class=\"uk-form-controls\">\r\n                            <v-editor id=\"form-intro\" :value.sync=\"project.intro\"\r\n                                      :options=\"{markdown : project.data.markdown, height: 250}\"></v-editor>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"uk-form-row\">\r\n                        <span class=\"uk-form-label\">{{ 'Content' | trans }}</span>\r\n\r\n                        <div class=\"uk-form-controls\">\r\n                            <v-editor id=\"form-content\" :value.sync=\"project.content\"\r\n                                      :options=\"{markdown : project.data.markdown}\"></v-editor>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"pk-width-sidebar pk-width-sidebar-large uk-form-stacked\">\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <label for=\"form-slug\" class=\"uk-form-label\">{{ 'Slug' | trans }}</label>\r\n\r\n                    <div class=\"uk-form-controls\">\r\n                        <input id=\"form-slug\" class=\"uk-width-1-1\" type=\"text\" v-model=\"project.slug\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <label for=\"form-status\" class=\"uk-form-label\">{{ 'Status' | trans }}</label>\r\n                    <div class=\"uk-form-controls\">\r\n                        <select id=\"form-status\" class=\"uk-width-1-1\" v-model=\"project.status\">\r\n                            <option v-for=\"status in statuses\" :value=\"$key\">{{ status | trans }}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <label for=\"form-client\" class=\"uk-form-label\">{{ 'Client' | trans }}</label>\r\n\r\n                    <div class=\"uk-form-controls\">\r\n                        <input id=\"form-client\" class=\"uk-width-1-1\" type=\"text\" v-model=\"project.client\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <span class=\"uk-form-label\">{{ 'Date' | trans }}</span>\r\n                    <div class=\"uk-form-controls\">\r\n                        <input-date :datetime.sync=\"project.date\"></input-date>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <span class=\"uk-form-label\">{{ 'Tags' | trans }}</span>\r\n                    <div class=\"uk-form-controls\">\r\n                        <input-tags :tags.sync=\"project.tags\" :existing=\"tags\"></input-tags>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <span class=\"uk-form-label\">{{ 'Options' | trans }}</span>\r\n                    <div class=\"uk-form-controls uk-form-controls-text\">\r\n                        <label>\r\n                            <input type=\"checkbox\" value=\"markdown\" v-model=\"project.data.markdown\"> {{ 'Enable Markdown' |\r\n                            trans }}</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(8)
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\portfolio\\app\\components\\portfolio-images.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// <template>
	//
	//     <div class="uk-margin uk-form-stacked">
	//
	//         <div class="uk-grid uk-margin" data-uk-grid-margin>
	//             <div class="uk-width-medium-1-2">
	//
	//                 <div class="uk-form-row">
	//                     <label class="uk-form-label">{{ 'Main image' | trans }}</label>
	//                     <div class="uk-form-controls">
	//                         <input-image-meta :image.sync="project.image.main" class="pk-image-max-height"></input-image-meta>
	//                     </div>
	//                 </div>
	//
	//             </div>
	//             <div class="uk-width-medium-1-2">
	//
	//                 <div class="uk-form-row">
	//                     <label class="uk-form-label">{{ 'Teaser image' | trans }}</label>
	//                     <div class="uk-form-controls">
	//                         <input-image-meta :image.sync="project.image.teaser" class="pk-image-max-height"></input-image-meta>
	//                     </div>
	//                 </div>
	//
	//             </div>
	//         </div>
	//
	//         <div class="uk-margin-large-top uk-form-horizontal uk-panel uk-panel-box">
	//             <div class="uk-form-row">
	//                 <label class="uk-form-label">{{ 'Image folder' | trans }}</label>
	//
	//                 <div class="uk-form-controls">
	//                     <ul class="uk-float-right uk-subnav pk-subnav-icon">
	//                         <li><a class="uk-icon-info pk-icon-hover" data-uk-modal="{target:'#folder-help'}"></a></li>
	//                     </ul>
	//                     <input-folder :folder="project.image.folder" class="uk-width-medium-1-2"></input-folder>
	//                 </div>
	//             </div>
	//         </div>
	//
	//         <div v-show="project.images.length" class="uk-margin">
	//             <ul class="uk-list uk-list-line">
	//                 <portfolioimage v-for="image in project.images" :image="image"></portfolioimage>
	//             </ul>
	//         </div>
	//
	//         <div id="folder-help" class="uk-modal">
	//             <div class="uk-modal-dialog">
	//                 <a class="uk-modal-close uk-close"></a>
	//                 <div class="uk-modal-header">
	//                     <h3><i class="pk-icon-info uk-margin-small-right"></i>{{ 'Image folder' | trans }}</h3>
	//                 </div>
	//                 <p>
	//                     {{ 'Select the folder by checking the checkbox in front of the name! Click "Select" button at bottom to confirm.' | trans }}
	//                 </p>
	//                 <p>
	//                     {{ 'Images in the folder are sorted by alphabet. Numbers in front of the filename are removed, so you can influence the ordering by naming your images with numbers.' | trans }}
	//                 </p>
	//             </div>
	//         </div>
	//
	//     </div>
	//
	// </template>
	//
	// <script>

	module.exports = {

	    props: ['project', 'config', 'form'],

	    data: function data() {
	        return {
	            images: []
	        };
	    },

	    created: function created() {
	        this.project.images = this.project.images || [];

	        this.imageApi = this.$resource('api/portfolio/image/:source');

	        this.$on('folder-selected', function (folder) {
	            this.loadFolder(folder);
	        });
	        if (this.project.image && this.project.image.folder) {
	            this.loadFolder(this.project.image.folder);
	        }
	    },

	    methods: {
	        loadFolder: function loadFolder(folder) {
	            this.imageApi.query({ folder: folder }).then(function (res) {
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

	        portfolioimage: __webpack_require__(9)

	    }
	};

	// </script>
	//

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(10)
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\portfolio\\app\\components\\portfolio-image.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	// <template>
	//
	//     <li>
	//         <div class="uk-grid" data-uk-grid-margin="">
	//             <div class="uk-width-medium-1-5">
	//
	//                 <div class="uk-overlay uk-overlay-hover uk-visible-hover pk-image-max-height">
	//
	//                     <img :src="$url(image.src)" :alt="image.filename">
	//
	//                     <div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
	//                 </div>
	//
	//             </div>
	//             <div class="uk-width-medium-2-5">
	//                 <div class="uk-form-row">
	//                     <div class="uk-form-controls">
	//                         <input type="text" v-model="image.title" class="uk-form-large uk-form-width-large"
	//                                placeholder="{{ 'Image title' | trans }}"/><br>
	//                     </div>
	//                 </div>
	//                 <div class="uk-form-row">
	//                     <div class="uk-form-controls">
	//                             <textarea v-model="image.descr" rows="3" class="uk-form-width-large"
	//                                       placeholder="{{ 'Image description' | trans }}"></textarea>
	//                     </div>
	//                 </div>
	//             </div>
	//             <div class="uk-width-medium-2-5">
	//                 <div class="uk-form-row">
	//                     <span class="uk-form-label">{{ 'Options' | trans }}</span>
	//                     <div class="uk-form-controls uk-form-controls-text">
	//                         <label>
	//                             <input type="checkbox" value="show-teaser" v-model="image.show_teaser"> {{ 'Show in teaser' |
	//                             trans }}</label>
	//                     </div>
	//                 </div>
	//             </div>
	//         </div>
	//     </li>
	//
	//
	// </template>
	//
	// <script>

	module.exports = {

	    props: ['image']

	};

	// </script>
	//

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n    <li>\r\n        <div class=\"uk-grid\" data-uk-grid-margin=\"\">\r\n            <div class=\"uk-width-medium-1-5\">\r\n\r\n                <div class=\"uk-overlay uk-overlay-hover uk-visible-hover pk-image-max-height\">\r\n\r\n                    <img :src=\"$url(image.src)\" :alt=\"image.filename\">\r\n\r\n                    <div class=\"uk-overlay-panel uk-overlay-background uk-overlay-fade\"></div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"uk-width-medium-2-5\">\r\n                <div class=\"uk-form-row\">\r\n                    <div class=\"uk-form-controls\">\r\n                        <input type=\"text\" v-model=\"image.title\" class=\"uk-form-large uk-form-width-large\"\r\n                               placeholder=\"{{ 'Image title' | trans }}\"/><br>\r\n                    </div>\r\n                </div>\r\n                <div class=\"uk-form-row\">\r\n                    <div class=\"uk-form-controls\">\r\n                            <textarea v-model=\"image.descr\" rows=\"3\" class=\"uk-form-width-large\"\r\n                                      placeholder=\"{{ 'Image description' | trans }}\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"uk-width-medium-2-5\">\r\n                <div class=\"uk-form-row\">\r\n                    <span class=\"uk-form-label\">{{ 'Options' | trans }}</span>\r\n                    <div class=\"uk-form-controls uk-form-controls-text\">\r\n                        <label>\r\n                            <input type=\"checkbox\" value=\"show-teaser\" v-model=\"image.show_teaser\"> {{ 'Show in teaser' |\r\n                            trans }}</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n\r\n\r\n";

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n    <div class=\"uk-margin uk-form-stacked\">\r\n\r\n        <div class=\"uk-grid uk-margin\" data-uk-grid-margin>\r\n            <div class=\"uk-width-medium-1-2\">\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <label class=\"uk-form-label\">{{ 'Main image' | trans }}</label>\r\n                    <div class=\"uk-form-controls\">\r\n                        <input-image-meta :image.sync=\"project.image.main\" class=\"pk-image-max-height\"></input-image-meta>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"uk-width-medium-1-2\">\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <label class=\"uk-form-label\">{{ 'Teaser image' | trans }}</label>\r\n                    <div class=\"uk-form-controls\">\r\n                        <input-image-meta :image.sync=\"project.image.teaser\" class=\"pk-image-max-height\"></input-image-meta>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-margin-large-top uk-form-horizontal uk-panel uk-panel-box\">\r\n            <div class=\"uk-form-row\">\r\n                <label class=\"uk-form-label\">{{ 'Image folder' | trans }}</label>\r\n\r\n                <div class=\"uk-form-controls\">\r\n                    <ul class=\"uk-float-right uk-subnav pk-subnav-icon\">\r\n                        <li><a class=\"uk-icon-info pk-icon-hover\" data-uk-modal=\"{target:'#folder-help'}\"></a></li>\r\n                    </ul>\r\n                    <input-folder :folder=\"project.image.folder\" class=\"uk-width-medium-1-2\"></input-folder>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div v-show=\"project.images.length\" class=\"uk-margin\">\r\n            <ul class=\"uk-list uk-list-line\">\r\n                <portfolioimage v-for=\"image in project.images\" :image=\"image\"></portfolioimage>\r\n            </ul>\r\n        </div>\r\n\r\n        <div id=\"folder-help\" class=\"uk-modal\">\r\n            <div class=\"uk-modal-dialog\">\r\n                <a class=\"uk-modal-close uk-close\"></a>\r\n                <div class=\"uk-modal-header\">\r\n                    <h3><i class=\"pk-icon-info uk-margin-small-right\"></i>{{ 'Image folder' | trans }}</h3>\r\n                </div>\r\n                <p>\r\n                    {{ 'Select the folder by checking the checkbox in front of the name! Click \"Select\" button at bottom to confirm.' | trans }}\r\n                </p>\r\n                <p>\r\n                    {{ 'Images in the folder are sorted by alphabet. Numbers in front of the filename are removed, so you can influence the ordering by naming your images with numbers.' | trans }}\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(14)
	__vue_template__ = __webpack_require__(15)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\portfolio\\app\\components\\portfolio-data.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	// <template>
	//
	//     <div class="uk-form-horizontal uk-margin">
	//         <div v-for="datafield in config.datafields" class="uk-form-row">
	//
	//            <datafieldvalue :datafield="datafield" :value.sync="project.data[datafield.name]"></datafieldvalue>
	//
	//         </div>
	//     </div>
	//
	//
	//
	// </template>
	//
	// <script>

	module.exports = {

	    props: ['project', 'config', 'form'],

	    created: function created() {
	        this.$on('datafieldvalue.changed', function (name, value) {
	            this.project.data[name] = value;
	        });
	    },

	    components: {

	        datafieldvalue: {

	            props: ['datafield', 'value'],

	            template: '<label for="form-{{ datafield.name }}" class="uk-form-label">{{ datafield.label }}</label>\n<div class="uk-form-controls">\n    <input id="form-{{ datafield.name }}" class="uk-form-width-medium" type="text" name="{{ datafield.name }}"\n           v-model="value">\n</div>\n',

	            watch: {
	                value: function value(_value) {
	                    this.$dispatch('datafieldvalue.changed', this.datafield.name, _value);
	                }
	            }

	        }

	    }

	};

	// </script>
	//

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n    <div class=\"uk-form-horizontal uk-margin\">\r\n        <div v-for=\"datafield in config.datafields\" class=\"uk-form-row\">\r\n\r\n           <datafieldvalue :datafield=\"datafield\" :value.sync=\"project.data[datafield.name]\"></datafieldvalue>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(17)
	__vue_template__ = __webpack_require__(18)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\portfolio\\app\\components\\input-folder.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	// <template>
	//
	//     <div @click="pick" :class="class">
	//         <ul class="uk-float-right uk-subnav pk-subnav-icon">
	//             <li><a class="pk-icon-delete pk-icon-hover" :title="'Delete' | trans"
	//                    data-uk-tooltip="{delay: 500, 'pos': 'left'}" @click="remove"></a></li>
	//         </ul>
	//         <a class="pk-icon-folder-circle uk-margin-right"></a>
	//         <a v-if="!folder" class="uk-text-muted">{{ 'Select folder' | trans }}</a>
	//         <a v-else>{{ folder }}</a>
	//     </div>
	//
	//     <v-modal v-ref:modal large>
	//
	//         <panel-finder :root="storage" v-ref:finder modal></panel-finder>
	//
	//         <div class="uk-modal-footer uk-text-right">
	//             <button class="uk-button uk-button-link uk-modal-close" type="button">{{ 'Cancel' | trans }}</button>
	//             <button class="uk-button uk-button-primary" type="button" :disabled="!hasSelection()" @click="select()">{{ 'Select' | trans }}</button>
	//         </div>
	//
	//     </v-modal>
	//
	// </template>
	//
	// <script>

	module.exports = {

	    props: ['folder', 'class'],

	    data: function data() {
	        return $pagekit;
	    },

	    methods: {

	        pick: function pick() {
	            this.$refs.modal.open();
	        },

	        select: function select() {
	            this.folder = this.$refs.finder.getSelected()[0];
	            this.$dispatch('folder-selected', this.folder);
	            this.$refs.finder.removeSelection();
	            this.$refs.modal.close();
	        },

	        remove: function remove(e) {
	            e.stopPropagation();
	            this.folder = '';
	        },

	        hasSelection: function hasSelection() {
	            var selected = this.$refs.finder.getSelected();
	            return selected.length === 1 && !selected[0].match(/\.(.+)$/i);
	        }

	    }

	};

	Vue.component('input-folder', function (resolve, reject) {
	    Vue.asset({
	        js: ['app/assets/uikit/js/components/upload.min.js', 'app/system/modules/finder/app/bundle/panel-finder.js']
	    }).then(function () {
	        resolve(module.exports);
	    });
	});

	// </script>
	//

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n    <div @click=\"pick\" :class=\"class\">\r\n        <ul class=\"uk-float-right uk-subnav pk-subnav-icon\">\r\n            <li><a class=\"pk-icon-delete pk-icon-hover\" :title=\"'Delete' | trans\"\r\n                   data-uk-tooltip=\"{delay: 500, 'pos': 'left'}\" @click=\"remove\"></a></li>\r\n        </ul>\r\n        <a class=\"pk-icon-folder-circle uk-margin-right\"></a>\r\n        <a v-if=\"!folder\" class=\"uk-text-muted\">{{ 'Select folder' | trans }}</a>\r\n        <a v-else>{{ folder }}</a>\r\n    </div>\r\n\r\n    <v-modal v-ref:modal large>\r\n\r\n        <panel-finder :root=\"storage\" v-ref:finder modal></panel-finder>\r\n\r\n        <div class=\"uk-modal-footer uk-text-right\">\r\n            <button class=\"uk-button uk-button-link uk-modal-close\" type=\"button\">{{ 'Cancel' | trans }}</button>\r\n            <button class=\"uk-button uk-button-primary\" type=\"button\" :disabled=\"!hasSelection()\" @click=\"select()\">{{ 'Select' | trans }}</button>\r\n        </div>\r\n\r\n    </v-modal>\r\n\r\n";

/***/ }
/******/ ]);