import{_ as l,o as a,c as t,Q as i}from"./chunks/framework.2576a40d.js";const o="/passScroll/assets/tcp.472f968a.png",T=JSON.parse('{"title":"HTTP","description":"","frontmatter":{},"headers":[],"relativePath":"interview/http.md","filePath":"interview/http.md","lastUpdated":1701153910000}'),e={name:"interview/http.md"},r=i('<h1 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-label="Permalink to &quot;HTTP&quot;">​</a></h1><h2 id="get-和-post的区别" tabindex="-1">GET 和 POST的区别 <a class="header-anchor" href="#get-和-post的区别" aria-label="Permalink to &quot;GET 和 POST的区别&quot;">​</a></h2><details class="details custom-block"><summary>答案</summary><p>GET 和 POST 是 HTTP 协议中最常用的两种请求方法，用于在客户端和服务器之间传输数据。</p><h3 id="get-请求" tabindex="-1">GET 请求： <a class="header-anchor" href="#get-请求" aria-label="Permalink to &quot;GET 请求：&quot;">​</a></h3><ul><li><strong>用途：</strong> 用于向指定的资源请求数据，将参数放置在 URL 的查询字符串中传输。</li><li><strong>特点：</strong><ul><li>参数通过 URL 传递，以键值对的形式出现在 URL 中，可见且有长度限制。</li><li>可以被缓存，可被收藏为书签，会留下浏览历史记录。</li><li>安全性相对较低，因为参数会暴露在 URL 上。</li></ul></li></ul><h3 id="post-请求" tabindex="-1">POST 请求： <a class="header-anchor" href="#post-请求" aria-label="Permalink to &quot;POST 请求：&quot;">​</a></h3><ul><li><strong>用途：</strong> 用于向指定的资源提交要处理的数据，将参数放置在请求体中传输。</li><li><strong>特点：</strong><ul><li>参数通过请求体传递，不会出现在 URL 中，可以传输大量数据，且没有长度限制。</li><li>不会被缓存，不会保留浏览历史记录。</li><li>安全性相对较高，因为参数不会暴露在 URL 上。</li></ul></li></ul><h3 id="主要区别" tabindex="-1">主要区别： <a class="header-anchor" href="#主要区别" aria-label="Permalink to &quot;主要区别：&quot;">​</a></h3><ol><li><p><strong>数据位置：</strong> GET 请求的参数放在 URL 的查询字符串中传输，而 POST 请求的参数放在请求体中传输。</p></li><li><p><strong>安全性和隐私：</strong> POST 请求的参数不会暴露在 URL 中，相对更安全，而 GET 请求的参数可见且有长度限制。</p></li><li><p><strong>缓存和书签：</strong> GET 请求可以被缓存和收藏为书签，而 POST 请求不会被缓存，也不会保留浏览历史记录。</p></li><li><p><strong>数据量限制：</strong> GET 请求由于参数放在 URL 中，所以传输的数据量较小，有长度限制；而 POST 请求没有这样的限制。</p></li></ol><p>在实际开发中，GET 通常用于获取数据，而 POST 通常用于提交数据。选择使用哪种请求方法取决于具体的业务需求和安全考虑。</p></details><h2 id="说说-http1-0-1-1-2-0-的区别" tabindex="-1">说说 HTTP1.0/1.1/2.0 的区别 <a class="header-anchor" href="#说说-http1-0-1-1-2-0-的区别" aria-label="Permalink to &quot;说说 HTTP1.0/1.1/2.0 的区别&quot;">​</a></h2><details class="details custom-block"><summary>答案</summary><p><code>HTTP1.0</code></p><ul><li>浏览器与服务器只保持短暂的连接，浏览器的每次请求都需要与服务器建立一个TCP连接</li></ul><p><code>HTTP1.1</code></p><ul><li>引入了持久连接，即TCP连接默认不关闭，可以被多个请求复用</li><li>在同一个TCP连接里面，客户端可以同时发送多个请求</li><li>虽然允许复用TCP连接，但是同一个TCP连接里面，所有的数据通信是按次序进行的，服务器只有处理完一个请求，才会接着处理下一个请求。如果前面的处理特别慢，后面就会有许多请求排队等着</li><li>新增了一些请求方法</li><li>新增了一些请求头和响应头</li></ul><p><code>HTTP2.0</code></p><ul><li>采用二进制格式而非文本格式</li><li>完全多路复用，而非有序并阻塞的、只需一个连接即可实现并行</li><li>使用报头压缩，降低开销</li><li>服务器推送</li></ul></details><h2 id="说说http-常见的状态码有哪些-适用场景" tabindex="-1">说说HTTP 常见的状态码有哪些，适用场景 <a class="header-anchor" href="#说说http-常见的状态码有哪些-适用场景" aria-label="Permalink to &quot;说说HTTP 常见的状态码有哪些，适用场景&quot;">​</a></h2><p>状态码第一位数字决定了不同的响应状态，有如下：</p><ul><li>1 表示消息</li><li>2 表示成功</li><li>3 表示重定向</li><li>4 表示请求错误</li><li>5 表示服务器错误</li></ul><details class="details custom-block"><summary>答案</summary><h4 id="_1xx" tabindex="-1">1xx <a class="header-anchor" href="#_1xx" aria-label="Permalink to &quot;1xx&quot;">​</a></h4><p>代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束</p><p>常见的有：</p><ul><li>100（客户端继续发送请求，这是临时响应）：这个临时响应是用来通知客户端它的部分请求已经被服务器接收，且仍未被拒绝。客户端应当继续发送请求的剩余部分，或者如果请求已经完成，忽略这个响应。服务器必须在请求完成后向客户端发送一个最终响应</li><li>101：服务器根据客户端的请求切换协议，主要用于websocket或http2升级</li></ul><h4 id="_2xx" tabindex="-1">2xx <a class="header-anchor" href="#_2xx" aria-label="Permalink to &quot;2xx&quot;">​</a></h4><p>代表请求已成功被服务器接收、理解、并接受</p><p>常见的有：</p><ul><li>200（成功）：请求已成功，请求所希望的响应头或数据体将随此响应返回</li><li>201（已创建）：请求成功并且服务器创建了新的资源</li><li>202（已创建）：服务器已经接收请求，但尚未处理</li><li>203（非授权信息）：服务器已成功处理请求，但返回的信息可能来自另一来源</li><li>204（无内容）：服务器成功处理请求，但没有返回任何内容</li><li>205（重置内容）：服务器成功处理请求，但没有返回任何内容</li><li>206（部分内容）：服务器成功处理了部分请求</li></ul><h4 id="_3xx" tabindex="-1">3xx <a class="header-anchor" href="#_3xx" aria-label="Permalink to &quot;3xx&quot;">​</a></h4><p>表示要完成请求，需要进一步操作。 通常，这些状态代码用来重定向</p><p>常见的有：</p><ul><li>300（多种选择）：针对请求，服务器可执行多种操作。 服务器可根据请求者 (user agent) 选择一项操作，或提供操作列表供请求者选择</li><li>301（永久移动）：请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置</li><li>302（临时移动）： 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求</li><li>303（查看其他位置）：请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码</li><li>305 （使用代理）： 请求者只能使用代理访问请求的网页。 如果服务器返回此响应，还表示请求者应使用代理</li><li>307 （临时重定向）： 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求</li></ul><h4 id="_4xx" tabindex="-1">4xx <a class="header-anchor" href="#_4xx" aria-label="Permalink to &quot;4xx&quot;">​</a></h4><p>代表了客户端看起来可能发生了错误，妨碍了服务器的处理</p><p>常见的有：</p><ul><li>400（错误请求）： 服务器不理解请求的语法</li><li>401（未授权）： 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。</li><li>403（禁止）： 服务器拒绝请求</li><li>404（未找到）： 服务器找不到请求的网页</li><li>405（方法禁用）： 禁用请求中指定的方法</li><li>406（不接受）： 无法使用请求的内容特性响应请求的网页</li><li>407（需要代理授权）： 此状态代码与 401（未授权）类似，但指定请求者应当授权使用代理</li><li>408（请求超时）： 服务器等候请求时发生超时</li></ul><h4 id="_5xx" tabindex="-1">5xx <a class="header-anchor" href="#_5xx" aria-label="Permalink to &quot;5xx&quot;">​</a></h4><p>表示服务器无法完成明显有效的请求。这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生</p><p>常见的有：</p><ul><li>500（服务器内部错误）：服务器遇到错误，无法完成请求</li><li>501（尚未实施）：服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码</li><li>502（错误网关）： 服务器作为网关或代理，从上游服务器收到无效响应</li><li>503（服务不可用）： 服务器目前无法使用（由于超载或停机维护）</li><li>504（网关超时）： 服务器作为网关或代理，但是没有及时从上游服务器收到请求</li><li>505（HTTP 版本不受支持）： 服务器不支持请求中所用的 HTTP 协议版本</li></ul></details><h2 id="从浏览器地址栏输入-url-到请求返回发生了什么" tabindex="-1">从浏览器地址栏输入 url 到请求返回发生了什么 <a class="header-anchor" href="#从浏览器地址栏输入-url-到请求返回发生了什么" aria-label="Permalink to &quot;从浏览器地址栏输入 url 到请求返回发生了什么&quot;">​</a></h2><details class="details custom-block"><summary>答案</summary><p>当在浏览器地址栏输入 URL 并按下回车键时，会触发以下一系列步骤，涉及到整个 HTTP 请求过程：</p><h3 id="_1-url-解析" tabindex="-1">1. URL 解析： <a class="header-anchor" href="#_1-url-解析" aria-label="Permalink to &quot;1. URL 解析：&quot;">​</a></h3><ul><li>浏览器解析输入的 URL，判断协议（http/https）、主机名、端口号、路径等信息。</li></ul><h3 id="_2-dns-查询" tabindex="-1">2. DNS 查询： <a class="header-anchor" href="#_2-dns-查询" aria-label="Permalink to &quot;2. DNS 查询：&quot;">​</a></h3><ul><li>浏览器检查缓存，如果找到相应的 IP 地址，则跳到步骤 5；否则，进行 DNS 查询，将域名解析为 IP 地址。</li></ul><h3 id="_3-tcp-连接" tabindex="-1">3. TCP 连接： <a class="header-anchor" href="#_3-tcp-连接" aria-label="Permalink to &quot;3. TCP 连接：&quot;">​</a></h3><ul><li>浏览器与服务器建立 TCP 连接。这个过程包括 TCP 的三次握手，确保客户端和服务器之间建立可靠的连接。</li></ul><h3 id="_4-发送-http-请求" tabindex="-1">4. 发送 HTTP 请求： <a class="header-anchor" href="#_4-发送-http-请求" aria-label="Permalink to &quot;4. 发送 HTTP 请求：&quot;">​</a></h3><ul><li>浏览器构建 HTTP 请求，包括请求行（方法、URL、协议版本）、请求头（User-Agent、Accept、Cookies 等）、请求体（对于 POST 请求）等信息。</li></ul><h3 id="_5-服务器处理请求" tabindex="-1">5. 服务器处理请求： <a class="header-anchor" href="#_5-服务器处理请求" aria-label="Permalink to &quot;5. 服务器处理请求：&quot;">​</a></h3><ul><li>服务器接收到请求后，根据请求的 URL、方法、头部信息等进行处理，寻找对应的资源或执行相应的操作。</li></ul><h3 id="_6-服务器返回响应" tabindex="-1">6. 服务器返回响应： <a class="header-anchor" href="#_6-服务器返回响应" aria-label="Permalink to &quot;6. 服务器返回响应：&quot;">​</a></h3><ul><li>服务器将处理后的结果封装成 HTTP 响应，包括状态行（协议版本、状态码）、响应头（Content-Type、Content-Length 等）、响应体（HTML、JSON 等）等。</li></ul><h3 id="_7-浏览器接收响应" tabindex="-1">7. 浏览器接收响应： <a class="header-anchor" href="#_7-浏览器接收响应" aria-label="Permalink to &quot;7. 浏览器接收响应：&quot;">​</a></h3><ul><li>浏览器接收到 HTTP 响应后，如果状态码为 200-299，表示请求成功，否则根据不同的状态码进行相应的错误处理。</li></ul><h3 id="_8-渲染页面" tabindex="-1">8. 渲染页面： <a class="header-anchor" href="#_8-渲染页面" aria-label="Permalink to &quot;8. 渲染页面：&quot;">​</a></h3><ul><li>如果是请求 HTML 页面，浏览器开始解析 HTML，并根据其中的资源（如 CSS、JavaScript、图片等）发起新的请求。</li></ul><h3 id="_9-关闭连接" tabindex="-1">9. 关闭连接： <a class="header-anchor" href="#_9-关闭连接" aria-label="Permalink to &quot;9. 关闭连接：&quot;">​</a></h3><ul><li>完成请求后，浏览器与服务器断开 TCP 连接，释放资源。</li></ul><p>这些步骤构成了从浏览器地址栏输入 URL 到请求返回的整个过程。在此过程中，涉及到 DNS 解析、TCP 连接、HTTP 请求响应等多个环节。</p></details><h2 id="理解tcp-ip协议" tabindex="-1">理解TCP/IP协议 <a class="header-anchor" href="#理解tcp-ip协议" aria-label="Permalink to &quot;理解TCP/IP协议&quot;">​</a></h2><details class="details custom-block"><summary>答案</summary><p>TCP/IP，<strong>传输控制协议</strong>/<strong>网际协议</strong>，是指能够在多个不同网络间实现信息传输的协议簇</p><ul><li>TCP（传输控制协议）</li></ul><p>一种面向连接的、可靠的、基于字节流的传输层通信协议</p><ul><li>IP（网际协议）</li></ul><p>TCP/IP 的四层结构则如下表所示：</p><table><thead><tr><th>层次名称</th><th>单位</th><th>功 能</th><th>协 议</th></tr></thead><tbody><tr><td>网络接口层</td><td>帧</td><td>负责实际数据的传输，对应OSI参考模型的下两层</td><td>HDLC（高级链路控制协议）PPP（点对点协议） SLIP（串行线路接口协议）</td></tr><tr><td>网络层</td><td>数据报</td><td>负责网络间的寻址数据传输，对应OSI参考模型的第三层</td><td>IP（网际协议） ICMP（网际控制消息协议）ARP（地址解析协议） RARP（反向地址解析协议）</td></tr><tr><td>传输层</td><td>报文段</td><td>负责提供可靠的传输服务，对应OSI参考模型的第四层</td><td>TCP（控制传输协议） UDP（用户数据报协议）</td></tr><tr><td>应用层</td><td></td><td>负责实现一切与应用程序相关的功能，对应OSI参考模型的上三层</td><td>FTP（文件传输协议） HTTP（超文本传输协议） DNS（域名服务器协议）SMTP（简单邮件传输协议）NFS（网络文件系统协议）</td></tr></tbody></table></details><h2 id="tcp-三次握手和四次挥手是什么" tabindex="-1">TCP 三次握手和四次挥手是什么 <a class="header-anchor" href="#tcp-三次握手和四次挥手是什么" aria-label="Permalink to &quot;TCP 三次握手和四次挥手是什么&quot;">​</a></h2><table><thead><tr><th>消息类型</th><th>描述</th></tr></thead><tbody><tr><td>SYN</td><td>这个消息是用来初始化和建立连接的。</td></tr><tr><td>ACK</td><td>帮助对方确认收到的 SYN 消息</td></tr><tr><td>SYN-ACK</td><td>本地的 SYN 消息和较早的 ACK 数据包</td></tr><tr><td>FIN</td><td>用来断开连接</td></tr></tbody></table><details class="details custom-block"><summary>答案</summary><p><img src="'+o+'" alt="image.jpg"></p><h4 id="三次握手" tabindex="-1">三次握手 <a class="header-anchor" href="#三次握手" aria-label="Permalink to &quot;三次握手&quot;">​</a></h4><p>三次握手（Three-way Handshake）其实就是指建立一个TCP连接时，需要客户端和服务器总共发送3个包</p><p>主要作用就是为了确认双方的接收能力和发送能力是否正常、指定自己的初始化序列号为后面的可靠性传送做准备</p><p>过程如下：</p><ol><li><p>第一次握手：客户端先向服务器发送一个同步数据包：同步SYN=1，确认ACK=0</p></li><li><p>第二次握手：</p></li></ol><ul><li>服务器收到客户端发送的第一个数据包后，根据SYN=1与ACK=0，判断出为主动建立连接的数据包。</li></ul><ul><li>若服务器同意连接，发送给客户端一个数据包：同步SYN=1，确认ACK=1进行回应。</li></ul><ol start="3"><li>第三次握手：客户端收到服务器的确认之后，再给服务器发送一个数据包：同步SYN=0，确认SYN=0，代表双方已同意建立连接，ACK=1，表示收到服务器的确认数据包。</li></ol><h6 id="为什么不是两次握手" tabindex="-1">为什么不是两次握手? <a class="header-anchor" href="#为什么不是两次握手" aria-label="Permalink to &quot;为什么不是两次握手?&quot;">​</a></h6><p>如果是两次握手，发送端可以确定自己发送的信息能对方能收到，也能确定对方发的包自己能收到，但接收端只能确定对方发的包自己能收到 无法确定自己发的包对方能收到</p><p>并且两次握手的话, 客户端有可能因为网络阻塞等原因会发送多个请求报文，延时到达的请求又会与服务器建立连接，浪费掉许多服务器的资源</p><h4 id="四次挥手" tabindex="-1">四次挥手 <a class="header-anchor" href="#四次挥手" aria-label="Permalink to &quot;四次挥手&quot;">​</a></h4><p><code>tcp</code> 终止一个连接，需要经过四次挥手</p><p>过程如下：</p><ul><li>第一次挥手：客户端发送一个 FIN 报文，报文中会指定一个序列号。此时客户端处于 FIN_WAIT1 状态，停止发送数据，等待服务端的确认</li><li>第二次挥手：服务端收到 FIN 之后，会发送 ACK 报文，且把客户端的序列号值 +1 作为 ACK 报文的序列号值，表明已经收到客户端的报文了，此时服务端处于 CLOSE_WAIT状态</li><li>第三次挥手：如果服务端也想断开连接了，和客户端的第一次挥手一样，发给 FIN 报文，且指定一个序列号。此时服务端处于 <code>LAST_ACK</code> 的状态</li><li>第四次挥手：客户端收到 FIN 之后，一样发送一个 ACK 报文作为应答，且把服务端的序列号值 +1 作为自己 ACK 报文的序列号值，此时客户端处于 TIME_WAIT状态。需要过一阵子以确保服务端收到自己的 ACK 报文之后才会进入 CLOSED 状态，服务端收到 ACK 报文之后，就处于关闭连接了，处于 CLOSED 状态</li></ul><h6 id="四次挥手原因" tabindex="-1">四次挥手原因 <a class="header-anchor" href="#四次挥手原因" aria-label="Permalink to &quot;四次挥手原因&quot;">​</a></h6><p>服务端在收到客户端断开连接 <code>Fin</code> 报文后，并不会立即关闭连接，而是先发送一个 <code>ACK</code> 包先告诉客户端收到关闭连接的请求，只有当服务器的所有报文发送完毕之后，才发送 <code>FIN</code> 报文断开连接，因此需要四次挥手</p></details><h2 id="跨域" tabindex="-1">跨域 <a class="header-anchor" href="#跨域" aria-label="Permalink to &quot;跨域&quot;">​</a></h2><details class="details custom-block"><summary>答案</summary><p>当前页面中的某个接口请求的地址和当前页面的地址如果协议、域名、端口其中有一项不同，就说该接口跨域了。 跨域限制的原因：浏览器为了保证网页的安全，出的同源协议策略</p><ol><li><p>JSONP（前端体系课有完整且详细的介绍）</p><ol><li>甲站点利用 script 标签可以跨域的特性，向乙站点发送 get 请求。</li></ol><ol start="2"><li>乙站点<strong>后端改造</strong> JS 文件的内容，将数据传进回调函数。</li></ol><ol start="3"><li>甲站点通过回调函数拿到乙站点的数据。</li></ol></li></ol><ol start="2"><li><p>CORS（前端体系课有完整且详细的介绍）</p><ol><li>对于简单请求，乙站点在响应头里添加 <code>Access-Control-Allow-Origin: http://甲站点</code> 即可。</li></ol><ol start="2"><li><p>对于复杂请求，如 PATCH，乙站点需要：</p><ol><li>响应 OPTIONS 请求，在响应中添加如下的响应头 makefile 复制代码 Access-Control-Allow-Origin: <a href="https://xn--3px78gbyf" target="_blank" rel="noreferrer">https://甲站点</a> Access-Control-Allow-Methods: POST, GET, OPTIONS, PATCH Access-Control-Allow-Headers: Content-Type</li></ol><ol start="2"><li>响应 POST 请求，在响应中添加 <code>Access-Control-Allow-Origin</code> 头。</li></ol></li></ol><ol start="3"><li>如果需要附带身份信息，JS 中需要在 AJAX 里设置 <code>xhr.withCredentials = true</code> 。</li></ol></li></ol><ol><li><p>Nginx 代理</p><ol><li>前端 ⇒ 后端 ⇒ 另一个域名的后端</li></ol></li></ol></details><h2 id="cookie、session、localstorage、sessionstorage" tabindex="-1">Cookie、Session、localStorage、sessionStorage <a class="header-anchor" href="#cookie、session、localstorage、sessionstorage" aria-label="Permalink to &quot;Cookie、Session、localStorage、sessionStorage&quot;">​</a></h2><details class="details custom-block"><summary>答案</summary><p>这些是存储数据的方式，但它们有不同的特点和用途：</p><h3 id="cookie" tabindex="-1">Cookie： <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;Cookie：&quot;">​</a></h3><ul><li><strong>存储位置：</strong> 存储在客户端，每次请求都会携带在请求头中。</li><li><strong>大小限制：</strong> 每个 cookie 通常最大可存储 4KB 左右的数据。</li><li><strong>生命周期：</strong> 可以设置过期时间，可以是会话级的（关闭浏览器后失效）或长期有效。</li><li><strong>作用域：</strong> 可以设置作用域（Domain），控制哪些页面可以访问该 cookie。</li><li><strong>安全性：</strong> 可以设置 HttpOnly 属性，防止客户端脚本访问。</li></ul><h3 id="session" tabindex="-1">Session： <a class="header-anchor" href="#session" aria-label="Permalink to &quot;Session：&quot;">​</a></h3><ul><li><strong>存储位置：</strong> 存储在服务器端，客户端通过唯一的标识符（通常是 Session ID）与服务器进行交互。</li><li><strong>大小限制：</strong> 理论上没有存储上限，但实际上服务器会设置最大存储容量。</li><li><strong>生命周期：</strong> 随着用户会话结束而销毁，通常在一定时间内没有活动会话会过期。</li><li><strong>作用域：</strong> 限定在特定用户的会话范围内。</li><li><strong>安全性：</strong> 更安全，数据存储在服务器端，客户端无法直接访问。</li></ul><h3 id="localstorage" tabindex="-1">localStorage： <a class="header-anchor" href="#localstorage" aria-label="Permalink to &quot;localStorage：&quot;">​</a></h3><ul><li><strong>存储位置：</strong> 存储在客户端，没有过期时间，除非主动清除。</li><li><strong>大小限制：</strong> 通常可存储 5MB 左右的数据。</li><li><strong>生命周期：</strong> 永久存储，除非清除或被 JavaScript 删除。</li><li><strong>作用域：</strong> 存储在同一个源（origin）下的所有页面共享。</li><li><strong>安全性：</strong> 与 Cookie 类似，可以被客户端脚本访问，可能受到 XSS 攻击影响。</li></ul><h3 id="sessionstorage" tabindex="-1">sessionStorage： <a class="header-anchor" href="#sessionstorage" aria-label="Permalink to &quot;sessionStorage：&quot;">​</a></h3><ul><li><strong>存储位置：</strong> 存储在客户端，与页面会话相关，页面关闭后数据会被清除。</li><li><strong>大小限制：</strong> 通常可存储 5MB 左右的数据。</li><li><strong>生命周期：</strong> 存在于当前页面会话中，页面关闭后数据清除。</li><li><strong>作用域：</strong> 仅在同一个标签页下的所有页面共享。</li><li><strong>安全性：</strong> 与 localStorage 类似，可能受到 XSS 攻击影响。</li></ul><h3 id="异同" tabindex="-1">异同： <a class="header-anchor" href="#异同" aria-label="Permalink to &quot;异同：&quot;">​</a></h3><ul><li><strong>存储位置：</strong> Cookie 和 Session 存储在服务器和客户端，而 localStorage 和 sessionStorage 存储在客户端。</li><li><strong>大小限制：</strong> Cookie、localStorage 和 sessionStorage 都有存储大小的限制。</li><li><strong>生命周期：</strong> Cookie 可以设置过期时间，Session 在会话结束后失效，localStorage 永久存储，sessionStorage 在页面关闭后清除。</li></ul><p>选择使用哪种方式取决于数据的安全性、生命周期、大小和需求。</p></details>',20),s=[r];function n(d,h,c,u,p,P){return a(),t("div",null,s)}const b=l(e,[["render",n]]);export{T as __pageData,b as default};
