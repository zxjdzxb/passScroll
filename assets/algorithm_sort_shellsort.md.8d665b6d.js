import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.2576a40d.js";const p="/passScroll/assets/shellsort.f17914ea.png",C=JSON.parse('{"title":"希尔排序","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/sort/shellsort.md","filePath":"algorithm/sort/shellsort.md","lastUpdated":1703238016000}'),o={name:"algorithm/sort/shellsort.md"},e=l('<h1 id="希尔排序" tabindex="-1">希尔排序 <a class="header-anchor" href="#希尔排序" aria-label="Permalink to &quot;希尔排序&quot;">​</a></h1><h2 id="_1-希尔排序的介绍" tabindex="-1">（1）希尔排序的介绍 <a class="header-anchor" href="#_1-希尔排序的介绍" aria-label="Permalink to &quot;（1）希尔排序的介绍&quot;">​</a></h2><p>希尔排序（Shell Sort）是一种改进的插入排序算法，也被称为缩小增量排序。</p><p>它通过将待排序的数组按照一定的增量分组，对每个分组使用插入排序，然后逐步缩小增量，再次对分组进行插入排序，直到增量为1时完成最后一次排序。</p><h2 id="_2-描述" tabindex="-1">（2）描述 <a class="header-anchor" href="#_2-描述" aria-label="Permalink to &quot;（2）描述&quot;">​</a></h2><ul><li>选择一个增量序列 t1，t2，……，tk，其中 ti &gt; tj, tk = 1；</li><li>按增量序列个数 k，对序列进行 k 趟排序；</li><li>每趟排序，根据对应的增量 ti，将待排序列分割成若干长度为 m 的子序列，分别对各子表进行直接插入排序。仅增量因子为 1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。</li></ul><h2 id="_3-图片演示" tabindex="-1">（3）图片演示 <a class="header-anchor" href="#_3-图片演示" aria-label="Permalink to &quot;（3）图片演示&quot;">​</a></h2><p><img src="'+p+`" alt="希尔排序"></p><h2 id="_4-代码示例" tabindex="-1">（4）代码示例 <a class="header-anchor" href="#_4-代码示例" aria-label="Permalink to &quot;（4）代码示例&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">shellSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">arr</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arr.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> gap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(len </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 初始增量为数组长度的一半</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (gap </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gap; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> len; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arr[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> gap </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> arr[j </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> gap] </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> current) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        arr[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arr[j </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> gap];</span></span>
<span class="line"><span style="color:#E1E4E8;">        j </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> gap;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      arr[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> current;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    gap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(gap </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 缩小增量</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> arr;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">arr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">34</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">39</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">56</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">shellSort</span><span style="color:#E1E4E8;">(arr)); </span><span style="color:#6A737D;">// [1, 2,  5,  7,  7, 8, 9, 12, 34, 39, 56]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">shellSort</span><span style="color:#24292E;">(</span><span style="color:#E36209;">arr</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">len</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> gap </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">floor</span><span style="color:#24292E;">(len </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 初始增量为数组长度的一半</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (gap </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> gap; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr[i];</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (j </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> gap </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> arr[j </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> gap] </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> current) {</span></span>
<span class="line"><span style="color:#24292E;">        arr[j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr[j </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> gap];</span></span>
<span class="line"><span style="color:#24292E;">        j </span><span style="color:#D73A49;">-=</span><span style="color:#24292E;"> gap;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      arr[j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> current;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    gap </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">floor</span><span style="color:#24292E;">(gap </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 缩小增量</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> arr;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">34</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">39</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">56</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">shellSort</span><span style="color:#24292E;">(arr)); </span><span style="color:#6A737D;">// [1, 2,  5,  7,  7, 8, 9, 12, 34, 39, 56]</span></span></code></pre></div><p>在希尔排序中，初始增量（间隔）取数组长度的一半，然后依次将数组分成多个增量间隔的子序列，对每个子序列进行插入排序。 随着排序的进行，逐渐缩小增量，直到增量为1时，最后一次排序等价于普通的插入排序。 希尔排序的核心思想是利用较大的步长进行初步的粗略排序，然后逐渐减小步长，对子序列进行更精细的排序。</p><p>希尔排序的时间复杂度并不容易确定，因为它取决于增量序列的选择。最坏情况下的时间复杂度为O(n^2)，但在一般情况下，希尔排序的时间复杂度在O(n log n)到O(n^2)之间。希尔排序相较于普通的插入排序在效率上有所提升，尤其对于大型数组或者部分有序的数组，它的性能较好。</p>`,12),r=[e];function t(c,E,y,i,F,h){return a(),n("div",null,r)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};