const testandoGulp = require('gulp');
const testandoSass = require('gulp-sass')(require('sass'));
const testandoImagemin = require('gulp-imagemin');
const testandoUglify = require('gulp-uglify');

function scripts() {
    return testandoGulp.src('./src/scripts/*.js')
        .pipe(testandoUglify())
        .pipe(testandoGulp.dest('./dist/js'))
}


function styles() {
    return testandoGulp.src('./src/styles/*.scss')
        .pipe(testandoSass({outputStyle: 'compressed'}))
        .pipe(testandoGulp.dest('./dist/css'));
}

function images() {
    return testandoGulp.src('./src/images/**/*', { econding: false })
        .pipe(testandoImagemin())
        .pipe(testandoGulp.dest('./dist/images'));
}

exports.default = testandoGulp.parallel(styles, images, scripts);

exports.watch = function() {
    testandoGulp.watch('./src/styles/*.scss', testandoGulp.parallel(styles));
    testandoGulp.watch('./src/scripts/*.js', testandoGulp.parallel(scripts));
}