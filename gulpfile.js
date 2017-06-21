var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	minifyCss = require('gulp-minify-css'),
	sourcemap = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	imageMin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel'),
	pump = require('pump'),

// NPM Vendor Directory
	bowerDir = 'node_modules/bower_components/',

	materializeDir = bowerDir + 'materialize/dist/',
	jqueryDir = bowerDir + 'jquery/',
	momentDir = bowerDir + 'moment/src/',
	dragulaDir = bowerDir + 'dragula.js/',
	dataTablesDir = bowerDir + 'datatables.net/dist/',
	fullcalendarDir = bowerDir + 'fullcalendar/dist/js/';
	jqueryValidationDir = bowerDir + 'jquery-validation/';


//
// COPY REQUIRED GULP FILES INTO SRC DIR
//
gulp.task('copy', function(){
	// Copy script files
	gulp.src([
		materializeDir + 'js/materialize.js',
		jqueryDir + 'dist/jquery.js/',
		momentDir + 'moment.js',
		jqueryValidationDir + 'dist/jquery.validate.min.js',
		dragulaDir + 'dragula.min.js',
		dataTablesDir + 'js/jquery.dataTables.min.js',
		fullcalendarDir + 'fullcalendar.min.js',
	])
		.pipe(gulp.dest('src/scripts/lib'));
});

gulp.task('scripts', function (cb) {
  pump([
      gulp.src('src/scripts/**/*.js'),
  		uglify(),
			rename({
				suffix: '.min',
			}),
      gulp.dest('src/dist/scripts/min')
    ],
    cb
  );
});
// TURN ES6 INTO ES5 WHEN NEEDED
gulp.task('bable', function(){
	return gulp.src(['src/js/pro/pro_modal.js'])
		.pipe(babel())
		.pipe(gulp.dest('src/dist/test/'));
});
// COMPILE IMAGES
gulp.task('images', function(){
	gulp.src(['src/images/email/*'])
		.pipe(imageMin())
		.pipe(gulp.dest('src/dist/img'))
		.pipe(browserSync.stream());
});
// COMPILE & MINIFY CSS 
gulp.task('sass', function(){
	return gulp.src(['src/sass/themes/pro/**.scss'])
		.pipe(sourcemap.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(minifyCss())
		.pipe(sourcemap.write())
		.pipe(gulp.dest('src/css/estify'))
		.pipe(browserSync.stream());
});

gulp.task('default', ['sass', 'images'], function(){
	browserSync.init({
		proxy: 'localhost/riot-test/',
		serverStatic: 'public',
		files: '/src',
	});
	gulp.watch(['src/sass/*.scss','src/sass/themes/pro/**/*.scss','src/sass/themes/estify/**/*.scss'], ['sass']);
	gulp.watch('src/img/**/*', ['images']);
	gulp.watch('src/scripts/*.js', ['scripts']);
	gulp.watch('*.**', browserSync.reload);
});