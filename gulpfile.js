var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var crisper = require('gulp-crisper');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var htmlreplace = require('gulp-html-replace');

gulp.task('vulcanize', function() {
  return gulp.src('dist/elements.html')
    .pipe(vulcanize())
    .pipe(crisper())
    .pipe(gulp.dest('dist/files'));
  });

gulp.task('move-webcomponentsjs', function () {
  return gulp.src(['dist/bower_components/webcomponentsjs/webcomponents-lite.min.js']).pipe(gulp.dest('dist/files'));
});

gulp.task('move-font-awesome', function () {
  return gulp.src(['bower_components/font-awesome/css/font-awesome.min.css']).pipe(gulp.dest('dist/files'));
});

gulp.task('clean-elements-html', function () {
  return gulp.src('dist/elements.html')
    .pipe(clean({force: true}));
});

gulp.task('clean-bower-components', function () {
  return gulp.src('dist/bower_components', {read: false})
    .pipe(clean());
});

gulp.task('move-elements', function () {
  return gulp.src(['dist/files/**']).pipe(gulp.dest('dist'));
});

gulp.task('clean-elements', function () {
   return gulp.src('dist/files', {read: false})
    .pipe(clean());
});

gulp.task('copy-polymer-dependencies', function() {
  gulp.src('dist/index.html')
    .pipe(htmlreplace({
        'css': 'font-awesome.min.css',
        'js': 'elements.js',
        'webcomponents': 'webcomponents-lite.min.js'
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', function(callback) {
  runSequence('vulcanize', ['move-webcomponentsjs', 'move-font-awesome'], ['clean-elements-html', 'clean-bower-components'], 'move-elements', 'clean-elements', 'copy-polymer-dependencies',
              callback);
});