

const foo = () => 12;

const list = Array.of(1, 2);

const num = list.includes(3);

class Fruit {
  constructor(fruit) {
    this.fruit = fruit;
  }

  delay() {
    return new Promise(resolve => {
      resolve();
    })
  }
}