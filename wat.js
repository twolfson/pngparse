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
  console.log(pixels.get(0, 0, 0));
  console.log(pixels.get(0, 0, 1));
  console.log(pixels.get(0, 0, 2));
  console.log(pixels.get(0, 0, 3));
  console.log(pixels.get(4, 4, 0));
  console.log(pixels.get(4, 4, 1));
  console.log(pixels.get(4, 4, 2));
  console.log(pixels.get(4, 4, 3));
  savePixels(pixels, 'png').pipe(fs.createWriteStream(__dirname + '/data/wat.png'));
  savePixels(pixels, 'jpeg').pipe(fs.createWriteStream(__dirname + '/data/wat.jpeg'));
});
