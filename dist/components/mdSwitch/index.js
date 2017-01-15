/*!
 * Vue Material v0.6.3
 * Made with love by Marcos Moura
 * Released under the MIT License.
 */
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(n){if(s[n])return s[n].exports;var i=s[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var s={};return t.m=e,t.c=s,t.p="/",t(0)})({0:function(e,t,s){e.exports=s(97)},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},97:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){e.component("md-switch",e.extend(a.default))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var o=s(270),a=n(o);e.exports=t.default},150:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(1),o=n(i),a=75,d="-1px";t.default={props:{name:String,value:Boolean,id:String,disabled:Boolean,type:{type:String,default:"button"}},mixins:[o.default],data:function(){return{leftPos:d,checked:this.value}},computed:{classes:function(){return{"md-checked":Boolean(this.value),"md-disabled":this.disabled}},styles:function(){return{transform:"translate3D("+this.leftPos+", -50%, 0)"}}},watch:{checked:function(){this.setPosition()},value:function(e){this.changeState(e)}},methods:{setPosition:function(){this.leftPos=this.checked?a+"%":d},changeState:function(e,t){this.checked=e,this.$emit("change",this.checked,t),this.$emit("input",this.checked,t)},toggle:function(e){this.disabled||this.changeState(!this.checked,e)}},mounted:function(){this.$nextTick(this.setPosition)}},e.exports=t.default},221:function(e,t){},270:function(e,t,s){var n,i;s(221),n=s(150);var o=s(345);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=n},345:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"md-switch",class:[e.themeClass,e.classes]},[s("div",{staticClass:"md-switch-container",on:{click:function(t){e.toggle(t)}}},[s("div",{staticClass:"md-switch-thumb",style:e.styles},[s("input",{attrs:{type:"checkbox",name:e.name,id:e.id,disabled:e.disabled},domProps:{value:e.value}}),e._v(" "),s("button",{staticClass:"md-switch-holder",attrs:{type:e.type}}),e._v(" "),s("md-ink-ripple",{attrs:{"md-disabled":e.disabled}})],1)]),e._v(" "),e.$slots.default?s("label",{staticClass:"md-switch-label",attrs:{for:e.id||e.name}},[e._t("default")],2):e._e()])},staticRenderFns:[]}}})}));