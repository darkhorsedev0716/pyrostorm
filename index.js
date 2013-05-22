var https = require('https')
  , clientKey
  , apiKey
  , domain = 'https://api.digitalocean.com/';

exports.SetKeys = function(clientKey, apiKey) {
  this.clientKey = clientKey;
  this.apiKey = apiKey;
};

exports.GetDroplets = function(callback) {
  https.get(domain + '/droplets/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.GetDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.NewDroplet = function(info, callback) {
  https.get(domain + 'droplets/new??client_id=' + this.clientKey + '&api_key=' + this.apiKey + '&name=' + info.name 
  + '&size_id=' + info.size + '&image_id=' + info.image + '&region_id=' + info.region + '&client_id=' + this.clientKey 
  + '&virtio=' + info.virtio + '&ssh_key_ids=' + info.sshKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.RebootDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/reboot/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.PowerCycleDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/power_cycle/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};