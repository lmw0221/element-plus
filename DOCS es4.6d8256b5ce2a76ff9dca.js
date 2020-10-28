(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{551:function(e,a,t){"use strict";t.r(a);var d=t(0);const s={class:"content element-doc"},o=Object(d.createStaticVNode)('<h2 id="border"><a class="header-anchor" href="#border">¶</a> Border</h2><p>Estandarizamos los bordes que se pueden utilizar en botones, tarjetas, pop-ups y otros componentes.</p><h3 id="border-2"><a class="header-anchor" href="#border-2">¶</a> Border</h3><p>Hay pocos estilos de borde para elegir.</p><table class="demo-border"><tbody><tr><td class="text">Name</td><td class="text">Thickness</td><td class="line">Demo</td></tr><tr><td class="text">Solid</td><td class="text">1px</td><td class="line"><div></div></td></tr><tr><td class="text">Dashed</td><td class="text">2px</td><td class="line"><div class="dashed"></div></td></tr></tbody></table><h3 id="radius"><a class="header-anchor" href="#radius">¶</a> Radius</h3><p>Hay pocos estilos de radio para elegir.</p>',7),r=Object(d.createVNode)("div",{class:"title"},"No Radius",-1),c=Object(d.createVNode)("div",{class:"value"},"border-radius: 0px",-1),l=Object(d.createVNode)("div",{class:"radius"},null,-1),i=Object(d.createVNode)("div",{class:"title"},"Small Radius",-1),b={class:"value"},h=Object(d.createVNode)("div",{class:"title"},"Large Radius",-1),n={class:"value"},u=Object(d.createVNode)("div",{class:"title"},"Round Radius",-1),p=Object(d.createVNode)("div",{class:"value"},"border-radius: 30px",-1),x=Object(d.createVNode)("div",{class:"radius radius-30"},null,-1),w=Object(d.createVNode)("h3",{id:"shadow"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#shadow"},"¶"),Object(d.createTextVNode)(" Shadow")],-1),j=Object(d.createVNode)("p",null,"Hay pocos estilos de sombra para elegir.",-1),O={class:"demo-shadow-text"},N={class:"demo-shadow-text"};t(70);const m={"$--box-shadow-light":"boxShadowLight","$--box-shadow-base":"boxShadowBase","$--border-radius-base":"borderRadiusBase","$--border-radius-small":"borderRadiusSmall"},S={boxShadowLight:"0 2px 12px 0 rgba(0, 0, 0, 0.1)",boxShadowBase:"0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)",borderRadiusBase:"4px",borderRadiusSmall:"2px"};var v={mounted(){this.setGlobal()},methods:{setGlobal(){window.userThemeConfig&&(this.global=window.userThemeConfig.global)}},data:()=>({global:{},boxShadowLight:"",boxShadowBase:"",borderRadiusBase:"",borderRadiusSmall:""}),watch:{global:{immediate:!0,handler(e){Object.keys(m).forEach(a=>{e[a]?this[m[a]]=e[a]:this[m[a]]=S[m[a]]})}}},render:function(e,a,t,m,S,v){const V=Object(d.resolveComponent)("el-col"),g=Object(d.resolveComponent)("el-row");return Object(d.openBlock)(),Object(d.createBlock)("section",s,[o,Object(d.createVNode)(g,{gutter:12,class:"demo-radius"},{default:Object(d.withCtx)(()=>[Object(d.createVNode)(V,{span:6,xs:{span:12}},{default:Object(d.withCtx)(()=>[r,c,l]),_:1}),Object(d.createVNode)(V,{span:6,xs:{span:12}},{default:Object(d.withCtx)(()=>[i,Object(d.createVNode)("div",b,"border-radius: "+Object(d.toDisplayString)(S.borderRadiusSmall),1),Object(d.createVNode)("div",{class:"radius",style:{borderRadius:S.borderRadiusSmall}},null,4)]),_:1}),Object(d.createVNode)(V,{span:6,xs:{span:12}},{default:Object(d.withCtx)(()=>[h,Object(d.createVNode)("div",n,"border-radius: "+Object(d.toDisplayString)(S.borderRadiusBase),1),Object(d.createVNode)("div",{class:"radius",style:{borderRadius:S.borderRadiusBase}},null,4)]),_:1}),Object(d.createVNode)(V,{span:6,xs:{span:12}},{default:Object(d.withCtx)(()=>[u,p,x]),_:1})]),_:1}),w,j,Object(d.createVNode)("div",{class:"demo-shadow",style:{boxShadow:S.boxShadowBase}},null,4),Object(d.createVNode)("span",O,"Basic Shadow box-shadow: "+Object(d.toDisplayString)(S.boxShadowBase),1),Object(d.createVNode)("div",{class:"demo-shadow",style:{boxShadow:S.boxShadowLight}},null,4),Object(d.createVNode)("span",N,"Light Shadow box-shadow: "+Object(d.toDisplayString)(S.boxShadowLight),1)])}};a.default=v}}]);