# HTML

## 如何理解 HTML 中的语义化标签

::: details
* 让人更容易读懂（增加代码可读性）。
* 让搜索引擎更容易读懂，有助于爬虫抓取更多的有效信息，爬虫依赖于标签来确定上下文和各个关键字的权重（SEO）。
* 在没有 CSS 样式下，页面也能呈现出很好地内容结构、代码结构。
1. 是什么：语义化标签是一种写 HTML 标签的方法论/方式。
2. 怎么做：实现方法是遇到标题就用 h1 到 h6，遇到段落用 p，遇到文章用 article，主要内容用 main，边栏用 aside，导航用 nav……（就是找到中文对应的英文）
3. 解决了什么问题：明确了 HTML 的书写规范
:::
总结：「是什么、怎么做、解决了什么问题、优点是、缺点是、怎么解决缺点」

## src和href的区别

::: details
* src和href都是用来引用外部的资源

1. src： 表示对资源的引用，它指向的内容会嵌入到当前标签所在的位置。src会将其指向的资源下载并应⽤到⽂档内，如请求js脚本。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执⾏完毕，所以⼀般js脚本会放在页面底部。
2. href： 表示超文本引用，它指向一些网络资源，建立和当前元素或本文档的链接关系。当浏览器识别到它他指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理。 常用在a、link等标签上。
:::

## script标签中defer和async的区别

::: details
`defer` 和 `async` 是用于控制脚本加载和执行时机的标签属性，它们有着不同的行为：
1. **`defer`**：
   - 脚本会被延迟加载，但会在文档解析完成之后立即执行。
   - 多个带有 `defer` 属性的脚本会按照它们在文档中出现的顺序依次执行。
   - 它们会在 `DOMContentLoaded` 事件之前执行，确保脚本在文档解析完成后执行，但在 `DOMContentLoaded` 事件触发前完成执行。

```html
<script src="script.js" defer></script>
```

2. **`async`**：
   - 脚本会异步加载，加载完成后会立即执行，但是不会阻塞文档的解析。
   - 多个带有 `async` 属性的脚本不会按照它们在文档中出现的顺序依次执行，而是先加载完毕就立即执行。因此它们的执行顺序不确定。

```html
<script src="script.js" async></script>
```

**区别总结**：
* `defer` 保证脚本按照它们在文档中的顺序执行，并在 `DOMContentLoaded` 事件之前执行。
* `async` 允许脚本异步加载，并且不保证执行顺序，它们会在加载完成后立即执行，不会阻塞文档解析。
选择使用哪个取决于你的需求：如果脚本之间有顺序要求，并且需要在文档解析完成前执行，可以使用 `defer` 。如果脚本之间无依赖关系，并且不影响文档解析，可以考虑使用 `async` 来提高加载性能。
:::

## HTML5有哪些更新

::: details
HTML5 带来了许多更新和新功能，让 Web 开发变得更强大和灵活。其中一些重要的更新包括：
1. **语义化标签**：
   - 引入了语义化标签，如 `<header>` 、 `<footer>` 、 `<nav>` 、 `<article>` 、 `<section>` 等，使得页面结构更加清晰和语义化，有利于搜索引擎优化和可访问性。
2. **多媒体支持**：
   - `<video>` 和 `<audio>` 标签的引入，使得在网页中嵌入视频和音频变得更容易。支持直接在页面中播放视频和音频内容，不再依赖第三方插件。
3. **Canvas 和 SVG**：
   - `<canvas>` 标签提供了一个用于通过 JavaScript 进行绘图的元素，适用于实时图形生成。SVG（可伸缩矢量图形）则允许使用 XML 描述图形。
4. **表单控件**：
   - 引入了新的表单元素和属性，如日期选择器 `<input type="date">` 、颜色选择器 `<input type="color">` 、验证属性等，简化了表单设计和用户输入验证。
5. **本地存储**：
   - 提供了 `localStorage` 和 `sessionStorage` ，允许网页在客户端存储数据，使得离线数据存储和客户端会话管理更为简便。
HTML5 的这些更新和功能增强，为开发者提供了更多的工具和选择，使得 Web 开发更加灵活和强大。
:::

## Canvas 和 SVG 的区别是什么？

