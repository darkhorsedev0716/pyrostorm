var pyrostorm = require('./lib/index')
	, fs        = require('fs');

var keys = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

pyrostorm.setKeys(keys.clientKey, keys.apiKey);

var options = {
	'id': 284755,
	'area': 'droplets',
	'command': 'rename',
	'additional': {
		'name': 'hello'
	}
}

pyrostorm.send(options, function (res) {
  console.log(res);
});