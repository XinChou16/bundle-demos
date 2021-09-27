/**
 * InjectContentHtmlPlugin
 */

function insertStringAfter(raw, keyword, inserted) {
  keyword = String(keyword);

  var index = raw.indexOf(keyword);
  if (index < 0) {
    return raw;
  }

  var endIndex = index + keyword.length;

  return raw.slice(0, endIndex) + inserted + raw.slice(endIndex);
}
function insertStringBefore(raw, keyword, inserted) {
  keyword = String(keyword);

  var index = raw.indexOf(keyword);
  if (index < 0) {
    return raw;
  }

  return raw.slice(0, index) + inserted + raw.slice(index);
}

const insertHelper = {
  before: insertStringBefore,
  after: insertStringAfter,
};

const positionMap = {
  'prepend-head': ['after', '<head>'],
  'append-head': ['before', '</head>'],
  'prepend-body': ['after', '<body>'],
  'append-body': ['before', '</body>'],
};

// var result = insertContent(
//     `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <title>Document</title>
//     </head>
//     <body>
//         <p>content</p>
//     </body>
//     </html>
//     `,
//     `
//         <script>var foo=1;</script>
//     `,
//     {
//         position: 'body',
//         type: 'prepend'
//     }
// );
/**
 *
 * @param {string} raw 原始字符串
 * @param {string} content 插入的字符串
 * @param {object} options 选项 { position: 'head', type: 'append' }
 * @returns 字符串
 */
const insertContent = (raw, content, options) => {
  if (!raw) return raw;

  const opt = `${options.type}-${options.position}`;

  if (!positionMap[opt]) return raw;

  const [insertedType, insertedTag] = positionMap[opt];
  const insertor = insertHelper[insertedType];

  return insertor(raw, insertedTag, content);
};

/**
 *
 * new InjectContentHtmlPlugin({
 *   content: '<script>window.foo = 'foo';</script>',
 *   position: 'head',
 *   type: 'prepend'
 * });
 */
class InsertContentHtmlPlugin {
  static defaultInjectOptions = [
    {
      content: '',
      position: 'head',
      type: 'append',
    },
  ];
  constructor(option) {
    this.injectOptions = this.normalizeOption(option);
  }
  apply(complier) {
    complier.plugin('compilation', (compilation) => {
      compilation.plugin(
        'html-webpack-plugin-before-html-processing',
        (data, callback) => {
          // console.log('before=====\n\n', data.html);

          for (const injectOption of this.injectOptions) {
            const { content, ...option } = injectOption;
            data.html = insertContent(data.html, content, option);
          }
          // console.log('after=====\n\n', data.html);

          if (callback) {
            callback(null, data);
          } else {
            return Promise.resolve(data);
          }
        }
      );
    });
  }
  normalizeOption(option) {
    if (!Array.isArray(option)) {
      return [option];
    }
    return option;
  }
}

module.exports = InsertContentHtmlPlugin;
