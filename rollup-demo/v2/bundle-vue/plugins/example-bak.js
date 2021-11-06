import { dataToEsm, createFilter } from '@rollup/pluginutils';
import { readFileSync, writeFileSync } from 'fs';
// import VConsole from './vconsole';

const PLUGIN_NAME = './plugins';

export default function myExample() {
  const filter = createFilter(['**/*.html']);

  return {
    name: 'my-example', // this name will show up in warnings and errors
    //   resolveId ( source ) {
    //       console.log({source},1);
    //     if (source === 'entry-plugin.js') {
    //       return source; // this signals that rollup should not ask other plugins or check the file system to find this id
    //     }
    //     return null; // other ids should be handled as usually
    //   },
    //   load ( id ) {
    //       if (id.includes('entry-plugin.js')) {
    //         console.log({id});
    //       return 'export default "This is virtual!"'; // the source code for "entry-plugin.js"
    //     }
    //     return null; // other ids should be handled as usually
    //   }
    buildStart(opt) {
      console.log(opt);
      console.log(process.cwd());
      opt.input.forEach((input) => {
        const path = process.cwd() + '/' + input;
        // console.log(readFileSync(path, 'utf-8'));
        let fileString = readFileSync(path, 'utf-8');
        fileString = `
                import '${PLUGIN_NAME}/vconsole';
                ${fileString}
            `;
        writeFileSync(path, fileString);
        console.log(readFileSync(path, 'utf-8'));
      });
    },
    generateBundle(_, bundle) {
      Object.keys(bundle).forEach((key) => {
        bundle[key].code += '123';
      });
      // console.log(VConsole.toString());
      return '123';
    },
    transform(source, id) {
      var pass = filter(id);
      if (!pass) return;
      // console.log({source, id, pass});
      return dataToEsm(source);
    },
  };
}
