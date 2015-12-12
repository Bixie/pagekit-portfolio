module.exports = [

    {
        entry: {
            /*frontpage views*/
            "portfolio": "./app/views/portfolio.js",
            /*admin views*/
            "portfolio-settings": "./app/views/admin/settings.js",
            "admin-portfolio": "./app/views/admin/portfolio.js",
            "admin-project": "./app/views/admin/project.js"
        },
        output: {
            filename: "./app/bundle/[name].js"
        },
        externals: {
            "lodash": "_",
            "jquery": "jQuery",
            "uikit": "UIkit",
            "vue": "Vue"
        },
        module: {
            loaders: [
                {test: /\.vue$/, loader: "vue"},
                {test: /\.html/, loader: "vue-html"}
            ]
        }
    }

];