::: details
Canvas 和 SVG 都是用于创建图形的技术，但它们有一些重要的区别：
1. **绘图模型**：
   - **Canvas**：基于位图的绘图模型，它通过 JavaScript 脚本绘制像素。Canvas 是一个空白的 HTML 元素，你可以通过 JavaScript 绘制在其上。它是即时渲染的，意味着一旦绘制完成，要修改已绘制的图形就需要重新绘制整个场景。
   - **SVG**：基于矢量图形的绘图模型，使用 XML 格式描述图形。SVG 元素是在文档中以 XML 形式存在的，可以通过代码或者 SVG 编辑器创建和修改。它以对象模型的形式构建图形，允许对图形的每个部分进行访问和操作。
2. **图形渲染**：
   - **Canvas**：绘制的内容是像素化的，一旦绘制完成，就成为静态图像，如果需要交互或者修改，需要重新绘制整个场景。
   - **SVG**：以矢量方式描述图形，因此无论放大缩小都能保持清晰度，也更容易进行动态修改和交互。
3. **性能**：
   - **Canvas**：适合处理大量的像素级绘制，因为它对于每个像素的操作更为高效。
   - **SVG**：处理复杂图形或需要频繁修改的图形时更具优势，因为它允许针对对象进行操作。
4. **文档结构**：
   - **Canvas**：是一个 HTML 元素，不会添加到文档对象模型 (DOM) 中。
   - **SVG**：以 XML 形式存在，作为文档中的 DOM 元素。
根据需要选择使用 Canvas 还是 SVG。如果需要处理复杂的图形或需要进行交互和动态修改，SVG 可能更适合。如果需要处理大量像素级绘制或者需要高性能的绘图，Canvas 可能更适合。
:::

# CSS

## css选择器优先级？哪些属性可以继承？

::: details
样式的优先级一般为  `!important` > `style(内联样式)` > `id(选择器）` > `class（选择器）` > `标签选择器`

1. 可继承：
* visibility 元素可见性
* 字体系列：font-weight 粗细、font-size 大小、font-style 风格
* 文本系列：text-indent 缩进、text-align 水平对齐、color 颜色、line-height 行高
2. 不可继承：
display、盒子模型、定位浮动、背景属性
:::

##  display的属性值及其作用

::: details
| 属性        | 作用                                                                                     |
|------------|------------------------------------------------------------------------------------------|
| none       | 元素不显示，并且会从文档流中移除。                                                       |
| block      | 块类型。默认宽度为父元素宽度，可设置宽高，换行显示。                                     |
| inline     | 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。                                |
| inline-block | 默认宽度为内容宽度，可以设置宽高，同行显示。                                            |
| list-item  | 像块类型元素一样显示，并添加样式列表标记。                                                |
| table      | 此元素会作为块级表格来显示。                                                             |
| inherit    | 规定应该从父元素继承 display 属性的值。                                                 |
:::

## 两种盒模型

::: details
*   标准盒模型：元素的宽度和高度只包括内容（content），不包括内边距（padding）、边框（border）和外边距（margin）。

> 实际宽度\高度 = width\height

*   IE盒模型：元素的宽度和高度包括内容（content）、内边距（padding）和边框（border），但不包括外边距（margin）。

> 实际宽度\高度 = width\height + padding + border

:::

## 伪元素和伪类的区别和作用？

::: details
伪元素：在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：

```css
p::before {
  content: "第一章：";
}

p::after {
  content: "Hot!";
}

p::first-line {
  background: red;
}

p::first-letter {
  font-size: 30px;
}
```

伪类：将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：

```css
a:hover {
  color: #FF00FF
}

p:first-child {
  color: red
}
```

总结： 伪类是通过在元素选择器上加⼊伪类改变元素状态，⽽伪元素通过对元素的操作进⾏对元素的改变。
:::

## 单行、多行文本溢出

::: details
单行、多行文本溢出隐藏
* 单行文本溢出

```css
overflow: hidden; // 溢出隐藏
text-overflow: ellipsis; // 溢出用省略号显示
white-space: nowrap; // 规定段落中的文本不进行换行
```

* 多行文本溢出

```css
overflow: hidden; // 溢出隐藏
text-overflow: ellipsis; // 溢出用省略号显示
display:-webkit-box; // 作为弹性伸缩盒子模型显示。
-webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
-webkit-line-clamp:3; // 显示的行数
```

注意：由于上面的三个属性都是 CSS3 的属性，没有浏览器可以兼容，所以要在前面加一个-webkit- 来兼容一部分浏览器。
:::

## flex布局

