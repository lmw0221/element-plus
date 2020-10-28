(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{459:function(e,t,l){"use strict";l.r(t);var n=l(0);const d={class:"content element-doc"},c=Object(n.createVNode)("h2",{id:"layout-bu-ju"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#layout-bu-ju"},"¶"),Object(n.createTextVNode)(" Layout 布局")],-1),o=Object(n.createVNode)("p",null,"通过基础的 24 分栏，迅速简便地创建布局。",-1),r=Object(n.createVNode)("h3",{id:"ji-chu-bu-ju"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#ji-chu-bu-ju"},"¶"),Object(n.createTextVNode)(" 基础布局")],-1),a=Object(n.createVNode)("p",null,"使用单一分栏创建基础的栅格布局。",-1),s=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("通过 row 和 col 组件，并通过 col 组件的 "),Object(n.createVNode)("code",null,"span"),Object(n.createTextVNode)(" 属性我们就可以自由地组合布局。")])],-1),i=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-row>\n  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>\n</el-row>\n<el-row>\n  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>\n</el-row>\n<el-row>\n  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>\n  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>\n</el-row>\n<el-row>\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>\n</el-row>\n<el-row>\n  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>\n  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>\n  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n')],-1),p=Object(n.createVNode)("h3",{id:"fen-lan-jian-ge"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#fen-lan-jian-ge"},"¶"),Object(n.createTextVNode)(" 分栏间隔")],-1),u=Object(n.createVNode)("p",null,"分栏之间存在间隔。",-1),g=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Row 组件 提供 "),Object(n.createVNode)("code",null,"gutter"),Object(n.createTextVNode)(" 属性来指定每一栏之间的间隔，默认间隔为 0。")])],-1),b=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-row :gutter="20">\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n')],-1),h=Object(n.createVNode)("h3",{id:"hun-he-bu-ju"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#hun-he-bu-ju"},"¶"),Object(n.createTextVNode)(" 混合布局")],-1),f=Object(n.createVNode)("p",null,"通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。",-1),v=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-row :gutter="20">\n  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>\n</el-row>\n<el-row :gutter="20">\n  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>\n</el-row>\n<el-row :gutter="20">\n  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n')],-1),j=Object(n.createVNode)("h3",{id:"fen-lan-pian-yi"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#fen-lan-pian-yi"},"¶"),Object(n.createTextVNode)(" 分栏偏移")],-1),m=Object(n.createVNode)("p",null,"支持偏移指定的栏数。",-1),x=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("通过制定 col 组件的 "),Object(n.createVNode)("code",null,"offset"),Object(n.createTextVNode)(" 属性可以指定分栏偏移的栏数。")])],-1),O=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-row :gutter="20">\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>\n</el-row>\n<el-row :gutter="20">\n  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>\n</el-row>\n<el-row :gutter="20">\n  <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n')],-1),w=Object(n.createVNode)("h3",{id:"dui-qi-fang-shi"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#dui-qi-fang-shi"},"¶"),Object(n.createTextVNode)(" 对齐方式")],-1),N=Object(n.createVNode)("p",null,[Object(n.createTextVNode)("通过 "),Object(n.createVNode)("code",null,"flex"),Object(n.createTextVNode)(" 布局来对分栏进行灵活的对齐。")],-1),V=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("将 "),Object(n.createVNode)("code",null,"type"),Object(n.createTextVNode)(" 属性赋值为 'flex'，可以启用 flex 布局，并可通过 "),Object(n.createVNode)("code",null,"justify"),Object(n.createTextVNode)(" 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。")])],-1),_=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-row type="flex" class="row-bg">\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n</el-row>\n<el-row type="flex" class="row-bg" justify="center">\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n</el-row>\n<el-row type="flex" class="row-bg" justify="end">\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n</el-row>\n<el-row type="flex" class="row-bg" justify="space-between">\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n</el-row>\n<el-row type="flex" class="row-bg" justify="space-around">\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>\n  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n')],-1),y=Object(n.createStaticVNode)('<h3 id="xiang-ying-shi-bu-ju"><a class="header-anchor" href="#xiang-ying-shi-bu-ju">¶</a> 响应式布局</h3><p>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code> 和 <code>xl</code>。</p>',2),k=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-row :gutter="10">\n  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>\n  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>\n  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>\n</el-row>\n\n<style>\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n</style>\n')],-1),C=Object(n.createStaticVNode)('<h3 id="ji-yu-duan-dian-de-yin-cang-lei"><a class="header-anchor" href="#ji-yu-duan-dian-de-yin-cang-lei">¶</a> 基于断点的隐藏类</h3><p>Element Plus 额外提供了一系列类名，用于在某些条件下隐藏元素。这些类名可以添加在任何 DOM 元素或自定义组件上。如果需要，请自行引入以下文件：</p><pre><code class="hljs language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;element-plus/lib/theme-chalk/display.css&#39;</span>;\n</code></pre><p>包含的类名及其含义为：</p><ul><li><code>hidden-xs-only</code> - 当视口在 <code>xs</code> 尺寸时隐藏</li><li><code>hidden-sm-only</code> - 当视口在 <code>sm</code> 尺寸时隐藏</li><li><code>hidden-sm-and-down</code> - 当视口在 <code>sm</code> 及以下尺寸时隐藏</li><li><code>hidden-sm-and-up</code> - 当视口在 <code>sm</code> 及以上尺寸时隐藏</li><li><code>hidden-md-only</code> - 当视口在 <code>md</code> 尺寸时隐藏</li><li><code>hidden-md-and-down</code> - 当视口在 <code>md</code> 及以下尺寸时隐藏</li><li><code>hidden-md-and-up</code> - 当视口在 <code>md</code> 及以上尺寸时隐藏</li><li><code>hidden-lg-only</code> - 当视口在 <code>lg</code> 尺寸时隐藏</li><li><code>hidden-lg-and-down</code> - 当视口在 <code>lg</code> 及以下尺寸时隐藏</li><li><code>hidden-lg-and-up</code> - 当视口在 <code>lg</code> 及以上尺寸时隐藏</li><li><code>hidden-xl-only</code> - 当视口在 <code>xl</code> 尺寸时隐藏</li></ul><h3 id="row-attributes"><a class="header-anchor" href="#row-attributes">¶</a> Row Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>gutter</td><td>栅格间隔</td><td>number</td><td>—</td><td>0</td></tr><tr><td>type</td><td>布局模式，可选 flex，现代浏览器下有效</td><td>string</td><td>—</td><td>—</td></tr><tr><td>justify</td><td>flex 布局下的水平排列方式</td><td>string</td><td>start/end/center/space-around/space-between</td><td>start</td></tr><tr><td>align</td><td>flex 布局下的垂直排列方式</td><td>string</td><td>top/middle/bottom</td><td>top</td></tr><tr><td>tag</td><td>自定义元素标签</td><td>string</td><td>*</td><td>div</td></tr></tbody></table><h3 id="col-attributes"><a class="header-anchor" href="#col-attributes">¶</a> Col Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>span</td><td>栅格占据的列数</td><td>number</td><td>—</td><td>24</td></tr><tr><td>offset</td><td>栅格左侧的间隔格数</td><td>number</td><td>—</td><td>0</td></tr><tr><td>push</td><td>栅格向右移动格数</td><td>number</td><td>—</td><td>0</td></tr><tr><td>pull</td><td>栅格向左移动格数</td><td>number</td><td>—</td><td>0</td></tr><tr><td>xs</td><td><code>&lt;768px</code> 响应式栅格数或者栅格属性对象</td><td>number/object (例如： {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>sm</td><td><code>≥768px</code> 响应式栅格数或者栅格属性对象</td><td>number/object (例如： {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>md</td><td><code>≥992px</code> 响应式栅格数或者栅格属性对象</td><td>number/object (例如： {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>lg</td><td><code>≥1200px</code> 响应式栅格数或者栅格属性对象</td><td>number/object (例如： {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>xl</td><td><code>≥1920px</code> 响应式栅格数或者栅格属性对象</td><td>number/object (例如： {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>tag</td><td>自定义元素标签</td><td>string</td><td>*</td><td>div</td></tr></tbody></table>',9);var T={name:"component-doc",components:{"element-demo0":function(){const{createVNode:e,resolveComponent:t,withCtx:l,openBlock:d,createBlock:c}=n,o=e("div",{class:"grid-content bg-purple-dark"},null,-1),r=e("div",{class:"grid-content bg-purple"},null,-1),a=e("div",{class:"grid-content bg-purple-light"},null,-1),s=e("div",{class:"grid-content bg-purple"},null,-1),i=e("div",{class:"grid-content bg-purple-light"},null,-1),p=e("div",{class:"grid-content bg-purple"},null,-1),u=e("div",{class:"grid-content bg-purple"},null,-1),g=e("div",{class:"grid-content bg-purple-light"},null,-1),b=e("div",{class:"grid-content bg-purple"},null,-1),h=e("div",{class:"grid-content bg-purple-light"},null,-1),f=e("div",{class:"grid-content bg-purple"},null,-1),v=e("div",{class:"grid-content bg-purple-light"},null,-1),j=e("div",{class:"grid-content bg-purple"},null,-1),m=e("div",{class:"grid-content bg-purple-light"},null,-1),x=e("div",{class:"grid-content bg-purple"},null,-1),O=e("div",{class:"grid-content bg-purple-light"},null,-1);return Object.assign({render:function(n,w){const N=t("el-col"),V=t("el-row");return d(),c("div",null,[e(V,null,{default:l(()=>[e(N,{span:24},{default:l(()=>[o]),_:1})]),_:1}),e(V,null,{default:l(()=>[e(N,{span:12},{default:l(()=>[r]),_:1}),e(N,{span:12},{default:l(()=>[a]),_:1})]),_:1}),e(V,null,{default:l(()=>[e(N,{span:8},{default:l(()=>[s]),_:1}),e(N,{span:8},{default:l(()=>[i]),_:1}),e(N,{span:8},{default:l(()=>[p]),_:1})]),_:1}),e(V,null,{default:l(()=>[e(N,{span:6},{default:l(()=>[u]),_:1}),e(N,{span:6},{default:l(()=>[g]),_:1}),e(N,{span:6},{default:l(()=>[b]),_:1}),e(N,{span:6},{default:l(()=>[h]),_:1})]),_:1}),e(V,null,{default:l(()=>[e(N,{span:4},{default:l(()=>[f]),_:1}),e(N,{span:4},{default:l(()=>[v]),_:1}),e(N,{span:4},{default:l(()=>[j]),_:1}),e(N,{span:4},{default:l(()=>[m]),_:1}),e(N,{span:4},{default:l(()=>[x]),_:1}),e(N,{span:4},{default:l(()=>[O]),_:1})]),_:1})])}},{})}(),"element-demo1":function(){const{createVNode:e,resolveComponent:t,withCtx:l,openBlock:d,createBlock:c}=n,o=e("div",{class:"grid-content bg-purple"},null,-1),r=e("div",{class:"grid-content bg-purple"},null,-1),a=e("div",{class:"grid-content bg-purple"},null,-1),s=e("div",{class:"grid-content bg-purple"},null,-1);return Object.assign({render:function(n,i){const p=t("el-col"),u=t("el-row");return d(),c("div",null,[e(u,{gutter:20},{default:l(()=>[e(p,{span:6},{default:l(()=>[o]),_:1}),e(p,{span:6},{default:l(()=>[r]),_:1}),e(p,{span:6},{default:l(()=>[a]),_:1}),e(p,{span:6},{default:l(()=>[s]),_:1})]),_:1})])}},{})}(),"element-demo2":function(){const{createVNode:e,resolveComponent:t,withCtx:l,openBlock:d,createBlock:c}=n,o=e("div",{class:"grid-content bg-purple"},null,-1),r=e("div",{class:"grid-content bg-purple"},null,-1),a=e("div",{class:"grid-content bg-purple"},null,-1),s=e("div",{class:"grid-content bg-purple"},null,-1),i=e("div",{class:"grid-content bg-purple"},null,-1),p=e("div",{class:"grid-content bg-purple"},null,-1),u=e("div",{class:"grid-content bg-purple"},null,-1),g=e("div",{class:"grid-content bg-purple"},null,-1),b=e("div",{class:"grid-content bg-purple"},null,-1);return Object.assign({render:function(n,h){const f=t("el-col"),v=t("el-row");return d(),c("div",null,[e(v,{gutter:20},{default:l(()=>[e(f,{span:16},{default:l(()=>[o]),_:1}),e(f,{span:8},{default:l(()=>[r]),_:1})]),_:1}),e(v,{gutter:20},{default:l(()=>[e(f,{span:8},{default:l(()=>[a]),_:1}),e(f,{span:8},{default:l(()=>[s]),_:1}),e(f,{span:4},{default:l(()=>[i]),_:1}),e(f,{span:4},{default:l(()=>[p]),_:1})]),_:1}),e(v,{gutter:20},{default:l(()=>[e(f,{span:4},{default:l(()=>[u]),_:1}),e(f,{span:16},{default:l(()=>[g]),_:1}),e(f,{span:4},{default:l(()=>[b]),_:1})]),_:1})])}},{})}(),"element-demo3":function(){const{createVNode:e,resolveComponent:t,withCtx:l,openBlock:d,createBlock:c}=n,o=e("div",{class:"grid-content bg-purple"},null,-1),r=e("div",{class:"grid-content bg-purple"},null,-1),a=e("div",{class:"grid-content bg-purple"},null,-1),s=e("div",{class:"grid-content bg-purple"},null,-1),i=e("div",{class:"grid-content bg-purple"},null,-1);return Object.assign({render:function(n,p){const u=t("el-col"),g=t("el-row");return d(),c("div",null,[e(g,{gutter:20},{default:l(()=>[e(u,{span:6},{default:l(()=>[o]),_:1}),e(u,{span:6,offset:6},{default:l(()=>[r]),_:1})]),_:1}),e(g,{gutter:20},{default:l(()=>[e(u,{span:6,offset:6},{default:l(()=>[a]),_:1}),e(u,{span:6,offset:6},{default:l(()=>[s]),_:1})]),_:1}),e(g,{gutter:20},{default:l(()=>[e(u,{span:12,offset:6},{default:l(()=>[i]),_:1})]),_:1})])}},{})}(),"element-demo4":function(){const{createVNode:e,resolveComponent:t,withCtx:l,openBlock:d,createBlock:c}=n,o=e("div",{class:"grid-content bg-purple"},null,-1),r=e("div",{class:"grid-content bg-purple-light"},null,-1),a=e("div",{class:"grid-content bg-purple"},null,-1),s=e("div",{class:"grid-content bg-purple"},null,-1),i=e("div",{class:"grid-content bg-purple-light"},null,-1),p=e("div",{class:"grid-content bg-purple"},null,-1),u=e("div",{class:"grid-content bg-purple"},null,-1),g=e("div",{class:"grid-content bg-purple-light"},null,-1),b=e("div",{class:"grid-content bg-purple"},null,-1),h=e("div",{class:"grid-content bg-purple"},null,-1),f=e("div",{class:"grid-content bg-purple-light"},null,-1),v=e("div",{class:"grid-content bg-purple"},null,-1),j=e("div",{class:"grid-content bg-purple"},null,-1),m=e("div",{class:"grid-content bg-purple-light"},null,-1),x=e("div",{class:"grid-content bg-purple"},null,-1);return Object.assign({render:function(n,O){const w=t("el-col"),N=t("el-row");return d(),c("div",null,[e(N,{type:"flex",class:"row-bg"},{default:l(()=>[e(w,{span:6},{default:l(()=>[o]),_:1}),e(w,{span:6},{default:l(()=>[r]),_:1}),e(w,{span:6},{default:l(()=>[a]),_:1})]),_:1}),e(N,{type:"flex",class:"row-bg",justify:"center"},{default:l(()=>[e(w,{span:6},{default:l(()=>[s]),_:1}),e(w,{span:6},{default:l(()=>[i]),_:1}),e(w,{span:6},{default:l(()=>[p]),_:1})]),_:1}),e(N,{type:"flex",class:"row-bg",justify:"end"},{default:l(()=>[e(w,{span:6},{default:l(()=>[u]),_:1}),e(w,{span:6},{default:l(()=>[g]),_:1}),e(w,{span:6},{default:l(()=>[b]),_:1})]),_:1}),e(N,{type:"flex",class:"row-bg",justify:"space-between"},{default:l(()=>[e(w,{span:6},{default:l(()=>[h]),_:1}),e(w,{span:6},{default:l(()=>[f]),_:1}),e(w,{span:6},{default:l(()=>[v]),_:1})]),_:1}),e(N,{type:"flex",class:"row-bg",justify:"space-around"},{default:l(()=>[e(w,{span:6},{default:l(()=>[j]),_:1}),e(w,{span:6},{default:l(()=>[m]),_:1}),e(w,{span:6},{default:l(()=>[x]),_:1})]),_:1})])}},{})}(),"element-demo5":function(){const{createVNode:e,resolveComponent:t,withCtx:l,openBlock:d,createBlock:c}=n,o=e("div",{class:"grid-content bg-purple"},null,-1),r=e("div",{class:"grid-content bg-purple-light"},null,-1),a=e("div",{class:"grid-content bg-purple"},null,-1),s=e("div",{class:"grid-content bg-purple-light"},null,-1);return Object.assign({render:function(n,i){const p=t("el-col"),u=t("el-row");return d(),c("div",null,[e(u,{gutter:10},{default:l(()=>[e(p,{xs:8,sm:6,md:4,lg:3,xl:1},{default:l(()=>[o]),_:1}),e(p,{xs:4,sm:6,md:8,lg:9,xl:11},{default:l(()=>[r]),_:1}),e(p,{xs:4,sm:6,md:8,lg:9,xl:11},{default:l(()=>[a]),_:1}),e(p,{xs:8,sm:6,md:4,lg:3,xl:1},{default:l(()=>[s]),_:1})]),_:1})])}},{})}()},render:function(e,t,l,T,B,q){const A=Object(n.resolveComponent)("element-demo0"),J=Object(n.resolveComponent)("demo-block"),R=Object(n.resolveComponent)("element-demo1"),S=Object(n.resolveComponent)("element-demo2"),D=Object(n.resolveComponent)("element-demo3"),E=Object(n.resolveComponent)("element-demo4"),L=Object(n.resolveComponent)("element-demo5");return Object(n.openBlock)(),Object(n.createBlock)("section",d,[c,o,r,a,Object(n.createVNode)(J,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(A)]),highlight:Object(n.withCtx)(()=>[i]),default:Object(n.withCtx)(()=>[s]),_:1}),p,u,Object(n.createVNode)(J,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(R)]),highlight:Object(n.withCtx)(()=>[b]),default:Object(n.withCtx)(()=>[g]),_:1}),h,f,Object(n.createVNode)(J,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(S)]),highlight:Object(n.withCtx)(()=>[v]),_:1}),j,m,Object(n.createVNode)(J,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(D)]),highlight:Object(n.withCtx)(()=>[O]),default:Object(n.withCtx)(()=>[x]),_:1}),w,N,Object(n.createVNode)(J,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(E)]),highlight:Object(n.withCtx)(()=>[_]),default:Object(n.withCtx)(()=>[V]),_:1}),y,Object(n.createVNode)(J,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(L)]),highlight:Object(n.withCtx)(()=>[k]),_:1}),C])}};t.default=T}}]);