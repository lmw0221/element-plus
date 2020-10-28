(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{674:function(e,n,s){"use strict";s.r(n);var a=s(0);const o={class:"content element-doc"},p=Object(a.createStaticVNode)('<h2 id="inicio-rapido"><a class="header-anchor" href="#inicio-rapido">¶</a> Inicio rápido</h2><p>Esta sección te guía en el proceso de usar Element Plus con webpack en un proyecto.</p><h3 id="use-vue-cli-4.5"><a class="header-anchor" href="#use-vue-cli-4.5">¶</a> Use vue-cli@4.5</h3><p>Proporcionamos un <a href="https://github.com/element-plus/vue-cli-plugin-element-plus">plugin de Element</a> para vue-cli@4.5, que puede utilizar para construir rápidamente un proyecto basado en Element.</p><h3 id="usa-la-plantilla-de-kit-de-inicio"><a class="header-anchor" href="#usa-la-plantilla-de-kit-de-inicio">¶</a> Usa la plantilla de Kit de inicio</h3><p>Proveemos una plantilla general <a href="https://github.com/element-plus/element-plus-starter">project template</a>, and also a Vite <a href="https://github.com/element-plus/element-plus-vite-starter">template</a>. Para los usuarios de Laravel, también tenemos <a href="https://github.com/element-plus/element-plus-in-laravel-starter">template</a>. Puedes descargarlas y agregarlas directamente también.</p><p>Si prefiere no utilizarlas, lee las siguientes secciones de este documento.</p><h3 id="importando-element-plus"><a class="header-anchor" href="#importando-element-plus">¶</a> Importando Element Plus</h3><p>Puede importar Element Plus completamente o solamente importar lo que necesite. Comencemos importando todo.</p><h4 id="importando-todo"><a class="header-anchor" href="#importando-todo">¶</a> Importando todo</h4><p>En main.js:</p><pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> { createApp, Vue } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> ElementPlus <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;element-plus&#39;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;element-plus/lib/theme-chalk/index.css&#39;</span>;\n<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp(App)\napp.use(ElementPlus)\napp.mount(<span class="hljs-string">&#39;#app&#39;</span>)\n</code></pre><p>El código anterior importa Element Plus completamente. Nótese que el archivo CSS necesita ser incluido por separado.</p><h4 id="en-demanda"><a class="header-anchor" href="#en-demanda">¶</a> En demanda</h4><p>Con la ayuda de <a href="https://github.com/QingWei-Li/babel-plugin-component">babel-plugin-component</a>, podemos importar los componentes que necesitamos, haciendo nuestro proyecto más pequeño que de la otra manera.</p><p>Primero, instale babel-plugin-component:</p><pre><code class="hljs language-bash">npm install babel-plugin-component -D\n</code></pre><p>Luego edite .babelrc:</p><pre><code class="hljs language-json">{\n  <span class="hljs-attr">&quot;presets&quot;</span>: [[<span class="hljs-string">&quot;es2015&quot;</span>, { <span class="hljs-attr">&quot;modules&quot;</span>: <span class="hljs-literal">false</span> }]],\n  <span class="hljs-attr">&quot;plugins&quot;</span>: [\n    [\n      <span class="hljs-string">&quot;component&quot;</span>,\n      {\n        <span class="hljs-attr">&quot;libraryName&quot;</span>: <span class="hljs-string">&quot;element-plus&quot;</span>,\n        <span class="hljs-attr">&quot;styleLibraryName&quot;</span>: <span class="hljs-string">&quot;theme-chalk&quot;</span>\n      }\n    ]\n  ]\n}\n</code></pre><p>Luego, si necesita Button y Select, edite main.js:</p><pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { Button, Select } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;element-plus&#39;</span>;\n<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>;\n\nVue.component(Button.name, Button);\nVue.component(Select.name, Select);\n<span class="hljs-comment">/* or\n * Vue.use(Button)\n * Vue.use(Select)\n */</span>\n\n<span class="hljs-keyword">new</span> Vue({\n  <span class="hljs-attr">el</span>: <span class="hljs-string">&#39;#app&#39;</span>,\n  <span class="hljs-attr">render</span>: <span class="hljs-function"><span class="hljs-params">h</span> =&gt;</span> h(App)\n});\n</code></pre><p>Ejemplo completo (Referencia completa de componentes <a href="https://github.com/ElemeFE/element/blob/master/components.json">components.json</a>)</p><pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> {\n  Pagination,\n  Dialog,\n  Autocomplete,\n  Dropdown,\n  DropdownMenu,\n  DropdownItem,\n  Menu,\n  Submenu,\n  MenuItem,\n  MenuItemGroup,\n  Input,\n  InputNumber,\n  Radio,\n  RadioGroup,\n  RadioButton,\n  Checkbox,\n  CheckboxButton,\n  CheckboxGroup,\n  Switch,\n  Select,\n  Option,\n  OptionGroup,\n  Button,\n  ButtonGroup,\n  Table,\n  TableColumn,\n  DatePicker,\n  TimeSelect,\n  TimePicker,\n  Popover,\n  Tooltip,\n  Breadcrumb,\n  BreadcrumbItem,\n  Form,\n  FormItem,\n  Tabs,\n  TabPane,\n  Tag,\n  Tree,\n  Alert,\n  Slider,\n  Icon,\n  Row,\n  Col,\n  Upload,\n  Progress,\n  Spinner,\n  Badge,\n  Card,\n  Rate,\n  Steps,\n  Step,\n  Carousel,\n  CarouselItem,\n  Collapse,\n  CollapseItem,\n  Cascader,\n  ColorPicker,\n  Transfer,\n  Container,\n  Header,\n  Aside,\n  Main,\n  Footer,\n  Timeline,\n  TimelineItem,\n  Link,\n  Divider,\n  Image,\n  Calendar,\n  Backtop,\n  PageHeader,\n  CascaderPanel,\n  Loading,\n  MessageBox,\n  Message,\n  Notification\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;element-plus&#39;</span>;\n\nVue.use(Pagination);\nVue.use(Dialog);\nVue.use(Autocomplete);\nVue.use(Dropdown);\nVue.use(DropdownMenu);\nVue.use(DropdownItem);\nVue.use(Menu);\nVue.use(Submenu);\nVue.use(MenuItem);\nVue.use(MenuItemGroup);\nVue.use(Input);\nVue.use(InputNumber);\nVue.use(Radio);\nVue.use(RadioGroup);\nVue.use(RadioButton);\nVue.use(Checkbox);\nVue.use(CheckboxButton);\nVue.use(CheckboxGroup);\nVue.use(Switch);\nVue.use(Select);\nVue.use(Option);\nVue.use(OptionGroup);\nVue.use(Button);\nVue.use(ButtonGroup);\nVue.use(Table);\nVue.use(TableColumn);\nVue.use(DatePicker);\nVue.use(TimeSelect);\nVue.use(TimePicker);\nVue.use(Popover);\nVue.use(Tooltip);\nVue.use(Breadcrumb);\nVue.use(BreadcrumbItem);\nVue.use(Form);\nVue.use(FormItem);\nVue.use(Tabs);\nVue.use(TabPane);\nVue.use(Tag);\nVue.use(Tree);\nVue.use(Alert);\nVue.use(Slider);\nVue.use(Icon);\nVue.use(Row);\nVue.use(Col);\nVue.use(Upload);\nVue.use(Progress);\nVue.use(Spinner);\nVue.use(Badge);\nVue.use(Card);\nVue.use(Rate);\nVue.use(Steps);\nVue.use(Step);\nVue.use(Carousel);\nVue.use(CarouselItem);\nVue.use(Collapse);\nVue.use(CollapseItem);\nVue.use(Cascader);\nVue.use(ColorPicker);\nVue.use(Transfer);\nVue.use(Container);\nVue.use(Header);\nVue.use(Aside);\nVue.use(Main);\nVue.use(Footer);\nVue.use(Timeline);\nVue.use(TimelineItem);\nVue.use(Link);\nVue.use(Divider);\nVue.use(Image);\nVue.use(Calendar);\nVue.use(Backtop);\nVue.use(PageHeader);\nVue.use(CascaderPanel);\n\nVue.use(Loading.directive);\n\nVue.prototype.$loading = Loading.service;\nVue.prototype.$msgbox = MessageBox;\nVue.prototype.$alert = MessageBox.alert;\nVue.prototype.$confirm = MessageBox.confirm;\nVue.prototype.$prompt = MessageBox.prompt;\nVue.prototype.$notify = Notification;\nVue.prototype.$message = Message;\n</code></pre><h3 id="configuracion-global"><a class="header-anchor" href="#configuracion-global">¶</a> Configuración global</h3><p>Cuando importa Element, puede definir un objeto global de configuración. Por ahora este elemento solo contiene dos propiedades: <code>size</code>, <code>zIndex</code>. <code>size</code> define el tamaño por defecto de todos los componentes.</p><p>La propiedad <code>zIndex</code> indica el z-index inicial (por defecto: 2000) para los modal:</p><p>Importando Element Plus completamente：</p><pre><code class="hljs language-js"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> ElementPlus <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;element-plus&#39;</span>;\nVue.use(Element, { <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;small&#39;</span>, <span class="hljs-attr">zIndex</span>: <span class="hljs-number">3000</span> });\n</code></pre><p>Importando Element Plus parcialmente：</p><pre><code class="hljs language-js"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;element-plus&#39;</span>;\n\nVue.prototype.$ELEMENT = { <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;small&#39;</span>, <span class="hljs-attr">zIndex</span>: <span class="hljs-number">3000</span> };\nVue.use(Button);\n</code></pre><p>Con la anterior configuración, el tamaño por defecto de todos los componentes que tienen el atributo <code>size</code> será <code>small</code>. El valor inicial de z-index para los modals se ha establecido a 3000.</p><h3 id="empiece-ya"><a class="header-anchor" href="#empiece-ya">¶</a> Empiece ya!</h3><p>Ahora ha incorporado Vue y Element Plus a su proyecto y es el momento para comenzar a programar. Por favor, refiérase a la documentación de cada componente para aprender cómo usarlos.</p><h3 id="use-nuxt.js"><a class="header-anchor" href="#use-nuxt.js">¶</a> Use Nuxt.js</h3><p>También podemos comenzar un proyecto usando <a href="nuxtjs.org">Nuxt.js</a>:</p><div class="glitch-embed-wrap" style="height:420px;width:100%;"><iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&amp;previewSize=0&amp;attributionHidden=true" alt="nuxt-with-element on glitch" style="height:100%;width:100%;border:0;"></iframe></div>',36);const t={render:function(e,n,s,t,l,u){return Object(a.openBlock)(),Object(a.createBlock)("section",o,[p])}};n.default=t}}]);