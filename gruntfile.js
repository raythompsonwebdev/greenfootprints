<<<<<<< HEAD
module.exports = function (grunt) {
=======
module.exports = function(grunt){
>>>>>>> 489265ef4fc1f8d8b449cac019674c6e1b2a8b62


    grunt.initConfig({

<<<<<<< HEAD
        pkg: grunt.file.readJSON('package.json'),


        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [

                        {
                            name: 'quantamsmall',
                            width: 80,
                        },
                        {
                            name: 'microsmall',
                            width: 120,
                        },
                        {
                            name: 'extrasmall',
                            width: 240,
                        },
                        {
                            name: 'small',
                            width: 500,
                        },
                        {
                            name: 'medium',
                            width: 980,
                        },
                        {
                            name: 'large',
                            width: 1200,
                        }
                    ]
                },

                /*
                You don't need to change this part if you don't change
                the directory structure.
                */
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'Files/img/',
                    dest: 'public/images/'
                }]
            }
        },

        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['images'],
            },
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ['images']
                },
            },
        },


        htmlmin: { // Task
            dist: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { // Dictionary of files
                    'public/dist/index.html': 'public/index.html', // 'destination': 'source'

                }
            }
        },

        /**
=======
            pkg: grunt.file.readJSON('package.json'),


		responsive_images: {
		  dev: {
			options: {
			  engine: 'im',
			  sizes: [

				{
				  name:'quantamsmall',
				  width: 80,
				},
				{
				  name:'microsmall',
				  width: 120,
				},
				{
				  name: 'extrasmall',
				  width: 240,
				},
				{
				  name:'small',
				  width: 500,
				},
				{
				  name:'medium',
				  width: 980,
				},
			  	{
				  name:'large',
				  width: 1200,
				}]
			},

			/*
			You don't need to change this part if you don't change
			the directory structure.
			*/
			files: [{
			  expand: true,
			  src: ['*.{gif,jpg,png}'],
			  cwd: 'greenfootprints-app/img/',
			  dest: 'greenfootprints-app/images/'
			}]
		  }
		},

		/* Clear out the images directory if it exists */
		clean: {
		  dev: {
			src: ['images'],
		  },
		},

		/* Generate the images directory if it is missing */
		mkdir: {
		  dev: {
			options: {
			  create: ['images']
			},
		  },
		},


		htmlmin: {                                     // Task
			dist: {                                      // Target
			  options: {                                 // Target options
				removeComments: true,
				collapseWhitespace: true
			  },
			  files: {                                   // Dictionary of files
				'greenfootprints-app/dist/index.html': 'greenfootprints-app/index.html',     // 'destination': 'source'
				'greenfootprints-app/dist/recycling-green-foot-prints-com.html': 'greenfootprints-app/recycling-green-foot-prints-com.html',
				'greenfootprints-app/dist/recycling-facts-green-foot-prints-com.html': 'greenfootprints-app/recycling-facts-green-foot-prints-com.html',
				'greenfootprints-app/dist/recycling-ettiquette-green-foot-prints-com.html': 'greenfootprints-app/recycling-ettiquette-green-foot-prints-com.html',
				'greenfootprints-app/dist/feedback-green-foot-prints-com.html': 'greenfootprints-app/feedback-green-foot-prints-com.html',
				'greenfootprints-app/dist/contact-us-green-foot-prints-com.html': 'greenfootprints-app/contact-us-green-foot-prints-com.html',
				'greenfootprints-app/dist/collections-green-foot-prints-com.html': 'greenfootprints-app/collections-green-foot-prints-com.html',
				'greenfootprints-app/dist/500.html': 'greenfootprints-app/500.html',
				'greenfootprints-app/dist/404.html': 'greenfootprints-app/404.html',
				'greenfootprints-app/dist/401.html': 'greenfootprints-app/401.html',
				'greenfootprints-app/dist/ten-ways-to-recycle-green-foot-prints-com.html': 'greenfootprints-app/ten-ways-to-recycle-green-foot-prints-com.html',

			  }
			}
		  },

		/**
>>>>>>> 489265ef4fc1f8d8b449cac019674c6e1b2a8b62
         * Concat
         */
        concat: {
            options: {
                separator: ';'
            },
            dist: {
<<<<<<< HEAD
                src: ['public/js/**/*.js'],
                dest: 'public/dist/<%= pkg.name %>.js'
=======
                src: ['greenfootprints-app/js/**/*.js'],
                dest: 'greenfootprints-app/js/<%= pkg.name %>.js'
>>>>>>> 489265ef4fc1f8d8b449cac019674c6e1b2a8b62
            }
        },

        /**
         * Uglify
         */
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },

