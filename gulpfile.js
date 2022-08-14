const {src, dest, parallel, series, watch} = require('gulp');
const gulp = require('gulp');
// const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');
var sync = require('browser-sync').create();


// Move all "js" files to "dist/js" folder
function js() {
    return src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        'node_modules/owl.carousel2/dist/owl.carousel.min.js',
        'node_modules/wowjs/dist/wow.min.js',
        'node_modules/jarallax/dist/jarallax.min.js',
        'node_modules/jarallax/dist/jarallax-video.min.js',
        'node_modules/jquery-waypoints/waypoints.min.js',
        'node_modules/counterup/jquery.counterup.min.js',
        'node_modules/jquery.easing/jquery.easing.min.js',
        'node_modules/jquery-countdown/dist/jquery.countdown.min.js',
        'node_modules/jquery-animated-headlines/dist/js/jquery.animatedheadline.min.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js'
    ])
    .pipe(dest('dist/js'));
}

// Move all "css" files to "dist/css" folder
function css() {
    return src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/owl.carousel2/dist/assets/owl.carousel.min.css',
        'node_modules/wowjs/css/libs/animate.css',
        'node_modules/jquery-animated-headlines/dist/css/jquery.animatedheadline.css',
        'node_modules/magnific-popup/dist/magnific-popup.css'
    ])
    .pipe(dest('dist/css'));
}

// CSS Autoprefixer
function cssAutoprefixer() {
    return src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(postcss([ autoprefixer( {overrideBrowserslist: ['last 2 versions']} )]))
        .pipe(dest('dist/css/'))
}

// Move all static "*" files to "dist/" folder
function staticCommonFiles() {
    return src('static/*')
    .pipe(dest('dist/'));
}

// Move all static "js" files to "dist/js" folder
function staticJS() {
    return src('static/js/*.js')
    .pipe(dest('dist/js'));
}

// Move all static "css" files to "dist/css" folder
function staticCSS() {
    return src('static/css/*.css')
    .pipe(dest('dist/css'));
}

// Move static "fonts" to "dist/fonts" folder
function staticFonts() {
    return src('static/fonts/*')
    .pipe(dest('dist/fonts'));
}

// Move all static "images" to "dist/img" folder
function staticImages() {
    return src('static/img/*/*')
    .pipe(dest('dist/img'));
}

// Move all static "php" files to "dist/php" folder
function staticPhp() {
    return src('static/php/*')
    .pipe(dest('dist/php'));
}

// SCSS to CSS Convert
// function sassToCss() {
//     return src('src/scss/*.scss')
//         .pipe(sass.sync().on('error', sass.logError))
//         .pipe(postcss([ autoprefixer( {overrideBrowserslist: ['last 2 versions']} )]))
//         .pipe(dest('dist/'))
// }

// Pug to HTML Convert
function pugToHtml() {
    return src('src/pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(dest('dist/'));
}


function browserSync(cb) {
    sync.init({
        server: {
            baseDir: "./dist"
        }
    });

    watch([
        'src/pug/*.pug',
        'src/pug/inc/*.pug'
    ], series(pugToHtml));
}

exports.sync = browserSync;

// SCSS - Pug Watching
function watching() {
  //  watch('src/scss/*.scss', series(sassToCss));
    watch([
        'src/pug/*.pug',
        'src/pug/inc/*.pug'
    ], series(pugToHtml));
    watch('static/*', series(staticCommonFiles));
    watch('static/css/*.css', series(staticCSS));
    watch('static/fonts/*', series(staticFonts));
    watch('static/img/*/*', series(staticImages));
    watch('static/js/*.js', series(staticJS));
    watch('static/php/*.php', series(staticPhp));
}

const watching2 = parallel(watching);

// exports
exports.watch = watching2;
exports.default = series(js, css, cssAutoprefixer, staticCommonFiles, staticJS, staticCSS, staticFonts, staticImages, staticPhp, pugToHtml, watching);
