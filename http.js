const http = require('http'),
    fs = require('fs'),
    url = require('url');

const server = http.createServer((req, res) => {
    const urlParsed = url.parse(req.url);

    fs.readFile(__dirname + urlParsed.pathname, (err, data) => {
        if (err) res.write('arquivo não encontrado.');
        else res.write(data);
        
        res.end();
    });

});

server.listen(3000, () => {
    console.log('Listening on 3000.');
});