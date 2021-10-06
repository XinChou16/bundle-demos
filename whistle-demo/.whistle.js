const path = require('path');
const pkg = require('./package.json');

const resolve = (file) => path.join(__dirname, file);

exports.name = `${pkg.name} whistle rule`;
exports.rules = `

# test
m.weibo.cn whistle.inspect://eruda
**baidu.com whistle.inspect://

# path ${resolve('.')}

`;
