const gulp = require('gulp');
const ts = require('gulp-typescript')
const replace = require('gulp-replace')
const tsProject = ts.createProject("tsconfig.json");
const watch = require('gulp-watch');
const shell = require('gulp-shell');
const path = require('path');
const fse = require('fs-extra');
const GulpZip = require('gulp-zip');

const terser = require('gulp-terser');
const gulpif = require('gulp-if');
const javascriptObfuscator = require('gulp-javascript-obfuscator');
const cleanCSS = require('gulp-clean-css');

let isProdEnv = false;


const paths = ["source/**/*", "!source/**/*.ts", "source/**/*.d.ts"];
const ext = ["i18n**/*.js", "package*.json", "upgrade.js"];

const packageInfo = require("./package.json");

gulp.task('copy-res', () => {
    return gulp.src(paths)
        .pipe(gulpif((file) => file.path.endsWith(".css"), cleanCSS()))
        .pipe(gulp.dest('dist'))
});
gulp.task('copy-ext', () => gulp.src(ext).pipe(replace(/\.\/dist/g, '.')).pipe(gulp.dest('dist')));
gulp.task('complier', () => {
    return tsProject.src().pipe(tsProject())
        .js.pipe(gulpif(isProdEnv, terser()))
        .pipe(gulpif(isProdEnv, javascriptObfuscator()))
        .pipe(gulpif(isProdEnv, javascriptObfuscator()))
        .pipe(gulp.dest('dist'))
});
gulp.task('default', gulp.parallel('complier', 'copy-res', 'copy-ext'));
gulp.task('watch', () => watch(paths.concat('source/**/*.ts'), gulp.parallel('default')));

// 以下是发布代码
gulp.task('modi-ver', (cb) => {
    fse.writeFileSync("./dist/package.json", JSON.stringify(Object.assign(require('./dist/package.json'), {
        version: '2.0.0'
    }), null, '\t'));
    cb();
})
gulp.task('exec-npmi', shell.task("npm i --production", {
    cwd: path.join(__dirname, 'dist')
}));
gulp.task('npmi', gulp.series('modi-ver', 'exec-npmi', 'copy-ext'));
gulp.task('rename', (cb) => {
    let pubDist = `./.publish/${packageInfo.name.substr(8)}`;
    if (!fse.existsSync('./.publish')) fse.mkdirsSync("./.publish");
    if (!fse.existsSync(pubDist)) fse.removeSync(pubDist);
    fse.copySync("./dist", pubDist);
    cb();
});
gulp.task('zip', () => gulp.src(`./.publish/${packageInfo.name.substr(8)}**/**/**.*`)
    .pipe(GulpZip(`${packageInfo.version}.zip`))
    .pipe(gulp.dest("./.publish")));

gulp.task('set-env', (cb) => {
    isProdEnv = true;
    cb();
})

gulp.task('publish', gulp.series('set-env', 'default', 'npmi', 'rename', 'zip'));