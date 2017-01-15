(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueMaterial"] = factory();
	else
		root["VueMaterial"] = factory();
})(this, (function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(107);


/***/ },

/***/ 2:
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(11)((function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	}));

/***/ },

/***/ 5:
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },

/***/ 6:
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(30)
	  , toPrimitive    = __webpack_require__(29)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(7)
	  , createDesc = __webpack_require__(15);
	module.exports = __webpack_require__(4) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(35)
	  , defined = __webpack_require__(14);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },

/***/ 11:
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(9);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },

/***/ 14:
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },

/***/ 15:
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },

/***/ 16:
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(2)
	  , core      = __webpack_require__(5)
	  , ctx       = __webpack_require__(27)
	  , hide      = __webpack_require__(8)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(22)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },

/***/ 19:
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(31)
	  , enumBugKeys = __webpack_require__(21);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },

/***/ 21:
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(2)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },

/***/ 23:
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(14);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(9)
	  , document = __webpack_require__(2).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(33);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(16)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(9);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(4) && !__webpack_require__(11)((function(){
	  return Object.defineProperty(__webpack_require__(26)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	}));

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(6)
	  , toIObject    = __webpack_require__(10)
	  , arrayIndexOf = __webpack_require__(34)(false)
	  , IE_PROTO     = __webpack_require__(18)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },

