var https = require('https')
  , domain = 'https://api.digitalocean.com/'
  , clientKey
  , apiKey;

function setKeys (clientKeyParam, apiKeyParam) {
  clientKey = clientKeyParam;
  apiKey = apiKeyParam;
}

function addParams (additional) {
  var combined = '?';
  combined += 'client_id=' + clientKey;
  combined += '&api_key=' + apiKey;
  for (var name in additional) {
    combined += '&' + name + '=' + additional[name];
  }
  return combined;
}

function send (params, callback) {
  var url = 'https://api.digitalocean.com/' + params.area + '/';
  if (params.id) url += params.id;
  if (params.command) url += '/' + params.command + '/';
  url += addParams(params.additional);
  https.get(url, function (res) {
    res.setEncoding('utf8');
    res.on('data', callback);
  });
}

exports.setKeys = setKeys;
exports.send    = send;