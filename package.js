Package.describe({
  summary: "jQuery plugin that adds color capability to $.animate()"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'lib/Color-animation-jQuery-plugin/jquery.animate-colors-min.js'
  ], 'client');

});