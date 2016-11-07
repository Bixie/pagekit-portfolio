Vue.component('bixie-fields', {
    extends: Vue.component('fields'),
    template: require('./formrow.html'),
    fields: {
        text: '<input type="text" v-bind="attrs" v-model="value">',
        textarea: '<textarea v-bind="attrs" v-model="value"></textarea>',
        select: '<select v-bind="attrs" v-model="value"><option v-for="option in options" :value="option">{{ $key }}</option></select>',
        radio: '<p class="uk-form-controls-condensed"><label v-for="option in options" v-bind="attrs"><input type="radio" :value="option" v-model="value"> {{ $key }}</label></p>',
        checkbox: '<p class="uk-form-controls-condensed"><label><input type="checkbox" v-bind="attrs" v-model="value" v-bind:true-value="1" v-bind:false-value="0" number> {{ optionlabel }}</label></p>',

        email: '<input type="email" v-bind="attrs" v-model="value">',
        number: '<input type="number" v-bind="attrs" v-model="value" number>',
        title: '<h3 v-bind="attrs">{{ title }}</h3>',
        paragraph: '<p v-bind="attrs">{{ text }}</p>',
        price: '<i class="uk-icon-euro uk-margin-small-right"></i><input type="number" v-bind="attrs" v-model="value" number>',
        multiselect: '<multiselect :values.sync="value" :options="options"></multiselect>',

        tags: '<input-tags v-bind="attrs" :tags.sync="value" :existing="options" :style="style || \'tags\'"></input-tags>',
        format: '<span v-bind="attrs">{{ value }}</span>'
    }
});
Vue.component('bixie-fields-raw', {
    extends: Vue.component('bixie-fields'),
    template:require('./raw.html')
});
Vue.component('bixie-fields-list', {
    extends: Vue.component('bixie-fields'),
    template: require('./descriptionlist.html')
});