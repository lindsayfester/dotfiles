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

fs.readdir(__dirname, function(err, files){
	if( err ) {
		throw err;
	}

	files.filter( file => file.charAt(0) === '.' )
	     .forEach( file => { fs.writeFileSync(path.resolve('..', file), fs.readFileSync(file)); });

});
