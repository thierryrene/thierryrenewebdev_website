module.exports = function(grunt) {

	grunt.initConfig({

		imagemin: {
			png: {
				options: {
					optimizationLevel: 7
				},
				files: [{
					// Set to true to enable the following options…
					expand: true,
					// cwd is 'current working directory'
					cwd: 'source/img/',
					src: ['**/*.png'],
					// Could also match cwd line above. i.e. project-directory/img/
					dest: 'build/img/',
					ext: '.png'
				}]
			},
			jpg: {
				options: {
					progressive: true,
				},
				files: [{
					// Set to true to enable the following options…
					expand: true,
					// cwd is 'current working directory'
					cwd: 'source/img/',
					src: ['**/*.jpg'],
					// Could also match cwd. i.e. project-directory/img/
					dest: 'build/img/',
					ext: '.jpg'
				}]
			},
			gif: {
				options: {
					interlaced: true
				},
				files: [{
					// Set to true to enable the following options…
					expand: true,
					// cwd is 'current working directory'
					cwd: 'source/img/',
					src: ['**/*.gif'],
					// Could also match cwd. i.e. project-directory/img/
					dest: 'build/img/',
					ext: '.gif'
				}]
			}
		},

		sass: {
			app: {
				files: [{
					expand: true,
					cwd: "source/scss/",
					src: ["*.scss"],
					dest: "build/css",
					ext: ".css"
				}]
			},
			options: {
				sourceMap: false,
				// outputStyle: "nested",
				imagePath: "source/scss/"
			}
		},

		purifycss: {
			options: {},
			target: {
				src: ["build/*.html", "build/js/*.js"],
				// animate.css é importado aqui pois não foi importado no arquivo de estilo scss.
				css: ["build/css/*.css", "bower_components/animate.css/animate.min.css"],
				dest: "build/purestyle.css"
			}
		},

		//definindo configurações da task para o autoprefixer
		autoprefixer: {
			compile: {
				files: {
					"build/purestyle.css": "build/purestyle.css"
				}
			}
		},

		cssmin: {
			clean: {
				files: {
					"build/purestyle.css": "build/purestyle.css"
				}
			}
		},

		jade: {
			compile: {
				options: {
					data: {
						pretty: false
					}
				},
				files: [{
					expand: true,
					cwd: "source/jade/",
					src: "*-ok.jade",
					dest: "build",
					ext: ".html"
				}]
			}
		},

		uglify: {
			bower_js_files: {
				files: {
					"build/js/output.min.js": [
						"bower_components/jquery/dist/jquery.min.js",
						"bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js",
						"source/js/main.js",
						"source/js/puglins.js"
					]
				}
			}
		},

		watch: {
			sass: {
				files: ["source/sass/{,*/}*.{scss,sass}"],
				tasks: ["sass", "purifycss", "autoprefixer", "cssmin", "uglify"]
			},
			jade: {
				files: ["source/jade/*.jade", "source/scss/*.scss"],
				tasks: ["jade", "sass", "purifycss", "autoprefixer", "cssmin", "uglify", "imagemin"]
			}
		}

	});

	//carregando plugins do grunt
	grunt.loadNpmTasks("grunt-purifycss");
	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-jade");
	grunt.loadNpmTasks("grunt-sass");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks('grunt-contrib-imagemin');
};