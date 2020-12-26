module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  env: {
    // 为开发环境添加插件
    development: {
      // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
      // This plugin can significantly increase the speed of hot updates, when you have a large number of pages.
      // https://panjiachen.github.io/vue-element-admin-site/guide/advanced/lazy-loading.html
      // 加快热更新速度
      plugins: ['dynamic-import-node']
    }
  }
}
