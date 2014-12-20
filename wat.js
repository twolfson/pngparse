// Load in dependencies
var getPixels = require('get-pixels');
var savePixels = require('save-pixels');

// Start our script
getPixels(__dirname + '/data/s08n3p02.png', function handlePixels (err, pixels) {
  // If there was an error, throw it
  if (err) {
    throw err;
  }

  // Otherwise, log the pixels
  console.log(pixels.data);
});
