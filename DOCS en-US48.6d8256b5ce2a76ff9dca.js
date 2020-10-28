(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{533:function(e,t,c){"use strict";c.r(t);var s=c(0);const o={class:"content element-doc"},n=Object(s.createVNode)("h2",{id:"steps"},[Object(s.createVNode)("a",{class:"header-anchor",href:"#steps"},"¶"),Object(s.createTextVNode)(" Steps")],-1),i=Object(s.createVNode)("p",null,"Guide the user to complete tasks in accordance with the process. Its steps can be set according to the actual application scenario and the number of the steps can't be less than 2.",-1),d=Object(s.createVNode)("h3",{id:"basic-usage"},[Object(s.createVNode)("a",{class:"header-anchor",href:"#basic-usage"},"¶"),Object(s.createTextVNode)(" Basic usage")],-1),r=Object(s.createVNode)("p",null,"Simple step bar.",-1),l=Object(s.createVNode)("div",null,[Object(s.createVNode)("p",null,[Object(s.createTextVNode)("Set "),Object(s.createVNode)("code",null,"active"),Object(s.createTextVNode)(" attribute with "),Object(s.createVNode)("code",null,"Number"),Object(s.createTextVNode)(" type, which indicates the index of steps and starts from 0. You can set "),Object(s.createVNode)("code",null,"space"),Object(s.createTextVNode)(" attribute when the width of the step needs to be fixed which accepts "),Object(s.createVNode)("code",null,"Number"),Object(s.createTextVNode)(" type. The unit of the "),Object(s.createVNode)("code",null,"space"),Object(s.createTextVNode)(" attribute is "),Object(s.createVNode)("code",null,"px"),Object(s.createTextVNode)(". If not set, it is responsive. Setting the "),Object(s.createVNode)("code",null,"finish-status"),Object(s.createTextVNode)(" attribute can change the state of the steps that have been completed.")])],-1),a=Object(s.createVNode)("pre",null,[Object(s.createVNode)("code",{class:"html"},'<el-steps :active="active" finish-status="success">\n  <el-step title="Step 1"></el-step>\n  <el-step title="Step 2"></el-step>\n  <el-step title="Step 3"></el-step>\n</el-steps>\n\n<el-button style="margin-top: 12px;" @click="next">Next step</el-button>\n\n<script>\n  export default {\n    data() {\n      return {\n        active: 0\n      };\n    },\n\n    methods: {\n      next() {\n        if (this.active++ > 2) this.active = 0;\n      }\n    }\n  }\n<\/script>\n')],-1),p=Object(s.createVNode)("h3",{id:"step-bar-that-contains-status"},[Object(s.createVNode)("a",{class:"header-anchor",href:"#step-bar-that-contains-status"},"¶"),Object(s.createTextVNode)(" Step bar that contains status")],-1),b=Object(s.createVNode)("p",null,"Shows the status of the step for each step.",-1),h=Object(s.createVNode)("div",null,[Object(s.createVNode)("p",null,[Object(s.createTextVNode)("Use "),Object(s.createVNode)("code",null,"title"),Object(s.createTextVNode)(" attribute to set the name of the step, or override the attribute by using a named "),Object(s.createVNode)("code",null,"slot"),Object(s.createTextVNode)(". We have listed all the slot names for you at the end of this page.")])],-1),u=Object(s.createVNode)("pre",null,[Object(s.createVNode)("code",{class:"html"},'<el-steps :space="200" :active="1" finish-status="success">\n  <el-step title="Done"></el-step>\n  <el-step title="Processing"></el-step>\n  <el-step title="Step 3"></el-step>\n</el-steps>\n')],-1),j=Object(s.createVNode)("h3",{id:"center"},[Object(s.createVNode)("a",{class:"header-anchor",href:"#center"},"¶"),Object(s.createTextVNode)(" Center")],-1),O=Object(s.createVNode)("p",null,"Title and desription can be centered.",-1),N=Object(s.createVNode)("pre",null,[Object(s.createVNode)("code",{class:"html"},'<el-steps :active="2" align-center>\n  <el-step title="Step 1" description="Some description"></el-step>\n  <el-step title="Step 2" description="Some description"></el-step>\n  <el-step title="Step 3" description="Some description"></el-step>\n  <el-step title="Step 4" description="Some description"></el-step>\n</el-steps>\n')],-1),V=Object(s.createVNode)("h3",{id:"step-bar-with-description"},[Object(s.createVNode)("a",{class:"header-anchor",href:"#step-bar-with-description"},"¶"),Object(s.createTextVNode)(" Step bar with description")],-1),m=Object(s.createVNode)("p",null,"There is description for each step.",-1),f=Object(s.createVNode)("pre",null,[Object(s.createVNode)("code",{class:"html"},'<el-steps :active="1">\n  <el-step title="Step 1" description="Some description"></el-step>\n  <el-step title="Step 2" description="Some description"></el-step>\n  <el-step title="Step 3" description="Some description"></el-step>\n</el-steps>\n')],-1),S=Object(s.createVNode)("h3",{id:"step-bar-with-icon"},[Object(s.createVNode)("a",{class:"header-anchor",href:"#step-bar-with-icon"},"¶"),Object(s.createTextVNode)(" Step bar with icon")],-1),x=Object(s.createVNode)("p",null,"A variety of custom icons can be used in the step bar.",-1),v=Object(s.createVNode)("div",null,[Object(s.createVNode)("p",null,[Object(s.createTextVNode)("The icon is set by the "),Object(s.createVNode)("code",null,"icon"),Object(s.createTextVNode)(" property. The types of icons can be found in the document for the Icon component. In addition, you can customize the icon through a named "),Object(s.createVNode)("code",null,"slot"),Object(s.createTextVNode)(".")])],-1),g=Object(s.createVNode)("pre",null,[Object(s.createVNode)("code",{class:"html"},'<el-steps :active="1">\n  <el-step title="Step 1" icon="el-icon-edit"></el-step>\n  <el-step title="Step 2" icon="el-icon-upload"></el-step>\n  <el-step title="Step 3" icon="el-icon-picture"></el-step>\n</el-steps>\n')],-1),w=Object(s.createVNode)("h3",{id:"vertical-step-bar"},[Object(s.createVNode)("a",{class:"header-anchor",href:"#vertical-step-bar"},"¶"),Object(s.createTextVNode)(" Vertical step bar")],-1),C=Object(s.createVNode)("p",null,"Vertical step bars.",-1),T=Object(s.createVNode)("div",null,[Object(s.createVNode)("p",null,[Object(s.createTextVNode)("You only need to set the "),Object(s.createVNode)("code",null,"direction"),Object(s.createTextVNode)(" attribute to"),Object(s.createVNode)("code",null," vertical"),Object(s.createTextVNode)(" in the "),Object(s.createVNode)("code",null,"el-steps"),Object(s.createTextVNode)(" element.")])],-1),y=Object(s.createVNode)("pre",null,[Object(s.createVNode)("code",{class:"html"},'<div style="height: 300px;">\n  <el-steps direction="vertical" :active="1">\n    <el-step title="Step 1"></el-step>\n    <el-step title="Step 2"></el-step>\n    <el-step title="Step 3"></el-step>\n  </el-steps>\n</div>\n')],-1),k=Object(s.createVNode)("h3",{id:"simple-step-bar"},[Object(s.createVNode)("a",{class:"header-anchor",href:"#simple-step-bar"},"¶"),Object(s.createTextVNode)(" Simple step bar")],-1),B=Object(s.createVNode)("p",null,[Object(s.createTextVNode)("Simple step bars, where "),Object(s.createVNode)("code",null,"align-center"),Object(s.createTextVNode)(", "),Object(s.createVNode)("code",null,"description"),Object(s.createTextVNode)(", "),Object(s.createVNode)("code",null,"direction"),Object(s.createTextVNode)(" and "),Object(s.createVNode)("code",null,"space"),Object(s.createTextVNode)(" will be ignored.")],-1),_=Object(s.createVNode)("pre",null,[Object(s.createVNode)("code",{class:"html"},'\n<el-steps :space="200" :active="1" simple>\n  <el-step title="Step 1" icon="el-icon-edit"></el-step>\n  <el-step title="Step 2" icon="el-icon-upload"></el-step>\n  <el-step title="Step 3" icon="el-icon-picture"></el-step>\n</el-steps>\n\n<el-steps :active="1" finish-status="success" simple style="margin-top: 20px">\n  <el-step title="Step 1" ></el-step>\n  <el-step title="Step 2" ></el-step>\n  <el-step title="Step 3" ></el-step>\n</el-steps>\n')],-1),A=Object(s.createStaticVNode)('<h3 id="steps-attributes"><a class="header-anchor" href="#steps-attributes">¶</a> Steps Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>space</td><td>the spacing of each step, will be responsive if omitted. Supports percentage.</td><td>number / string</td><td>—</td><td>—</td></tr><tr><td>direction</td><td>display direction</td><td>string</td><td>vertical/horizontal</td><td>horizontal</td></tr><tr><td>active</td><td>current activation step</td><td>number</td><td>—</td><td>0</td></tr><tr><td>process-status</td><td>status of current step</td><td>string</td><td>wait / process / finish / error / success</td><td>process</td></tr><tr><td>finish-status</td><td>status of end step</td><td>string</td><td>wait / process / finish / error / success</td><td>finish</td></tr><tr><td>align-center</td><td>center title and description</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>simple</td><td>whether to apply simple theme</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h3 id="step-attributes"><a class="header-anchor" href="#step-attributes">¶</a> Step Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>step title</td><td>string</td><td>—</td><td>—</td></tr><tr><td>description</td><td>step description</td><td>string</td><td>—</td><td>—</td></tr><tr><td>icon</td><td>step icon</td><td>step icon&#39;s class name. Icons can be passed via named slot as well</td><td>string</td><td>—</td></tr><tr><td>status</td><td>current status. It will be automatically set by Steps if not configured.</td><td>wait / process / finish / error / success</td><td>-</td><td></td></tr></tbody></table><h3 id="step-slot"><a class="header-anchor" href="#step-slot">¶</a> Step Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>icon</td><td>custom icon</td></tr><tr><td>title</td><td>step title</td></tr><tr><td>description</td><td>step description</td></tr></tbody></table>',6);var D={name:"component-doc",components:{"element-demo0":function(){const{resolveComponent:e,createVNode:t,withCtx:c,createTextVNode:o,openBlock:n,createBlock:i}=s,d=o("Next step");const r={data:()=>({active:0}),methods:{next(){this.active++>2&&(this.active=0)}}};return Object.assign({render:function(s,o){const r=e("el-step"),l=e("el-steps"),a=e("el-button");return n(),i("div",null,[t(l,{active:s.active,"finish-status":"success"},{default:c(()=>[t(r,{title:"Step 1"}),t(r,{title:"Step 2"}),t(r,{title:"Step 3"})]),_:1},8,["active"]),t(a,{style:{"margin-top":"12px"},onClick:s.next},{default:c(()=>[d]),_:1},8,["onClick"])])}},r)}(),"element-demo1":function(){const{resolveComponent:e,createVNode:t,withCtx:c,openBlock:o,createBlock:n}=s;return Object.assign({render:function(s,i){const d=e("el-step"),r=e("el-steps");return o(),n("div",null,[t(r,{space:200,active:1,"finish-status":"success"},{default:c(()=>[t(d,{title:"Done"}),t(d,{title:"Processing"}),t(d,{title:"Step 3"})]),_:1})])}},{})}(),"element-demo2":function(){const{resolveComponent:e,createVNode:t,withCtx:c,openBlock:o,createBlock:n}=s;return Object.assign({render:function(s,i){const d=e("el-step"),r=e("el-steps");return o(),n("div",null,[t(r,{active:2,"align-center":""},{default:c(()=>[t(d,{title:"Step 1",description:"Some description"}),t(d,{title:"Step 2",description:"Some description"}),t(d,{title:"Step 3",description:"Some description"}),t(d,{title:"Step 4",description:"Some description"})]),_:1})])}},{})}(),"element-demo3":function(){const{resolveComponent:e,createVNode:t,withCtx:c,openBlock:o,createBlock:n}=s;return Object.assign({render:function(s,i){const d=e("el-step"),r=e("el-steps");return o(),n("div",null,[t(r,{active:1},{default:c(()=>[t(d,{title:"Step 1",description:"Some description"}),t(d,{title:"Step 2",description:"Some description"}),t(d,{title:"Step 3",description:"Some description"})]),_:1})])}},{})}(),"element-demo4":function(){const{resolveComponent:e,createVNode:t,withCtx:c,openBlock:o,createBlock:n}=s;return Object.assign({render:function(s,i){const d=e("el-step"),r=e("el-steps");return o(),n("div",null,[t(r,{active:1},{default:c(()=>[t(d,{title:"Step 1",icon:"el-icon-edit"}),t(d,{title:"Step 2",icon:"el-icon-upload"}),t(d,{title:"Step 3",icon:"el-icon-picture"})]),_:1})])}},{})}(),"element-demo5":function(){const{resolveComponent:e,createVNode:t,withCtx:c,openBlock:o,createBlock:n}=s,i={style:{height:"300px"}};return Object.assign({render:function(s,d){const r=e("el-step"),l=e("el-steps");return o(),n("div",null,[t("div",i,[t(l,{direction:"vertical",active:1},{default:c(()=>[t(r,{title:"Step 1"}),t(r,{title:"Step 2"}),t(r,{title:"Step 3"})]),_:1})])])}},{})}(),"element-demo6":function(){const{resolveComponent:e,createVNode:t,withCtx:c,openBlock:o,createBlock:n}=s;return Object.assign({render:function(s,i){const d=e("el-step"),r=e("el-steps");return o(),n("div",null,[t(r,{space:200,active:1,simple:""},{default:c(()=>[t(d,{title:"Step 1",icon:"el-icon-edit"}),t(d,{title:"Step 2",icon:"el-icon-upload"}),t(d,{title:"Step 3",icon:"el-icon-picture"})]),_:1}),t(r,{active:1,"finish-status":"success",simple:"",style:{"margin-top":"20px"}},{default:c(()=>[t(d,{title:"Step 1"}),t(d,{title:"Step 2"}),t(d,{title:"Step 3"})]),_:1})])}},{})}()},render:function(e,t,c,D,I,z){const J=Object(s.resolveComponent)("element-demo0"),P=Object(s.resolveComponent)("demo-block"),Y=Object(s.resolveComponent)("element-demo1"),G=Object(s.resolveComponent)("element-demo2"),U=Object(s.resolveComponent)("element-demo3"),W=Object(s.resolveComponent)("element-demo4"),q=Object(s.resolveComponent)("element-demo5"),E=Object(s.resolveComponent)("element-demo6");return Object(s.openBlock)(),Object(s.createBlock)("section",o,[n,i,d,r,Object(s.createVNode)(P,null,{source:Object(s.withCtx)(()=>[Object(s.createVNode)(J)]),highlight:Object(s.withCtx)(()=>[a]),default:Object(s.withCtx)(()=>[l]),_:1}),p,b,Object(s.createVNode)(P,null,{source:Object(s.withCtx)(()=>[Object(s.createVNode)(Y)]),highlight:Object(s.withCtx)(()=>[u]),default:Object(s.withCtx)(()=>[h]),_:1}),j,O,Object(s.createVNode)(P,null,{source:Object(s.withCtx)(()=>[Object(s.createVNode)(G)]),highlight:Object(s.withCtx)(()=>[N]),_:1}),V,m,Object(s.createVNode)(P,null,{source:Object(s.withCtx)(()=>[Object(s.createVNode)(U)]),highlight:Object(s.withCtx)(()=>[f]),_:1}),S,x,Object(s.createVNode)(P,null,{source:Object(s.withCtx)(()=>[Object(s.createVNode)(W)]),highlight:Object(s.withCtx)(()=>[g]),default:Object(s.withCtx)(()=>[v]),_:1}),w,C,Object(s.createVNode)(P,null,{source:Object(s.withCtx)(()=>[Object(s.createVNode)(q)]),highlight:Object(s.withCtx)(()=>[y]),default:Object(s.withCtx)(()=>[T]),_:1}),k,B,Object(s.createVNode)(P,null,{source:Object(s.withCtx)(()=>[Object(s.createVNode)(E)]),highlight:Object(s.withCtx)(()=>[_]),_:1}),A])}};t.default=D}}]);