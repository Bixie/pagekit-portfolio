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
/***/ function(module, exports) {

	module.exports = {

	    data: function () {
	        return _.merge({
	            projects: false,
	            pages: 0,
	            count: '',
	            selected: []
	        }, window.$data);
	    },

	    created: function () {
	        this.resource = this.$resource('api/portfolio/project/:id');
	        this.config.filter = _.extend({ search: '', order: 'date desc', limit: 25}, this.config.filter);
	    },

	    methods: {

	        active: function (portfolio) {
	            return this.selected.indexOf(portfolio.id) != -1;
	        },

	        load: function (page) {

	            page = page !== undefined ? page : this.config.page;

	            return this.resource.query({ filter: this.config.filter, page: page }, function (data) {
	                this.$set('projects', data.projects);
	                this.$set('pages', data.pages);
	                this.$set('count', data.count);
	                this.$set('config.page', page);
	                this.$set('selected', []);
	            });
	        },

	        getSelected: function () {
	            return this.projects.filter(function (project) {
	                return this.selected.indexOf(project.id) !== -1;
	            }, this);
	        },

	        removeProjects: function () {

	            this.resource.delete({id: 'bulk'}, {ids: this.selected}, function () {
	                this.load();
	                this.$notify('Project(s) deleted.');
	            });
	        }

	    },

	    watch: {
	        'config.page': 'load',

	        'config.filter': {
	            handler: function () { this.load(0); },
	            deep: true
	        }
	    }

	};

	$(function () {

	    new Vue(module.exports).$mount('#portfolio-projects');

	});



/***/ }
/******/ ]);