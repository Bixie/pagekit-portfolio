<template>

    <div class="uk-form-horizontal uk-margin">
        <div v-for="datafield in config.datafields" class="uk-form-row">

           <datafieldvalue :datafield="datafield" :value.sync="project.data[datafield.name]"></datafieldvalue>

        </div>
    </div>



</template>

<script>

    module.exports = {

        props: ['project', 'config', 'form'],

        created: function () {
            this.$on('datafieldvalue.changed', function (name, value) {
                this.project.data[name] = value;
            });
        },

        components: {

            datafieldvalue: {

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

</script>
