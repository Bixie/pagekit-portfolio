module.exports = {

    el: '#portfolio-projects',

    data: function () {
        return _.merge({
            projects: false,
            pages: 0,
            count: '',
            selected: []
        }, window.$data);
    },

    created: function () {
        this.resource = this.$resource('api/portfolio/project{/id}');
        this.config.filter = _.extend({ search: '', status: '', order: 'date desc', limit: 25}, this.config.filter);
    },

    computed: {

        statusOptions: function () {

            var options = _.map(this.statuses, function (status, id) {
                return { text: status, value: id };
            });

            return [{ label: this.$trans('Filter by'), options: options }];
        }
    },

    methods: {

        active: function (portfolio) {
            return this.selected.indexOf(portfolio.id) != -1;
        },

        load: function (page) {

            page = page !== undefined ? page : this.config.page;

            return this.resource.query({ filter: this.config.filter, page: page }).then(function (res) {
                this.$set('projects', res.data.projects);
                this.$set('pages', res.data.pages);
                this.$set('count', res.data.count);
                this.$set('config.page', page);
                this.$set('selected', []);
            });
        },

        save: function (project) {
            this.resource.save({ id: project.id }, { project: project }).then(function () {
                this.load();
                this.$notify('Project saved.');
            });
        },

        status: function (status) {

            var projects = this.getSelected();

            projects.forEach(function (project) {
                project.status = status;
            });

            this.resource.save({ id: 'bulk' }, { projects: projects }).then(function () {
                this.load();
                this.$notify('Projects saved.');
            });
        },

        toggleStatus: function (project) {
            project.status = project.status === 0 ? 1 : 0;
            this.save(project);
        },

        getSelected: function () {
            return this.projects.filter(function (project) {
                return this.selected.indexOf(project.id) !== -1;
            }, this);
        },

        removeProjects: function () {

            this.resource.delete({id: 'bulk'}, {ids: this.selected}).then(function () {
                this.load();
                this.$notify('Project(s) deleted.');
            });
        },

        getStatusText: function(file) {
            return this.statuses[file.status];
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

Vue.ready(module.exports);

