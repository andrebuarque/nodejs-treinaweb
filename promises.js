const fs = require('fs'), 
    Promise = require('promise');

const read = (file_name) => {
    return new Promise((fulfill, reject) => {
        fs.readFile(file_name, (err, data) => {
            if (err) {
                reject();
            } else {
                fulfill(data.toString());
            }
        });
    });
};

read('package.json')
.then((data) => {
    console.log(data);
    return 1;
})
.then((data) => {
    console.log(data);
    return 2;
})
.done((data) => {
    console.log(data);
});