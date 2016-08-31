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
  return gulp.src(['dist/bower_components/font-awesome/css/font-awesome.min.css', 'dist/bower_components/font-awesome/fonts/**'], {base: 'dist/bower_components/'})
          .pipe(gulp.dest('dist/files/fonts'));
});

gulp.task('clean', function () {
  return gulp.src(['dist/elements.html', 'dist/bower_components'])
    .pipe(clean({force: true}));
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
        'css': 'fonts/font-awesome/css/font-awesome.min.css',
        'js': 'webcomponents-lite.min.js'
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', function(callback) {
  runSequence('vulcanize', ['move-webcomponentsjs', 'move-font-awesome'], 'clean', 'move-elements', 'clean-elements', 'copy-polymer-dependencies',
              callback);
});