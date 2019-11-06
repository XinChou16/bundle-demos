module.exports = function generatorTryCatchPlugin(babel) {
  const { types: t, template: tpl } = babel;
  const tryCatchWithThrowTpl = tpl(`{
    try {
      FUNCTION_BODY
    } catch (ERROR_VARIABLE) {
      console.error(ERROR_VARIABLE)
      throw ERROR_VARIABLE
    }
  }`)
  return {
    visitor: {
      Program(programPath) {
        programPath.traverse({
          FunctionDeclaration(path) {
            if(path.node.generator) {
              const funcBody = path.node.body.body;
              const firstNode = funcBody[0];
              if (firstNode && firstNode.type === 'TryStatement') return;
              const ast = tryCatchWithThrowTpl({
                FUNCTION_BODY: funcBody,
                ERROR_VARIABLE: path.scope.generateUidIdentifier('e')
              });
              // const ast = t.BlockStatement([
              //   t.TryStatement(
              //     t.BlockStatement(funcBody),
              //     t.CatchClause(
              //       t.Identifier('e'),
              //       t.BlockStatement([
              //         t.ExpressionStatement(
              //           t.CallExpression(
              //             t.MemberExpression(
              //               t.Identifier('console'),
              //               t.Identifier('error')
              //             ),
              //             [t.Identifier('e')]
              //           ),
              //         ),
              //         t.ThrowStatement(t.Identifier('e'))
              //       ])
              //     )
              //   )
              // ])
              path.get('body').replaceWith(ast);
            }
          }
        })
      },
    },
  };
};
