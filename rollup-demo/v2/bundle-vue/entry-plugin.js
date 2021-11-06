function foo() {
  utils.add(1, 2);
  var tpl2 = tpl + '12';
  return 1 + tpl2;
}

window.bar = foo();

//

export default {
  tpl,
};
