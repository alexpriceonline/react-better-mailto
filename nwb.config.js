module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactBetterMailto',
      externals: {
        react: 'React'
      }
    }
  }
}
