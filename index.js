var https = require('https')
  , clientKey
  , apiKey;

exports.SetKeys = function(clientKey, apiKey) {
  this.clientKey = clientKey;
  this.apiKey = apiKey;
};

exports.GetDroplets = function(callback) {
  https.get('https://api.digitalocean.com/droplets/?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.GetDroplet = function(droplet, callback) {
  https.get('https://api.digitalocean.com/droplets/' + droplet + '?client_id=' + this.clientKey + '&api_key=' + this.apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

exports.NewDroplet = function(droplet, name, size, image, region, virtio, sshKey, callback) {
  https.get('https://api.digitalocean.com/droplets/new??client_id=' + this.clientKey + '&api_key=' + this.apiKey + '&name=' + name + '&size_id=' + size
  + '&image_id=' + image + '&region_id=' + region + '&client_id=' + this.clientKey + '&virtio=' + virtio + '&ssh_key_ids=' + sshKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};