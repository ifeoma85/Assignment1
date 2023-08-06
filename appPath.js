const path = require('path');


// current working directory
const cwd = path.resolve();
console.log(cwd);

// separator of a given file path
const separator = path.sep;
console.log(separator);

// Extension name 
const extName = path.extname("section1\appPath.js")
console.log(extName);

