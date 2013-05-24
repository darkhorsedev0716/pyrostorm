var https = require('https')
  , domain = 'https://api.digitalocean.com/'
  , clientKey
  , apiKey;

/**
 * Set clientKey and apiKey values
 * @param {String} clientKey
 * @param {String} apiKey
 */
exports.SetKeys = function(keys) {
  clientKey = keys.clientKey;
  apiKey = keys.apiKey;
};

/**
 * Get all droplets
 * @param {Function} callback
 */
exports.GetDroplets = function(callback) {
  https.get(domain + '/droplets/?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Get droplet
 * @param {JSON} droplet
 * @param {Function} callback
 */
exports.GetDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Create one new droplet
 * @param {JSON} name
 * @param {JSON} size
 * @param {JSON} image
 * @param {JSON} region
 * @param {JSON} virtio
 * @param {JSON} sshKey
 * @param {Function} callback
 */
exports.NewDroplet = function(info, callback) {
  https.get(domain + 'droplets/new??client_id=' + clientKey + '&api_key=' + apiKey + '&name=' + info.name 
  + '&size_id=' + info.size + '&image_id=' + info.image + '&region_id=' + info.region + '&client_id=' + clientKey 
  + '&virtio=' + info.virtio + '&ssh_key_ids=' + info.sshKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Reboot droplet
 * @param {JSON} droplet
 * @param {Function} callback
 */
exports.RebootDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/reboot/?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Power cycle droplet
 * @param {JSON} droplet
 * @param {Function} callback
 */
exports.PowerCycleDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/power_cycle/?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Shut down droplet
 * @param {JSON} droplet
 * @param {Function} callback
 */
exports.ShutDownDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/shutdown/?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Power off droplet
 * @param {JSON} droplet
 * @param {Function} callback
 */
exports.PowerOffDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/power_off/?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Power on droplet
 * @param {JSON} droplet
 * @param {Function} callback
 */
exports.PowerOnDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/power_on/?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Reset droplet's root password
 * @param {JSON} droplet
 * @param {Function} callback
 */
exports.ResetRootPassword = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/password_reset/?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Take snapshot of droplet
 * @param {JSON} droplet
 * @param {JSON} name
 * @param {Function} callback
 */
exports.TakeSnapshot = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/snapshot/?name_id=' + info.name + '&client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Resize droplet
 * @param {JSON} droplet
 * @param {JSON} side
 * @param {Function} callback
 */
exports.ResizeDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/resize/?size_id=' + info.size + '&client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Restore droplet
 * @param {JSON} droplet
 * @param {JSON} image
 * @param {Function} callback
 */
exports.RestoreDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/restore/?image_id=' + info.image + '&client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Rebuild droplet
 * @param {JSON} droplet
 * @param {JSON} image
 * @param {Function} callback
 */
exports.RebuildDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/rebuild/?image_id=' + info.image + '&client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Enable automatic backups of droplet
 * @param {JSON} droplet
 * @param {Function} callback
 */
exports.EnableBackups = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/enable_backups/?image_id=&client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Disable automatic backups of droplet
 * @param {JSON} droplet
 * @param {Function} callback
 */
exports.DisableBackups = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/disable_backups/?image_id=&client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Rename droplet
 * @param {JSON} droplet
 * @param {JSON} name
 * @param {Function} callback
 */
exports.RenameDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/rename/?client_id=' + clientKey + '&api_key=' + apiKey + '&name=' + info.name, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Destroy droplet
 * @param {JSON} droplet
 * @param {Function} callback
 */
exports.DestroyDroplet = function(info, callback) {
  https.get(domain + 'droplets/' + info.droplet + '/destroy/?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Get all regions
 * @param {Function} callback
 */
exports.GetRegions = function(callback) {
  https.get(domain + 'regions/?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Get all images
 * @param {Function} callback
 */
exports.GetImages = function(callback) {
  https.get(domain + 'images/?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Get image
 * @param {JSON} image
 * @param {JSON} name
 * @param {Function} callback
 */
exports.ShowImage = function(info, callback) {
  https.get(domain + 'images' + info.image + '/?client_id=' + clientKey + '&api_key=' + apiKey + '&name=' + info.name, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Destroy image
 * @param {JSON} image
 * @param {Function} callback
 */
exports.DestroyImage = function(info, callback) {
  https.get(domain + 'images' + info.image + '/destroy/?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Transfer image to different region
 * @param {JSON} image
 * @param {JSON} region
 * @param {Function} callback
 */
exports.TransferImage = function(info, callback) {
  https.get(domain + 'images' + info.image + '/transfer/?client_id=' + clientKey + '&api_key=' + apiKey + '&region_id=' + info.region, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Get all SSH keys
 * @param {Function} callback
 */
exports.GetSshKeys = function(callback) {
  https.get(domain + 'ssh_keys/?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Get SHH key
 * @param {JSON} sshKey
 * @param {Function} callback
 */
exports.GetSshKey = function(info, callback) {
  https.get(domain + 'ssh_keys/' + info.sshKey + '/?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Add SHH key
 * @param {JSON} name
 * @param {JSON} sshKey
 * @param {Function} callback
 */
exports.AddSshKey = function(info, callback) {
  https.get(domain + 'ssh_keys/new/?name=' + info.name + '&ssh_pub_key=' + info.sshKey + '&client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Edit SHH key
 * @param {JSON} sshKey
 * @param {Function} callback
 */
exports.EditSshKey = function(info, callback) {
  https.get(domain + 'ssh_keys/' + info.sshKey + '/edit/?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Destroy SHH key
 * @param {JSON} sshKey
 * @param {Function} callback
 */
exports.DestroySshKey = function(info, callback) {
  https.get(domain + 'ssh_keys/' + info.sshKey + '/destroy/?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};

/**
 * Get all sizes
 * @param {Function} callback
 */
exports.GetSizes = function(callback) {
  https.get(domain + 'sizes/?client_id=' + clientKey + '&api_key=' + apiKey, function(res) {
    res.on('data', function(data) {
      callback(data);
    });
  });
};