/***/ 33:
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(10)
	  , toLength  = __webpack_require__(28)
	  , toIndex   = __webpack_require__(36);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(23);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(16)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(53);
	module.exports = __webpack_require__(5).Object.keys;

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(17)
	  , core    = __webpack_require__(5)
	  , fails   = __webpack_require__(11);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails((function(){ fn(1); })), 'Object', exp);
	};

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(25)
	  , $keys    = __webpack_require__(20);

	__webpack_require__(51)('keys', (function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	}));

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = install;

	var _mdInkRipple = __webpack_require__(284);

	var _mdInkRipple2 = _interopRequireDefault(_mdInkRipple);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function install(Vue) {
	  Vue.component('md-ink-ripple', Vue.extend(_mdInkRipple2.default));
	}
	module.exports = exports['default'];

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(39);

	var _keys2 = _interopRequireDefault(_keys);

	exports.default = install;

	var _palette = __webpack_require__(105);

	var _palette2 = _interopRequireDefault(_palette);

	var _rgba = __webpack_require__(106);

	var _rgba2 = _interopRequireDefault(_rgba);

	var _mdTheme = __webpack_require__(285);

	var _mdTheme2 = _interopRequireDefault(_mdTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VALID_THEME_TYPE = ['primary', 'accent', 'background', 'warn', 'hue-1', 'hue-2', 'hue-3'];
	var DEFAULT_THEME_COLORS = {
	  primary: 'indigo',
	  accent: 'pink',
	  background: 'white',
	  warn: 'deep-orange'
	};
	/*const DEFAULT_HUES = {
	  accent: {
	    'hue-1': 'A100',
	    'hue-2': 'A400',
	    'hue-3': 'A700'
	  },
	  background: {
	    'hue-1': 'A100',
	    'hue-2': '100',
	    'hue-3': '300'
	  }
	};*/

	var createNewStyleElement = function createNewStyleElement(style, name) {
	  var head = document.head;
	  var styleId = 'md-theme-' + name;
	  var styleElement = head.querySelector('#' + styleId);

	  if (!styleElement) {
	    var newTag = document.createElement('style');

	    style = style.replace(/THEME_NAME/g, styleId);

	    newTag.type = 'text/css';
	    newTag.id = styleId;
	    newTag.textContent = style;

	    head.appendChild(newTag);
	  } else {
	    styleElement.textContent = style;
	  }
	};

	var registeredThemes = [];

	var parseStyle = function parseStyle(style, theme) {
	  VALID_THEME_TYPE.forEach((function (type) {
	    style = style.replace(RegExp('(' + type.toUpperCase() + ')-(COLOR|CONTRAST)-?(A?\\d*)-?(\\d*\\.?\\d+)?', 'g'), (function (match, paletteType, colorType, hue, opacity) {
	      var color = void 0;
	      var colorVariant = +hue === 0 ? 500 : hue;

	      if (theme[type]) {
	        if (typeof theme[type] === 'string') {
	          color = _palette2.default[theme[type]];
	        } else {
	          color = _palette2.default[theme[type].color] || _palette2.default[DEFAULT_THEME_COLORS[type]];
	          colorVariant = +hue === 0 ? theme[type].hue : hue;
	        }
	      } else {
	        color = _palette2.default[DEFAULT_THEME_COLORS[type]];
	      }

	      if (colorType === 'COLOR') {
	        var isDefault = _palette2.default[theme[type]];

	        if (!hue && !isDefault) {
	          if (type === 'accent') {
	            colorVariant = 'A200';
	          } else if (type === 'background') {
	            colorVariant = 50;
	          }
	        }

	        if (opacity) {
	          return (0, _rgba2.default)(color[colorVariant], opacity);
	        }

	        return color[colorVariant];
	      }

	      if (color.darkText.indexOf(colorVariant) >= 0) {
	        if (opacity) {
	          return (0, _rgba2.default)('#000', opacity);
	        }

	        return 'rgba(0, 0, 0, .87)';
	      }

	      if (opacity) {
	        return (0, _rgba2.default)('#fff', opacity);
	      }

	      return 'rgba(255, 255, 255, .87)';
	    }));
	  }));

	  return style;
	};

	var registerTheme = function registerTheme(theme, name, themeStyles) {
	  var parsedStyle = [];

	  themeStyles.forEach((function (style) {
	    parsedStyle.push(parseStyle(style, theme));
	  }));

	  createNewStyleElement(parsedStyle.join('\n'), name);
	};

	var registerAllThemes = function registerAllThemes(themes, themeStyles) {
	  var themeNames = themes ? (0, _keys2.default)(themes) : [];

	  themeNames.forEach((function (name) {
	    registerTheme(themes[name], name, themeStyles);
	    registeredThemes.push(name);
	  }));
	};

	function install(Vue) {
	  Vue.material = new Vue({
	    data: function data() {
	      return {
	        styles: [],
	        currentTheme: null,
	        inkRipple: true
	      };
	    },
	    methods: {
	      registerTheme: function registerTheme(name, spec) {
	        var theme = {};

	        if (typeof name === 'string') {
	          theme[name] = spec;
	        } else {
	          theme = name;
	        }

	        registerAllThemes(theme, this.styles);
	      },
	      applyCurrentTheme: function applyCurrentTheme(themeName) {
	        document.body.classList.remove('md-theme-' + this.currentTheme);
	        document.body.classList.add('md-theme-' + themeName);
	        this.currentTheme = themeName;
	      },
	      setCurrentTheme: function setCurrentTheme(themeName) {
	        if (registeredThemes.indexOf(themeName) >= 0) {
	          this.applyCurrentTheme(themeName);
	        } else {
	          if (registeredThemes.indexOf('default') === -1) {
	            this.registerTheme('default', DEFAULT_THEME_COLORS);
	          } else {
	            console.warn('The theme \'' + themeName + '\' doesn\'t exists. You need to register it first in order to use.');
	          }

	          this.applyCurrentTheme('default');
	        }
	      }
	    }
	  });

	  Vue.component('md-theme', _mdTheme2.default);

	  Vue.prototype.$material = Vue.material;
	}
	module.exports = exports['default'];

/***/ },

