var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    jsonminify = require('gulp-jsonminify'),
    sass = require('gulp-sass'),
    handlebars = require('gulp-compile-handlebars'),
    merge = require('gulp-merge-json');
    //data = require('gulp-data');

gulp.task('default', function () {
  gulp.start('lib-scripts', 'scripts', 'styles', 'data', 'sass-styles', 'templates');
});

gulp.task('lib-scripts', function() {
  return gulp.src(['src/js/lib/jquery-1.12.3.js', 'src/js/lib/handlebars-v4.0.5.js', 'src/js/lib/**/*.js', 'src/js/lib/common.js'])
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
    .pipe(notify({ message: 'Library scripts task complete' }));
});

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('styles', function() {
  return gulp.src('src/css/**/*.css')
    .pipe(concat('main.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(autoprefixer('last 2 version'))
    .pipe(cssnano())
    .pipe(gulp.dest('public/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('data', function () {
 return gulp.src('src/data/**/*.json')
   .pipe(merge('master.min.json'))
   .pipe(jsonminify())
   .pipe(gulp.dest('src/templates'))
   .pipe(notify({ message: 'Data task complete' }));
});

gulp.task('sass-styles', function() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css/'))
    .pipe(notify({ message: 'Sass task complete' }));
});

gulp.task('templates', function() {
  
  delete require.cache[require.resolve('./src/templates/master.min.json')]; // It'll read from cache if we don't delete it
  // this isn't the best, but it is working
  // we might be able to use gulp-data instead

  var templateData = require('./src/templates/master.min.json'),
  options = {
    batch : ['./src/templates/partials']
  }
  
  return gulp.src('src/templates/*.handlebars')
    .pipe(handlebars(templateData, options))
    .pipe(rename(function(path) {
      path.extname = '.html';
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {

  // Watch .css files
  gulp.watch('src/css/**/*.css', ['styles']);

  // Watch library .js files
  gulp.watch('src/js/lib/**/*.js', ['lib-scripts']);
  
  // Watch .js files
  gulp.watch('src/js/*.js', ['scripts']);
  
  // Watch .json files
  gulp.watch('src/data/**/*.json', ['data']);
  
  // Watch .scss files
  gulp.watch('src/sass/**/*.scss', ['sass-styles']);
  
  // Watch .handlebars files
  gulp.watch(['src/templates/**/*.handlebars', 'src/templates/master.min.json'], ['templates']);

});
