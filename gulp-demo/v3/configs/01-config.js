const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const rev = require('gulp-rev')
const del = require('del')

const fileOrders = [
    './babelResult/utils.js',
    './babelResult/a.js'
]

// 打包完成del模块 https://github.com/sindresorhus/del
const handleEnd = async () => {
    console.log('build-end');
    await del(['babelResult']);
    console.log('删除babelResult完成，请进入dist目录进行查看');
}

// 清除dist目录，参考https://v3.gulpjs.com.cn/docs/recipes/delete-files-folder/
gulp.task('clean', () => {
    return del(['dist/*'])
})

// 合并，压缩，添加hash
gulp.task('mergeAndSoOn', () => {
    return gulp.src(fileOrders) // 读取需要处理的文件
        .pipe(concat('main.js')) // 合并成一个文件
        .pipe(uglify()) // 代码混淆
        .pipe(rev()) // 文件名添加hash
        .pipe(gulp.dest('dist')) // 输出文件
        .on('end', handleEnd)
})

gulp.task('default', [
    'clean',
    'mergeAndSoOn'
])