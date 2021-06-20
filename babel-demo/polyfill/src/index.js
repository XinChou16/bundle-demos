const foo = () => 12;

const list = Array.of(1, 2);

const num = list.includes(3);

const delay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
