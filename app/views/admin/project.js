module.exports = Vue.extend({

    data: function () {
        return _.merge({
            tags: [],
            project: {
                data: {
                }
            }
        }, window.$data);
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

        portfoliobasic: require('../../components/portfolio-basic.vue'),
        portfolioimages: require('../../components/portfolio-images.vue'),
        portfoliodata: require('../../components/portfolio-data.vue'),
        'input-tags': require('../../components/input-tags.vue'),
        'input-folder': require('../../components/input-folder.vue')

    }

});

$(function () {

    (new module.exports()).$mount('#project-edit');

});
