// https://nodejs.org/api/fs.html

const fs = require('fs');

// write file
fs.writeFile('my_file.txt', 'conteudo', (err) => {
    if (err) throw err;
    console.log('arquivo criado com sucesso!');
});

// append file
fs.appendFile('my_file.txt', "\nappend", (err) => {
    if (err) throw err;
    console.log('arquivo modificado com sucesso!');
});

// read file
fs.readFile('my_file.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString());
});

// delete file
fs.unlink('my_file.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('arquivo deletado!');
});