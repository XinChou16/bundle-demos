
module.exports = function({ types: t }) {
  return {
    visitor: {
      BinaryExpression(path, state) {
        if (path.node.operator !== '===' && state.opts.data) {
          console.log(path.node.operator);
          return;
        }
        console.log(state.opts);
        // path.node.left = t.identifier('foo');
        // path.node.right = t.identifier('bar');
        let newPath = t.binaryExpression('*', t.identifier('a'), t.identifier('b'))
        path.replaceWith(newPath)
      }
    }
  };
};
