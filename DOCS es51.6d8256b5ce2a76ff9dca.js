(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{594:function(e,t,a){"use strict";a.r(t);var n=a(0);const l={class:"content element-doc"},o=Object(n.createVNode)("h2",{id:"tabulacion"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#tabulacion"},"¶"),Object(n.createTextVNode)(" Tabulación")],-1),d=Object(n.createVNode)("p",null,"Divide colecciones de datos que están relacionados pero pertenecen a diferentes tipos.",-1),c=Object(n.createVNode)("h3",{id:"uso-basico"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#uso-basico"},"¶"),Object(n.createTextVNode)(" Uso básico")],-1),b=Object(n.createVNode)("p",null,"Tabulación básica y concisa",-1),r=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Tabulación provee funcionalidad de tarjeta selectiva. Por defecto, la primer pestaña es seleccionada como activa, y es posible activar cualquier pestaña estableciendo el atributo de "),Object(n.createVNode)("code",null,"value"),Object(n.createTextVNode)(".")])],-1),s=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-tabs v-model="activeName" @tab-click="handleClick">\n    <el-tab-pane label="User" name="first">User</el-tab-pane>\n    <el-tab-pane label="Config" name="second">Config</el-tab-pane>\n    <el-tab-pane label="Role" name="third">Role</el-tab-pane>\n    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: \'first\'\n      };\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event);\n      }\n    }\n  };\n<\/script>\n')],-1),i=Object(n.createVNode)("h3",{id:"estilo-de-tarjeta"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#estilo-de-tarjeta"},"¶"),Object(n.createTextVNode)(" Estilo de Tarjeta")],-1),u=Object(n.createVNode)("p",null,"Pestañas diseñadas como tarjetas.",-1),p=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Establecer "),Object(n.createVNode)("code",null,"type"),Object(n.createTextVNode)(" a "),Object(n.createVNode)("code",null,"card"),Object(n.createTextVNode)(" para obtener una pestaña diseñada como tarjeta.")])],-1),m=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-tabs type="card" @tab-click="handleClick">\n    <el-tab-pane label="User">User</el-tab-pane>\n    <el-tab-pane label="Config">Config</el-tab-pane>\n    <el-tab-pane label="Role">Role</el-tab-pane>\n    <el-tab-pane label="Task">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: \'first\'\n      };\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event);\n      }\n    }\n  };\n<\/script>\n')],-1),h=Object(n.createVNode)("h3",{id:"tarjeta-con-bordes"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#tarjeta-con-bordes"},"¶"),Object(n.createTextVNode)(" Tarjeta con Bordes")],-1),T=Object(n.createVNode)("p",null,"Pestañas de tarjeta con bordes.",-1),f=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Establecer "),Object(n.createVNode)("code",null,"type"),Object(n.createTextVNode)(" a "),Object(n.createVNode)("code",null,"border-card"),Object(n.createTextVNode)(".")])],-1),N=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-tabs type="border-card">\n  <el-tab-pane label="User">User</el-tab-pane>\n  <el-tab-pane label="Config">Config</el-tab-pane>\n  <el-tab-pane label="Role">Role</el-tab-pane>\n  <el-tab-pane label="Task">Task</el-tab-pane>\n</el-tabs>\n')],-1),V=Object(n.createVNode)("h3",{id:"posicion-de-tabulacion"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#posicion-de-tabulacion"},"¶"),Object(n.createTextVNode)(" Posición de tabulación")],-1),j=Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Es posible usar el atributo "),Object(n.createVNode)("code",null,"tab-position"),Object(n.createTextVNode)(" para establecer la posición de la tabulación.")],-1),O=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Es posible escoger entre cuatro direcciones: "),Object(n.createVNode)("code",null,'tabPosition="left|right|top|bottom"')])],-1),v=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">\n    <el-radio-button label="top">top</el-radio-button>\n    <el-radio-button label="right">right</el-radio-button>\n    <el-radio-button label="bottom">bottom</el-radio-button>\n    <el-radio-button label="left">left</el-radio-button>\n  </el-radio-group>\n\n  <el-tabs :tab-position="tabPosition" style="height: 200px;">\n    <el-tab-pane label="User">User</el-tab-pane>\n    <el-tab-pane label="Config">Config</el-tab-pane>\n    <el-tab-pane label="Role">Role</el-tab-pane>\n    <el-tab-pane label="Task">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tabPosition: \'left\'\n      };\n    }\n  };\n<\/script>\n')],-1),g=Object(n.createVNode)("h3",{id:"pestana-personalizada"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#pestana-personalizada"},"¶"),Object(n.createTextVNode)(" Pestaña Personalizada")],-1),x=Object(n.createVNode)("p",null,"Es posible usar slots con nombre para personalizar el contenido de la etiqueta de la pestaña.",-1),C=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-tabs type="border-card">\n  <el-tab-pane>\n    <span slot="label"><i class="el-icon-date"></i> Route</span>\n    Route\n  </el-tab-pane>\n  <el-tab-pane label="Config">Config</el-tab-pane>\n  <el-tab-pane label="Role">Role</el-tab-pane>\n  <el-tab-pane label="Task">Task</el-tab-pane>\n</el-tabs>\n')],-1),k=Object(n.createVNode)("h3",{id:"agregar-y-cerrar-pestana"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#agregar-y-cerrar-pestana"},"¶"),Object(n.createTextVNode)(" Agregar y cerrar pestaña")],-1),w=Object(n.createVNode)("p",null,"Solo las pestañas de tipo tarjeta soportan adición y cierre.",-1),y=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},"<el-tabs v-model=\"editableTabsValue\" type=\"card\" editable @edit=\"handleTabsEdit\">\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [{\n          title: 'Tab 1',\n          name: '1',\n          content: 'Tab 1 content'\n        }, {\n          title: 'Tab 2',\n          name: '2',\n          content: 'Tab 2 content'\n        }],\n        tabIndex: 2\n      }\n    },\n    methods: {\n      handleTabsEdit(targetName, action) {\n        if (action === 'add') {\n          let newTabName = ++this.tabIndex + '';\n          this.editableTabs.push({\n            title: 'New Tab',\n            name: newTabName,\n            content: 'New Tab content'\n          });\n          this.editableTabsValue = newTabName;\n        }\n        if (action === 'remove') {\n          let tabs = this.editableTabs;\n          let activeName = this.editableTabsValue;\n          if (activeName === targetName) {\n            tabs.forEach((tab, index) => {\n              if (tab.name === targetName) {\n                let nextTab = tabs[index + 1] || tabs[index - 1];\n                if (nextTab) {\n                  activeName = nextTab.name;\n                }\n              }\n            });\n          }\n          \n          this.editableTabsValue = activeName;\n          this.editableTabs = tabs.filter(tab => tab.name !== targetName);\n        }\n      }\n    }\n  }\n<\/script>\n")],-1),_=Object(n.createVNode)("h3",{id:"boton-disparador-personalizado-de-la-nueva-pestana"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#boton-disparador-personalizado-de-la-nueva-pestana"},"¶"),Object(n.createTextVNode)(" Botón disparador personalizado de la nueva pestaña")],-1),R=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},"<div style=\"margin-bottom: 20px;\">\n  <el-button\n    size=\"small\"\n    @click=\"addTab(editableTabsValue)\"\n  >\n    add tab\n  </el-button>\n</div>\n<el-tabs v-model=\"editableTabsValue\" type=\"card\" closable @tab-remove=\"removeTab\">\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [{\n          title: 'Tab 1',\n          name: '1',\n          content: 'Tab 1 content'\n        }, {\n          title: 'Tab 2',\n          name: '2',\n          content: 'Tab 2 content'\n        }],\n        tabIndex: 2\n      }\n    },\n    methods: {\n      addTab(targetName) {\n        let newTabName = ++this.tabIndex + '';\n        this.editableTabs.push({\n          title: 'New Tab',\n          name: newTabName,\n          content: 'New Tab content'\n        });\n        this.editableTabsValue = newTabName;\n      },\n      removeTab(targetName) {\n        let tabs = this.editableTabs;\n        let activeName = this.editableTabsValue;\n        if (activeName === targetName) {\n          tabs.forEach((tab, index) => {\n            if (tab.name === targetName) {\n              let nextTab = tabs[index + 1] || tabs[index - 1];\n              if (nextTab) {\n                activeName = nextTab.name;\n              }\n            }\n          });\n        }\n        \n        this.editableTabsValue = activeName;\n        this.editableTabs = tabs.filter(tab => tab.name !== targetName);\n      }\n    }\n  }\n<\/script>\n")],-1),P=Object(n.createStaticVNode)('<h3 id="atributos-de-pestanas"><a class="header-anchor" href="#atributos-de-pestanas">¶</a> Atributos de Pestañas</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>value / v-model</td><td>valor enlazado, nombre de la pestaña seleccionada</td><td>string</td><td>—</td><td>nombre de la primer pestaña</td></tr><tr><td>type</td><td>tipo de Pestaña</td><td>string</td><td>card/border-card</td><td>—</td></tr><tr><td>closable</td><td>si la Pestaña es cerrable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>addable</td><td>si la Pestaña es añadible</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>si la Pestaña es añadible y cerrable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tab-position</td><td>posición de tabulación</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>si el ancho del tab se ajusta automáticamente a su contenedor</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>función <code>hook</code> antes de cambiar de pestaña. Si se devuelve <code>false</code> o se devuelve una <code>Promise</code> y luego se rechaza, se evitará el cambio.</td><td>Function(activeName, oldActiveName)</td><td>—</td><td>—</td></tr></tbody></table><h3 id="eventos-de-pestanas"><a class="header-anchor" href="#eventos-de-pestanas">¶</a> Eventos de Pestañas</h3><table><thead><tr><th>Nombre de Evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>tab-click</td><td>se lanza cuando se hace clic a una pestaña</td><td>pestaña clickeada</td></tr><tr><td>tab-remove</td><td>se lanza cuando se hace clic al botón tab-remove</td><td>nombre de la pestaña removida</td></tr><tr><td>tab-add</td><td>se lanza cuando se hace clic al botón tab-add</td><td>—</td></tr><tr><td>edit</td><td>se lanza cuando los botones de tab-add y/o tab-remove son clickeados</td><td>(targetName, action)</td></tr></tbody></table><h3 id="atributos-del-tab-pane"><a class="header-anchor" href="#atributos-del-tab-pane">¶</a> Atributos del Tab-pane</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores Aceptados</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>título de la pestaña</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>si la Tabulación está deshabilitada</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>identificador correspondiente al value de la Tabulación, representando el alias del tab-pane</td><td>string</td><td>—</td><td>número ordinal del tab-pane en la secuencia, p.ej el primer tab-pane de pestañas es &#39;1&#39;</td></tr><tr><td>closable</td><td>si el Tab es cerrable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lazy</td><td>si Tab es renderizado con <code>lazy-load</code></td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>',6);var U={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:e,resolveComponent:t,withCtx:a,createVNode:l,openBlock:o,createBlock:d}=n,c=e("User"),b=e("Config"),r=e("Role"),s=e("Task");const i={data:()=>({activeName:"first"}),methods:{handleClick(e,t){console.log(e,t)}}};return Object.assign({render:function(e,n){const i=t("el-tab-pane"),u=t("el-tabs");return o(),d("div",null,[l(u,{modelValue:e.activeName,"onUpdate:modelValue":n[1]||(n[1]=t=>e.activeName=t),"onTab-click":e.handleClick},{default:a(()=>[l(i,{label:"User",name:"first"},{default:a(()=>[c]),_:1}),l(i,{label:"Config",name:"second"},{default:a(()=>[b]),_:1}),l(i,{label:"Role",name:"third"},{default:a(()=>[r]),_:1}),l(i,{label:"Task",name:"fourth"},{default:a(()=>[s]),_:1})]),_:1},8,["modelValue","onTab-click"])])}},i)}(),"element-demo1":function(){const{createTextVNode:e,resolveComponent:t,withCtx:a,createVNode:l,openBlock:o,createBlock:d}=n,c=e("User"),b=e("Config"),r=e("Role"),s=e("Task");const i={data:()=>({activeName:"first"}),methods:{handleClick(e,t){console.log(e,t)}}};return Object.assign({render:function(e,n){const i=t("el-tab-pane"),u=t("el-tabs");return o(),d("div",null,[l(u,{type:"card","onTab-click":e.handleClick},{default:a(()=>[l(i,{label:"User"},{default:a(()=>[c]),_:1}),l(i,{label:"Config"},{default:a(()=>[b]),_:1}),l(i,{label:"Role"},{default:a(()=>[r]),_:1}),l(i,{label:"Task"},{default:a(()=>[s]),_:1})]),_:1},8,["onTab-click"])])}},i)}(),"element-demo2":function(){const{createTextVNode:e,resolveComponent:t,withCtx:a,createVNode:l,openBlock:o,createBlock:d}=n,c=e("User"),b=e("Config"),r=e("Role"),s=e("Task");return Object.assign({render:function(e,n){const i=t("el-tab-pane"),u=t("el-tabs");return o(),d("div",null,[l(u,{type:"border-card"},{default:a(()=>[l(i,{label:"User"},{default:a(()=>[c]),_:1}),l(i,{label:"Config"},{default:a(()=>[b]),_:1}),l(i,{label:"Role"},{default:a(()=>[r]),_:1}),l(i,{label:"Task"},{default:a(()=>[s]),_:1})]),_:1})])}},{})}(),"element-demo3":function(){const{createTextVNode:e,resolveComponent:t,withCtx:a,createVNode:l,openBlock:o,createBlock:d}=n,c=e("top"),b=e("right"),r=e("bottom"),s=e("left"),i=e("User"),u=e("Config"),p=e("Role"),m=e("Task");const h={data:()=>({tabPosition:"left"})};return Object.assign({render:function(e,n){const h=t("el-radio-button"),T=t("el-radio-group"),f=t("el-tab-pane"),N=t("el-tabs");return o(),d("div",null,[l(T,{modelValue:e.tabPosition,"onUpdate:modelValue":n[1]||(n[1]=t=>e.tabPosition=t),style:{"margin-bottom":"30px"}},{default:a(()=>[l(h,{label:"top"},{default:a(()=>[c]),_:1}),l(h,{label:"right"},{default:a(()=>[b]),_:1}),l(h,{label:"bottom"},{default:a(()=>[r]),_:1}),l(h,{label:"left"},{default:a(()=>[s]),_:1})]),_:1},8,["modelValue"]),l(N,{"tab-position":e.tabPosition,style:{height:"200px"}},{default:a(()=>[l(f,{label:"User"},{default:a(()=>[i]),_:1}),l(f,{label:"Config"},{default:a(()=>[u]),_:1}),l(f,{label:"Role"},{default:a(()=>[p]),_:1}),l(f,{label:"Task"},{default:a(()=>[m]),_:1})]),_:1},8,["tab-position"])])}},h)}(),"element-demo4":function(){const{createVNode:e,createTextVNode:t,resolveComponent:a,withCtx:l,openBlock:o,createBlock:d}=n,c=e("span",{slot:"label"},[e("i",{class:"el-icon-date"}),t(" Route")],-1),b=t(" Route "),r=t("Config"),s=t("Role"),i=t("Task");return Object.assign({render:function(t,n){const u=a("el-tab-pane"),p=a("el-tabs");return o(),d("div",null,[e(p,{type:"border-card"},{default:l(()=>[e(u,null,{default:l(()=>[c,b]),_:1}),e(u,{label:"Config"},{default:l(()=>[r]),_:1}),e(u,{label:"Role"},{default:l(()=>[s]),_:1}),e(u,{label:"Task"},{default:l(()=>[i]),_:1})]),_:1})])}},{})}(),"element-demo5":function(){const{renderList:e,Fragment:t,openBlock:a,createBlock:l,toDisplayString:o,createTextVNode:d,resolveComponent:c,withCtx:b,createVNode:r}=n;const s={data:()=>({editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}),methods:{handleTabsEdit(e,t){if("add"===t){let e=++this.tabIndex+"";this.editableTabs.push({title:"New Tab",name:e,content:"New Tab content"}),this.editableTabsValue=e}if("remove"===t){let t=this.editableTabs,a=this.editableTabsValue;a===e&&t.forEach((n,l)=>{if(n.name===e){let e=t[l+1]||t[l-1];e&&(a=e.name)}}),this.editableTabsValue=a,this.editableTabs=t.filter(t=>t.name!==e)}}}};return Object.assign({render:function(n,s){const i=c("el-tab-pane"),u=c("el-tabs");return a(),l("div",null,[r(u,{modelValue:n.editableTabsValue,"onUpdate:modelValue":s[1]||(s[1]=e=>n.editableTabsValue=e),type:"card",editable:"",onEdit:n.handleTabsEdit},{default:b(()=>[(a(!0),l(t,null,e(n.editableTabs,(e,t)=>(a(),l(i,{key:e.name,label:e.title,name:e.name},{default:b(()=>[d(o(e.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue","onEdit"])])}},s)}(),"element-demo6":function(){const{createTextVNode:e,resolveComponent:t,withCtx:a,createVNode:l,renderList:o,Fragment:d,openBlock:c,createBlock:b,toDisplayString:r}=n,s={style:{"margin-bottom":"20px"}},i=e(" add tab ");const u={data:()=>({editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}),methods:{addTab(e){let t=++this.tabIndex+"";this.editableTabs.push({title:"New Tab",name:t,content:"New Tab content"}),this.editableTabsValue=t},removeTab(e){let t=this.editableTabs,a=this.editableTabsValue;a===e&&t.forEach((n,l)=>{if(n.name===e){let e=t[l+1]||t[l-1];e&&(a=e.name)}}),this.editableTabsValue=a,this.editableTabs=t.filter(t=>t.name!==e)}}};return Object.assign({render:function(n,u){const p=t("el-button"),m=t("el-tab-pane"),h=t("el-tabs");return c(),b("div",null,[l("div",s,[l(p,{size:"small",onClick:u[1]||(u[1]=e=>n.addTab(n.editableTabsValue))},{default:a(()=>[i]),_:1})]),l(h,{modelValue:n.editableTabsValue,"onUpdate:modelValue":u[2]||(u[2]=e=>n.editableTabsValue=e),type:"card",closable:"","onTab-remove":n.removeTab},{default:a(()=>[(c(!0),b(d,null,o(n.editableTabs,(t,n)=>(c(),b(m,{key:t.name,label:t.title,name:t.name},{default:a(()=>[e(r(t.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue","onTab-remove"])])}},u)}()},render:function(e,t,a,U,z,B){const E=Object(n.resolveComponent)("element-demo0"),I=Object(n.resolveComponent)("demo-block"),A=Object(n.resolveComponent)("element-demo1"),D=Object(n.resolveComponent)("element-demo2"),S=Object(n.resolveComponent)("element-demo3"),q=Object(n.resolveComponent)("element-demo4"),F=Object(n.resolveComponent)("element-demo5"),J=Object(n.resolveComponent)("element-demo6");return Object(n.openBlock)(),Object(n.createBlock)("section",l,[o,d,c,b,Object(n.createVNode)(I,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(E)]),highlight:Object(n.withCtx)(()=>[s]),default:Object(n.withCtx)(()=>[r]),_:1}),i,u,Object(n.createVNode)(I,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(A)]),highlight:Object(n.withCtx)(()=>[m]),default:Object(n.withCtx)(()=>[p]),_:1}),h,T,Object(n.createVNode)(I,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(D)]),highlight:Object(n.withCtx)(()=>[N]),default:Object(n.withCtx)(()=>[f]),_:1}),V,j,Object(n.createVNode)(I,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(S)]),highlight:Object(n.withCtx)(()=>[v]),default:Object(n.withCtx)(()=>[O]),_:1}),g,x,Object(n.createVNode)(I,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(q)]),highlight:Object(n.withCtx)(()=>[C]),_:1}),k,w,Object(n.createVNode)(I,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(F)]),highlight:Object(n.withCtx)(()=>[y]),_:1}),_,Object(n.createVNode)(I,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(J)]),highlight:Object(n.withCtx)(()=>[R]),_:1}),P])}};t.default=U}}]);