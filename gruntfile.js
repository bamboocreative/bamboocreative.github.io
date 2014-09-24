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
		
		watch: {
			livereload: {
				options: { livereload: true },
				files: ['_site/css/app.css'],
			},
			scripts: {
				files: ['js/*.js'],
				tasks: ['concat'],
			},
		},

	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	// Default task(s).
	grunt.registerTask('default', ['concat', 'uglify', 'watch']);
	
}

