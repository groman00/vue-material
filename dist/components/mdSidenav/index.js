/*!
 * Vue Material v0.6.3
 * Made with love by Marcos Moura
 * Released under the MIT License.
 */
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(s){if(n[s])return n[s].exports;var o=n[s]={exports:{},id:s,loaded:!1};return e[s].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)})({0:function(e,t,n){e.exports=n(92)},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},92:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-sidenav",e.extend(r.default))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(266),r=s(i);e.exports=t.default},146:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=s(o);t.default={data:function(){return{mdVisible:!1}},mixins:[i.default],computed:{classes:function(){return this.mdVisible&&"md-active"}},methods:{show:function(){this.open()},open:function(){this.mdVisible=!0,this.$el.focus(),this.$emit("open")},close:function(){this.mdVisible=!1,this.$el.blur(),this.$emit("close")},toggle:function(){this.mdVisible?this.close():this.open()}}},e.exports=t.default},210:function(e,t){},266:function(e,t,n){var s,o;n(210),s=n(146);var i=n(325);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,e.exports=s},325:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-sidenav",class:[e.themeClass,e.classes],attrs:{tabindex:"0"},on:{keyup:function(t){e._k(t.keyCode,"esc",27)||e.close(t)}}},[n("div",{staticClass:"md-sidenav-content"},[e._t("default")],2),e._v(" "),n("md-backdrop",{staticClass:"md-sidenav-backdrop",on:{close:e.close}})],1)},staticRenderFns:[]}}})}));