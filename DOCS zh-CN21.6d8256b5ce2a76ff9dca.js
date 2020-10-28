(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{451:function(e,t,d){"use strict";d.r(t);var r=d(0);const l={class:"content element-doc"},n=Object(r.createStaticVNode)('<h2 id="drawer-chou-ti"><a class="header-anchor" href="#drawer-chou-ti">¶</a> Drawer 抽屉</h2><p>有些时候, <code>Dialog</code> 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, <code>Drawer</code> 拥有和 <code>Dialog</code> 几乎相同的 API, 在 UI 上带来不一样的体验.</p><h3 id="ji-ben-yong-fa"><a class="header-anchor" href="#ji-ben-yong-fa">¶</a> 基本用法</h3><p>呼出一个临时的侧边栏, 可以从多个方向呼出</p>',4),a=Object(r.createVNode)("div",null,[Object(r.createVNode)("p",null,[Object(r.createTextVNode)("需要设置 "),Object(r.createVNode)("code",null,"visible"),Object(r.createTextVNode)(" 属性，它的"),Object(r.createVNode)("strong",null,"类型"),Object(r.createTextVNode)("是 "),Object(r.createVNode)("code",null,"boolean"),Object(r.createTextVNode)(",当为 "),Object(r.createVNode)("strong",null,"true"),Object(r.createTextVNode)(" 时显示 Drawer。Drawer 分为两个部分："),Object(r.createVNode)("code",null,"title"),Object(r.createTextVNode)(" 和 "),Object(r.createVNode)("code",null,"body"),Object(r.createTextVNode)("，"),Object(r.createVNode)("code",null,"title"),Object(r.createTextVNode)(" 需要具名为 "),Object(r.createVNode)("strong",null,"title"),Object(r.createTextVNode)(" 的 "),Object(r.createVNode)("code",null,"slot"),Object(r.createTextVNode)(", 也可以通过 "),Object(r.createVNode)("code",null,"title"),Object(r.createTextVNode)(" 属性来定义，默认值为空。需要注意的是, Drawer 默认是从右往左打开, 当然可以设置对应的 "),Object(r.createVNode)("code",null,"direction"),Object(r.createTextVNode)(", 详细请参考 "),Object(r.createVNode)("code",null,"direction"),Object(r.createTextVNode)(" 用法 最后，本例还展示了 "),Object(r.createVNode)("code",null,"before-close"),Object(r.createTextVNode)(" 的用法")])],-1),o=Object(r.createVNode)("pre",null,[Object(r.createVNode)("code",{class:"html"},'<el-radio-group v-model="direction">\n  <el-radio label="ltr">从左往右开</el-radio>\n  <el-radio label="rtl">从右往左开</el-radio>\n  <el-radio label="ttb">从上往下开</el-radio>\n  <el-radio label="btt">从下往上开</el-radio>\n</el-radio-group>\n\n<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">\n  点我打开\n</el-button>\n\n<el-drawer\n  title="我是标题"\n  :visible.sync="drawer"\n  :direction="direction"\n  :before-close="handleClose">\n  <span>我来啦!</span>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawer: false,\n        direction: \'rtl\',\n      };\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm(\'确认关闭？\')\n          .then(_ => {\n            done();\n          })\n          .catch(_ => {});\n      }\n    }\n  };\n<\/script>\n')],-1),c=Object(r.createVNode)("h3",{id:"bu-tian-jia-title"},[Object(r.createVNode)("a",{class:"header-anchor",href:"#bu-tian-jia-title"},"¶"),Object(r.createTextVNode)(" 不添加 Title")],-1),i=Object(r.createVNode)("p",null,"当你不需要标题到时候, 你还可以去掉标题",-1),s=Object(r.createVNode)("div",null,[Object(r.createVNode)("p",null,[Object(r.createTextVNode)("当遇到不需要 title 的场景时, 可以通过 "),Object(r.createVNode)("code",null,"withHeader"),Object(r.createTextVNode)(" 这个属性来关闭掉 title 的显示, 这样可以留出更大的空间给到用户, 为了用户的可访问性, 请务必设定 "),Object(r.createVNode)("code",null,"title"),Object(r.createTextVNode)(" 的值")])],-1),b=Object(r.createVNode)("pre",null,[Object(r.createVNode)("code",{class:"html"},'<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">\n  点我打开\n</el-button>\n\n<el-drawer\n  title="我是标题"\n  :visible.sync="drawer"\n  :with-header="false">\n  <span>我来啦!</span>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawer: false,\n      };\n    }\n  };\n<\/script>\n')],-1),u=Object(r.createVNode)("h3",{id:"zi-ding-yi-nei-rong"},[Object(r.createVNode)("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"},"¶"),Object(r.createTextVNode)(" 自定义内容")],-1),h=Object(r.createVNode)("p",null,[Object(r.createTextVNode)("和 "),Object(r.createVNode)("code",null,"Dialog"),Object(r.createTextVNode)(" 组件一样, "),Object(r.createVNode)("code",null,"Drawer"),Object(r.createTextVNode)(" 同样可以在其内部嵌套各种丰富的操作")],-1),m=Object(r.createVNode)("pre",null,[Object(r.createVNode)("code",{class:"html"},'<el-button type="text" @click="table = true">打开嵌套表格的 Drawer</el-button>\n<el-button type="text" @click="dialog = true">打开嵌套 Form 的 Drawer</el-button>\n<el-drawer\n  title="我嵌套了表格!"\n  :visible.sync="table"\n  direction="rtl"\n  size="50%">\n   <el-table :data="gridData">\n      <el-table-column property="date" label="日期" width="150"></el-table-column>\n      <el-table-column property="name" label="姓名" width="200"></el-table-column>\n      <el-table-column property="address" label="地址"></el-table-column>\n    </el-table>\n</el-drawer>\n\n<el-drawer\n  title="我嵌套了 Form !"\n  :before-close="handleClose"\n  :visible.sync="dialog"\n  direction="ltr"\n  custom-class="demo-drawer"\n  ref="drawer"\n  >\n  <div class="demo-drawer__content">\n    <el-form :model="form">\n      <el-form-item label="活动名称" :label-width="formLabelWidth">\n        <el-input v-model="form.name" autocomplete="off"></el-input>\n      </el-form-item>\n      <el-form-item label="活动区域" :label-width="formLabelWidth">\n        <el-select v-model="form.region" placeholder="请选择活动区域">\n          <el-option label="区域一" value="shanghai"></el-option>\n          <el-option label="区域二" value="beijing"></el-option>\n        </el-select>\n      </el-form-item>\n    </el-form>\n    <div class="demo-drawer__footer">\n      <el-button @click="cancelForm">取 消</el-button>\n      <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? \'提交中 ...\' : \'确 定\' }}</el-button>\n    </div>\n  </div>\n</el-drawer>\n\n<script>\nexport default {\n  data() {\n    return {\n      table: false,\n      dialog: false,\n      loading: false,\n      gridData: [{\n        date: \'2016-05-02\',\n        name: \'王小虎\',\n        address: \'上海市普陀区金沙江路 1518 弄\'\n      }, {\n        date: \'2016-05-04\',\n        name: \'王小虎\',\n        address: \'上海市普陀区金沙江路 1518 弄\'\n      }, {\n        date: \'2016-05-01\',\n        name: \'王小虎\',\n        address: \'上海市普陀区金沙江路 1518 弄\'\n      }, {\n        date: \'2016-05-03\',\n        name: \'王小虎\',\n        address: \'上海市普陀区金沙江路 1518 弄\'\n      }],\n      form: {\n        name: \'\',\n        region: \'\',\n        date1: \'\',\n        date2: \'\',\n        delivery: false,\n        type: [],\n        resource: \'\',\n        desc: \'\'\n      },\n      formLabelWidth: \'80px\',\n      timer: null,\n    };\n  },\n  methods: {\n    handleClose(done) {\n      if (this.loading) {\n        return;\n      }\n      this.$confirm(\'确定要提交表单吗？\')\n        .then(_ => {\n          this.loading = true;\n          this.timer = setTimeout(() => {\n            done();\n            // 动画关闭需要一定的时间\n            setTimeout(() => {\n              this.loading = false;\n            }, 400);\n          }, 2000);\n        })\n        .catch(_ => {});\n    },\n    cancelForm() {\n      this.loading = false;\n      this.dialog = false;\n      clearTimeout(this.timer);\n    }\n  }\n}\n<\/script>\n')],-1),p=Object(r.createVNode)("h3",{id:"duo-ceng-qian-tao"},[Object(r.createVNode)("a",{class:"header-anchor",href:"#duo-ceng-qian-tao"},"¶"),Object(r.createTextVNode)(" 多层嵌套")],-1),w=Object(r.createVNode)("p",null,[Object(r.createVNode)("code",null,"Drawer"),Object(r.createTextVNode)(" 组件也拥有多层嵌套的方法")],-1),f=Object(r.createVNode)("div",null,[Object(r.createVNode)("p",null,[Object(r.createTextVNode)("同样, 如果你需要嵌套多层 "),Object(r.createVNode)("code",null,"Drawer"),Object(r.createTextVNode)(" 请一定要设置 "),Object(r.createVNode)("code",null,"append-to-body"),Object(r.createTextVNode)(" 属性为 "),Object(r.createVNode)("strong",null,"true")])],-1),j=Object(r.createVNode)("pre",null,[Object(r.createVNode)("code",{class:"html"},'\n<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">\n  点我打开\n</el-button>\n\n<el-drawer\n  title="我是外面的 Drawer"\n  :visible.sync="drawer"\n  size="50%">\n  <div>\n   <el-button @click="innerDrawer = true">打开里面的!</el-button>\n   <el-drawer\n     title="我是里面的"\n     :append-to-body="true"\n     :before-close="handleClose"\n     :visible.sync="innerDrawer">\n     <p>_(:зゝ∠)_</p>\n   </el-drawer>\n  </div>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawer: false,\n        innerDrawer: false,\n      };\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm(\'还有未保存的工作哦确定关闭吗？\')\n          .then(_ => {\n            done();\n          })\n          .catch(_ => {});\n      }\n    }\n  };\n<\/script>\n\n')],-1),O=Object(r.createStaticVNode)('<div class="tip"><p>Drawer 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 <code>ref</code> 获取相应组件，请在 <code>open</code> 事件回调中进行。</p></div><div class="tip"><p>Drawer 提供一个 <code>destroyOnClose</code> API, 用来在关闭 Drawer 时销毁子组件内容, 例如清理表单内的状态, 在必要时可以将该属性设置为 <strong>true</strong> 用来保证初始状态的一致性</p></div><div class="tip"><p>如果 <code>visible</code> 属性绑定的变量位于 Vuex 的 store 内，那么 <code>.sync</code> 不会正常工作。此时需要去除 <code>.sync</code> 修饰符，同时监听 Drawer 的 <code>open</code> 和 <code>close</code> 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 <code>visible</code> 属性绑定的变量的值。</p></div><h3 id="drawer-attributes"><a class="header-anchor" href="#drawer-attributes">¶</a> Drawer Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>append-to-body</td><td>Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>before-close</td><td>关闭前的回调，会暂停 Drawer 的关闭</td><td>function(done)，done 用于关闭 Drawer</td><td>—</td><td>—</td></tr><tr><td>close-on-press-escape</td><td>是否可以通过按下 ESC 关闭 Drawer</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>custom-class</td><td>Drawer 的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>destroy-on-close</td><td>控制是否在关闭 Drawer 之后将子元素全部销毁</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>modal</td><td>是否需要遮罩层</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>modal-append-to-body</td><td>遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>direction</td><td>Drawer 打开的方向</td><td>Direction</td><td>rtl / ltr / ttb / btt</td><td>rtl</td></tr><tr><td>show-close</td><td>是否显示关闭按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>Drawer 窗体的大小, 当使用 <code>number</code> 类型时, 以像素为单位, 当使用 <code>string</code> 类型时, 请传入 &#39;x%&#39;, 否则便会以 <code>number</code> 类型解释</td><td>number / string</td><td>-</td><td>&#39;30%&#39;</td></tr><tr><td>title</td><td>Drawer 的标题，也可通过具名 slot （见下表）传入</td><td>string</td><td>—</td><td>—</td></tr><tr><td>visible</td><td>是否显示 Drawer，支持 .sync 修饰符</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>wrapperClosable</td><td>点击遮罩层是否可以关闭 Drawer</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>withHeader</td><td>控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table><h3 id="drawer-slot"><a class="header-anchor" href="#drawer-slot">¶</a> Drawer Slot</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>Drawer 的内容</td></tr><tr><td>title</td><td>Drawer 标题区的内容</td></tr></tbody></table><h3 id="drawer-methods"><a class="header-anchor" href="#drawer-methods">¶</a> Drawer Methods</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>closeDrawer</td><td>用于关闭 Drawer, 该方法会调用传入的 <code>before-close</code> 方法</td></tr></tbody></table><h3 id="drawer-events"><a class="header-anchor" href="#drawer-events">¶</a> Drawer Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>open</td><td>Drawer 打开的回调</td><td>—</td></tr><tr><td>opened</td><td>Drawer 打开动画结束时的回调</td><td>—</td></tr><tr><td>close</td><td>Drawer 关闭的回调</td><td>—</td></tr><tr><td>closed</td><td>Drawer 关闭动画结束时的回调</td><td>—</td></tr></tbody></table>',11);var V={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:e,resolveComponent:t,withCtx:d,createVNode:l,openBlock:n,createBlock:a}=r,o=e("从左往右开"),c=e("从右往左开"),i=e("从上往下开"),s=e("从下往上开"),b=e(" 点我打开 "),u=l("span",null,"我来啦!",-1);const h={data:()=>({drawer:!1,direction:"rtl"}),methods:{handleClose(e){this.$confirm("确认关闭？").then(t=>{e()}).catch(e=>{})}}};return Object.assign({render:function(e,r){const h=t("el-radio"),m=t("el-radio-group"),p=t("el-button"),w=t("el-drawer");return n(),a("div",null,[l(m,{modelValue:e.direction,"onUpdate:modelValue":r[1]||(r[1]=t=>e.direction=t)},{default:d(()=>[l(h,{label:"ltr"},{default:d(()=>[o]),_:1}),l(h,{label:"rtl"},{default:d(()=>[c]),_:1}),l(h,{label:"ttb"},{default:d(()=>[i]),_:1}),l(h,{label:"btt"},{default:d(()=>[s]),_:1})]),_:1},8,["modelValue"]),l(p,{onClick:r[2]||(r[2]=t=>e.drawer=!0),type:"primary",style:{"margin-left":"16px"}},{default:d(()=>[b]),_:1}),l(w,{title:"我是标题",visible:e.drawer,direction:e.direction,"before-close":e.handleClose},{default:d(()=>[u]),_:1},8,["visible","direction","before-close"])])}},h)}(),"element-demo1":function(){const{createTextVNode:e,resolveComponent:t,withCtx:d,createVNode:l,openBlock:n,createBlock:a}=r,o=e(" 点我打开 "),c=l("span",null,"我来啦!",-1);const i={data:()=>({drawer:!1})};return Object.assign({render:function(e,r){const i=t("el-button"),s=t("el-drawer");return n(),a("div",null,[l(i,{onClick:r[1]||(r[1]=t=>e.drawer=!0),type:"primary",style:{"margin-left":"16px"}},{default:d(()=>[o]),_:1}),l(s,{title:"我是标题",visible:e.drawer,"with-header":!1},{default:d(()=>[c]),_:1},8,["visible"])])}},i)}(),"element-demo2":function(){const{createTextVNode:e,resolveComponent:t,withCtx:d,createVNode:l,toDisplayString:n,openBlock:a,createBlock:o}=r,c=e("打开嵌套表格的 Drawer"),i=e("打开嵌套 Form 的 Drawer"),s={class:"demo-drawer__content"},b={class:"demo-drawer__footer"},u=e("取 消");const h={data:()=>({table:!1,dialog:!1,loading:!1,gridData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}],form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"80px",timer:null}),methods:{handleClose(e){this.loading||this.$confirm("确定要提交表单吗？").then(t=>{this.loading=!0,this.timer=setTimeout(()=>{e(),setTimeout(()=>{this.loading=!1},400)},2e3)}).catch(e=>{})},cancelForm(){this.loading=!1,this.dialog=!1,clearTimeout(this.timer)}}};return Object.assign({render:function(r,h){const m=t("el-button"),p=t("el-table-column"),w=t("el-table"),f=t("el-drawer"),j=t("el-input"),O=t("el-form-item"),V=t("el-option"),N=t("el-select"),g=t("el-form");return a(),o("div",null,[l(m,{type:"text",onClick:h[1]||(h[1]=e=>r.table=!0)},{default:d(()=>[c]),_:1}),l(m,{type:"text",onClick:h[2]||(h[2]=e=>r.dialog=!0)},{default:d(()=>[i]),_:1}),l(f,{title:"我嵌套了表格!",visible:r.table,direction:"rtl",size:"50%"},{default:d(()=>[l(w,{data:r.gridData},{default:d(()=>[l(p,{property:"date",label:"日期",width:"150"}),l(p,{property:"name",label:"姓名",width:"200"}),l(p,{property:"address",label:"地址"})]),_:1},8,["data"])]),_:1},8,["visible"]),l(f,{title:"我嵌套了 Form !","before-close":r.handleClose,visible:r.dialog,direction:"ltr","custom-class":"demo-drawer",ref:"drawer"},{default:d(()=>[l("div",s,[l(g,{model:r.form},{default:d(()=>[l(O,{label:"活动名称","label-width":r.formLabelWidth},{default:d(()=>[l(j,{modelValue:r.form.name,"onUpdate:modelValue":h[3]||(h[3]=e=>r.form.name=e),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(O,{label:"活动区域","label-width":r.formLabelWidth},{default:d(()=>[l(N,{modelValue:r.form.region,"onUpdate:modelValue":h[4]||(h[4]=e=>r.form.region=e),placeholder:"请选择活动区域"},{default:d(()=>[l(V,{label:"区域一",value:"shanghai"}),l(V,{label:"区域二",value:"beijing"})]),_:1},8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"]),l("div",b,[l(m,{onClick:r.cancelForm},{default:d(()=>[u]),_:1},8,["onClick"]),l(m,{type:"primary",onClick:h[5]||(h[5]=e=>r.$refs.drawer.closeDrawer()),loading:r.loading},{default:d(()=>[e(n(r.loading?"提交中 ...":"确 定"),1)]),_:1},8,["loading"])])])]),_:1},8,["before-close","visible"])])}},h)}(),"element-demo3":function(){const{createTextVNode:e,resolveComponent:t,withCtx:d,createVNode:l,openBlock:n,createBlock:a}=r,o=e(" 点我打开 "),c=e("打开里面的!"),i=l("p",null,"_(:зゝ∠)_",-1);const s={data:()=>({drawer:!1,innerDrawer:!1}),methods:{handleClose(e){this.$confirm("还有未保存的工作哦确定关闭吗？").then(t=>{e()}).catch(e=>{})}}};return Object.assign({render:function(e,r){const s=t("el-button"),b=t("el-drawer");return n(),a("div",null,[l(s,{onClick:r[1]||(r[1]=t=>e.drawer=!0),type:"primary",style:{"margin-left":"16px"}},{default:d(()=>[o]),_:1}),l(b,{title:"我是外面的 Drawer",visible:e.drawer,size:"50%"},{default:d(()=>[l("div",null,[l(s,{onClick:r[2]||(r[2]=t=>e.innerDrawer=!0)},{default:d(()=>[c]),_:1}),l(b,{title:"我是里面的","append-to-body":!0,"before-close":e.handleClose,visible:e.innerDrawer},{default:d(()=>[i]),_:1},8,["before-close","visible"])])]),_:1},8,["visible"])])}},s)}()},render:function(e,t,d,V,N,g){const y=Object(r.resolveComponent)("element-demo0"),v=Object(r.resolveComponent)("demo-block"),x=Object(r.resolveComponent)("element-demo1"),D=Object(r.resolveComponent)("element-demo2"),C=Object(r.resolveComponent)("element-demo3");return Object(r.openBlock)(),Object(r.createBlock)("section",l,[n,Object(r.createVNode)(v,null,{source:Object(r.withCtx)(()=>[Object(r.createVNode)(y)]),highlight:Object(r.withCtx)(()=>[o]),default:Object(r.withCtx)(()=>[a]),_:1}),c,i,Object(r.createVNode)(v,null,{source:Object(r.withCtx)(()=>[Object(r.createVNode)(x)]),highlight:Object(r.withCtx)(()=>[b]),default:Object(r.withCtx)(()=>[s]),_:1}),u,h,Object(r.createVNode)(v,null,{source:Object(r.withCtx)(()=>[Object(r.createVNode)(D)]),highlight:Object(r.withCtx)(()=>[m]),_:1}),p,w,Object(r.createVNode)(v,null,{source:Object(r.withCtx)(()=>[Object(r.createVNode)(C)]),highlight:Object(r.withCtx)(()=>[j]),default:Object(r.withCtx)(()=>[f]),_:1}),O])}};t.default=V}}]);