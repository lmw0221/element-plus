(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{554:function(e,t,a){"use strict";a.r(t);var c=a(0);const o={class:"content element-doc"},d=Object(c.createVNode)("h2",{id:"calendar"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#calendar"},"¶"),Object(c.createTextVNode)(" Calendar")],-1),l=Object(c.createVNode)("p",null,"Muestra fechas.",-1),n=Object(c.createVNode)("h3",{id:"basico"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#basico"},"¶"),Object(c.createTextVNode)(" Básico")],-1),r=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,"Configure el valor para especificar el mes que se muestra actualmente. Si no se especifica el valor, se muestra el mes actual. el valor soporta la vinculación bidireccional.")],-1),s=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-calendar v-model="value">\n</el-calendar>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: new Date()\n      }\n    }\n  }\n<\/script>\n')],-1),i=Object(c.createVNode)("h3",{id:"contenido-personalizado"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#contenido-personalizado"},"¶"),Object(c.createTextVNode)(" Contenido personalizado")],-1),u=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("Personalice lo que se muestra en la celda del calendario configurando el "),Object(c.createVNode)("code",null,"scoped-slot"),Object(c.createTextVNode)(" llamada "),Object(c.createVNode)("code",null,"dateCell"),Object(c.createTextVNode)(". En la ranura de alcance se puede obtener la fecha (la fecha de la celda actual), los datos (incluyendo el tipo, isSelected, el atributo day). Para obtener más información, consulte la documentación de la API a continuación.")])],-1),b=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},"<el-calendar>\n  <template\n    #dateCell=\"{data}\"\n  >\n    <p :class=\"data.isSelected ? 'is-selected' : ''\">\n      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : '' }}\n    </p>\n  </template>\n</el-calendar>\n<style>\n  .is-selected {\n    color: #1989FA;\n  }\n</style>\n")],-1),h=Object(c.createVNode)("h3",{id:"rango"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#rango"},"¶"),Object(c.createTextVNode)(" Rango")],-1),p=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("Defina el atributo "),Object(c.createVNode)("code",null,"range"),Object(c.createTextVNode)(" para especificar el rango de visualización del calendario. El tiempo de inicio debe ser el lunes, el tiempo de finalización debe ser el domingo y el período no puede exceder los dos meses.")])],-1),m=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-calendar :range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]">\n</el-calendar>\n')],-1),j=Object(c.createStaticVNode)('<h3 id="atributos"><a class="header-anchor" href="#atributos">¶</a> Atributos</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>value / v-model</td><td>valor vinculante</td><td>Date</td><td>—</td><td>—</td></tr><tr><td>range</td><td>rango de tiempo, incluyendo el tiempo de inicio y el tiempo final. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months</td><td>[Date]Array</td><td>—</td><td>—</td></tr></tbody></table><h3 id="datecell-scoped-slot"><a class="header-anchor" href="#datecell-scoped-slot">¶</a> dateCell scoped slot</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>date</td><td>fecha que la celda representa</td><td>Date</td><td>—</td><td>—</td></tr><tr><td>data</td><td>{ type, isSelected, day}. <code>type</code> indica el mes al que pertenece la fecha, los valores opcionales son mes anterior, mes actual, mes siguiente; <code>isSelected</code> indica si la fecha está seleccionada; <code>day</code> es la fecha formateada en el formato yyyy-MM-dd</td><td>Object</td><td>—</td><td>—</td></tr></tbody></table>',4);var O={name:"component-doc",components:{"element-demo0":function(){const{resolveComponent:e,createVNode:t,openBlock:a,createBlock:o}=c;const d={data:()=>({value:new Date})};return Object.assign({render:function(c,d){const l=e("el-calendar");return a(),o("div",null,[t(l,{modelValue:c.value,"onUpdate:modelValue":d[1]||(d[1]=e=>c.value=e)},null,8,["modelValue"])])}},d)}(),"element-demo1":function(){const{toDisplayString:e,createVNode:t,resolveComponent:a,withCtx:o,openBlock:d,createBlock:l}=c;return Object.assign({render:function(c,n){const r=a("el-calendar");return d(),l("div",null,[t(r,null,{dateCell:o(({data:a})=>[t("p",{class:a.isSelected?"is-selected":""},e(a.day.split("-").slice(1).join("-"))+" "+e(a.isSelected?"✔️":""),3)]),_:1})])}},{})}(),"element-demo2":function(){const{resolveComponent:e,createVNode:t,openBlock:a,createBlock:o}=c;return Object.assign({render:function(c,d){const l=e("el-calendar");return a(),o("div",null,[t(l,{range:[new Date(2019,2,4),new Date(2019,2,24)]},null,8,["range"])])}},{})}()},render:function(e,t,a,O,V,N){const f=Object(c.resolveComponent)("element-demo0"),v=Object(c.resolveComponent)("demo-block"),w=Object(c.resolveComponent)("element-demo1"),y=Object(c.resolveComponent)("element-demo2");return Object(c.openBlock)(),Object(c.createBlock)("section",o,[d,l,n,Object(c.createVNode)(v,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(f)]),highlight:Object(c.withCtx)(()=>[s]),default:Object(c.withCtx)(()=>[r]),_:1}),i,Object(c.createVNode)(v,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(w)]),highlight:Object(c.withCtx)(()=>[b]),default:Object(c.withCtx)(()=>[u]),_:1}),h,Object(c.createVNode)(v,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(y)]),highlight:Object(c.withCtx)(()=>[m]),default:Object(c.withCtx)(()=>[p]),_:1}),j])}};t.default=O}}]);