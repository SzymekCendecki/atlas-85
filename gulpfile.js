var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

/* SASS */
gulp.task('sass', function(){
	return gulp.src('scss/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('css'))
});

/* Watcher */
gulp.task('watch', function(){
	gulp.watch('scss/**/*.scss', ['sass'])
});