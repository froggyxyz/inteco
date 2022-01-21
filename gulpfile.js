const { gulp, watch, series, src, dest } = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let sourcemaps = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');

function buildStyles() {
  return src('./src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(dest('./build/css'));
}

exports.buildStyles = buildStyles;
exports.default = function () {
  watch('./**/*.scss', buildStyles);
};