<<<<<<< HEAD
            my_target: {
                files: {
                    'public/dist/output.min.js': ['public/js/custom.js', 'public/js/jquery.easing.1.3.js', 'public/js/jquery.flexslider.js']
                }
            },
=======
			my_target: {
			  files: {
				'greenfootprints-app/dist/greenfootprints.min.js': ['greenfootprints-app/js/custom.js', 'greenfootprints-app/js/jquery.easing.1.3.js', 'greenfootprints-app/js/jquery.flexslider.js']
			  }
			},
>>>>>>> 489265ef4fc1f8d8b449cac019674c6e1b2a8b62


        },

<<<<<<< HEAD
        /**
         * sass Task
         */
        sass: {

            dev: {
                options: {
                    style: "expanded",
                    sourcemap: 'auto'
                },

                files: {
                    'public/style.css': 'public/css/style.scss',
                    'public/ie.css': 'public/css/ie.scss'
                    /*where file goes-----/where file from*/
                }
            },

            dist: {
                options: {
                    style: "compressed",
                    sourcemap: 'auto'
                },
                files: {
                    'public/style-min.css': 'public/css/style.scss',
                    'public/ie-min.css': 'public/css/ie.scss'
                    /*where file goes-----/where file from*/
                }
            }
        },

        /**
=======
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
                            'greenfootprints-app/style.css':'greenfootprints-app/css/style.scss',
                            'greenfootprints-app/ie.css':'greenfootprints-app/css/ie.scss'
                            /*where file goes-----/where file from*/
                    }
                },

                    dist:{
                        options:{
                                style:"compressed",
                                sourcemap:'auto'
                        },
                        files:{
                            'greenfootprints-app/dist/style-min.css':'greenfootprints-app/css/style.scss',                                                   'greenfootprints-app/dist/ie-min.css':'greenfootprints-app/css/ie.scss'
                                /*where file goes-----/where file from*/
                        }
                    }
                },

         /**
>>>>>>> 489265ef4fc1f8d8b449cac019674c6e1b2a8b62
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

        /**
         * watch
         */
<<<<<<< HEAD
        watch: {

            css: {
                files: 'public/**/*.scss',
                tasks: ['sass', 'jshint', 'htmlmin', 'uglify', 'concat', 'responsive_images']
            }
        }
=======
		watch:{

                css:{
                        files:'greenfootprints-app/**/*.scss',
                        tasks:['sass', 'jshint', 'htmlmin', 'uglify', 'concat', 'responsive_images' ]
                }
            }
>>>>>>> 489265ef4fc1f8d8b449cac019674c6e1b2a8b62


    });

<<<<<<< HEAD
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('test', ['jshint', 'qunit']);

    grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify', 'clean', 'mkdir', 'htmlmin']);
    grunt.registerTask('default', ['sass', 'watch', 'responsive_images']);
=======
grunt.loadNpmTasks('grunt-responsive-images');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-mkdir');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-qunit');
grunt.loadNpmTasks('grunt-contrib-concat');

grunt.registerTask('test', ['jshint', 'qunit']);

grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify', 'clean', 'mkdir', 'htmlmin']);
grunt.registerTask('default', ['sass', 'watch' ,'responsive_images']);
>>>>>>> 489265ef4fc1f8d8b449cac019674c6e1b2a8b62




};

/* add bag (!) to wordpress css theme top-title so that it shows on minified file*/
