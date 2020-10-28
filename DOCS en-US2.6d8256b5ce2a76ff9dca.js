(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{491:function(t,e,o){"use strict";o.r(e);var c=o(0);const r={class:"content element-doc"},n=Object(c.createVNode)("h2",{id:"backtop"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#backtop"},"¶"),Object(c.createTextVNode)(" Backtop")],-1),a=Object(c.createVNode)("p",null,"A button to back to top",-1),d=Object(c.createVNode)("h3",{id:"basic-usage"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#basic-usage"},"¶"),Object(c.createTextVNode)(" Basic usage")],-1),l=Object(c.createVNode)("p",null,"Scroll down to see the bottom-right button.",-1),h=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<template>\n  Scroll down to see the bottom-right button.\n  <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>\n</template>\n')],-1),s=Object(c.createVNode)("h3",{id:"customizations"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#customizations"},"¶"),Object(c.createTextVNode)(" Customizations")],-1),b=Object(c.createVNode)("p",null,"Display area is 40px * 40px.",-1),i=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<template>\n  Scroll down to see the bottom-right button.\n  <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">\n    <div\n      style="{\n        height: 100%;\n        width: 100%;\n        background-color: #f2f5f6;\n        box-shadow: 0 0 6px rgba(0,0,0, .12);\n        text-align: center;\n        line-height: 40px;\n        color: #1989fa;\n      }"\n    >\n      UP\n    </div>\n  </el-backtop>\n</template>\n')],-1),p=Object(c.createStaticVNode)('<h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>target</td><td>the target to trigger scroll</td><td>string</td><td></td><td></td></tr><tr><td>visibility-height</td><td>the button will not show until the scroll height reaches this value</td><td>number</td><td></td><td>200</td></tr><tr><td>right</td><td>right distance</td><td>number</td><td></td><td>40</td></tr><tr><td>bottom</td><td>bottom distance</td><td>number</td><td></td><td>40</td></tr></tbody></table><h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>click</td><td>triggers when click</td><td>click event</td></tr></tbody></table>',4);var u={name:"component-doc",components:{"element-demo0":function(){const{resolveComponent:t,createVNode:e,createTextVNode:o,openBlock:r,createBlock:n}=c,a=o(" Scroll down to see the bottom-right button. ");return Object.assign({render:function(o,c){const d=t("el-backtop");return r(),n("div",null,[a,e(d,{target:".page-component__scroll .el-scrollbar__wrap"})])}},{})}(),"element-demo1":function(){const{createVNode:t,resolveComponent:e,withCtx:o,createTextVNode:r,openBlock:n,createBlock:a}=c,d=r(" Scroll down to see the bottom-right button. "),l=t("div",{style:{"{\n        height":"100%",width:"100%","background-color":"#f2f5f6","box-shadow":"0 0 6px rgba(0,0,0, .12)","text-align":"center","line-height":"40px",color:"#1989fa"}}," UP ",-1);return Object.assign({render:function(c,r){const h=e("el-backtop");return n(),a("div",null,[d,t(h,{target:".page-component__scroll .el-scrollbar__wrap",bottom:100},{default:o(()=>[l]),_:1})])}},{})}()},render:function(t,e,o,u,m,g){const j=Object(c.resolveComponent)("element-demo0"),O=Object(c.resolveComponent)("demo-block"),w=Object(c.resolveComponent)("element-demo1");return Object(c.openBlock)(),Object(c.createBlock)("section",r,[n,a,d,l,Object(c.createVNode)(O,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(j)]),highlight:Object(c.withCtx)(()=>[h]),_:1}),s,b,Object(c.createVNode)(O,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(w)]),highlight:Object(c.withCtx)(()=>[i]),_:1}),p])}};e.default=u}}]);