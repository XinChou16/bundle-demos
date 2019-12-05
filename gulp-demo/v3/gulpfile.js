const gulp = require('gulp')
const concat = require('gulp-concat')
const rev = require('gulp-rev')
const uglify = require('gulp-uglify')
const del = require('del')

// 删除
// https://v3.gulpjs.com.cn/docs/recipes/ 技巧
// https://v3.gulpjs.com.cn/docs/recipes/delete-files-folder/
gulp.task('clean', () => {
    return del(['dist/*'])
})

gulp.task('concat', () => {
    return gulp.src('src/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('dist'))
})

gulp.task('default', [
    'clean',
    'concat'
])
