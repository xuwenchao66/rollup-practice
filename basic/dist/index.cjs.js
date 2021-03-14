'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cloneDeep = require('lodash/cloneDeep');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cloneDeep__default = /*#__PURE__*/_interopDefaultLegacy(cloneDeep);

const log = () => {
  console.log('hello rollup');
  return cloneDeep__default['default']({})
};

exports.log = log;
