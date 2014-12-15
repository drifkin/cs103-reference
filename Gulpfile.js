// Gulpfile based on https://gist.github.com/Sigmus/9253068

var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

var scriptsDir = './src/js';
var buildDir = './build';


function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: "Compile Error",
        message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
}


// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file, watch) {
    var props = {
        entries: [scriptsDir + '/' + file],
        // The following are required by watchify
        cache: {},
        packageCache: {},
        // fullPaths: true
    };
    var bundler = watch ? watchify(browserify(props)) : browserify(props);
    bundler.transform(reactify);
    function rebundle() {
        var stream = bundler.bundle();
        return stream.on('error', handleErrors)
            .pipe(source(file))
            .pipe(rename('app.js'))
            // See http://stackoverflow.com/questions/24992980/how-to-uglify-output-with-browserify-in-gulp
            .pipe(buffer())
            .pipe(uglify())
            .pipe(gulp.dest(buildDir));
    }
    bundler.on('update', function() {
        rebundle();
        gutil.log('Rebundle...');
    });
    return rebundle();
}

gulp.task('copy-static', function() {
    return gulp.src('./src/static/**/*')
        .pipe(gulp.dest(buildDir));
});

gulp.task('build', ['copy-static'], function() {
    return buildScript('app.jsx', false);
});


gulp.task('default', ['build'], function() {
    return buildScript('app.jsx', true);
});
