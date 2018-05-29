'use strict';

import _generate6 from './generate.js';
import _isValid6 from './is-valid.js';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isValid4 = _isValid6;

var _isValid5 = _interopRequireDefault2(_isValid4);

var _generate4 = _generate6;

var _generate5 = _interopRequireDefault2(_generate4);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _generate = _generate5.default;

var _generate2 = _interopRequireDefault(_generate);

var _isValid = _isValid5.default;

var _isValid2 = _interopRequireDefault(_isValid);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

export default {
  generate: _generate2.default,
  isValid: _isValid2.default
};