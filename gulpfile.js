const { src, dest, task, watch, series } = require("gulp");
const rm = require("gulp-rm");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const sassGlob = require("gulp-sass-glob");
const autoprefixer = require("gulp-autoprefixer");
const pxToRem = require("gulp-px2rem-converter");
const gcmq = require("gulp-group-css-media-queries");
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");
const babel = require("gulp-babel");
const uglify = require('gulp-uglify');
const reload = browserSync.reload;

sass.compiler = require("node-sass");
const styles = ["node_modules/normalize.css/normalize.css", "scss/main.scss"];

task("cleanDir", function () {
  return src("dist/**/*", { read: false }).pipe(rm());
});

task("copy:html", () => {
  return src("src/*.html")
    .pipe(dest("dist"))
    .pipe(reload({ stream: true }));
});

task("styles", () => {
  return src("src/scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(pxToRem())
    .pipe(gcmq())
    .pipe(concat("main.css"))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(dest("dist"))
    .pipe(sassGlob())
    .pipe(sourcemaps.write())
    .pipe(dest("dist/css"));
});

task("copy:images", () => {
  return src("src/img/**/*").pipe(dest("dist/img"));
});

task("scripts", () => {
  return src("src/js/*.js")
  .pipe(sourcemaps.init())
  .pipe(concat("main.js"))
  
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(dest("dist/js"))
});



task("server", () => {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
    open: false,
  });
});

watch("scss/**/*.scss", series("styles"));
watch("*.html", series("copy:html"));
watch("src/js/*.js", series("scripts"));

task(
  "default",
  series(
    "cleanDir",
    "copy:html",
    "styles",
    "copy:images",
    "scripts",
    "server"
  )
);
