const { src, dest, task, watch, series } = require("gulp");
const rm = require("gulp-rm");
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');
const styles= [
    "node_modules/normalize.css/normalize.css",
    "scss/main.scss"
]


task("cleanDir", function () {
  return src("dist/**/*", { read: false }).pipe(rm());
});

task("copy:html", () => {
  return src("src/*.html").pipe(dest("dist"));
});
task("copy:scss",()=>{
    return src("src/scss/**/*.scss")
    .pipe(dest('dist/scss'))
})

task("styles", ()=>{
    return src('src/scss/**/*.scss')
    .pipe(concat('main.scss'))
    .pipe(dest("dist/css"))
})


task('server', () =>{
    browserSync.init({
        server: {
            baseDir: "dist"
        },
        open: false
    });
});

watch("scss/**/*.scss", series("styles"));
watch("*.html", series("copy:html"));


task("default", series("cleanDir", "copy:html", "copy:scss", "styles", "server"));
