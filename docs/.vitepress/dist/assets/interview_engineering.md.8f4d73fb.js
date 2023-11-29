import{_ as a,o as s,c as l,Q as e}from"./chunks/framework.2576a40d.js";const n="/passScroll/assets/image.e05ac67f.png",o="/passScroll/assets/image-1.c73e5197.png",t="/passScroll/assets/image-2.837da8d1.png",E=JSON.parse('{"title":"工程化","description":"","frontmatter":{},"headers":[],"relativePath":"interview/engineering.md","filePath":"interview/engineering.md","lastUpdated":1701141206000}'),r={name:"interview/engineering.md"},i=e('<h1 id="工程化" tabindex="-1">工程化 <a class="header-anchor" href="#工程化" aria-label="Permalink to &quot;工程化&quot;">​</a></h1><h2 id="常用的git命令" tabindex="-1">常用的git命令 <a class="header-anchor" href="#常用的git命令" aria-label="Permalink to &quot;常用的git命令&quot;">​</a></h2><details class="details custom-block"><summary>答案</summary><p>Git 是一个常用的版本控制工具，以下是一些常用的 Git 命令：</p><h3 id="创建和配置仓库" tabindex="-1">创建和配置仓库： <a class="header-anchor" href="#创建和配置仓库" aria-label="Permalink to &quot;创建和配置仓库：&quot;">​</a></h3><ul><li><strong>git init：</strong> 在当前目录创建一个新的 Git 仓库。</li><li><strong>git clone [url]：</strong> 克隆远程仓库到本地。</li><li><strong>git config：</strong> 配置 Git，包括用户名、邮箱等信息。</li></ul><h3 id="基本操作" tabindex="-1">基本操作： <a class="header-anchor" href="#基本操作" aria-label="Permalink to &quot;基本操作：&quot;">​</a></h3><ul><li><strong>git add [file]：</strong> 将文件添加到暂存区。</li><li><strong>git commit -m &quot;message&quot;：</strong> 将暂存区的文件提交到本地仓库。</li><li><strong>git status：</strong> 查看工作区、暂存区和本地仓库的状态。</li><li><strong>git diff：</strong> 查看文件更改的具体内容。</li></ul><h3 id="分支管理" tabindex="-1">分支管理： <a class="header-anchor" href="#分支管理" aria-label="Permalink to &quot;分支管理：&quot;">​</a></h3><ul><li><strong>git branch：</strong> 查看当前分支。</li><li><strong>git branch [branch-name]：</strong> 创建新的分支。</li><li><strong>git checkout [branch-name]：</strong> 切换分支。</li><li><strong>git merge [branch-name]：</strong> 合并指定分支到当前分支。</li></ul><h3 id="远程仓库操作" tabindex="-1">远程仓库操作： <a class="header-anchor" href="#远程仓库操作" aria-label="Permalink to &quot;远程仓库操作：&quot;">​</a></h3><ul><li><strong>git remote add origin [url]：</strong> 添加远程仓库。</li><li><strong>git push origin [branch-name]：</strong> 将本地分支推送到远程仓库。</li><li><strong>git pull origin [branch-name]：</strong> 拉取远程仓库的变更到本地。</li><li><strong>git fetch：</strong> 从远程仓库获取最新代码但不合并。</li></ul><h3 id="撤销和修改" tabindex="-1">撤销和修改： <a class="header-anchor" href="#撤销和修改" aria-label="Permalink to &quot;撤销和修改：&quot;">​</a></h3><ul><li><strong>git reset [file]：</strong> 撤销文件的暂存状态。</li><li><strong>git checkout -- [file]：</strong> 恢复文件到最近的提交状态。</li><li><strong>git revert [commit]：</strong> 撤销指定提交的修改。</li></ul><h3 id="日志和查看" tabindex="-1">日志和查看： <a class="header-anchor" href="#日志和查看" aria-label="Permalink to &quot;日志和查看：&quot;">​</a></h3><ul><li><strong>git log：</strong> 查看提交日志。</li><li><strong>git show [commit]：</strong> 查看指定提交的详细信息。</li><li><strong>git blame [file]：</strong> 显示文件的每一行是谁在什么时候修改的。</li></ul><p>这些是 Git 中最常用的命令，每个命令都有自己的参数和用法，根据具体情况选择合适的命令进行版本控制和管理。</p></details><h2 id="git-rebase和git-merge的区别" tabindex="-1">git rebase和git merge的区别 <a class="header-anchor" href="#git-rebase和git-merge的区别" aria-label="Permalink to &quot;git rebase和git merge的区别&quot;">​</a></h2><details class="details custom-block"><summary>答案</summary><p><code>git rebase</code> 和 <code>git merge</code> 都是用于合并分支的 Git 命令，但它们的工作方式和结果有所不同：</p><h3 id="_1-git-merge" tabindex="-1">1. Git Merge： <a class="header-anchor" href="#_1-git-merge" aria-label="Permalink to &quot;1. Git Merge：&quot;">​</a></h3><ul><li><p><strong>工作方式：</strong> 在合并分支时，Git 会创建一个新的提交（merge commit），将两个分支的修改合并到一个新的提交中。</p></li><li><p><strong>提交历史：</strong> 在提交历史中，会保留原始分支和合并产生的新提交的信息，因此可以清晰地看到分支的合并历史。</p></li><li><p><strong>优点：</strong> 保留了分支的整个历史记录，易于理解分支之间的关系。</p></li></ul><p><img src="'+n+`" alt="Alt text"></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 合并分支到当前分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">branch-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 合并分支到当前分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">branch-nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="_2-git-rebase" tabindex="-1">2. Git Rebase： <a class="header-anchor" href="#_2-git-rebase" aria-label="Permalink to &quot;2. Git Rebase：&quot;">​</a></h3><ul><li><p><strong>工作方式：</strong> 将当前分支上的修改“挪动”到目标分支的最后，看起来好像是在目标分支上进行的修改，不会创建新的合并提交。</p></li><li><p><strong>提交历史：</strong> 使用 rebase 会改写提交历史，将当前分支上的提交放到目标分支的后面，形成线性的提交历史。</p></li><li><p><strong>优点：</strong> 保持了提交历史的线性性，减少了分支合并后的混乱提交历史。</p></li></ul><p><img src="`+o+`" alt="Alt text"></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 将当前分支的修改“挪动”到目标分支的最后</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rebase</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">branch-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 将当前分支的修改“挪动”到目标分支的最后</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">branch-nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="如何选择" tabindex="-1">如何选择： <a class="header-anchor" href="#如何选择" aria-label="Permalink to &quot;如何选择：&quot;">​</a></h3><ul><li><p>使用 <code>git merge</code> 保留了分支之间的合并信息，适合公共分支或多人协作的情况，更易于追踪分支的历史。</p></li><li><p>使用 <code>git rebase</code> 可以保持提交历史的整洁和线性，适合在私有分支上工作，减少冗杂的合并提交。</p></li></ul><p><strong>重要提示：</strong> 在对公共分支进行操作时，如 master 或其他共享分支，最好避免使用 rebase，因为它会改写提交历史，可能造成他人的困扰。</p></details><h2 id="webpack的构建流程" tabindex="-1">webpack的构建流程 <a class="header-anchor" href="#webpack的构建流程" aria-label="Permalink to &quot;webpack的构建流程&quot;">​</a></h2><p><img src="`+t+`" alt="Alt text"></p><h2 id="常见-loader-和-plugin-有哪些-二者的区别是什么" tabindex="-1">常见 loader 和 plugin 有哪些？二者的区别是什么？ <a class="header-anchor" href="#常见-loader-和-plugin-有哪些-二者的区别是什么" aria-label="Permalink to &quot;常见 loader 和 plugin 有哪些？二者的区别是什么？&quot;">​</a></h2><p>Webpack 的生态系统提供了许多加载器（Loaders）和插件（Plugins），用于处理不同类型的文件、优化构建、提高开发效率等。以下是一些常见的 Loader 和 Plugin：</p><details class="details custom-block"><summary>答案</summary><h3 id="常见的-loader" tabindex="-1">常见的 Loader： <a class="header-anchor" href="#常见的-loader" aria-label="Permalink to &quot;常见的 Loader：&quot;">​</a></h3><ol><li><strong>babel-loader：</strong> 将 ES6/ES7 代码转换为兼容的 ES5 代码。</li><li><strong>style-loader 和 css-loader：</strong> 处理 CSS 文件，使其能够被 JavaScript 引入并注入到页面中。</li><li><strong>file-loader 和 url-loader：</strong> 处理图片、字体等静态文件，生成文件 URL 或将小文件转换为 Data URL。</li><li><strong>sass-loader 和 less-loader：</strong> 处理 Sass 和 Less 文件，将其编译为 CSS。</li><li><strong>ts-loader：</strong> 处理 TypeScript 文件，将其编译为 JavaScript。</li><li><strong>postcss-loader：</strong> 使用 PostCSS 处理 CSS，可以使用各种插件进行自动添加前缀、压缩等。</li><li><strong>eslint-loader 和 stylelint-loader：</strong> 在构建过程中进行代码风格和质量检查。</li></ol><h3 id="常见的-plugin" tabindex="-1">常见的 Plugin： <a class="header-anchor" href="#常见的-plugin" aria-label="Permalink to &quot;常见的 Plugin：&quot;">​</a></h3><ol><li><strong>HtmlWebpackPlugin：</strong> 自动生成 HTML 文件，并自动引入打包后的 JS、CSS 文件。</li><li><strong>MiniCssExtractPlugin：</strong> 将 CSS 提取为单独的文件，而不是以 <code>&lt;style&gt;</code> 标签嵌入到 HTML 文件中。</li><li><strong>CleanWebpackPlugin：</strong> 清理构建目录，保证每次构建前都是干净的。</li><li><strong>HotModuleReplacementPlugin：</strong> 热模块替换，用于在开发环境下实现热更新。</li><li><strong>CopyWebpackPlugin：</strong> 复制静态资源到输出目录。</li><li><strong>DefinePlugin：</strong> 定义全局变量，用于在编译时创建全局常量。</li><li><strong>WebpackBar：</strong> 美化构建进度显示。</li><li><strong>BundleAnalyzerPlugin：</strong> 生成构建分析报告，用于分析打包文件的大小和依赖。</li></ol><p>这些 Loader 和 Plugin 可以根据项目需求选择并配置，通过它们的组合和定制，能够有效地优化构建过程、提高开发效率和应用性能。</p><h3 id="二者的区别" tabindex="-1">二者的区别 <a class="header-anchor" href="#二者的区别" aria-label="Permalink to &quot;二者的区别&quot;">​</a></h3><ul><li><p>loader 是文件加载器（这句废话很重要）</p><ul><li>Loaders 可以将各种文件（如 JavaScript、CSS、图片、字体等）转换为模块，使其可以被引入到应用程序中，以及在构建过程中进行转换和处理</li><li>Loaders 是在模块加载时应用的，作用于单个文件</li><li>Loaders 在配置文件中的 module.rules 下配置</li></ul></li><li><p>plugin 是 webpack 插件</p><ul><li>Plugins 可以处理更广泛的任务，如优化、压缩、代码分割、生成 HTML 文件、资源管理等，甚至可以在构建周期中执行自定义的操作</li><li>Plugins 则作用于整个构建过程，能够在构建周期的不同阶段执行任务</li><li>Plugins 在 plugins 数组中配置</li></ul></li></ul></details><h2 id="webpack-proxy工作原理-为什么能解决跨域" tabindex="-1">webpack proxy工作原理？为什么能解决跨域 <a class="header-anchor" href="#webpack-proxy工作原理-为什么能解决跨域" aria-label="Permalink to &quot;webpack proxy工作原理？为什么能解决跨域&quot;">​</a></h2><details class="details custom-block"><summary>答案</summary><h3 id="webpack-dev-server-的-proxy-配置" tabindex="-1">Webpack Dev Server 的 Proxy 配置： <a class="header-anchor" href="#webpack-dev-server-的-proxy-配置" aria-label="Permalink to &quot;Webpack Dev Server 的 Proxy 配置：&quot;">​</a></h3><p>Webpack Dev Server 提供了 <code>proxy</code> 选项，允许开发者在开发环境中配置代理，将特定的 API 请求代理到后端服务器，以解决跨域请求的问题。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//...</span></span>
<span class="line"><span style="color:#E1E4E8;">  devServer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;/api&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        target: </span><span style="color:#9ECBFF;">&#39;http://xiedaimala.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        changeOrigin: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//...</span></span>
<span class="line"><span style="color:#24292E;">  devServer: {</span></span>
<span class="line"><span style="color:#24292E;">    proxy: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;/api&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        target: </span><span style="color:#032F62;">&#39;http://xiedaimala.com&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        changeOrigin: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h3 id="工作原理" tabindex="-1">工作原理： <a class="header-anchor" href="#工作原理" aria-label="Permalink to &quot;工作原理：&quot;">​</a></h3><ol><li><p><strong>开发环境配置：</strong> 在开发环境下，前端和后端通常运行在不同的端口上，而浏览器的同源策略会阻止跨域请求。使用 Webpack Dev Server 的代理配置，可以将前端发起的请求代理到后端服务器，绕过浏览器的同源策略。</p></li><li><p><strong>代理转发：</strong> 当前端发起请求时，Webpack Dev Server 会根据配置的代理规则拦截匹配的请求，并将这些请求转发到后端服务器上。后端服务器接收到这些请求并返回相应的数据，Webpack Dev Server 再将数据返回给前端，完成跨域请求。</p></li></ol><h3 id="解决跨域问题的原理" tabindex="-1">解决跨域问题的原理： <a class="header-anchor" href="#解决跨域问题的原理" aria-label="Permalink to &quot;解决跨域问题的原理：&quot;">​</a></h3><ul><li><p><strong>同源策略：</strong> 浏览器出于安全考虑，实施了同源策略，限制了不同源之间的交互，包括 JavaScript 的跨域请求。但代理服务器在后端发起请求，不受同源策略的限制，因此可以实现前端跨域请求到代理服务器，再由代理服务器向后端发起请求，最终绕过了浏览器的同源限制。</p></li><li><p><strong>代理服务器：</strong> 在开发环境下，Webpack Dev Server 充当了一个代理服务器的角色，将前端请求转发到后端，从而解决了跨域请求的问题。</p></li></ul><p>Webpack Dev Server 的代理配置为开发环境下的跨域问题提供了解决方案，但在生产环境中，跨域请求通常需要由服务器端配置 CORS（跨源资源共享）等策略来实现。</p></details><h2 id="webpack-与-vite-的区别是什么" tabindex="-1">webpack 与 vite 的区别是什么？ <a class="header-anchor" href="#webpack-与-vite-的区别是什么" aria-label="Permalink to &quot;webpack 与 vite 的区别是什么？&quot;">​</a></h2><details class="details custom-block"><summary>答案</summary><p><a href="https://juejin.cn/post/7039224502655402021?searchId=202307131108228B388F0A3F60244A9766#heading-6" target="_blank" rel="noreferrer">vite 相比webpack的优缺点。 - 掘金 (juejin.cn)</a></p><h4 id="webpack" tabindex="-1">Webpack <a class="header-anchor" href="#webpack" aria-label="Permalink to &quot;Webpack&quot;">​</a></h4><ul><li>Webpack 是一个基于依赖图的静态模块打包工具，可以处理各种类型的文件，并且支持各种功能，如代码分割、模块化、加载器和插件等</li><li>Webpack *使用 *babel *来打包 JS 代码，Webpack 在每次文件修改后都需要重新编译整个应用，因此在大型项目中可能会导致启动速度较慢</li><li>Webpack 是一个成熟且广泛使用的前端打包工具，具有丰富的生态系统和大量的社区支持，适用于各种类型的项目</li></ul><h4 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-label="Permalink to &quot;Vite&quot;">​</a></h4><ul><li>vite 使用 *rollup *+ *esbuild *来打包 JS 代码, 旨在提供更快的开发启动和热更新速度</li><li>Vite 使用 ES Modules 原生支持浏览器的导入规范，利用现代浏览器对 ES Modules 的支持，可以更快地实现按需编译和模块热更新</li></ul><p>目前已知 vite 的缺点有：</p><ol><li>热更新常常失败，原因不清楚</li></ol><ol start="2"><li>有些功能 rollup 不支持，需要自己写 rollup 插件</li></ol><ol start="3"><li>不支持非现代浏览器</li></ol></details><h2 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-label="Permalink to &quot;性能优化&quot;">​</a></h2><p><a href="./performance.html">performance</a></p>`,16),p=[i];function c(g,d,h,u,b,m){return s(),l("div",null,p)}const k=a(r,[["render",c]]);export{E as __pageData,k as default};
