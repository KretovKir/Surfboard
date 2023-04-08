const { src, dest, task, watch, series } = require("gulp");
const rm = require("gulp-rm");
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

sass.compiler = require('node-sass');
const styles= [
    "node_modules/normalize.css/normalize.css",
    "scss/main.scss"
]

task("cleanDir", function () {
  return src("dist/**/*", { read: false }).pipe(rm());
});

task("copy", () => {
  return src("scss/**/*.scss").pipe(dest("dist"));
});

task("styles", ()=>{
    return src('scss')
    .pipe(concat('main.scss'))
    .pipe(dest("scss"))
    
})

watch("scss/**/*.scss", series("styles"));

task("default", series("cleanDir", "styles"));
