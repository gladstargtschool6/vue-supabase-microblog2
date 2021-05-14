module.exports = {
  pages: {
    'index': {
      entry: './src/main.js',
      template: 'public/index.html',
      title: 'Welcome to my vue generator project',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    
    */
  },
  devServer: {
    'port': 3000
  },
  css: {
    sourceMap: false
  },
  pwa: {
    name: 'GladstarGTSchool',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },
}
