# vuepress
> 没听过[vuepress](https://www.vuepress.cn/)？它可是新的vue全家桶成员之一，[Evan You](https://github.com/yyx990803)于2018年4月12日推出。

## 一、模块概述
1. 定义: Vue 驱动的静态网站生成器
2. 亮点

<img src="/vuepress-high.png" width="80%">

3. 同类模块横向对比
  
    * Nuxt:
    Nuxt: VuePress 能做的事情，Nuxt 理论上确实能够胜任，但Nuxt 是为构建应用程序而生的
    VuePress: 专注在以内容为中心的静态网站上，同时提供了一些为技术文档定制的开箱即用的特性

    * Docsify / Docute:
    同样都是基于 Vue，然而它们都是完全的运行时驱动，因此对 SEO 不够友好

    * Hexo:
    主题系统太过于静态以及过度地依赖纯字符串, 而不是基于Vue。同时，Hexo 的 Markdown 渲染的配置也不是最灵活的

    * GitBook：
    当文件很多时，每次编辑后的重新加载时间长得令人无法忍受
    默认主题导航结构也比较有限制性
    主题系统也不是 Vue 驱动的
    GitBook 团队更专注于将其打造为一个商业产品而不是开源工具

## 二、成品展示

1. 技术文档网站：
vue全家桶官网：[vue](https://cn.vuejs.org/v2/guide/)、[vuex](
https://vuex.vuejs.org/zh/)、[vue-cli](
https://cli.vuejs.org/zh/guide/)、[vue-router](
https://router.vuejs.org/zh/)以及[vuepress本身](https://www.vuepress.cn/guide/)

2. 个人博客：
[博客1（默认主题）](
https://www.zhangyunchen.cc/)、[博客2（自定义主题）](
https://www.jiangshuaijie.com/)


## 三、尝鲜使用

### 3.1 全局安装 VuePress
`npm install -g vuepress`
`vuepress -v`
> 输出得到版本号: cli.js/1.4.1 win32-x64 node-v12.16.2

### 3.2 创建并进入项目(&&符号表示连续执行)
`mkdir vuepress-demo && cd vuepress-demo`

### 3.3 初始化项目
`npm init -y` // 默认配置yes
在生成的package.json中，添加如下两个启动命令：
```json
"scripts": {
  "dev": "vuepress dev docs",
  "build": "vuepress build docs",
  "deploy": "bash deploy.sh"
}
```
### 3.4 创建基本项目结构

> VuePress 遵循 “约定优于配置” 的原则。

官方只有推荐目录结构，并没有现成的cli，所以需要通过命令行或手动创建如下结构：
```js
`.` 根目录
├── `docs`
│   ├── `.vuepress` (可选的) //  用于存放全局的配置、组件、静态资源等
│   │   ├── `components` (可选的) // 该目录中的 Vue 组件将会被自动注册为全局组件
│   │   ├── `theme` (可选的) // 用于存放本地主题(一般弹射后的默认主题也在此处)
│   │   │   └── Layout.vue
│   │   ├── `public` (可选的) //静态资源目录 - coding中可直接`/`获取路径
│   │   ├── `styles` (可选的) // 用于存放样式相关的文件
│   │   │   ├── index.styl // 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级
│   │   │   └── palette.styl // 用于重写默认颜色常量，或者设置新的 stylus 颜色常量
│   │   ├── `templates` (可选的, 谨慎配置) // 存储 HTML 模板文件。
│   │   │   ├── dev.html // 用于开发环境的 HTML 模板文件
│   │   │   └── ssr.html // 构建时基于 Vue SSR 的 HTML 模板文件
│   │   ├── config.js (可选的) // 配置文件的入口文件，也可以是 YML 或 toml
│   │   └── enhanceApp.js (可选的) // 客户端应用的增强
│   │ 
│   ├── README.md // 相当于index.html(默认入口)
│   ├── `guide` // ??
│   │   └── README.md
│   └── config.md // ??
│ 
└── package.json
```

#### 3.4.1 注意事项
1. `echo '写入任意内容即可' > README.md`不要用指令创建md文件(**会乱码**)

2. [config.js的配置](https://www.vuepress.cn/config/)
```js
module.exports = {
  title: '左上角的名字',
  head: [
    // 注入到当前页面的 HTML <head> 中的标签 - favicon(网页标签的图标)
    ['link', { rel: 'icon', href: '/avatar.png' }],
  ],
  themeConfig: {
    // 左上角logo
    logo: '/avatar.png',  
    // 导航栏配置
    nav:[ 
      {text: '首页', link: '/' },
      {text: '技术文档', link: '内部链接' },
      {text: '简书主页', link: '外部链接'}      
    ],
    // 侧边栏配置(auto自动生成目录)
    sidebar: 'auto',
    // 目录显示标题的级别
    sidebarDepth: 3
  }
};
```

> **注意：路由根路径为docs文件夹，静态资源（图片）根路径为public文件夹**

> **注意：项目自带热更新; 但config.js有时可能会热更新失败，需要重启项目**

3. 配置首页（可选）：

vuepress提供了一个默认格式的简洁首页，需要在你的根级（docs下）README.md添加`home: true`，即可将入口md文件变成首页。格式如下：
```js
---
home: true
heroImage: /spider.png  //图片
heroText: 我的主页  // title
tagline: My homepage // 跳转到主页
actionText: 技术文档 → // 连接名字
actionLink: /tech/interview/ // 地址: 跳转到config.js中定义的某一个nav中
features: // 介绍
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: 底部显示
---
```

4. 变更主题（可选）

    - 更换主题：
    对默认主题不满意，想换个别的主题，可在config.js中设置：
    ```js
    module.exports = {
      theme: 'vuepress-theme-xx'
    }
    ```
    >可以在npm中寻找自己喜欢的主题，其中以 @vuepress/theme- 开头的主题是官方维护的主题(需下载; 选择标准:下载量高、开源、维护人员多)

    - 开发主题：
    [详情见官方文档-开发主题](https://www.vuepress.cn/theme/)

    - 修改默认主题：
    弹射后默认主题全部组件在`根目录/docs/.vuepress/theme`-可按需更改
    ```js
    vuepress eject docs
    npx vuepress eject docs // 如果vscode终端找不到vuepress的环境变量,就去全局找,全局也没有,就(在网络)仅临时使用一次
    ```

### 3.5 高级扩展

#### 3.5.1 md文件中使用vue组件（可选）
vuepress项目中的md文件，可以直接使用vue组件。
我们可以在.vuepress文件夹下新建一个components文件夹，其中的vue组件会自动注册到全局

#### 3.5.2 客户端增强（可选）
如果你想对自己的应用做一些优化，比如使用router做登录拦截、给vue实例挂载全局变量或注册其他组件等，可以在.vuepress下新建文件enhanceApp.js
> 类似于vue-cli脚手架中的main.js文件
```js
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
}
```

## 四、部署上线(打包)

### 4.1 服务器: [Github Pages](https://pages.github.com/)、云服务器

### 4.2 github创建仓库

① 登录 [github](https://github.com/)

② 新建仓库一：username.github.io
（必须为你的github账户的username，而不是昵称啥的，唯一的，github会把这个仓库的内容会自动放入服务器，这个仓库名即为域名）

③ 新建仓库二，名称随意如vuepress-demo
>二者的关系是：仓库一负责显示网站内容，我们不需要改动它；日常开发和新增内容，都在仓库二中，并通过 npm run deploy 命令，将代码发布到仓库一

### 4.3 关联本地项目与github仓库
```js
// 先cd到你的demo
cd vuepress-demo
// git初始化
git init
// 关联github仓库
git remote add origin git@github.com:username/vuepress-demo.git
```
### 4.4 根目录新建 [部署文件](https://www.vuepress.cn/guide/deploy.html#github-pages)

>部署文件: deploy.sh (deploy即部署； .sh指shell-执行这个文件时所有的指令都会以shell命令的形式去执行)

```shell
# 加了这句话表示实可执行文件，下面的执行会依次执行
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件（打包）
npm run build

# 进入生成的文件夹（vuepress打包的出口较为特殊）
cd docs/.vuepress/dist

# 如果是发布到自定义域名、服务器（此处部署在github可忽略）
# echo 'www.yourwebsite.com' > CNAME

# 初始化
git init
# 提交到暂存区
git add -A
# 提交本地
git commit -m 'update'

# 如果你想要部署到 https://USERNAME.github.io （需将username换成自己的用户名）
git push -f git@github.com:username/username.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -
```

> 手动提交过一次后(相当于打好了架子),本次及以后每次写完文档(先在本地写文档,`npm run dev`查看效果)执行`npm run deploy`就会自动执行shell命令,将最新的代码发布到`username.github.io`

### 4.5 PWA（可选）

>PWA，即progressive web apps，以web的形式给你原生app的体验。

>移动端打开会自动适配,也可以通过浏览器添加到桌面,体验原生App的效果
VuePress 默认支持 PWA，配置方法如下：

① config.js添加新的配置(head中两个link && 开启PWA设置)：
```js
head: [
  ['link', { rel: 'icon', href: '/avatar.png' }],
  ['link', { rel: 'manifest', href: '/photo.jpg' }],
  ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
],
serviceWorker: true // 是否开启 PWA
```

② public 文件夹下新建 manifest.json 文件，添加：
```json
{
  "name": "名字",
  "short_name": "名字",
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#2196f3",
  "description": "描述 - seo",
  "theme_color": "blue",
  "icons": [
    {
      "src": "./avatar.png",
      "sizes": "144x144",
      "type": "image/png"
    }
  ],
  "related_applications": [
    {
      "platform": "web"
    },
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
    }
  ]
}
```


## 致谢
南宫: [简书](https://www.jianshu.com/p/37509da5a020)、[github](https://github.com/nan-gong)、[vuepress博客](https://nan-gong.github.io/tech/curry/)