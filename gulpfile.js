const testandoGulp = require('gulp');
const testandoSass = require('gulp-sass')(require('sass'));


function styles() {
    return testandoGulp.src('./src/styles/*.scss')
        .pipe(testandoSass({outputStyle: 'compressed'}))
        .pipe(testandoGulp.dest('./dist/css'));
}

exports.default = styles;
exports.watch = function() {
    testandoGulp.watch('./src/styles/*.scss', testandoGulp.parallel(styles));
}