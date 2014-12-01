'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var FrontendBoilerComponentGenerator = yeoman.generators.Base.extend({

  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    yeoman.generators.Base.apply(this, arguments);

    this.argument('name', {required:true});
    
  },

  initializing: function () {
   
    if(this.name === undefined){ this.name = 'module';}
    console.log(this.name);
    this.dest.mkdir('src/app/components/' + this.name);
    this.destinationRoot('src/app/components/' + this.name);

  },


  writing: {



    module: function(){
      

      this.src.copy('controllers.coffee', 'controllers.coffee');
      this.src.copy('directives.coffee', 'directives.coffee');
      this.src.copy('services.coffee', 'services.coffee');
      this.src.copy('factories.coffee', 'factories.coffee');
      this.src.copy('index.coffee', 'index.coffee');
    },

    
  },

  end: function () {
   
  }
});

module.exports = FrontendBoilerComponentGenerator;
