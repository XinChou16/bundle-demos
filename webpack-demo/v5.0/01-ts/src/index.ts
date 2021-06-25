// import * as _ from 'lodash'
// import { foo } from './utils';

// function component() {
//   const element = document.createElement('div')

//   element.innerHTML = _.join(['Hello', 'webpack', foo], ' ')
// //   element.dataset.color = '#69f';

//   return element
// }

// document.body.appendChild(component())

// const year: number = 2021;
// console.log('Hello', year);

enum Order {
  first = 1,
  second,
  third,
}
const order = {
  first: Order.first,
  third: Order.third,
};
window.foo = order;
