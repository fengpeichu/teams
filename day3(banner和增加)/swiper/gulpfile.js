var gulp = require('gulp');
//起服务
var webserver = require('gulp-webserver');
//path
var path = require('path');
//url
var url = require('url');
//fs
var fs = require('fs');
//json
var list = require('./data/data.json');
//创建任务
gulp.task('webserver', () => {
    return gulp.src('.')
        .pipe(webserver({
            port: 3000, //设置端口号
            open: true, //自动打开浏览器
            livereload: true, //自动更新
            middleware: function(req, res, next) {
                //以url路由/
                let pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    res.end('');
                    return;
                } else if (pathname === '/api/banner') {
                    res.end(JSON.stringify({ code: 0, data: list }));
                } else {
                    pathname = pathname === '/' ? 'index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }
            }
        }))
});