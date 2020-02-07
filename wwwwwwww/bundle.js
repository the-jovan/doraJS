(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/dora/dora.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/doraStyle.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/doraStyle.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\r\n.dora__activator {\r\n  padding: 16px;\r\n  color: #fefefe;\r\n  background-color: rgba(102, 122, 138, 1);\r\n}\r\n\r\n.dora__data {\r\n  background-color: rgba(102, 122, 138, .5);\r\n  overflow: auto;\r\n}\r\n\r\n.dora__data__ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n.dora__data__li {\r\n  text-indent: 16px;\r\n  padding: 8px;\r\n  color: #fefefe; \r\n  border-bottom: 1px solid rgba(102, 122, 138, 1);\r\n}\r\n\r\n.dora__data__list {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.dora__data__link {\r\n  display: block; \r\n  padding: 8px 0; \r\n  text-decoration: none; \r\n  font-weight: 500;\r\n}\r\n.dora__data__link_active{ \r\n  background-color: rgba(102, 122, 138, 0.8);\r\n}\r\n\r\n.dora__data__element__selected {\r\n  background-color: rgba(102, 122, 138, 0.8);\r\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/index.js!./node_modules/css-loader/dist/cjs.js!./src/css/doraStyle.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist!./node_modules/css-loader/dist/cjs.js!./src/css/doraStyle.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./doraStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/doraStyle.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/js/dora/components/render-component.js":
/*!****************************************************!*\
  !*** ./src/js/dora/components/render-component.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A module that renders component (activator and data list)
 * @module renderComponent
 * 
 */
function renderComponent() {
  this.activator = createActivator(this.options.title)
  this.data = createDataContainer()
  this.dataList = createDataList(this.options.data)
  this.data.appendChild(this.dataList)

  this.mountingPoint.appendChild(this.activator)
  this.mountingPoint.appendChild(this.data)  
}

/**
 * Function that creates activator component (does not render it!)
 * @param {string} title automatically taken from valid options object 
 */
const createActivator = title => {
  const activator = document.createElement('div')
  activator.className = 'dora__activator'
  activator.appendChild(document.createTextNode(title))
  return activator;
}

const createDataContainer = () => {
  const data = document.createElement('div')
  data.className = 'dora__data'
  data.style.display = 'none'
  return data
}

/**
 * Function that creates data list component (does not render it!) and list elements
 * @param {array} data automatically taken from valid options object 
 */
const createDataList = data => {
  const dataList = document.createElement('ul')
  dataList.className = 'dora__data__ul'
  
  let content = ''
  if (data.length > 0) {
    data.forEach(e => content += `<li class="dora__data__li">${e}</li>`)
  } else {
    content = ''
  }
  dataList.innerHTML = content
  
  return dataList
}

/* harmony default export */ __webpack_exports__["default"] = (renderComponent);

/***/ }),

/***/ "./src/js/dora/dora.js":
/*!*****************************!*\
  !*** ./src/js/dora/dora.js ***!
  \*****************************/
/*! exports provided: Dora */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dora", function() { return Dora; });
/* harmony import */ var _validation_validate_options_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation/validate-options.js */ "./src/js/dora/validation/validate-options.js");
/* harmony import */ var _components_render_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/render-component.js */ "./src/js/dora/components/render-component.js");
/* harmony import */ var _events_select_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/select-element.js */ "./src/js/dora/events/select-element.js");
/* harmony import */ var _events_display_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/display-data.js */ "./src/js/dora/events/display-data.js");
/* harmony import */ var _events_keyboard_nav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/keyboard-nav.js */ "./src/js/dora/events/keyboard-nav.js");
/* harmony import */ var _functions_find_selected_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/find-selected.js */ "./src/js/dora/functions/find-selected.js");
__webpack_require__(/*! style-loader!css-loader!./../../css/doraStyle.css */ "./node_modules/style-loader/dist/index.js!./node_modules/css-loader/dist/cjs.js!./src/css/doraStyle.css")








Dora.prototype.renderComponent = _components_render_component_js__WEBPACK_IMPORTED_MODULE_1__["default"]
Dora.prototype.selectElement = _events_select_element_js__WEBPACK_IMPORTED_MODULE_2__["default"]
Dora.prototype.displayData = _events_display_data_js__WEBPACK_IMPORTED_MODULE_3__["displayData"]
Dora.prototype.keyboardNavigation = _events_keyboard_nav_js__WEBPACK_IMPORTED_MODULE_4__["default"]
Dora.prototype.findSelected = _functions_find_selected_js__WEBPACK_IMPORTED_MODULE_5__["default"]

/**
 * Creates new custom select bar
 * @param {string} mountingPoint id or element where component is going to be mounted
 * @param {object} options optional properties
 * @property {title} title string
 * @property {data} array array of strings
 * @property {limit} number number
 * 
 * @example
 * new Dora("#someId", {title: 'String title', data:['array', 'of'. 'strings'], limit: 1})
 */
