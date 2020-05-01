module.exports = {
  title: 'Topaz-BLog',
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    // 增加一个自定义的 favicon(网页标签的图标)
    // public是静态资源文件夹 - `/`即可访问
    ['link', { rel: 'icon', href: '/favicon.png' }],
    // 针对于PWA的图标设置
    ['link', { rel: 'manifest', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
  ],
  // 默认主题配置项
  themeConfig: {
    // 左上角logo
    logo: '/favicon.png',
    // 右上角导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '技术文档', link: '/tech/' },
      { text: 'GitHub', link: 'https://github.com/topaz-h' }
    ],
    // 侧边栏配置(自动根据md文件生成目录)
    sidebar: 'auto',
    // 每个md文件的显示目录的级别
    sidebarDepth: 3
  },
  // 是否开启 PWA
  serviceWorker: true
};