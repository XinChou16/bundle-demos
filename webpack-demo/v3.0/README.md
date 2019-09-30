## Demo group


### 1. entry file


此时的配置文件

入口文件指的是webpack读取并进行打包的原始文件，后面的打包文件需要基于这个原始文件

```js
module.exports = {
  entry: './main.js', // 入口文件
  output:{
    filename: 'bundle.js', // 打包文件
  }
};
```

### 2. Multi-entry files

多个入口文件适用于多页面的应用。这类应用每个都有不同的入口文件

此时的配置文件

```js
module.exports = {
  entry: {
    'bundle1': './main1.js',
    'bundle2': './main2.js'
  },
  output:{
    filename: '[name].js',
  }
};
```

### 3. babel-loader

此时的配置文件

```js
module.exports = {
  entry: {
    'bundle': './main.jsx' // 入口文件
  },
  output:{
    filename: '[name].js', // 打包生成的文件
  },
  module: {
    rules: [ // 打包规则
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015','react']
          }
        }
      }
    ]
  }
};
```

### 4. css-loader

配置文件 

```js
module.exports = {
  entry: {
    'bundle': './main.js'
  },
  output:{
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  }
};
```

### 5. image-loader

配置文件

```js
module.exports = {
  entry: {
    'bundle': './main.js'
  },
  output:{
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader:'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
};
```

### Reference

[github](https://github.com/ruanyf/webpack-demos#demo01-entry-file-source)

## Webpack

webpack是一个适用于现代JS应用的静态模块打包器，包括四个核心概念
- Entry
- Output
- Loaders
- plugins 

## Entry

`Entry`表示webpack的入口文件，根据该属性提供的文件来进行打包，可以设置路径信息，例如一个简单的打包入口例子

```js
module.exports = {
  entry: "./path/path1/main.js"
}
```



