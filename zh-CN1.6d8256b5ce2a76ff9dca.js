(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{429:function(e,o,t){"use strict";t.r(o);var n=t(0);const c=Object(n.withScopeId)("data-v-972a2be6");Object(n.pushScopeId)("data-v-972a2be6");const r={class:"page-container page-component"},l={class:"page-component__content"},a={class:"content-wrap"};Object(n.popScopeId)();const s=c((function(e,o,t,s,i,d){const h=Object(n.resolveComponent)("side-nav"),p=Object(n.resolveComponent)("el-scrollbar"),u=Object(n.resolveComponent)("router-view"),m=Object(n.resolveComponent)("footer-nav"),b=Object(n.resolveComponent)("el-backtop");return Object(n.openBlock)(),Object(n.createBlock)(p,{ref:"componentScrollBar",class:"page-component__scroll"},{default:c(()=>[Object(n.createVNode)("div",r,[Object(n.createVNode)(p,{class:"page-component__nav"},{default:c(()=>[Object(n.createVNode)(h,{data:i.navsData[i.lang],base:`/${i.lang}/component`},null,8,["data","base"])]),_:1}),Object(n.createVNode)("div",l,[Object(n.createVNode)("div",a,[Object(n.createVNode)(u,{class:"content"})]),Object(n.createVNode)(m)]),d.showBackToTop?(Object(n.openBlock)(),Object(n.createBlock)(b,{key:0,target:".page-component__scroll .el-scrollbar__wrap",right:100,bottom:150})):Object(n.createCommentVNode)("",!0)])]),_:1},512)}));var i=t(70),d=t(63),h=t(697),p={beforeRouteUpdate(e,o,t){t(),setTimeout(()=>{const t=e.path,n=o.path;t===n&&e.hash&&this.goAnchor(),t!==n&&(document.documentElement.scrollTop=document.body.scrollTop=0,this.renderAnchorHref())},100)},data(){return{lang:this.$route.meta.lang,navsData:d,scrollTop:0,showHeader:!0,componentScrollBar:null,componentScrollBoxElement:null}},computed:{showBackToTop(){return!this.$route.path.match(/backtop/)}},watch:{"$route.path"(){this.componentScrollBox.scrollTop=0,this.$nextTick(()=>{this.componentScrollBar.update()})}},created(){i.a.$on("nav-fade",e=>{this.navFaded=e})},mounted(){this.componentScrollBar=this.$refs.componentScrollBar,this.componentScrollBox=this.componentScrollBar.$el.querySelector(".el-scrollbar__wrap"),this.throttledScrollHandler=Object(h.throttle)(300,this.handleScroll),this.componentScrollBox.addEventListener("scroll",this.throttledScrollHandler),this.renderAnchorHref(),this.goAnchor(),document.body.classList.add("is-component")},unmounted(){document.body.classList.remove("is-component")},beforeUnmount(){this.componentScrollBox.removeEventListener("scroll",this.throttledScrollHandler)},methods:{renderAnchorHref(){if(/changelog/g.test(location.href))return;const e=document.querySelectorAll("h2 a,h3 a,h4 a,h5 a"),o=location.href.split("#").splice(0,2).join("#");[].slice.call(e).forEach(e=>{const t=e.getAttribute("href");e.href=o+t})},goAnchor(){if(location.href.match(/#/g).length>1){const e=location.href.match(/#[^#]+$/g);if(!e)return;const o=document.querySelector(e[0]);if(!o)return;setTimeout(()=>{this.componentScrollBox.scrollTop=o.offsetTop},50)}},handleScroll(){const e=this.componentScrollBox.scrollTop;this.showHeader!==this.scrollTop>e&&(this.showHeader=this.scrollTop>e),0===e&&(this.showHeader=!0),this.navFaded||i.a.$emit("fade-nav"),this.scrollTop=e}}};t(699);p.render=s,p.__scopeId="data-v-972a2be6";o.default=p},691:function(e,o,t){},697:function(e,o,t){!function(e){"use strict";function o(e,o,t,n){var c,r=!1,l=0;function a(){c&&clearTimeout(c)}function s(){for(var s=arguments.length,i=new Array(s),d=0;d<s;d++)i[d]=arguments[d];var h=this,p=Date.now()-l;function u(){l=Date.now(),t.apply(h,i)}function m(){c=void 0}r||(n&&!c&&u(),a(),void 0===n&&p>e?u():!0!==o&&(c=setTimeout(n?m:u,void 0===n?e-p:e)))}return"boolean"!=typeof o&&(n=t,t=o,o=void 0),s.cancel=function(){a(),r=!0},s}e.debounce=function(e,t,n){return void 0===n?o(e,t,!1):o(e,n,!1!==t)},e.throttle=o,Object.defineProperty(e,"__esModule",{value:!0})}(o)},699:function(e,o,t){"use strict";t(691)}}]);