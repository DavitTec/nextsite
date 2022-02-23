var gulp = require("gulp"),
    deploy = require("gulp-gh-pages");

gulp.task('deploy',‘build’,function() {
    return gulp.src("./dist/**/*")
        .pipe(deploy({
            remoteUrl: "https://github.com/davittec/nextsite" //github
        }))
        .on("error", function(err) {
            console.log(err)
        })
});
