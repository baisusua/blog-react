var gulp          = require('gulp');
var webpack       = require('gulp-webpack');

gulp.task("index_html", function() {
    return gulp
        .src('./app/index.html')
        .pipe(gulp.dest('./dev/'));
});

gulp.task("index_js", function() {
    return gulp
        .src('./app/lib/page/index.js')
        .pipe(webpack({
        	watch: true,
        	output: {
		        filename: 'index.min.js'
		    },
        	module:{
	            loaders: [{
			           test: /\.js$/,
			           loader: 'babel-loader'
			       }, {
			           test: /\.jsx$/,
			           loader: 'babel-loader!jsx-loader?harmony'
			    }]
	        },
	        devtool: 'source-map'
        }))
        .pipe(gulp.dest('./dev/js/'));
});

gulp.task('msc_index',['index_html','index_js']);