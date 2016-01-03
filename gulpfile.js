var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    connect = require('gulp-connect');
    mainBowerFiles = require('main-bower-files');

var plumber      = require('gulp-plumber');
var nib          = require('nib');
var jeet 		 = require('jeet');
var concat       = require('gulp-concat');



    function plumb(emitEnd) {
        return plumber({
            errorHandler: function(error) {
                gutil.log(gutil.colors.red(error.message));
                if (emitEnd) {
                    this.emit('end');
                }
                if (options.production) {
                    process.exit(1);
                }
            }
        });
    }


    gulp.task('bower', function() {
        // mainBowerFiles is used as a src for the task,
        // usually you pipe stuff through a task
        return gulp.src(mainBowerFiles())
            // Then pipe it to wanted directory, I use
            // dist/lib but it could be anything really
            .pipe(gulp.dest('builds/development/bower'))
    });



    gulp.task('jade', function() {
           gulp.src('src/templates/**/*.jade')
               .pipe(jade())
               .pipe(gulp.dest('builds/development'))
               .pipe(connect.reload());
        });

    gulp.task('styles', function() {
        return gulp.src('src/stylus/**/*.styl')
            .pipe(plumb(true))
            .pipe(stylus({ use: [ nib(), jeet() ] }))
            .pipe(concat('main.css'))
            .pipe(gulp.dest('builds/development/css'))
            .pipe(connect.reload());
    });

    gulp.task('js', function() {
        return gulp.src('src/angular/**/*')
            .pipe(concat('app.js'))
            .pipe(gulp.dest('builds/development/js'));
    });

    gulp.task('fonts', function() {
        return gulp.src('src/fonts/**/*')
            .pipe(gulp.dest('builds/development/fonts'));
    });

    gulp.task('connect', function(){
        connect.server({
            root: 'builds/development',
            port: 3000,
            livereload: true
        });
    });

    gulp.task('watch', function(){
        gulp.watch('src/templates/**/*.jade', ['jade']);
        gulp.watch('src/stylus/**/*.styl', ['styles']);
        gulp.watch('src/angular/**/*.js', ['js']);
        gulp.watch('bower_components/**', ['bower']);

    });



    gulp.task('default', ['connect', 'jade', 'styles', 'fonts', 'js', 'bower', 'watch']);


