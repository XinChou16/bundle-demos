let foo;
foo = 10;

class Foo {
  constructor() {}

  bar() {}
}

var Order;

(function (Order) {
  Order[(Order['first'] = 1)] = 'first';
  Order[(Order['second'] = 2)] = 'second';
  Order[(Order['third'] = 3)] = 'third';
})(Order || (Order = {}));

var order = {
  first: Order.first,
  second: Order.second,
};
