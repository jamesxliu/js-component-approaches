import cluster from 'cluster';
import express from 'express';
import {cpus} from 'os';
import path from 'path';

const numCPUs = cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    const app = express();
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.get('/', (req, res) => {
        res.render('index', {pid: process.pid}, (err, html) => {
            if(!err) {
                res.send(html)
            }
        });
    });

    // to expose component bundles which will be written to this dir during build time
    app.use('/public', express.static(path.join(__dirname, './public')));

    app.listen(3100, () => console.log(`Worker ${process.pid} started`));
}