module.exports = function(grunt){


    grunt.initConfig({

            pkg: grunt.file.readJSON('package.json'),
		
		/**
         * Concat
         */
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/**/custom.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        
        /**
         * Uglify
         */
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

            /**
             * sass Task
             */
            sass:{

                dev:{
                    options:{
                            style:"expanded",
                            sourcemap:'auto'
                    },

                    files:{
                            'style.css':'css/style.scss',                           
                            'ie.css':'css/ie.scss'
                            /*where file goes-----/where file from*/
                    }
                },

                    dist:{
                        options:{
                                style:"compressed",
                                sourcemap:'auto'
                        },
                        files:{
                            'style-min.css':'css/style.scss',                                                   'ie-min.css':'css/ie.scss'
                                /*where file goes-----/where file from*/
                        }
                    }
                },
		
              /**
         * QUnit
         */

        qunit: {
            files: ['test/**/*.html']
        },

        /**
         * JS Hint
         */
        jshint: {
            files: ['Gruntfile.js', 'js/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

            watch:{

                css:{
                        files:'**/*.scss',
                        tasks:['sass']
                }
            }


    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.registerTask('test', ['jshint', 'qunit']);
   
   grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
   grunt.registerTask('default', ['sass', 'watch']);
	
	


}

/* add bag (!) to wordpress css theme top-title so that it shows on minified file*/