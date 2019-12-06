
// import $ from 'zepto'

console.log('1', $);
console.log('666699');

const obj1 = {
  name: '12'
}
const foo = () => {
  console.log('1_100_12');
}
$.ajaxSettings.beforeSend = function(xhr) {
    xhr.withCredentials = true;
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
};

export function getData() {
    console.log('data');
}
