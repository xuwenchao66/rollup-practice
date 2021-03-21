'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _Promise = require('@babel/runtime-corejs3/core-js-stable/promise');
var _sum = require('lodash/sum');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _Promise__default = /*#__PURE__*/_interopDefaultLegacy(_Promise);
var _sum__default = /*#__PURE__*/_interopDefaultLegacy(_sum);

var sum = function sum() {
  var numbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new _Promise__default['default'](_sum__default['default'](numbers));
};

exports.sum = sum;
