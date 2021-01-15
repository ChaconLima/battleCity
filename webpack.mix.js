const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
.styles(
    [
        'resources/views/batlleCity/css/style.css',
    ],
    'public/batlleCity/css/style.css'
)
.scripts(
    [
        'resources/views/batlleCity/js/information.js',
        'resources/views/batlleCity/js/class.js',
        'resources/views/batlleCity/js/script.js',
        'resources/views/batlleCity/js/controlles.js',
    ],
    'public/batlleCity/js/scripts.js'
)        
.version();