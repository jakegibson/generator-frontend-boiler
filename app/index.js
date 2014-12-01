'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var FrontendBoilerGenerator = yeoman.generators.Base.extend({

  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    yeoman.generators.Base.apply(this, arguments);

    this.argument('name', {required:false});
    this.option('--html'); 
    this.option('--less');
  },

  initializing: function () {
    this.pkg = require('../package.json');
    if(this.name === undefined){ this.name = 'app';}
    console.log(this.name);
    this.dest.mkdir(this.name);
    this.destinationRoot(this.name);
    this.dest.mkdir('dist');
    this.dest.mkdir('dist/app');
    this.dest.mkdir('dist/app/common');
    this.dest.mkdir('dist/assets');



 
  },


  writing: {



    app: function(){
      
    

       // it makes no sense that this doesn't take a callback silly file.util
      this.directory('src', 'src');
      this.src.copy('src/assets/img/stack.png', 'dist/assets/img/stack.png');
      this.src.copy('.bowerrc', '.bowerrc');
      this.src.copy('_gulpfile.js', 'gulpfile.js');
      this.src.copy('_package.json', 'package.json');
    },

    projectfiles: function () {
    
    }
  },

  end: function () {
    this.installDependencies();
    this.bowerInstall('foundation', {}, function(){
      //possibly remove the foundation js bloat?
    })

  }
});

module.exports = FrontendBoilerGenerator;
