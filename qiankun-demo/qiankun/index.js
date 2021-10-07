import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'demo1',
    entry: '//localhost:3000',
    container: '#qiankun',
  },
]);

start();
