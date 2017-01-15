/*!
 * Vue Material v0.6.3
 * Made with love by Marcos Moura
 * Released under the MIT License.
 */
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)})({0:function(e,t,n){e.exports=n(75)},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},75:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e){e.component("md-button",e.extend(o.default))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var i=n(226),o=r(i);e.exports=t.default},114:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),i=r(s);t.default={props:{href:String,target:String,rel:String,type:{type:String,default:"button"},disabled:Boolean},mixins:[i.default],computed:{newRel:function(){return"_blank"===this.target?this.rel||"noopener":this.rel}}},e.exports=t.default},208:function(e,t){},226:function(e,t,n){var r,s;n(208),r=n(114);var i=n(322);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,e.exports=r},322:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.href?n("a",{staticClass:"md-button",class:[e.themeClass],attrs:{href:e.href,disabled:e.disabled,target:e.target,rel:e.newRel},on:{click:function(t){e.$emit("click",t)}}},[n("md-ink-ripple",{attrs:{"md-disabled":e.disabled}}),e._v(" "),e._t("default")],2):n("button",{staticClass:"md-button",class:[e.themeClass],attrs:{type:e.type,disabled:e.disabled},on:{click:function(t){e.$emit("click",t)}}},[n("md-ink-ripple",{attrs:{"md-disabled":e.disabled}}),e._v(" "),e._t("default")],2)},staticRenderFns:[]}}})}));