[Flex布局](https://juejin.cn/post/7141301268701511693)

## grid布局

[通俗重制系列--Grid布局](https://juejin.cn/post/7141732706148155405)
考点
*   Grid布局的概念、用途
核心点
*   概念：Grid布局即网格布局，是一种二维的布局方式
    -   Grid Container：Grid的容器
    -   Grid Item：Grid容器的直接子元素
*   用途：
    1.  居中布局
    2.  两列、三列布局等
*   缺点
    -   总体兼容性不错，当IE10以下不支持
    -   手机端支持不太友好

##  px、em、rem的区别及使用场景

::: details
1. 三者的区别：
* px是固定的像素，一旦设置了就无法因为适应页面大小而改变。
* em和rem相对于px更具有灵活性，他们是相对长度单位，其长度不是固定的，更适用于响应式布局。
* em是相对于其父元素来设置字体大小，这样就会存在一个问题，进行任何元素设置，都有可能需要知道他父元素的大小。而rem是相对于根元素，这样就意味着，只需要在根元素确定一个参考值。
2. 使用场景：
* 对于只需要适配少部分移动设备，且分辨率对页面影响不大的，使用px即可 。
* 对于需要适配各种移动设备，使用rem，例如需要适配iPhone和iPad等分辨率差别比较挺大的设备。
:::

## 垂直居中

::: details
实现元素水平垂直居中的方式：
*   利用定位+margin:auto
*   利用定位+margin: 负值
*   利用定位+transform
*   table布局
*   flex布局
*   grid布局
:::

## 两栏布局的实现

一般两栏布局指的是左边一栏宽度固定，右边一栏宽度自适应，两栏布局的具体实现：
* 使用 float 左浮左边栏
* 右边模块使用 margin-left 撑出内容块做内容展示
* 为父级元素添加BFC，防止下方元素飞到上方内容
::: details
利用浮动，将左边元素宽度设置为200px，并且设置向左浮动。将右边元素的margin-left设置为200px，宽度设置为auto（默认为auto，撑满整个父元素）。

```css
.outer {
  height: 100px;
}

.left {
  float: left;
  width: 200px;
  background: tomato;
}

.right {
  margin-left: 200px;
  width: auto;
  background: gold;
}
```

利用浮动，左侧元素设置固定大小，并左浮动，右侧元素设置overflow: hidden; 这样右边就触发了BFC，BFC的区域不会与浮动元素发生重叠，所以两侧就不会发生重叠。

```css
.left {
  width: 100px;
  height: 200px;
  background: red;
  float: left;
}

.right {
  height: 300px;
  background: blue;
  overflow: hidden;
}
```

利用flex布局，将左边元素设置为固定宽度200px，将右边的元素设置为flex:1。

```css
.outer {
  display: flex;
  height: 100px;
}

.left {
  width: 200px;
  background: tomato;
}

.right {
  flex: 1;
  background: gold;
}
```

利用绝对定位，将父级元素设置为相对定位。左边元素设置为absolute定位，并且宽度设置为200px。将右边元素的margin-left的值设置为200px。

```css
.outer {
  position: relative;
  height: 100px;
}

.left {
  position: absolute;
  width: 200px;
  height: 100px;
  background: tomato;
}

.right {
  margin-left: 200px;
  background: gold;
}
```

利用绝对定位，将父级元素设置为相对定位。左边元素宽度设置为200px，右边元素设置为绝对定位，左边定位为200px，其余方向定位为0。

```css
.outer {
  position: relative;
  height: 100px;
}

.left {
  width: 200px;
  background: tomato;
}

.right {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 200px;
  background: gold;
}
```

:::

## 三栏布局的实现

三栏布局一般指的是页面中一共有三栏，左右两栏宽度固定，中间自适应的布局，三栏布局的具体实现：
*   两边使用 float，中间使用 margin
*   两边使用 absolute，中间使用 margin
*   两边使用 float 和负 margin
*   display: table 实现
*   flex实现
*   grid网格布局
::: details
利用绝对定位，左右两栏设置为绝对定位，中间设置对应方向大小的margin的值。

```css
.outer {
  position: relative;
  height: 100px;
}

.left {
  position: absolute;
  width: 100px;
  height: 100px;
  background: tomato;
}

.right {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100px;
  background: gold;
}

.center {
  margin-left: 100px;
  margin-right: 200px;
  height: 100px;
  background: lightgreen;
}
```

利用flex布局，左右两栏设置固定大小，中间一栏设置为flex:1。

```css
.outer {
  display: flex;
  height: 100px;
}

.left {
  width: 100px;
  background: tomato;
}

.right {
  width: 100px;
  background: gold;
}

.center {
  flex: 1;
  background: lightgreen;
}
```

利用浮动，左右两栏设置固定大小，并设置对应方向的浮动。中间一栏设置左右两个方向的margin值，注意这种方式**，中间一栏必须放到最后：**

```css
.outer {
  height: 100px;
}

.left {
  float: left;
  width: 100px;
  height: 100px;
  background: tomato;
}

.right {
  float: right;
  width: 200px;
  height: 100px;
  background: gold;
}

.center {
  height: 100px;
  margin-left: 100px;
  margin-right: 200px;
  background: lightgreen;
}
```

圣杯布局，利用浮动和负边距来实现。父级元素设置左右的 padding，三列均设置向左浮动，中间一列放在最前面，宽度设置为父级元素的宽度，因此后面两列都被挤到了下一行，通过设置 margin 负值将其移动到上一行，再利用相对定位，定位到两边。

```css
.outer {
  height: 100px;
  padding-left: 100px;
  padding-right: 200px;
}

.left {
  position: relative;
  left: -100px;
  float: left;
  margin-left: -100%;
  width: 100px;
  height: 100px;
  background: tomato;
}

.right {
  position: relative;
  left: 200px;
  float: right;
  margin-left: -200px;
  width: 200px;
  height: 100px;
  background: gold;
}

.center {
  float: left;
  width: 100%;
  height: 100px;
  background: lightgreen;
}
```

双飞翼布局，双飞翼布局相对于圣杯布局来说，左右位置的保留是通过中间列的 margin 值来实现的，而不是通过父元素的 padding 来实现的。本质上来说，也是通过浮动和外边距负值来实现的。

```css
.outer {
  height: 100px;
}

.left {
  float: left;
  margin-left: -100%;
  width: 100px;
  height: 100px;
  background: tomato;
}

.right {
  float: left;
  margin-left: -200px;
  width: 200px;
  height: 100px;
  background: gold;
}

.wrapper {
  float: left;
  width: 100%;
  height: 100px;
  background: lightgreen;
}

.center {
  margin-left: 100px;
  margin-right: 200px;
  height: 100px;
}
```

:::
 ## 为什么需要清除浮动？清除浮动的方式
::: details
1. 浮动的作用：常用于图片，可以实现文字环绕图片。
2. 浮动的特点：脱离文档流，容易造成盒子塌陷，影响其他元素的排列。
3. 解决塌陷问题：
* 父元素中添加overflow:hidden
* 给父元素添加高度、建立空白标签
* 添加clear
* 或者在父级添加伪元素

```css
/* CSS */
.clearfix:after {
  content: "\200B";
  display: table;
  height: 0;
  clear: both;
}

.clearfix {
  *zoom: 1;
}
```

:::

## BFC 是什么

:::details
**是什么：**
避免回答，直接把 BFC 翻译成中文「**块级格式化上下文，独立的渲染区域**」即可，千万别解释。
**怎么做：**
背诵 BFC 触发条件，虽然 [MDN 的这篇文章](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context) 列举了所有触发条件，但本押题告诉你只用背这几个就行了
*   浮动元素（元素的 float 不是 none）
<!---->
*   绝对定位元素（元素的 position 为 absolute 或 fixed）
<!---->
* display 值为：inline-block、table-cell、table-caption、flex等
<!---->
*   overflow 值不为 visible 的块元素
**解决了什么问题：**
1.  清除浮动（为什么不用 .clearfix 呢？）
<!---->
2.  防止 margin 合并
解决margin的重叠问题：由于BFC是一个独立的区域，内部的元素和外部的元素互不影响，将两个元素变为两个BFC，就解决了margin重叠的问题。
解决高度塌陷的问题：在对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为0。解决这个问题，只需要把父元素变成一个BFC。常用的办法是给父元素设置overflow:hidden。
创建自适应两栏布局：可以用来创建自适应两栏布局：左边的宽度固定，右边的宽度自适应。
**优点：** 无。
**缺点：** 有副作用。
**怎么解决缺点：** 使用最新的 `display: flow-root` 来触发 BFC 就没有副作用了，但是很多人不知道。
:::
 ## 实现一个三角形
 ::: details

```HTML
<div></div>
```

```CSS
div {
  width: 0;
  height: 0;
  border: 10px solid red;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
}
```

 :::
