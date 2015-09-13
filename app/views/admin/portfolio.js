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

