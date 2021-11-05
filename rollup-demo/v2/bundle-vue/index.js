import App from './app.vue';

console.log('app');
console.log(App);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
