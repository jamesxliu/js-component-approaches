'use strict';

import _dataJson3 from '../data.json.js';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _dataJson = _dataJson3;

var _dataJson2 = _interopRequireDefault2(_dataJson);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

export default (function (name) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var regexResult = /^[\w](?:[\w-]{0,61}[\w])?$/.test(name);

  return opts.blacklist ? regexResult && _data2.default.blacklist.indexOf(name) === -1 : regexResult;
});


var _data = _dataJson2.default;

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}