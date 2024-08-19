const fs = require('fs');

function readfile(filepath) {
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) throw err; 
        console.log(data); 
    });
}

readfile('./example.txt');