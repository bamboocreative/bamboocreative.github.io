module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: ['js/*.js'],
				dest: 'js/app/app.js',
			},
		},
		
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			dist: {
			    files: {
			    	'js/app/app.min.js': ['<%= concat.dist.dest %>']
			    }
		    }
		},
		
		sass: {
			dist: {
				files: {
					'css/app.css': 'scss/app.scss'
				}
			}
		},
		
		watch: {
			sass: {
				files: 'scss/*.scss',
				tasks: ['sass'],
			},
			livereload: {
				// Here we watch the files the sass task will compile to
				// These files are sent to the live reload server after sass compiles to them
				options: { livereload: true },
				files: ['css/app.css'],
			},
			scripts: {
				files: ['js/app/app.js'],
				tasks: ['concat'],
			},
		},

	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	// Default task(s).
	grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);
	
}

