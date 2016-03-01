var fs = require('fs-extra');
var path = require('path');
var resolve = path.resolve;

// copies values from files array two directory's up, which assumes folder 
// structure of node_modules/dotfiles/ with this being run as part of npm 
// install from the projects root. Ideally we would be getting the base path
// from a process variable or something but haven't figured that out yet 

var files = [
	'.babelrc',
	'.editorconfig',
	'.eslintrc',
	'.gitattributes',
	'browserslist'
];

var basePath = resolve( __dirname, '../..');

files.forEach( function( file ) {
	fs.move( file, resolve( basePath, file) );
});

// So that this repo doesn't ignore files, removed the . from .gitignore,
// when copying it put it back
fs.move('gitignore', resolve( basePath, '.gitignore' ) );
