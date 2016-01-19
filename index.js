var fs = require('fs');
var path = require('path');

// copies a file (`source`) two directory's up as `dest` (`dest` can be omitted)
// two directory's assumes a folder structure of node_modules/dotfiles/ with 
// this being run as part of npm install from the projects root
function copy( source, dest ) {
	fs.writeFileSync(path.resolve( __dirname, '../..', dest || source), 
	  fs.readFileSync( source )
	);
}

['.editorconfig', '.eslintrc', 'browserslist'].forEach( function( file) {
	copy(file);
});

// So that this repo doesn't ignore files removed the . from .gitignore,
// when copying it put it back
copy('gitignore', '.gitignore');