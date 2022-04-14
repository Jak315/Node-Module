//NodeJS file core module

var file = require("fs");



file.readFile('messege.txt', (error, data) => {
    if (error) {
        console.log('error is hapenning');
        throw error;
    } else {
        console.log("Content: " + data);
    }
});

