/*!
 * Vue Material v0.6.3
 * Made with love by Marcos Moura
 * Released under the MIT License.
 */
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)})({0:function(e,t,n){e.exports=n(72)},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},72:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e){e.component("md-avatar",e.extend(a.default))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var o=n(220),a=r(o);e.exports=t.default},110:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),o=r(s);t.default={mixins:[o.default]},e.exports=t.default},200:function(e,t){},220:function(e,t,n){var r,s;n(200),r=n(110);var o=n(310);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,e.exports=r},310:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-avatar",class:[e.themeClass]},[e._t("default")],2)},staticRenderFns:[]}}})}));