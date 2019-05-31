module.exports = function (grunt) {

    grunt.initConfig({
        clean: {
            dist: ['dist'],
            // plugin: ['data/plugins/iviews-app']
        },
        copy: {
            plugin: {
                src: 'plugin.json',
                dest: 'data/plugins/example-app/',
                expand: true,
            },
            img: {
                cwd: 'src',
                expand: true,
                src: ['img/*'],
                dest: 'data/plugins/example-app/'
            },
            dashboard: {
                cwd: 'src',
                expand: true,
                src: ['dashboards/*'],
                dest: 'data/plugins/example-app/'
            },
            html: {
                cwd: 'src',
                expand: true,
                src: ['legacy/*.html'],
                dest: 'data/plugins/example-app/'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        watch: {
            rebuild: {
                files: ['src/**/*'],
                tasks: ['webpack:dev'],
                options: {
                    spawn: false,
                    interrupt: true,
                },
            }
        },
        webpack: {
            dev: require('./webpack.config.js'),
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['clean:dist', 'webpack:dev', 'copy', 'watch']);
    grunt.registerTask('build', ['webpack:build', 'cssmin'])
};
