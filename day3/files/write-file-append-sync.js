var fs = require("fs");
var content = " \nWe are appending this file synchronously using node.js";

fs.appendFileSync('messege.txt', content);

console.log("file append successfully");