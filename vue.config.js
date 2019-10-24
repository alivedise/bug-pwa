// Inside vue.config.js
module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'Bug <3',
    themeColor: '#0186d1',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    iconPaths: {
      favicon32: 'img/icons/logo.png',
      favicon16: 'img/icons/logo.png',
      appleTouchIcon: 'img/icons/logo.png',
      maskIcon: 'img/icons/logo.svg',
      msTileImage: 'img/icons/logo.png',
    },
    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      // swSrc: 'src/registerServiceWorker.js',
      // ...other Workbox options...
    },
  },
};
