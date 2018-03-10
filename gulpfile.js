// Live reload is browser plugin to synchronize the application after the server side changes
// Nodemon is Node.js module to reload the application when any file change.
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');

gulp.task('develop', function () {
    livereload.listen();
    nodemon({
        script: 'app.js',
        ext: 'js ejs css',
        stdout: false
    }).on('readable', function (){
        this.stdout.on('data', function (chunk) {
            if (/^Express server listening on port/.test(chunk))
            {
                livereload.changed(__dirname);
            }
        });
        this.stdout.pipe(process.stdout);
        this.stderr.pipe(process.stderr);
    });
});
// We can name it all gulp tasks, we have an alias as develop
//to call default task, on high scale applications we can have
//many tasks with or without alias.
gulp.task('default', [
    'develop'
]);
