var fs = require('fs');
var content = "this is the content in the file";

fs.writeFile('messege.txt', content, (err) => {
    if (err) {
        throw err;
        ;
    } else {
        console.log("it's saved");
    }
})