var autoprefixer = require('gulp-autoprefixer');
var browserify = require('browserify');
var browserSync = require('browser-sync').create();
var buffer = require('vinyl-buffer');
var del = require('del');
var gulp = require('gulp');
var ignore = require('gulp-ignore');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var config = require('./gulp.config.js')(process.env);

/**
 * Clean
 *
 * Cleans the webroot directory
 */
gulp.task('clean', function () {
    'use strict';

    return del([config.webroot.root + '**/*']);
});

/**
 * Copy
 *
 * Copies all static files to the webroot
 */

gulp.task('copy', function () {
    'use strict';

    return gulp.src([
            config.allHtml,
            config.client.assets.images,
            config.client.assets.fonts
        ], {
            'base': config.src
        })
        .pipe(gulp.dest(config.webroot.root));
});

/**
 * Styles
 *
 * Compiles SASS to CSS
 * Writes Sourcemaps
 * Autoprefixes
 * Live-reloads browser
 */
gulp.task('styles', function () {
    'use strict';

    return gulp.src(config.client.styles.main)
        .pipe(sourcemaps.init())
        .pipe(sass({
            'outputStyle': 'expanded',
            'precision': 14
        }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.out.styles))
        .pipe(ignore.exclude('*.map'))
        .pipe(browserSync.reload({
            'stream': true
        }));
});

/**
 * Bundle Scripts
 *
 * Bundles JS
 * Writes sourcemaps
 */
gulp.task('bundleScripts', function () {
    'use strict';
    return browserify({
            'entries': config.client.root + 'js/main.js',
            'debug': true
        })
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            'loadMaps': true
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.out.js));
});

/**
 * Scripts
 *
 * Runs bundleScripts
 */
gulp.task('scripts', gulp.task('bundleScripts'));

/**
 * Server
 *
 * Runs a server, serving up the contents in paths.webroot.root on port 1337
 */
gulp.task('server', function () {
    'use strict';

    browserSync.init({
        'server': {
            'baseDir': config.webroot.root,
            'directory': true
        },
        'port': 1337,
        'notify': true
    });
});

/**
 * Watch
 *
 * Watches files and runs the correct tasks
 */

gulp.task('watch', function () {
    'use strict';
    //Watch assets
    gulp.watch([config.allHtml, config.client.assets.images, config.client.assets.fonts]).on('change', gulp.series('copy', browserSync.reload));
    //Watch styles
    gulp.watch(config.client.styles.all, gulp.task('styles'));
    //Watch JS
    gulp.watch(config.alljs).on('change', gulp.series('scripts', browserSync.reload));
});

// Default Task
gulp.task('default',
    gulp.series('clean', 'copy', 
        gulp.parallel('scripts','styles'),
        gulp.parallel('server', 'watch')
    )
);

// Build tasks
gulp.task('build',
    gulp.series('clean', 'copy',
        gulp.parallel('scripts', 'styles')
    )
);