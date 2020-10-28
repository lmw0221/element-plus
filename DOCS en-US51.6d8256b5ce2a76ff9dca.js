(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{536:function(e,t,a){"use strict";a.r(t);var n=a(0);const l={class:"content element-doc"},d=Object(n.createVNode)("h2",{id:"tabs"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#tabs"},"¶"),Object(n.createTextVNode)(" Tabs")],-1),o=Object(n.createVNode)("p",null,"Divide data collections which are related yet belong to different types.",-1),b=Object(n.createVNode)("h3",{id:"basic-usage"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#basic-usage"},"¶"),Object(n.createTextVNode)(" Basic usage")],-1),c=Object(n.createVNode)("p",null,"Basic and concise tabs.",-1),r=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Tabs provide a selective card functionality. By default the first tab is selected as active, and you can activate any tab by setting the "),Object(n.createVNode)("code",null,"value"),Object(n.createTextVNode)(" attribute.")])],-1),i=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-tabs v-model="activeName" @tab-click="handleClick">\n    <el-tab-pane label="User" name="first">User</el-tab-pane>\n    <el-tab-pane label="Config" name="second">Config</el-tab-pane>\n    <el-tab-pane label="Role" name="third">Role</el-tab-pane>\n    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: \'first\'\n      };\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event);\n      }\n    }\n  };\n<\/script>\n')],-1),s=Object(n.createVNode)("h3",{id:"card-style"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#card-style"},"¶"),Object(n.createTextVNode)(" Card Style")],-1),u=Object(n.createVNode)("p",null,"Tabs styled as cards.",-1),h=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Set "),Object(n.createVNode)("code",null,"type"),Object(n.createTextVNode)(" to "),Object(n.createVNode)("code",null,"card"),Object(n.createTextVNode)(" can get a card-styled tab.")])],-1),m=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-tabs type="card" @tab-click="handleClick">\n    <el-tab-pane label="User">User</el-tab-pane>\n    <el-tab-pane label="Config">Config</el-tab-pane>\n    <el-tab-pane label="Role">Role</el-tab-pane>\n    <el-tab-pane label="Task">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: \'first\'\n      };\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event);\n      }\n    }\n  };\n<\/script>\n')],-1),p=Object(n.createVNode)("h3",{id:"border-card"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#border-card"},"¶"),Object(n.createTextVNode)(" Border card")],-1),f=Object(n.createVNode)("p",null,"Border card tabs.",-1),T=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Set "),Object(n.createVNode)("code",null,"type"),Object(n.createTextVNode)(" to "),Object(n.createVNode)("code",null,"border-card"),Object(n.createTextVNode)(".")])],-1),N=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-tabs type="border-card">\n  <el-tab-pane label="User">User</el-tab-pane>\n  <el-tab-pane label="Config">Config</el-tab-pane>\n  <el-tab-pane label="Role">Role</el-tab-pane>\n  <el-tab-pane label="Task">Task</el-tab-pane>\n</el-tabs>\n')],-1),V=Object(n.createVNode)("h3",{id:"tab-position"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#tab-position"},"¶"),Object(n.createTextVNode)(" Tab position")],-1),j=Object(n.createVNode)("p",null,[Object(n.createTextVNode)("You can use "),Object(n.createVNode)("code",null,"tab-position"),Object(n.createTextVNode)(" attribute to set the tab's position.")],-1),O=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("You can choose from four directions: "),Object(n.createVNode)("code",null,'tabPosition="left|right|top|bottom"')])],-1),g=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">\n    <el-radio-button label="top">top</el-radio-button>\n    <el-radio-button label="right">right</el-radio-button>\n    <el-radio-button label="bottom">bottom</el-radio-button>\n    <el-radio-button label="left">left</el-radio-button>\n  </el-radio-group>\n\n  <el-tabs :tab-position="tabPosition" style="height: 200px;">\n    <el-tab-pane label="User">User</el-tab-pane>\n    <el-tab-pane label="Config">Config</el-tab-pane>\n    <el-tab-pane label="Role">Role</el-tab-pane>\n    <el-tab-pane label="Task">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tabPosition: \'left\'\n      };\n    }\n  };\n<\/script>\n')],-1),v=Object(n.createVNode)("h3",{id:"custom-tab"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#custom-tab"},"¶"),Object(n.createTextVNode)(" Custom Tab")],-1),x=Object(n.createVNode)("p",null,"You can use named slot to customize the tab label content.",-1),C=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-tabs type="border-card">\n  <el-tab-pane>\n    <span slot="label"><i class="el-icon-date"></i> Route</span>\n    Route\n  </el-tab-pane>\n  <el-tab-pane label="Config">Config</el-tab-pane>\n  <el-tab-pane label="Role">Role</el-tab-pane>\n  <el-tab-pane label="Task">Task</el-tab-pane>\n</el-tabs>\n')],-1),k=Object(n.createVNode)("h3",{id:"add-close-tab"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#add-close-tab"},"¶"),Object(n.createTextVNode)(" Add & close tab")],-1),w=Object(n.createVNode)("p",null,"Only card type Tabs support addable & closeable.",-1),y=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},"<el-tabs v-model=\"editableTabsValue\" type=\"card\" editable @edit=\"handleTabsEdit\">\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [{\n          title: 'Tab 1',\n          name: '1',\n          content: 'Tab 1 content'\n        }, {\n          title: 'Tab 2',\n          name: '2',\n          content: 'Tab 2 content'\n        }],\n        tabIndex: 2\n      }\n    },\n    methods: {\n      handleTabsEdit(targetName, action) {\n        if (action === 'add') {\n          let newTabName = ++this.tabIndex + '';\n          this.editableTabs.push({\n            title: 'New Tab',\n            name: newTabName,\n            content: 'New Tab content'\n          });\n          this.editableTabsValue = newTabName;\n        }\n        if (action === 'remove') {\n          let tabs = this.editableTabs;\n          let activeName = this.editableTabsValue;\n          if (activeName === targetName) {\n            tabs.forEach((tab, index) => {\n              if (tab.name === targetName) {\n                let nextTab = tabs[index + 1] || tabs[index - 1];\n                if (nextTab) {\n                  activeName = nextTab.name;\n                }\n              }\n            });\n          }\n          \n          this.editableTabsValue = activeName;\n          this.editableTabs = tabs.filter(tab => tab.name !== targetName);\n        }\n      }\n    }\n  }\n<\/script>\n")],-1),_=Object(n.createVNode)("h3",{id:"customized-trigger-button-of-new-tab"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#customized-trigger-button-of-new-tab"},"¶"),Object(n.createTextVNode)(" Customized trigger button of new tab")],-1),R=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},"<div style=\"margin-bottom: 20px;\">\n  <el-button\n    size=\"small\"\n    @click=\"addTab(editableTabsValue)\"\n  >\n    add tab\n  </el-button>\n</div>\n<el-tabs v-model=\"editableTabsValue\" type=\"card\" closable @tab-remove=\"removeTab\">\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [{\n          title: 'Tab 1',\n          name: '1',\n          content: 'Tab 1 content'\n        }, {\n          title: 'Tab 2',\n          name: '2',\n          content: 'Tab 2 content'\n        }],\n        tabIndex: 2\n      }\n    },\n    methods: {\n      addTab(targetName) {\n        let newTabName = ++this.tabIndex + '';\n        this.editableTabs.push({\n          title: 'New Tab',\n          name: newTabName,\n          content: 'New Tab content'\n        });\n        this.editableTabsValue = newTabName;\n      },\n      removeTab(targetName) {\n        let tabs = this.editableTabs;\n        let activeName = this.editableTabsValue;\n        if (activeName === targetName) {\n          tabs.forEach((tab, index) => {\n            if (tab.name === targetName) {\n              let nextTab = tabs[index + 1] || tabs[index - 1];\n              if (nextTab) {\n                activeName = nextTab.name;\n              }\n            }\n          });\n        }\n        \n        this.editableTabsValue = activeName;\n        this.editableTabs = tabs.filter(tab => tab.name !== targetName);\n      }\n    }\n  }\n<\/script>\n")],-1),B=Object(n.createStaticVNode)('<h3 id="tabs-attributes"><a class="header-anchor" href="#tabs-attributes">¶</a> Tabs Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>value / v-model</td><td>binding value, name of the selected tab</td><td>string</td><td>—</td><td>name of first tab</td></tr><tr><td>type</td><td>type of Tab</td><td>string</td><td>card/border-card</td><td>—</td></tr><tr><td>closable</td><td>whether Tab is closable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>addable</td><td>whether Tab is addable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>whether Tab is addable and closable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tab-position</td><td>position of tabs</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>whether width of tab automatically fits its container</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>hook function before switching tab. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, switching will be prevented</td><td>Function(activeName, oldActiveName)</td><td>—</td><td>—</td></tr></tbody></table><h3 id="tabs-events"><a class="header-anchor" href="#tabs-events">¶</a> Tabs Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>tab-click</td><td>triggers when a tab is clicked</td><td>clicked tab</td></tr><tr><td>tab-remove</td><td>triggers when tab-remove button is clicked</td><td>name of the removed tab</td></tr><tr><td>tab-add</td><td>triggers when tab-add button is clicked</td><td>—</td></tr><tr><td>edit</td><td>triggers when tab-add button or tab-remove is clicked</td><td>(targetName, action)</td></tr></tbody></table><h3 id="tab-pane-attributes"><a class="header-anchor" href="#tab-pane-attributes">¶</a> Tab-pane Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>title of the tab</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether Tab is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>identifier corresponding to the name of Tabs, representing the alias of the tab-pane</td><td>string</td><td>—</td><td>ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is &#39;1&#39;</td></tr><tr><td>closable</td><td>whether Tab is closable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lazy</td><td>whether Tab is lazily rendered</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>',6);var U={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:e,resolveComponent:t,withCtx:a,createVNode:l,openBlock:d,createBlock:o}=n,b=e("User"),c=e("Config"),r=e("Role"),i=e("Task");const s={data:()=>({activeName:"first"}),methods:{handleClick(e,t){console.log(e,t)}}};return Object.assign({render:function(e,n){const s=t("el-tab-pane"),u=t("el-tabs");return d(),o("div",null,[l(u,{modelValue:e.activeName,"onUpdate:modelValue":n[1]||(n[1]=t=>e.activeName=t),"onTab-click":e.handleClick},{default:a(()=>[l(s,{label:"User",name:"first"},{default:a(()=>[b]),_:1}),l(s,{label:"Config",name:"second"},{default:a(()=>[c]),_:1}),l(s,{label:"Role",name:"third"},{default:a(()=>[r]),_:1}),l(s,{label:"Task",name:"fourth"},{default:a(()=>[i]),_:1})]),_:1},8,["modelValue","onTab-click"])])}},s)}(),"element-demo1":function(){const{createTextVNode:e,resolveComponent:t,withCtx:a,createVNode:l,openBlock:d,createBlock:o}=n,b=e("User"),c=e("Config"),r=e("Role"),i=e("Task");const s={data:()=>({activeName:"first"}),methods:{handleClick(e,t){console.log(e,t)}}};return Object.assign({render:function(e,n){const s=t("el-tab-pane"),u=t("el-tabs");return d(),o("div",null,[l(u,{type:"card","onTab-click":e.handleClick},{default:a(()=>[l(s,{label:"User"},{default:a(()=>[b]),_:1}),l(s,{label:"Config"},{default:a(()=>[c]),_:1}),l(s,{label:"Role"},{default:a(()=>[r]),_:1}),l(s,{label:"Task"},{default:a(()=>[i]),_:1})]),_:1},8,["onTab-click"])])}},s)}(),"element-demo2":function(){const{createTextVNode:e,resolveComponent:t,withCtx:a,createVNode:l,openBlock:d,createBlock:o}=n,b=e("User"),c=e("Config"),r=e("Role"),i=e("Task");return Object.assign({render:function(e,n){const s=t("el-tab-pane"),u=t("el-tabs");return d(),o("div",null,[l(u,{type:"border-card"},{default:a(()=>[l(s,{label:"User"},{default:a(()=>[b]),_:1}),l(s,{label:"Config"},{default:a(()=>[c]),_:1}),l(s,{label:"Role"},{default:a(()=>[r]),_:1}),l(s,{label:"Task"},{default:a(()=>[i]),_:1})]),_:1})])}},{})}(),"element-demo3":function(){const{createTextVNode:e,resolveComponent:t,withCtx:a,createVNode:l,openBlock:d,createBlock:o}=n,b=e("top"),c=e("right"),r=e("bottom"),i=e("left"),s=e("User"),u=e("Config"),h=e("Role"),m=e("Task");const p={data:()=>({tabPosition:"left"})};return Object.assign({render:function(e,n){const p=t("el-radio-button"),f=t("el-radio-group"),T=t("el-tab-pane"),N=t("el-tabs");return d(),o("div",null,[l(f,{modelValue:e.tabPosition,"onUpdate:modelValue":n[1]||(n[1]=t=>e.tabPosition=t),style:{"margin-bottom":"30px"}},{default:a(()=>[l(p,{label:"top"},{default:a(()=>[b]),_:1}),l(p,{label:"right"},{default:a(()=>[c]),_:1}),l(p,{label:"bottom"},{default:a(()=>[r]),_:1}),l(p,{label:"left"},{default:a(()=>[i]),_:1})]),_:1},8,["modelValue"]),l(N,{"tab-position":e.tabPosition,style:{height:"200px"}},{default:a(()=>[l(T,{label:"User"},{default:a(()=>[s]),_:1}),l(T,{label:"Config"},{default:a(()=>[u]),_:1}),l(T,{label:"Role"},{default:a(()=>[h]),_:1}),l(T,{label:"Task"},{default:a(()=>[m]),_:1})]),_:1},8,["tab-position"])])}},p)}(),"element-demo4":function(){const{createVNode:e,createTextVNode:t,resolveComponent:a,withCtx:l,openBlock:d,createBlock:o}=n,b=e("span",{slot:"label"},[e("i",{class:"el-icon-date"}),t(" Route")],-1),c=t(" Route "),r=t("Config"),i=t("Role"),s=t("Task");return Object.assign({render:function(t,n){const u=a("el-tab-pane"),h=a("el-tabs");return d(),o("div",null,[e(h,{type:"border-card"},{default:l(()=>[e(u,null,{default:l(()=>[b,c]),_:1}),e(u,{label:"Config"},{default:l(()=>[r]),_:1}),e(u,{label:"Role"},{default:l(()=>[i]),_:1}),e(u,{label:"Task"},{default:l(()=>[s]),_:1})]),_:1})])}},{})}(),"element-demo5":function(){const{renderList:e,Fragment:t,openBlock:a,createBlock:l,toDisplayString:d,createTextVNode:o,resolveComponent:b,withCtx:c,createVNode:r}=n;const i={data:()=>({editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}),methods:{handleTabsEdit(e,t){if("add"===t){let e=++this.tabIndex+"";this.editableTabs.push({title:"New Tab",name:e,content:"New Tab content"}),this.editableTabsValue=e}if("remove"===t){let t=this.editableTabs,a=this.editableTabsValue;a===e&&t.forEach((n,l)=>{if(n.name===e){let e=t[l+1]||t[l-1];e&&(a=e.name)}}),this.editableTabsValue=a,this.editableTabs=t.filter(t=>t.name!==e)}}}};return Object.assign({render:function(n,i){const s=b("el-tab-pane"),u=b("el-tabs");return a(),l("div",null,[r(u,{modelValue:n.editableTabsValue,"onUpdate:modelValue":i[1]||(i[1]=e=>n.editableTabsValue=e),type:"card",editable:"",onEdit:n.handleTabsEdit},{default:c(()=>[(a(!0),l(t,null,e(n.editableTabs,(e,t)=>(a(),l(s,{key:e.name,label:e.title,name:e.name},{default:c(()=>[o(d(e.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue","onEdit"])])}},i)}(),"element-demo6":function(){const{createTextVNode:e,resolveComponent:t,withCtx:a,createVNode:l,renderList:d,Fragment:o,openBlock:b,createBlock:c,toDisplayString:r}=n,i={style:{"margin-bottom":"20px"}},s=e(" add tab ");const u={data:()=>({editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}),methods:{addTab(e){let t=++this.tabIndex+"";this.editableTabs.push({title:"New Tab",name:t,content:"New Tab content"}),this.editableTabsValue=t},removeTab(e){let t=this.editableTabs,a=this.editableTabsValue;a===e&&t.forEach((n,l)=>{if(n.name===e){let e=t[l+1]||t[l-1];e&&(a=e.name)}}),this.editableTabsValue=a,this.editableTabs=t.filter(t=>t.name!==e)}}};return Object.assign({render:function(n,u){const h=t("el-button"),m=t("el-tab-pane"),p=t("el-tabs");return b(),c("div",null,[l("div",i,[l(h,{size:"small",onClick:u[1]||(u[1]=e=>n.addTab(n.editableTabsValue))},{default:a(()=>[s]),_:1})]),l(p,{modelValue:n.editableTabsValue,"onUpdate:modelValue":u[2]||(u[2]=e=>n.editableTabsValue=e),type:"card",closable:"","onTab-remove":n.removeTab},{default:a(()=>[(b(!0),c(o,null,d(n.editableTabs,(t,n)=>(b(),c(m,{key:t.name,label:t.title,name:t.name},{default:a(()=>[e(r(t.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue","onTab-remove"])])}},u)}()},render:function(e,t,a,U,E,P){const I=Object(n.resolveComponent)("element-demo0"),z=Object(n.resolveComponent)("demo-block"),A=Object(n.resolveComponent)("element-demo1"),D=Object(n.resolveComponent)("element-demo2"),S=Object(n.resolveComponent)("element-demo3"),F=Object(n.resolveComponent)("element-demo4"),Y=Object(n.resolveComponent)("element-demo5"),J=Object(n.resolveComponent)("element-demo6");return Object(n.openBlock)(),Object(n.createBlock)("section",l,[d,o,b,c,Object(n.createVNode)(z,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(I)]),highlight:Object(n.withCtx)(()=>[i]),default:Object(n.withCtx)(()=>[r]),_:1}),s,u,Object(n.createVNode)(z,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(A)]),highlight:Object(n.withCtx)(()=>[m]),default:Object(n.withCtx)(()=>[h]),_:1}),p,f,Object(n.createVNode)(z,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(D)]),highlight:Object(n.withCtx)(()=>[N]),default:Object(n.withCtx)(()=>[T]),_:1}),V,j,Object(n.createVNode)(z,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(S)]),highlight:Object(n.withCtx)(()=>[g]),default:Object(n.withCtx)(()=>[O]),_:1}),v,x,Object(n.createVNode)(z,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(F)]),highlight:Object(n.withCtx)(()=>[C]),_:1}),k,w,Object(n.createVNode)(z,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(Y)]),highlight:Object(n.withCtx)(()=>[y]),_:1}),_,Object(n.createVNode)(z,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(J)]),highlight:Object(n.withCtx)(()=>[R]),_:1}),B])}};t.default=U}}]);