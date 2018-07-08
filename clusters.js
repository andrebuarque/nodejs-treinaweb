const cluster = require('cluster'),
    http = require('http'),
    os = require('os');

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('online', (worker) => {
        console.log(`worker ${worker.process.pid} is online`);
    });

    cluster.on('listening', (worker) => {
        console.log(`address ${worker.process.pid} is listening`);
    });

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`process ${process.pid} says hello!`);
    }).listen(80);
}
