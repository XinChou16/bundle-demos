import 'core-js';
import utils from './utils';

const foo = () => {
  return 'cool'
}

const delay = (type) => (
  new Promise((resolve) => {
    type && resolve();
  })
)

utils(1);
console.log(['1'].includes(1));