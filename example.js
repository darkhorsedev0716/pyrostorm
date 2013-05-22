var digitalocean = require('./index');
  
digitalocean.SetKeys('insertClientKey', 'insertAPIKey');

digitalocean.GetDroplets(function(data) {
  process.stdout.write(data);
});

digitalocean.GetDroplet({'droplet': '196645'}, function(data) {
  process.stdout.write(data);
});

digitalocean.NewDroplet({'name': 'test', 'size': '66', 'image': '2676', 'region': '1', 'virtio': '1'}, function(data) {
  process.stdout.write(data);
});

digitalocean.RebootDroplet({'droplet': '196645'}, function(data) {
  process.stdout.write(data);
});

digitalocean.PowerCycleDroplet({'droplet': '196645'}, function(data) {
  process.stdout.write(data);
});