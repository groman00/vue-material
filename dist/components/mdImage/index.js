/*!
 * Vue Material v0.6.3
 * Made with love by Marcos Moura
 * Released under the MIT License.
 */
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)})({0:function(e,t,n){e.exports=n(84)},66:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){var n=document.createElement("canvas");e.onload=function(){var e=0,a=void 0,i=void 0,o=void 0,r=void 0,s=void 0,d=void 0,c=void 0;n.width=this.width,n.height=this.height,a=n.getContext("2d"),a.drawImage(this,0,0),i=a.getImageData(0,0,n.width,n.height),o=i.data;for(var u=0,l=o.length;u<l;u+=4)r=o[u],s=o[u+1],d=o[u+2],c=Math.floor((r+s+d)/3),e+=c;t(Math.floor(e/(this.width*this.height)))}};t.default=n,e.exports=t.default},84:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){e.component("md-image",e.extend(r.default))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var o=n(252),r=a(o);e.exports=t.default},131:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(66),o=a(i);t.default={props:{mdSrc:String},data:function(){return{loaded:!1,applyBlack:!0,imageElement:null}},watch:{mdSrc:function(){this.createImage()}},computed:{classes:function(){return{"md-loaded":this.loaded,"md-black-output":this.applyBlack}}},methods:{analyzeLightness:function(e){var t=this;(0,o.default)(e,(function(e){var n=256,a=(100*Math.abs(n-e)/n+15)/100;a>=.7&&(t.applyBlack=!0),t.$nextTick((function(){t.loaded=!0}))}))},createImage:function(){this.loaded=!1,this.applyBlack=!1,this.imageElement=null,this.mdSrc&&(this.imageElement=document.createElement("img"),this.imageElement.crossOrigin="",this.imageElement.src=this.mdSrc,this.analyzeLightness(this.imageElement))}},created:function(){this.createImage()}},e.exports=t.default},196:function(e,t){},252:function(e,t,n){var a,i;n(196),a=n(131);var o=n(299);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=a},299:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("img",{staticClass:"md-image",class:e.classes,attrs:{src:e.mdSrc}})},staticRenderFns:[]}}})}));