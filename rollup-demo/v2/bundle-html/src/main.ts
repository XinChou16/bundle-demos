// import { isString } from 'lodash';
// import isString from 'lodash/isString';
import config from './config';
import { add } from './util';

let isString = (foo: string) => '';

export function createApp() {
  const { port } = config;
  console.log('create', port);
  const arr = [...[123, 1]];
  const bar = arr.slice();

  bar.forEach((item) => {
    console.log(item, this);
  });
}

export default function createStore(foo) {
  console.log(12, foo.a?.bar);
  console.log(foo.startWith(99));
  console.log(isString('12'));

  // for (const iterator of obj) {
  //     iterator.value();
  // }

  setEnv();
  useTs();
  printEnv();

  return Promise.resolve();
}

function setEnv() {
  if (process.env.NODE_ENV === 'test') {
    console.log('test env');
  }

  if (__DEV__) {
    console.log('dev');
  }
  if (__TEST__) {
    console.log('test');
  }
}

function useTs() {
  add(1, 9);
}

function printEnv(params?: any) {
  console.log(process.env.NODE_ENV);
}

var name = 23;
console.log(name++);

function logger(type) {
  console.log(type);
  return function (target) {
    console.log(typeof target);
    // return {};
  };
}

class PrintEnv {
  @logger('log')
  foo() {
    console.log('foo');
  }
}

var decorator = new PrintEnv();
decorator.foo();
