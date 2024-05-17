const testandoGulp = require('gulp');
const testandoSass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');


function styles() {
    return testandoGulp.src('./src/styles/*.scss')
        .pipe(testandoSass({outputStyle: 'compressed'}))
        .pipe(testandoGulp.dest('./dist/css'));
}

function images() {
    return testandoGulp.src('./src/images/**/*', { econding: false })
        .pipe(imagemin())
        .pipe(testandoGulp.dest('./dist/images'));
}

exports.default = testandoGulp.parallel(styles, images);
exports.watch = function() {
    testandoGulp.watch('./src/styles/*.scss', testandoGulp.parallel(styles));
}