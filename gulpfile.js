var gulp          = require('gulp');
var webpack       = require('gulp-webpack');

gulp.task("test", function() {
    return gulp
        .src('./app/lib/page/*.js')
        .pipe(webpack({
        	watch: true,
        	module:{
	            loaders: [{
			           test: /\.js$/,
			           loader: 'babel-loader'
			       }, {
			           test: /\.jsx$/,
			           loader: 'babel-loader!jsx-loader?harmony'
			    }]
	        },
        }))
        .pipe(gulp.dest('./build'));
});