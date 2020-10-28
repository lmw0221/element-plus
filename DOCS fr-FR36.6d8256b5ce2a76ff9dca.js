(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{638:function(e,t,n){"use strict";n.r(t);var s=n(0);const o={class:"content element-doc"},c=Object(s.createVNode)("h2",{id:"message"},[Object(s.createVNode)("a",{class:"header-anchor",href:"#message"},"¶"),Object(s.createTextVNode)(" Message")],-1),a=Object(s.createVNode)("p",null,"Utilisé pour avoir un retour après une action particulière. La différence avec Notification est que ce dernier est surtout utilisé pour afficher des notifications système passives.",-1),r=Object(s.createVNode)("h3",{id:"usage"},[Object(s.createVNode)("a",{class:"header-anchor",href:"#usage"},"¶"),Object(s.createTextVNode)(" Usage")],-1),d=Object(s.createVNode)("p",null,"S'affiche en haut de la page et disparaît après trois secondes.",-1),l=Object(s.createVNode)("div",null,[Object(s.createVNode)("p",null,[Object(s.createTextVNode)("L'utilisation de Message est très similaire à Notification, la plupart des options ne sont donc pas expliquées ici. Référez-vous à la table en fin de page et celle de Notification pour en savoir plus. Element Plus affecte la méthode "),Object(s.createVNode)("code",null,"$message"),Object(s.createTextVNode)(" pour appeler Message. Il peut prendre en paramètre un string ou un VNode, qui sera affiché en tant que body principal.")])],-1),i=Object(s.createVNode)("pre",null,[Object(s.createVNode)("code",{class:"html"},"<template>\n  <el-button :plain=\"true\" @click=\"open\">Afficher le message</el-button>\n  <el-button :plain=\"true\" @click=\"openVn\">VNode</el-button>\n</template>\n\n<script>\n  import { h } from 'vue';\n\n  export default {\n    methods: {\n      open() {\n        this.$message('Ceci est un message.');\n      },\n\n      openVn() {\n        this.$message({\n          message: h('p', null, [\n            h('span', null, 'Message peut être '),\n            h('i', { style: 'color: teal' }, 'VNode')\n          ])\n        });\n      }\n    }\n  }\n<\/script>\n")],-1),u=Object(s.createVNode)("h3",{id:"types"},[Object(s.createVNode)("a",{class:"header-anchor",href:"#types"},"¶"),Object(s.createTextVNode)(" Types")],-1),p=Object(s.createVNode)("p",null,"Utilisé pour montrer un retour d'activités Success, Warning, Message ou Error.",-1),m=Object(s.createVNode)("div",null,[Object(s.createVNode)("p",null,[Object(s.createTextVNode)("Lorsque vous avez besoin de plus de personnalisation, Message peut aussi accepter un objet en paramètre. Par exemple, le paramètre "),Object(s.createVNode)("code",null,"type"),Object(s.createTextVNode)(" définit différents types, son défaut étant "),Object(s.createVNode)("code",null,"info"),Object(s.createTextVNode)(". Dans ce cas le body est passé comme valeur de "),Object(s.createVNode)("code",null,"message"),Object(s.createTextVNode)(". De plus, il existe des méthodes pour chaque type, afin que vous puissiez vous passer de la propriété "),Object(s.createVNode)("code",null,"type"),Object(s.createTextVNode)(" comme dans "),Object(s.createVNode)("code",null,"open4"),Object(s.createTextVNode)(".")])],-1),h=Object(s.createVNode)("pre",null,[Object(s.createVNode)("code",{class:"html"},'<template>\n  <el-button :plain="true" @click="open2">success</el-button>\n  <el-button :plain="true" @click="open3">warning</el-button>\n  <el-button :plain="true" @click="open1">message</el-button>\n  <el-button :plain="true" @click="open4">error</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$message(\'Ceci est un message.\');\n      },\n      open2() {\n        this.$message({\n          message: \'Félicitations, ceci est un message de succès.\',\n          type: \'success\'\n        });\n      },\n\n      open3() {\n        this.$message({\n          message: \'Attention, ceci est un avertissement.\',\n          type: \'warning\'\n        });\n      },\n\n      open4() {\n        this.$message.error(\'Ouups, ceci est une erreur.\');\n      }\n    }\n  }\n<\/script>\n')],-1),b=Object(s.createVNode)("h3",{id:"fermeture"},[Object(s.createVNode)("a",{class:"header-anchor",href:"#fermeture"},"¶"),Object(s.createTextVNode)(" Fermeture")],-1),g=Object(s.createVNode)("p",null,"Un bouton de fermeture peut être ajouté.",-1),j=Object(s.createVNode)("div",null,[Object(s.createVNode)("p",null,[Object(s.createTextVNode)("Un Message ne peut être fermé par défaut. Utiliséez "),Object(s.createVNode)("code",null,"showClose"),Object(s.createTextVNode)(" si vous avez besoin de pouvoir le fermer. De plus, tout comme Notification, Message possède une "),Object(s.createVNode)("code",null,"duration"),Object(s.createTextVNode)(" réglable. La durée par défaut est de 3000 ms, et infinie si à "),Object(s.createVNode)("code",null,"0"),Object(s.createTextVNode)(".")])],-1),O=Object(s.createVNode)("pre",null,[Object(s.createVNode)("code",{class:"html"},'<template>\n  <el-button :plain="true" @click="open1">message</el-button>\n  <el-button :plain="true" @click="open2">success</el-button>\n  <el-button :plain="true" @click="open3">warning</el-button>\n  <el-button :plain="true" @click="open4">error</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$message({\n          showClose: true,\n          message: \'Ceci est un message.\'\n        });\n      },\n\n      open2() {\n        this.$message({\n          showClose: true,\n          message: \'Félicitations, ceci est un message de succès.\',\n          type: \'success\'\n        });\n      },\n\n      open3() {\n        this.$message({\n          showClose: true,\n          message: \'Attention, ceci est un avertissement.\',\n          type: \'warning\'\n        });\n      },\n\n      open4() {\n        this.$message({\n          showClose: true,\n          message: \'Ouups, ceci est une erreur.\',\n          type: \'error\'\n        });\n      }\n    }\n  }\n<\/script>\n')],-1),V=Object(s.createVNode)("h3",{id:"texte-centre"},[Object(s.createVNode)("a",{class:"header-anchor",href:"#texte-centre"},"¶"),Object(s.createTextVNode)(" Texte centré")],-1),f=Object(s.createVNode)("p",null,[Object(s.createTextVNode)("Utilisez l'attribut "),Object(s.createVNode)("code",null,"center"),Object(s.createTextVNode)(" pour centrer le texte.")],-1),N=Object(s.createVNode)("pre",null,[Object(s.createVNode)("code",{class:"html"},'<template>\n  <el-button :plain="true" @click="openCenter">Texte centré</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      openCenter() {\n        this.$message({\n          message: \'Texte centré\',\n          center: true\n        });\n      }\n    }\n  }\n<\/script>\n')],-1),C=Object(s.createVNode)("h3",{id:"utiliser-du-html"},[Object(s.createVNode)("a",{class:"header-anchor",href:"#utiliser-du-html"},"¶"),Object(s.createTextVNode)(" Utiliser du HTML")],-1),x=Object(s.createVNode)("p",null,[Object(s.createVNode)("code",null,"message"),Object(s.createTextVNode)(" supporte le HTML.")],-1),T=Object(s.createVNode)("div",null,[Object(s.createVNode)("p",null,[Object(s.createTextVNode)("Mettez "),Object(s.createVNode)("code",null,"dangerouslyUseHTMLString"),Object(s.createTextVNode)(" à true et "),Object(s.createVNode)("code",null,"message"),Object(s.createTextVNode)(" sera traité comme du HTML.")])],-1),k=Object(s.createVNode)("pre",null,[Object(s.createVNode)("code",{class:"html"},'<template>\n  <el-button :plain="true" @click="openHTML">Utiliser du HTML</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      openHTML() {\n        this.$message({\n          dangerouslyUseHTMLString: true,\n          message: \'<strong>Ceci est du <i>HTML</i></strong>\'\n        });\n      }\n    }\n  }\n<\/script>\n')],-1),w=Object(s.createStaticVNode)('<div class="warning"><p>Bien que la propriété <code>message</code> supporte le HTML, générer du contenu HTML dynamiquement peut être très dangereux, car cela permet des <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">attaques XSS</a>. Donc lorsque <code>dangerouslyUseHTMLString</code> est présent, soyez certain de sécuriser le contenu de <code>message</code>, et n&#39;assignez <strong>jamais</strong> à <code>message</code> du contenu fournit par l&#39;utilisateur.</p></div><h3 id="methode-globale"><a class="header-anchor" href="#methode-globale">¶</a> Méthode globale</h3><p>Element Plus ajoute une méthode <code>$message</code> à Vue.prototype. Vous pouvez donc appeler <code>Message</code> dans l&#39;instance de Vue comme dans cette page.</p><h3 id="import-a-la-demande"><a class="header-anchor" href="#import-a-la-demande">¶</a> Import à la demande</h3><p>Importez <code>Message</code>:</p><pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> { Message } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;element-plus&#39;</span>;\n</code></pre><p>Dans ce cas il faudra appeler <code>Message(options)</code>. Les méthodes des différents types sont aussi ajoutées, e.g. <code>Message.success(options)</code>. Vous pouvez appeler <code>Message.closeAll()</code> pour fermer manuellement toutes les instances.</p><h3 id="options"><a class="header-anchor" href="#options">¶</a> Options</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>message</td><td>Texte du message.</td><td>string / VNode</td><td>—</td><td>—</td></tr><tr><td>type</td><td>Type du message.</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>iconClass</td><td>Classe de l&#39;icône, écrase <code>type</code>.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>Si <code>message</code> doit être traité comme du HTML.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>customClass</td><td>Nom de classe pour Message.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>La durée d&#39;affichage, en millisecondes. Si 0, la durée est infinie.</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>showClose</td><td>Si un bouton de fermeture doit être affiché.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>center</td><td>Si le texte doit être centré.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>onClose</td><td>Callback de fermeture avec en paramètre l&#39;instance de Message.</td><td>function</td><td>—</td><td>—</td></tr><tr><td>offset</td><td>set the distance to the top of viewport</td><td>number</td><td>—</td><td>20</td></tr></tbody></table><h3 id="methodes"><a class="header-anchor" href="#methodes">¶</a> Méthodes</h3><p><code>Message</code> et <code>this.$message</code> retourne l&#39;instance actuelle. Pour fermer manuellement cette instance, appelez sa méthode <code>close</code>.</p><table><thead><tr><th>Méthode</th><th>Description</th></tr></thead><tbody><tr><td>close</td><td>Ferme l&#39;instance de Message.</td></tr></tbody></table>',12);var v={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:e,resolveComponent:t,withCtx:n,createVNode:o,openBlock:c,createBlock:a}=s,r=e("Afficher le message"),d=e("VNode");const{h:l}=s,i={methods:{open(){this.$message("Ceci est un message.")},openVn(){this.$message({message:l("p",null,[l("span",null,"Message peut être "),l("i",{style:"color: teal"},"VNode")])})}}};return Object.assign({render:function(e,s){const l=t("el-button");return c(),a("div",null,[o(l,{plain:!0,onClick:e.open},{default:n(()=>[r]),_:1},8,["onClick"]),o(l,{plain:!0,onClick:e.openVn},{default:n(()=>[d]),_:1},8,["onClick"])])}},i)}(),"element-demo1":function(){const{createTextVNode:e,resolveComponent:t,withCtx:n,createVNode:o,openBlock:c,createBlock:a}=s,r=e("success"),d=e("warning"),l=e("message"),i=e("error");const u={methods:{open1(){this.$message("Ceci est un message.")},open2(){this.$message({message:"Félicitations, ceci est un message de succès.",type:"success"})},open3(){this.$message({message:"Attention, ceci est un avertissement.",type:"warning"})},open4(){this.$message.error("Ouups, ceci est une erreur.")}}};return Object.assign({render:function(e,s){const u=t("el-button");return c(),a("div",null,[o(u,{plain:!0,onClick:e.open2},{default:n(()=>[r]),_:1},8,["onClick"]),o(u,{plain:!0,onClick:e.open3},{default:n(()=>[d]),_:1},8,["onClick"]),o(u,{plain:!0,onClick:e.open1},{default:n(()=>[l]),_:1},8,["onClick"]),o(u,{plain:!0,onClick:e.open4},{default:n(()=>[i]),_:1},8,["onClick"])])}},u)}(),"element-demo2":function(){const{createTextVNode:e,resolveComponent:t,withCtx:n,createVNode:o,openBlock:c,createBlock:a}=s,r=e("message"),d=e("success"),l=e("warning"),i=e("error");const u={methods:{open1(){this.$message({showClose:!0,message:"Ceci est un message."})},open2(){this.$message({showClose:!0,message:"Félicitations, ceci est un message de succès.",type:"success"})},open3(){this.$message({showClose:!0,message:"Attention, ceci est un avertissement.",type:"warning"})},open4(){this.$message({showClose:!0,message:"Ouups, ceci est une erreur.",type:"error"})}}};return Object.assign({render:function(e,s){const u=t("el-button");return c(),a("div",null,[o(u,{plain:!0,onClick:e.open1},{default:n(()=>[r]),_:1},8,["onClick"]),o(u,{plain:!0,onClick:e.open2},{default:n(()=>[d]),_:1},8,["onClick"]),o(u,{plain:!0,onClick:e.open3},{default:n(()=>[l]),_:1},8,["onClick"]),o(u,{plain:!0,onClick:e.open4},{default:n(()=>[i]),_:1},8,["onClick"])])}},u)}(),"element-demo3":function(){const{createTextVNode:e,resolveComponent:t,withCtx:n,createVNode:o,openBlock:c,createBlock:a}=s,r=e("Texte centré");const d={methods:{openCenter(){this.$message({message:"Texte centré",center:!0})}}};return Object.assign({render:function(e,s){const d=t("el-button");return c(),a("div",null,[o(d,{plain:!0,onClick:e.openCenter},{default:n(()=>[r]),_:1},8,["onClick"])])}},d)}(),"element-demo4":function(){const{createTextVNode:e,resolveComponent:t,withCtx:n,createVNode:o,openBlock:c,createBlock:a}=s,r=e("Utiliser du HTML");const d={methods:{openHTML(){this.$message({dangerouslyUseHTMLString:!0,message:"<strong>Ceci est du <i>HTML</i></strong>"})}}};return Object.assign({render:function(e,s){const d=t("el-button");return c(),a("div",null,[o(d,{plain:!0,onClick:e.openHTML},{default:n(()=>[r]),_:1},8,["onClick"])])}},d)}()},render:function(e,t,n,v,M,y){const $=Object(s.resolveComponent)("element-demo0"),L=Object(s.resolveComponent)("demo-block"),H=Object(s.resolveComponent)("element-demo1"),_=Object(s.resolveComponent)("element-demo2"),U=Object(s.resolveComponent)("element-demo3"),S=Object(s.resolveComponent)("element-demo4");return Object(s.openBlock)(),Object(s.createBlock)("section",o,[c,a,r,d,Object(s.createVNode)(L,null,{source:Object(s.withCtx)(()=>[Object(s.createVNode)($)]),highlight:Object(s.withCtx)(()=>[i]),default:Object(s.withCtx)(()=>[l]),_:1}),u,p,Object(s.createVNode)(L,null,{source:Object(s.withCtx)(()=>[Object(s.createVNode)(H)]),highlight:Object(s.withCtx)(()=>[h]),default:Object(s.withCtx)(()=>[m]),_:1}),b,g,Object(s.createVNode)(L,null,{source:Object(s.withCtx)(()=>[Object(s.createVNode)(_)]),highlight:Object(s.withCtx)(()=>[O]),default:Object(s.withCtx)(()=>[j]),_:1}),V,f,Object(s.createVNode)(L,null,{source:Object(s.withCtx)(()=>[Object(s.createVNode)(U)]),highlight:Object(s.withCtx)(()=>[N]),_:1}),C,x,Object(s.createVNode)(L,null,{source:Object(s.withCtx)(()=>[Object(s.createVNode)(S)]),highlight:Object(s.withCtx)(()=>[k]),default:Object(s.withCtx)(()=>[T]),_:1}),w])}};t.default=v}}]);