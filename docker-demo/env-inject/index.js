// import execa from 'execa';

console.log(typeof execa);
const env = ['NODE_ENV', 'BUILD_ENV', 'DOMAIN', 'ENV1', 'DOMAIN'];

env.forEach((envKey) => {
  console.log(envKey, process.env[envKey]);
});

// async function run() {
//     await execa('yarn', ['build']);
// }

// run();
