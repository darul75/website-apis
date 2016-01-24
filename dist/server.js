module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// NODE
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _http = __webpack_require__(7);
	
	var _http2 = _interopRequireDefault(_http);
	
	var _fs = __webpack_require__(3);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	var _path = __webpack_require__(4);
	
	var _path2 = _interopRequireDefault(_path);
	
	// EXPRESS
	
	var _express = __webpack_require__(5);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _serveFavicon = __webpack_require__(6);
	
	var _serveFavicon2 = _interopRequireDefault(_serveFavicon);
	
	// EXTERNALS
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(9);
	
	var _reactRouter2 = _interopRequireDefault(_reactRouter);
	
	var _appRoutes = __webpack_require__(10);
	
	var _appRoutes2 = _interopRequireDefault(_appRoutes);
	
	var html = _fs2['default'].readFileSync('./dist/index-prod.html', { encoding: 'utf8' });
	
	var app = (0, _express2['default'])();
	app.use((0, _serveFavicon2['default'])(_path2['default'].join(__dirname, '../app/images/favicon.ico')));
	
	app.set('port', process.env.PORT || 3000);
	app.use(_express2['default']['static']('dist'));
	
	//
	// Register API middleware
	// -----------------------------------------------------------------------------
	__webpack_require__(54)(app);
	
	app.get('*', function (req, res, next) {
	  var markup = '';
	
	  try {
	    _reactRouter2['default'].run(_appRoutes2['default'], req.path, function (Root, state) {
	      markup += _react2['default'].renderToString(_react2['default'].createElement(Root));
	      markup = html.replace('CONTENT', markup);
	      res.contentType = 'text/html; charset=utf8';
	      var notFound = _lodash2['default'].find(state.routes, { isNotFound: true });
	      if (notFound !== undefined) {
	        res.status(404);
	      }
	      res.send(markup);
	    });
	  } catch (e) {
	    return next(e);
	  }
	});
	
	_http2['default'].createServer(app).listen(app.get('port'), function () {
	  console.log('Express server listening on port ' + app.get('port'));
	});
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "server.js" + ": " + err.message); } }); } } })(); }
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("lodash");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("fs");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("express");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("serve-favicon");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("http");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react-router");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	/*eslint-disable no-unused-vars*/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	/*eslint-enable no-unused-vars*/
	
	var _reactRouter = __webpack_require__(9);
	
	var _componentsAppApp = __webpack_require__(16);
	
	var _componentsAppApp2 = _interopRequireDefault(_componentsAppApp);
	
	var _componentsMentionsMentions = __webpack_require__(11);
	
	var _componentsMentionsMentions2 = _interopRequireDefault(_componentsMentionsMentions);
	
	var _componentsHomeSectionHomeSection = __webpack_require__(36);
	
	var _componentsHomeSectionHomeSection2 = _interopRequireDefault(_componentsHomeSectionHomeSection);
	
	var _componentsNotFoundSectionNotFoundSection = __webpack_require__(53);
	
	var _componentsNotFoundSectionNotFoundSection2 = _interopRequireDefault(_componentsNotFoundSectionNotFoundSection);
	
	exports['default'] = _react2['default'].createElement(
	  _reactRouter.Route,
	  { name: 'app', path: '/', handler: _componentsAppApp2['default'] },
	  _react2['default'].createElement(_reactRouter.Route, { name: 'mentions', path: '/mentions', handler: _componentsMentionsMentions2['default'] }),
	  _react2['default'].createElement(_reactRouter.DefaultRoute, { handler: _componentsHomeSectionHomeSection2['default'] }),
	  _react2['default'].createElement(_reactRouter.NotFoundRoute, { handler: _componentsNotFoundSectionNotFoundSection2['default'] })
	);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	if (process.env.BROWSER) {
	  __webpack_require__(12);
	}
	
	var Mentions = (function (_React$Component) {
	  function Mentions() {
	    _classCallCheck(this, Mentions);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Mentions, _React$Component);
	
	  _createClass(Mentions, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { id: 'mentions' },
	        _react2['default'].createElement(
	          'h2',
	          null,
	          'Mentions légales'
	        ),
	        _react2['default'].createElement('p', { dangerouslySetInnerHTML: { __html: 'Conformément aux dispositions des articles 6-III de la loi n°2004-575 du 21 juin 2004 pour la Confiance dans l\'Economie Numérique, Julien Valéry vous informe des mentions légales suivantes :' } }),
	        _react2['default'].createElement(
	          'h3',
	          null,
	          'Editeur du site web'
	        ),
	        _react2['default'].createElement(
	          'p',
	          null,
	          'Le site web Apis Lazuli Consulting appartient à Julien Valéry, domicilié à :'
	        ),
	        _react2['default'].createElement(
	          'p',
	          null,
	          '131 Bld de Charonne 75011 Paris France'
	        ),
	        _react2['default'].createElement('h4', { dangerouslySetInnerHTML: { __html: 'Immatriculation sous le statut d\'auto-entrepreneur' } }),
	        _react2['default'].createElement(
	          'p',
	          null,
	          'Numéro de SIRET : 809 647 753 00015'
	        ),
	        _react2['default'].createElement(
	          'p',
	          null,
	          'Code APE : 6201Z Programmation informatique'
	        ),
	        _react2['default'].createElement(
	          'h3',
	          null,
	          'Propriété intellectuelle'
	        ),
	        _react2['default'].createElement(
	          'p',
	          null,
	          'Le contenu (textes, logo, illustrations, images) dont le site web Apis Lazuli Consulting est composé, est la propriété exclusive de Julien Valéry.'
	        ),
	        _react2['default'].createElement('p', { dangerouslySetInnerHTML: { __html: 'Le logiciel, l\'architecture, la structure technique et les codes sources (HTML, Javascript, CSS), ayant permis la création du site Apis Lazuli Consulting, sont la propriété exclusive de Julien Valéry.' } }),
	        _react2['default'].createElement(
	          'h4',
	          null,
	          'Hébergeur du site web'
	        ),
	        _react2['default'].createElement('p', { dangerouslySetInnerHTML: { __html: 'https://www.heroku.com/' } })
	      );
	    }
	  }]);
	
	  return Mentions;
	})(_react2['default'].Component);
	
	exports['default'] = Mentions;
	;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Mentions.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./_Mentions.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./_Mentions.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	exports.push([module.id, "#mentions {\n  margin: 150px;\n}\n\n", ""]);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	// 
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
			for(var i = 0; i < modules.length; i++) {
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
/* 15 */
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
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
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
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
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
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(9);
	
	var _HeaderHeader = __webpack_require__(19);
	
	var _HeaderHeader2 = _interopRequireDefault(_HeaderHeader);
	
	var _FooterFooter = __webpack_require__(29);
	
	var _FooterFooter2 = _interopRequireDefault(_FooterFooter);
	
	if (process.env.BROWSER) {
	  __webpack_require__(17);
	  __webpack_require__(32);
	  __webpack_require__(34);
	  __webpack_require__(35);
	}
	
	var App = (function (_React$Component) {
	  function App() {
	    _classCallCheck(this, App);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(App, _React$Component);
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_HeaderHeader2['default'], null),
	        _react2['default'].createElement(
	          'div',
	          { className: 'main-content' },
	          _react2['default'].createElement(_reactRouter.RouteHandler, null)
	        ),
	        _react2['default'].createElement(_FooterFooter2['default'], null)
	      );
	    }
	  }]);
	
	  return App;
	})(_react2['default'].Component);
	
	exports['default'] = App;
	;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./_App.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./_App.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	exports.push([module.id, "body {\r\n\tmargin: 0;\r\n  font-family: \"Caecilia-Light\", 'Helvetica Neue', Arial, Helvetica, sans-serif;  \r\n}\r\n\r\n* {\r\n  text-rendering: optimizeLegibility;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1 {\r\n  width: 360px;\r\n  font-size: 1.8rem;\r\n  font-family: \"Bitter\";\r\n  padding-top: 120px;\r\n  color: #173676;\r\n  line-height: 2.5rem;\r\n  margin-left: -42px;\r\n  font-weight: bold;\r\n}\r\n\r\np {\r\n  text-align: justify;\r\n  font-size: 1rem;\r\n  font-weight: 200;\r\n  line-height: 1.4rem;\r\n  margin-right: 40px;\r\n  letter-spacing: 0.1em;  \r\n}\r\n\r\nsection {  \r\n  position: relative;\r\n  width: 100% !important;\r\n  min-width: 1000px;\r\n  margin: 0;\r\n  padding: 0;  \r\n  display: block;\r\n  height:0;\r\n}\r\n\r\n#footer {\r\n  width: 100%;\r\n  bottom: 0;  \r\n  z-index: 10000; \r\n  text-align: center;\r\n  margin: auto;\r\n  font-size: 12px;\r\n  border-top: 1px solid #eee;\r\n  padding: 8px 0px;    \r\n}\r\n\r\n#footer a {\r\n  color: #524747;\r\n  text-decoration: none;\r\n}\r\n", ""]);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(9);
	
	var _storesAppStore = __webpack_require__(20);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var logo = undefined;
	
	logo = __webpack_require__(26);
	
	if (process.env.BROWSER) {
	  __webpack_require__(27);
	}
	
	function getDataState() {
	  return {
	    json: _storesAppStore2['default'].getState().json
	  };
	}
	
	var Header = (function (_React$Component) {
	  function Header() {
	    _classCallCheck(this, Header);
	
	    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).call(this);
	    this.state = getDataState();
	  }
	
	  _inherits(Header, _React$Component);
	
	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      var menusNodes = this.state.json.menus.map(function (menu, index) {
	        var keyChap = 'menu' + index;
	        var path = '/' + menu.path;
	        return _react2['default'].createElement(
	          'li',
	          { key: keyChap },
	          _react2['default'].createElement(
	            'a',
	            { href: path },
	            menu.text
	          )
	        );
	      });
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'header_menu' },
	        _react2['default'].createElement(
	          'header',
	          { className: 'menu-nav ' },
	          _react2['default'].createElement(
	            'ul',
	            { id: 'menu-menu-principal', className: 'menu' },
	            _react2['default'].createElement(
	              'li',
	              null,
	              _react2['default'].createElement(
	                'a',
	                { href: '/' },
	                _react2['default'].createElement('img', { src: logo, height: '80' })
	              )
	            ),
	            menusNodes
	          )
	        )
	      );
	    }
	  }]);
	
	  return Header;
	})(_react2['default'].Component);
	
	exports['default'] = Header;
	;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _alt = __webpack_require__(21);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var _objectAssign = __webpack_require__(23);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _actionsAppActions = __webpack_require__(24);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	// import fetch from 'whatwg-fetch';
	
	var appStore = _alt2['default'].createStore((function () {
	  function AppStore() {
	    _classCallCheck(this, AppStore);
	
	    this.bindActions(_actionsAppActions2['default']);
	    this.dataByRestApi = {};
	    this.data = {};
	    // data
	    this.json = __webpack_require__(25);
	  }
	
	  _createClass(AppStore, [{
	    key: 'update',
	    value: function update(id, updates) {
	      if (this.data[id] && updates) {
	        this.data[id] = (0, _objectAssign2['default'])(this.data[id], updates);
	      }
	    }
	  }, {
	    key: 'updateAll',
	    value: function updateAll(updates) {
	      for (var id in this.data) {
	        this.update(id, updates);
	      }
	    }
	  }, {
	    key: 'onCreate',
	    value: function onCreate(text) {
	      text = text.trim();
	      if (text === '') {
	        return false;
	      }
	      // hand waving of course.
	      var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	      this.data[id] = {
	        id: id,
	        complete: false,
	        text: text
	      };
	    }
	  }, {
	    key: 'onFetch',
	    value: function onFetch() {
	      var _this = this;
	
	      this.dataByRestApi = { data: 'hello' };
	      fetch('https://api.github.com/users/github').then(function (response) {
	        return response.json();
	      }).then(function (json) {
	        _this.dataByRestApi = { data: json };
	        _this.emitChange();
	      });
	    }
	  }, {
	    key: 'onUpdateText',
	    value: function onUpdateText(x) {
	      var id = x.id;
	      var text = x.text;
	
	      text = text ? text.trim() : '';
	      if (text === '') {
	        return false;
	      }
	      this.update(id, { text: text });
	    }
	  }, {
	    key: 'onToggleComplete',
	    value: function onToggleComplete(id) {
	      var complete = !this.data[id].complete;
	      this.update(id, { complete: complete });
	    }
	  }, {
	    key: 'onToggleCompleteAll',
	    value: function onToggleCompleteAll() {}
	  }, {
	    key: 'onDestroy',
	    value: function onDestroy(id) {
	      delete this.data[id];
	    }
	  }, {
	    key: 'onDestroyCompleted',
	    value: function onDestroyCompleted() {
	      for (var id in this.data) {
	        if (this.data[id].complete) {
	          this.onDestroy(id);
	        }
	      }
	    }
	  }], [{
	    key: 'areAllComplete',
	    value: function areAllComplete() {
	      var _getState = this.getState();
	
	      var data = _getState.data;
	
	      for (var id in data) {
	        if (!data[id].complete) {
	          return false;
	        }
	      }
	      return true;
	    }
	  }]);
	
	  return AppStore;
	})());
	
	module.exports = appStore;
	
	/*var complete = !todoStore.areAllComplete();
	this.updateAll({ complete });*/

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppStore.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _alt = __webpack_require__(22);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	exports['default'] = new _alt2['default']();
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "alt.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("alt");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("object-assign");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var alt = __webpack_require__(21);
	
	var AppActions = function AppActions() {
	  _classCallCheck(this, AppActions);
	
	  this.generateActions('create', 'destroy', 'toggleComplete', 'fetch');
	};
	
	module.exports = alt.createActions(AppActions);
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppActions.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"menus": [
			{
				"path": "#accueil",
				"text": "Accueil"
			},
			{
				"path": "#apports",
				"text": "Apports"
			},
			{
				"path": "#expertise",
				"text": "Domaines d'expertise"
			},
			{
				"path": "#interventions",
				"text": "Interventions"
			},
			{
				"path": "#contact",
				"text": "Contact"
			}
		],
		"home": {
			"logo": "public/images/logo-blanc.svg",
			"logoHeight": "200px",
			"logoClassnames": "logo-home animated bounce"
		},
		"sections": [
			{
				"immersive": {
					"img": "./images/img-1600-1200_5.jpg",
					"w": "1600",
					"h": "1200",
					"ratio": "1"
				},
				"chapter": {
					"path": "home",
					"title": "",
					"citation": {
						"author": "Galilée",
						"text": "« Il est impossible d'enseigner quelquechose à quelqu'un, vous ne pouvez l'aider qu'à le découvrir en lui »",
						"class": "home"
					}
				}
			},
			{
				"chapter": {
					"path": "accueil",
					"title": "Leviers d’optimisation des ressources humaines",
					"paragraphsCol1": [
						"L’innovation modifie la relation au travail, chacun devient acteur et moteur. C’est l’ère du partage et de la transparence. Diriger, c’est donner du sens pour s’assurer de l’engagement des collaborateurs. Le management responsable, c’est jouer collectif et s’appuyer sur l’homme en lui même."
					],
					"paragraphsCol2": [
						{
							"type": "html",
							"text": "<p class='title'>Notre savoir-faire consiste à accompagner les RH dans la conduite du changement selon une approche systémique :</p>"
						},
						{
							"type": "expertise",
							"text": "Réflexion sur les organigrammes"
						},
						{
							"type": "expertise",
							"text": "Coaching individuel"
						},
						{
							"type": "expertise",
							"text": "Formation Managériale (high et middle)"
						}
					]
				}
			},
			{
				"immersive": {
					"img": "./images/img-1600-1200_3.jpg",
					"w": "1600",
					"h": "1200",
					"ratio": "1"
				},
				"chapter": {
					"path": "transition-immersive-1",
					"title": "",
					"citation": {
						"author": "John Fitzgerald Kennedy",
						"text": "« Certaines personnes voient les choses comme elles sont et se demandent : Pourquoi ? Moi, je vois les choses comme elles pourraient être et je me dis : Pourquoi pas ? »"
					}
				}
			},
			{
				"chapter": {
					"path": "apports",
					"title": "Apports",
					"paragraphsCol1": [
						{
							"type": "html-paragraph",
							"text": "Notre capital expertise, acquis depuis de nombreuses années, facilite la compréhension de nos clients pour recruter, former et manager <b>AUTREMENT</b>."
						},
						"Nous optimisons leurs demandes par l’apport de méthodes innovantes.",
						"Ils maîtrisent les enjeux de nos interventions, notre implication est totale.",
						{
							"type": "html",
							"text": "<p class='title'>Nous agissons dans le respect de la personne en assurant:</p>"
						}
					],
					"paragraphsCol2": [
						{
							"type": "expertise",
							"text": "Une montée en puissance des compétences existantes au sein de l’entreprise pour favoriser l’adhésion et l’investissement au projet entrepreneurial (coaching de management)"
						},
						{
							"type": "expertise",
							"text": "Une formation managériale optimisant la gestion d’équipe en vue de la prise de décision au niveau de chaque responsable"
						},
						{
							"type": "html",
							"text": "<p class='title'>Nos interventions ont une double visée:</p>"
						},
						{
							"type": "expertise",
							"text": "Développement personnel pour le postulant"
						},
						{
							"type": "expertise",
							"text": "Amélioration de la communication opérationnelle de l’entreprise"
						}
					]
				}
			},
			{
				"immersive": {
					"img": "./images/img-1600-1200_2.jpg",
					"w": "1600",
					"h": "1200",
					"ratio": "1"
				},
				"chapter": {
					"path": "transition-immersive-2",
					"title": "",
					"citation": {
						"author": "Johann Wolfgang GOETHE",
						"text": "« On peut bâtir quelque chose de beau avec les pierres qui entravent le chemin »"
					}
				}
			},
			{
				"chapter": {
					"path": "expertise",
					"title": "Domaines d'expertises",
					"paragraphsCol1": [
						{
							"type": "expertise",
							"text": "Accompagnement à la restructuration d’une Entreprise par une approche participative globale."
						},
						{
							"type": "expertise",
							"text": "Formation des managers à la conduite du changement induit par l’innovation."
						}
					],
					"paragraphsCol2": [
						{
							"type": "expertise",
							"text": "Mise en œuvre d’une politique RH en synergie avec les besoins stratégiques."
						},
						{
							"type": "expertise",
							"text": "Harmonisation des engagements au sein des équipes managériales."
						}
					]
				}
			},
			{
				"immersive": {
					"img": "./images/img-1600-1200_1.jpg",
					"w": "1600",
					"h": "1200",
					"ratio": "1"
				},
				"chapter": {
					"path": "transition-immersive-3",
					"title": "",
					"citation": {
						"author": "Benjamin Franklin",
						"text": "« Le bon jugement vient de l’expérience et l’expérience vient du mauvais jugement »"
					}
				}
			},
			{
				"chapter": {
					"path": "interventions",
					"title": "Interventions",
					"paragraphsCol1": [
						{
							"type": "html",
							"text": "<p class='title'>Diagnostic et développement de l'entreprise:</p>"
						},
						{
							"type": "expertise",
							"text": "Coaching individuel et collectif"
						},
						{
							"type": "expertise",
							"text": "Formation des managers"
						}
					],
					"paragraphsCol2": [
						{
							"type": "html",
							"text": "<p class='title'>Mise en place de dispositifs R.H:</p>"
						},
						{
							"type": "expertise",
							"text": "Organigramme"
						},
						{
							"type": "expertise",
							"text": "Description de poste"
						},
						{
							"type": "expertise",
							"text": "Entretien Annuel d’Evaluation"
						},
						{
							"type": "expertise",
							"text": "Tableaux de bord des E.A.E"
						},
						{
							"type": "expertise",
							"text": "Suivi de la maitrise des compétences"
						}
					]
				}
			},
			{
				"immersive": {
					"img": "./images/img-1600-1200_4.jpg",
					"w": "1600",
					"h": "1200",
					"ratio": "1"
				},
				"chapter": {
					"path": "transition-immersive-4",
					"title": "",
					"citation": {
						"author": "Peter Drucker",
						"text": "« Ceux, qui résistent au changement, finissent par accepter, mais dans la douleur, qu’ils étaient dans l’erreur »"
					}
				}
			},
			{
				"chapter": {
					"path": "contact",
					"noanimate": true,
					"title": "",
					"paragraphsCol1": [
						{
							"type": "html",
							"text": "<iframe src=\"https://docs.google.com/forms/d/1QwgfScJMQLjmt1TkyAkbyoX-MLyu_Bu3G1NVNvN3VJs/viewform?embedded=true\" width=\"500\" height=\"780\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Chargement en cours...</iframe>"
						}
					],
					"paragraphsCol2": [
						{
							"type": "html",
							"text": "<h1>Contact</h1>"
						},
						{
							"type": "vcard",
							"vcard": {
								"id": "Société",
								"org": "Apis Lazuli Consulting",
								"email": "mailto:contact@apis-lazuli-consulting.com",
								"address": {
									"street": "14 rue Beffroy",
									"locality": "Neuilly sur Seine",
									"postal": "92200"
								}
							}
						},
						{
							"type": "vcard-person",
							"vcard": {
								"id": "Société",
								"name": "Pierre Coeroli",
								"title": "Coaching de management",
								"phone": "06 43 08 94 99"
							}
						}
					]
				}
			},
			{
				"chapter": {
					"path": "story",
					"noanimate": true,
					"title": "",
					"story": {
						"img": "./images/footer.png",
						"items": [
							{
								"type": "html",
								"text": "<p class='footer'><b>Apis</b> est le taureau puissant et vigoureux, symbole de vie et de renaissance, de la force et de l'énergie créative. Il se rapproche du Dieu Ré comme l'atteste le disque solaire entre ses cornes.</p>"
							},
							{
								"type": "html",
								"text": "<p class='footer'><b>Lapis Lazuli</b> symbole de gaieté et d'harmonie.</p>"
							},
							{
								"type": "html",
								"text": "<p class='footer'><b>Apis Lazuli</b>, clin d'oeil de Apis avec Lapis-Lazuli: pierre sacrée égyptienne, structure le développement de la vision clairvoyante en la raccordant à la vie quotidienne.</p>"
							}
						]
					},
					"styleHeight": 600
				}
			}
		]
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3YXQcaL.svg"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./_Header.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./_Header.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	exports.push([module.id, "ul.menu li {\r\n  display: inline-block;\r\n  padding: 8px 0px;\r\n  margin: 0px 5px;  \r\n}\r\n\r\ndiv.header_menu {\r\n  position: fixed;  \r\n  height: 90px;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n  background-color: #FFF;\r\n  z-index: 2;\r\n}\r\n\r\ndiv.header_menu .title {\r\n  font-family:\"Open Sans\";\r\n  position: absolute;  \r\n  font-size: 2rem;    \r\n  margin: 10px 18px;\r\n  text-transform: uppercase;\r\n  width: 100%;    \r\n  bottom: 0;  \r\n}\r\n\r\nheader.menu-nav.toggled {\r\n  display: block;\r\n}\r\n\r\nheader.menu-nav:after {\r\n  position: absolute;\r\n  top: -10px;\r\n  right: 6px;\r\n  border-bottom: 10px solid rgba( 255, 255, 255, .9 );\r\n  border-left: 8px solid transparent;\r\n  border-right: 8px solid transparent;\r\n  content: '';\r\n}\r\n\r\nheader.menu-nav ul {  \r\n  margin: auto;\r\n  font-family: 'Bitter';\r\n  list-style: none;\r\n  margin: 0px 10px;\r\n}\r\n\r\nheader.menu-nav ul li:nth-child(n+2) {\r\n  padding-left: 10px;\r\n  height: 7px;\r\n  bottom: 16px;\r\n  position: relative;\r\n}\r\n\r\nheader.menu-nav ul li:nth-child(2) {\r\n  border-left: 2px solid #808285;\r\n  padding-left: 10px;\r\n  height: 7px;\r\n  bottom: 16px;\r\n  position: relative;\r\n}\r\n\r\nheader.menu-nav > ul > li:nth-child(n+1) > a {\r\n  font-size: 1.2rem;\r\n  font-weight: 300;\r\n  text-transform: uppercase;\r\n  color: #58585A;\r\n  bottom: 5px;\r\n  position: relative;\r\n  text-decoration: none;\r\n}\r\n\r\nheader.menu-nav a:visited {\r\n  color: #808285;\r\n}\r\n\r\nheader.menu-nav a:hover {\r\n  color: #808285;\r\n}\r\n", ""]);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(9);
	
	if (process.env.BROWSER) {
	  __webpack_require__(30);
	}
	
	var Footer = (function (_React$Component) {
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(Footer, _React$Component);
	
	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { id: 'footer' },
	        _react2['default'].createElement(
	          'footer',
	          null,
	          _react2['default'].createElement(
	            _reactRouter.Link,
	            { to: 'mentions' },
	            'Mentions légales'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Footer;
	})(_react2['default'].Component);
	
	exports['default'] = Footer;
	;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Footer.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./_Footer.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./_Footer.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	exports.push([module.id, "p.footer {\n  margin: 50px 5px;\n  text-align: center;\n}", ""]);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./grid.css", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./grid.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	exports.push([module.id, "@charset \"UTF-8\";\n/*-----------------------------------*\\\n\n  $TOAST-GRID\n\n  An insane grid.\n  You'd be mad to use it.\n\n  Usage\n  =====\n\n  Assuming default values:\n\n  <div class=\"grid\">\n    <div class=\"grid__col grid__col--1-of-2\">\n      A half-width column.\n    </div>\n    <div class=\"grid__col grid__col--1-of-4 grid__col--pull-1-of-4\">\n      A quarter, pulled left by its own width. You get this, right?\n    </div>\n  </div>\n\n\n  Customisation\n  =============\n\n  $grid-namespace and $grid-column-namespace\n  adjusts the class names for the grid. With\n  default values, grid wrappers have a class\n  of '.grid' and columns '.grid__col'.\n\n  $col-groups(n) adjusts column divisions.\n  For example, $col-groups(12) will produce\n  a 12-column grid. $col-groups(3,6,8)\n  will produce a 3-, 6-, and 8-column grid.\n\n  $gutter-width is—you guessed it—the gutter\n  width. Accepts any unit.\n\n  That's it. Have fun.\n\n\\*-----------------------------------*/\n.grid {\n  list-style: none;\n  margin-left: -20px; }\n  .grid > .grid__col--2-of-2, .grid > .grid__col--3-of-3, .grid > .grid__col--4-of-4, .grid > .grid__col--5-of-5, .grid > .grid__col--6-of-6, .grid > .grid__col--8-of-8, .grid > .grid__col--12-of-12 {\n    width: 100%; }\n  .grid > .grid__col--1-of-2, .grid > .grid__col--2-of-4, .grid > .grid__col--3-of-6, .grid > .grid__col--4-of-8, .grid > .grid__col--6-of-12 {\n    width: 50%; }\n  /*.grid > .grid__col--1-of-3, .grid > .grid__col--2-of-6, .grid > .grid__col--4-of-12 {\n    width: 33.33333%; }*/\n  .grid > .grid__col--1-of-3, .grid > .grid__col--2-of-6, .grid > .grid__col--4-of-12 {\n    width: 33%; }  \n  .grid > .grid__col--2-of-3, .grid > .grid__col--4-of-6, .grid > .grid__col--8-of-12 {\n    width: 66.66667%; }\n  .grid > .grid__col--1-of-4, .grid > .grid__col--2-of-8, .grid > .grid__col--3-of-12 {\n    width: 25%; }\n  .grid > .grid__col--3-of-4, .grid > .grid__col--6-of-8, .grid > .grid__col--9-of-12 {\n    width: 75%; }\n  .grid > .grid__col--push-2-of-2, .grid > .grid__col--push-3-of-3, .grid > .grid__col--push-4-of-4, .grid > .grid__col--push-5-of-5, .grid > .grid__col--push-6-of-6, .grid > .grid__col--push-8-of-8, .grid > .grid__col--push-12-of-12 {\n    margin-left: 100%; }\n  .grid > .grid__col--push-1-of-2, .grid > .grid__col--push-2-of-4, .grid > .grid__col--push-3-of-6, .grid > .grid__col--push-4-of-8, .grid > .grid__col--push-6-of-12 {\n    margin-left: 50%; }\n  .grid > .grid__col--push-1-of-3, .grid > .grid__col--push-2-of-6, .grid > .grid__col--push-4-of-12 {\n    margin-left: 33.33333%; }\n  .grid > .grid__col--push-2-of-3, .grid > .grid__col--push-4-of-6, .grid > .grid__col--push-8-of-12 {\n    margin-left: 66.66667%; }\n  .grid > .grid__col--push-1-of-4, .grid > .grid__col--push-2-of-8, .grid > .grid__col--push-3-of-12 {\n    margin-left: 25%; }\n  .grid > .grid__col--push-3-of-4, .grid > .grid__col--push-6-of-8, .grid > .grid__col--push-9-of-12 {\n    margin-left: 75%; }\n  .grid > .grid__col--pull-2-of-2, .grid > .grid__col--pull-3-of-3, .grid > .grid__col--pull-4-of-4, .grid > .grid__col--pull-5-of-5, .grid > .grid__col--pull-6-of-6, .grid > .grid__col--pull-8-of-8, .grid > .grid__col--pull-12-of-12 {\n    margin-left: -100%; }\n  .grid > .grid__col--pull-1-of-2, .grid > .grid__col--pull-2-of-4, .grid > .grid__col--pull-3-of-6, .grid > .grid__col--pull-4-of-8, .grid > .grid__col--pull-6-of-12 {\n    margin-left: -50%; }\n  .grid > .grid__col--pull-1-of-3, .grid > .grid__col--pull-2-of-6, .grid > .grid__col--pull-4-of-12 {\n    margin-left: -33.33333%; }\n  .grid > .grid__col--pull-2-of-3, .grid > .grid__col--pull-4-of-6, .grid > .grid__col--pull-8-of-12 {\n    margin-left: -66.66667%; }\n  .grid > .grid__col--pull-1-of-4, .grid > .grid__col--pull-2-of-8, .grid > .grid__col--pull-3-of-12 {\n    margin-left: -25%; }\n  .grid > .grid__col--pull-3-of-4, .grid > .grid__col--pull-6-of-8, .grid > .grid__col--pull-9-of-12 {\n    margin-left: -75%; }\n  .grid > .grid__col--1-of-5 {\n    width: 20%; }\n  .grid > .grid__col--push-1-of-5 {\n    margin-left: 20%; }\n  .grid > .grid__col--pull-1-of-5 {\n    margin-left: -20%; }\n  .grid > .grid__col--2-of-5 {\n    width: 40%; }\n  .grid > .grid__col--push-2-of-5 {\n    margin-left: 40%; }\n  .grid > .grid__col--pull-2-of-5 {\n    margin-left: -40%; }\n  .grid > .grid__col--3-of-5 {\n    width: 60%; }\n  .grid > .grid__col--push-3-of-5 {\n    margin-left: 60%; }\n  .grid > .grid__col--pull-3-of-5 {\n    margin-left: -60%; }\n  .grid > .grid__col--4-of-5 {\n    width: 80%; }\n  .grid > .grid__col--push-4-of-5 {\n    margin-left: 80%; }\n  .grid > .grid__col--pull-4-of-5 {\n    margin-left: -80%; }\n  .grid > .grid__col--1-of-6 {\n    width: 16.66667%; }\n  .grid > .grid__col--push-1-of-6 {\n    margin-left: 16.66667%; }\n  .grid > .grid__col--pull-1-of-6 {\n    margin-left: -16.66667%; }\n  .grid > .grid__col--5-of-6 {\n    width: 83.33333%; }\n  .grid > .grid__col--push-5-of-6 {\n    margin-left: 83.33333%; }\n  .grid > .grid__col--pull-5-of-6 {\n    margin-left: -83.33333%; }\n  .grid > .grid__col--1-of-8 {\n    width: 12.5%; }\n  .grid > .grid__col--push-1-of-8 {\n    margin-left: 12.5%; }\n  .grid > .grid__col--pull-1-of-8 {\n    margin-left: -12.5%; }\n  .grid > .grid__col--3-of-8 {\n    width: 37.5%; }\n  .grid > .grid__col--push-3-of-8 {\n    margin-left: 37.5%; }\n  .grid > .grid__col--pull-3-of-8 {\n    margin-left: -37.5%; }\n  .grid > .grid__col--5-of-8 {\n    width: 62.5%; }\n  .grid > .grid__col--push-5-of-8 {\n    margin-left: 62.5%; }\n  .grid > .grid__col--pull-5-of-8 {\n    margin-left: -62.5%; }\n  .grid > .grid__col--7-of-8 {\n    width: 87.5%; }\n  .grid > .grid__col--push-7-of-8 {\n    margin-left: 87.5%; }\n  .grid > .grid__col--pull-7-of-8 {\n    margin-left: -87.5%; }\n  .grid > .grid__col--1-of-12 {\n    width: 8.33333%; }\n  .grid > .grid__col--push-1-of-12 {\n    margin-left: 8.33333%; }\n  .grid > .grid__col--pull-1-of-12 {\n    margin-left: -8.33333%; }\n  .grid > .grid__col--2-of-12 {\n    width: 16.66667%; }\n  .grid > .grid__col--push-2-of-12 {\n    margin-left: 16.66667%; }\n  .grid > .grid__col--pull-2-of-12 {\n    margin-left: -16.66667%; }\n  .grid > .grid__col--5-of-12 {\n    width: 41.66667%; }\n  .grid > .grid__col--push-5-of-12 {\n    margin-left: 41.66667%; }\n  .grid > .grid__col--pull-5-of-12 {\n    margin-left: -41.66667%; }\n  .grid > .grid__col--7-of-12 {\n    width: 58.33333%; }\n  .grid > .grid__col--push-7-of-12 {\n    margin-left: 58.33333%; }\n  .grid > .grid__col--pull-7-of-12 {\n    margin-left: -58.33333%; }\n  .grid > .grid__col--10-of-12 {\n    width: 83.33333%; }\n  .grid > .grid__col--push-10-of-12 {\n    margin-left: 83.33333%; }\n  .grid > .grid__col--pull-10-of-12 {\n    margin-left: -83.33333%; }\n  .grid > .grid__col--11-of-12 {\n    width: 91.66667%; }\n  .grid > .grid__col--push-11-of-12 {\n    margin-left: 91.66667%; }\n  .grid > .grid__col--pull-11-of-12 {\n    margin-left: -91.66667%; }\n  .grid .grid__col {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    display: inline-block;\n    margin-right: -.25em;\n    min-height: 1px;\n    padding-left: 20px;\n    vertical-align: top; }\n    @media (max-width: 700px) {\n      .grid .grid__col {\n        display: block;\n        margin-left: 0;\n        margin-right: 0;\n        width: auto; } }\n    @media (max-width: 700px) and (min-width: 480px) {\n      .grid .grid__col[class*=\"grid__col--m-\"] {\n        display: inline-block;\n        margin-right: -.24em; }\n      .grid .grid__col.grid__col--m-1-of-2, .grid .grid__col.grid__col--m-2-of-4 {\n        width: 50%; }\n      .grid .grid__col.grid__col--m-1-of-3 {\n        width: 33.33333%; }\n      .grid .grid__col.grid__col--m-2-of-3 {\n        width: 66.66667%; }\n      .grid .grid__col.grid__col--m-1-of-4 {\n        width: 25%; }\n      .grid .grid__col.grid__col--m-3-of-4 {\n        width: 75%; } }\n    @media (max-width: 480px) {\n      .grid .grid__col[class*=\"grid__col--s-\"] {\n        display: inline-block;\n        margin-right: -.24em; }\n      .grid .grid__col.grid__col--s-1-of-2, .grid .grid__col.grid__col--s-2-of-4 {\n        width: 50%; }\n      .grid .grid__col.grid__col--s-1-of-3 {\n        width: 33.33333%; }\n      .grid .grid__col.grid__col--s-2-of-3 {\n        width: 66.66667%; }\n      .grid .grid__col.grid__col--s-1-of-4 {\n        width: 25%; }\n      .grid .grid__col.grid__col--s-3-of-4 {\n        width: 75%; } }\n  .grid .grid__col--centered {\n    display: block;\n    margin-left: auto;\n    margin-right: auto; }\n  .grid .grid__col--d-first {\n    float: left; }\n  .grid .grid__col--d-last {\n    float: right; }\n  .grid.grid--no-gutter {\n    margin-left: 0;\n    width: 100%; }\n    .grid.grid--no-gutter .grid__col {\n      padding-left: 0; }\n    .grid.grid--no-gutter .grid__col--span-all {\n      margin-left: 0;\n      width: 100%; }\n  .grid .grid__col--ab {\n    vertical-align: bottom; }\n  .grid .grid__col--am {\n    vertical-align: middle; }\n\n/*# sourceMappingURL=grid.css.map */\n", ""]);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "favicon.ico"

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	/*eslint-disable */
	
	'use strict';
	
	(function (i, s, o, g, r, a, m) {
	            i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
	                        (i[r].q = i[r].q || []).push(arguments);
	            }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
	})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
	
	ga('create', 'UA-45895157-20', 'auto');
	ga('send', 'pageview');
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "google.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _storesAppStore = __webpack_require__(20);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _actionsAppActions = __webpack_require__(24);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var _Sections = __webpack_require__(37);
	
	var _Sections2 = _interopRequireDefault(_Sections);
	
	function getDataState() {
	  return {
	    json: _storesAppStore2['default'].getState().json
	  };
	}
	
	var HomeSection = (function (_React$Component) {
	  function HomeSection() {
	    _classCallCheck(this, HomeSection);
	
	    _get(Object.getPrototypeOf(HomeSection.prototype), 'constructor', this).call(this);
	    this.state = getDataState();
	  }
	
	  _inherits(HomeSection, _React$Component);
	
	  _createClass(HomeSection, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storesAppStore2['default'].listen(this.onChange.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storesAppStore2['default'].unlisten(this.onChange.bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(_Sections2['default'], null);
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick() {
	      _actionsAppActions2['default'].fetch();
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange() {
	      this.setState(getDataState());
	    }
	  }]);
	
	  return HomeSection;
	})(_react2['default'].Component);
	
	exports['default'] = HomeSection;
	;
	
	HomeSection.prototype.displayName = 'HomeSection';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSection.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _storesAppStore = __webpack_require__(20);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _actionsAppActions = __webpack_require__(24);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var _SectionLogo = __webpack_require__(38);
	
	var _SectionLogo2 = _interopRequireDefault(_SectionLogo);
	
	var _SectionParagraph = __webpack_require__(40);
	
	var _SectionParagraph2 = _interopRequireDefault(_SectionParagraph);
	
	var _SectionParagraphButton = __webpack_require__(41);
	
	var _SectionParagraphButton2 = _interopRequireDefault(_SectionParagraphButton);
	
	var _SectionParagraphCitation = __webpack_require__(42);
	
	var _SectionParagraphCitation2 = _interopRequireDefault(_SectionParagraphCitation);
	
	var _SectionStory = __webpack_require__(43);
	
	var _SectionStory2 = _interopRequireDefault(_SectionStory);
	
	if (process.env.BROWSER) {
	  __webpack_require__(45);
	}
	
	function getDataState() {
	  return {
	    json: _storesAppStore2['default'].getState().json,
	    height: 0
	  };
	}
	
	var Sections = (function (_React$Component) {
	  function Sections() {
	    _classCallCheck(this, Sections);
	
	    _get(Object.getPrototypeOf(Sections.prototype), 'constructor', this).call(this);
	    this.state = getDataState();
	  }
	
	  _inherits(Sections, _React$Component);
	
	  _createClass(Sections, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (document) {
	        this.setState({ height: screen.height });
	        //$("#app").fadeIn();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: '_lightButtonOver',
	    value: function _lightButtonOver(index, pathId) {
	      var domElt = $('#' + pathId + ' .story');
	      var domEltCitation = $('#' + pathId + ' .story .citation');
	      var domEltButtons = $('.fa.fa-lightbulb-o');
	      var domEltLogo = $('.logo-white');
	
	      domEltLogo.hide();
	      domEltCitation.hide();
	      domElt.addClass('fadeOutLeft');
	      domElt.removeClass('fadeInLeft');
	      domEltButtons.addClass('hover');
	    }
	  }, {
	    key: '_lightButtonOut',
	    value: function _lightButtonOut(index, pathId) {
	      var domElt = $('#' + pathId + ' .story');
	      var domEltCitation = $('#' + pathId + ' .story .citation');
	      var domEltButtons = $('.fa.fa-adjust');
	      var domEltLogo = $('.logo-white');
	      domEltLogo.show();
	      domEltCitation.show();
	      domElt.addClass('fadeInLeft');
	      domElt.removeClass('fadeOutLeft');
	      domEltButtons.removeClass('hover');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var self = this;
	      var sectionHeight = {
	        height: this.state.height ? this.state.height : 0
	      };
	
	      var chaptersNodes = this.state.json.sections.map(function (section, index) {
	
	        if (section.chapter) {
	          var homeCss = index === 0 ? '' : '',
	              logoMarkup = index === 0 ? _react2['default'].createElement(_SectionLogo2['default'], null) : '',
	              height = section.immersive ? sectionHeight : { height: 750 },
	              lightButton = '',
	              parallaxImage = '',
	              chapterClass = section.immersive ? '' : 'chapter-white animated',
	              paraCss = section.chapter.paragraphsCol1 ? 'grid paragraph' : '',
	              titleMarkup = section.chapter.title ? _react2['default'].createElement(
	            'h1',
	            null,
	            section.chapter.title
	          ) : '',
	              story = section.chapter.story ? _react2['default'].createElement(_SectionStory2['default'], { story: section.chapter.story }) : '',
	              paraMarkup1 = section.chapter.paragraphsCol1 ? _react2['default'].createElement(_SectionParagraph2['default'], { paragraphs: section.chapter.paragraphsCol1 }) : '',
	              paraMarkup2 = section.chapter.paragraphsCol1 ? _react2['default'].createElement(_SectionParagraph2['default'], { paragraphs: section.chapter.paragraphsCol2 }) : '';
	
	          if (section.immersive) {
	            var imgSection = __webpack_require__(44)("" + section.immersive.img),
	                parallaxStyle = {
	              background: 'url(' + imgSection + ') 50% 0 no-repeat fixed',
	              margin: 0,
	              backgroundSize: 'cover',
	              height: '100%',
	              position: 'absolute',
	              width: '100%',
	              top: 0,
	              left: 0,
	              right: 0
	            };
	
	            parallaxImage = _react2['default'].createElement('div', { 'data-fit': '500', style: parallaxStyle, className: '' });
	            lightButton = _react2['default'].createElement(_SectionParagraphButton2['default'], { onLightButtonOver: self._lightButtonOver.bind(this, index, section.chapter.path), onLightButtonOut: self._lightButtonOut.bind(this, index, section.chapter.path) });
	          }
	
	          return _react2['default'].createElement(
	            'section',
	            { key: section.chapter.path, className: homeCss, id: section.chapter.path, style: height },
	            lightButton,
	            _react2['default'].createElement(
	              'div',
	              { className: 'story animated', style: height },
	              _react2['default'].createElement(
	                'div',
	                { className: 'layout' },
	                _react2['default'].createElement(
	                  'div',
	                  { className: 'layout-content' },
	                  _react2['default'].createElement(
	                    'div',
	                    { className: 'chapter' },
	                    _react2['default'].createElement(
	                      'div',
	                      { className: chapterClass },
	                      _react2['default'].createElement(
	                        'div',
	                        { className: 'chapter-content' },
	                        titleMarkup,
	                        logoMarkup,
	                        story,
	                        _react2['default'].createElement(_SectionParagraphCitation2['default'], { citation: section.chapter.citation }),
	                        _react2['default'].createElement(
	                          'div',
	                          { className: paraCss },
	                          _react2['default'].createElement(
	                            'div',
	                            { className: 'grid__col grid__col--1-of-2' },
	                            paraMarkup1
	                          ),
	                          _react2['default'].createElement(
	                            'div',
	                            { className: 'grid__col grid__col--1-of-2' },
	                            paraMarkup2
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            parallaxImage
	          );
	        }
	
	        return _react2['default'].DOM.div();
	      });
	
	      return _react2['default'].DOM.div({}, chaptersNodes);
	    }
	  }]);
	
	  return Sections;
	})(_react2['default'].Component);
	
	exports['default'] = Sections;
	;
	
	Sections.prototype.displayName = 'Sections';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Sections.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var SectionLogo = (function (_React$Component) {
	  function SectionLogo() {
	    _classCallCheck(this, SectionLogo);
	
	    _get(Object.getPrototypeOf(SectionLogo.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(SectionLogo, _React$Component);
	
	  _createClass(SectionLogo, [{
	    key: 'render',
	    value: function render() {
	      var logo = __webpack_require__(39);
	      return _react2['default'].createElement(
	        'div',
	        { className: 'logo-white' },
	        _react2['default'].createElement(
	          'a',
	          { href: '#accueil' },
	          _react2['default'].createElement('img', { src: logo, height: '200px', className: 'logo-home animated bounce' })
	        )
	      );
	    }
	  }]);
	
	  return SectionLogo;
	})(_react2['default'].Component);
	
	exports['default'] = SectionLogo;
	;
	
	SectionLogo.prototype.displayName = 'SectionLogo';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SectionLogo.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "MVzQTnI.svg"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _storesAppStore = __webpack_require__(20);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _actionsAppActions = __webpack_require__(24);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var _Sections = __webpack_require__(37);
	
	var _Sections2 = _interopRequireDefault(_Sections);
	
	function getDataState() {
	  return {
	    json: _storesAppStore2['default'].getState().json
	  };
	}
	
	var SectionParagraph = (function (_React$Component) {
	  function SectionParagraph() {
	    _classCallCheck(this, SectionParagraph);
	
	    _get(Object.getPrototypeOf(SectionParagraph.prototype), 'constructor', this).call(this);
	    this.state = getDataState();
	  }
	
	  _inherits(SectionParagraph, _React$Component);
	
	  _createClass(SectionParagraph, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var paragraphNodes = '';
	      var self = this;
	      if (this.props.paragraphs) {
	        paragraphNodes = this.props.paragraphs.map(function (paragraph, index) {
	          var paragraphMarkup = '';
	          var paragraphKey = 'para' + index;
	          var paragraphStyle = index === 0 ? { marginTop: 0 } : {};
	          paragraphStyle = index === self.props.paragraphs.length - 1 ? { marginBottom: 0 } : paragraphStyle;
	          if (self.props.right) {
	            paragraphStyle['marginRight'] = 20;
	          }
	
	          if (typeof paragraph === 'object') {
	            switch (paragraph.type) {
	              case 'vcard':
	                paragraphMarkup = _react2['default'].createElement(
	                  'div',
	                  { key: paragraphKey, id: paragraph.vcard.id, className: 'vcard' },
	                  _react2['default'].createElement(
	                    'div',
	                    { className: 'org' },
	                    _react2['default'].createElement(
	                      'b',
	                      null,
	                      paragraph.vcard.org
	                    )
	                  ),
	                  _react2['default'].createElement(
	                    'a',
	                    { className: 'email', href: paragraph.vcard.email },
	                    'contact@apis-lazuli-consulting.fr'
	                  ),
	                  _react2['default'].createElement(
	                    'div',
	                    { className: 'adr' },
	                    _react2['default'].createElement(
	                      'div',
	                      { className: 'street-address' },
	                      paragraph.vcard.address.street
	                    ),
	                    _react2['default'].createElement(
	                      'span',
	                      { className: 'locality' },
	                      paragraph.vcard.address.locality
	                    ),
	                    ', ',
	                    _react2['default'].createElement(
	                      'span',
	                      { className: 'postal-code' },
	                      paragraph.vcard.address.postal
	                    )
	                  )
	                );
	                break;
	              case 'vcard-person':
	                paragraphMarkup = _react2['default'].createElement(
	                  'div',
	                  { key: paragraphKey, id: paragraph.vcard.id, className: 'vcard' },
	                  _react2['default'].createElement(
	                    'div',
	                    { className: 'name' },
	                    _react2['default'].createElement(
	                      'b',
	                      null,
	                      paragraph.vcard.name
	                    )
	                  ),
	                  _react2['default'].createElement(
	                    'div',
	                    { className: 'title' },
	                    paragraph.vcard.title
	                  ),
	                  _react2['default'].createElement(
	                    'div',
	                    { className: 'tel' },
	                    paragraph.vcard.phone
	                  )
	                );
	                break;
	              case 'html':
	                paragraphMarkup = _react2['default'].createElement('div', { key: paragraphKey, dangerouslySetInnerHTML: { __html: paragraph.text } });
	                break;
	              case 'html-paragraph':
	                paragraphMarkup = _react2['default'].createElement('p', { key: paragraphKey, dangerouslySetInnerHTML: { __html: paragraph.text } });
	                break;
	              default:
	                paragraphMarkup = _react2['default'].createElement(
	                  'div',
	                  { key: paragraphKey },
	                  _react2['default'].createElement('div', { className: 'rectangle color-2' }),
	                  _react2['default'].createElement(
	                    'p',
	                    { className: paragraph.type },
	                    paragraph.text
	                  )
	                );
	                break;
	            }
	          } else {
	            paragraphMarkup = _react2['default'].createElement('p', { style: paragraphStyle, key: paragraphKey, dangerouslySetInnerHTML: { __html: paragraph } });
	          }
	
	          return _react2['default'].DOM.div({ key: paragraphKey }, paragraphMarkup);
	        });
	      }
	
	      return _react2['default'].DOM.div({ className: 'chapter-paragraph' }, paragraphNodes);
	    }
	  }]);
	
	  return SectionParagraph;
	})(_react2['default'].Component);
	
	exports['default'] = SectionParagraph;
	;
	
	SectionParagraph.prototype.displayName = 'SectionParagraph';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SectionParagraph.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var SectionParagraphButton = (function (_React$Component) {
	  function SectionParagraphButton() {
	    _classCallCheck(this, SectionParagraphButton);
	
	    _get(Object.getPrototypeOf(SectionParagraphButton.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(SectionParagraphButton, _React$Component);
	
	  _createClass(SectionParagraphButton, [{
	    key: '_mouseOver',
	    value: function _mouseOver(evt) {
	      this.props.onLightButtonOver();
	      evt.preventDefault();
	    }
	  }, {
	    key: '_mouseOut',
	    value: function _mouseOut(evt) {
	      this.props.onLightButtonOut();
	      evt.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'fake-lamp', onMouseEnter: this._mouseOver.bind(this), onMouseLeave: this._mouseOut.bind(this) },
	        _react2['default'].createElement('i', { className: 'fa fa-lightbulb-o fa-3x fa-inverse animated bounce' })
	      );
	    }
	  }]);
	
	  return SectionParagraphButton;
	})(_react2['default'].Component);
	
	exports['default'] = SectionParagraphButton;
	;
	
	SectionParagraphButton.prototype.displayName = 'SectionParagraphButton';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SectionParagraphButton.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var SectionParagraphCitation = (function (_React$Component) {
	  function SectionParagraphCitation() {
	    _classCallCheck(this, SectionParagraphCitation);
	
	    _get(Object.getPrototypeOf(SectionParagraphCitation.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(SectionParagraphCitation, _React$Component);
	
	  _createClass(SectionParagraphCitation, [{
	    key: 'render',
	    value: function render() {
	      var citationMarkup = '';
	      if (this.props.citation) {
	        var citationAddClass = this.props.citation['class'] ? this.props.citation['class'] : '';
	        var citationClassname = 'citation ' + citationAddClass;
	        citationMarkup = _react2['default'].createElement(
	          'div',
	          { className: citationClassname },
	          _react2['default'].createElement(
	            'div',
	            { className: 'text' },
	            this.props.citation.text,
	            _react2['default'].createElement(
	              'div',
	              { className: 'author' },
	              this.props.citation.author
	            )
	          )
	        );
	      } else {
	        citationMarkup = _react2['default'].createElement('div', null);
	      }
	      return _react2['default'].DOM.div({}, citationMarkup);
	    }
	  }]);
	
	  return SectionParagraphCitation;
	})(_react2['default'].Component);
	
	exports['default'] = SectionParagraphCitation;
	;
	
	SectionParagraphCitation.prototype.displayName = 'SectionParagraphCitation';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SectionParagraphCitation.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var SectionStory = (function (_React$Component) {
	  function SectionStory() {
	    _classCallCheck(this, SectionStory);
	
	    _get(Object.getPrototypeOf(SectionStory.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(SectionStory, _React$Component);
	
	  _createClass(SectionStory, [{
	    key: 'render',
	    value: function render() {
	      var img = __webpack_require__(44)("" + this.props.story.img),
	          column1 = this.props.story.items[0].text,
	          column2 = this.props.story.items[1].text,
	          column3 = this.props.story.items[2].text;
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement('img', { src: img }),
	        _react2['default'].createElement(
	          'div',
	          { className: 'grid' },
	          _react2['default'].createElement('div', { className: 'grid__col grid__col--1-of-3', dangerouslySetInnerHTML: { __html: column1 } }),
	          _react2['default'].createElement('div', { className: 'grid__col grid__col--1-of-3', dangerouslySetInnerHTML: { __html: column2 } }),
	          _react2['default'].createElement('div', { className: 'grid__col grid__col--1-of-3', dangerouslySetInnerHTML: { __html: column3 } })
	        )
	      );
	    }
	  }]);
	
	  return SectionStory;
	})(_react2['default'].Component);
	
	exports['default'] = SectionStory;
	;
	
	SectionStory.prototype.displayName = 'SectionStory';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SectionStory.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./HomeSection": 36,
		"./HomeSection.jsx": 36,
		"./SectionLogo": 38,
		"./SectionLogo.jsx": 38,
		"./SectionParagraph": 40,
		"./SectionParagraph.jsx": 40,
		"./SectionParagraphButton": 41,
		"./SectionParagraphButton.jsx": 41,
		"./SectionParagraphCitation": 42,
		"./SectionParagraphCitation.jsx": 42,
		"./SectionStory": 43,
		"./SectionStory.jsx": 43,
		"./Sections": 37,
		"./Sections.jsx": 37,
		"./_Section.scss": 45,
		"./images/footer.png": 47,
		"./images/img-1600-1200_1.jpg": 48,
		"./images/img-1600-1200_2.jpg": 49,
		"./images/img-1600-1200_3.jpg": 50,
		"./images/img-1600-1200_4.jpg": 51,
		"./images/img-1600-1200_5.jpg": 52,
		"./images/logo-blanc.svg": 39
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 44;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./_Section.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./_Section.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	exports.push([module.id, "#app {\n  //display: none;\n}\n\n#contact h1 {\n  width: 100%;\n  padding-top: 50px;\n  left: 125px;\n  position: relative;\n}\n\np.title {\n  text-align: left;\n  color: #173676;\n  font-weight: bold;\n  font-size: 1rem;\n  word-spacing: 0px;  \n  letter-spacing: 0;  \n}\n\n#accueil p.expertise {\n  text-align: left;\n}\n\n#interventions p {\n  line-height: 1.8rem;\n}\n\nsection {  \n  position: relative;\n  width: 100% !important;\n  min-width: 1000px;\n  margin: 0;\n  padding: 0;  \n  display: block;\n  height:0;\n}\n\nsection div.story {    \n  position: relative;  \n  height:100%;  \n  z-index: 1;\n  width: 1000px;  \n  margin: auto;\n  background-color: rgba(26, 61, 132, 0.9);\n}\n\nsection div.no-bg {    \n  background: none;\n}\n\nsection .layout, section .layout-content {\n  height: inherit;\n}\n\nsection div.chapter {\n  position: relative;  \n  height: 100%;\n  opacity: 1.0;\n  margin: 0;\n  width: 1000px;\n}\n\nsection div.chapter-white {  \n  background-color: #FFF;\n  position: relative;\n  padding: 0 50px; \n  z-index: 3;  \n  height: inherit;\n}\n\n#contact div.chapter-white {    \n  height: 860px;  \n}\n\nsection#contact {\n  height: 900px !important;\n  padding-top: 100px;\n}\n\nsection div.chapter.home {\n  background-color: rgba(26, 61, 132, 0.7);\n}\n\nsection div.chapter-img {\n  width: 100%;\n  height: 250px;\n  margin-bottom: 20px;\n}\n\nsection.home .story{\n  background: none;\n}  \n\nsection#home .chapter-content{\n  padding-top: 100px;  \n}\n\nsection.home .chapter-white{\n  background: none;\n}\n\nsection .chapter-content {\n  width: 800px;\n  margin: auto;\n}\n\nsection#contact .chapter-content {\n  width: 100%;\n} \n\nsection .chapter-content .chapter-paragraph {\n  text-align: justify;\n}\n\n.citation {   \n  position: absolute;  \n  z-index: 1;\n  margin: auto;  \n  z-index: 1;  \n  margin: auto;  \n  font-size: 4rem;      \n  padding: 20px 30px;\n  font-size: 1.3rem;\n  line-height: 2rem;\n  color: #97D4C8;  \n  margin-top: 40%;  \n}\n\n.citation.home {  \n  position: relative;  \n  margin-top: 50%;\n}\n\n.citation .text {\n  font-size: 1.4rem;\n  text-align: left;\n  line-height: 2.3rem;\n  font-weight: 200;\n}  \n\n.citation .author {  \n  text-align: right;\n  margin-right: 100px;  \n  font-weight: 100;\n}\n.imageHolder::after {\n  border-left: 20px solid #FFF;\n}\n\n#story {\n  border-top: 1px solid #eee;\n  padding: 100px 0;\n}\n\n/* Logo\n * --------------------------------------- */\n\n.logo-white {\n  width: 375px;\n  overflow: auto;\n  position: relative;\n  margin: auto auto;\n  top: 100px;  \n  overflow: visible;  \n}\n\n.logo-home {\n  cursor: pointer;\n  position: absolute;\n  top: 20%;\n  left: 10%;\n}\n\n.rectangle {\n  width: 0;\n  height: 0;\n  border-radius: 6px;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-left: 7px solid #061B6A;\n  float: left;\n  top: 3px;\n  margin-right: 10px;\n  position: relative;\n  background: none;\n}\n\n#interventions .rectangle {\n  border-radius: 6px;  \n  top: 4px;  \n  width: 0px;\n  height: 0px;\n  border-top: 9px solid transparent;\n  border-bottom: 9px solid transparent;\n  border-left: 9px solid #061B6A;\n  background: none;\n}\n\n.color-1 { background-color: #0C2D8C; }\n.color-2 { \n  /*background-color: #061B6A; */\n}\n.color-3 { background-color: #0C2D8C; }\n.color-4 { background-color: #0F3FAA; }\n.color-5 { background-color: #0C2D8C; }\n\ndiv.grid.paragraph {\n  border-left: 2px solid red;\n  border-right: 2px solid red;\n}\n\n#interventions div.grid.paragraph, #contact div.grid.paragraph {\n  border: 0;\n}\n\n.fake-lamp {  \n  position: absolute;\n  top: 30%;\n  left: 50%;\n  cursor: pointer;\n  width: 60px;\n  height: 80px;        \n  z-index: 3;\n}\n\n#home .fake-lamp{  \n  top: 80%;  \n}\n\n.fa.fa-adjust.hover{\n  color: rgba(26, 61, 132, 0.9);\n}\n\n.vcard {\n  position: relative;\n  left: 100px;\n  line-height: 25px;\n}\n\n.vcard .org {\n  text-transform: UPPERCASE;\n}\n\n.vcard .name {\n  margin-top: 10px;\n}\n\n.hide {\n  display: none;\n}\n\n@media screen and (max-height:768px) {  \n  h1 {\n    padding-top: 70px;\n  }\n\n  div.header_menu {    \n    height: 50px;    \n  }\n\n  div.header_menu img {    \n    height: 45px;\n  }\n\n  div.menu-nav {\n    font-size: 1rem;\n  }  \n\n  #home .fake-lamp {\n    top: 90%;\n  }\n\n  .citation.home {      \n    margin-top: 40%;\n  }\n}\n  \n@media only screen and (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi) {\n  .logo-white img{\n    height: 160px;\n    margin-left: 33px;    \n  }\n  #home .fake-lamp {\n    top: 60%;\n  }\n}\n", ""]);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "23WYoUe.png"

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9yErGEb.jpg"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1v-11rg.jpg"

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "36bFgFL.jpg"

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2W9c9f8.jpg"

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2OimeFL.jpg"

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var NotFoundSection = (function (_React$Component) {
	  function NotFoundSection() {
	    _classCallCheck(this, NotFoundSection);
	
	    _get(Object.getPrototypeOf(NotFoundSection.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(NotFoundSection, _React$Component);
	
	  _createClass(NotFoundSection, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h1',
	          null,
	          'PAGE NOT FOUND'
	        )
	      );
	    }
	  }]);
	
	  return NotFoundSection;
	})(_react2['default'].Component);
	
	exports['default'] = NotFoundSection;
	
	NotFoundSection.prototype.displayName = 'NotFoundSection';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "NotFoundSection.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _nodeFetch = __webpack_require__(55);
	
	var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
	
	function query(server) {
	  server.get('/api/*', function (req, res, next) {
	    try {
	      res.setHeader('Content-Type', 'application/json');
	
	      // simple api fetch example, no own DB here so external call is made.
	
	      // https://api.github.com/users/github
	      (0, _nodeFetch2['default'])('https://api.github.com/users/github').then(function (response) {
	        return response.json();
	      }).then(function (json) {
	        res.status(200).send(json);
	      });
	    } catch (err) {
	      next(err);
	    }
	  });
	}
	
	exports['default'] = query;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "api.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("node-fetch");

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODQ4NDk3NmZhZjljMzk1MmEwMmMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmUtZmF2aWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy8uL2FwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTWVudGlvbnMvTWVudGlvbnMuanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL01lbnRpb25zL19NZW50aW9ucy5zY3NzPzExMjgiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTWVudGlvbnMvX01lbnRpb25zLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Nzcz80NzY2Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0b3Jlcy9BcHBTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWx0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFsdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdC1hc3NpZ25cIiIsIndlYnBhY2s6Ly8vLi9hcHAvYWN0aW9ucy9BcHBBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NoYXB0ZXJzLXYxLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2ltYWdlcy9sb2dvLWJsdWUuc3ZnIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyLnNjc3M/M2U5NSIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9fRm9vdGVyLnNjc3M/N2Q2NCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvX0Zvb3Rlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9ncmlkLmNzcz85MDYwIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9ncmlkLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2Zhdmljb24uaWNvIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9nb29nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb24uanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL1NlY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9TZWN0aW9uTG9nby5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vaW1hZ2VzL2xvZ28tYmxhbmMuc3ZnIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL1NlY3Rpb25QYXJhZ3JhcGguanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL1NlY3Rpb25QYXJhZ3JhcGhCdXR0b24uanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL1NlY3Rpb25QYXJhZ3JhcGhDaXRhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vU2VjdGlvblN0b3J5LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbiBeLiokIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19TZWN0aW9uLnNjc3M/Yjc5NiIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9fU2VjdGlvbi5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL2ltYWdlcy9mb290ZXIucG5nIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL2ltYWdlcy9pbWctMTYwMC0xMjAwXzEuanBnIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL2ltYWdlcy9pbWctMTYwMC0xMjAwXzIuanBnIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL2ltYWdlcy9pbWctMTYwMC0xMjAwXzMuanBnIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL2ltYWdlcy9pbWctMTYwMC0xMjAwXzQuanBnIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL2ltYWdlcy9pbWctMTYwMC0xMjAwXzUuanBnIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL05vdEZvdW5kU2VjdGlvbi9Ob3RGb3VuZFNlY3Rpb24uanN4Iiwid2VicGFjazovLy8uL3NlcnZlci9hcGkuanMiLCJ3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R0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDOzs7Ozs7OztBQ2I5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQzVUQSx1RDs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ2pCQTtBQUNBLHVDQUFzQyw0QkFBNEIsdUJBQXVCLHNCQUFzQixPQUFPLHlCQUF5QixzQkFBc0IscUJBQXFCLGFBQWEsY0FBYyxnQkFBZ0IsZUFBZSxvQkFBb0IscUJBQXFCLDZCQUE2QixpQkFBaUIsS0FBSyxnQ0FBZ0MsZ0NBQWdDLHlCQUF5Qix3QkFBd0IsNEJBQTRCLGdDQUFnQyxrQkFBa0Isb0JBQW9CLE9BQU8saUNBQWlDLHFCQUFxQixLQUFLLCtCQUErQix5QkFBeUIsaUJBQWlCLGlCQUFpQiwwREFBMEQseUNBQXlDLDBDQUEwQyxrQkFBa0IsS0FBSyw0QkFBNEIscUJBQXFCLDRCQUE0Qix1QkFBdUIsdUJBQXVCLEtBQUssOENBQThDLHlCQUF5QixrQkFBa0IsbUJBQW1CLHlCQUF5QixLQUFLLDRDQUE0QyxxQ0FBcUMseUJBQXlCLGtCQUFrQixtQkFBbUIseUJBQXlCLEtBQUssc0RBQXNELHdCQUF3Qix1QkFBdUIsZ0NBQWdDLHFCQUFxQixrQkFBa0IseUJBQXlCLDRCQUE0QixLQUFLLG1DQUFtQyxxQkFBcUIsS0FBSyxpQ0FBaUMscUJBQXFCLEtBQUssWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ0R0bUQsQ0FBTzs7Ozt3Q0FDSixDQUFjOztBQUVuQyxLQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQ3ZCLHNCQUFPLENBQUMsRUFBZ0IsQ0FBQyxDQUFDO0VBQzNCOztLQUVvQixNQUFNO0FBQ2QsWUFEUSxNQUFNLEdBQ1g7MkJBREssTUFBTTs7QUFFdkIsZ0NBRmlCLE1BQU0sNkNBRWY7SUFDVDs7YUFIa0IsTUFBTTs7Z0JBQU4sTUFBTTs7WUFLbkIsa0JBQUc7QUFDUCxjQUNFOztXQUFLLEVBQUUsRUFBQyxRQUFRO1NBQ2Q7OztXQUNFOzBCQWZELElBQUk7ZUFlRyxFQUFFLEVBQUMsVUFBVTs7WUFBd0I7VUFDcEM7UUFDTCxDQUNOO01BQ0g7OztVQWJrQixNQUFNO0lBQVMsbUJBQU0sU0FBUzs7c0JBQTlCLE1BQU07QUFlMUIsRUFBQzs7Ozs7Ozs7O0FDdEJGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNqQkE7QUFDQSxxQ0FBb0MscUJBQXFCLHVCQUF1QixHQUFHLFE7Ozs7OztBQ0RuRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDakJBO0FBQ0EsOENBQTZDLHc5QkFBdzlCLHFCQUFxQix1QkFBdUIsRUFBRSwwTUFBME0sa0JBQWtCLEVBQUUsaUpBQWlKLGlCQUFpQixFQUFFLDJGQUEyRix1QkFBdUIsRUFBRSwyRkFBMkYsaUJBQWlCLEVBQUUsMkZBQTJGLHVCQUF1QixFQUFFLHlGQUF5RixpQkFBaUIsRUFBRSx5RkFBeUYsaUJBQWlCLEVBQUUsNk9BQTZPLHdCQUF3QixFQUFFLDBLQUEwSyx1QkFBdUIsRUFBRSx3R0FBd0csNkJBQTZCLEVBQUUsd0dBQXdHLDZCQUE2QixFQUFFLHdHQUF3Ryx1QkFBdUIsRUFBRSx3R0FBd0csdUJBQXVCLEVBQUUsNk9BQTZPLHlCQUF5QixFQUFFLDBLQUEwSyx3QkFBd0IsRUFBRSx3R0FBd0csOEJBQThCLEVBQUUsd0dBQXdHLDhCQUE4QixFQUFFLHdHQUF3Ryx3QkFBd0IsRUFBRSx3R0FBd0csd0JBQXdCLEVBQUUsZ0NBQWdDLGlCQUFpQixFQUFFLHFDQUFxQyx1QkFBdUIsRUFBRSxxQ0FBcUMsd0JBQXdCLEVBQUUsZ0NBQWdDLGlCQUFpQixFQUFFLHFDQUFxQyx1QkFBdUIsRUFBRSxxQ0FBcUMsd0JBQXdCLEVBQUUsZ0NBQWdDLGlCQUFpQixFQUFFLHFDQUFxQyx1QkFBdUIsRUFBRSxxQ0FBcUMsd0JBQXdCLEVBQUUsZ0NBQWdDLGlCQUFpQixFQUFFLHFDQUFxQyx1QkFBdUIsRUFBRSxxQ0FBcUMsd0JBQXdCLEVBQUUsZ0NBQWdDLHVCQUF1QixFQUFFLHFDQUFxQyw2QkFBNkIsRUFBRSxxQ0FBcUMsOEJBQThCLEVBQUUsZ0NBQWdDLHVCQUF1QixFQUFFLHFDQUFxQyw2QkFBNkIsRUFBRSxxQ0FBcUMsOEJBQThCLEVBQUUsZ0NBQWdDLG1CQUFtQixFQUFFLHFDQUFxQyx5QkFBeUIsRUFBRSxxQ0FBcUMsMEJBQTBCLEVBQUUsZ0NBQWdDLG1CQUFtQixFQUFFLHFDQUFxQyx5QkFBeUIsRUFBRSxxQ0FBcUMsMEJBQTBCLEVBQUUsZ0NBQWdDLG1CQUFtQixFQUFFLHFDQUFxQyx5QkFBeUIsRUFBRSxxQ0FBcUMsMEJBQTBCLEVBQUUsZ0NBQWdDLG1CQUFtQixFQUFFLHFDQUFxQyx5QkFBeUIsRUFBRSxxQ0FBcUMsMEJBQTBCLEVBQUUsaUNBQWlDLHNCQUFzQixFQUFFLHNDQUFzQyw0QkFBNEIsRUFBRSxzQ0FBc0MsNkJBQTZCLEVBQUUsaUNBQWlDLHVCQUF1QixFQUFFLHNDQUFzQyw2QkFBNkIsRUFBRSxzQ0FBc0MsOEJBQThCLEVBQUUsaUNBQWlDLHVCQUF1QixFQUFFLHNDQUFzQyw2QkFBNkIsRUFBRSxzQ0FBc0MsOEJBQThCLEVBQUUsaUNBQWlDLHVCQUF1QixFQUFFLHNDQUFzQyw2QkFBNkIsRUFBRSxzQ0FBc0MsOEJBQThCLEVBQUUsa0NBQWtDLHVCQUF1QixFQUFFLHVDQUF1Qyw2QkFBNkIsRUFBRSx1Q0FBdUMsOEJBQThCLEVBQUUsa0NBQWtDLHVCQUF1QixFQUFFLHVDQUF1Qyw2QkFBNkIsRUFBRSx1Q0FBdUMsOEJBQThCLEVBQUUsc0JBQXNCLHFDQUFxQyxrQ0FBa0MsNkJBQTZCLDRCQUE0QiwyQkFBMkIsc0JBQXNCLHlCQUF5QiwwQkFBMEIsRUFBRSxpQ0FBaUMsMEJBQTBCLHlCQUF5Qix5QkFBeUIsMEJBQTBCLHNCQUFzQixFQUFFLEVBQUUsd0RBQXdELG9EQUFvRCxnQ0FBZ0MsK0JBQStCLEVBQUUsb0ZBQW9GLHFCQUFxQixFQUFFLDhDQUE4QywyQkFBMkIsRUFBRSw4Q0FBOEMsMkJBQTJCLEVBQUUsOENBQThDLHFCQUFxQixFQUFFLDhDQUE4QyxxQkFBcUIsRUFBRSxFQUFFLGlDQUFpQyxvREFBb0QsZ0NBQWdDLCtCQUErQixFQUFFLG9GQUFvRixxQkFBcUIsRUFBRSw4Q0FBOEMsMkJBQTJCLEVBQUUsOENBQThDLDJCQUEyQixFQUFFLDhDQUE4QyxxQkFBcUIsRUFBRSw4Q0FBOEMscUJBQXFCLEVBQUUsRUFBRSxnQ0FBZ0MscUJBQXFCLHdCQUF3Qix5QkFBeUIsRUFBRSwrQkFBK0Isa0JBQWtCLEVBQUUsOEJBQThCLG1CQUFtQixFQUFFLDJCQUEyQixxQkFBcUIsa0JBQWtCLEVBQUUsd0NBQXdDLHdCQUF3QixFQUFFLGtEQUFrRCx1QkFBdUIsb0JBQW9CLEVBQUUsMEJBQTBCLDZCQUE2QixFQUFFLDBCQUEwQiw2QkFBNkIsRUFBRSxrRDs7Ozs7O0FDRHozUix1RDs7Ozs7Ozs7Ozs7O0FDRUEsRUFBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLGNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFFLFlBQVU7QUFDL0QsMEJBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2NBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUM3RSxDQUFDLEdBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7RUFDOUUsRUFBRSxNQUFNLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyx5Q0FBeUMsRUFBQyxJQUFJLENBQUMsQ0FBQzs7QUFFNUUsR0FBRSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN2QyxHQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NSaEIsQ0FBTzs7OzsyQ0FHSixFQUF1Qjs7Ozs4Q0FDckIsRUFBMEI7Ozs7cUNBQzVCLEVBQVk7Ozs7QUFFakMsVUFBUyxZQUFZLEdBQUc7QUFDdEIsVUFBTztBQUNMLFNBQUksRUFBRSw0QkFBUyxRQUFRLEVBQUUsQ0FBQyxJQUFJO0lBQy9CLENBQUM7RUFDSDs7S0FFb0IsV0FBVztBQUNuQixZQURRLFdBQVcsR0FDaEI7MkJBREssV0FBVzs7QUFFNUIsZ0NBRmlCLFdBQVcsNkNBRXBCO0FBQ1IsU0FBSSxDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsQ0FBQztJQUM3Qjs7YUFKa0IsV0FBVzs7Z0JBQVgsV0FBVzs7WUFNYiw2QkFBRztBQUNsQixtQ0FBUyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztNQUMzQzs7O1lBRW1CLGdDQUFHO0FBQ3JCLG1DQUFTLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO01BQzdDOzs7WUFFSyxrQkFBRztBQUNQLGNBQ0UsNkRBQVksQ0FDWjtNQUNIOzs7WUFFTyxvQkFBRztBQUNULHNDQUFXLEtBQUssRUFBRSxDQUFDO01BQ3BCOzs7WUFFTyxvQkFBRztBQUNULFdBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztNQUMvQjs7O1VBMUJrQixXQUFXO0lBQVMsbUJBQU0sU0FBUzs7c0JBQW5DLFdBQVc7QUE0Qi9CLEVBQUM7O0FBRUYsWUFBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDM0NoQyxDQUFPOzs7OzJDQUdKLEVBQXVCOzs7OzhDQUNyQixFQUEwQjs7Ozt3Q0FFekIsRUFBZTs7Ozs2Q0FDVixFQUFvQjs7OzttREFDZCxFQUEwQjs7OztxREFDeEIsRUFBNEI7Ozs7eUNBQ3hDLEVBQWdCOzs7O0FBRXpDLEtBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDdkIsc0JBQU8sQ0FBQyxFQUFpQixDQUFDLENBQUM7RUFDNUI7O0FBRUQsVUFBUyxZQUFZLEdBQUc7QUFDdEIsVUFBTztBQUNMLFNBQUksRUFBRSw0QkFBUyxRQUFRLEVBQUUsQ0FBQyxJQUFJO0FBQzlCLFdBQU0sRUFBRSxDQUFDO0lBQ1YsQ0FBQztFQUNIOztLQUVvQixRQUFRO0FBQ2hCLFlBRFEsUUFBUSxHQUNiOzJCQURLLFFBQVE7O0FBRXpCLGdDQUZpQixRQUFRLDZDQUVqQjtBQUNSLFNBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxFQUFFLENBQUM7SUFDN0I7O2FBSmtCLFFBQVE7O2dCQUFSLFFBQVE7O1lBTVYsNkJBQUc7QUFDbEIsV0FBSSxRQUFRLEVBQUU7QUFDWixhQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDOztRQUV4QztNQUNGOzs7WUFFbUIsZ0NBQUcsRUFFdEI7OztZQUVlLDBCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDOUIsV0FBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7QUFDekMsV0FBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLEdBQUcsbUJBQW1CLENBQUMsQ0FBQztBQUMzRCxXQUFJLGFBQWEsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUM1QyxXQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRWxDLGlCQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEIscUJBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN0QixhQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQy9CLGFBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDakMsb0JBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7TUFDakM7OztZQUVjLHlCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDN0IsV0FBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7QUFDekMsV0FBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLEdBQUcsbUJBQW1CLENBQUMsQ0FBQztBQUMzRCxXQUFJLGFBQWEsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDdkMsV0FBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ2xDLGlCQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEIscUJBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN0QixhQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlCLGFBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDbEMsb0JBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7TUFDcEM7OztZQUVLLGtCQUFHOztBQUVQLFdBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNkLFdBQUksYUFBYSxHQUFHO0FBQ2xCLGVBQU0sRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ25ELENBQUM7O0FBRUYsV0FBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFTLE9BQU8sRUFBRSxLQUFLLEVBQUU7O0FBRXhFLGFBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUNuQixlQUFJLE9BQU8sR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO2VBQy9CLFVBQVUsR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLGdFQUFlLEdBQUcsRUFBRTtlQUMvQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxhQUFhLEdBQUcsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDO2VBQ3pELFdBQVcsR0FBRyxFQUFFO2VBQ2hCLGFBQWEsR0FBRyxFQUFFO2VBQ2xCLFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRSx3QkFBd0I7ZUFDL0QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLGdCQUFnQixHQUFHLEVBQUU7ZUFDaEUsV0FBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHOzs7YUFBSyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFBTSxHQUFHLEVBQUU7ZUFDM0UsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLDhEQUFjLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQU0sR0FBRyxHQUFHLEVBQUU7ZUFDbkYsV0FBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLGtFQUFrQixVQUFVLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFlLEdBQW9CLEdBQUcsRUFBRTtlQUNySSxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsa0VBQWtCLFVBQVUsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWUsR0FBb0IsR0FBRyxFQUFFLENBQUM7O0FBRTFJLGVBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtBQUNyQixpQkFBSSxVQUFVLEdBQUcsMEJBQVUsR0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztpQkFDOUMsYUFBYSxHQUFHO0FBQ2QseUJBQVUsRUFBRSxNQUFNLEdBQUMsVUFBVSxHQUFDLHlCQUF5QjtBQUN2RCxxQkFBTSxFQUFFLENBQUM7QUFDVCw2QkFBYyxFQUFFLE9BQU87QUFDdkIscUJBQU0sRUFBRSxNQUFNO0FBQ2QsdUJBQVEsRUFBRSxVQUFVO0FBQ3BCLG9CQUFLLEVBQUUsTUFBTTtBQUNiLGtCQUFHLEVBQUUsQ0FBQztBQUNOLG1CQUFJLEVBQUUsQ0FBQztBQUNQLG9CQUFLLEVBQUUsQ0FBQztjQUNULENBQUM7O0FBRU4sMEJBQWEsR0FBRywwQ0FBSyxZQUFTLEtBQUssRUFBQyxLQUFLLEVBQUUsYUFBYyxFQUFDLFNBQVMsRUFBQyxFQUFFLEdBQU87QUFDN0Usd0JBQVcsR0FBRyx3RUFBd0IsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLEVBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxHQUFHO1lBQzNNOztBQUVELGtCQUNFOztlQUFTLEdBQUcsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUssRUFBQyxTQUFTLEVBQUUsT0FBUSxFQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUssRUFBQyxLQUFLLEVBQUUsTUFBTzthQUM3RixXQUFXO2FBQ1o7O2lCQUFLLFNBQVMsRUFBQyxnQkFBZ0IsRUFBQyxLQUFLLEVBQUUsTUFBTztlQUM1Qzs7bUJBQUssU0FBUyxFQUFDLFFBQVE7aUJBQ3JCOztxQkFBSyxTQUFTLEVBQUMsZ0JBQWdCO21CQUM3Qjs7dUJBQUssU0FBUyxFQUFDLFNBQVM7cUJBQ3RCOzt5QkFBSyxTQUFTLEVBQUUsWUFBYTt1QkFDM0I7OzJCQUFLLFNBQVMsRUFBQyxpQkFBaUI7eUJBQzdCLFdBQVc7eUJBQ1gsVUFBVTt5QkFDVixLQUFLO3lCQUNOLDBFQUEwQixRQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFTLEdBQUc7eUJBQ2hFOzs2QkFBSyxTQUFTLEVBQUUsT0FBUTsyQkFDdEI7OytCQUFLLFNBQVMsRUFBQyw2QkFBNkI7NkJBQ3ZDLFdBQVc7NEJBQ1Y7MkJBQ047OytCQUFLLFNBQVMsRUFBQyw2QkFBNkI7NkJBQ3ZDLFdBQVc7NEJBQ1Y7MEJBQ0Y7d0JBQ0Y7c0JBQ0Y7b0JBQ0Y7a0JBQ0Y7Z0JBQ0Y7Y0FDRjthQUNMLGFBQWE7WUFDTixDQUNWO1VBQ0g7O0FBRUQsZ0JBQU8sbUJBQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQzs7QUFFTCxjQUFPLG1CQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO01BQ3pDOzs7VUF0SGtCLFFBQVE7SUFBUyxtQkFBTSxTQUFTOztzQkFBaEMsUUFBUTtBQXVINUIsRUFBQzs7QUFFRixTQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NoSjFCLENBQU87Ozs7S0FHSixXQUFXO0FBQ25CLFlBRFEsV0FBVyxHQUNoQjsyQkFESyxXQUFXOztBQUU1QixnQ0FGaUIsV0FBVyw2Q0FFcEI7SUFDVDs7YUFIa0IsV0FBVzs7Z0JBQVgsV0FBVzs7WUFLeEIsa0JBQUc7QUFDUCxXQUFJLElBQUksR0FBRyxtQkFBTyxDQUFDLEVBQXlCLENBQUMsQ0FBQztBQUM5QyxjQUNFOztXQUFLLFNBQVMsRUFBQyxZQUFZO1NBQ3pCOzthQUFHLElBQUksRUFBQyxVQUFVO1dBQ2hCLDBDQUFLLEdBQUcsRUFBRSxJQUFLLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsMkJBQTJCLEdBQUc7VUFDckU7UUFDQSxDQUNQO01BQ0Y7OztVQWRrQixXQUFXO0lBQVMsbUJBQU0sU0FBUzs7c0JBQW5DLFdBQVc7QUFnQi9CLEVBQUM7O0FBRUYsWUFBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDOzs7Ozs7Ozs7QUNyQmxELHVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDQWtCLENBQU87Ozs7MkNBR0osRUFBdUI7Ozs7OENBQ3JCLEVBQTBCOzs7O3FDQUM1QixFQUFZOzs7O0FBRWpDLFVBQVMsWUFBWSxHQUFHO0FBQ3RCLFVBQU87QUFDTCxTQUFJLEVBQUUsNEJBQVMsUUFBUSxFQUFFLENBQUMsSUFBSTtJQUMvQixDQUFDO0VBQ0g7O0tBRW9CLGdCQUFnQjtBQUN4QixZQURRLGdCQUFnQixHQUNyQjsyQkFESyxnQkFBZ0I7O0FBRWpDLGdDQUZpQixnQkFBZ0IsNkNBRXpCO0FBQ1IsU0FBSSxDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsQ0FBQztJQUM3Qjs7YUFKa0IsZ0JBQWdCOztnQkFBaEIsZ0JBQWdCOztZQU1sQiw2QkFBRyxFQUVuQjs7O1lBRW1CLGdDQUFHLEVBRXRCOzs7WUFFSyxrQkFBRztBQUNQLFdBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUN4QixXQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtBQUN6Qix1QkFBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFTLFNBQVMsRUFBRSxLQUFLLEVBQUU7QUFDcEUsZUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLGVBQUksWUFBWSxHQUFHLE1BQU0sR0FBQyxLQUFLLENBQUM7QUFDaEMsZUFBSSxjQUFjLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxFQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUM7QUFDdkQseUJBQWMsR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFDLFlBQVksRUFBRSxDQUFDLEVBQUMsR0FBRyxjQUFjLENBQUM7QUFDakcsZUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtBQUNwQiwyQkFBYyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNwQzs7QUFFRCxlQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtBQUNqQyxxQkFBUSxTQUFTLENBQUMsSUFBSTtBQUNwQixvQkFBSyxPQUFPO0FBQ1osZ0NBQWUsR0FBRzs7cUJBQUssR0FBRyxFQUFFLFlBQWEsRUFBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFHLEVBQUMsU0FBUyxFQUFDLE9BQU87bUJBQ2pGOzt1QkFBSyxTQUFTLEVBQUMsS0FBSztxQkFBQzs7O3VCQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRztzQkFBSztvQkFBTTttQkFDdkQ7O3VCQUFHLFNBQVMsRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBTTs7b0JBQXNDO21CQUN2Rjs7dUJBQUssU0FBUyxFQUFDLEtBQUs7cUJBQ3BCOzt5QkFBSyxTQUFTLEVBQUMsZ0JBQWdCO3VCQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU07c0JBQU87cUJBQ3RFOzt5QkFBTSxTQUFTLEVBQUMsVUFBVTt1QkFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRO3NCQUFROztxQkFBRTs7eUJBQU0sU0FBUyxFQUFDLGFBQWE7dUJBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTTtzQkFBUTtvQkFDdEk7a0JBQ0Q7QUFDTix1QkFBTTtBQUNOLG9CQUFLLGNBQWM7QUFDbkIsZ0NBQWUsR0FBRzs7cUJBQUssR0FBRyxFQUFFLFlBQWEsRUFBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFHLEVBQUMsU0FBUyxFQUFDLE9BQU87bUJBQ2pGOzt1QkFBSyxTQUFTLEVBQUMsTUFBTTtxQkFBQzs7O3VCQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSTtzQkFBSztvQkFBTTttQkFDekQ7O3VCQUFLLFNBQVMsRUFBQyxPQUFPO3FCQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSztvQkFBTzttQkFDcEQ7O3VCQUFLLFNBQVMsRUFBQyxLQUFLO3FCQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSztvQkFBTztrQkFDOUM7QUFDTix1QkFBTTtBQUNOLG9CQUFLLE1BQU07QUFDVCxnQ0FBZSxHQUFHLDBDQUFLLEdBQUcsRUFBRSxZQUFhLEVBQUMsdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxHQUFPO0FBQ3JHLHVCQUFNO0FBQ04sb0JBQUssZ0JBQWdCO0FBQ25CLGdDQUFlLEdBQUcsd0NBQUcsR0FBRyxFQUFFLFlBQWEsRUFBQyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLEdBQUs7QUFDakcsdUJBQU07QUFDTjtBQUNFLGdDQUFlLEdBQUc7O3FCQUFLLEdBQUcsRUFBRSxZQUFhO21CQUN2QywwQ0FBSyxTQUFTLEVBQUMsbUJBQW1CLEdBQU87bUJBQ3pDOzt1QkFBRyxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUs7cUJBQUUsU0FBUyxDQUFDLElBQUk7b0JBQUs7a0JBQzlDO0FBQ1IsdUJBQU07QUFBQSxjQUNQO1lBQ0YsTUFBTTtBQUNMLDRCQUFlLEdBQUcsd0NBQUcsS0FBSyxFQUFFLGNBQWUsRUFBQyxHQUFHLEVBQUUsWUFBYSxFQUFDLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFLO1lBQ2xIOztBQUVELGtCQUFPLG1CQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxHQUFHLEVBQUUsWUFBWSxFQUFDLEVBQUUsZUFBZSxDQUFDLENBQUM7VUFDNUQsQ0FBQyxDQUFDO1FBQ0o7O0FBRUQsY0FBTyxtQkFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsU0FBUyxFQUFDLG1CQUFtQixFQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7TUFDdkU7OztVQXBFa0IsZ0JBQWdCO0lBQVMsbUJBQU0sU0FBUzs7c0JBQXhDLGdCQUFnQjtBQXNFcEMsRUFBQzs7QUFFRixpQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDckYxQyxDQUFPOzs7O0tBR0osc0JBQXNCO0FBQzlCLFlBRFEsc0JBQXNCLEdBQzNCOzJCQURLLHNCQUFzQjs7QUFFdkMsZ0NBRmlCLHNCQUFzQiw2Q0FFL0I7SUFDVDs7YUFIa0Isc0JBQXNCOztnQkFBdEIsc0JBQXNCOztZQUsvQixvQkFBQyxHQUFHLEVBQUU7QUFDZCxXQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDL0IsVUFBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO01BQ3RCOzs7WUFFUSxtQkFBQyxHQUFHLEVBQUU7QUFDYixXQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDOUIsVUFBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO01BQ3RCOzs7WUFFSyxrQkFBRztBQUNQLGNBQ0U7O1dBQUssU0FBUyxFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTtTQUMzRyx3Q0FBRyxTQUFTLEVBQUMsb0RBQW9ELEdBQUs7UUFDbEUsQ0FDTjtNQUNIOzs7VUFyQmtCLHNCQUFzQjtJQUFTLG1CQUFNLFNBQVM7O3NCQUE5QyxzQkFBc0I7QUF1QjFDLEVBQUM7O0FBRUYsdUJBQXNCLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQzVCdEQsQ0FBTzs7OztLQUlKLHdCQUF3QjtBQUNoQyxZQURRLHdCQUF3QixHQUM3QjsyQkFESyx3QkFBd0I7O0FBRXpDLGdDQUZpQix3QkFBd0IsNkNBRWpDO0lBQ1Q7O2FBSGtCLHdCQUF3Qjs7Z0JBQXhCLHdCQUF3Qjs7WUFLckMsa0JBQUc7QUFDUCxXQUFJLGNBQWMsR0FBRyxFQUFFO0FBQ3ZCLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7QUFDdkIsYUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsU0FBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxTQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2xGLGFBQUksaUJBQWlCLEdBQUcsV0FBVyxHQUFHLGdCQUFnQixDQUFDO0FBQ3ZELHVCQUFjLEdBQ1o7O2FBQUssU0FBUyxFQUFFLGlCQUFrQjtXQUNoQzs7ZUFBSyxTQUFTLEVBQUMsTUFBTTthQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUk7YUFDN0M7O2lCQUFLLFNBQVMsRUFBQyxRQUFRO2VBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTTtjQUFPO1lBQ3REO1VBQ0Y7UUFDVCxNQUFNO0FBQ0wsdUJBQWMsR0FBRyw2Q0FBVztRQUM3QjtBQUNELGNBQU8sbUJBQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7TUFDMUM7OztVQXBCa0Isd0JBQXdCO0lBQVMsbUJBQU0sU0FBUzs7c0JBQWhELHdCQUF3QjtBQXNCNUMsRUFBQzs7QUFFRix5QkFBd0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDNUIxRCxDQUFPOzs7O0tBR0osWUFBWTtBQUNwQixZQURRLFlBQVksR0FDakI7MkJBREssWUFBWTs7QUFFN0IsZ0NBRmlCLFlBQVksNkNBRXJCO0lBQ1Q7O2FBSGtCLFlBQVk7O2dCQUFaLFlBQVk7O1lBS3pCLGtCQUFHO0FBQ1AsV0FBSSxHQUFHLEdBQUcsMEJBQVUsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7V0FDdEMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1dBQ3hDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtXQUN4QyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM3QyxjQUNFOzs7U0FDRSwwQ0FBSyxHQUFHLEVBQUUsR0FBSSxHQUFHO1NBQ2pCOzthQUFLLFNBQVMsRUFBQyxNQUFNO1dBQ25CLDBDQUFLLFNBQVMsRUFBQyw2QkFBNkIsRUFBQyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FDbEY7V0FDTiwwQ0FBSyxTQUFTLEVBQUMsNkJBQTZCLEVBQUMsdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQ2xGO1dBQ04sMENBQUssU0FBUyxFQUFDLDZCQUE2QixFQUFDLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUNsRjtVQUNGO1FBQ0YsQ0FDUDtNQUNGOzs7VUF2QmtCLFlBQVk7SUFBUyxtQkFBTSxTQUFTOztzQkFBcEMsWUFBWTtBQXlCaEMsRUFBQzs7QUFFRixhQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7Ozs7Ozs7OztBQzlCcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsdURBQXVEO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbkNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNqQkE7QUFDQSxpQ0FBZ0Msb0JBQW9CLEdBQUcsaUJBQWlCLGdCQUFnQixzQkFBc0IsZ0JBQWdCLHVCQUF1QixHQUFHLGFBQWEscUJBQXFCLG1CQUFtQixzQkFBc0Isb0JBQW9CLHNCQUFzQix3QkFBd0IsS0FBSywwQkFBMEIscUJBQXFCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLGFBQWEseUJBQXlCLDJCQUEyQixzQkFBc0IsY0FBYyxlQUFlLHFCQUFxQixhQUFhLEdBQUcsdUJBQXVCLDJCQUEyQixrQkFBa0IsaUJBQWlCLGtCQUFrQixtQkFBbUIsNkNBQTZDLEdBQUcsdUJBQXVCLHlCQUF5QixHQUFHLDhDQUE4QyxvQkFBb0IsR0FBRyx5QkFBeUIsdUJBQXVCLG1CQUFtQixpQkFBaUIsY0FBYyxrQkFBa0IsR0FBRywrQkFBK0IsNkJBQTZCLHVCQUF1QixvQkFBb0IsZ0JBQWdCLHNCQUFzQixHQUFHLGdDQUFnQyxzQkFBc0IsS0FBSyxxQkFBcUIsNkJBQTZCLHVCQUF1QixHQUFHLDhCQUE4Qiw2Q0FBNkMsR0FBRyw2QkFBNkIsZ0JBQWdCLGtCQUFrQix3QkFBd0IsR0FBRyx3QkFBd0IscUJBQXFCLEdBQUcsb0NBQW9DLHVCQUF1QixLQUFLLGdDQUFnQyxxQkFBcUIsR0FBRyw4QkFBOEIsaUJBQWlCLGlCQUFpQixHQUFHLHNDQUFzQyxnQkFBZ0IsR0FBRyxrREFBa0Qsd0JBQXdCLEdBQUcsZUFBZSwwQkFBMEIsaUJBQWlCLGlCQUFpQixpQkFBaUIsbUJBQW1CLHNCQUFzQiw2QkFBNkIsc0JBQXNCLHNCQUFzQixtQkFBbUIsc0JBQXNCLEtBQUssb0JBQW9CLHlCQUF5QixzQkFBc0IsR0FBRyxxQkFBcUIsc0JBQXNCLHFCQUFxQix3QkFBd0IscUJBQXFCLEdBQUcseUJBQXlCLHdCQUF3Qix3QkFBd0IsdUJBQXVCLEdBQUcsdUJBQXVCLGlDQUFpQyxHQUFHLFlBQVksK0JBQStCLHFCQUFxQixHQUFHLDJFQUEyRSxpQkFBaUIsbUJBQW1CLHVCQUF1QixzQkFBc0IsZUFBZSx3QkFBd0IsS0FBSyxnQkFBZ0Isb0JBQW9CLHVCQUF1QixhQUFhLGNBQWMsR0FBRyxnQkFBZ0IsYUFBYSxjQUFjLHVCQUF1QixzQ0FBc0MseUNBQXlDLG1DQUFtQyxnQkFBZ0IsYUFBYSx1QkFBdUIsdUJBQXVCLHFCQUFxQixHQUFHLCtCQUErQix1QkFBdUIsZUFBZSxpQkFBaUIsZ0JBQWdCLHNDQUFzQyx5Q0FBeUMsbUNBQW1DLHFCQUFxQixHQUFHLGNBQWMsMkJBQTJCLEVBQUUsWUFBWSxpQ0FBaUMsTUFBTSxZQUFZLDJCQUEyQixFQUFFLFlBQVksMkJBQTJCLEVBQUUsWUFBWSwyQkFBMkIsRUFBRSx3QkFBd0IsK0JBQStCLGdDQUFnQyxHQUFHLG9FQUFvRSxjQUFjLEdBQUcsZ0JBQWdCLHlCQUF5QixhQUFhLGNBQWMsb0JBQW9CLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcscUJBQXFCLGVBQWUsS0FBSyx3QkFBd0Isa0NBQWtDLEdBQUcsWUFBWSx1QkFBdUIsZ0JBQWdCLHNCQUFzQixHQUFHLGlCQUFpQiw4QkFBOEIsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcsV0FBVyxrQkFBa0IsR0FBRywwQ0FBMEMsVUFBVSx3QkFBd0IsS0FBSyx1QkFBdUIsdUJBQXVCLFNBQVMsMkJBQTJCLHVCQUF1QixLQUFLLG9CQUFvQixzQkFBc0IsS0FBSywwQkFBMEIsZUFBZSxLQUFLLHNCQUFzQiw0QkFBNEIsS0FBSyxHQUFHLDJGQUEyRixvQkFBb0Isb0JBQW9CLHdCQUF3QixTQUFTLHNCQUFzQixlQUFlLEtBQUssR0FBRyxVOzs7Ozs7QUNEMWhKLHVEOzs7Ozs7QUNBQSx1RDs7Ozs7O0FDQUEsdUQ7Ozs7OztBQ0FBLHVEOzs7Ozs7QUNBQSx1RDs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NBa0IsQ0FBTzs7OztLQUVKLGVBQWU7QUFDdkIsWUFEUSxlQUFlLEdBQ3BCOzJCQURLLGVBQWU7O0FBRWhDLGdDQUZpQixlQUFlLDZDQUV4QjtJQUNUOzthQUhrQixlQUFlOztnQkFBZixlQUFlOztZQUs1QixrQkFBRztBQUNQLGNBQ0U7OztTQUNFOzs7O1VBQXVCO1FBQ25CLENBQ047TUFDSDs7O1VBWGtCLGVBQWU7SUFBUyxtQkFBTSxTQUFTOztzQkFBdkMsZUFBZTs7QUFlcEMsZ0JBQWUsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQ2pCeEMsRUFBWTs7OztBQUU5QixVQUFTLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDckIsU0FBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBSztBQUN2QyxTQUFJO0FBQ0YsVUFBRyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzs7Ozs7QUFLbEQsbUNBQU0scUNBQXFDLENBQUMsQ0FDM0MsSUFBSSxDQUFDLFVBQUMsUUFBUSxFQUFLO0FBQ2xCLGdCQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQ2hCLFlBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQztNQUNKLENBQUMsT0FBTyxHQUFHLEVBQUU7QUFDWixXQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDWDtJQUNGLENBQUMsQ0FBQztFQUNKOztzQkFFYyxLQUFLOzs7Ozs7Ozs7QUN0QnBCLHdDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDg0ODQ5NzZmYWY5YzM5NTJhMDJjXG4gKiovIiwiLy8gTk9ERVxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIEVYUFJFU1NcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGZhdmljb24gZnJvbSAnc2VydmUtZmF2aWNvbic7XG5cbi8vIEVYVEVSTkFMU1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vYXBwL3JvdXRlcyc7XG5cbmxldCBodG1sID0gZnMucmVhZEZpbGVTeW5jKCcuL2Rpc3QvaW5kZXgtcHJvZC5odG1sJywge2VuY29kaW5nOiAndXRmOCd9KTtcblxubGV0IGFwcCA9IGV4cHJlc3MoKTtcbmFwcC51c2UoZmF2aWNvbihwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vYXBwL2ltYWdlcy9mYXZpY29uLmljbycpKSk7XG5cbmFwcC5zZXQoJ3BvcnQnLCBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDApO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYygnZGlzdCcpKTtcblxuLy9cbi8vIFJlZ2lzdGVyIEFQSSBtaWRkbGV3YXJlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxucmVxdWlyZSgnLi9hcGknKShhcHApO1xuXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGxldCBtYXJrdXAgPSAnJztcblxuICB0cnkge1xuICAgIFJvdXRlci5ydW4ocm91dGVzLCByZXEucGF0aCwgKFJvb3QsIHN0YXRlKSA9PiB7XG4gICAgICBtYXJrdXAgKz0gUmVhY3QucmVuZGVyVG9TdHJpbmcoUmVhY3QuY3JlYXRlRWxlbWVudChSb290KSk7XG4gICAgICBtYXJrdXAgPSBodG1sLnJlcGxhY2UoJ0NPTlRFTlQnLCBtYXJrdXApO1xuICAgICAgcmVzLmNvbnRlbnRUeXBlID0gJ3RleHQvaHRtbDsgY2hhcnNldD11dGY4JztcbiAgICAgIGxldCBub3RGb3VuZCA9IF8uZmluZChzdGF0ZS5yb3V0ZXMsIHtpc05vdEZvdW5kOiB0cnVlfSk7XG4gICAgICBpZiAobm90Rm91bmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXMuc3RhdHVzKDQwNCk7XG4gICAgICB9XG4gICAgICByZXMuc2VuZChtYXJrdXApO1xuICAgIH0pO1xuXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbmV4dChlKTtcbiAgfVxufSk7XG5cbmh0dHAuY3JlYXRlU2VydmVyKGFwcCkubGlzdGVuKGFwcC5nZXQoJ3BvcnQnKSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJyArIGFwcC5nZXQoJ3BvcnQnKSk7XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc2VydmVyL3NlcnZlci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibG9kYXNoXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZnNcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInBhdGhcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImV4cHJlc3NcIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZlLWZhdmljb25cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInNlcnZlLWZhdmljb25cIlxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImh0dHBcIlxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIlxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vKmVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMqL1xyXG5pbXBvcnQge1JvdXRlLCBEZWZhdWx0Um91dGUsIE5vdEZvdW5kUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL0FwcC9BcHAnO1xyXG5pbXBvcnQgTWVudGlvbnMgZnJvbSAnLi9jb21wb25lbnRzL01lbnRpb25zL01lbnRpb25zJztcclxuaW1wb3J0IEhvbWVTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbic7XHJcbmltcG9ydCBOb3RGb3VuZFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kU2VjdGlvbi9Ob3RGb3VuZFNlY3Rpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFxyXG4gIDxSb3V0ZSBuYW1lPSdhcHAnIHBhdGg9Jy8nIGhhbmRsZXI9e0FwcGxpY2F0aW9ufT5cclxuXHQ8Um91dGUgbmFtZT0nbWVudGlvbnMnIHBhdGg9Jy9tZW50aW9ucycgaGFuZGxlcj17TWVudGlvbnN9Lz5cclxuICAgIDxEZWZhdWx0Um91dGUgaGFuZGxlcj17SG9tZVNlY3Rpb259IC8+XHJcbiAgICA8Tm90Rm91bmRSb3V0ZSBoYW5kbGVyPXtOb3RGb3VuZFNlY3Rpb259IC8+XHJcbiAgPC9Sb3V0ZT5cclxuKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvcm91dGVzLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi9fTWVudGlvbnMuc2NzcycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW50aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7ICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwibWVudGlvbnNcIj5cbiAgICAgICAgPGgyPk1lbnRpb25zIGzDqWdhbGVzPC9oMj5cbiAgICBcdDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiAnQ29uZm9ybcOpbWVudCBhdXggZGlzcG9zaXRpb25zIGRlcyBhcnRpY2xlcyA2LUlJSSBkZSBsYSBsb2kgbsKwMjAwNC01NzUgZHUgMjEganVpbiAyMDA0IHBvdXIgbGEgQ29uZmlhbmNlIGRhbnMgbFxcJ0Vjb25vbWllIE51bcOpcmlxdWUsIEp1bGllbiBWYWzDqXJ5IHZvdXMgaW5mb3JtZSBkZXMgbWVudGlvbnMgbMOpZ2FsZXMgc3VpdmFudGVzIDonfX0gPlxuICBcdFx0PC9wPlxuICBcdFx0PGgzPkVkaXRldXIgZHUgc2l0ZSB3ZWI8L2gzPlxuXHRcdCAgPHA+XG5cdFx0ICAgIExlIHNpdGUgd2ViIEFwaXMgTGF6dWxpIENvbnN1bHRpbmcgYXBwYXJ0aWVudCDDoCBKdWxpZW4gVmFsw6lyeSwgZG9taWNpbGnDqSDDoCA6ICAgICAgICBcblx0XHQgIDwvcD5cbiAgXHRcdDxwPjEzMSBCbGQgZGUgQ2hhcm9ubmUgNzUwMTEgUGFyaXMgRnJhbmNlPC9wPlxuXHRcdCAgPGg0IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiAnSW1tYXRyaWN1bGF0aW9uIHNvdXMgbGUgc3RhdHV0IGRcXCdhdXRvLWVudHJlcHJlbmV1cid9fT48L2g0PlxuICBcdFx0PHA+TnVtw6lybyBkZSBTSVJFVCA6IDgwOSA2NDcgNzUzIDAwMDE1PC9wPlxuXHRcdCAgPHA+Q29kZSBBUEUgOiA2MjAxWiBQcm9ncmFtbWF0aW9uIGluZm9ybWF0aXF1ZTwvcD5cblx0XHQgIDxoMz5Qcm9wcmnDqXTDqSBpbnRlbGxlY3R1ZWxsZTwvaDM+XG5cdFx0ICA8cD5MZSBjb250ZW51ICh0ZXh0ZXMsIGxvZ28sIGlsbHVzdHJhdGlvbnMsIGltYWdlcykgZG9udCBsZSBzaXRlIHdlYiBBcGlzIExhenVsaSBDb25zdWx0aW5nIGVzdCBjb21wb3PDqSwgZXN0IGxhIHByb3ByacOpdMOpIGV4Y2x1c2l2ZSBkZSBKdWxpZW4gVmFsw6lyeS48L3A+XG5cdFx0ICA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogJ0xlIGxvZ2ljaWVsLCBsXFwnYXJjaGl0ZWN0dXJlLCBsYSBzdHJ1Y3R1cmUgdGVjaG5pcXVlIGV0IGxlcyBjb2RlcyBzb3VyY2VzIChIVE1MLCBKYXZhc2NyaXB0LCBDU1MpLCBheWFudCBwZXJtaXMgbGEgY3LDqWF0aW9uIGR1IHNpdGUgQXBpcyBMYXp1bGkgQ29uc3VsdGluZywgc29udCBsYSBwcm9wcmnDqXTDqSBleGNsdXNpdmUgZGUgSnVsaWVuIFZhbMOpcnkuJ319ID48L3A+XG5cdFx0ICA8aDQ+SMOpYmVyZ2V1ciBkdSBzaXRlIHdlYjwvaDQ+ICBcblx0XHQgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiAnaHR0cHM6Ly93d3cuaGVyb2t1LmNvbS8nfX0+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9jb21wb25lbnRzL01lbnRpb25zL01lbnRpb25zLmpzeFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vX01lbnRpb25zLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL19NZW50aW9ucy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL19NZW50aW9ucy5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL01lbnRpb25zL19NZW50aW9ucy5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI21lbnRpb25zIHtcXG4gIG1hcmdpbjogMTUwcHg7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL01lbnRpb25zL19NZW50aW9ucy5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbi8vIFxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCgpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQoKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGhlYWQuYXBwZW5kQ2hpbGQobGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQoKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYShKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUhhbmRsZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyL0Zvb3Rlcic7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xyXG4gIHJlcXVpcmUoJy4vX0FwcC5zY3NzJyk7XHJcbiAgcmVxdWlyZSgnLi9ncmlkLmNzcycpO1xyXG4gIHJlcXVpcmUoJ2ZpbGU/bmFtZT1mYXZpY29uLmljbyEuLi8uLi9pbWFnZXMvZmF2aWNvbi5pY28nKTtcclxuICByZXF1aXJlKFwiLi9nb29nbGUuanNcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj4gICAgIFxyXG4gICAgICAgIFx0PFJvdXRlSGFuZGxlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9jb21wb25lbnRzL0FwcC9BcHAuanN4XG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9fQXBwLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL19BcHAuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9fQXBwLnNjc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2FlY2lsaWEtTGlnaHRcXFwiLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyAgXFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgd2lkdGg6IDM2MHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBmb250LWZhbWlseTogXFxcIkJpdHRlclxcXCI7XFxyXFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XFxyXFxuICBjb2xvcjogIzE3MzY3NjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBtYXJnaW4tbGVmdDogLTQycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjRyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07ICBcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7ICBcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICBtaW4td2lkdGg6IDEwMDBweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7ICBcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgaGVpZ2h0OjA7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3R0b206IDA7ICBcXHJcXG4gIHotaW5kZXg6IDEwMDAwOyBcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xcclxcbiAgcGFkZGluZzogOHB4IDBweDsgICAgXFxyXFxufVxcclxcblxcclxcbiNmb290ZXIgYSB7XFxyXFxuICBjb2xvcjogIzUyNDc0NztcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmltcG9ydCBBcHBTdG9yZSBmcm9tICcuLi8uLi9zdG9yZXMvQXBwU3RvcmUnO1xyXG5cclxubGV0IGxvZ287XHJcblxyXG5sb2dvID0gcmVxdWlyZSgnLi9pbWFnZXMvbG9nby1ibHVlLnN2ZycpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcclxuICByZXF1aXJlKCcuL19IZWFkZXIuc2NzcycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhU3RhdGUoKSB7XHJcbiAgcmV0dXJuIHsgICAgXHJcbiAgICBqc29uOiBBcHBTdG9yZS5nZXRTdGF0ZSgpLmpzb25cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSBnZXREYXRhU3RhdGUoKTsgICAgXHJcbiAgfSAgXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHZhciBtZW51c05vZGVzID0gdGhpcy5zdGF0ZS5qc29uLm1lbnVzLm1hcChmdW5jdGlvbihtZW51LCBpbmRleCkge1xyXG4gICAgICB2YXIga2V5Q2hhcCA9IFwibWVudVwiK2luZGV4O1xyXG4gICAgICBsZXQgcGF0aCA9ICcvJyttZW51LnBhdGg7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGtleT17a2V5Q2hhcH0+XHJcbiAgICAgICAgICA8YSBocmVmPXtwYXRofSA+XHJcbiAgICAgICAgICAgIHttZW51LnRleHR9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTsgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX21lbnVcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1lbnUtbmF2IFwiPlxyXG4gICAgICAgICAgPHVsIGlkPVwibWVudS1tZW51LXByaW5jaXBhbFwiIGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gaGVpZ2h0PVwiODBcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAge21lbnVzTm9kZXN9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeFxuICoqLyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcclxuaW1wb3J0IG1lcmdlIGZyb20gJ29iamVjdC1hc3NpZ24nO1xyXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xyXG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSAnd2hhdHdnLWZldGNoJztcclxuXHJcbmxldCBhcHBTdG9yZSA9IGFsdC5jcmVhdGVTdG9yZShjbGFzcyBBcHBTdG9yZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmJpbmRBY3Rpb25zKEFwcEFjdGlvbnMpO1xyXG4gICAgdGhpcy5kYXRhQnlSZXN0QXBpID0ge307XHJcbiAgICB0aGlzLmRhdGEgPSB7fTtcclxuICAgIC8vIGRhdGFcclxuICAgIHRoaXMuanNvbiA9IHJlcXVpcmUoJ2pzb24hLi4vLi4vY2hhcHRlcnMtdjEuanNvbicpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGlkLCB1cGRhdGVzKSB7XHJcbiAgICBpZih0aGlzLmRhdGFbaWRdICYmIHVwZGF0ZXMpe1xyXG4gICAgICB0aGlzLmRhdGFbaWRdID0gbWVyZ2UodGhpcy5kYXRhW2lkXSwgdXBkYXRlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBbGwodXBkYXRlcykge1xyXG4gICAgZm9yICh2YXIgaWQgaW4gdGhpcy5kYXRhKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKGlkLCB1cGRhdGVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ3JlYXRlKHRleHQpIHtcclxuICAgIHRleHQgPSB0ZXh0LnRyaW0oKTtcclxuICAgIGlmICh0ZXh0ID09PSAnJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBoYW5kIHdhdmluZyBvZiBjb3Vyc2UuXHJcbiAgICB2YXIgaWQgPSAoK25ldyBEYXRlKCkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpKS50b1N0cmluZygzNik7XHJcbiAgICB0aGlzLmRhdGFbaWRdID0ge1xyXG4gICAgICBpZDogaWQsXHJcbiAgICAgIGNvbXBsZXRlOiBmYWxzZSxcclxuICAgICAgdGV4dDogdGV4dFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uRmV0Y2goKSB7XHJcbiAgICB0aGlzLmRhdGFCeVJlc3RBcGkgPSB7ZGF0YTogJ2hlbGxvJ307XHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9naXRodWInKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KS50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhQnlSZXN0QXBpID0ge2RhdGE6IGpzb259O1xyXG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSgpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIG9uVXBkYXRlVGV4dCh4KSB7XHJcbiAgICBsZXQgeyBpZCwgdGV4dCB9ID0geDtcclxuICAgIHRleHQgPSB0ZXh0ID8gdGV4dC50cmltKCkgOiAnJztcclxuICAgIGlmICh0ZXh0ID09PSAnJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZShpZCwgeyB0ZXh0IH0pO1xyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVDb21wbGV0ZShpZCkge1xyXG4gICAgbGV0IGNvbXBsZXRlID0gIXRoaXMuZGF0YVtpZF0uY29tcGxldGU7XHJcbiAgICB0aGlzLnVwZGF0ZShpZCwgeyBjb21wbGV0ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlQ29tcGxldGVBbGwoKSB7XHJcbiAgICAvKnZhciBjb21wbGV0ZSA9ICF0b2RvU3RvcmUuYXJlQWxsQ29tcGxldGUoKTtcclxuICAgIHRoaXMudXBkYXRlQWxsKHsgY29tcGxldGUgfSk7Ki9cclxuICB9XHJcblxyXG4gIG9uRGVzdHJveShpZCkge1xyXG4gICAgZGVsZXRlIHRoaXMuZGF0YVtpZF07XHJcbiAgfVxyXG5cclxuICBvbkRlc3Ryb3lDb21wbGV0ZWQoKSB7XHJcbiAgICBmb3IgKGxldCBpZCBpbiB0aGlzLmRhdGEpIHtcclxuICAgICAgaWYgKHRoaXMuZGF0YVtpZF0uY29tcGxldGUpIHtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveShpZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhcmVBbGxDb21wbGV0ZSgpIHtcclxuICAgIGxldCB7IGRhdGEgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHtcclxuICAgICAgaWYgKCFkYXRhW2lkXS5jb21wbGV0ZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXBwU3RvcmU7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL3N0b3Jlcy9BcHBTdG9yZS5qc1xuICoqLyIsImltcG9ydCBBbHQgZnJvbSAnYWx0JztcclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFsdCgpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9hbHQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbHRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFsdFwiXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm9iamVjdC1hc3NpZ25cIlxuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYWx0ID0gcmVxdWlyZSgnLi4vYWx0Jyk7XHJcblxyXG5jbGFzcyBBcHBBY3Rpb25zIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxyXG4gICAgICAnY3JlYXRlJyxcclxuICAgICAgJ2Rlc3Ryb3knLFxyXG4gICAgICAndG9nZ2xlQ29tcGxldGUnLFxyXG4gICAgICAnZmV0Y2gnXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhbHQuY3JlYXRlQWN0aW9ucyhBcHBBY3Rpb25zKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvYWN0aW9ucy9BcHBBY3Rpb25zLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWVudXNcIjogW1xuXHRcdHtcblx0XHRcdFwicGF0aFwiOiBcIiNhY2N1ZWlsXCIsXG5cdFx0XHRcInRleHRcIjogXCJBY2N1ZWlsXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwicGF0aFwiOiBcIiNhcHBvcnRzXCIsXG5cdFx0XHRcInRleHRcIjogXCJBcHBvcnRzXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwicGF0aFwiOiBcIiNleHBlcnRpc2VcIixcblx0XHRcdFwidGV4dFwiOiBcIkRvbWFpbmVzIGQnZXhwZXJ0aXNlXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwicGF0aFwiOiBcIiNpbnRlcnZlbnRpb25zXCIsXG5cdFx0XHRcInRleHRcIjogXCJJbnRlcnZlbnRpb25zXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwicGF0aFwiOiBcIiNjb250YWN0XCIsXG5cdFx0XHRcInRleHRcIjogXCJDb250YWN0XCJcblx0XHR9XG5cdF0sXG5cdFwiaG9tZVwiOiB7XG5cdFx0XCJsb2dvXCI6IFwicHVibGljL2ltYWdlcy9sb2dvLWJsYW5jLnN2Z1wiLFxuXHRcdFwibG9nb0hlaWdodFwiOiBcIjIwMHB4XCIsXG5cdFx0XCJsb2dvQ2xhc3NuYW1lc1wiOiBcImxvZ28taG9tZSBhbmltYXRlZCBib3VuY2VcIlxuXHR9LFxuXHRcInNlY3Rpb25zXCI6IFtcblx0XHR7XG5cdFx0XHRcImltbWVyc2l2ZVwiOiB7XG5cdFx0XHRcdFwiaW1nXCI6IFwiLi9pbWFnZXMvaW1nLTE2MDAtMTIwMF81LmpwZ1wiLFxuXHRcdFx0XHRcIndcIjogXCIxNjAwXCIsXG5cdFx0XHRcdFwiaFwiOiBcIjEyMDBcIixcblx0XHRcdFx0XCJyYXRpb1wiOiBcIjFcIlxuXHRcdFx0fSxcblx0XHRcdFwiY2hhcHRlclwiOiB7XG5cdFx0XHRcdFwicGF0aFwiOiBcImhvbWVcIixcblx0XHRcdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFx0XHRcImNpdGF0aW9uXCI6IHtcblx0XHRcdFx0XHRcImF1dGhvclwiOiBcIkdhbGlsw6llXCIsXG5cdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiwqsgSWwgZXN0IGltcG9zc2libGUgZCdlbnNlaWduZXIgcXVlbHF1ZWNob3NlIMOgIHF1ZWxxdSd1biwgdm91cyBuZSBwb3V2ZXogbCdhaWRlciBxdSfDoCBsZSBkw6ljb3V2cmlyIGVuIGx1aSDCu1wiLFxuXHRcdFx0XHRcdFwiY2xhc3NcIjogXCJob21lXCJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJjaGFwdGVyXCI6IHtcblx0XHRcdFx0XCJwYXRoXCI6IFwiYWNjdWVpbFwiLFxuXHRcdFx0XHRcInRpdGxlXCI6IFwiTGV2aWVycyBk4oCZb3B0aW1pc2F0aW9uIGRlcyByZXNzb3VyY2VzIGh1bWFpbmVzXCIsXG5cdFx0XHRcdFwicGFyYWdyYXBoc0NvbDFcIjogW1xuXHRcdFx0XHRcdFwiTOKAmWlubm92YXRpb24gbW9kaWZpZSBsYSByZWxhdGlvbiBhdSB0cmF2YWlsLCBjaGFjdW4gZGV2aWVudCBhY3RldXIgZXQgbW90ZXVyLiBD4oCZZXN0IGzigJnDqHJlIGR1IHBhcnRhZ2UgZXQgZGUgbGEgdHJhbnNwYXJlbmNlLiBEaXJpZ2VyLCBj4oCZZXN0IGRvbm5lciBkdSBzZW5zIHBvdXIgc+KAmWFzc3VyZXIgZGUgbOKAmWVuZ2FnZW1lbnQgZGVzIGNvbGxhYm9yYXRldXJzLiBMZSBtYW5hZ2VtZW50IHJlc3BvbnNhYmxlLCBj4oCZZXN0IGpvdWVyIGNvbGxlY3RpZiBldCBz4oCZYXBwdXllciBzdXIgbOKAmWhvbW1lIGVuIGx1aSBtw6ptZS5cIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcInBhcmFncmFwaHNDb2wyXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJodG1sXCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCI8cCBjbGFzcz0ndGl0bGUnPk5vdHJlIHNhdm9pci1mYWlyZcKgY29uc2lzdGUgw6AgYWNjb21wYWduZXIgbGVzIFJIIGRhbnMgbGEgY29uZHVpdGUgZHUgY2hhbmdlbWVudCBzZWxvbiB1bmUgYXBwcm9jaGUgc3lzdMOpbWlxdWXCoDo8L3A+XCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImV4cGVydGlzZVwiLFxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiUsOpZmxleGlvbiBzdXIgbGVzIG9yZ2FuaWdyYW1tZXNcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZXhwZXJ0aXNlXCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCJDb2FjaGluZyBpbmRpdmlkdWVsXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImV4cGVydGlzZVwiLFxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiRm9ybWF0aW9uIE1hbmFnw6lyaWFsZSAoaGlnaCBldCBtaWRkbGUpXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaW1tZXJzaXZlXCI6IHtcblx0XHRcdFx0XCJpbWdcIjogXCIuL2ltYWdlcy9pbWctMTYwMC0xMjAwXzMuanBnXCIsXG5cdFx0XHRcdFwid1wiOiBcIjE2MDBcIixcblx0XHRcdFx0XCJoXCI6IFwiMTIwMFwiLFxuXHRcdFx0XHRcInJhdGlvXCI6IFwiMVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJjaGFwdGVyXCI6IHtcblx0XHRcdFx0XCJwYXRoXCI6IFwidHJhbnNpdGlvbi1pbW1lcnNpdmUtMVwiLFxuXHRcdFx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XHRcdFwiY2l0YXRpb25cIjoge1xuXHRcdFx0XHRcdFwiYXV0aG9yXCI6IFwiSm9obiBGaXR6Z2VyYWxkIEtlbm5lZHlcIixcblx0XHRcdFx0XHRcInRleHRcIjogXCLCq8KgQ2VydGFpbmVzIHBlcnNvbm5lcyB2b2llbnQgbGVzIGNob3NlcyBjb21tZSBlbGxlcyBzb250IGV0IHNlIGRlbWFuZGVudMKgOiBQb3VycXVvacKgPyBNb2ksIGplIHZvaXMgbGVzIGNob3NlcyBjb21tZSBlbGxlcyBwb3VycmFpZW50IMOqdHJlIGV0IGplIG1lIGRpc8KgOiBQb3VycXVvaSBwYXMgPyDCu1wiXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiY2hhcHRlclwiOiB7XG5cdFx0XHRcdFwicGF0aFwiOiBcImFwcG9ydHNcIixcblx0XHRcdFx0XCJ0aXRsZVwiOiBcIkFwcG9ydHNcIixcblx0XHRcdFx0XCJwYXJhZ3JhcGhzQ29sMVwiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiaHRtbC1wYXJhZ3JhcGhcIixcblx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIk5vdHJlIGNhcGl0YWwgZXhwZXJ0aXNlLCBhY3F1aXMgZGVwdWlzIGRlIG5vbWJyZXVzZXMgYW5uw6llcywgZmFjaWxpdGUgbGEgY29tcHLDqWhlbnNpb24gZGUgbm9zIGNsaWVudHMgcG91ciByZWNydXRlciwgZm9ybWVyIGV0IG1hbmFnZXIgPGI+QVVUUkVNRU5UPC9iPi5cIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XCJOb3VzIG9wdGltaXNvbnMgbGV1cnMgZGVtYW5kZXMgcGFyIGzigJlhcHBvcnQgZGUgbcOpdGhvZGVzIGlubm92YW50ZXMuXCIsXG5cdFx0XHRcdFx0XCJJbHMgbWHDrnRyaXNlbnQgbGVzIGVuamV1eCBkZSBub3MgaW50ZXJ2ZW50aW9ucywgbm90cmUgaW1wbGljYXRpb24gZXN0IHRvdGFsZS5cIixcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJodG1sXCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCI8cCBjbGFzcz0ndGl0bGUnPk5vdXMgYWdpc3NvbnMgZGFucyBsZSByZXNwZWN0IGRlIGxhIHBlcnNvbm5lIGVuIGFzc3VyYW50OjwvcD5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0XCJwYXJhZ3JhcGhzQ29sMlwiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZXhwZXJ0aXNlXCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCJVbmUgbW9udMOpZSBlbiBwdWlzc2FuY2UgZGVzIGNvbXDDqXRlbmNlcyBleGlzdGFudGVzIGF1IHNlaW4gZGUgbOKAmWVudHJlcHJpc2UgcG91ciBmYXZvcmlzZXIgbOKAmWFkaMOpc2lvbiBldCBs4oCZaW52ZXN0aXNzZW1lbnQgYXUgcHJvamV0IGVudHJlcHJlbmV1cmlhbCAoY29hY2hpbmcgZGUgbWFuYWdlbWVudClcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZXhwZXJ0aXNlXCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCJVbmUgZm9ybWF0aW9uIG1hbmFnw6lyaWFsZSBvcHRpbWlzYW50IGxhIGdlc3Rpb24gZOKAmcOpcXVpcGUgZW4gdnVlIGRlIGxhIHByaXNlIGRlIGTDqWNpc2lvbiBhdSBuaXZlYXUgZGUgY2hhcXVlIHJlc3BvbnNhYmxlXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImh0bWxcIixcblx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIjxwIGNsYXNzPSd0aXRsZSc+Tm9zIGludGVydmVudGlvbnMgb250IHVuZSBkb3VibGUgdmlzw6llOjwvcD5cIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZXhwZXJ0aXNlXCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCJEw6l2ZWxvcHBlbWVudCBwZXJzb25uZWwgcG91ciBsZSBwb3N0dWxhbnRcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZXhwZXJ0aXNlXCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCJBbcOpbGlvcmF0aW9uIGRlIGxhIGNvbW11bmljYXRpb24gb3DDqXJhdGlvbm5lbGxlIGRlIGzigJllbnRyZXByaXNlXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaW1tZXJzaXZlXCI6IHtcblx0XHRcdFx0XCJpbWdcIjogXCIuL2ltYWdlcy9pbWctMTYwMC0xMjAwXzIuanBnXCIsXG5cdFx0XHRcdFwid1wiOiBcIjE2MDBcIixcblx0XHRcdFx0XCJoXCI6IFwiMTIwMFwiLFxuXHRcdFx0XHRcInJhdGlvXCI6IFwiMVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJjaGFwdGVyXCI6IHtcblx0XHRcdFx0XCJwYXRoXCI6IFwidHJhbnNpdGlvbi1pbW1lcnNpdmUtMlwiLFxuXHRcdFx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XHRcdFwiY2l0YXRpb25cIjoge1xuXHRcdFx0XHRcdFwiYXV0aG9yXCI6IFwiSm9oYW5uIFdvbGZnYW5nIEdPRVRIRVwiLFxuXHRcdFx0XHRcdFwidGV4dFwiOiBcIsKrwqBPbiBwZXV0IGLDonRpciBxdWVscXVlIGNob3NlIGRlIGJlYXUgYXZlYyBsZXMgcGllcnJlcyBxdWkgZW50cmF2ZW50IGxlIGNoZW1pbiDCu1wiXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiY2hhcHRlclwiOiB7XG5cdFx0XHRcdFwicGF0aFwiOiBcImV4cGVydGlzZVwiLFxuXHRcdFx0XHRcInRpdGxlXCI6IFwiRG9tYWluZXMgZCdleHBlcnRpc2VzXCIsXG5cdFx0XHRcdFwicGFyYWdyYXBoc0NvbDFcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImV4cGVydGlzZVwiLFxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiQWNjb21wYWduZW1lbnQgw6AgbGEgcmVzdHJ1Y3R1cmF0aW9uIGTigJl1bmUgRW50cmVwcmlzZSBwYXIgdW5lIGFwcHJvY2hlIHBhcnRpY2lwYXRpdmUgZ2xvYmFsZS5cIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZXhwZXJ0aXNlXCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCJGb3JtYXRpb24gZGVzIG1hbmFnZXJzIMOgIGxhIGNvbmR1aXRlIGR1IGNoYW5nZW1lbnQgaW5kdWl0IHBhciBs4oCZaW5ub3ZhdGlvbi5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0XCJwYXJhZ3JhcGhzQ29sMlwiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZXhwZXJ0aXNlXCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCJNaXNlIGVuIMWTdXZyZSBk4oCZdW5lIHBvbGl0aXF1ZSBSSCBlbiBzeW5lcmdpZSBhdmVjIGxlcyBiZXNvaW5zIHN0cmF0w6lnaXF1ZXMuXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImV4cGVydGlzZVwiLFxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiSGFybW9uaXNhdGlvbiBkZXMgZW5nYWdlbWVudHMgYXUgc2VpbiBkZXMgw6lxdWlwZXMgbWFuYWfDqXJpYWxlcy5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpbW1lcnNpdmVcIjoge1xuXHRcdFx0XHRcImltZ1wiOiBcIi4vaW1hZ2VzL2ltZy0xNjAwLTEyMDBfMS5qcGdcIixcblx0XHRcdFx0XCJ3XCI6IFwiMTYwMFwiLFxuXHRcdFx0XHRcImhcIjogXCIxMjAwXCIsXG5cdFx0XHRcdFwicmF0aW9cIjogXCIxXCJcblx0XHRcdH0sXG5cdFx0XHRcImNoYXB0ZXJcIjoge1xuXHRcdFx0XHRcInBhdGhcIjogXCJ0cmFuc2l0aW9uLWltbWVyc2l2ZS0zXCIsXG5cdFx0XHRcdFwidGl0bGVcIjogXCJcIixcblx0XHRcdFx0XCJjaXRhdGlvblwiOiB7XG5cdFx0XHRcdFx0XCJhdXRob3JcIjogXCJCZW5qYW1pbiBGcmFua2xpblwiLFxuXHRcdFx0XHRcdFwidGV4dFwiOiBcIsKrwqBMZSBib24ganVnZW1lbnQgdmllbnQgZGUgbOKAmWV4cMOpcmllbmNlIGV0IGzigJlleHDDqXJpZW5jZSB2aWVudCBkdSBtYXV2YWlzIGp1Z2VtZW50IMK7XCJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJjaGFwdGVyXCI6IHtcblx0XHRcdFx0XCJwYXRoXCI6IFwiaW50ZXJ2ZW50aW9uc1wiLFxuXHRcdFx0XHRcInRpdGxlXCI6IFwiSW50ZXJ2ZW50aW9uc1wiLFxuXHRcdFx0XHRcInBhcmFncmFwaHNDb2wxXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJodG1sXCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCI8cCBjbGFzcz0ndGl0bGUnPkRpYWdub3N0aWMgZXQgZMOpdmVsb3BwZW1lbnQgZGUgbCdlbnRyZXByaXNlOjwvcD5cIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZXhwZXJ0aXNlXCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCJDb2FjaGluZyBpbmRpdmlkdWVsIGV0IGNvbGxlY3RpZlwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJleHBlcnRpc2VcIixcblx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIkZvcm1hdGlvbiBkZXMgbWFuYWdlcnNcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0XCJwYXJhZ3JhcGhzQ29sMlwiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiaHRtbFwiLFxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiPHAgY2xhc3M9J3RpdGxlJz5NaXNlIGVuIHBsYWNlIGRlIGRpc3Bvc2l0aWZzIFIuSDo8L3A+XCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImV4cGVydGlzZVwiLFxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiT3JnYW5pZ3JhbW1lXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImV4cGVydGlzZVwiLFxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiRGVzY3JpcHRpb24gZGUgcG9zdGVcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZXhwZXJ0aXNlXCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCJFbnRyZXRpZW4gQW5udWVsIGTigJlFdmFsdWF0aW9uXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImV4cGVydGlzZVwiLFxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiVGFibGVhdXggZGUgYm9yZCBkZXMgRS5BLkVcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZXhwZXJ0aXNlXCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCJTdWl2aSBkZSBsYSBtYWl0cmlzZSBkZXMgY29tcMOpdGVuY2VzXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaW1tZXJzaXZlXCI6IHtcblx0XHRcdFx0XCJpbWdcIjogXCIuL2ltYWdlcy9pbWctMTYwMC0xMjAwXzQuanBnXCIsXG5cdFx0XHRcdFwid1wiOiBcIjE2MDBcIixcblx0XHRcdFx0XCJoXCI6IFwiMTIwMFwiLFxuXHRcdFx0XHRcInJhdGlvXCI6IFwiMVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJjaGFwdGVyXCI6IHtcblx0XHRcdFx0XCJwYXRoXCI6IFwidHJhbnNpdGlvbi1pbW1lcnNpdmUtNFwiLFxuXHRcdFx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XHRcdFwiY2l0YXRpb25cIjoge1xuXHRcdFx0XHRcdFwiYXV0aG9yXCI6IFwiUGV0ZXIgRHJ1Y2tlclwiLFxuXHRcdFx0XHRcdFwidGV4dFwiOiBcIsKrwqBDZXV4LCBxdWkgcsOpc2lzdGVudCBhdSBjaGFuZ2VtZW50LCBmaW5pc3NlbnQgcGFyIGFjY2VwdGVyLCBtYWlzIGRhbnMgbGEgZG91bGV1ciwgcXXigJlpbHMgw6l0YWllbnQgZGFucyBs4oCZZXJyZXVyIMK7XCJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJjaGFwdGVyXCI6IHtcblx0XHRcdFx0XCJwYXRoXCI6IFwiY29udGFjdFwiLFxuXHRcdFx0XHRcIm5vYW5pbWF0ZVwiOiB0cnVlLFxuXHRcdFx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XHRcdFwicGFyYWdyYXBoc0NvbDFcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImh0bWxcIixcblx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIjxpZnJhbWUgc3JjPVxcXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kLzFRd2dmU2NKTVFMam10MVRreUFrYnlvWC1NTHl1X0J1M0cxTlZOdk4zVkpzL3ZpZXdmb3JtP2VtYmVkZGVkPXRydWVcXFwiIHdpZHRoPVxcXCI1MDBcXFwiIGhlaWdodD1cXFwiNzgwXFxcIiBmcmFtZWJvcmRlcj1cXFwiMFxcXCIgbWFyZ2luaGVpZ2h0PVxcXCIwXFxcIiBtYXJnaW53aWR0aD1cXFwiMFxcXCI+Q2hhcmdlbWVudCBlbiBjb3Vycy4uLjwvaWZyYW1lPlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcInBhcmFncmFwaHNDb2wyXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJodG1sXCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCI8aDE+Q29udGFjdDwvaDE+XCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcInZjYXJkXCIsXG5cdFx0XHRcdFx0XHRcInZjYXJkXCI6IHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiBcIlNvY2nDqXTDqVwiLFxuXHRcdFx0XHRcdFx0XHRcIm9yZ1wiOiBcIkFwaXMgTGF6dWxpIENvbnN1bHRpbmdcIixcblx0XHRcdFx0XHRcdFx0XCJlbWFpbFwiOiBcIm1haWx0bzpjb250YWN0QGFwaXMtbGF6dWxpLWNvbnN1bHRpbmcuY29tXCIsXG5cdFx0XHRcdFx0XHRcdFwiYWRkcmVzc1wiOiB7XG5cdFx0XHRcdFx0XHRcdFx0XCJzdHJlZXRcIjogXCIxNCBydWUgQmVmZnJveVwiLFxuXHRcdFx0XHRcdFx0XHRcdFwibG9jYWxpdHlcIjogXCJOZXVpbGx5IHN1ciBTZWluZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFwicG9zdGFsXCI6IFwiOTIyMDBcIlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJ2Y2FyZC1wZXJzb25cIixcblx0XHRcdFx0XHRcdFwidmNhcmRcIjoge1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IFwiU29jacOpdMOpXCIsXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlBpZXJyZSBDb2Vyb2xpXCIsXG5cdFx0XHRcdFx0XHRcdFwidGl0bGVcIjogXCJDb2FjaGluZyBkZSBtYW5hZ2VtZW50XCIsXG5cdFx0XHRcdFx0XHRcdFwicGhvbmVcIjogXCIwNiA0MyAwOCA5NCA5OVwiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcImNoYXB0ZXJcIjoge1xuXHRcdFx0XHRcInBhdGhcIjogXCJzdG9yeVwiLFxuXHRcdFx0XHRcIm5vYW5pbWF0ZVwiOiB0cnVlLFxuXHRcdFx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XHRcdFwic3RvcnlcIjoge1xuXHRcdFx0XHRcdFwiaW1nXCI6IFwiLi9pbWFnZXMvZm9vdGVyLnBuZ1wiLFxuXHRcdFx0XHRcdFwiaXRlbXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJodG1sXCIsXG5cdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIjxwIGNsYXNzPSdmb290ZXInPjxiPkFwaXM8L2I+IGVzdCBsZSB0YXVyZWF1IHB1aXNzYW50IGV0IHZpZ291cmV1eCwgc3ltYm9sZSBkZSB2aWUgZXQgZGUgcmVuYWlzc2FuY2UsIGRlIGxhIGZvcmNlIGV0IGRlIGwnw6luZXJnaWUgY3LDqWF0aXZlLiBJbCBzZSByYXBwcm9jaGUgZHUgRGlldSBSw6kgY29tbWUgbCdhdHRlc3RlIGxlIGRpc3F1ZSBzb2xhaXJlIGVudHJlIHNlcyBjb3JuZXMuPC9wPlwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJodG1sXCIsXG5cdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIjxwIGNsYXNzPSdmb290ZXInPjxiPkxhcGlzIExhenVsaTwvYj4gc3ltYm9sZSBkZSBnYWlldMOpIGV0IGQnaGFybW9uaWUuPC9wPlwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJodG1sXCIsXG5cdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIjxwIGNsYXNzPSdmb290ZXInPjxiPkFwaXMgTGF6dWxpPC9iPiwgY2xpbiBkJ29laWwgZGUgQXBpcyBhdmVjIExhcGlzLUxhenVsaTogcGllcnJlIHNhY3LDqWUgw6lneXB0aWVubmUsIHN0cnVjdHVyZSBsZSBkw6l2ZWxvcHBlbWVudCBkZSBsYSB2aXNpb24gY2xhaXJ2b3lhbnRlIGVuIGxhIHJhY2NvcmRhbnQgw6AgbGEgdmllIHF1b3RpZGllbm5lLjwvcD5cIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0XCJzdHlsZUhlaWdodFwiOiA2MDBcblx0XHRcdH1cblx0XHR9XG5cdF1cbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9qc29uLWxvYWRlciEuL2NoYXB0ZXJzLXYxLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM1lYUWNhTC5zdmdcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvaW1hZ2VzL2xvZ28tYmx1ZS5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9fSGVhZGVyLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9fSGVhZGVyLnNjc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInVsLm1lbnUgbGkge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogOHB4IDBweDtcXHJcXG4gIG1hcmdpbjogMHB4IDVweDsgIFxcclxcbn1cXHJcXG5cXHJcXG5kaXYuaGVhZGVyX21lbnUge1xcclxcbiAgcG9zaXRpb246IGZpeGVkOyAgXFxyXFxuICBoZWlnaHQ6IDkwcHg7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmhlYWRlcl9tZW51IC50aXRsZSB7XFxyXFxuICBmb250LWZhbWlseTpcXFwiT3BlbiBTYW5zXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxcclxcbiAgZm9udC1zaXplOiAycmVtOyAgICBcXHJcXG4gIG1hcmdpbjogMTBweCAxOHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIHdpZHRoOiAxMDAlOyAgICBcXHJcXG4gIGJvdHRvbTogMDsgIFxcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIubWVudS1uYXYudG9nZ2xlZCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyLm1lbnUtbmF2OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTEwcHg7XFxyXFxuICByaWdodDogNnB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAuOSApO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgY29udGVudDogJyc7XFxyXFxufVxcclxcblxcclxcbmhlYWRlci5tZW51LW5hdiB1bCB7ICBcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQml0dGVyJztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDBweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIubWVudS1uYXYgdWwgbGk6bnRoLWNoaWxkKG4rMikge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgaGVpZ2h0OiA3cHg7XFxyXFxuICBib3R0b206IDE2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlci5tZW51LW5hdiB1bCBsaTpudGgtY2hpbGQoMikge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjODA4Mjg1O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgaGVpZ2h0OiA3cHg7XFxyXFxuICBib3R0b206IDE2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlci5tZW51LW5hdiA+IHVsID4gbGk6bnRoLWNoaWxkKG4rMSkgPiBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogIzU4NTg1QTtcXHJcXG4gIGJvdHRvbTogNXB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIubWVudS1uYXYgYTp2aXNpdGVkIHtcXHJcXG4gIGNvbG9yOiAjODA4Mjg1O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIubWVudS1uYXYgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzgwODI4NTtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHJlcXVpcmUoJy4vX0Zvb3Rlci5zY3NzJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH0gIFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImZvb3RlclwiPlxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgIDxMaW5rIHRvPSdtZW50aW9ucyc+TWVudGlvbnMgbMOpZ2FsZXM8L0xpbms+ICAgICAgICAgIFxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3hcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL19Gb290ZXIuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vX0Zvb3Rlci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL19Gb290ZXIuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvX0Zvb3Rlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwicC5mb290ZXIge1xcbiAgbWFyZ2luOiA1MHB4IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL19Gb290ZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dyaWQuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ncmlkLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ncmlkLmNzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9BcHAvZ3JpZC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcXFxcblxcbiAgJFRPQVNULUdSSURcXG5cXG4gIEFuIGluc2FuZSBncmlkLlxcbiAgWW91J2QgYmUgbWFkIHRvIHVzZSBpdC5cXG5cXG4gIFVzYWdlXFxuICA9PT09PVxcblxcbiAgQXNzdW1pbmcgZGVmYXVsdCB2YWx1ZXM6XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJncmlkXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3JpZF9fY29sIGdyaWRfX2NvbC0tMS1vZi0yXFxcIj5cXG4gICAgICBBIGhhbGYtd2lkdGggY29sdW1uLlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3JpZF9fY29sIGdyaWRfX2NvbC0tMS1vZi00IGdyaWRfX2NvbC0tcHVsbC0xLW9mLTRcXFwiPlxcbiAgICAgIEEgcXVhcnRlciwgcHVsbGVkIGxlZnQgYnkgaXRzIG93biB3aWR0aC4gWW91IGdldCB0aGlzLCByaWdodD9cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG5cXG5cXG4gIEN1c3RvbWlzYXRpb25cXG4gID09PT09PT09PT09PT1cXG5cXG4gICRncmlkLW5hbWVzcGFjZSBhbmQgJGdyaWQtY29sdW1uLW5hbWVzcGFjZVxcbiAgYWRqdXN0cyB0aGUgY2xhc3MgbmFtZXMgZm9yIHRoZSBncmlkLiBXaXRoXFxuICBkZWZhdWx0IHZhbHVlcywgZ3JpZCB3cmFwcGVycyBoYXZlIGEgY2xhc3NcXG4gIG9mICcuZ3JpZCcgYW5kIGNvbHVtbnMgJy5ncmlkX19jb2wnLlxcblxcbiAgJGNvbC1ncm91cHMobikgYWRqdXN0cyBjb2x1bW4gZGl2aXNpb25zLlxcbiAgRm9yIGV4YW1wbGUsICRjb2wtZ3JvdXBzKDEyKSB3aWxsIHByb2R1Y2VcXG4gIGEgMTItY29sdW1uIGdyaWQuICRjb2wtZ3JvdXBzKDMsNiw4KVxcbiAgd2lsbCBwcm9kdWNlIGEgMy0sIDYtLCBhbmQgOC1jb2x1bW4gZ3JpZC5cXG5cXG4gICRndXR0ZXItd2lkdGggaXPigJR5b3UgZ3Vlc3NlZCBpdOKAlHRoZSBndXR0ZXJcXG4gIHdpZHRoLiBBY2NlcHRzIGFueSB1bml0LlxcblxcbiAgVGhhdCdzIGl0LiBIYXZlIGZ1bi5cXG5cXG5cXFxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uZ3JpZCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4OyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLTItb2YtMiwgLmdyaWQgPiAuZ3JpZF9fY29sLS0zLW9mLTMsIC5ncmlkID4gLmdyaWRfX2NvbC0tNC1vZi00LCAuZ3JpZCA+IC5ncmlkX19jb2wtLTUtb2YtNSwgLmdyaWQgPiAuZ3JpZF9fY29sLS02LW9mLTYsIC5ncmlkID4gLmdyaWRfX2NvbC0tOC1vZi04LCAuZ3JpZCA+IC5ncmlkX19jb2wtLTEyLW9mLTEyIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tMS1vZi0yLCAuZ3JpZCA+IC5ncmlkX19jb2wtLTItb2YtNCwgLmdyaWQgPiAuZ3JpZF9fY29sLS0zLW9mLTYsIC5ncmlkID4gLmdyaWRfX2NvbC0tNC1vZi04LCAuZ3JpZCA+IC5ncmlkX19jb2wtLTYtb2YtMTIge1xcbiAgICB3aWR0aDogNTAlOyB9XFxuICAvKi5ncmlkID4gLmdyaWRfX2NvbC0tMS1vZi0zLCAuZ3JpZCA+IC5ncmlkX19jb2wtLTItb2YtNiwgLmdyaWQgPiAuZ3JpZF9fY29sLS00LW9mLTEyIHtcXG4gICAgd2lkdGg6IDMzLjMzMzMzJTsgfSovXFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLTEtb2YtMywgLmdyaWQgPiAuZ3JpZF9fY29sLS0yLW9mLTYsIC5ncmlkID4gLmdyaWRfX2NvbC0tNC1vZi0xMiB7XFxuICAgIHdpZHRoOiAzMyU7IH0gIFxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS0yLW9mLTMsIC5ncmlkID4gLmdyaWRfX2NvbC0tNC1vZi02LCAuZ3JpZCA+IC5ncmlkX19jb2wtLTgtb2YtMTIge1xcbiAgICB3aWR0aDogNjYuNjY2NjclOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLTEtb2YtNCwgLmdyaWQgPiAuZ3JpZF9fY29sLS0yLW9mLTgsIC5ncmlkID4gLmdyaWRfX2NvbC0tMy1vZi0xMiB7XFxuICAgIHdpZHRoOiAyNSU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tMy1vZi00LCAuZ3JpZCA+IC5ncmlkX19jb2wtLTYtb2YtOCwgLmdyaWQgPiAuZ3JpZF9fY29sLS05LW9mLTEyIHtcXG4gICAgd2lkdGg6IDc1JTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTItb2YtMiwgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTMtb2YtMywgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTQtb2YtNCwgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTUtb2YtNSwgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTYtb2YtNiwgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTgtb2YtOCwgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTEyLW9mLTEyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVzaC0xLW9mLTIsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVzaC0yLW9mLTQsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVzaC0zLW9mLTYsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVzaC00LW9mLTgsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVzaC02LW9mLTEyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTEtb2YtMywgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTItb2YtNiwgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTQtb2YtMTIge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1c2gtMi1vZi0zLCAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1c2gtNC1vZi02LCAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1c2gtOC1vZi0xMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVzaC0xLW9mLTQsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVzaC0yLW9mLTgsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVzaC0zLW9mLTEyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTMtb2YtNCwgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTYtb2YtOCwgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTktb2YtMTIge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1bGwtMi1vZi0yLCAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1bGwtMy1vZi0zLCAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1bGwtNC1vZi00LCAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1bGwtNS1vZi01LCAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1bGwtNi1vZi02LCAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1bGwtOC1vZi04LCAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1bGwtMTItb2YtMTIge1xcbiAgICBtYXJnaW4tbGVmdDogLTEwMCU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC0xLW9mLTIsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC0yLW9mLTQsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC0zLW9mLTYsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC00LW9mLTgsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC02LW9mLTEyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC01MCU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC0xLW9mLTMsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC0yLW9mLTYsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC00LW9mLTEyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0zMy4zMzMzMyU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC0yLW9mLTMsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC00LW9mLTYsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC04LW9mLTEyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC02Ni42NjY2NyU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC0xLW9mLTQsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC0yLW9mLTgsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC0zLW9mLTEyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yNSU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC0zLW9mLTQsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC02LW9mLTgsIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC05LW9mLTEyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC03NSU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tMS1vZi01IHtcXG4gICAgd2lkdGg6IDIwJTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTEtb2YtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC0xLW9mLTUge1xcbiAgICBtYXJnaW4tbGVmdDogLTIwJTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS0yLW9mLTUge1xcbiAgICB3aWR0aDogNDAlOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1c2gtMi1vZi01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdWxsLTItb2YtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNDAlOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLTMtb2YtNSB7XFxuICAgIHdpZHRoOiA2MCU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVzaC0zLW9mLTUge1xcbiAgICBtYXJnaW4tbGVmdDogNjAlOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1bGwtMy1vZi01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IC02MCU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tNC1vZi01IHtcXG4gICAgd2lkdGg6IDgwJTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTQtb2YtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4MCU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC00LW9mLTUge1xcbiAgICBtYXJnaW4tbGVmdDogLTgwJTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS0xLW9mLTYge1xcbiAgICB3aWR0aDogMTYuNjY2NjclOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1c2gtMS1vZi02IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdWxsLTEtb2YtNiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTYuNjY2NjclOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLTUtb2YtNiB7XFxuICAgIHdpZHRoOiA4My4zMzMzMyU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVzaC01LW9mLTYge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMlOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1bGwtNS1vZi02IHtcXG4gICAgbWFyZ2luLWxlZnQ6IC04My4zMzMzMyU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tMS1vZi04IHtcXG4gICAgd2lkdGg6IDEyLjUlOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1c2gtMS1vZi04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEyLjUlOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1bGwtMS1vZi04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMi41JTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS0zLW9mLTgge1xcbiAgICB3aWR0aDogMzcuNSU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVzaC0zLW9mLTgge1xcbiAgICBtYXJnaW4tbGVmdDogMzcuNSU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC0zLW9mLTgge1xcbiAgICBtYXJnaW4tbGVmdDogLTM3LjUlOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLTUtb2YtOCB7XFxuICAgIHdpZHRoOiA2Mi41JTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTUtb2YtOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Mi41JTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdWxsLTUtb2YtOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNjIuNSU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tNy1vZi04IHtcXG4gICAgd2lkdGg6IDg3LjUlOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1c2gtNy1vZi04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDg3LjUlOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1bGwtNy1vZi04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IC04Ny41JTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS0xLW9mLTEyIHtcXG4gICAgd2lkdGg6IDguMzMzMzMlOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1c2gtMS1vZi0xMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdWxsLTEtb2YtMTIge1xcbiAgICBtYXJnaW4tbGVmdDogLTguMzMzMzMlOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLTItb2YtMTIge1xcbiAgICB3aWR0aDogMTYuNjY2NjclOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1c2gtMi1vZi0xMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVsbC0yLW9mLTEyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xNi42NjY2NyU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tNS1vZi0xMiB7XFxuICAgIHdpZHRoOiA0MS42NjY2NyU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tcHVzaC01LW9mLTEyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdWxsLTUtb2YtMTIge1xcbiAgICBtYXJnaW4tbGVmdDogLTQxLjY2NjY3JTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS03LW9mLTEyIHtcXG4gICAgd2lkdGg6IDU4LjMzMzMzJTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTctb2YtMTIge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMlOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1bGwtNy1vZi0xMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNTguMzMzMzMlOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLTEwLW9mLTEyIHtcXG4gICAgd2lkdGg6IDgzLjMzMzMzJTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdXNoLTEwLW9mLTEyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTsgfVxcbiAgLmdyaWQgPiAuZ3JpZF9fY29sLS1wdWxsLTEwLW9mLTEyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC04My4zMzMzMyU7IH1cXG4gIC5ncmlkID4gLmdyaWRfX2NvbC0tMTEtb2YtMTIge1xcbiAgICB3aWR0aDogOTEuNjY2NjclOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1c2gtMTEtb2YtMTIge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjclOyB9XFxuICAuZ3JpZCA+IC5ncmlkX19jb2wtLXB1bGwtMTEtb2YtMTIge1xcbiAgICBtYXJnaW4tbGVmdDogLTkxLjY2NjY3JTsgfVxcbiAgLmdyaWQgLmdyaWRfX2NvbCB7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi1yaWdodDogLS4yNWVtO1xcbiAgICBtaW4taGVpZ2h0OiAxcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgfVxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICAgICAuZ3JpZCAuZ3JpZF9fY29sIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgICB3aWR0aDogYXV0bzsgfSB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkgYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxuICAgICAgLmdyaWQgLmdyaWRfX2NvbFtjbGFzcyo9XFxcImdyaWRfX2NvbC0tbS1cXFwiXSB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0uMjRlbTsgfVxcbiAgICAgIC5ncmlkIC5ncmlkX19jb2wuZ3JpZF9fY29sLS1tLTEtb2YtMiwgLmdyaWQgLmdyaWRfX2NvbC5ncmlkX19jb2wtLW0tMi1vZi00IHtcXG4gICAgICAgIHdpZHRoOiA1MCU7IH1cXG4gICAgICAuZ3JpZCAuZ3JpZF9fY29sLmdyaWRfX2NvbC0tbS0xLW9mLTMge1xcbiAgICAgICAgd2lkdGg6IDMzLjMzMzMzJTsgfVxcbiAgICAgIC5ncmlkIC5ncmlkX19jb2wuZ3JpZF9fY29sLS1tLTItb2YtMyB7XFxuICAgICAgICB3aWR0aDogNjYuNjY2NjclOyB9XFxuICAgICAgLmdyaWQgLmdyaWRfX2NvbC5ncmlkX19jb2wtLW0tMS1vZi00IHtcXG4gICAgICAgIHdpZHRoOiAyNSU7IH1cXG4gICAgICAuZ3JpZCAuZ3JpZF9fY29sLmdyaWRfX2NvbC0tbS0zLW9mLTQge1xcbiAgICAgICAgd2lkdGg6IDc1JTsgfSB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgICAgIC5ncmlkIC5ncmlkX19jb2xbY2xhc3MqPVxcXCJncmlkX19jb2wtLXMtXFxcIl0ge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtLjI0ZW07IH1cXG4gICAgICAuZ3JpZCAuZ3JpZF9fY29sLmdyaWRfX2NvbC0tcy0xLW9mLTIsIC5ncmlkIC5ncmlkX19jb2wuZ3JpZF9fY29sLS1zLTItb2YtNCB7XFxuICAgICAgICB3aWR0aDogNTAlOyB9XFxuICAgICAgLmdyaWQgLmdyaWRfX2NvbC5ncmlkX19jb2wtLXMtMS1vZi0zIHtcXG4gICAgICAgIHdpZHRoOiAzMy4zMzMzMyU7IH1cXG4gICAgICAuZ3JpZCAuZ3JpZF9fY29sLmdyaWRfX2NvbC0tcy0yLW9mLTMge1xcbiAgICAgICAgd2lkdGg6IDY2LjY2NjY3JTsgfVxcbiAgICAgIC5ncmlkIC5ncmlkX19jb2wuZ3JpZF9fY29sLS1zLTEtb2YtNCB7XFxuICAgICAgICB3aWR0aDogMjUlOyB9XFxuICAgICAgLmdyaWQgLmdyaWRfX2NvbC5ncmlkX19jb2wtLXMtMy1vZi00IHtcXG4gICAgICAgIHdpZHRoOiA3NSU7IH0gfVxcbiAgLmdyaWQgLmdyaWRfX2NvbC0tY2VudGVyZWQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgfVxcbiAgLmdyaWQgLmdyaWRfX2NvbC0tZC1maXJzdCB7XFxuICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAuZ3JpZCAuZ3JpZF9fY29sLS1kLWxhc3Qge1xcbiAgICBmbG9hdDogcmlnaHQ7IH1cXG4gIC5ncmlkLmdyaWQtLW5vLWd1dHRlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgICAuZ3JpZC5ncmlkLS1uby1ndXR0ZXIgLmdyaWRfX2NvbCB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuICAgIC5ncmlkLmdyaWQtLW5vLWd1dHRlciAuZ3JpZF9fY29sLS1zcGFuLWFsbCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5ncmlkIC5ncmlkX19jb2wtLWFiIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgfVxcbiAgLmdyaWQgLmdyaWRfX2NvbC0tYW0ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9Z3JpZC5jc3MubWFwICovXFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvQXBwL2dyaWQuY3NzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb24uaWNvXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maWxlLWxvYWRlcj9uYW1lPWZhdmljb24uaWNvIS4vYXBwL2ltYWdlcy9mYXZpY29uLmljb1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKmVzbGludC1kaXNhYmxlICovXG5cbihmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXT1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIChpW3JdLnE9aVtyXS5xfHxbXSkucHVzaChhcmd1bWVudHMpfSxpW3JdLmw9MSpuZXcgRGF0ZSgpO2E9cy5jcmVhdGVFbGVtZW50KG8pLFxuICAgICAgICAgICAgbT1zLmdldEVsZW1lbnRzQnlUYWdOYW1lKG8pWzBdO2EuYXN5bmM9MTthLnNyYz1nO20ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSxtKVxuICAgICAgICAgICAgfSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCcvL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdnYScpO1xuXG4gICAgICAgICAgICBnYSgnY3JlYXRlJywgJ1VBLTQ1ODk1MTU3LTIwJywgJ2F1dG8nKTtcbiAgICAgICAgICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9BcHAvZ29vZ2xlLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZSc7XG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vU2VjdGlvbnMnO1xuXG5mdW5jdGlvbiBnZXREYXRhU3RhdGUoKSB7XG4gIHJldHVybiB7ICAgIFxuICAgIGpzb246IEFwcFN0b3JlLmdldFN0YXRlKCkuanNvblxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IGdldERhdGFTdGF0ZSgpOyAgICBcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIEFwcFN0b3JlLmxpc3Rlbih0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgQXBwU3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKCAgICAgIFxuICAgICAgPFNlY3Rpb25zIC8+ICAgICAgXG4gICAgKTtcbiAgfVxuXG4gIF9vbkNsaWNrKCkge1xuICAgIEFwcEFjdGlvbnMuZmV0Y2goKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoZ2V0RGF0YVN0YXRlKCkpO1xuICB9XG5cbn07XG5cbkhvbWVTZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9IFwiSG9tZVNlY3Rpb25cIjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb24uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZSc7XG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xuXG5pbXBvcnQgU2VjdGlvbkxvZ28gZnJvbSAnLi9TZWN0aW9uTG9nbyc7XG5pbXBvcnQgU2VjdGlvblBhcmFncmFwaCBmcm9tICcuL1NlY3Rpb25QYXJhZ3JhcGgnO1xuaW1wb3J0IFNlY3Rpb25QYXJhZ3JhcGhCdXR0b24gZnJvbSAnLi9TZWN0aW9uUGFyYWdyYXBoQnV0dG9uJztcbmltcG9ydCBTZWN0aW9uUGFyYWdyYXBoQ2l0YXRpb24gZnJvbSAnLi9TZWN0aW9uUGFyYWdyYXBoQ2l0YXRpb24nO1xuaW1wb3J0IFNlY3Rpb25TdG9yeSBmcm9tICcuL1NlY3Rpb25TdG9yeSc7XG5cbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHJlcXVpcmUoJy4vX1NlY3Rpb24uc2NzcycpO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhU3RhdGUoKSB7XG4gIHJldHVybiB7XG4gICAganNvbjogQXBwU3RvcmUuZ2V0U3RhdGUoKS5qc29uLFxuICAgIGhlaWdodDogMFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IGdldERhdGFTdGF0ZSgpOyAgICBcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aGVpZ2h0OiBzY3JlZW4uaGVpZ2h0fSk7XG4gICAgICAvLyQoXCIjYXBwXCIpLmZhZGVJbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cblxuICBfbGlnaHRCdXR0b25PdmVyKGluZGV4LCBwYXRoSWQpIHtcbiAgICB2YXIgZG9tRWx0ID0gJCgnIycgKyBwYXRoSWQgKyAnIC5zdG9yeScpO1xuICAgIHZhciBkb21FbHRDaXRhdGlvbiA9ICQoJyMnICsgcGF0aElkICsgJyAuc3RvcnkgLmNpdGF0aW9uJyk7XG4gICAgdmFyIGRvbUVsdEJ1dHRvbnMgPSAkKCcuZmEuZmEtbGlnaHRidWxiLW8nKTtcbiAgICB2YXIgZG9tRWx0TG9nbyA9ICQoJy5sb2dvLXdoaXRlJyk7XG4gICAgXG4gICAgZG9tRWx0TG9nby5oaWRlKCk7XG4gICAgZG9tRWx0Q2l0YXRpb24uaGlkZSgpO1xuICAgIGRvbUVsdC5hZGRDbGFzcygnZmFkZU91dExlZnQnKTtcbiAgICBkb21FbHQucmVtb3ZlQ2xhc3MoJ2ZhZGVJbkxlZnQnKTtcbiAgICBkb21FbHRCdXR0b25zLmFkZENsYXNzKCdob3ZlcicpO1xuICB9XG4gIFxuICBfbGlnaHRCdXR0b25PdXQoaW5kZXgsIHBhdGhJZCkge1xuICAgIHZhciBkb21FbHQgPSAkKCcjJyArIHBhdGhJZCArICcgLnN0b3J5Jyk7ICAgIFxuICAgIHZhciBkb21FbHRDaXRhdGlvbiA9ICQoJyMnICsgcGF0aElkICsgJyAuc3RvcnkgLmNpdGF0aW9uJyk7XG4gICAgdmFyIGRvbUVsdEJ1dHRvbnMgPSAkKCcuZmEuZmEtYWRqdXN0Jyk7XG4gICAgdmFyIGRvbUVsdExvZ28gPSAkKCcubG9nby13aGl0ZScpO1xuICAgIGRvbUVsdExvZ28uc2hvdygpO1xuICAgIGRvbUVsdENpdGF0aW9uLnNob3coKTtcbiAgICBkb21FbHQuYWRkQ2xhc3MoJ2ZhZGVJbkxlZnQnKTtcbiAgICBkb21FbHQucmVtb3ZlQ2xhc3MoJ2ZhZGVPdXRMZWZ0Jyk7XG4gICAgZG9tRWx0QnV0dG9ucy5yZW1vdmVDbGFzcygnaG92ZXInKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciBzZWxmID0gdGhpczsgICAgICBcbiAgICAgIHZhciBzZWN0aW9uSGVpZ2h0ID0ge1xuICAgICAgICBoZWlnaHQgOiB0aGlzLnN0YXRlLmhlaWdodCA/IHRoaXMuc3RhdGUuaGVpZ2h0IDogMFxuICAgICAgfTsgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgIHZhciBjaGFwdGVyc05vZGVzID0gdGhpcy5zdGF0ZS5qc29uLnNlY3Rpb25zLm1hcChmdW5jdGlvbihzZWN0aW9uLCBpbmRleCkgeyAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICBpZiAoc2VjdGlvbi5jaGFwdGVyKSB7XG4gICAgICAgICAgbGV0IGhvbWVDc3MgPSBpbmRleCA9PT0gMCA/ICcnIDogJycsXG4gICAgICAgICAgICAgIGxvZ29NYXJrdXAgPSBpbmRleCA9PT0gMCA/IDxTZWN0aW9uTG9nbyAvPiA6ICcnLFxuICAgICAgICAgICAgICBoZWlnaHQgPSBzZWN0aW9uLmltbWVyc2l2ZSA/IHNlY3Rpb25IZWlnaHQgOiB7aGVpZ2h0Ojc1MH0sXG4gICAgICAgICAgICAgIGxpZ2h0QnV0dG9uID0gJycsXG4gICAgICAgICAgICAgIHBhcmFsbGF4SW1hZ2UgPSAnJyxcbiAgICAgICAgICAgICAgY2hhcHRlckNsYXNzID0gc2VjdGlvbi5pbW1lcnNpdmUgPyAnJzogJ2NoYXB0ZXItd2hpdGUgYW5pbWF0ZWQnLFxuICAgICAgICAgICAgICBwYXJhQ3NzID0gc2VjdGlvbi5jaGFwdGVyLnBhcmFncmFwaHNDb2wxID8gJ2dyaWQgcGFyYWdyYXBoJyA6ICcnLFxuICAgICAgICAgICAgICB0aXRsZU1hcmt1cCA9IHNlY3Rpb24uY2hhcHRlci50aXRsZSA/IDxoMT57c2VjdGlvbi5jaGFwdGVyLnRpdGxlfTwvaDE+IDogJycsXG4gICAgICAgICAgICAgIHN0b3J5ID0gc2VjdGlvbi5jaGFwdGVyLnN0b3J5ID8gPFNlY3Rpb25TdG9yeSBzdG9yeT17c2VjdGlvbi5jaGFwdGVyLnN0b3J5fSAvPiA6ICcnLFxuICAgICAgICAgICAgICBwYXJhTWFya3VwMSA9IHNlY3Rpb24uY2hhcHRlci5wYXJhZ3JhcGhzQ29sMSA/IDxTZWN0aW9uUGFyYWdyYXBoIHBhcmFncmFwaHM9e3NlY3Rpb24uY2hhcHRlci5wYXJhZ3JhcGhzQ29sMX0+PC9TZWN0aW9uUGFyYWdyYXBoPiA6ICcnLFxuICAgICAgICAgICAgICBwYXJhTWFya3VwMiA9IHNlY3Rpb24uY2hhcHRlci5wYXJhZ3JhcGhzQ29sMSA/IDxTZWN0aW9uUGFyYWdyYXBoIHBhcmFncmFwaHM9e3NlY3Rpb24uY2hhcHRlci5wYXJhZ3JhcGhzQ29sMn0+PC9TZWN0aW9uUGFyYWdyYXBoPiA6ICcnO1xuXG4gICAgICAgICAgaWYgKHNlY3Rpb24uaW1tZXJzaXZlKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgaW1nU2VjdGlvbiA9IHJlcXVpcmUoJycrc2VjdGlvbi5pbW1lcnNpdmUuaW1nKSxcbiAgICAgICAgICAgICAgICBwYXJhbGxheFN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3VybCgnK2ltZ1NlY3Rpb24rJykgNTAlIDAgbm8tcmVwZWF0IGZpeGVkJyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwYXJhbGxheEltYWdlID0gPGRpdiBkYXRhLWZpdD1cIjUwMFwiIHN0eWxlPXtwYXJhbGxheFN0eWxlfSBjbGFzc05hbWU9XCJcIj48L2Rpdj4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxpZ2h0QnV0dG9uID0gPFNlY3Rpb25QYXJhZ3JhcGhCdXR0b24gb25MaWdodEJ1dHRvbk92ZXI9e3NlbGYuX2xpZ2h0QnV0dG9uT3Zlci5iaW5kKHRoaXMsIGluZGV4LCBzZWN0aW9uLmNoYXB0ZXIucGF0aCl9IG9uTGlnaHRCdXR0b25PdXQ9e3NlbGYuX2xpZ2h0QnV0dG9uT3V0LmJpbmQodGhpcywgaW5kZXgsIHNlY3Rpb24uY2hhcHRlci5wYXRoKX0gLz5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24ga2V5PXtzZWN0aW9uLmNoYXB0ZXIucGF0aH0gY2xhc3NOYW1lPXtob21lQ3NzfSBpZD17c2VjdGlvbi5jaGFwdGVyLnBhdGh9IHN0eWxlPXtoZWlnaHR9PlxuICAgICAgICAgICAgICB7bGlnaHRCdXR0b259XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnkgYW5pbWF0ZWRcIiBzdHlsZT17aGVpZ2h0fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXB0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2hhcHRlckNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcHRlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZU1hcmt1cH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ29NYXJrdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25QYXJhZ3JhcGhDaXRhdGlvbiBjaXRhdGlvbj17c2VjdGlvbi5jaGFwdGVyLmNpdGF0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGFyYUNzc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19jb2wgZ3JpZF9fY29sLS0xLW9mLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcmFNYXJrdXAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fY29sIGdyaWRfX2NvbC0tMS1vZi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJhTWFya3VwMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtwYXJhbGxheEltYWdlfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3QuRE9NLmRpdigpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gUmVhY3QuRE9NLmRpdih7fSwgY2hhcHRlcnNOb2Rlcyk7XG4gIH1cbn07XG5cblNlY3Rpb25zLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9IFwiU2VjdGlvbnNcIjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vU2VjdGlvbnMuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbkxvZ28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpOyAgICBcbiAgfSAgXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBsb2dvID0gcmVxdWlyZSgnLi9pbWFnZXMvbG9nby1ibGFuYy5zdmcnKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXdoaXRlXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjYWNjdWVpbFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBoZWlnaHQ9XCIyMDBweFwiIGNsYXNzTmFtZT1cImxvZ28taG9tZSBhbmltYXRlZCBib3VuY2VcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0gIFxuXG59O1xuXG5TZWN0aW9uTG9nby5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSBcIlNlY3Rpb25Mb2dvXCI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL1NlY3Rpb25Mb2dvLmpzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIk1WelFUbkkuc3ZnXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vaW1hZ2VzL2xvZ28tYmxhbmMuc3ZnXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBcHBTdG9yZSBmcm9tICcuLi8uLi9zdG9yZXMvQXBwU3RvcmUnO1xuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcbmltcG9ydCBTZWN0aW9ucyBmcm9tICcuL1NlY3Rpb25zJztcblxuZnVuY3Rpb24gZ2V0RGF0YVN0YXRlKCkge1xuICByZXR1cm4geyAgICBcbiAgICBqc29uOiBBcHBTdG9yZS5nZXRTdGF0ZSgpLmpzb25cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvblBhcmFncmFwaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IGdldERhdGFTdGF0ZSgpOyAgICBcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIFxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHBhcmFncmFwaE5vZGVzID0gXCJcIjtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHRoaXMucHJvcHMucGFyYWdyYXBocykge1xuICAgICAgcGFyYWdyYXBoTm9kZXMgPSB0aGlzLnByb3BzLnBhcmFncmFwaHMubWFwKGZ1bmN0aW9uKHBhcmFncmFwaCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIHBhcmFncmFwaE1hcmt1cCA9IFwiXCI7XG4gICAgICAgIHZhciBwYXJhZ3JhcGhLZXkgPSAncGFyYScraW5kZXg7XG4gICAgICAgIHZhciBwYXJhZ3JhcGhTdHlsZSA9IGluZGV4ID09PSAwID8ge21hcmdpblRvcDogMH0gOiB7fTtcbiAgICAgICAgcGFyYWdyYXBoU3R5bGUgPSBpbmRleCA9PT0gc2VsZi5wcm9wcy5wYXJhZ3JhcGhzLmxlbmd0aCAtIDEgPyB7bWFyZ2luQm90dG9tOiAwfSA6IHBhcmFncmFwaFN0eWxlO1xuICAgICAgICBpZiAoc2VsZi5wcm9wcy5yaWdodCkge1xuICAgICAgICAgIHBhcmFncmFwaFN0eWxlWydtYXJnaW5SaWdodCddID0gMjA7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYWdyYXBoID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHN3aXRjaCAocGFyYWdyYXBoLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ZjYXJkJzpcbiAgICAgICAgICAgIHBhcmFncmFwaE1hcmt1cCA9IDxkaXYga2V5PXtwYXJhZ3JhcGhLZXl9IGlkPXtwYXJhZ3JhcGgudmNhcmQuaWR9IGNsYXNzTmFtZT1cInZjYXJkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JnXCI+PGI+e3BhcmFncmFwaC52Y2FyZC5vcmd9PC9iPjwvZGl2PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJlbWFpbFwiIGhyZWY9e3BhcmFncmFwaC52Y2FyZC5lbWFpbH0+Y29udGFjdEBhcGlzLWxhenVsaS1jb25zdWx0aW5nLmZyPC9hPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cmVldC1hZGRyZXNzXCI+e3BhcmFncmFwaC52Y2FyZC5hZGRyZXNzLnN0cmVldH08L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9jYWxpdHlcIj57cGFyYWdyYXBoLnZjYXJkLmFkZHJlc3MubG9jYWxpdHl9PC9zcGFuPiwgPHNwYW4gY2xhc3NOYW1lPVwicG9zdGFsLWNvZGVcIj57cGFyYWdyYXBoLnZjYXJkLmFkZHJlc3MucG9zdGFsfTwvc3Bhbj5cbiAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndmNhcmQtcGVyc29uJzpcbiAgICAgICAgICAgIHBhcmFncmFwaE1hcmt1cCA9IDxkaXYga2V5PXtwYXJhZ3JhcGhLZXl9IGlkPXtwYXJhZ3JhcGgudmNhcmQuaWR9IGNsYXNzTmFtZT1cInZjYXJkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPjxiPntwYXJhZ3JhcGgudmNhcmQubmFtZX08L2I+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57cGFyYWdyYXBoLnZjYXJkLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlbFwiPntwYXJhZ3JhcGgudmNhcmQucGhvbmV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaHRtbCc6XG4gICAgICAgICAgICAgIHBhcmFncmFwaE1hcmt1cCA9IDxkaXYga2V5PXtwYXJhZ3JhcGhLZXl9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwYXJhZ3JhcGgudGV4dH19PjwvZGl2PlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdodG1sLXBhcmFncmFwaCc6XG4gICAgICAgICAgICAgIHBhcmFncmFwaE1hcmt1cCA9IDxwIGtleT17cGFyYWdyYXBoS2V5fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcGFyYWdyYXBoLnRleHR9fT48L3A+XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHBhcmFncmFwaE1hcmt1cCA9IDxkaXYga2V5PXtwYXJhZ3JhcGhLZXl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdGFuZ2xlIGNvbG9yLTJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3BhcmFncmFwaC50eXBlfT57cGFyYWdyYXBoLnRleHR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhZ3JhcGhNYXJrdXAgPSA8cCBzdHlsZT17cGFyYWdyYXBoU3R5bGV9IGtleT17cGFyYWdyYXBoS2V5fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcGFyYWdyYXBofX0+PC9wPlxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LkRPTS5kaXYoe2tleTogcGFyYWdyYXBoS2V5fSwgcGFyYWdyYXBoTWFya3VwKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5ET00uZGl2KHtjbGFzc05hbWU6J2NoYXB0ZXItcGFyYWdyYXBoJ30sIHBhcmFncmFwaE5vZGVzKTtcbiAgfVxuXG59O1xuXG5TZWN0aW9uUGFyYWdyYXBoLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9IFwiU2VjdGlvblBhcmFncmFwaFwiO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9TZWN0aW9uUGFyYWdyYXBoLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb25QYXJhZ3JhcGhCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgX21vdXNlT3ZlcihldnQpIHtcbiAgICB0aGlzLnByb3BzLm9uTGlnaHRCdXR0b25PdmVyKCk7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBfbW91c2VPdXQoZXZ0KSB7XG4gICAgdGhpcy5wcm9wcy5vbkxpZ2h0QnV0dG9uT3V0KCk7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFrZS1sYW1wXCIgb25Nb3VzZUVudGVyPXt0aGlzLl9tb3VzZU92ZXIuYmluZCh0aGlzKX0gb25Nb3VzZUxlYXZlPXt0aGlzLl9tb3VzZU91dC5iaW5kKHRoaXMpfT5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbGlnaHRidWxiLW8gZmEtM3ggZmEtaW52ZXJzZSBhbmltYXRlZCBib3VuY2VcIj48L2k+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn07XG5cblNlY3Rpb25QYXJhZ3JhcGhCdXR0b24ucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gXCJTZWN0aW9uUGFyYWdyYXBoQnV0dG9uXCI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL1NlY3Rpb25QYXJhZ3JhcGhCdXR0b24uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uUGFyYWdyYXBoQ2l0YXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9ICBcblxuICByZW5kZXIoKSB7XG4gICAgdmFyIGNpdGF0aW9uTWFya3VwID0gXCJcIiAgICBcbiAgICBpZiAodGhpcy5wcm9wcy5jaXRhdGlvbikge1xuICAgICAgdmFyIGNpdGF0aW9uQWRkQ2xhc3MgPSB0aGlzLnByb3BzLmNpdGF0aW9uLmNsYXNzID8gdGhpcy5wcm9wcy5jaXRhdGlvbi5jbGFzcyA6ICcnO1xuICAgICAgdmFyIGNpdGF0aW9uQ2xhc3NuYW1lID0gXCJjaXRhdGlvbiBcIiArIGNpdGF0aW9uQWRkQ2xhc3M7XG4gICAgICBjaXRhdGlvbk1hcmt1cCA9ICAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjaXRhdGlvbkNsYXNzbmFtZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e3RoaXMucHJvcHMuY2l0YXRpb24udGV4dH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yXCI+e3RoaXMucHJvcHMuY2l0YXRpb24uYXV0aG9yfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBjaXRhdGlvbk1hcmt1cCA9IDxkaXY+PC9kaXY+XG4gICAgfSAgIFxuICAgIHJldHVybiBSZWFjdC5ET00uZGl2KHt9LCBjaXRhdGlvbk1hcmt1cCk7XG4gIH1cblxufTtcblxuU2VjdGlvblBhcmFncmFwaENpdGF0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9IFwiU2VjdGlvblBhcmFncmFwaENpdGF0aW9uXCI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL1NlY3Rpb25QYXJhZ3JhcGhDaXRhdGlvbi5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uU3RvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpOyAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaW1nID0gcmVxdWlyZSgnJyt0aGlzLnByb3BzLnN0b3J5LmltZyksXG4gICAgICAgIGNvbHVtbjEgPSB0aGlzLnByb3BzLnN0b3J5Lml0ZW1zWzBdLnRleHQsXG4gICAgICAgIGNvbHVtbjIgPSB0aGlzLnByb3BzLnN0b3J5Lml0ZW1zWzFdLnRleHQsXG4gICAgICAgIGNvbHVtbjMgPSB0aGlzLnByb3BzLnN0b3J5Lml0ZW1zWzJdLnRleHQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+ICAgICAgICBcbiAgICAgICAgPGltZyBzcmM9e2ltZ30gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19jb2wgZ3JpZF9fY29sLS0xLW9mLTNcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29sdW1uMX19PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fY29sIGdyaWRfX2NvbC0tMS1vZi0zXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvbHVtbjJ9fT4gICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19jb2wgZ3JpZF9fY29sLS0xLW9mLTNcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29sdW1uM319PiAgICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufTtcblxuU2VjdGlvblN0b3J5LnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9IFwiU2VjdGlvblN0b3J5XCI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL1NlY3Rpb25TdG9yeS5qc3hcbiAqKi8iLCJ2YXIgbWFwID0ge1xuXHRcIi4vSG9tZVNlY3Rpb25cIjogMzYsXG5cdFwiLi9Ib21lU2VjdGlvbi5qc3hcIjogMzYsXG5cdFwiLi9TZWN0aW9uTG9nb1wiOiAzOCxcblx0XCIuL1NlY3Rpb25Mb2dvLmpzeFwiOiAzOCxcblx0XCIuL1NlY3Rpb25QYXJhZ3JhcGhcIjogNDAsXG5cdFwiLi9TZWN0aW9uUGFyYWdyYXBoLmpzeFwiOiA0MCxcblx0XCIuL1NlY3Rpb25QYXJhZ3JhcGhCdXR0b25cIjogNDEsXG5cdFwiLi9TZWN0aW9uUGFyYWdyYXBoQnV0dG9uLmpzeFwiOiA0MSxcblx0XCIuL1NlY3Rpb25QYXJhZ3JhcGhDaXRhdGlvblwiOiA0Mixcblx0XCIuL1NlY3Rpb25QYXJhZ3JhcGhDaXRhdGlvbi5qc3hcIjogNDIsXG5cdFwiLi9TZWN0aW9uU3RvcnlcIjogNDMsXG5cdFwiLi9TZWN0aW9uU3RvcnkuanN4XCI6IDQzLFxuXHRcIi4vU2VjdGlvbnNcIjogMzcsXG5cdFwiLi9TZWN0aW9ucy5qc3hcIjogMzcsXG5cdFwiLi9fU2VjdGlvbi5zY3NzXCI6IDQ1LFxuXHRcIi4vaW1hZ2VzL2Zvb3Rlci5wbmdcIjogNDcsXG5cdFwiLi9pbWFnZXMvaW1nLTE2MDAtMTIwMF8xLmpwZ1wiOiA0OCxcblx0XCIuL2ltYWdlcy9pbWctMTYwMC0xMjAwXzIuanBnXCI6IDQ5LFxuXHRcIi4vaW1hZ2VzL2ltZy0xNjAwLTEyMDBfMy5qcGdcIjogNTAsXG5cdFwiLi9pbWFnZXMvaW1nLTE2MDAtMTIwMF80LmpwZ1wiOiA1MSxcblx0XCIuL2ltYWdlcy9pbWctMTYwMC0xMjAwXzUuanBnXCI6IDUyLFxuXHRcIi4vaW1hZ2VzL2xvZ28tYmxhbmMuc3ZnXCI6IDM5XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDQ0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uIF4uKiRcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9fU2VjdGlvbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9fU2VjdGlvbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL19TZWN0aW9uLnNjc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vX1NlY3Rpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNhcHAge1xcbiAgLy9kaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY29udGFjdCBoMSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgbGVmdDogMTI1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbnAudGl0bGUge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGNvbG9yOiAjMTczNjc2O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3b3JkLXNwYWNpbmc6IDBweDsgIFxcbiAgbGV0dGVyLXNwYWNpbmc6IDA7ICBcXG59XFxuXFxuI2FjY3VlaWwgcC5leHBlcnRpc2Uge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI2ludGVydmVudGlvbnMgcCB7XFxuICBsaW5lLWhlaWdodDogMS44cmVtO1xcbn1cXG5cXG5zZWN0aW9uIHsgIFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIG1pbi13aWR0aDogMTAwMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgIFxcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6MDtcXG59XFxuXFxuc2VjdGlvbiBkaXYuc3RvcnkgeyAgICBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxcbiAgaGVpZ2h0OjEwMCU7ICBcXG4gIHotaW5kZXg6IDE7XFxuICB3aWR0aDogMTAwMHB4OyAgXFxuICBtYXJnaW46IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCA2MSwgMTMyLCAwLjkpO1xcbn1cXG5cXG5zZWN0aW9uIGRpdi5uby1iZyB7ICAgIFxcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuc2VjdGlvbiAubGF5b3V0LCBzZWN0aW9uIC5sYXlvdXQtY29udGVudCB7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbnNlY3Rpb24gZGl2LmNoYXB0ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAgXFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvcGFjaXR5OiAxLjA7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwMHB4O1xcbn1cXG5cXG5zZWN0aW9uIGRpdi5jaGFwdGVyLXdoaXRlIHsgIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDAgNTBweDsgXFxuICB6LWluZGV4OiAzOyAgXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbiNjb250YWN0IGRpdi5jaGFwdGVyLXdoaXRlIHsgICAgXFxuICBoZWlnaHQ6IDg2MHB4OyAgXFxufVxcblxcbnNlY3Rpb24jY29udGFjdCB7XFxuICBoZWlnaHQ6IDkwMHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxufVxcblxcbnNlY3Rpb24gZGl2LmNoYXB0ZXIuaG9tZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCA2MSwgMTMyLCAwLjcpO1xcbn1cXG5cXG5zZWN0aW9uIGRpdi5jaGFwdGVyLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5zZWN0aW9uLmhvbWUgLnN0b3J5e1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59ICBcXG5cXG5zZWN0aW9uI2hvbWUgLmNoYXB0ZXItY29udGVudHtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDsgIFxcbn1cXG5cXG5zZWN0aW9uLmhvbWUgLmNoYXB0ZXItd2hpdGV7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG5zZWN0aW9uIC5jaGFwdGVyLWNvbnRlbnQge1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5zZWN0aW9uI2NvbnRhY3QgLmNoYXB0ZXItY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG59IFxcblxcbnNlY3Rpb24gLmNoYXB0ZXItY29udGVudCAuY2hhcHRlci1wYXJhZ3JhcGgge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLmNpdGF0aW9uIHsgICBcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxcbiAgei1pbmRleDogMTtcXG4gIG1hcmdpbjogYXV0bzsgIFxcbiAgei1pbmRleDogMTsgIFxcbiAgbWFyZ2luOiBhdXRvOyAgXFxuICBmb250LXNpemU6IDRyZW07ICAgICAgXFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgY29sb3I6ICM5N0Q0Qzg7ICBcXG4gIG1hcmdpbi10b3A6IDQwJTsgIFxcbn1cXG5cXG4uY2l0YXRpb24uaG9tZSB7ICBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxcbiAgbWFyZ2luLXRvcDogNTAlO1xcbn1cXG5cXG4uY2l0YXRpb24gLnRleHQge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbGluZS1oZWlnaHQ6IDIuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxufSAgXFxuXFxuLmNpdGF0aW9uIC5hdXRob3IgeyAgXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7ICBcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbi5pbWFnZUhvbGRlcjo6YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgI0ZGRjtcXG59XFxuXFxuI3N0b3J5IHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xcbiAgcGFkZGluZzogMTAwcHggMDtcXG59XFxuXFxuLyogTG9nb1xcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5sb2dvLXdoaXRlIHtcXG4gIHdpZHRoOiAzNzVweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvIGF1dG87XFxuICB0b3A6IDEwMHB4OyAgXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgIFxcbn1cXG5cXG4ubG9nby1ob21lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjAlO1xcbiAgbGVmdDogMTAlO1xcbn1cXG5cXG4ucmVjdGFuZ2xlIHtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjMDYxQjZBO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB0b3A6IDNweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbiNpbnRlcnZlbnRpb25zIC5yZWN0YW5nbGUge1xcbiAgYm9yZGVyLXJhZGl1czogNnB4OyAgXFxuICB0b3A6IDRweDsgIFxcbiAgd2lkdGg6IDBweDtcXG4gIGhlaWdodDogMHB4O1xcbiAgYm9yZGVyLXRvcDogOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWxlZnQ6IDlweCBzb2xpZCAjMDYxQjZBO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLmNvbG9yLTEgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMEMyRDhDOyB9XFxuLmNvbG9yLTIgeyBcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzA2MUI2QTsgKi9cXG59XFxuLmNvbG9yLTMgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMEMyRDhDOyB9XFxuLmNvbG9yLTQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMEYzRkFBOyB9XFxuLmNvbG9yLTUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMEMyRDhDOyB9XFxuXFxuZGl2LmdyaWQucGFyYWdyYXBoIHtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmVkO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmVkO1xcbn1cXG5cXG4jaW50ZXJ2ZW50aW9ucyBkaXYuZ3JpZC5wYXJhZ3JhcGgsICNjb250YWN0IGRpdi5ncmlkLnBhcmFncmFwaCB7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi5mYWtlLWxhbXAgeyAgXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA4MHB4OyAgICAgICAgXFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4jaG9tZSAuZmFrZS1sYW1weyAgXFxuICB0b3A6IDgwJTsgIFxcbn1cXG5cXG4uZmEuZmEtYWRqdXN0LmhvdmVye1xcbiAgY29sb3I6IHJnYmEoMjYsIDYxLCAxMzIsIDAuOSk7XFxufVxcblxcbi52Y2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAxMDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4udmNhcmQgLm9yZyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogVVBQRVJDQVNFO1xcbn1cXG5cXG4udmNhcmQgLm5hbWUge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6NzY4cHgpIHsgIFxcbiAgaDEge1xcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcXG4gIH1cXG5cXG4gIGRpdi5oZWFkZXJfbWVudSB7ICAgIFxcbiAgICBoZWlnaHQ6IDUwcHg7ICAgIFxcbiAgfVxcblxcbiAgZGl2LmhlYWRlcl9tZW51IGltZyB7ICAgIFxcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICB9XFxuXFxuICBkaXYubWVudS1uYXYge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9ICBcXG5cXG4gICNob21lIC5mYWtlLWxhbXAge1xcbiAgICB0b3A6IDkwJTtcXG4gIH1cXG5cXG4gIC5jaXRhdGlvbi5ob21lIHsgICAgICBcXG4gICAgbWFyZ2luLXRvcDogNDAlO1xcbiAgfVxcbn1cXG4gIFxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpIHtcXG4gIC5sb2dvLXdoaXRlIGltZ3tcXG4gICAgaGVpZ2h0OiAxNjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzcHg7ICAgIFxcbiAgfVxcbiAgI2hvbWUgLmZha2UtbGFtcCB7XFxuICAgIHRvcDogNjAlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9fU2VjdGlvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjIzV1lvVWUucG5nXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vaW1hZ2VzL2Zvb3Rlci5wbmdcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOXlFckdFYi5qcGdcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9pbWFnZXMvaW1nLTE2MDAtMTIwMF8xLmpwZ1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxdi0xMXJnLmpwZ1wiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL2ltYWdlcy9pbWctMTYwMC0xMjAwXzIuanBnXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM2YkZnRkwuanBnXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vaW1hZ2VzL2ltZy0xNjAwLTEyMDBfMy5qcGdcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMlc5YzlmOC5qcGdcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9pbWFnZXMvaW1nLTE2MDAtMTIwMF80LmpwZ1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyT2ltZUZMLmpwZ1wiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL2ltYWdlcy9pbWctMTYwMC0xMjAwXzUuanBnXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RGb3VuZFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlBBR0UgTk9UIEZPVU5EPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbk5vdEZvdW5kU2VjdGlvbi5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnTm90Rm91bmRTZWN0aW9uJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvY29tcG9uZW50cy9Ob3RGb3VuZFNlY3Rpb24vTm90Rm91bmRTZWN0aW9uLmpzeFxuICoqLyIsImltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcclxuXHJcbmZ1bmN0aW9uIHF1ZXJ5KHNlcnZlcikge1xyXG4gIHNlcnZlci5nZXQoJy9hcGkvKicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHJcbiAgICAgIC8vIHNpbXBsZSBhcGkgZmV0Y2ggZXhhbXBsZSwgbm8gb3duIERCIGhlcmUgc28gZXh0ZXJuYWwgY2FsbCBpcyBtYWRlLlxyXG5cclxuICAgICAgLy8gaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9naXRodWJcclxuICAgICAgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2l0aHViJylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSkudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGpzb24pO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBuZXh0KGVycik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5O1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NlcnZlci9hcGkuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJub2RlLWZldGNoXCJcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==