function Dora(mountingPoint, options) {
  if (mountingPoint === null && mountingPoint === undefined) throw ("No mounting point set.")
  if (mountingPoint.nodeType === Node.ELEMENT_NODE) {
    this.mountingPoint = mountingPoint
  } else if (typeof mountingPoint === 'string' && mountingPoint.startsWith('#')) {
    this.mountingPoint = document.querySelector(mountingPoint)
  } else {
    throw ('Not a valid dom selected.')
  }

  this.options = Object(_validation_validate_options_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options)
  this.showData = false
  //render main component
  this.renderComponent()
  //do something when list element is selected
  this.selectElement()
  //show-hide on click
  this.displayData()

  if (!this.findSelected()) {
    Array.from(this.dataList.children)[0].classList.add('dora__data__element__selected')
  }

  this.keyboardNavigation()
}




/***/ }),

/***/ "./src/js/dora/events/display-data.js":
/*!********************************************!*\
  !*** ./src/js/dora/events/display-data.js ***!
  \********************************************/
/*! exports provided: displayData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayData", function() { return displayData; });
function displayData() {
  window.addEventListener('click', event => {
    if (event.target !== this.activator
      && event.target !== this.dataList) {
        this.data.style.display = 'none'
        this.showData = false
      }
  })

  this.activator.addEventListener('click', event => {
    if (!this.showData) {
      this.data.style.display = 'block'
      this.showData = true

      let dataLi = Array.from(this.dataList.children)
      let limit = dataLi[0].offsetHeight * this.options.limit
      this.data.style.maxHeight = `${limit}`
    } 
    
    else if (this.showData) {
      this.data.style.display = 'none'
      this.showData = false
    }
  })
}



/***/ }),

/***/ "./src/js/dora/events/keyboard-nav.js":
/*!********************************************!*\
  !*** ./src/js/dora/events/keyboard-nav.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function keyboardNavigation() {
  window.addEventListener('keydown', event => {
    if (this.showData) {
      let ind = this.findSelected()
      let dataLi = Array.from(this.dataList.children)
      
      switch(event.keyCode) {

        case 40: //arrow down
          event.preventDefault()
          if (ind !== dataLi.length - 1) {
            dataLi[ind].classList.remove('dora__data__element__selected')
            dataLi[ind+1].classList.add('dora__data__element__selected')
            dataLi[ind+1].scrollIntoView({block: 'nearest'})
          }
        break
        case 38:
          event.preventDefault()
          if (dataLi[ind] !== dataLi[0]) {
            dataLi[ind].classList.remove('dora__data__element__selected')
            dataLi[ind-1].classList.add('dora__data__element__selected')
            dataLi[ind-1].scrollIntoView({block: 'nearest'})
          }
        break

        case 13:
          this.activator.innerHTML = dataLi[ind].innerHTML
          this.data.style.display = 'none'
          this.showData = false
        break

        case 27:
          this.data.style.display = 'none'
          this.showData = false
      }
    }
  })
}

/* harmony default export */ __webpack_exports__["default"] = (keyboardNavigation);

/***/ }),

/***/ "./src/js/dora/events/select-element.js":
/*!**********************************************!*\
  !*** ./src/js/dora/events/select-element.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function selectElement () {
  let dataLi = Array.from(this.dataList.children)
  dataLi.forEach(item => {
    item.addEventListener('mouseover', () => {
      dataLi[this.findSelected()].classList.remove('dora__data__element__selected')
      item.classList.add('dora__data__element__selected')
    })

    item.addEventListener('mouseup', () => {
      this.activator.innerHTML = item.innerHTML
      this.data.style.display = 'none'
      this.showData = false
    })
  })
}

/* harmony default export */ __webpack_exports__["default"] = (selectElement);

/***/ }),

/***/ "./src/js/dora/functions/find-selected.js":
/*!************************************************!*\
  !*** ./src/js/dora/functions/find-selected.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @module findSelected
 * @function findSelected that takes in an array of elements (dataList's children), loop through it and finds selected.
 * @property {title} title string
 */
function findSelected() {
  let dataLi = Array.from(this.dataList.children)
  for (let i = 0; i < dataLi.length; i++) {
    if (dataLi[i].classList.contains('dora__data__element__selected')) {
      return i
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (findSelected);

/***/ }),

/***/ "./src/js/dora/validation/validate-options.js":
/*!****************************************************!*\
  !*** ./src/js/dora/validation/validate-options.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DEFAULTS = {
  title: 'Select',
  data: [],
  limit: 6
}
/**
 * A module that validates object's properties
 * @module validateOptions
 * @param {object} options mergest default properties with optional, if they are not entered
 * @property {title} title string
 * @property {data} array array of strings
 * @property {limit} number number
 */
const validateOptions = options => {
  const validOptions = {...DEFAULTS}
  if (typeof options.title === 'string') validOptions.title = options.title
  if (Array.isArray(options.data)) validOptions.data = options.data
  if (typeof options.limit === 'number') validOptions.limit = options.limit
  return validOptions
}

/* harmony default export */ __webpack_exports__["default"] = (validateOptions);

/***/ })

/******/ })));
//# sourceMappingURL=bundle.js.map