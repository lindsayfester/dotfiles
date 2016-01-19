var fs = require('fs');
var path = require('path');

function copyFile(source, target) {
	return new Promise(function(resolve, reject) {
		var rd = fs.createReadStream(source);
		rd.on('error', reject);

		var wr = fs.createWriteStream(target);
		wr.on('error', reject);
		wr.on('finish', resolve);
		rd.pipe(wr);
	});
}

['.editorconfig', '.eslintrc'].forEach( function( file) {
	// copy the files two directory's up, assuming a folder structure of node_modules/dotfiles/
	fs.writeFileSync(path.resolve( __dirname, '../..', file), fs.readFileSync(file));
});

// npm renames .gitignore to .npmignore so this is a special case
fs.writeFileSync(path.resolve( __dirname, '../..', '.gitignore'), fs.readFileSync('.npmignore'));