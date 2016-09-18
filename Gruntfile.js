'use strict'

module.exports = (grunt) => {
  require('load-grunt-tasks')(grunt)

  // Initialize the Grunt object
  grunt.config.init({
    pkg: grunt.file.readJSON('package.json')
  })

  // Merge Style Tasks
  grunt.config.merge({
    // Autoprefixer
    autoprefixer: {
      dist: {
        files: {
          'tmp/styles-prefixed.css': 'tmp/styles-compiled.css'
        }
      }
    },

    // CSS Compilation
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'public/styles.css': ['tmp/styles-prefixed.css']
        }
      }
    },

    // Compile Sass
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'tmp/styles-compiled.css': 'scss/styles.scss'
        }
      }
    },

    // LiveReload
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'autoprefixer', 'clean'],
        options: {
          spawn: false
        }
      }
    }
  })

  // Clean
  grunt.config.merge({
    clean: ['tmp']
  })

  grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'clean', 'watch'])
  grunt.registerTask('dist', ['sass', 'autoprefixer', 'cssmin', 'clean'])
}
