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
	        this.Project = this.$resource('api/portfolio/project/:id');
	        this.load();
	    },

	    methods: {

	        load: function () {
	            return this.Project.query(function (data) {
	                this.$set('projects', data.projects);
	                this.$set('pages', data.pages);
	                this.$set('count', data.count);
	                this.$set('selected', []);
	            });
	        },

	        getSelected: function () {
	            return this.projects.filter(function (project) {
	                return this.selected.indexOf(project.id) !== -1;
	            }, this);
	        },

	        removeProjects: function () {

	            this.Project.delete({id: 'bulk'}, {ids: this.selected}, function () {
	                this.load();
	                this.$notify('Project(s) deleted.');
	            });
	        }

	    },

	    components: {

	        project: {

	            template: '#project',

	            computed: {
	                tags: function () {
	                    return this.project.tags.join(', ');
	                }

	            }
	        }

	    },

	    watch: {

	        projects: function () {

	            var vm = this;

	            // TODO this is still buggy
	            UIkit.nestable(this.$$.nestable, {
	                maxDepth: 1,
	                group: 'portfolio.projects'
	            }).off('change.uk.nestable').on('change.uk.nestable', function (e, nestable, el, type) {

	                if (type && type !== 'removed') {

	                    vm.Project.save({id: 'updateOrder'}, {projects: nestable.list()}, function () {

	                        // @TODO reload everything on reorder really needed?
	                        vm.load().success(function () {

	                            // hack for weird flickr bug
	                            if (el.parent()[0] === nestable.element[0]) {
	                                setTimeout(function () {
	                                    el.remove();
	                                }, 50);
	                            }
	                        });

	                    }).error(function () {
	                        this.$notify('Reorder failed.', 'danger');
	                    });
	                }
	            });
	        }
	    }

	};

	$(function () {

	    new Vue(module.exports).$mount('#portfolio-projects');

	});



/***/ }
/******/ ]);