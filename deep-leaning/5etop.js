const brain = require("brain.js");
const network = new brain.NeuralNetwork();

const sharp = require('sharp');

network.train([
  {input: {r:0.62,g:0.72,b:0.88}, output:{light: 1}},
  {input: {r:0.1,g:0.84,b:0.72}, output:{light: 1}},
  {input: {r:0.33,g:0.24,b:0.29}, output:{dark: 1}},
  {input: {r:0.74,g:0.78,b:0.86}, output:{light: 1}},
  ]);


var result = network.run({r:0.0,g:1,b:0.65});
console.log(result);

result = brain.likely({r:0.0,g:1,b:0.65}, network);
console.log(result);

// let originalImage = 'originalImage.jpg';

// // file name for cropped image
// let outputImage = 'croppedImage.jpg';

// sharp(originalImage).extract({ width: 192, height: 608, left: 60, top: 40 }).toFile(outputImage)
//     .then(function(new_file_info) {
//         console.log("Image cropped and saved");
//     })
//     .catch(function(err) {
//         console.log("An error occured");
//     })