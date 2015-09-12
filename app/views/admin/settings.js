module.exports = Vue.extend({

    data: function () {
        return window.$data;
    },

    methods: {

        save: function () {
            this.$http.post('admin/system/settings/config', { name: 'portfolio', config: this.config }, function () {
                this.$notify('Settings saved.');
            }).error(function (data) {
                this.$notify(data, 'danger');
            });
        }

    }

});

$(function () {

    (new module.exports()).$mount('#portfolio-settings');

});
