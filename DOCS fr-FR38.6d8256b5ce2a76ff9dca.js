(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{640:function(t,e,c){"use strict";c.r(e);var a=c(0);const d={class:"content element-doc"},o=Object(a.createVNode)("h2",{id:"pageheader"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#pageheader"},"¶"),Object(a.createTextVNode)(" PageHeader")],-1),r=Object(a.createVNode)("p",null,"Si le chemin de la page est simple, il est recommandé d’utiliser PageHeader au lieu de Breadcrumb.",-1),n=Object(a.createVNode)("h3",{id:"basic"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#basic"},"¶"),Object(a.createTextVNode)(" Basic")],-1),s=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<el-page-header @back="goBack" content="detail">\n</el-page-header>\n\n<script>\n  export default {\n    methods: {\n      goBack() {\n        console.log(\'go back\');\n      }\n    }\n  }\n<\/script>\n')],-1),h=Object(a.createStaticVNode)('<h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>title</td><td>titre principal</td><td>string</td><td>—</td><td>Back</td></tr><tr><td>content</td><td>contenu</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>back</td><td>se déclenche lorsque vous cliquez sur le côté droit</td><td>—</td></tr></tbody></table><h3 id="slots"><a class="header-anchor" href="#slots">¶</a> Slots</h3><table><thead><tr><th>slot</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>contenu du titre</td></tr><tr><td>content</td><td>contenu</td></tr></tbody></table>',6);var l={name:"component-doc",components:{"element-demo0":function(){const{resolveComponent:t,createVNode:e,openBlock:c,createBlock:d}=a;const o={methods:{goBack(){console.log("go back")}}};return Object.assign({render:function(a,o){const r=t("el-page-header");return c(),d("div",null,[e(r,{onBack:a.goBack,content:"detail"},null,8,["onBack"])])}},o)}()},render:function(t,e,c,l,i,b){const u=Object(a.resolveComponent)("element-demo0"),p=Object(a.resolveComponent)("demo-block");return Object(a.openBlock)(),Object(a.createBlock)("section",d,[o,r,n,Object(a.createVNode)(p,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(u)]),highlight:Object(a.withCtx)(()=>[s]),_:1}),h])}};e.default=l}}]);