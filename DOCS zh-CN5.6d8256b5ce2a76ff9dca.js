(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{436:function(e,t,r){"use strict";r.r(t);var c=r(0);const a={class:"content element-doc"},d=Object(c.createVNode)("h2",{id:"breadcrumb-mian-bao-xie"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#breadcrumb-mian-bao-xie"},"¶"),Object(c.createTextVNode)(" Breadcrumb 面包屑")],-1),o=Object(c.createVNode)("p",null,"显示当前页面的路径，快速返回之前的任意页面。",-1),b=Object(c.createVNode)("h3",{id:"ji-chu-yong-fa"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#ji-chu-yong-fa"},"¶"),Object(c.createTextVNode)(" 基础用法")],-1),l=Object(c.createVNode)("p",null,"适用广泛的基础用法。",-1),n=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("在"),Object(c.createVNode)("code",null,"el-breadcrumb"),Object(c.createTextVNode)("中使用"),Object(c.createVNode)("code",null,"el-breadcrumb-item"),Object(c.createTextVNode)("标签表示从首页开始的每一级。Element Plus 提供了一个"),Object(c.createVNode)("code",null,"separator"),Object(c.createTextVNode)("属性，在"),Object(c.createVNode)("code",null,"el-breadcrumb"),Object(c.createTextVNode)("标签中设置它来决定分隔符，它只能是字符串，默认为斜杠"),Object(c.createVNode)("code",null,"/"),Object(c.createTextVNode)("。")])],-1),u=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-breadcrumb separator="/">\n  <el-breadcrumb-item :to="{ path: \'/\' }">首页</el-breadcrumb-item>\n  <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>\n  <el-breadcrumb-item>活动列表</el-breadcrumb-item>\n  <el-breadcrumb-item>活动详情</el-breadcrumb-item>\n</el-breadcrumb>\n')],-1),m=Object(c.createVNode)("h3",{id:"tu-biao-fen-ge-fu"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#tu-biao-fen-ge-fu"},"¶"),Object(c.createTextVNode)(" 图标分隔符")],-1),i=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("通过设置 "),Object(c.createVNode)("code",null,"separator-class"),Object(c.createTextVNode)(" 可使用相应的 "),Object(c.createVNode)("code",null,"iconfont"),Object(c.createTextVNode)(" 作为分隔符，注意这将使 "),Object(c.createVNode)("code",null,"separator"),Object(c.createTextVNode)(" 设置失效")])],-1),h=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-breadcrumb separator-class="el-icon-arrow-right">\n  <el-breadcrumb-item :to="{ path: \'/\' }">首页</el-breadcrumb-item>\n  <el-breadcrumb-item>活动管理</el-breadcrumb-item>\n  <el-breadcrumb-item>活动列表</el-breadcrumb-item>\n  <el-breadcrumb-item>活动详情</el-breadcrumb-item>\n</el-breadcrumb>\n')],-1),s=Object(c.createStaticVNode)('<h3 id="breadcrumb-attributes"><a class="header-anchor" href="#breadcrumb-attributes">¶</a> Breadcrumb Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>separator</td><td>分隔符</td><td>string</td><td>—</td><td>斜杠&#39;/&#39;</td></tr><tr><td>separator-class</td><td>图标分隔符 class</td><td>string</td><td>—</td><td>-</td></tr></tbody></table><h3 id="breadcrumb-item-attributes"><a class="header-anchor" href="#breadcrumb-item-attributes">¶</a> Breadcrumb Item Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>to</td><td>路由跳转对象，同 <code>vue-router</code> 的 <code>to</code></td><td>string/object</td><td>—</td><td>—</td></tr><tr><td>replace</td><td>在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>',4);var j={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:e,resolveComponent:t,withCtx:r,createVNode:a,openBlock:d,createBlock:o}=c,b=e("首页"),l=a("a",{href:"/"},"活动管理",-1),n=e("活动列表"),u=e("活动详情");return Object.assign({render:function(e,c){const m=t("el-breadcrumb-item"),i=t("el-breadcrumb");return d(),o("div",null,[a(i,{separator:"/"},{default:r(()=>[a(m,{to:{path:"/"}},{default:r(()=>[b]),_:1}),a(m,null,{default:r(()=>[l]),_:1}),a(m,null,{default:r(()=>[n]),_:1}),a(m,null,{default:r(()=>[u]),_:1})]),_:1})])}},{})}(),"element-demo1":function(){const{createTextVNode:e,resolveComponent:t,withCtx:r,createVNode:a,openBlock:d,createBlock:o}=c,b=e("首页"),l=e("活动管理"),n=e("活动列表"),u=e("活动详情");return Object.assign({render:function(e,c){const m=t("el-breadcrumb-item"),i=t("el-breadcrumb");return d(),o("div",null,[a(i,{"separator-class":"el-icon-arrow-right"},{default:r(()=>[a(m,{to:{path:"/"}},{default:r(()=>[b]),_:1}),a(m,null,{default:r(()=>[l]),_:1}),a(m,null,{default:r(()=>[n]),_:1}),a(m,null,{default:r(()=>[u]),_:1})]),_:1})])}},{})}()},render:function(e,t,r,j,O,N){const V=Object(c.resolveComponent)("element-demo0"),p=Object(c.resolveComponent)("demo-block"),f=Object(c.resolveComponent)("element-demo1");return Object(c.openBlock)(),Object(c.createBlock)("section",a,[d,o,b,l,Object(c.createVNode)(p,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(V)]),highlight:Object(c.withCtx)(()=>[u]),default:Object(c.withCtx)(()=>[n]),_:1}),m,Object(c.createVNode)(p,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(f)]),highlight:Object(c.withCtx)(()=>[h]),default:Object(c.withCtx)(()=>[i]),_:1}),s])}};t.default=j}}]);