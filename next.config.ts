const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/css')],
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
};