(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{457:function(e,t,n){"use strict";n.r(t);var d=n(0);const c={class:"content element-doc"},o=Object(d.createVNode)("h2",{id:"inputnumber-ji-shu-qi"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#inputnumber-ji-shu-qi"},"¶"),Object(d.createTextVNode)(" InputNumber 计数器")],-1),l=Object(d.createVNode)("p",null,"仅允许输入标准的数字值，可定义范围",-1),r=Object(d.createVNode)("h3",{id:"ji-chu-yong-fa"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#ji-chu-yong-fa"},"¶"),Object(d.createTextVNode)(" 基础用法")],-1),a=Object(d.createVNode)("div",null,[Object(d.createVNode)("p",null,[Object(d.createTextVNode)("要使用它，只需要在"),Object(d.createVNode)("code",null,"el-input-number"),Object(d.createTextVNode)("元素中使用"),Object(d.createVNode)("code",null,"v-model"),Object(d.createTextVNode)("绑定变量即可，变量的初始值即为默认值。")])],-1),u=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<template>\n  <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      };\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n')],-1),m=Object(d.createVNode)("h3",{id:"jin-yong-zhuang-tai"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"},"¶"),Object(d.createTextVNode)(" 禁用状态")],-1),i=Object(d.createVNode)("div",null,[Object(d.createVNode)("p",null,[Object(d.createVNode)("code",null,"disabled"),Object(d.createTextVNode)("属性接受一个"),Object(d.createVNode)("code",null,"Boolean"),Object(d.createTextVNode)("，设置为"),Object(d.createVNode)("code",null,"true"),Object(d.createTextVNode)("即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置"),Object(d.createVNode)("code",null,"min"),Object(d.createTextVNode)("属性和"),Object(d.createVNode)("code",null,"max"),Object(d.createTextVNode)("属性，不设置"),Object(d.createVNode)("code",null,"min"),Object(d.createTextVNode)("和"),Object(d.createVNode)("code",null,"max"),Object(d.createTextVNode)("时，最小值为 0。")])],-1),b=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<template>\n  <el-input-number v-model="num" :disabled="true"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      }\n    }\n  };\n<\/script>\n')],-1),s=Object(d.createVNode)("h3",{id:"bu-shu"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#bu-shu"},"¶"),Object(d.createTextVNode)(" 步数")],-1),h=Object(d.createVNode)("p",null,"允许定义递增递减的步数控制",-1),p=Object(d.createVNode)("div",null,[Object(d.createVNode)("p",null,[Object(d.createTextVNode)("设置"),Object(d.createVNode)("code",null,"step"),Object(d.createTextVNode)("属性可以控制步长，接受一个"),Object(d.createVNode)("code",null,"Number"),Object(d.createTextVNode)("。")])],-1),j=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<template>\n  <el-input-number v-model="num" :step="2"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 5\n      }\n    }\n  };\n<\/script>\n')],-1),V=Object(d.createVNode)("h3",{id:"yan-ge-bu-shu"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#yan-ge-bu-shu"},"¶"),Object(d.createTextVNode)(" 严格步数")],-1),O=Object(d.createVNode)("div",null,[Object(d.createVNode)("p",null,[Object(d.createVNode)("code",null,"step-strictly"),Object(d.createTextVNode)("属性接受一个"),Object(d.createVNode)("code",null,"Boolean"),Object(d.createTextVNode)("。如果这个属性被设置为"),Object(d.createVNode)("code",null,"true"),Object(d.createTextVNode)("，则只能输入步数的倍数。")])],-1),N=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<template>\n  <el-input-number v-model="num" :step="2" step-strictly></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 2\n      }\n    }\n  };\n<\/script>\n')],-1),x=Object(d.createVNode)("h3",{id:"jing-du"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#jing-du"},"¶"),Object(d.createTextVNode)(" 精度")],-1),g=Object(d.createVNode)("div",null,[Object(d.createVNode)("p",null,[Object(d.createTextVNode)("设置 "),Object(d.createVNode)("code",null,"precision"),Object(d.createTextVNode)(" 属性可以控制数值精度，接收一个 "),Object(d.createVNode)("code",null,"Number"),Object(d.createTextVNode)("。")])],-1),v=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<template>\n  <el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      }\n    }\n  };\n<\/script>\n')],-1),f=Object(d.createStaticVNode)('<div class="tip"><p><code>precision</code> 的值必须是一个非负整数，并且不能小于 <code>step</code> 的小数位数。</p></div><h3 id="chi-cun"><a class="header-anchor" href="#chi-cun">¶</a> 尺寸</h3><p>额外提供了 <code>medium</code>、<code>small</code>、<code>mini</code> 三种尺寸的数字输入框</p>',3),C=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<template>\n  <el-input-number v-model="num1"></el-input-number>\n  <el-input-number size="medium" v-model="num2"></el-input-number>\n  <el-input-number size="small" v-model="num3"></el-input-number>\n  <el-input-number size="mini" v-model="num4"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num1: 1,\n        num2: 1,\n        num3: 1,\n        num4: 1\n      }\n    }\n  };\n<\/script>\n')],-1),w=Object(d.createVNode)("h3",{id:"an-niu-wei-zhi"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#an-niu-wei-zhi"},"¶"),Object(d.createTextVNode)(" 按钮位置")],-1),T=Object(d.createVNode)("div",null,[Object(d.createVNode)("p",null,[Object(d.createTextVNode)("设置 "),Object(d.createVNode)("code",null,"controls-position"),Object(d.createTextVNode)(" 属性可以控制按钮位置。")])],-1),k=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<template>\n  <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      };\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n')],-1),y=Object(d.createStaticVNode)('<h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>绑定值</td><td>number</td><td>—</td><td>0</td></tr><tr><td>min</td><td>设置计数器允许的最小值</td><td>number</td><td>—</td><td>-Infinity</td></tr><tr><td>max</td><td>设置计数器允许的最大值</td><td>number</td><td>—</td><td>Infinity</td></tr><tr><td>step</td><td>计数器步长</td><td>number</td><td>—</td><td>1</td></tr><tr><td>step-strictly</td><td>是否只能输入 step 的倍数</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>precision</td><td>数值精度</td><td>number</td><td>—</td><td>—</td></tr><tr><td>size</td><td>计数器尺寸</td><td>string</td><td>large, small</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用计数器</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>controls</td><td>是否使用控制按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>controls-position</td><td>控制按钮位置</td><td>string</td><td>right</td><td>-</td></tr><tr><td>name</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>输入框关联的label文字</td><td>string</td><td>—</td><td>—</td></tr><tr><td>placeholder</td><td>输入框默认 placeholder</td><td>string</td><td>-</td><td>-</td></tr></tbody></table><h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>绑定值被改变时触发</td><td>currentValue, oldValue</td></tr><tr><td>blur</td><td>在组件 Input 失去焦点时触发</td><td>(event: Event)</td></tr><tr><td>focus</td><td>在组件 Input 获得焦点时触发</td><td>(event: Event)</td></tr></tbody></table><h3 id="methods"><a class="header-anchor" href="#methods">¶</a> Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>-</td></tr><tr><td>select</td><td>选中 input 中的文字</td><td>—</td></tr></tbody></table>',6);var B={name:"component-doc",components:{"element-demo0":function(){const{resolveComponent:e,createVNode:t,openBlock:n,createBlock:c}=d;const o={data:()=>({num:1}),methods:{handleChange(e){console.log(e)}}};return Object.assign({render:function(d,o){const l=e("el-input-number");return n(),c("div",null,[t(l,{modelValue:d.num,"onUpdate:modelValue":o[1]||(o[1]=e=>d.num=e),onChange:d.handleChange,min:1,max:10,label:"描述文字"},null,8,["modelValue","onChange"])])}},o)}(),"element-demo1":function(){const{resolveComponent:e,createVNode:t,openBlock:n,createBlock:c}=d;const o={data:()=>({num:1})};return Object.assign({render:function(d,o){const l=e("el-input-number");return n(),c("div",null,[t(l,{modelValue:d.num,"onUpdate:modelValue":o[1]||(o[1]=e=>d.num=e),disabled:!0},null,8,["modelValue"])])}},o)}(),"element-demo2":function(){const{resolveComponent:e,createVNode:t,openBlock:n,createBlock:c}=d;const o={data:()=>({num:5})};return Object.assign({render:function(d,o){const l=e("el-input-number");return n(),c("div",null,[t(l,{modelValue:d.num,"onUpdate:modelValue":o[1]||(o[1]=e=>d.num=e),step:2},null,8,["modelValue"])])}},o)}(),"element-demo3":function(){const{resolveComponent:e,createVNode:t,openBlock:n,createBlock:c}=d;const o={data:()=>({num:2})};return Object.assign({render:function(d,o){const l=e("el-input-number");return n(),c("div",null,[t(l,{modelValue:d.num,"onUpdate:modelValue":o[1]||(o[1]=e=>d.num=e),step:2,"step-strictly":""},null,8,["modelValue"])])}},o)}(),"element-demo4":function(){const{resolveComponent:e,createVNode:t,openBlock:n,createBlock:c}=d;const o={data:()=>({num:1})};return Object.assign({render:function(d,o){const l=e("el-input-number");return n(),c("div",null,[t(l,{modelValue:d.num,"onUpdate:modelValue":o[1]||(o[1]=e=>d.num=e),precision:2,step:.1,max:10},null,8,["modelValue"])])}},o)}(),"element-demo5":function(){const{resolveComponent:e,createVNode:t,openBlock:n,createBlock:c}=d;const o={data:()=>({num1:1,num2:1,num3:1,num4:1})};return Object.assign({render:function(d,o){const l=e("el-input-number");return n(),c("div",null,[t(l,{modelValue:d.num1,"onUpdate:modelValue":o[1]||(o[1]=e=>d.num1=e)},null,8,["modelValue"]),t(l,{size:"medium",modelValue:d.num2,"onUpdate:modelValue":o[2]||(o[2]=e=>d.num2=e)},null,8,["modelValue"]),t(l,{size:"small",modelValue:d.num3,"onUpdate:modelValue":o[3]||(o[3]=e=>d.num3=e)},null,8,["modelValue"]),t(l,{size:"mini",modelValue:d.num4,"onUpdate:modelValue":o[4]||(o[4]=e=>d.num4=e)},null,8,["modelValue"])])}},o)}(),"element-demo6":function(){const{resolveComponent:e,createVNode:t,openBlock:n,createBlock:c}=d;const o={data:()=>({num:1}),methods:{handleChange(e){console.log(e)}}};return Object.assign({render:function(d,o){const l=e("el-input-number");return n(),c("div",null,[t(l,{modelValue:d.num,"onUpdate:modelValue":o[1]||(o[1]=e=>d.num=e),"controls-position":"right",onChange:d.handleChange,min:1,max:10},null,8,["modelValue","onChange"])])}},o)}()},render:function(e,t,n,B,z,U){const _=Object(d.resolveComponent)("element-demo0"),I=Object(d.resolveComponent)("demo-block"),E=Object(d.resolveComponent)("element-demo1"),q=Object(d.resolveComponent)("element-demo2"),J=Object(d.resolveComponent)("element-demo3"),S=Object(d.resolveComponent)("element-demo4"),A=Object(d.resolveComponent)("element-demo5"),M=Object(d.resolveComponent)("element-demo6");return Object(d.openBlock)(),Object(d.createBlock)("section",c,[o,l,r,Object(d.createVNode)(I,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(_)]),highlight:Object(d.withCtx)(()=>[u]),default:Object(d.withCtx)(()=>[a]),_:1}),m,Object(d.createVNode)(I,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(E)]),highlight:Object(d.withCtx)(()=>[b]),default:Object(d.withCtx)(()=>[i]),_:1}),s,h,Object(d.createVNode)(I,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(q)]),highlight:Object(d.withCtx)(()=>[j]),default:Object(d.withCtx)(()=>[p]),_:1}),V,Object(d.createVNode)(I,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(J)]),highlight:Object(d.withCtx)(()=>[N]),default:Object(d.withCtx)(()=>[O]),_:1}),x,Object(d.createVNode)(I,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(S)]),highlight:Object(d.withCtx)(()=>[v]),default:Object(d.withCtx)(()=>[g]),_:1}),f,Object(d.createVNode)(I,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(A)]),highlight:Object(d.withCtx)(()=>[C]),_:1}),w,Object(d.createVNode)(I,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(M)]),highlight:Object(d.withCtx)(()=>[k]),default:Object(d.withCtx)(()=>[T]),_:1}),y])}};t.default=B}}]);