var gulp          = require('gulp');
var webpack       = require('gulp-webpack');

gulp.task("msc_index", function() {
    return gulp
        .src('./app/lib/page/*.js')
        .pipe(webpack({
        	watch: true,
        	output: {
		        filename: 'index.js'
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
        .pipe(gulp.dest('./dev/'));
});