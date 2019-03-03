module.exports = function (grunt) {


    grunt.initConfig({

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
         * Concat
         */
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['public/js/**/*.js'],
                dest: 'public/dist/<%= pkg.name %>.js'
            }
        },

        /**
         * Uglify
         */
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },

            my_target: {
                files: {
                    'public/dist/output.min.js': ['public/js/custom.js', 'public/js/jquery.easing.1.3.js', 'public/js/jquery.flexslider.js']
                }
            },


        },

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
        watch: {

            css: {
                files: 'public/**/*.scss',
                tasks: ['sass', 'jshint', 'htmlmin', 'uglify', 'concat', 'responsive_images']
            }
        }


    });

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




};

/* add bag (!) to wordpress css theme top-title so that it shows on minified file*/
