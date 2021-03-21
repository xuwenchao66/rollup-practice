import _Promise from '@babel/runtime-corejs3/core-js-stable/promise';
import _sum from 'lodash/sum';

var sum = function sum() {
  var numbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new _Promise(_sum(numbers));
};

export { sum };
