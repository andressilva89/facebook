var gulp = require('gulp');
var npm = require ('npm');

gulp.task('bower', function () {
  npm.load({
    loaded:false
  }, function (err){
    npm.commands.install(["bower"]);
  });
});

gulp.task('bootstrap',['bower'], function () {
  var bower = require('bower');
  bower.commands.install(['boostrap']);
});

gulp.task ('tudo', ['bower', 'bootstrap']);
