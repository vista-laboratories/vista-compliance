const gulp = require('gulp');
    const browserSync = require('browser-sync').create();

function browsersyncServe(cb) {
        browserSync.init({
            //server: {
            //    baseDir: './' // Serves files from the current directory
            //}
            server: {
            baseDir: './',
            serveStaticOptions: {
                extensions: ['html']
            }
            },
            // Or, if you have a local server running (e.g., PHP):
            // proxy: 'yourlocal.dev' 
        });
        cb();
    }

function browsersyncReload(cb) {
        browserSync.reload();
        cb();
    }

    function watchTask() {
        gulp.watch('*.html', browsersyncReload); // Watch HTML files for changes
        gulp.watch('css/*.css', browsersyncReload); // Watch CSS files
        gulp.watch('js/*.js', browsersyncReload); // Watch JS files
        // Add more watch paths as needed for your project (e.g., Sass, images)
    }

exports.default = gulp.series(browsersyncServe, watchTask);
