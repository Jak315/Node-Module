var fs = require('fs');
var content = "this is the content in the file";

fs.writeFileSync('messege.txt', content)

console.log("File written successfully");