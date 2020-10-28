(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{592:function(e,t,o){"use strict";o.r(t);var d=o(0);const c={class:"content element-doc"},a=Object(d.createVNode)("h2",{id:"switch"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#switch"},"¶"),Object(d.createTextVNode)(" Switch")],-1),l=Object(d.createVNode)("p",null,"Switch es utilizado para realizar cambios entre dos estados opuestos.",-1),n=Object(d.createVNode)("h3",{id:"uso-basico"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#uso-basico"},"¶"),Object(d.createTextVNode)(" Uso básico")],-1),r=Object(d.createVNode)("div",null,[Object(d.createVNode)("p",null,[Object(d.createTextVNode)("Enlace "),Object(d.createVNode)("code",null,"v-model"),Object(d.createTextVNode)(" a una variable de tipo "),Object(d.createVNode)("code",null,"Boolean"),Object(d.createTextVNode)(". Los atributos "),Object(d.createVNode)("code",null,"active-color"),Object(d.createTextVNode)(" y "),Object(d.createVNode)("code",null,"inactive-color"),Object(d.createTextVNode)(" deciden el color de fondo en cada estado.")])],-1),i=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<el-switch v-model="value1">\n</el-switch>\n<el-switch\n  v-model="value2"\n  active-color="#13ce66"\n  inactive-color="#ff4949">\n</el-switch>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: true\n      }\n    }\n  };\n<\/script>\n')],-1),s=Object(d.createVNode)("h3",{id:"texto-de-descripcion"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#texto-de-descripcion"},"¶"),Object(d.createTextVNode)(" Texto de descripción")],-1),u=Object(d.createVNode)("div",null,[Object(d.createVNode)("p",null,[Object(d.createTextVNode)("Puede agregar los atributos "),Object(d.createVNode)("code",null,"active-text"),Object(d.createTextVNode)(" y "),Object(d.createVNode)("code",null,"inactive-text"),Object(d.createTextVNode)(" para mostrar los textos.")])],-1),b=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<el-switch\n  v-model="value1"\n  active-text="Pay by month"\n  inactive-text="Pay by year">\n</el-switch>\n<el-switch\n  style="display: block"\n  v-model="value2"\n  active-color="#13ce66"\n  inactive-color="#ff4949"\n  active-text="Pay by month"\n  inactive-text="Pay by year">\n</el-switch>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: true\n      }\n    }\n  };\n<\/script>\n')],-1),v=Object(d.createVNode)("h3",{id:"tipos-de-valores-extendidos"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#tipos-de-valores-extendidos"},"¶"),Object(d.createTextVNode)(" Tipos de valores extendidos")],-1),h=Object(d.createVNode)("div",null,[Object(d.createVNode)("p",null,[Object(d.createTextVNode)("Puede establecer los atributos "),Object(d.createVNode)("code",null,"active-value"),Object(d.createTextVNode)(" y "),Object(d.createVNode)("code",null,"inactive-value"),Object(d.createTextVNode)(". Ambos reciben valores de tipo "),Object(d.createVNode)("code",null,"Boolean"),Object(d.createTextVNode)(", "),Object(d.createVNode)("code",null,"String"),Object(d.createTextVNode)(" o "),Object(d.createVNode)("code",null,"Number"),Object(d.createTextVNode)(".")])],-1),m=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<el-tooltip :content="\'Switch value: \' + value" placement="top">\n  <el-switch\n    v-model="value"\n    active-color="#13ce66"\n    inactive-color="#ff4949"\n    active-value="100"\n    inactive-value="0">\n  </el-switch>\n</el-tooltip>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: \'100\'\n      }\n    }\n  };\n<\/script>\n')],-1),V=Object(d.createVNode)("h3",{id:"disabled"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#disabled"},"¶"),Object(d.createTextVNode)(" Disabled")],-1),j=Object(d.createVNode)("div",null,[Object(d.createVNode)("p",null,[Object(d.createTextVNode)("Agregar el atributo "),Object(d.createVNode)("code",null,"disabled"),Object(d.createTextVNode)(" desactiva el componente Switch.")])],-1),O=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<el-switch\n  v-model="value1"\n  disabled>\n</el-switch>\n<el-switch\n  v-model="value2"\n  disabled>\n</el-switch>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: false\n      }\n    }\n  };\n<\/script>\n')],-1),p=Object(d.createStaticVNode)('<h3 id="atributos"><a class="header-anchor" href="#atributos">¶</a> Atributos</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>value / v-model</td><td>valor enlazado</td><td>boolean / string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>si Switch esta deshabilitado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>width</td><td>ancho del componente Switch</td><td>number</td><td>—</td><td>40</td></tr><tr><td>active-icon-class</td><td>nombre de la clase del icono mostrado en el estado <code>on</code>, sobrescribe <code>active-text</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>inactive-icon-class</td><td>nombre de la clase del icono mostrado en el estado <code>off</code>, sobrescribe <code>inactive-text</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>active-text</td><td>texto mostrado en el estado <code>on</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>inactive-text</td><td>texto mostrado en el estado <code>off</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>active-value</td><td>cambia su valor cuando se encuentra en el estado <code>on</code></td><td>boolean / string / number</td><td>—</td><td>true</td></tr><tr><td>inactive-value</td><td>cambia su valor cuando se encuentra en el estado <code>off</code></td><td>boolean / string / number</td><td>—</td><td>false</td></tr><tr><td>active-color</td><td>color de fondo cuando se encuentra en el estado <code>on</code></td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>inactive-color</td><td>color de fondo cuando se encuentra en el estado <code>off</code></td><td>string</td><td>—</td><td>#C0CCDA</td></tr><tr><td>name</td><td>nombre de entrada del componente Switch</td><td>string</td><td>—</td><td>—</td></tr><tr><td>validate-event</td><td>si se debe lanzar la validación de formulario</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table><h3 id="eventos"><a class="header-anchor" href="#eventos">¶</a> Eventos</h3><table><thead><tr><th>Nombre del evento</th><th>Descripción</th><th>Parametro</th></tr></thead><tbody><tr><td>change</td><td>se dispara cuando el valor cambia</td><td>valor</td></tr></tbody></table><p>después de cambiar</p><h3 id="metodos"><a class="header-anchor" href="#metodos">¶</a> Metodos</h3><table><thead><tr><th>Metodo</th><th>Descripción</th><th>Parametro</th></tr></thead><tbody><tr><td>focus</td><td>foco al componente Switch</td><td>—</td></tr></tbody></table>',7);var N={name:"component-doc",components:{"element-demo0":function(){const{resolveComponent:e,createVNode:t,openBlock:o,createBlock:c}=d;const a={data:()=>({value1:!0,value2:!0})};return Object.assign({render:function(d,a){const l=e("el-switch");return o(),c("div",null,[t(l,{modelValue:d.value1,"onUpdate:modelValue":a[1]||(a[1]=e=>d.value1=e)},null,8,["modelValue"]),t(l,{modelValue:d.value2,"onUpdate:modelValue":a[2]||(a[2]=e=>d.value2=e),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])}},a)}(),"element-demo1":function(){const{resolveComponent:e,createVNode:t,openBlock:o,createBlock:c}=d;const a={data:()=>({value1:!0,value2:!0})};return Object.assign({render:function(d,a){const l=e("el-switch");return o(),c("div",null,[t(l,{modelValue:d.value1,"onUpdate:modelValue":a[1]||(a[1]=e=>d.value1=e),"active-text":"Pay by month","inactive-text":"Pay by year"},null,8,["modelValue"]),t(l,{style:{display:"block"},modelValue:d.value2,"onUpdate:modelValue":a[2]||(a[2]=e=>d.value2=e),"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"Pay by month","inactive-text":"Pay by year"},null,8,["modelValue"])])}},a)}(),"element-demo2":function(){const{resolveComponent:e,createVNode:t,withCtx:o,openBlock:c,createBlock:a}=d;const l={data:()=>({value:"100"})};return Object.assign({render:function(d,l){const n=e("el-switch"),r=e("el-tooltip");return c(),a("div",null,[t(r,{content:"Switch value: "+d.value,placement:"top"},{default:o(()=>[t(n,{modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=e=>d.value=e),"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"100","inactive-value":"0"},null,8,["modelValue"])]),_:1},8,["content"])])}},l)}(),"element-demo3":function(){const{resolveComponent:e,createVNode:t,openBlock:o,createBlock:c}=d;const a={data:()=>({value1:!0,value2:!1})};return Object.assign({render:function(d,a){const l=e("el-switch");return o(),c("div",null,[t(l,{modelValue:d.value1,"onUpdate:modelValue":a[1]||(a[1]=e=>d.value1=e),disabled:""},null,8,["modelValue"]),t(l,{modelValue:d.value2,"onUpdate:modelValue":a[2]||(a[2]=e=>d.value2=e),disabled:""},null,8,["modelValue"])])}},a)}()},render:function(e,t,o,N,x,f){const w=Object(d.resolveComponent)("element-demo0"),y=Object(d.resolveComponent)("demo-block"),g=Object(d.resolveComponent)("element-demo1"),C=Object(d.resolveComponent)("element-demo2"),T=Object(d.resolveComponent)("element-demo3");return Object(d.openBlock)(),Object(d.createBlock)("section",c,[a,l,n,Object(d.createVNode)(y,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(w)]),highlight:Object(d.withCtx)(()=>[i]),default:Object(d.withCtx)(()=>[r]),_:1}),s,Object(d.createVNode)(y,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(g)]),highlight:Object(d.withCtx)(()=>[b]),default:Object(d.withCtx)(()=>[u]),_:1}),v,Object(d.createVNode)(y,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(C)]),highlight:Object(d.withCtx)(()=>[m]),default:Object(d.withCtx)(()=>[h]),_:1}),V,Object(d.createVNode)(y,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(T)]),highlight:Object(d.withCtx)(()=>[O]),default:Object(d.withCtx)(()=>[j]),_:1}),p])}};t.default=N}}]);