/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8001;
	var base = grunt.option('base') || '.';

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner:
				''
		},

		// uglify: {
		// 	options: {
		// 		banner: '<%= meta.banner %>\n'
		// 	},
		// 	build: {
		// 		src: 'js/main.js',
		// 		dest: 'js/main.min.js'
		// 	}
		// },

		// sass: {
		// 	core: {
		// 		files: {
		// 			'css/newbond.css': 'css/newbond.scss',
		// 		}
		// 	}
		// },

		autoprefixer: {
			dist: {
				src: 'css/main.css'
			}
		},

		// cssmin: {
		// 	compress: {
		// 		files: {
		// 			'css/main.min.css': [ 'css/main.css' ]
		// 		}
		// 	}
		// },

		connect: {
			server: {
				options: {
					port: port,
					base: base,
					livereload: true,
					open: true
				}
			}
		},

		zip: {
			'./pkg/xuexh5-website.zip': [
				'index.html',
				'css/**',
				'js/**',
				'images/**'
			]
		},

		watch: {
			options: {
				livereload: true
			},
			js: {
				files: [ 'Gruntfile.js', 'js/main.js' ],
				tasks: 'js'
			},
			// css: {
			// 	files: [ 'css/main.css' ],
			// 	tasks: 'css-core'
			// },
			html: {
				files: [ 'index.html']
			}
		}

	});

	// Dependencies
	// grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	// grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );
	grunt.loadNpmTasks( 'grunt-autoprefixer' );
	grunt.loadNpmTasks( 'grunt-zip' );

	// Default task
	grunt.registerTask( 'default', [ 'css', 'js' ] );

	// JS task
	grunt.registerTask( 'js', [ /*'uglify'*/ ] );

	// Core framework CSS
	// grunt.registerTask( 'css-core', [ 'autoprefixer', 'cssmin' ] );

	// All CSS
	grunt.registerTask( 'css', [ 'autoprefixer' ] );	
	// grunt.registerTask( 'css', [ 'autoprefixer', 'cssmin' ] );

	// Package presentation to archive
	grunt.registerTask( 'package', [ 'default', 'zip' ] );

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

};
