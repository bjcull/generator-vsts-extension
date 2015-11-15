'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var path = require('path');
var guid = require('uuid');
var projectName = require('vs_projectname');
var ExtensionGenerator = yeoman.generators.Base.extend({

  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);
  },


  init: function() {
    this.log(yosay('Visual Studio Team Services Extension Generator'));
    this.templatedata = {};
  },

  askForName: function() {
    var done = this.async();
    var prompts = [{
      name: 'applicationName',
      message: 'What\'s the name of your ASP.NET application?',
      default: 'NewExtension'
    }];
    this.prompt(prompts, function(props) {
      this.templatedata.namespace = projectName(props.applicationName);
      this.templatedata.applicationname = props.applicationName;
      this.applicationName = props.applicationName;
      this.templatedata.guid = guid.v4();
      this.templatedata.grunt = this.options.grunt || false;
      done();
    }.bind(this));
  },

  writing: function() {
    ///this.sourceRoot(path.join(__dirname, './templates'));

    this.sourceRoot(path.join(__dirname, '../templates/vstsextension'));

    this.copy(this.sourceRoot() + '/../../.gitignore', this.applicationName + '/.gitignore');

    this.template(this.sourceRoot() + '/Startup.cs', this.applicationName + '/Startup.cs', this.templatedata);

    this.template(this.sourceRoot() + '/project.json', this.applicationName + '/project.json', this.templatedata);

    this.copy(this.sourceRoot() + '/gulpfile.js', this.applicationName + '/gulpfile.js');
    this.copy(this.sourceRoot() + '/package.json', this.applicationName + '/package.json');
    this.copy(this.sourceRoot() + '/vss-extension.json', this.applicationName + '/vss-extension.json');

    /// wwwroot
    this.fs.copy(this.templatePath('wwwroot/**/*'), this.applicationName + '/wwwroot');
  },

  end: function() {
    this.log('\r\n');
    this.log('Your project is now created, open the project in Visual Studio and enable HTTPS.');

    this.log('\r\n');
  }
});

module.exports = ExtensionGenerator;
