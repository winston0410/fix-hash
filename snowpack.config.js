module.exports = {
  experiments: {
    source: 'skypack'
  },
  mount: {
    public: { url: `/public`, static: false, resolve: false },
    data: { url: `/public`, static: true, resolve: false },
    src: { url: '/_dist_', static: false, resolve: false }
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    ['snowpack-plugin-hash', {
      hashLength: 4,
      assetManifest: 'asset-manifest.json'
    }]
  ],
  install: [
    '@babel/runtime/helpers/slicedToArray',
    '@babel/runtime/helpers/objectWithoutProperties',
    '@babel/runtime/helpers/extends'
  ],
  installOptions: {
    sourceMap: true,
    env: {
      ENV_NAME: process.env.NODE_ENV
    },
    treeshake: false,
    installTypes: false
  },
  devOptions: {
    port: 3001,
    open: 'none',
    output: 'dashboard',
    hmr: true,
    hmrErrorOverlay: true,
    secure: false,
    bundle: true
  },
  buildOptions: {
    out: 'build',
    clean: true,
    sourceMaps: true
  },
  proxy: {
    /* ... */
  },
  alias: {

  }
}
