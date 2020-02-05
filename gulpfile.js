var gulp = require("gulp");
var sass = require("gulp-sass");
var connent = require("gulp-connect");
var concat = require("gulp-concat");
var autoFixer = require("gulp-autoprefixer");
var minify = require("gulp-minify");

// html
gulp.task("html", function() {
  gulp
    .src("./src/html/*.html")
    .pipe(gulp.dest("./dist"))
    .pipe(connent.reload());
});

//sass
gulp.task("sass", function() {
  gulp
    .src(["./src/css/**/*.scss", "./src/css/**/*.css"])
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoFixer("last 2 versions"))
    .pipe(concat("main.css"))
    .pipe(gulp.dest("./dist/css"))
    .pipe(connent.reload());
});

//script
gulp.task("script", function() {
  gulp
    .src(["src/js/lib/*.js", "./src/js/*.js"])
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(gulp.dest("./dist/js"))
    .pipe(connent.reload());
});

// server
gulp.task("connent", function() {
  connent.server({
    port: 6300,
    root: "./dist",
    livereload: true
  });
});

// watch
gulp.task("watch", function() {
  gulp.watch("src/html/*.html").on("change", gulp.series("html"));
  gulp.watch("src/css/**/*.scss").on("change", gulp.series("sass"));
  gulp.watch("src/js/*.js").on("change", gulp.series("script"));
});

gulp.task("default", gulp.parallel("connent", "watch"));
