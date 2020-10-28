(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{549:function(e,t,o){"use strict";o.r(t);var c=o(0);const a={class:"content element-doc"},r=Object(c.createVNode)("h2",{id:"backtop"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#backtop"},"¶"),Object(c.createTextVNode)(" Backtop")],-1),n=Object(c.createVNode)("p",null,"Un botón para volver a la parte superior",-1),d=Object(c.createVNode)("h3",{id:"uso-basico"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#uso-basico"},"¶"),Object(c.createTextVNode)(" Uso básico")],-1),l=Object(c.createVNode)("p",null,"Desplácese hacia abajo para ver el botón en el lado inferior derecho.",-1),s=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<template>\n  Scroll down to see the bottom-right button.\n  <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>\n</template>\n')],-1),b=Object(c.createVNode)("h3",{id:"personalizacion"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#personalizacion"},"¶"),Object(c.createTextVNode)(" Personalización")],-1),i=Object(c.createVNode)("p",null,"Área de visualización de 40px * 40px.",-1),h=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<template>\n  Scroll down to see the bottom-right button.\n  <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">\n    <div\n      style="{\n        height: 100%;\n        width: 100%;\n        background-color: #f2f5f6;\n        box-shadow: 0 0 6px rgba(0,0,0, .12);\n        text-align: center;\n        line-height: 40px;\n        color: #1989fa;\n      }"\n    >\n      UP\n    </div>\n  </el-backtop>\n</template>\n')],-1),p=Object(c.createStaticVNode)('<h3 id="atributos"><a class="header-anchor" href="#atributos">¶</a> Atributos</h3><table><thead><tr><th>Atributos</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>target</td><td>el objetivo para activar el scroll</td><td>string</td><td></td><td></td></tr><tr><td>visibility-height</td><td>el botón no se mostrará hasta que la altura de desplazamiento alcance este valor</td><td>number</td><td></td><td>200</td></tr><tr><td>right</td><td>separación desde la derecha</td><td>number</td><td></td><td>40</td></tr><tr><td>bottom</td><td>separación desde abajo</td><td>number</td><td></td><td>40</td></tr></tbody></table><h3 id="eventos"><a class="header-anchor" href="#eventos">¶</a> Eventos</h3><table><thead><tr><th>Nombre del evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>click</td><td>se activa al hacer clic</td><td>click event</td></tr></tbody></table>',4);var u={name:"component-doc",components:{"element-demo0":function(){const{resolveComponent:e,createVNode:t,createTextVNode:o,openBlock:a,createBlock:r}=c,n=o(" Scroll down to see the bottom-right button. ");return Object.assign({render:function(o,c){const d=e("el-backtop");return a(),r("div",null,[n,t(d,{target:".page-component__scroll .el-scrollbar__wrap"})])}},{})}(),"element-demo1":function(){const{createVNode:e,resolveComponent:t,withCtx:o,createTextVNode:a,openBlock:r,createBlock:n}=c,d=a(" Scroll down to see the bottom-right button. "),l=e("div",{style:{"{\n        height":"100%",width:"100%","background-color":"#f2f5f6","box-shadow":"0 0 6px rgba(0,0,0, .12)","text-align":"center","line-height":"40px",color:"#1989fa"}}," UP ",-1);return Object.assign({render:function(c,a){const s=t("el-backtop");return r(),n("div",null,[d,e(s,{target:".page-component__scroll .el-scrollbar__wrap",bottom:100},{default:o(()=>[l]),_:1})])}},{})}()},render:function(e,t,o,u,m,j){const g=Object(c.resolveComponent)("element-demo0"),O=Object(c.resolveComponent)("demo-block"),v=Object(c.resolveComponent)("element-demo1");return Object(c.openBlock)(),Object(c.createBlock)("section",a,[r,n,d,l,Object(c.createVNode)(O,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(g)]),highlight:Object(c.withCtx)(()=>[s]),_:1}),b,i,Object(c.createVNode)(O,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(v)]),highlight:Object(c.withCtx)(()=>[h]),_:1}),p])}};t.default=u}}]);