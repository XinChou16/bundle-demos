// 第 1 步：创建一个 Vue 实例
const Vue = require('vue');
const Foo = {
  template: `<div>Hello World</div>`,
};
const app = new Vue({
  components: { Foo },
  methods: {
    click() {
      console.log('click');
    },
  },
  template: `
    <div id="app" @click="click">
        <Foo />
    </div>
  `,
});

// 第 2 步：创建一个 renderer
const renderer = require('vue-server-renderer').createRenderer();

// 第 3 步：将 Vue 实例渲染为 HTML
renderer.renderToString(app, (err, html) => {
  if (err) throw err;
  console.log(html);
  // => <div data-server-rendered="true">Hello World</div>
});
