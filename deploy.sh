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
# 提交本地(以后每次就是更新文档了)
git commit -m 'update'

# 如果你想要部署到 https://USERNAME.github.io （需将username换成自己的用户名）
# git push -f git@github.com:username/username.github.io.git master
git push -f git@github.com:topaz-h/topaz-h.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -
