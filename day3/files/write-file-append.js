var fs = require("fs");
var content = " this data will be appended at the end of the file"

fs.appendFile('messege.txt', content, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(" the new contend is appended successfully");
    }
})