module.exports = function (env) {

    var webroot = './webroot/';
    var src = './src/';

    var client = "./src/client/";
    var server = "./src/server/";

    var assets = client + 'assets/';
    var styles = client + 'scss/';

    var config = {
           
            src: "./src/",
           
            alljs: src + "**/*.js",

            allHtml : src + "**/*.html",

            client: {
                root: client,
                styles: {
                    root: styles,
                    main: styles + 'main.scss',
                    layout: styles + 'layout/*.scss',
                    components: styles + 'components/*.scss',
                    base: styles + 'base/*.scss',
                    pages: styles + 'pages/*.scss',
                    all: [styles + '**/*.scss'], 
                },
                assets: {
                    images: assets + 'img/**/*',
                    fonts: assets + 'fonts/**/*'
                }, 
            }, 

            server: {
                root: server,
                main: server + 'index.js'
            },          

            webroot: {
                root: webroot,
                styles: webroot + "scss/**/*.scss",
                js: webroot + "**/*.js",
                html: webroot +"**/*.html"
            },

            out: {
                root: webroot,
                styles: webroot + "client/styles/",
                js: webroot + "client/js/"
            }

    };

    return config;
};