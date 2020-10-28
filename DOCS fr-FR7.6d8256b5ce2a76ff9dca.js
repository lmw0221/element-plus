(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{612:function(e,t,a){"use strict";a.r(t);var c=a(0);const d={class:"content element-doc"},l=Object(c.createVNode)("h2",{id:"calendrier"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#calendrier"},"¶"),Object(c.createTextVNode)(" Calendrier")],-1),n=Object(c.createVNode)("p",null,"Affiche un calendrier.",-1),o=Object(c.createVNode)("h3",{id:"usage-basique"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#usage-basique"},"¶"),Object(c.createTextVNode)(" Usage basique")],-1),r=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("Réglez "),Object(c.createVNode)("code",null,"value"),Object(c.createTextVNode)(" pour spécifier le mois à afficher. Si "),Object(c.createVNode)("code",null,"value"),Object(c.createTextVNode)(" n'est pas spécifiée, le mois actuel sera affiché. "),Object(c.createVNode)("code",null,"value"),Object(c.createTextVNode)(" supporte le two-way binding.")])],-1),s=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-calendar v-model="value">\n</el-calendar>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: new Date()\n      }\n    }\n  }\n<\/script>\n')],-1),i=Object(c.createVNode)("h3",{id:"contenu-personnalise"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#contenu-personnalise"},"¶"),Object(c.createTextVNode)(" Contenu personnalisé")],-1),u=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("Personnalisez le contenu du calendrier en utilisant le "),Object(c.createVNode)("code",null,"scoped-slot"),Object(c.createTextVNode)(" appelé "),Object(c.createVNode)("code",null,"dateCell"),Object(c.createTextVNode)(". Dans ce "),Object(c.createVNode)("code",null,"scoped-slot"),Object(c.createTextVNode)(" vous aurez accès au paramètres date (date de la cellule courante), data (incluant les attributs type, isSelected et day). Pour plus d'informations, référez-vous à la documentation ci-dessous.")])],-1),b=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},"<el-calendar>\n  <template\n    #dateCell=\"{data}\"\n  >\n    <p :class=\"data.isSelected ? 'is-selected' : ''\">\n      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : '' }}\n    </p>\n  </template>\n</el-calendar>\n<style>\n  .is-selected {\n    color: #1989FA;\n  }\n</style>\n")],-1),h=Object(c.createVNode)("h3",{id:"intervalle"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#intervalle"},"¶"),Object(c.createTextVNode)(" Intervalle")],-1),j=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("Utilisez l'attribut "),Object(c.createVNode)("code",null,"range"),Object(c.createTextVNode)(" pour afficher un intervalle particulier. Le début doit être un lundi et la fin un dimanche, l'intervalle ne pouvant excéder deux mois.")])],-1),O=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-calendar :range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]">\n</el-calendar>\n')],-1),p=Object(c.createStaticVNode)('<h3 id="attributs"><a class="header-anchor" href="#attributs">¶</a> Attributs</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>value / v-model</td><td>Valeur liée.</td><td>Date</td><td>—</td><td>—</td></tr><tr><td>range</td><td>Intervalle de dates, début et fin inclus. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months.</td><td>[Date]Array</td><td>—</td><td>—</td></tr></tbody></table><h3 id="slot-datecell"><a class="header-anchor" href="#slot-datecell">¶</a> Slot dateCell</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>date</td><td>Date de la cellule courante.</td><td>Date</td><td>—</td><td>—</td></tr><tr><td>data</td><td>{ type, isSelected, day }. <code>type</code> indique le mois de la date courante, les valeurs prev-month, current-month et next-month pouvant être utilisées; <code>isSelected</code> indique si la date est sélectionnée; <code>day</code> est la date formattée en yyyy-MM-dd.</td><td>Object</td><td>—</td><td>—</td></tr></tbody></table>',4);var V={name:"component-doc",components:{"element-demo0":function(){const{resolveComponent:e,createVNode:t,openBlock:a,createBlock:d}=c;const l={data:()=>({value:new Date})};return Object.assign({render:function(c,l){const n=e("el-calendar");return a(),d("div",null,[t(n,{modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=e=>c.value=e)},null,8,["modelValue"])])}},l)}(),"element-demo1":function(){const{toDisplayString:e,createVNode:t,resolveComponent:a,withCtx:d,openBlock:l,createBlock:n}=c;return Object.assign({render:function(c,o){const r=a("el-calendar");return l(),n("div",null,[t(r,null,{dateCell:d(({data:a})=>[t("p",{class:a.isSelected?"is-selected":""},e(a.day.split("-").slice(1).join("-"))+" "+e(a.isSelected?"✔️":""),3)]),_:1})])}},{})}(),"element-demo2":function(){const{resolveComponent:e,createVNode:t,openBlock:a,createBlock:d}=c;return Object.assign({render:function(c,l){const n=e("el-calendar");return a(),d("div",null,[t(n,{range:[new Date(2019,2,4),new Date(2019,2,24)]},null,8,["range"])])}},{})}()},render:function(e,t,a,V,m,N){const f=Object(c.resolveComponent)("element-demo0"),v=Object(c.resolveComponent)("demo-block"),x=Object(c.resolveComponent)("element-demo1"),w=Object(c.resolveComponent)("element-demo2");return Object(c.openBlock)(),Object(c.createBlock)("section",d,[l,n,o,Object(c.createVNode)(v,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(f)]),highlight:Object(c.withCtx)(()=>[s]),default:Object(c.withCtx)(()=>[r]),_:1}),i,Object(c.createVNode)(v,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(x)]),highlight:Object(c.withCtx)(()=>[b]),default:Object(c.withCtx)(()=>[u]),_:1}),h,Object(c.createVNode)(v,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(w)]),highlight:Object(c.withCtx)(()=>[O]),default:Object(c.withCtx)(()=>[j]),_:1}),p])}};t.default=V}}]);