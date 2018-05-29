'use strict';

var _cluster = require('cluster');

var _cluster2 = _interopRequireDefault(_cluster);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _os = require('os');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numCPUs = (0, _os.cpus)().length;

if (_cluster2.default.isMaster) {
    console.log('Master ' + process.pid + ' is running');

    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        _cluster2.default.fork();
    }

    _cluster2.default.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    var app = (0, _express2.default)();
    app.set('views', _path2.default.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.get('/', function (req, res) {
        res.render('index', { pid: process.pid }, function (err, html) {
            if (!err) {
                res.send(html);
            }
        });
    });

    // to expose component bundles which will be written to this dir during build time
    app.use('/public', _express2.default.static(_path2.default.join(__dirname, './public')));

    app.listen(3100, function () {
        return console.log('Worker ' + process.pid + ' started');
    });
}