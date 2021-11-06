import { dataToEsm, createFilter } from '@rollup/pluginutils';
import { readFileSync, writeFileSync } from 'fs';
// import VConsole from './vconsole';

const PLUGIN_NAME = './plugins';
const VIRTUAL_ENTRY = '\0cool';

export default function myExample() {
  const filter = createFilter(['**/*.html']);

  return {
    name: 'my-example', // this name will show up in warnings and errors
    buildStart(opt) {
      //   console.log(opt);
      console.log(process.cwd());
    },
    transform(code, id) {
      if (this.getModuleInfo(id).isEntry) {
        // console.log(id);
        // return `import VConsole from 'vconsole';` + code + 'window.vconsole = new VConsole();';
        return `import utils from './util';` + code + '// footer';
      }
      if (id !== VIRTUAL_ENTRY) {
      }
    },
    resolveId(id) {
      if (id === VIRTUAL_ENTRY) {
        return VIRTUAL_ENTRY;
      }
    },
    load(id) {
      if (id === VIRTUAL_ENTRY) {
        // return `import 'vconsole'`;
        return `
                // import VConsole from 'vconsole';
                // const vc = require('vconsole);

                if (typeof window !== 'undefined') {
                    window.vconsole = new VConsole();
                }
            `;
      }
      return null;
    },
  };
}
