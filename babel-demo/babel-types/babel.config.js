module.exports = {
  presets: [
    '@babel/preset-env'
  ],
  // 自动查找 node_modules 下 babel-plugin-my 文件夹下的 index.js
  plugins: [
    ['my', {
      run: false,
      data: 1
    }]
  ]
}