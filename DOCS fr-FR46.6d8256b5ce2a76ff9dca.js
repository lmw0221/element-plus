(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{647:function(e,t,l){"use strict";l.r(t);var n=l(0);const a={class:"content element-doc"},o=Object(n.createVNode)("h2",{id:"select"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#select"},"¶"),Object(n.createTextVNode)(" Select")],-1),d=Object(n.createVNode)("p",null,"Utile lorsqu'il faut sélectionner des options parmi un large choix, affiché grâce à un menu déroulant.",-1),r=Object(n.createVNode)("h3",{id:"usage"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#usage"},"¶"),Object(n.createTextVNode)(" Usage")],-1),c=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createVNode)("code",null,"v-model"),Object(n.createTextVNode)(" est la valeur du "),Object(n.createVNode)("code",null,"el-option"),Object(n.createTextVNode)(" sélectionné.")])],-1),i=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),u=Object(n.createVNode)("h3",{id:"option-desactivee"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#option-desactivee"},"¶"),Object(n.createTextVNode)(" Option désactivée")],-1),s=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Mettez l'attribut "),Object(n.createVNode)("code",null,"disabled"),Object(n.createTextVNode)(" dans "),Object(n.createVNode)("code",null,"el-option"),Object(n.createTextVNode)(" à "),Object(n.createVNode)("code",null,"true"),Object(n.createTextVNode)(" pour désactiver cette option.")])],-1),p=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n      :disabled=\"item.disabled\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2',\n          disabled: true\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),b=Object(n.createVNode)("h3",{id:"selecteur-desactive"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#selecteur-desactive"},"¶"),Object(n.createTextVNode)(" Sélecteur désactivé")],-1),h=Object(n.createVNode)("p",null,"Vous pouvez désactiver le composant lui-même.",-1),v=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Ajoutez "),Object(n.createVNode)("code",null,"disabled"),Object(n.createTextVNode)(" à "),Object(n.createVNode)("code",null,"el-select"),Object(n.createTextVNode)(" pour le désactiver.")])],-1),O=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" disabled placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),m=Object(n.createVNode)("h3",{id:"effacer-la-selection"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#effacer-la-selection"},"¶"),Object(n.createTextVNode)(" Effacer la sélection")],-1),j=Object(n.createVNode)("p",null,"Vous pouvez ajouter un bouton pour effacer la sélection.",-1),V=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Ajoutez l'attribut "),Object(n.createVNode)("code",null,"clearable"),Object(n.createTextVNode)(" à "),Object(n.createVNode)("code",null,"el-select"),Object(n.createTextVNode)(" et l'icône de fermeture s'affichera après une sélection. Notez que "),Object(n.createVNode)("code",null,"clearable"),Object(n.createTextVNode)(" ne marche qu'avec les sélecteurs à choix unique.")])],-1),N=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" clearable placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),f=Object(n.createVNode)("h3",{id:"selecteur-multiple"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#selecteur-multiple"},"¶"),Object(n.createTextVNode)(" Sélecteur multiple")],-1),g=Object(n.createVNode)("p",null,"Les sélecteurs multiples utilisent des tags pour afficher les différentes options choisies.",-1),x=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Ajoutez "),Object(n.createVNode)("code",null,"multiple"),Object(n.createTextVNode)(" à "),Object(n.createVNode)("code",null,"el-select"),Object(n.createTextVNode)(" pour le changer en sélecteur multiple. La valeur de "),Object(n.createVNode)("code",null,"v-model"),Object(n.createTextVNode)(" devient un tableau contenant toutes les options. Par défaut les différents choix sont affichés sous forme de tags. Vous pouvez réduire leur nombre en utilisant l'attribut "),Object(n.createVNode)("code",null,"collapse-tags"),Object(n.createTextVNode)(".")])],-1),C=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-select v-model="value1" multiple placeholder="Select">\n    <el-option\n      v-for="item in options"\n      :key="item.value"\n      :label="item.label"\n      :value="item.value">\n    </el-option>\n  </el-select>\n\n  <el-select\n    v-model="value2"\n    multiple\n    collapse-tags\n    style="margin-left: 20px;"\n    placeholder="Select">\n    <el-option\n      v-for="item in options"\n      :key="item.value"\n      :label="item.label"\n      :value="item.value">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: \'Option1\',\n          label: \'Option1\'\n        }, {\n          value: \'Option2\',\n          label: \'Option2\'\n        }, {\n          value: \'Option3\',\n          label: \'Option3\'\n        }, {\n          value: \'Option4\',\n          label: \'Option4\'\n        }, {\n          value: \'Option5\',\n          label: \'Option5\'\n        }],\n        value1: [],\n        value2: []\n      }\n    }\n  }\n<\/script>\n')],-1),S=Object(n.createVNode)("h3",{id:"template-personnalise"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#template-personnalise"},"¶"),Object(n.createTextVNode)(" Template personnalisé")],-1),y=Object(n.createVNode)("p",null,"Vous pouvez définir un template HTML pour l'affichage des options.",-1),T=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Insérez votre template dans le slot de "),Object(n.createVNode)("code",null,"el-option"),Object(n.createTextVNode)(".")])],-1),w=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in cities\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n      <span style=\"float: left\">{{ item.label }}</span>\n      <span style=\"float: right; color: #8492a6; font-size: 13px\">{{ item.value }}</span>\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        cities: [{\n          value: 'Beijing',\n          label: 'Beijing'\n        }, {\n          value: 'Shanghai',\n          label: 'Shanghai'\n        }, {\n          value: 'Nanjing',\n          label: 'Nanjing'\n        }, {\n          value: 'Chengdu',\n          label: 'Chengdu'\n        }, {\n          value: 'Shenzhen',\n          label: 'Shenzhen'\n        }, {\n          value: 'Guangzhou',\n          label: 'Guangzhou'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),k=Object(n.createVNode)("h3",{id:"grouper-les-options"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#grouper-les-options"},"¶"),Object(n.createTextVNode)(" Grouper les options")],-1),z=Object(n.createVNode)("p",null,"Vous pouvez définir des groupes pour les options du menu.",-1),q=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Utilisez "),Object(n.createVNode)("code",null,"el-option-group"),Object(n.createTextVNode)(" pour grouper les options. L'attribut "),Object(n.createVNode)("code",null,"label"),Object(n.createTextVNode)(" définit le nom du groupe.")])],-1),L=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option-group\n      v-for=\"group in options\"\n      :key=\"group.label\"\n      :label=\"group.label\">\n      <el-option\n        v-for=\"item in group.options\"\n        :key=\"item.value\"\n        :label=\"item.label\"\n        :value=\"item.value\">\n      </el-option>\n    </el-option-group>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          label: 'Villes célèbres',\n          options: [{\n            value: 'Shanghai',\n            label: 'Shanghai'\n          }, {\n            value: 'Beijing',\n            label: 'Beijing'\n          }]\n        }, {\n          label: 'Nom de ville',\n          options: [{\n            value: 'Chengdu',\n            label: 'Chengdu'\n          }, {\n            value: 'Shenzhen',\n            label: 'Shenzhen'\n          }, {\n            value: 'Guangzhou',\n            label: 'Guangzhou'\n          }, {\n            value: 'Dalian',\n            label: 'Dalian'\n          }]\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),M=Object(n.createVNode)("h3",{id:"filtrage-des-options"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#filtrage-des-options"},"¶"),Object(n.createTextVNode)(" Filtrage des options")],-1),B=Object(n.createVNode)("p",null,"Vous pouvez ajouter un mode de filtrage pour trouver les options désirées plus rapidement.",-1),D=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Ajoutez "),Object(n.createVNode)("code",null,"filterable"),Object(n.createTextVNode)(" à "),Object(n.createVNode)("code",null,"el-select"),Object(n.createTextVNode)(" pour activer le filtrage. Par défaut, Select cherchera les options dont le "),Object(n.createVNode)("code",null,"label"),Object(n.createTextVNode)(" contient la valeur du filtre. Si vous préférez une autre stratégie de filtrage, utilisez "),Object(n.createVNode)("code",null,"filter-method"),Object(n.createTextVNode)(". C'est une "),Object(n.createVNode)("code",null,"Function"),Object(n.createTextVNode)(" qui est appelée quand la valeur change, avec pour paramètre la valeur courante.")])],-1),_=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" filterable placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),A=Object(n.createVNode)("h3",{id:"recherche-a-distance"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#recherche-a-distance"},"¶"),Object(n.createTextVNode)(" Recherche à distance")],-1),U=Object(n.createVNode)("p",null,"Vous pouvez aller chercher les options sur le serveur de manière dynamique.",-1),F=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Ajoutez "),Object(n.createVNode)("code",null,"filterable"),Object(n.createTextVNode)(" et "),Object(n.createVNode)("code",null,"remote"),Object(n.createTextVNode)(" pour activer la recherche distante, ainsi que "),Object(n.createVNode)("code",null,"remote-method"),Object(n.createTextVNode)(". Cette dernière est une "),Object(n.createVNode)("code",null,"Function"),Object(n.createTextVNode)(" qui est appelée lorsque la valeur change, avec pour paramètre la valeur courante. Notes que si "),Object(n.createVNode)("code",null,"el-option"),Object(n.createTextVNode)(" est rendu dans une directive "),Object(n.createVNode)("code",null,"v-for"),Object(n.createTextVNode)(", vous devriez ajouter l'attribut "),Object(n.createVNode)("code",null,"key"),Object(n.createTextVNode)(" aux "),Object(n.createVNode)("code",null,"el-option"),Object(n.createTextVNode)(". Cette valeur doit unique, comme "),Object(n.createVNode)("code",null,"item.value"),Object(n.createTextVNode)(" dans l'exemple suivant.")])],-1),I=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-select\n    v-model="value"\n    multiple\n    filterable\n    remote\n    reserve-keyword\n    placeholder="Entrez un mot-clé"\n    :remote-method="remoteMethod"\n    :loading="loading">\n    <el-option\n      v-for="item in options"\n      :key="item.value"\n      :label="item.label"\n      :value="item.value">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [],\n        value: [],\n        list: [],\n        loading: false,\n        states: ["Alabama", "Alaska", "Arizona",\n        "Arkansas", "California", "Colorado",\n        "Connecticut", "Delaware", "Florida",\n        "Georgia", "Hawaii", "Idaho", "Illinois",\n        "Indiana", "Iowa", "Kansas", "Kentucky",\n        "Louisiana", "Maine", "Maryland",\n        "Massachusetts", "Michigan", "Minnesota",\n        "Mississippi", "Missouri", "Montana",\n        "Nebraska", "Nevada", "New Hampshire",\n        "New Jersey", "New Mexico", "New York",\n        "North Carolina", "North Dakota", "Ohio",\n        "Oklahoma", "Oregon", "Pennsylvania",\n        "Rhode Island", "South Carolina",\n        "South Dakota", "Tennessee", "Texas",\n        "Utah", "Vermont", "Virginia",\n        "Washington", "West Virginia", "Wisconsin",\n        "Wyoming"]\n      }\n    },\n    mounted() {\n      this.list = this.states.map(item => {\n        return { value: `value:${item}`, label: `label:${item}` };\n      });\n    },\n    methods: {\n      remoteMethod(query) {\n        if (query !== \'\') {\n          this.loading = true;\n          setTimeout(() => {\n            this.loading = false;\n            this.options = this.list.filter(item => {\n              return item.label.toLowerCase()\n                .indexOf(query.toLowerCase()) > -1;\n            });\n          }, 200);\n        } else {\n          this.options = [];\n        }\n      }\n    }\n  }\n<\/script>\n')],-1),E=Object(n.createVNode)("h3",{id:"creer-des-options"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#creer-des-options"},"¶"),Object(n.createTextVNode)(" Créer des options")],-1),G=Object(n.createVNode)("p",null,"Vous pouvez entrer des choix dans le champ de sélection qui ne sont pas incluses dans le menu.",-1),H=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("En utilisant "),Object(n.createVNode)("code",null,"allow-create"),Object(n.createTextVNode)(", peuvent créer de nouveaux choix en les entrant dans le champ d'input. Cette option ne marche que si "),Object(n.createVNode)("code",null,"filterable"),Object(n.createTextVNode)(" est activé. Cette exemple montre aussi "),Object(n.createVNode)("code",null,"default-first-option"),Object(n.createTextVNode)(", qui permet de sélectionner la première option en pressant Entrée sans avoir à utiliser la souris ou le clavier.")])],-1),P=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},"<template>\n  <el-select\n    v-model=\"value\"\n    multiple\n    filterable\n    allow-create\n    default-first-option\n    placeholder=\"Choisissez les tags de vos articles\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'HTML',\n          label: 'HTML'\n        }, {\n          value: 'CSS',\n          label: 'CSS'\n        }, {\n          value: 'JavaScript',\n          label: 'JavaScript'\n        }],\n        value: []\n      }\n    }\n  }\n<\/script>\n")],-1),J=Object(n.createStaticVNode)('<div class="tip"><p>Si la valeur de Select est un objet, assurez-vous d&#39;utiliser <code>value-key</code> comme identifiant unique.</p></div><h3 id="attributs-de-select"><a class="header-anchor" href="#attributs-de-select">¶</a> Attributs de Select</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>value / v-model</td><td>La valeur liée.</td><td>boolean / string / number</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>Si la sélection multiple est activée.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>Si le sélecteur est désactivé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value-key</td><td>Identifiant unique pour la valeur, requis quand la valeur est un objet.</td><td>string</td><td>—</td><td>value</td></tr><tr><td>size</td><td>Taille de l&#39;Input.</td><td>string</td><td>large/small/mini</td><td>—</td></tr><tr><td>clearable</td><td>Si la sélection est effaçable.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-tags</td><td>Si les tags peuvent être réduits, dans le cas d&#39;une sélection multiple.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>multiple-limit</td><td>Nombre maximum d&#39;options multiples sélectionnable. Pas de limites quand est à 0.</td><td>number</td><td>—</td><td>0</td></tr><tr><td>name</td><td>L&#39;attribut name natif du sélecteur.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>autocomplete</td><td>L&#39;attribut autocomplete natif du sélecteur.</td><td>string</td><td>—</td><td>off</td></tr><tr><td>auto-complete</td><td>@DEPRECATED dans la prochaine version majeure.</td><td>string</td><td>—</td><td>off</td></tr><tr><td>placeholder</td><td>Le placeholder du champ.</td><td>string</td><td>—</td><td>Select</td></tr><tr><td>filterable</td><td>Si les options sont filtrables.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-create</td><td>Si l&#39;utilisateur peut créer des options. Dans ce cas <code>filterable</code> doit être activé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filter-method</td><td>Méthode de filtrage personnalisée.</td><td>function</td><td>—</td><td>—</td></tr><tr><td>remote</td><td>Si les options sont chargées dynamiquement depuis le serveur.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>remote-method</td><td>Méthode pour la recherche distante.</td><td>function</td><td>—</td><td>—</td></tr><tr><td>loading</td><td>Si le sélecteur est en train de charger des options.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>loading-text</td><td>Texte à afficher pendant le chargement.</td><td>string</td><td>—</td><td>Loading</td></tr><tr><td>no-match-text</td><td>Texte à afficher quand le filtrage ne retourne aucune option. Vous pouvez aussi utiliser le slot <code>empty</code>.</td><td>string</td><td>—</td><td>No matching data</td></tr><tr><td>no-data-text</td><td>Texte à afficher quand il n&#39;y a aucune option. Vous pouvez aussi utiliser le slot <code>empty</code>.</td><td>string</td><td>—</td><td>No data</td></tr><tr><td>popper-class</td><td>Classe du menu déroulant.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>reserve-keyword</td><td>Quand <code>multiple</code> et <code>filter</code> sont activés, s&#39;il faut réserver le mot-clé courant après la sélection d&#39;une option.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-first-option</td><td>Sélectionne la première option avec Entrée. Utilisable avec <code>filterable</code> ou <code>remote</code></td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>Si le menu déroulant doit être ajouté au body. Si le positionnement du menu est incorrect, essayez de mettre cette option à <code>false</code>.</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>automatic-dropdown</td><td>Pour les sélecteurs non filtrables, détermine si le menu apparaît au focus du champ.</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>clear-icon</td><td>Classe de l&#39;icône d&#39;effacement.</td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr></tbody></table><h3 id="evenements-de-select"><a class="header-anchor" href="#evenements-de-select">¶</a> Évènements de Select</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètre</th></tr></thead><tbody><tr><td>change</td><td>Se déclenche quand la valeur change.</td><td>current selected value</td></tr><tr><td>visible-change</td><td>Se déclenche quand le menu apparaît ou disparaît.</td><td>true quand il apparaît, sinon false .</td></tr><tr><td>remove-tag</td><td>Se déclenche quand un tag est retiré.</td><td>La valeur du tag retiré.</td></tr><tr><td>clear</td><td>Se déclenche quand le champ est effacé grâce au bouton.</td><td>—</td></tr><tr><td>blur</td><td>Se déclenche quand le champ perd le focus.</td><td>(event: Event)</td></tr><tr><td>focus</td><td>Se déclenche gagne le focus.</td><td>(event: Event)</td></tr></tbody></table><h3 id="slots-de-select"><a class="header-anchor" href="#slots-de-select">¶</a> Slots de Select</h3><table><thead><tr><th>Nom</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>Liste de options.</td></tr><tr><td>prefix</td><td>Contenu du préfixe du sélecteur.</td></tr><tr><td>empty</td><td>Contenu lorsqu&#39;il n&#39;y a aucune option.</td></tr></tbody></table><h3 id="attributs-du-groupe-d-options"><a class="header-anchor" href="#attributs-du-groupe-d-options">¶</a> Attributs du groupe d&#39;options</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>label</td><td>Nom du group.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Si les options du groupe sont désactivées.</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id="attributs-des-options"><a class="header-anchor" href="#attributs-des-options">¶</a> Attributs des options</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>value</td><td>Valeur de l&#39;option.</td><td>string/number/object</td><td>—</td><td>—</td></tr><tr><td>label</td><td>Label de l&#39;option, identique à <code>value</code> si omis.</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Si l&#39;option est désactivée.</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id="methodes"><a class="header-anchor" href="#methodes">¶</a> Méthodes</h3><table><thead><tr><th>Méthode</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>focus</td><td>Focus sur l&#39;input.</td><td>-</td></tr><tr><td>blur</td><td>Enlève le focus de l&#39;input et cache le menu.</td><td>-</td></tr></tbody></table>',13);var W={name:"component-doc",components:{"element-demo0":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:a,resolveComponent:o,createVNode:d,withCtx:r}=n;const c={data:()=>({options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],value:""})};return Object.assign({render:function(n,c){const i=o("el-option"),u=o("el-select");return l(),a("div",null,[d(u,{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=e=>n.value=e),placeholder:"Select"},{default:r(()=>[(l(!0),a(t,null,e(n.options,e=>(l(),a(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},c)}(),"element-demo1":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:a,resolveComponent:o,createVNode:d,withCtx:r}=n;const c={data:()=>({options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2",disabled:!0},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],value:""})};return Object.assign({render:function(n,c){const i=o("el-option"),u=o("el-select");return l(),a("div",null,[d(u,{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=e=>n.value=e),placeholder:"Select"},{default:r(()=>[(l(!0),a(t,null,e(n.options,e=>(l(),a(i,{key:e.value,label:e.label,value:e.value,disabled:e.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])])}},c)}(),"element-demo2":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:a,resolveComponent:o,createVNode:d,withCtx:r}=n;const c={data:()=>({options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],value:""})};return Object.assign({render:function(n,c){const i=o("el-option"),u=o("el-select");return l(),a("div",null,[d(u,{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=e=>n.value=e),disabled:"",placeholder:"Select"},{default:r(()=>[(l(!0),a(t,null,e(n.options,e=>(l(),a(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},c)}(),"element-demo3":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:a,resolveComponent:o,createVNode:d,withCtx:r}=n;const c={data:()=>({options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],value:""})};return Object.assign({render:function(n,c){const i=o("el-option"),u=o("el-select");return l(),a("div",null,[d(u,{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=e=>n.value=e),clearable:"",placeholder:"Select"},{default:r(()=>[(l(!0),a(t,null,e(n.options,e=>(l(),a(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},c)}(),"element-demo4":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:a,resolveComponent:o,createVNode:d,withCtx:r}=n;const c={data:()=>({options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],value1:[],value2:[]})};return Object.assign({render:function(n,c){const i=o("el-option"),u=o("el-select");return l(),a("div",null,[d(u,{modelValue:n.value1,"onUpdate:modelValue":c[1]||(c[1]=e=>n.value1=e),multiple:"",placeholder:"Select"},{default:r(()=>[(l(!0),a(t,null,e(n.options,e=>(l(),a(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),d(u,{modelValue:n.value2,"onUpdate:modelValue":c[2]||(c[2]=e=>n.value2=e),multiple:"","collapse-tags":"",style:{"margin-left":"20px"},placeholder:"Select"},{default:r(()=>[(l(!0),a(t,null,e(n.options,e=>(l(),a(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},c)}(),"element-demo5":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:a,toDisplayString:o,createVNode:d,resolveComponent:r,withCtx:c}=n,i={style:{float:"left"}},u={style:{float:"right",color:"#8492a6","font-size":"13px"}};const s={data:()=>({cities:[{value:"Beijing",label:"Beijing"},{value:"Shanghai",label:"Shanghai"},{value:"Nanjing",label:"Nanjing"},{value:"Chengdu",label:"Chengdu"},{value:"Shenzhen",label:"Shenzhen"},{value:"Guangzhou",label:"Guangzhou"}],value:""})};return Object.assign({render:function(n,s){const p=r("el-option"),b=r("el-select");return l(),a("div",null,[d(b,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=e=>n.value=e),placeholder:"Select"},{default:c(()=>[(l(!0),a(t,null,e(n.cities,e=>(l(),a(p,{key:e.value,label:e.label,value:e.value},{default:c(()=>[d("span",i,o(e.label),1),d("span",u,o(e.value),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])])}},s)}(),"element-demo6":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:a,resolveComponent:o,createVNode:d,withCtx:r}=n;const c={data:()=>({options:[{label:"Villes célèbres",options:[{value:"Shanghai",label:"Shanghai"},{value:"Beijing",label:"Beijing"}]},{label:"Nom de ville",options:[{value:"Chengdu",label:"Chengdu"},{value:"Shenzhen",label:"Shenzhen"},{value:"Guangzhou",label:"Guangzhou"},{value:"Dalian",label:"Dalian"}]}],value:""})};return Object.assign({render:function(n,c){const i=o("el-option"),u=o("el-option-group"),s=o("el-select");return l(),a("div",null,[d(s,{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=e=>n.value=e),placeholder:"Select"},{default:r(()=>[(l(!0),a(t,null,e(n.options,n=>(l(),a(u,{key:n.label,label:n.label},{default:r(()=>[(l(!0),a(t,null,e(n.options,e=>(l(),a(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])])}},c)}(),"element-demo7":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:a,resolveComponent:o,createVNode:d,withCtx:r}=n;const c={data:()=>({options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],value:""})};return Object.assign({render:function(n,c){const i=o("el-option"),u=o("el-select");return l(),a("div",null,[d(u,{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=e=>n.value=e),filterable:"",placeholder:"Select"},{default:r(()=>[(l(!0),a(t,null,e(n.options,e=>(l(),a(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},c)}(),"element-demo8":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:a,resolveComponent:o,createVNode:d,withCtx:r}=n;const c={data:()=>({options:[],value:[],list:[],loading:!1,states:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]}),mounted(){this.list=this.states.map(e=>({value:"value:"+e,label:"label:"+e}))},methods:{remoteMethod(e){""!==e?(this.loading=!0,setTimeout(()=>{this.loading=!1,this.options=this.list.filter(t=>t.label.toLowerCase().indexOf(e.toLowerCase())>-1)},200)):this.options=[]}}};return Object.assign({render:function(n,c){const i=o("el-option"),u=o("el-select");return l(),a("div",null,[d(u,{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=e=>n.value=e),multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"Entrez un mot-clé","remote-method":n.remoteMethod,loading:n.loading},{default:r(()=>[(l(!0),a(t,null,e(n.options,e=>(l(),a(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","remote-method","loading"])])}},c)}(),"element-demo9":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:a,resolveComponent:o,createVNode:d,withCtx:r}=n;const c={data:()=>({options:[{value:"HTML",label:"HTML"},{value:"CSS",label:"CSS"},{value:"JavaScript",label:"JavaScript"}],value:[]})};return Object.assign({render:function(n,c){const i=o("el-option"),u=o("el-select");return l(),a("div",null,[d(u,{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=e=>n.value=e),multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Choisissez les tags de vos articles"},{default:r(()=>[(l(!0),a(t,null,e(n.options,e=>(l(),a(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},c)}()},render:function(e,t,l,W,K,R){const Y=Object(n.resolveComponent)("element-demo0"),$=Object(n.resolveComponent)("demo-block"),Q=Object(n.resolveComponent)("element-demo1"),X=Object(n.resolveComponent)("element-demo2"),Z=Object(n.resolveComponent)("element-demo3"),ee=Object(n.resolveComponent)("element-demo4"),te=Object(n.resolveComponent)("element-demo5"),le=Object(n.resolveComponent)("element-demo6"),ne=Object(n.resolveComponent)("element-demo7"),ae=Object(n.resolveComponent)("element-demo8"),oe=Object(n.resolveComponent)("element-demo9");return Object(n.openBlock)(),Object(n.createBlock)("section",a,[o,d,r,Object(n.createVNode)($,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(Y)]),highlight:Object(n.withCtx)(()=>[i]),default:Object(n.withCtx)(()=>[c]),_:1}),u,Object(n.createVNode)($,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(Q)]),highlight:Object(n.withCtx)(()=>[p]),default:Object(n.withCtx)(()=>[s]),_:1}),b,h,Object(n.createVNode)($,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(X)]),highlight:Object(n.withCtx)(()=>[O]),default:Object(n.withCtx)(()=>[v]),_:1}),m,j,Object(n.createVNode)($,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(Z)]),highlight:Object(n.withCtx)(()=>[N]),default:Object(n.withCtx)(()=>[V]),_:1}),f,g,Object(n.createVNode)($,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(ee)]),highlight:Object(n.withCtx)(()=>[C]),default:Object(n.withCtx)(()=>[x]),_:1}),S,y,Object(n.createVNode)($,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(te)]),highlight:Object(n.withCtx)(()=>[w]),default:Object(n.withCtx)(()=>[T]),_:1}),k,z,Object(n.createVNode)($,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(le)]),highlight:Object(n.withCtx)(()=>[L]),default:Object(n.withCtx)(()=>[q]),_:1}),M,B,Object(n.createVNode)($,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(ne)]),highlight:Object(n.withCtx)(()=>[_]),default:Object(n.withCtx)(()=>[D]),_:1}),A,U,Object(n.createVNode)($,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(ae)]),highlight:Object(n.withCtx)(()=>[I]),default:Object(n.withCtx)(()=>[F]),_:1}),E,G,Object(n.createVNode)($,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(oe)]),highlight:Object(n.withCtx)(()=>[P]),default:Object(n.withCtx)(()=>[H]),_:1}),J])}};t.default=W}}]);