(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{483:function(t,e,o){"use strict";o.r(e);var n=o(0);const l={class:"content element-doc"},d=Object(n.createVNode)("h2",{id:"tooltip-wen-zi-ti-shi"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#tooltip-wen-zi-ti-shi"},"¶"),Object(n.createTextVNode)(" Tooltip 文字提示")],-1),c=Object(n.createVNode)("p",null,"常用于展示鼠标 hover 时的提示信息。",-1),a=Object(n.createVNode)("h3",{id:"ji-chu-yong-fa"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#ji-chu-yong-fa"},"¶"),Object(n.createTextVNode)(" 基础用法")],-1),r=Object(n.createVNode)("p",null,"在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。",-1),i=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("使用"),Object(n.createVNode)("code",null,"content"),Object(n.createTextVNode)("属性来决定"),Object(n.createVNode)("code",null,"hover"),Object(n.createTextVNode)("时的提示信息。由"),Object(n.createVNode)("code",null,"placement"),Object(n.createTextVNode)("属性决定展示效果："),Object(n.createVNode)("code",null,"placement"),Object(n.createTextVNode)("属性值为："),Object(n.createVNode)("code",null,"方向-对齐位置"),Object(n.createTextVNode)("；四个方向："),Object(n.createVNode)("code",null,"top"),Object(n.createTextVNode)("、"),Object(n.createVNode)("code",null,"left"),Object(n.createTextVNode)("、"),Object(n.createVNode)("code",null,"right"),Object(n.createTextVNode)("、"),Object(n.createVNode)("code",null,"bottom"),Object(n.createTextVNode)("；三种对齐位置："),Object(n.createVNode)("code",null,"start"),Object(n.createTextVNode)(", "),Object(n.createVNode)("code",null,"end"),Object(n.createTextVNode)("，默认为空。如"),Object(n.createVNode)("code",null,'placement="left-end"'),Object(n.createTextVNode)("，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。")])],-1),p=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<div class="box">\n  <div class="top">\n    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">\n      <el-button>上左</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">\n      <el-button>上边</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">\n      <el-button>上右</el-button>\n    </el-tooltip>\n  </div>\n  <div class="left">\n    <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">\n      <el-button>左上</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">\n      <el-button>左边</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">\n      <el-button>左下</el-button>\n    </el-tooltip>\n  </div>\n\n  <div class="right">\n    <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">\n      <el-button>右上</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">\n      <el-button>右边</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">\n      <el-button>右下</el-button>\n    </el-tooltip>\n  </div>\n  <div class="bottom">\n    <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">\n      <el-button>下左</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">\n      <el-button>下边</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">\n      <el-button>下右</el-button>\n    </el-tooltip>\n  </div>\n</div>\n\n<style>\n  .box {\n    width: 400px;\n\n    .top {\n      text-align: center;\n    }\n\n    .left {\n      float: left;\n      width: 60px;\n    }\n\n    .right {\n      float: right;\n      width: 60px;\n    }\n\n    .bottom {\n      clear: both;\n      text-align: center;\n    }\n\n    .item {\n      margin: 4px;\n    }\n\n    .left .el-tooltip__popper,\n    .right .el-tooltip__popper {\n      padding: 8px 10px;\n    }\n  }\n</style>\n')],-1),b=Object(n.createVNode)("h3",{id:"zhu-ti"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#zhu-ti"},"¶"),Object(n.createTextVNode)(" 主题")],-1),s=Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Tooltip 组件提供了两个不同的主题："),Object(n.createVNode)("code",null,"dark"),Object(n.createTextVNode)("和"),Object(n.createVNode)("code",null,"light"),Object(n.createTextVNode)("。")],-1),u=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("通过设置"),Object(n.createVNode)("code",null,"effect"),Object(n.createTextVNode)("属性来改变主题，默认为"),Object(n.createVNode)("code",null,"dark"),Object(n.createTextVNode)("。")])],-1),f=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-tooltip content="Top center" placement="top">\n  <el-button>Dark</el-button>\n</el-tooltip>\n<el-tooltip content="Bottom center" placement="bottom" effect="light">\n  <el-button>Light</el-button>\n</el-tooltip>\n')],-1),m=Object(n.createVNode)("h3",{id:"geng-duo-content"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#geng-duo-content"},"¶"),Object(n.createTextVNode)(" 更多 Content")],-1),h=Object(n.createVNode)("p",null,"展示多行文本或者是设置文本内容的格式",-1),j=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("用具名 slot 分发"),Object(n.createVNode)("code",null,"content"),Object(n.createTextVNode)("，替代"),Object(n.createVNode)("code",null,"tooltip"),Object(n.createTextVNode)("中的"),Object(n.createVNode)("code",null,"content"),Object(n.createTextVNode)("属性。")])],-1),O=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-tooltip placement="top">\n  <div slot="content">多行信息<br/>第二行信息</div>\n  <el-button>Top center</el-button>\n</el-tooltip>\n')],-1),N=Object(n.createStaticVNode)('<h3 id="gao-ji-kuo-zhan"><a class="header-anchor" href="#gao-ji-kuo-zhan">¶</a> 高级扩展</h3><p>除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：</p><p><code>transition</code> 属性可以定制显隐的动画效果，默认为<code>fade-in-linear</code>。 如果需要关闭 <code>tooltip</code> 功能，<code>disabled</code> 属性可以满足这个需求，它接受一个<code>Boolean</code>，设置为<code>true</code>即可。</p><p>事实上，这是基于 <a href="https://github.com/element-component/vue-popper">Vue-popper</a> 的扩展，你可以自定义任意 Vue-popper 中允许定义的字段。 当然 Tooltip 组件实际上十分强大，文末的API文档会做一一说明。</p>',4),V=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">\n    <el-button @click="disabled = !disabled">点击{{disabled ? \'开启\' : \'关闭\'}} tooltip 功能</el-button>\n  </el-tooltip>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        disabled: false\n      };\n    }\n  };\n<\/script>\n')],-1),g=Object(n.createStaticVNode)('<div class="tip"><p>tooltip 内不支持 <code>router-link</code> 组件，请使用 <code>vm.$router.push</code> 代替。</p><p>tooltip 内不支持 disabled form 元素，参考<a href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter">MDN</a>，请在 disabled form 元素外层添加一层包裹元素。</p></div><h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>effect</td><td>默认提供的主题</td><td>String</td><td>dark/light</td><td>dark</td></tr><tr><td>content</td><td>显示的内容，也可以通过 <code>slot#content</code> 传入 DOM</td><td>String</td><td>—</td><td>—</td></tr><tr><td>placement</td><td>Tooltip 的出现位置</td><td>String</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>value / v-model</td><td>状态是否可见</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>Tooltip 是否可用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>offset</td><td>出现位置的偏移量</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>transition</td><td>定义渐变动画</td><td>String</td><td>—</td><td>el-fade-in-linear</td></tr><tr><td>visible-arrow</td><td>是否显示 Tooltip 箭头，更多参数可见<a href="https://github.com/element-component/vue-popper">Vue-popper</a></td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>popper-options</td><td><a href="https://popper.js.org/documentation.html">popper.js</a> 的参数</td><td>Object</td><td>参考 <a href="https://popper.js.org/documentation.html">popper.js</a> 文档</td><td>{ boundariesElement: &#39;body&#39;, gpuAcceleration: false }</td></tr><tr><td>open-delay</td><td>延迟出现，单位毫秒</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>manual</td><td>手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>popper-class</td><td>为 Tooltip 的 popper 添加类名</td><td>String</td><td>—</td><td>—</td></tr><tr><td>enterable</td><td>鼠标是否可进入到 tooltip 中</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>hide-after</td><td>Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏</td><td>number</td><td>—</td><td>0</td></tr><tr><td>tabindex</td><td>Tooltip 组件的 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></td><td>number</td><td>—</td><td>0</td></tr></tbody></table>',3);var x={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:t,resolveComponent:e,withCtx:o,createVNode:l,openBlock:d,createBlock:c}=n,a={class:"box"},r={class:"top"},i=t("上左"),p=t("上边"),b=t("上右"),s={class:"left"},u=t("左上"),f=t("左边"),m=t("左下"),h={class:"right"},j=t("右上"),O=t("右边"),N=t("右下"),V={class:"bottom"},g=t("下左"),x=t("下边"),T=t("下右");return Object.assign({render:function(t,n){const v=e("el-button"),k=e("el-tooltip");return d(),c("div",null,[l("div",a,[l("div",r,[l(k,{class:"item",effect:"dark",content:"Top Left 提示文字",placement:"top-start"},{default:o(()=>[l(v,null,{default:o(()=>[i]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Top Center 提示文字",placement:"top"},{default:o(()=>[l(v,null,{default:o(()=>[p]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Top Right 提示文字",placement:"top-end"},{default:o(()=>[l(v,null,{default:o(()=>[b]),_:1})]),_:1})]),l("div",s,[l(k,{class:"item",effect:"dark",content:"Left Top 提示文字",placement:"left-start"},{default:o(()=>[l(v,null,{default:o(()=>[u]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Left Center 提示文字",placement:"left"},{default:o(()=>[l(v,null,{default:o(()=>[f]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Left Bottom 提示文字",placement:"left-end"},{default:o(()=>[l(v,null,{default:o(()=>[m]),_:1})]),_:1})]),l("div",h,[l(k,{class:"item",effect:"dark",content:"Right Top 提示文字",placement:"right-start"},{default:o(()=>[l(v,null,{default:o(()=>[j]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Right Center 提示文字",placement:"right"},{default:o(()=>[l(v,null,{default:o(()=>[O]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Right Bottom 提示文字",placement:"right-end"},{default:o(()=>[l(v,null,{default:o(()=>[N]),_:1})]),_:1})]),l("div",V,[l(k,{class:"item",effect:"dark",content:"Bottom Left 提示文字",placement:"bottom-start"},{default:o(()=>[l(v,null,{default:o(()=>[g]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Bottom Center 提示文字",placement:"bottom"},{default:o(()=>[l(v,null,{default:o(()=>[x]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Bottom Right 提示文字",placement:"bottom-end"},{default:o(()=>[l(v,null,{default:o(()=>[T]),_:1})]),_:1})])])])}},{})}(),"element-demo1":function(){const{createTextVNode:t,resolveComponent:e,withCtx:o,createVNode:l,openBlock:d,createBlock:c}=n,a=t("Dark"),r=t("Light");return Object.assign({render:function(t,n){const i=e("el-button"),p=e("el-tooltip");return d(),c("div",null,[l(p,{content:"Top center",placement:"top"},{default:o(()=>[l(i,null,{default:o(()=>[a]),_:1})]),_:1}),l(p,{content:"Bottom center",placement:"bottom",effect:"light"},{default:o(()=>[l(i,null,{default:o(()=>[r]),_:1})]),_:1})])}},{})}(),"element-demo2":function(){const{createVNode:t,createTextVNode:e,resolveComponent:o,withCtx:l,openBlock:d,createBlock:c}=n,a=t("div",{slot:"content"},[e("多行信息"),t("br"),e("第二行信息")],-1),r=e("Top center");return Object.assign({render:function(e,n){const i=o("el-button"),p=o("el-tooltip");return d(),c("div",null,[t(p,{placement:"top"},{default:l(()=>[a,t(i,null,{default:l(()=>[r]),_:1})]),_:1})])}},{})}(),"element-demo3":function(){const{toDisplayString:t,createTextVNode:e,resolveComponent:o,withCtx:l,createVNode:d,openBlock:c,createBlock:a}=n;const r={data:()=>({disabled:!1})};return Object.assign({render:function(n,r){const i=o("el-button"),p=o("el-tooltip");return c(),a("div",null,[d(p,{disabled:n.disabled,content:"点击关闭 tooltip 功能",placement:"bottom",effect:"light"},{default:l(()=>[d(i,{onClick:r[1]||(r[1]=t=>n.disabled=!n.disabled)},{default:l(()=>[e("点击"+t(n.disabled?"开启":"关闭")+" tooltip 功能",1)]),_:1})]),_:1},8,["disabled"])])}},r)}()},render:function(t,e,o,x,T,v){const k=Object(n.resolveComponent)("element-demo0"),_=Object(n.resolveComponent)("demo-block"),C=Object(n.resolveComponent)("element-demo1"),B=Object(n.resolveComponent)("element-demo2"),w=Object(n.resolveComponent)("element-demo3");return Object(n.openBlock)(),Object(n.createBlock)("section",l,[d,c,a,r,Object(n.createVNode)(_,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(k)]),highlight:Object(n.withCtx)(()=>[p]),default:Object(n.withCtx)(()=>[i]),_:1}),b,s,Object(n.createVNode)(_,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(C)]),highlight:Object(n.withCtx)(()=>[f]),default:Object(n.withCtx)(()=>[u]),_:1}),m,h,Object(n.createVNode)(_,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(B)]),highlight:Object(n.withCtx)(()=>[O]),default:Object(n.withCtx)(()=>[j]),_:1}),N,Object(n.createVNode)(_,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(w)]),highlight:Object(n.withCtx)(()=>[V]),_:1}),g])}};e.default=x}}]);