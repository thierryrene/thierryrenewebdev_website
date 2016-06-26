module.exports = function(grunt) {

	grunt.initConfig({

		// imagemin: {
		// 	png: {
		// 		options: {
		// 			optimizationLevel: 7
		// 		},
		// 		files: [{
		// 			// Set to true to enable the following options…
		// 			expand: true,
		// 			// cwd is 'current working directory'
		// 			cwd: 'source/img/',
		// 			src: ['**/*.png'],
		// 			// Could also match cwd line above. i.e. project-directory/img/
		// 			dest: 'build/img/',
		// 			ext: '.png'
		// 		}]
		// 	},
		// 	jpg: {
		// 		options: {
		// 			progressive: true,
		// 		},
		// 		files: [{
		// 			// Set to true to enable the following options…
		// 			expand: true,
		// 			// cwd is 'current working directory'
		// 			cwd: 'source/img/',
		// 			src: ['**/*.jpg'],
		// 			// Could also match cwd. i.e. project-directory/img/
		// 			dest: 'build/img/',
		// 			ext: '.jpg'
		// 		}]
		// 	},
		// 	gif: {
		// 		options: {
		// 			interlaced: true
		// 		},
		// 		files: [{
		// 			// Set to true to enable the following options…
		// 			expand: true,
		// 			// cwd is 'current working directory'
		// 			cwd: 'source/img/',
		// 			src: ['**/*.gif'],
		// 			// Could also match cwd. i.e. project-directory/img/
		// 			dest: 'build/img/',
		// 			ext: '.gif'
		// 		}]
		// 	}
		// },

		sass: {
			app: {
				files: [{
					expand: true,
					cwd: 'source/scss/',
					src: ['*.scss'],
					dest: 'build/css',
					ext: '.css'
				}]
			}
		},

		purifycss: {
			options: {},
			target: {
				src: ['build/*.html', 'build/js/*.js'],
				css: ['build/css/*.css'],
				dest: 'build/purestyle.css'
			}
		},

		autoprefixer: {
			options: {
				browsers: [
					"Android 2.3",
					"Android >= 4",
					"Chrome >= 20",
					"Firefox >= 24",
					"Explorer >= 8",
					"iOS >= 6",
					"Opera >= 12",
					"Safari >= 6"
				]
			},
			compile: {
				files: {
					'build/purestyle.css': 'build/purestyle.css'
				}
			}
		},

		// cssmin: {
		// 	clean: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'build',
		// 			src: ['*.css'],
		// 			dest: 'build',
		// 			ext: '.min.css'
		// 		}]
		// 	}
		// },

		jade: {
			compile: {
				options: {
					data: {
						pretty: false
					}
				},
				files: [{
					expand: true,
					cwd: 'source/jade/',
					src: 'index.jade',
					dest: 'build',
					ext: '.html'
				}]
			}
		},

		uglify: {
			bower_js_files: {
				files: {
					'build/js/output.min.js': [
						'source/js/modernizr.min.js',
						'source/js/jquery.min.js',
						'source/js/bootstrap.min.js',
						'bower_components/skrollr/dist/skrollr.min.js',
						'source/js/main.js',
						'source/js/plugins.js'
					]
				}
			}
		},

		watch: {
			sass: {
				files: ['source/sass/{,*/}*.{scss,sass}'],
				tasks: ['sass', 'purifycss', 'autoprefixer', 'cssmin', 'uglify']
			},
			jade: {
				files: ['source/jade/*.jade', 'source/scss/*.scss'],
				// tasks: ['jade', 'sass', 'purifycss', 'autoprefixer', 'cssmin', 'uglify', 'imagemin']
				// tasks: ['jade', 'sass', 'purifycss', 'autoprefixer', 'cssmin', 'uglify']
				tasks: ['jade', 'sass', 'purifycss', 'autoprefixer', 'uglify']
			}
		}

	});

	grunt.loadNpmTasks('grunt-purifycss');
	// grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	// grunt.loadNpmTasks('grunt-contrib-imagemin');

};