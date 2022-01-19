const { gulp, watch, series, src, dest } = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let sourcemaps = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');

function buildStyles() {
  return src('./src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        browsers: [
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24',
          'Explorer >= 11',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6',
        ],
      })
    )
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest('./build/css'));
}

exports.buildStyles = buildStyles;
exports.default = function () {
  watch('./**/*.scss', buildStyles);
};
