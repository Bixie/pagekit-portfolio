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

        portfoliobasic: require('../../components/portfolio-basic.vue'),
        portfolioimages: require('../../components/portfolio-images.vue'),
        portfoliodata: require('../../components/portfolio-data.vue'),
        'input-folder': require('../../components/input-folder.vue')

    }

};

Vue.ready(module.exports);

