import{_ as l,o,c as p,Q as n,k as s,a}from"./chunks/framework.2576a40d.js";const C=JSON.parse('{"title":"JavaScript","description":"","frontmatter":{},"headers":[],"relativePath":"interview/javascript.md","filePath":"interview/javascript.md","lastUpdated":1702030743000}'),e={name:"interview/javascript.md"},c=n("",22),t=s("details",{class:"details custom-block"},[s("summary",null,"答案"),s("h3",{id:"浅拷贝-shallow-copy",tabindex:"-1"},[a("浅拷贝（Shallow Copy）： "),s("a",{class:"header-anchor",href:"#浅拷贝-shallow-copy","aria-label":'Permalink to "浅拷贝（Shallow Copy）："'},"​")]),s("p",null,"浅拷贝会创建一个新的对象或数组，并复制原始对象或数组的基本数据结构，但是对于嵌套的对象或数组，它们只会复制引用，而不是创建全新的对象或数组。"),s("ul",null,[s("li",null,"Object.assign({}, sourceObject)"),s("li",{"css-module":".sourceObject"},"扩展运算符"),s("li",null,"Array.slice()"),s("li",null,"Array.concat()")]),s("div",{class:"language-javascript vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 浅拷贝示例")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"originalObject"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  a: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  b: {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    c: "),s("span",{style:{color:"#79B8FF"}},"2")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"shallowCopy"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," Object."),s("span",{style:{color:"#B392F0"}},"assign"),s("span",{style:{color:"#E1E4E8"}},"({}, originalObject);")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 修改原始对象中的嵌套对象")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"originalObject.b.c "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"3"),s("span",{style:{color:"#E1E4E8"}},";")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(shallowCopy.b.c); "),s("span",{style:{color:"#6A737D"}},"// 输出: 3（因为嵌套对象是引用复制，所以修改了原始对象也会影响浅拷贝的对象）")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 浅拷贝示例")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"originalObject"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  a: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  b: {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    c: "),s("span",{style:{color:"#005CC5"}},"2")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"};")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"shallowCopy"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," Object."),s("span",{style:{color:"#6F42C1"}},"assign"),s("span",{style:{color:"#24292E"}},"({}, originalObject);")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 修改原始对象中的嵌套对象")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"originalObject.b.c "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"3"),s("span",{style:{color:"#24292E"}},";")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(shallowCopy.b.c); "),s("span",{style:{color:"#6A737D"}},"// 输出: 3（因为嵌套对象是引用复制，所以修改了原始对象也会影响浅拷贝的对象）")])])])]),s("h3",{id:"深拷贝-deep-copy",tabindex:"-1"},[a("深拷贝（Deep Copy）： "),s("a",{class:"header-anchor",href:"#深拷贝-deep-copy","aria-label":'Permalink to "深拷贝（Deep Copy）："'},"​")]),s("p",null,"深拷贝会创建一个全新的对象或数组，不仅复制原始对象或数组的基本数据结构，还会递归复制所有的嵌套对象或数组，确保每个对象都是全新的。"),s("div",{class:"language-javascript vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 深拷贝示例")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"originalObject"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  a: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  b: {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    c: "),s("span",{style:{color:"#79B8FF"}},"2")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"deepCopy"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"JSON"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#B392F0"}},"parse"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"JSON"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#B392F0"}},"stringify"),s("span",{style:{color:"#E1E4E8"}},"(originalObject));")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 修改原始对象中的嵌套对象")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"originalObject.b.c "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"3"),s("span",{style:{color:"#E1E4E8"}},";")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(deepCopy.b.c); "),s("span",{style:{color:"#6A737D"}},"// 输出: 2（因为进行了深拷贝，所以修改原始对象不会影响深拷贝的对象）")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 深拷贝示例")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"originalObject"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  a: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  b: {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    c: "),s("span",{style:{color:"#005CC5"}},"2")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"};")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"deepCopy"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"JSON"),s("span",{style:{color:"#24292E"}},"."),s("span",{style:{color:"#6F42C1"}},"parse"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"JSON"),s("span",{style:{color:"#24292E"}},"."),s("span",{style:{color:"#6F42C1"}},"stringify"),s("span",{style:{color:"#24292E"}},"(originalObject));")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 修改原始对象中的嵌套对象")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"originalObject.b.c "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"3"),s("span",{style:{color:"#24292E"}},";")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(deepCopy.b.c); "),s("span",{style:{color:"#6A737D"}},"// 输出: 2（因为进行了深拷贝，所以修改原始对象不会影响深拷贝的对象）")])])])]),s("h3",{id:"总结",tabindex:"-1"},[a("总结： "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结："'},"​")]),s("ul",null,[s("li",null,"浅拷贝只复制基本数据结构和引用，而不会递归复制嵌套对象或数组。"),s("li",null,[a("深拷贝会递归复制所有的对象和数组，确保每个对象都是全新的。然而，使用 "),s("code",null,"JSON.parse(JSON.stringify(object))"),a(" 进行深拷贝时，可能会忽略一些特殊类型的数据（如函数、正则表达式、循环引用等），因此需要谨慎使用。")])])],-1),r=n("",35),y=[c,t,r];function E(i,d,u,F,h,g){return o(),p("div",null,y)}const A=l(e,[["render",E]]);export{C as __pageData,A as default};
