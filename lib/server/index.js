"use strict";

var _cluster = _interopRequireDefault(require("cluster"));

var _express = _interopRequireDefault(require("express"));

var _os = require("os");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numCPUs = (0, _os.cpus)().length;

if (_cluster.default.isMaster) {
  console.log("Master ".concat(process.pid, " is running")); // Fork workers.

  for (var i = 0; i < numCPUs; i++) {
    _cluster.default.fork();
  }

  _cluster.default.on('exit', function (worker, code, signal) {
    console.log("worker ".concat(worker.process.pid, " died"));
  });
} else {
  var app = (0, _express.default)();
  app.set('views', _path.default.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.get('/', function (req, res) {
    res.render('index', {
      pid: process.pid
    }, function (err, html) {
      if (!err) {
        res.send(html);
      }
    });
  }); // to expose component bundles which will be written to this dir during build time

  app.use('/public', _express.default.static(_path.default.join(__dirname, './public')));
  app.listen(3100, function () {
    return console.log("Worker ".concat(process.pid, " started"));
  });
}