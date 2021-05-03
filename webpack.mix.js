let mix = require('laravel-mix');
mix.sass('src/scss/master.scss', 'dist/css').options({
  processCssUrls: false
});
