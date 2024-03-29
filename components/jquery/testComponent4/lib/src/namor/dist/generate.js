'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /* deprecations */
  if (opts.numLen || opts.numLen === 0) {
    console.log('namor: "numLen" is now deprecated, use "numbers" instead');
    opts.numbers = opts.numLen;
  }

  /* generate the name */
  var name = addTrailingNumber(processPattern(getPattern(opts.words), opts.char, opts.manly), opts.numbers, opts.char);

  /* ensure final subdomain isn't too long */
  if (name.length > 63) {
    throw new Error('Subdomains cannot be longer than 63 characters! Try shortening your trailing number.');
  }

  return name;
};

exports.getPattern = getPattern;
exports.processPattern = processPattern;
exports.addTrailingNumber = addTrailingNumber;

var _data = require('../data.json');

var _data2 = _interopRequireDefault(_data);

var _random = require('./random');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a language pattern based on the word count of the name.
 * @param {integer} words - the number of words to use
 * @return {array} a list (in order) of the language pattern
 */
function getPattern() {
  var words = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

  words = parseInt(words, 10);

  if (words < 1) {
    throw new Error('word count must be above 0');
  }
  if (words > 4) {
    throw new Error('word count cannot be above 4');
  }

  var pattern = void 0;
  switch (words) {
    case 1:
      pattern = 'noun';
      break;
    case 2:
      pattern = (0, _random.randomFromArray)(['adjective|noun', 'noun|verb']);
      break;
    case 3:
      pattern = 'adjective|noun|verb';
      break;
    case 4:
      pattern = 'adjective|noun|noun|verb';
      break;
  }

  return pattern.split('|');
}

/**
 * Fills a language pattern with actual words from our dictionary,
 * and turns it into a pipe-cased string.
 * @param {array} pattern - the pattern to use
 * @return {string} the concated string
 */
function processPattern(pattern, char, manly) {
  var fills = pattern.map(function (type) {
    var wordsToChooseFrom = manly ? _data2.default.manly[type + 's'] : _data2.default[type + 's'];

    return (0, _random.randomFromArray)(wordsToChooseFrom);
  });

  return fills.join(char || '-');
}

/**
 * Generates and adds a random number to the end of a name.
 * @param {string} name - the name to append to
 * @param {integer} len - the length of the trailing number
 * @return {string} the new name
 */
function addTrailingNumber(name) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var char = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '-';

  len = parseInt(len, 10);

  if (len < 0) {
    throw new Error('number length must be above 0');
  }

  return name + (len ? char + (0, _random.randomNumber)(len) : '');
}