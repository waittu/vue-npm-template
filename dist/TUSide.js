!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("TUSide",[],t):"object"==typeof exports?exports.TUSide=t():e.TUSide=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={name:"side",data:function(){return{visible:this.value}},props:{value:{type:Boolean,default:!0},width:{type:[Number,String],default:"400"},mask:{type:Boolean,default:!0},maskStyle:{type:String,default:"dark"},zIndex:{type:[Number,String],default:1100},title:{type:String,default:"side"}},mounted:function(){},methods:{closePage:function(){this.visible=!1,this.$emit("on-close")}},computed:{mask_style:function(){return"light"===this.maskStyle?{backgroundColor:"rgba(255,255,255,0)"}:{backgroundColor:"rgba(0,0,0,0.3)"}}},watch:{value:function(e){this.visible=e},visible:function(e){this.$emit("input",e)}},components:{}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r={side:i.a},o=function e(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.installed||Object.keys(r).forEach(function(e){t.component(e,r[e])})};"undefined"!=typeof window&&window.Vue&&o(window.Vue),t.default=o},function(e,t,n){"use strict";var i=n(3);t.a=i.a},function(e,t,n){"use strict";function i(e){n(4)}var r=n(0),o=n(10),s=n(9),a=i,d=s(r.a,o.a,!1,a,"data-v-d5438670",null);t.a=d.exports},function(e,t,n){var i=n(5);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(7)("4fed7c22",i,!0,{})},function(e,t,n){t=e.exports=n(6)(!1),t.push([e.i,".project-mask-enter[data-v-d5438670]{animation:width-enter-data-v-d5438670 .3s}.project-mask-out[data-v-d5438670]{animation:width-out-data-v-d5438670 .3s}@keyframes width-out-data-v-d5438670{0%{right:0}to{right:-100%}}@keyframes width-enter-data-v-d5438670{0%{right:-100%}to{right:0}}.side-wrap[data-v-d5438670]{position:relative}.side-mask[data-v-d5438670]{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.3)}.side-content[data-v-d5438670]{position:fixed;right:0;top:0;background-color:#fff;height:100vh;box-shadow:0 8px 10px rgba(0,0,0,.3);box-sizing:border-box}.side-content .side-header[data-v-d5438670]{height:60px;border-bottom:1px solid #e5e5e5;box-sizing:border-box;flex:0 60px}.side-content .side-bottom[data-v-d5438670]{height:60px;border-top:1px solid #e5e5e5;box-sizing:border-box;flex:0 60px}.side-content .side-content-wrap[data-v-d5438670]{overflow:auto}.side-header-wrap[data-v-d5438670]{line-height:40px;box-sizing:border-box;padding:10px 20px;position:relative}.side-header-wrap h4[data-v-d5438670]{font-size:14px;font-weight:700}.side-header-wrap .side-close[data-v-d5438670]{position:absolute;width:60px;height:60px;right:20px;top:0;line-height:60px;text-align:right;font-size:14px;cursor:pointer;color:#2d8cf0}",""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=i(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=u[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(o(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(o(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function o(e){var t,n,i=document.querySelector("style["+m+'~="'+e.id+'"]');if(i){if(v)return h;i.parentNode.removeChild(i)}if(b){var o=p++;i=f||(f=r()),t=s.bind(null,i,o,!1),n=s.bind(null,i,o,!0)}else i=r(),t=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function s(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var n=t.css,i=t.media,r=t.sourceMap;if(i&&e.setAttribute("media",i),g.ssrId&&e.setAttribute(m,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(8),u={},l=d&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},g=null,m="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,r){v=n,g=r||{};var o=c(e,t);return i(o),function(t){for(var n=[],r=0;r<o.length;r++){var s=o[r],a=u[s.id];a.refs--,n.push(a)}t?(o=c(e,t),i(o)):o=[];for(var r=0;r<n.length;r++){var a=n[r];if(0===a.refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete u[a.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],s=o[0],a=o[1],d=o[2],c=o[3],u={id:e+":"+r,css:a,media:d,sourceMap:c};i[s]?i[s].parts.push(u):n.push(i[s]={id:s,parts:[u]})}return n}},function(e,t){e.exports=function(e,t,n,i,r,o){var s,a=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(s=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r);var u;if(o?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=u):i&&(u=i),u){var l=c.functional,f=l?c.render:c.beforeCreate;l?(c._injectStyles=u,c.render=function(e,t){return u.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,u):[u]}return{esModule:s,exports:a,options:c}}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"side-wrap",style:{"z-index":e.zIndex}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"side-mask",style:e.mask_style,on:{click:function(t){e.visible=!1}}}),e._v(" "),n("transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"side-content flex-wrap",class:{"project-mask-enter":e.visible,"project-mask-out":!e.visible},style:{width:e.width+"px"}},[n("div",{staticClass:"side-header"},[e._t("header",[n("div",{staticClass:"side-header-wrap"},[n("h4",[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"side-close",on:{click:e.closePage}},[e._v("关闭")])])])],2),e._v(" "),n("div",{staticClass:" side-content-wrap flex-item scroll-style"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"side-bottom"},[e._t("bottom",[n("div",{staticClass:"side-header-wrap"},[n("div",{staticClass:"side-close",on:{click:e.closePage}},[e._v("关闭")])])])],2)])])],1)},r=[],o={render:i,staticRenderFns:r};t.a=o}])});