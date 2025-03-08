const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/css')],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/fsa7z1ahgp/**",
      },
    ],
  },
};