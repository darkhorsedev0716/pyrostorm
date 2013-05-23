var digitalocean = require('./lib/index');
  
digitalocean.SetKeys('insertClientKey', 'insertAPIKey');

/*
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

digitalocean.ShutDownDroplet({'droplet': '196645'}, function(data) {
  process.stdout.write(data);
});

digitalocean.PowerOffDroplet({'droplet': '196645'}, function(data) {
  process.stdout.write(data);
});

digitalocean.PowerOnDroplet({'droplet': '196645'}, function(data) {
  process.stdout.write(data);
});

digitalocean.ResetRootPassword({'droplet': '196645'}, function(data) {
  process.stdout.write(data);
});

digitalocean.ResizeDroplet({'droplet': '196645', 'size': '66'}, function(data) {
  process.stdout.write(data);
});

digitalocean.TakeSnapshot({'droplet': '196645', 'name': 'test'}, function(data) {
  process.stdout.write(data);
});

digitalocean.RestoreDroplet({'droplet': '196645', 'image': 'test'}, function(data) {
  process.stdout.write(data);
});

digitalocean.RebuildDroplet({'droplet': '196645', 'image': 'test'}, function(data) {
  process.stdout.write(data);
});

digitalocean.EnableDroplet({'droplet': '196645'}, function(data) {
  process.stdout.write(data);
});

digitalocean.DisableDroplet({'droplet': '196645'}, function(data) {
  process.stdout.write(data);
});

digitalocean.RenameDroplet({'droplet': '196645', 'name': 'test'}, function(data) {
  process.stdout.write(data);
});

digitalocean.DestroyDroplet({'droplet': '196645'}, function(data) {
  process.stdout.write(data);
});

digitalocean.GetRegions(function(data) {
  process.stdout.write(data);
});

digitalocean.GetImages(function(data) {
  process.stdout.write(data);
});

digitalocean.ShowImage({'image': '2'}, function(data) {
  process.stdout.write(data);
});

digitalocean.DestroyImage({'image': '2'}, function(data) {
  process.stdout.write(data);
});

digitalocean.TransferImage({'image': '2', 'region': '1'}, function(data) {
  process.stdout.write(data);
});
*/