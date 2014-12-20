// Load in dependencies
var fs = require('fs');
var getPixels = require('get-pixels');
var savePixels = require('save-pixels');

// Start our script
getPixels(__dirname + '/data/s08n3p02.png', function handlePixels (err, pixels) {
  // If there was an error, throw it
  if (err) {
    throw err;
  }

  // Otherwise, save the pixels
  savePixels(pixels, 'png').pipe(fs.createWriteStream(__dirname + '/data/wat.png'));
});
