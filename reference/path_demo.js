const path = require('path');

// file name
console.log(path.basename(__filename));

// dir name
console.log(path.dirname(__filename));

// file ext
console.log(path.extname((__filename)));

// create path object
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
