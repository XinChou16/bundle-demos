/**
 * dynamic import
 */
const enable = true;

if (enable) {}

import('./add.js').then(util => {
  util.add(1, 2);
});
