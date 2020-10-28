(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{622:function(e,t,d){"use strict";d.r(t);var a=d(0);const n={class:"content element-doc"},r=Object(a.createStaticVNode)('<h2 id="datetimepicker"><a class="header-anchor" href="#datetimepicker">¶</a> DateTimePicker</h2><p>Sélectionnez une date et une heure dans un seul picker.</p><div class="tip"><p>DateTimePicker est dérivé de DatePicker et TimePicker. Pour plus d&#39;informations sur <code>pickerOptions</code> et d&#39;autres attributs, vous pouvez vous référer à DatePicker et TimePicker.</p></div><h3 id="date-et-horaire"><a class="header-anchor" href="#date-et-horaire">¶</a> Date et horaire</h3>',4),c=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Vous pouvez sélectionner une date et un horaire en un seul picker en réglant "),Object(a.createVNode)("code",null,"type"),Object(a.createTextVNode)(" sur "),Object(a.createVNode)("code",null,"datetime"),Object(a.createTextVNode)(". La manière d'utiliser des raccourcis est la même que pour DatePicker.")])],-1),l=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <div class="block">\n    <span class="demonstration">Défaut</span>\n    <el-date-picker\n      v-model="value1"\n      type="datetime"\n      placeholder="Selectionnez date et horaire">\n    </el-date-picker>\n  </div>\n  <div class="block">\n    <span class="demonstration">Avec raccourcis</span>\n    <el-date-picker\n      v-model="value2"\n      type="datetime"\n      placeholder="Selectionnez date et horaire"\n      :picker-options="pickerOptions">\n    </el-date-picker>\n  </div>\n  <div class="block">\n    <span class="demonstration">Avec horaire par défaut</span>\n    <el-date-picker\n      v-model="value3"\n      type="datetime"\n      placeholder="Selectionnez date et horaire"\n      default-time="12:00:00">\n    </el-date-picker>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        pickerOptions: {\n          shortcuts: [{\n            text: \'Aujourdh\\\'ui\',\n            onClick(picker) {\n              picker.$emit(\'pick\', new Date());\n            }\n          }, {\n            text: \'Hier\',\n            onClick(picker) {\n              const date = new Date();\n              date.setTime(date.getTime() - 3600 * 1000 * 24);\n              picker.emit(\'pick\', date);\n            }\n          }, {\n            text: \'Il y a une semaine\',\n            onClick(picker) {\n              const date = new Date();\n              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);\n              picker.emit(\'pick\', date);\n            }\n          }]\n        },\n        value1: \'\',\n        value2: \'\',\n        value3: \'\'\n      };\n    }\n  };\n<\/script>\n')],-1),o=Object(a.createVNode)("h3",{id:"plage-de-dates-et-d-horaires"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#plage-de-dates-et-d-horaires"},"¶"),Object(a.createTextVNode)(" Plage de dates et d'horaires")],-1),i=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Vous pouvez sélectionner des plages en configurant "),Object(a.createVNode)("code",null,"type"),Object(a.createTextVNode)(" sur "),Object(a.createVNode)("code",null,"datetimerange"),Object(a.createTextVNode)(".")])],-1),s=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <div class="block">\n    <span class="demonstration">Défaut</span>\n    <el-date-picker\n      v-model="value1"\n      type="datetimerange"\n      range-separator="à"\n      start-placeholder="Date de début"\n      end-placeholder="Date de fin">\n    </el-date-picker>\n  </div>\n  <div class="block">\n    <span class="demonstration">Avec raccourcis</span>\n    <el-date-picker\n      v-model="value2"\n      type="datetimerange"\n      :picker-options="pickerOptions"\n      range-separator="à"\n      start-placeholder="Date de début"\n      end-placeholder="Date de fin"\n      align="right">\n    </el-date-picker>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        pickerOptions: {\n          shortcuts: [{\n            text: \'La semaine passée\',\n            onClick(picker) {\n              const end = new Date();\n              const start = new Date();\n              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);\n              picker.$emit(\'pick\', [start, end]);\n            }\n          }, {\n            text: \'Le mois dernier\',\n            onClick(picker) {\n              const end = new Date();\n              const start = new Date();\n              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);\n              picker.$emit(\'pick\', [start, end]);\n            }\n          }, {\n            text: \'Les 2 derniers mois\',\n            onClick(picker) {\n              const end = new Date();\n              const start = new Date();\n              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);\n              picker.$emit(\'pick\', [start, end]);\n            }\n          }]\n        },\n        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],\n        value2: \'\'\n      };\n    }\n  };\n<\/script>\n')],-1),u=Object(a.createVNode)("h3",{id:"horaire-par-defaut-pour-les-plages-de-dates"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#horaire-par-defaut-pour-les-plages-de-dates"},"¶"),Object(a.createTextVNode)(" Horaire par défaut pour les plages de dates")],-1),p=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Lorsque vous sélectionnez une plage de dates dans le panneau de date avec le type "),Object(a.createVNode)("code",null,"datetimerange"),Object(a.createTextVNode)(", "),Object(a.createVNode)("code",null,"00:00:00"),Object(a.createTextVNode)(" sera utilisé comme horaire par défaut pour les dates de début et de fin. Vous pouvez contrôler cette valeur avec l'attribut "),Object(a.createVNode)("code",null,"default-time"),Object(a.createTextVNode)(". Il accepte un tableau de une ou deux chaînes de caractères. La première indique l'horaire de la date de début, la deuxième celui de la date de fin.")])],-1),m=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <div class="block">\n    <span class="demonstration">Heure de la date de début 12:00:00</span>\n    <el-date-picker\n      v-model="value1"\n      type="datetimerange"\n      start-placeholder="Date de début"\n      end-placeholder="Date de fin"\n      :default-time="[\'12:00:00\']">\n    </el-date-picker>\n  </div>\n  <div class="block">\n    <span class="demonstration">Heure de la date de début 12:00:00, heure de la date de fin 08:00:00</span>\n    <el-date-picker\n      v-model="value2"\n      type="datetimerange"\n      align="right"\n      start-placeholder="Date de début"\n      end-placeholder="Date de fin"\n      :default-time="[\'12:00:00\', \'08:00:00\']">\n    </el-date-picker>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: \'\',\n        value2: \'\'\n      };\n    }\n  };\n<\/script>\n')],-1),h=Object(a.createStaticVNode)('<h3 id="attributs"><a class="header-anchor" href="#attributs">¶</a> Attributs</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>value / v-model</td><td>La valeur liée.</td><td>date(DateTimePicker) / array(DateTimeRangePicker)</td><td>—</td><td>—</td></tr><tr><td>readonly</td><td>Si le DatePicker est en lecture seule.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>Si le DatePicker est désactivé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>Si le champ est éditable.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>Si la croix de reset doit apparaître.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>Taille du champ.</td><td>string</td><td>large/small/mini</td><td>—</td></tr><tr><td>placeholder</td><td>Le placeholder en mode normal.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>start-placeholder</td><td>Le placeholder de la date de début en mode plage de dates.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>end-placeholder</td><td>Le placeholder de la date de fin en mode plage de dates.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>time-arrow-control</td><td>Si l&#39;horaire peut être sélectionné en utilisant les flèches de direction.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>Type du picker.</td><td>string</td><td>year/month/date/datetime/ week/datetimerange/daterange</td><td>date</td></tr><tr><td>format</td><td>Format d&#39;affichage de la date dans le champ.</td><td>string</td><td>Voir <a href="#/fr-FR/component/date-picker#formats-de-date">formats de date</a></td><td>yyyy-MM-dd HH:mm:ss</td></tr><tr><td>align</td><td>Alignements.</td><td>left/center/right</td><td>left</td><td></td></tr><tr><td>popper-class</td><td>Nom de classe pour le menu déroulant du DateTimePicker.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>picker-options</td><td>Options additionnelles, voir la table ci-dessous.</td><td>object</td><td>—</td><td>{}</td></tr><tr><td>range-separator</td><td>Séparateur de plage.</td><td>string</td><td>-</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>Date par défaut du calendrier, optionnelle.</td><td>Date</td><td>N&#39;importe quelle valeur acceptée par <code>new Date()</code></td><td>—</td></tr><tr><td>default-time</td><td>L&#39;horaire par défaut après avoir choisi une date.</td><td>normal: string / plage de dates: string[]</td><td>normal: un string tel que <code>12:00:00</code>, range: tableau de deux strings, le premier pour la date de début, le deuxième pour la date de fin. Si non spécifié, <code>00:00:00</code> est utilisé.</td><td>—</td></tr><tr><td>value-format</td><td>Format de la variable stockée, optionnel. Si non spécifié, La valeur sera un objet Date.</td><td>string</td><td>Voir <a href="#/fr-FR/component/date-picker#formats-de-date">formats de date</a></td><td>—</td></tr><tr><td>name</td><td>Identique au <code>name</code> de l&#39;input natif</td><td>string</td><td>—</td><td>—</td></tr><tr><td>unlink-panels</td><td>Rend indépendants les deux panneaux de plage de dates</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>prefix-icon</td><td>Icône de préfixe.</td><td>string</td><td>—</td><td>el-icon-date</td></tr><tr><td>clear-icon</td><td>Icône de reset</td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr></tbody></table><h3 id="options-du-picker"><a class="header-anchor" href="#options-du-picker">¶</a> Options du Picker</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>shortcuts</td><td>Un tableau d&#39;objets { text, onClick } pour mettre en place des raccourcis, vérifier le tableau ci-dessous</td><td>object[]</td><td>—</td><td>—</td></tr><tr><td>disabledDate</td><td>Une fonction déterminant si une date est désactivée avec cette date en paramètre. Retourne un Boolean</td><td>function</td><td>—</td><td>—</td></tr><tr><td>cellClassName</td><td>set custom className</td><td>Function(Date)</td><td>—</td><td>—</td></tr><tr><td>firstDayOfWeek</td><td>Le premier jour de la semaine</td><td>Number</td><td>1 à 7</td><td>7</td></tr></tbody></table><h3 id="raccourcis"><a class="header-anchor" href="#raccourcis">¶</a> Raccourcis</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>text</td><td>Titre du raccourci.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>onClick</td><td>Callback se déclenchant quand le raccourci est cliqué, avec <code>vm</code> en paramètre. Vous pouvez changer la valeur du picker en émettant l&#39;évènement <code>pick</code>. Exemple: <code>vm.$emit(&#39;pick&#39;, new Date())</code></td><td>function</td><td>—</td><td>—</td></tr></tbody></table><h3 id="evenements"><a class="header-anchor" href="#evenements">¶</a> Évènements</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>change</td><td>Se déclenche quand l&#39;utilisateur confirme la valeur</td><td>component&#39;s binding value</td></tr><tr><td>blur</td><td>Se déclenche quand le champ perds le focus.</td><td>component instance</td></tr><tr><td>focus</td><td>Se déclenche quand le champ a le focus.</td><td>component instance</td></tr></tbody></table><h3 id="methodes"><a class="header-anchor" href="#methodes">¶</a> Méthodes</h3><table><thead><tr><th>Méthode</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>focus</td><td>Focus sur le champ.</td><td>—</td></tr></tbody></table>',10);var b={name:"component-doc",components:{"element-demo0":function(){const{createVNode:e,resolveComponent:t,openBlock:d,createBlock:n}=a,r={class:"block"},c=e("span",{class:"demonstration"},"Défaut",-1),l={class:"block"},o=e("span",{class:"demonstration"},"Avec raccourcis",-1),i={class:"block"},s=e("span",{class:"demonstration"},"Avec horaire par défaut",-1);const u={data:()=>({pickerOptions:{shortcuts:[{text:"Aujourdh'ui",onClick(e){e.$emit("pick",new Date)}},{text:"Hier",onClick(e){const t=new Date;t.setTime(t.getTime()-864e5),e.emit("pick",t)}},{text:"Il y a une semaine",onClick(e){const t=new Date;t.setTime(t.getTime()-6048e5),e.emit("pick",t)}}]},value1:"",value2:"",value3:""})};return Object.assign({render:function(a,u){const p=t("el-date-picker");return d(),n("div",null,[e("div",r,[c,e(p,{modelValue:a.value1,"onUpdate:modelValue":u[1]||(u[1]=e=>a.value1=e),type:"datetime",placeholder:"Selectionnez date et horaire"},null,8,["modelValue"])]),e("div",l,[o,e(p,{modelValue:a.value2,"onUpdate:modelValue":u[2]||(u[2]=e=>a.value2=e),type:"datetime",placeholder:"Selectionnez date et horaire","picker-options":a.pickerOptions},null,8,["modelValue","picker-options"])]),e("div",i,[s,e(p,{modelValue:a.value3,"onUpdate:modelValue":u[3]||(u[3]=e=>a.value3=e),type:"datetime",placeholder:"Selectionnez date et horaire","default-time":"12:00:00"},null,8,["modelValue"])])])}},u)}(),"element-demo1":function(){const{createVNode:e,resolveComponent:t,openBlock:d,createBlock:n}=a,r={class:"block"},c=e("span",{class:"demonstration"},"Défaut",-1),l={class:"block"},o=e("span",{class:"demonstration"},"Avec raccourcis",-1);const i={data:()=>({pickerOptions:{shortcuts:[{text:"La semaine passée",onClick(e){const t=new Date,d=new Date;d.setTime(d.getTime()-6048e5),e.$emit("pick",[d,t])}},{text:"Le mois dernier",onClick(e){const t=new Date,d=new Date;d.setTime(d.getTime()-2592e6),e.$emit("pick",[d,t])}},{text:"Les 2 derniers mois",onClick(e){const t=new Date,d=new Date;d.setTime(d.getTime()-7776e6),e.$emit("pick",[d,t])}}]},value1:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value2:""})};return Object.assign({render:function(a,i){const s=t("el-date-picker");return d(),n("div",null,[e("div",r,[c,e(s,{modelValue:a.value1,"onUpdate:modelValue":i[1]||(i[1]=e=>a.value1=e),type:"datetimerange","range-separator":"à","start-placeholder":"Date de début","end-placeholder":"Date de fin"},null,8,["modelValue"])]),e("div",l,[o,e(s,{modelValue:a.value2,"onUpdate:modelValue":i[2]||(i[2]=e=>a.value2=e),type:"datetimerange","picker-options":a.pickerOptions,"range-separator":"à","start-placeholder":"Date de début","end-placeholder":"Date de fin",align:"right"},null,8,["modelValue","picker-options"])])])}},i)}(),"element-demo2":function(){const{createVNode:e,resolveComponent:t,openBlock:d,createBlock:n}=a,r={class:"block"},c=e("span",{class:"demonstration"},"Heure de la date de début 12:00:00",-1),l={class:"block"},o=e("span",{class:"demonstration"},"Heure de la date de début 12:00:00, heure de la date de fin 08:00:00",-1);const i={data:()=>({value1:"",value2:""})};return Object.assign({render:function(a,i){const s=t("el-date-picker");return d(),n("div",null,[e("div",r,[c,e(s,{modelValue:a.value1,"onUpdate:modelValue":i[1]||(i[1]=e=>a.value1=e),type:"datetimerange","start-placeholder":"Date de début","end-placeholder":"Date de fin","default-time":["12:00:00"]},null,8,["modelValue"])]),e("div",l,[o,e(s,{modelValue:a.value2,"onUpdate:modelValue":i[2]||(i[2]=e=>a.value2=e),type:"datetimerange",align:"right","start-placeholder":"Date de début","end-placeholder":"Date de fin","default-time":["12:00:00","08:00:00"]},null,8,["modelValue"])])])}},i)}()},render:function(e,t,d,b,k,v){const f=Object(a.resolveComponent)("element-demo0"),g=Object(a.resolveComponent)("demo-block"),V=Object(a.resolveComponent)("element-demo1"),O=Object(a.resolveComponent)("element-demo2");return Object(a.openBlock)(),Object(a.createBlock)("section",n,[r,Object(a.createVNode)(g,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(f)]),highlight:Object(a.withCtx)(()=>[l]),default:Object(a.withCtx)(()=>[c]),_:1}),o,Object(a.createVNode)(g,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(V)]),highlight:Object(a.withCtx)(()=>[s]),default:Object(a.withCtx)(()=>[i]),_:1}),u,Object(a.createVNode)(g,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(O)]),highlight:Object(a.withCtx)(()=>[m]),default:Object(a.withCtx)(()=>[p]),_:1}),h])}};t.default=b}}]);