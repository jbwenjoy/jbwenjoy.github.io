# Bowen Jiang · 个人主页

无需构建、无需 npm 依赖的静态个人主页，适用于 GitHub Pages。使用默认的 `jbwenjoy.github.io` 域名，不配置 `CNAME`。当前内容从旧版 `latex-resume/cv_4.tex` 摘录，仅用于搭建首版，请在公开上线前校对经历、日期和公开范围。

## 本地预览

在此仓库目录打开终端：

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

浏览器访问 http://127.0.0.1:8000 。按 Ctrl+C 停止服务。也可直接打开 `index.html`，网站不依赖 fetch 或服务器渲染。

## 填充素材

主要编辑 `assets/js/content.js`：

| 内容 | 配置 |
| --- | --- |
| 姓名、简介、所在地、联系方式 | `profile` |
| 头像 | 放到 `assets/images/profile.jpg`，设置 `profile.photo` 为 `assets/images/profile.jpg` |
| PDF 简历 | 放到 `assets/files/resume.pdf`，设置 `profile.resume` 为 `assets/files/resume.pdf`；留空自动隐藏按钮 |
| 工作与实习 | `experience`，按需要复制或删除条目 |
| 项目 | `projects`，`category` 自动生成筛选项 |
| 项目封面 | 设置 `image` 和 `imageAlt`；建议 16:9 的 JPG / WebP |
| 项目链接 | `links: [{ label: "代码", url: "https://github.com/..." }]` |
| 教育与技能 | `education`、`skills` |

图片留空会显示占位图。图片加载失败也会保留占位区域。替换头像后建议裁切为竖向构图；手机会使用横向展示区域。素材文件名推荐英文、小写，不含空格。

`content.js` 是 JavaScript 对象，请保留引号、逗号及方括号；文字中的双引号需转义。内容以纯文本渲染，不接受 HTML。项目列表可自由增删。

样式配色、间距与字体在 `assets/css/style.css` 开头的 CSS 变量中调整。页面骨架在 `index.html`，渲染及筛选逻辑在 `assets/js/main.js`。修改姓名、方向时，同时更新 `index.html` 的 `<title>`、description 和 favicon；新增页面模块时同步调整导航。

## GitHub Pages 上线

本次只准备本地文件，没有提交或推送。

1. 内容准备好后，自行提交并推送到此仓库的默认分支。
2. 在 GitHub 仓库 Settings → Pages 中，选择 Deploy from a branch，选择实际默认分支和 `/ (root)` 并保存。
3. 用户主页预期地址为 https://jbwenjoy.github.io/ 。

已移除过期域名的 `CNAME` 文件。网站使用 https://jbwenjoy.github.io/ 。GitHub 仓库 Settings → Pages → Custom domain 应为空；如仍显示旧域名，点击 Remove，取消默认地址到旧域名的跳转。

## 功能与维护

- 桌面双栏与移动端单栏自适应
- 项目分类筛选，无外部库
- 键盘焦点、跳转链接、筛选播报、减少动画偏好
- 可用浏览器打印功能输出简化版页面；正式求职 PDF 建议继续由 LaTeX 维护
- 不含第三方字体、追踪脚本或外部图片请求
- `.nojekyll` 让 GitHub Pages 直接发布静态资源

建议素材准备顺序：个人照片 → 最新介绍与经历 → 2–4 个代表项目及图像 → PDF 简历 → 外部链接。

## LaTeX 简历子模块

简历源码独立维护于 `git@github.com:jbwenjoy/latex-resume.git`，挂载路径为 `latex-resume/`。

首次克隆整个网站与简历：

```sh
git clone --recurse-submodules git@github.com:jbwenjoy/jbwenjoy.github.io.git
```

已克隆网站时初始化简历：

```sh
git submodule update --init --recursive
```

修改简历后，先在子模块中提交并推送，再在网站仓库记录新的提交指针：

```sh
cd latex-resume
git switch main
# 编辑 cv_4.tex 后：
git add cv_4.tex resume.cls
git commit -m "Update resume"
git push origin main
cd ..
git add latex-resume
git commit -m "Update resume submodule"
git push
```

拉取网站更新后运行 `git submodule update --init --recursive`，即可检出网站所记录的简历版本。子模块更新不会自动同步网页版文案或 PDF 下载文件。

网页姓名统一为 Bowen Jiang，联系入口仅展示 bowen_2025@outlook.com。LaTeX 子模块独立维护，其源码中的个人信息不受网页配置影响。
