const lessPlugin = require("craco-less");
const path = require('path')

module.exports = {
  plugins: [
    {
      plugin: lessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  webpack:{
    alias:{
      '+': path.resolve(__dirname, 'src/component/icons'),
      '#': path.resolve(__dirname,'src/component'),
      '@': path.resolve(__dirname, 'src/')
    }
  },
  babel: {
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]]
  },
  
}