/***/ 105:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  red: {
	    50: '#ffebee',
	    100: '#ffcdd2',
	    200: '#ef9a9a',
	    300: '#e57373',
	    400: '#ef5350',
	    500: '#f44336',
	    600: '#e53935',
	    700: '#d32f2f',
	    800: '#c62828',
	    900: '#b71c1c',
	    A100: '#ff8a80',
	    A200: '#ff5252',
	    A400: '#ff1744',
	    A700: '#d50000',
	    darkText: [50, 100, 200, 300, 'A100']
	  },
	  pink: {
	    50: '#fce4ec',
	    100: '#f8bbd0',
	    200: '#f48fb1',
	    300: '#f06292',
	    400: '#ec407a',
	    500: '#e91e63',
	    600: '#d81b60',
	    700: '#c2185b',
	    800: '#ad1457',
	    900: '#880e4f',
	    A100: '#ff80ab',
	    A200: '#ff4081',
	    A400: '#f50057',
	    A700: '#c51162',
	    darkText: [50, 100, 200, 'A100']
	  },
	  purple: {
	    50: '#f3e5f5',
	    100: '#e1bee7',
	    200: '#ce93d8',
	    300: '#ba68c8',
	    400: '#ab47bc',
	    500: '#9c27b0',
	    600: '#8e24aa',
	    700: '#7b1fa2',
	    800: '#6a1b9a',
	    900: '#4a148c',
	    A100: '#ea80fc',
	    A200: '#e040fb',
	    A400: '#d500f9',
	    A700: '#aa00ff',
	    darkText: [50, 100, 200, 'A100']
	  },
	  'deep-purple': {
	    50: '#ede7f6',
	    100: '#d1c4e9',
	    200: '#b39ddb',
	    300: '#9575cd',
	    400: '#7e57c2',
	    500: '#673ab7',
	    600: '#5e35b1',
	    700: '#512da8',
	    800: '#4527a0',
	    900: '#311b92',
	    A100: '#b388ff',
	    A200: '#7c4dff',
	    A400: '#651fff',
	    A700: '#6200ea',
	    darkText: [50, 100, 200, 'A100']
	  },
	  indigo: {
	    50: '#e8eaf6',
	    100: '#c5cae9',
	    200: '#9fa8da',
	    300: '#7986cb',
	    400: '#5c6bc0',
	    500: '#3f51b5',
	    600: '#3949ab',
	    700: '#303f9f',
	    800: '#283593',
	    900: '#1a237e',
	    A100: '#8c9eff',
	    A200: '#536dfe',
	    A400: '#3d5afe',
	    A700: '#304ffe',
	    darkText: [50, 100, 200, 'A100']
	  },
	  blue: {
	    50: '#e3f2fd',
	    100: '#bbdefb',
	    200: '#90caf9',
	    300: '#64b5f6',
	    400: '#42a5f5',
	    500: '#2196f3',
	    600: '#1e88e5',
	    700: '#1976d2',
	    800: '#1565c0',
	    900: '#0d47a1',
	    A100: '#82b1ff',
	    A200: '#448aff',
	    A400: '#2979ff',
	    A700: '#2962ff',
	    darkText: [50, 100, 200, 300, 400, 'A100']
	  },
	  'light-blue': {
	    50: '#e1f5fe',
	    100: '#b3e5fc',
	    200: '#81d4fa',
	    300: '#4fc3f7',
	    400: '#29b6f6',
	    500: '#03a9f4',
	    600: '#039be5',
	    700: '#0288d1',
	    800: '#0277bd',
	    900: '#01579b',
	    A100: '#80d8ff',
	    A200: '#40c4ff',
	    A400: '#00b0ff',
	    A700: '#0091ea',
	    darkText: [50, 100, 200, 300, 400, 500, 'A100', 'A200', 'A300']
	  },
	  cyan: {
	    50: '#e0f7fa',
	    100: '#b2ebf2',
	    200: '#80deea',
	    300: '#4dd0e1',
	    400: '#26c6da',
	    500: '#00bcd4',
	    600: '#00acc1',
	    700: '#0097a7',
	    800: '#00838f',
	    900: '#006064',
	    A100: '#84ffff',
	    A200: '#18ffff',
	    A400: '#00e5ff',
	    A700: '#00b8d4',
	    darkText: [50, 100, 200, 300, 400, 500, 600, 'A100', 'A200', 'A300', 'A400']
	  },
	  teal: {
	    50: '#e0f2f1',
	    100: '#b2dfdb',
	    200: '#80cbc4',
	    300: '#4db6ac',
	    400: '#26a69a',
	    500: '#009688',
	    600: '#00897b',
	    700: '#00796b',
	    800: '#00695c',
	    900: '#004d40',
	    A100: '#a7ffeb',
	    A200: '#64ffda',
	    A400: '#1de9b6',
	    A700: '#00bfa5',
	    darkText: [50, 100, 200, 300, 400, 'A100', 'A200', 'A300', 'A400']
	  },
	  green: {
	    50: '#e8f5e9',
	    100: '#c8e6c9',
	    200: '#a5d6a7',
	    300: '#81c784',
	    400: '#66bb6a',
	    500: '#4caf50',
	    600: '#43a047',
	    700: '#388e3c',
	    800: '#2e7d32',
	    900: '#1b5e20',
	    A100: '#b9f6ca',
	    A200: '#69f0ae',
	    A400: '#00e676',
	    A700: '#00c853',
	    darkText: [50, 100, 200, 300, 400, 500, 'A100', 'A200', 'A300', 'A400']
	  },
	  'light-green': {
	    50: '#f1f8e9',
	    100: '#dcedc8',
	    200: '#c5e1a5',
	    300: '#aed581',
	    400: '#9ccc65',
	    500: '#8bc34a',
	    600: '#7cb342',
	    700: '#689f38',
	    800: '#558b2f',
	    900: '#33691e',
	    A100: '#ccff90',
	    A200: '#b2ff59',
	    A400: '#76ff03',
	    A700: '#64dd17',
	    darkText: [50, 100, 200, 300, 400, 500, 600, 'A100', 'A200', 'A300', 'A400']
	  },
	  lime: {
	    50: '#f9fbe7',
	    100: '#f0f4c3',
	    200: '#e6ee9c',
	    300: '#dce775',
	    400: '#d4e157',
	    500: '#cddc39',
	    600: '#c0ca33',
	    700: '#afb42b',
	    800: '#9e9d24',
	    900: '#827717',
	    A100: '#f4ff81',
	    A200: '#eeff41',
	    A400: '#c6ff00',
	    A700: '#aeea00',
	    darkText: [50, 100, 200, 300, 400, 500, 600, 700, 800, 'A100', 'A200', 'A300', 'A400']
	  },
	  yellow: {
	    50: '#fffde7',
	    100: '#fff9c4',
	    200: '#fff59d',
	    300: '#fff176',
	    400: '#ffee58',
	    500: '#ffeb3b',
	    600: '#fdd835',
	    700: '#fbc02d',
	    800: '#f9a825',
	    900: '#f57f17',
	    A100: '#ffff8d',
	    A200: '#ffff00',
	    A400: '#ffea00',
	    A700: '#ffd600',
	    darkText: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'A100', 'A200', 'A300', 'A400']
	  },
	  amber: {
	    50: '#fff8e1',
	    100: '#ffecb3',
	    200: '#ffe082',
	    300: '#ffd54f',
	    400: '#ffca28',
	    500: '#ffc107',
	    600: '#ffb300',
	    700: '#ffa000',
	    800: '#ff8f00',
	    900: '#ff6f00',
	    A100: '#ffe57f',
	    A200: '#ffd740',
	    A400: '#ffc400',
	    A700: '#ffab00',
	    darkText: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'A100', 'A200', 'A300', 'A400']
	  },
	  orange: {
	    50: '#fff3e0',
	    100: '#ffe0b2',
	    200: '#ffcc80',
	    300: '#ffb74d',
	    400: '#ffa726',
	    500: '#ff9800',
	    600: '#fb8c00',
	    700: '#f57c00',
	    800: '#ef6c00',
	    900: '#e65100',
	    A100: '#ffd180',
	    A200: '#ffab40',
	    A400: '#ff9100',
	    A700: '#ff6d00',
	    darkText: [50, 100, 200, 300, 400, 500, 600, 700, 'A100', 'A200', 'A300', 'A400']
	  },
	  'deep-orange': {
	    50: '#fbe9e7',
	    100: '#ffccbc',
	    200: '#ffab91',
	    300: '#ff8a65',
	    400: '#ff7043',
	    500: '#ff5722',
	    600: '#f4511e',
	    700: '#e64a19',
	    800: '#d84315',
	    900: '#bf360c',
	    A100: '#ff9e80',
	    A200: '#ff6e40',
	    A400: '#ff3d00',
	    A700: '#dd2c00',
	    darkText: [50, 100, 200, 300, 400, 'A100', 'A200']
	  },
	  brown: {
	    50: '#efebe9',
	    100: '#d7ccc8',
	    200: '#bcaaa4',
	    300: '#a1887f',
	    400: '#8d6e63',
	    500: '#795548',
	    600: '#6d4c41',
	    700: '#5d4037',
	    800: '#4e342e',
	    900: '#3e2723',
	    A100: '#d7ccc8',
	    A200: '#bcaaa4',
	    A400: '#8d6e63',
	    A700: '#5d4037',
	    darkText: [50, 100, 200, 'A100', 'A200', 'A300', 'A400']
	  },
	  grey: {
	    50: '#fafafa',
	    100: '#f5f5f5',
	    200: '#eeeeee',
	    300: '#e0e0e0',
	    400: '#bdbdbd',
	    500: '#9e9e9e',
	    600: '#757575',
	    700: '#616161',
	    800: '#424242',
	    900: '#212121',
	    A100: '#fff',
	    A200: '#000000',
	    A400: '#303030',
	    A700: '#616161',
	    darkText: [50, 100, 200, 300, 400, 500, 'A100']
	  },
	  'blue-grey': {
	    50: '#eceff1',
	    100: '#cfd8dc',
	    200: '#b0bec5',
	    300: '#90a4ae',
	    400: '#78909c',
	    500: '#607d8b',
	    600: '#546e7a',
	    700: '#455a64',
	    800: '#37474f',
	    900: '#263238',
	    A100: '#cfd8dc',
	    A200: '#b0bec5',
	    A400: '#78909c',
	    A700: '#455a64',
	    darkText: [50, 100, 200, 300, 'A100', 'A200', 'A300', 'A400']
	  },
	  white: {
	    50: '#fff',
	    100: '#fff',
	    200: '#fff',
	    300: '#fff',
	    400: '#fff',
	    500: '#fff',
	    600: '#fff',
	    700: '#fff',
	    800: '#fff',
	    900: '#fff',
	    A100: '#fff',
	    A200: '#fff',
	    A400: '#fff',
	    A700: '#fff',
	    darkText: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'A100', 'A200', 'A300', 'A400']
	  },
	  black: {
	    50: '#000',
	    100: '#000',
	    200: '#000',
	    300: '#000',
	    400: '#000',
	    500: '#000',
	    600: '#000',
	    700: '#000',
	    800: '#000',
	    900: '#000',
	    A100: '#000',
	    A200: '#000',
	    A400: '#000',
	    A700: '#000',
	    darkText: []
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 106:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (hex, opacity) {
	  var r = '';
	  var g = '';
	  var b = '';
	  var match = hex.toString().match(/^#?(([0-9a-zA-Z]{3}){1,3})$/);

	  if (!match) {
	    throw new Error('Invalid color' + hex);
	  }

	  hex = match[1];

	  if (hex.length === 6) {
	    r = parseInt(hex.substring(0, 2), 16);
	    g = parseInt(hex.substring(2, 4), 16);
	    b = parseInt(hex.substring(4, 6), 16);
	  } else if (hex.length === 3) {
	    var rSubstring = hex.substring(0, 1);
	    var gSubstring = hex.substring(1, 2);
	    var bSubstring = hex.substring(2, 3);

	    r = parseInt(rSubstring + rSubstring, 16);
	    g = parseInt(gSubstring + gSubstring, 16);
	    b = parseInt(bSubstring + bSubstring, 16);
	  }

	  if (opacity) {
	    if (opacity > 1) {
	      opacity = opacity / 100;
	    }

	    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity + ')';
	  }

	  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
	};

	module.exports = exports['default'];

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = install;

	var _mdTheme = __webpack_require__(104);

	var _mdTheme2 = _interopRequireDefault(_mdTheme);

	var _mdInkRipple = __webpack_require__(103);

	var _mdInkRipple2 = _interopRequireDefault(_mdInkRipple);

	__webpack_require__(347);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function install(Vue) {
	  if (install.installed) {
	    console.warn('Vue Material is already installed.');

	    return;
	  }

	  install.installed = true;

	  Vue.use(_mdTheme2.default);
	  Vue.use(_mdInkRipple2.default);
	}

	/* Core Stylesheets */
	/* Code Components */
	module.exports = exports['default'];

/***/ },

/***/ 164:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    mdDisabled: Boolean
	  },
	  data: function data() {
	    return {
	      mounted: false,
	      rippleElement: null,
	      parentElement: null,
	      parentDimensions: {
	        width: null,
	        height: null,
	        top: null,
	        left: null
	      },
	      awaitingComplete: false,
	      hasCompleted: false,
	      fadeOut: false,
	      active: false
	    };
	  },
	  computed: {
	    classes: function classes() {
	      return {
	        'md-fadeout': this.fadeOut,
	        'md-active': this.active
	      };
	    },
	    styles: function styles() {
	      return {
	        width: this.parentDimensions.width,
	        height: this.parentDimensions.height,
	        top: this.parentDimensions.top,
	        left: this.parentDimensions.left
	      };
	    },
	    disabled: function disabled() {
	      return this.mdDisabled || !this.$material.inkRipple;
	    }
	  },
	  watch: {
	    disabled: function disabled(_disabled) {
	      if (!_disabled) {
	        this.init();
	      } else {
	        this.destroy();
	      }
	    }
	  },
	  methods: {
	    checkAvailablePositions: function checkAvailablePositions(element) {
	      var availablePositions = ['relative', 'absolute', 'fixed'];

	      return availablePositions.indexOf(getComputedStyle(element).position) > -1;
	    },
	    getClosestPositionedParent: function getClosestPositionedParent(element) {
	      var parent = element.parentNode;

	      if (!element || !parent || parent.tagName.toLowerCase() === 'body') {
	        return false;
	      }

	      if (this.checkAvailablePositions(element)) {
	        return element;
	      }

	      return this.getClosestPositionedParent(element.parentNode);
	    },
	    getParentSize: function getParentSize() {
	      var parent = this.parentElement;

	      return Math.round(Math.max(parent.offsetWidth, parent.offsetHeight)) + 'px';
	    },
	    getClickPosition: function getClickPosition(event) {
	      var rect = this.parentElement.getBoundingClientRect();
	      var top = event.pageY - rect.top - this.$refs.ripple.offsetHeight / 2 - document.body.scrollTop + 'px';
	      var left = event.pageX - rect.left - this.$refs.ripple.offsetWidth / 2 - document.body.scrollLeft + 'px';

	      return {
	        top: top,
	        left: left
	      };
	    },
	    setDimensions: function setDimensions() {
	      var size = this.getParentSize();

	      this.parentDimensions.width = size;
	      this.parentDimensions.height = size;
	    },
	    setPositions: function setPositions(event) {
	      var positions = this.getClickPosition(event);

	      this.parentDimensions.top = positions.top;
	      this.parentDimensions.left = positions.left;
	    },
	    clearState: function clearState() {
	      this.active = false;
	      this.fadeOut = false;
	      this.hasCompleted = false;
	      this.setDimensions();
	      window.clearTimeout(this.awaitingComplete);
	      document.body.removeEventListener('mouseup', this.endRipple);
	    },
	    startRipple: function startRipple(event) {
	      var _this = this;

	      window.requestAnimationFrame((function () {
	        _this.clearState();
	        _this.awaitingComplete = window.setTimeout((function () {
	          _this.hasCompleted = true;
	        }), 400);

	        document.body.addEventListener('mouseup', _this.endRipple);

	        _this.setPositions(event);

	        window.setTimeout((function () {
	          _this.active = true;
	        }));
	      }));
	    },
	    endRipple: function endRipple() {
	      var _this2 = this;

	      if (this.hasCompleted) {
	        this.fadeOut = true;
	      } else {
	        this.awaitingComplete = window.setTimeout((function () {
	          _this2.fadeOut = true;
	        }), 200);
	      }

	      document.body.removeEventListener('mouseup', this.endRipple);
	    },
	    registerMouseEvent: function registerMouseEvent() {
	      this.parentElement.addEventListener('mousedown', this.startRipple);
	    },
	    unregisterMouseEvent: function unregisterMouseEvent() {
	      if (this.parentElement) {
	        this.parentElement.removeEventListener('mousedown', this.startRipple);
	        document.body.removeEventListener('mouseup', this.endRipple);
	      }
	    },
	    init: function init() {
	      this.rippleElement = this.$el;
	      this.parentElement = this.getClosestPositionedParent(this.$el.parentNode);

	      if (!this.parentElement) {
	        this.$destroy();
	      } else {
	        this.rippleElement.parentNode.removeChild(this.rippleElement);
	        this.parentElement.appendChild(this.rippleElement);
	        this.registerMouseEvent();
	        this.setDimensions();
	      }
	    },
	    destroy: function destroy() {
	      if (this.rippleElement && this.rippleElement.parentNode) {
	        this.unregisterMouseEvent();
	        this.rippleElement.parentNode.removeChild(this.rippleElement);
	      }
	    }
	  },
	  mounted: function mounted() {
	    var _this3 = this;

	    window.setTimeout((function () {
	      if (!_this3.disabled) {
	        _this3.init();
	      } else {
	        _this3.destroy();
	      }

	      _this3.$nextTick((function () {
	        _this3.mounted = true;
	      }));
	    }), 100);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.destroy();
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 165:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    mdTag: String,
	    mdName: {
	      type: String,
	      default: 'default'
	    }
	  },
	  data: function data() {
	    return {
	      name: 'md-theme'
	    };
	  },
	  render: function render(_render) {
	    if (this.mdTag || this.$slots.default.length > 1) {
	      return _render(this.mdTag || 'div', {
	        staticClass: 'md-theme'
	      }, this.$slots.default);
	    }

	    return this.$slots.default[0];
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(189)();
	// imports


	// module
	exports.push([module.id, "/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n/*  Structure\n   ========================================================================== */\nhtml {\n  height: 100%;\n  box-sizing: border-box; }\n  html *,\n  html *:before,\n  html *:after {\n    box-sizing: inherit; }\n\nbody {\n  min-height: 100%;\n  margin: 0;\n  position: relative;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: rgba(0, 0, 0, 0.87);\n  font-family: Roboto, \"Noto Sans\", Noto, sans-serif; }\n\n[tabindex='-1']:focus {\n  outline: none; }\n\n/*  Fluid Media\n   ========================================================================== */\naudio,\nimg,\nsvg,\nobject,\nembed,\ncanvas,\nvideo,\niframe {\n  max-width: 100%;\n  font-style: italic;\n  vertical-align: middle; }\n  audio:not(.md-image),\n  img:not(.md-image),\n  svg:not(.md-image),\n  object:not(.md-image),\n  embed:not(.md-image),\n  canvas:not(.md-image),\n  video:not(.md-image),\n  iframe:not(.md-image) {\n    height: auto; }\n\n/*  Suppress the focus outline on links that cannot be accessed via keyboard.\n    This prevents an unwanted focus outline from appearing around elements\n    that might still respond to pointer events.\n   ========================================================================== */\n[tabindex=\"-1\"]:focus {\n  outline: none !important; }\n\n.md-scrollbar::-webkit-scrollbar,\n.md-scrollbar ::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.12);\n  transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  background-color: rgba(0, 0, 0, 0.05); }\n  .md-scrollbar::-webkit-scrollbar:hover,\n  .md-scrollbar ::-webkit-scrollbar:hover {\n    box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.054), inset 0 -1px 0 rgba(0, 0, 0, 0.038);\n    background-color: rgba(0, 0, 0, 0.087); }\n\n.md-scrollbar::-webkit-scrollbar-button,\n.md-scrollbar ::-webkit-scrollbar-button {\n  display: none; }\n\n.md-scrollbar::-webkit-scrollbar-corner,\n.md-scrollbar ::-webkit-scrollbar-corner {\n  background-color: transparent; }\n\n.md-scrollbar::-webkit-scrollbar-thumb,\n.md-scrollbar ::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.26);\n  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.054), inset 0 -1px 0 rgba(0, 0, 0, 0.087);\n  transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1); }\n\n/*  Text and Titles\n   ========================================================================== */\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: .02em;\n  line-height: 17px; }\n\n.md-body-1, body {\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: .01em;\n  line-height: 20px; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: .01em;\n  line-height: 24px; }\n\n.md-subheading {\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: .01em;\n  line-height: 24px; }\n\n.md-title {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: .005em;\n  line-height: 26px; }\n\n.md-headline {\n  font-size: 24px;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 32px; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 40px; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 48px; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400;\n  letter-spacing: -.005em;\n  line-height: 58px; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300;\n  letter-spacing: -.01em;\n  line-height: 112px; }\n\n/*  Links & Buttons\n   ========================================================================== */\na:not(.md-button):not(.md-bottom-bar-item) {\n  text-decoration: none; }\n  a:not(.md-button):not(.md-bottom-bar-item):hover {\n    text-decoration: underline; }\n\nbutton:focus {\n  outline: none; }\n", ""]);

	// exports


/***/ },

/***/ 189:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 203:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(203)

	/* script */
	__vue_exports__ = __webpack_require__(164)

	/* template */
	var __vue_template__ = __webpack_require__(313)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some((function (key) { return key !== "default" && key !== "__esModule" }))) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/groman00/workspace/vue-material/src/core/components/mdInkRipple/mdInkRipple.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-53583505", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-53583505", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] mdInkRipple.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(165)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some((function (key) { return key !== "default" && key !== "__esModule" }))) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/groman00/workspace/vue-material/src/core/components/mdTheme/mdTheme.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-dc7523aa", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-dc7523aa", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] mdTheme.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.mounted || !_vm.disabled) ? _c('div', {
	    staticClass: "md-ink-ripple"
	  }, [_c('div', {
	    ref: "ripple",
	    staticClass: "md-ripple",
	    class: _vm.classes,
	    style: (_vm.styles)
	  })]) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-53583505", module.exports)
	  }
	}

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize((function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		})),
		getHeadElement = memoize((function () {
			return document.head || document.getElementsByTagName("head")[0];
		})),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(188);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(346)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./core.scss", (function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./core.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			}));
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose((function() { update(); }));
	}

/***/ }

/******/ })
}));
;