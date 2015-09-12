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
	            project: {
	                data: {
	                }
	            }
	        }, window.$data);
	    },

	    created: function () {
	        this.$on('close.editmodal', function () {
	            this.$.formfields.load();
	        });
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

	        portfoliobasic: __webpack_require__(5),
	        portfolioimages: __webpack_require__(8),
	        portfoliodata: __webpack_require__(11)

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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6)
	module.exports.template = __webpack_require__(7)


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {

	        inherit: true

	    };

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-margin\">\r\n        <div class=\"uk-grid\">\r\n            <div class=\"uk-width-medium-3-4 uk-form-horizontal\">\r\n                <div class=\"uk-form-row\">\r\n                    <label for=\"form-title\" class=\"uk-form-label\">{{ 'Title' | trans }}</label>\r\n\r\n                    <div class=\"uk-form-controls\">\r\n                        <input id=\"form-title\" class=\"uk-form-width-large\" type=\"text\" name=\"title\"\r\n                               v-model=\"project.title\" v-valid=\"required\">\r\n                    </div>\r\n                    <p class=\"uk-form-help-block uk-text-danger\" v-show=\"form.title.invalid\">{{ 'Please enter a title' | trans }}</p>\r\n                </div>\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <label for=\"form-subtitle\" class=\"uk-form-label\">{{ 'Subtitle' | trans }}</label>\r\n\r\n                    <div class=\"uk-form-controls\">\r\n                        <input id=\"form-subtitle\" class=\"uk-form-width-large\" type=\"text\" name=\"subtitle\"\r\n                               v-model=\"project.subtitle\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <span class=\"uk-form-label\">{{ 'Intro' | trans }}</span>\r\n\r\n                    <div class=\"uk-form-controls\">\r\n                        <v-editor id=\"form-intro\" value=\"{{@ project.intro }}\"\r\n                                  options=\"{{ {markdown : project.data.markdown} }}\"></v-editor>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <span class=\"uk-form-label\">{{ 'Content' | trans }}</span>\r\n\r\n                    <div class=\"uk-form-controls\">\r\n                        <v-editor id=\"form-content\" value=\"{{@ project.content }}\"\r\n                                  options=\"{{ {markdown : project.data.markdown} }}\"></v-editor>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"uk-width-medium-1-4 uk-form-stacked\">\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <label for=\"form-slug\" class=\"uk-form-label\">{{ 'Slug' | trans }}</label>\r\n\r\n                    <div class=\"uk-form-controls\">\r\n                        <input id=\"form-slug\" class=\"uk-form-width-large\" type=\"text\" v-model=\"project.slug\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <span class=\"uk-form-label\">{{ 'Date' | trans }}</span>\r\n                    <div class=\"uk-form-controls\">\r\n                        <input-date datetime=\"{{@ project.date}}\"></input-date>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"uk-form-row\">\r\n                    <div class=\"uk-form-controls uk-form-controls-text\">\r\n                        <label>\r\n                            <input type=\"checkbox\" value=\"markdown\" v-model=\"project.data.markdown\"> {{ 'Enable Markdown' |\r\n                            trans }}</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9)
	module.exports.template = __webpack_require__(10)


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {

	        inherit: true

	    };

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-margin\">\r\n        images\r\n    </div>";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12)
	module.exports.template = __webpack_require__(13)


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {

	        inherit: true

	    };

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-margin\">\r\n        data\r\n    </div>";

/***/ }
/******/ ]);