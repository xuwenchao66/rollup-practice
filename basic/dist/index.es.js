import cloneDeep from 'lodash/cloneDeep';

const log = () => {
  console.log('hello rollup');
  return cloneDeep({})
};

export { log };
