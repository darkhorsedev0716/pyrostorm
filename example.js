var digitalocean = require('./index');
  
digitalocean.SetKeys('insertClientKey', 'insertAPIKey');

digitalocean.GetDroplets(function(data) {
  process.stdout.write(data);
});

digitalocean.NewDroplet('196645', 'test', '66', '2676', '1', '1', '', function(data) {
  process.stdout.write(data);
});