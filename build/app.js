webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(27);
	
	var _reactRouter2 = _interopRequireDefault(_reactRouter);
	
	var routes = __webpack_require__(139);
	
	__webpack_require__(250);
	
	if (typeof document !== 'undefined' && window) {
	  window.onload = function () {
	    _reactRouter2['default'].run(routes, _reactRouter2['default'].HistoryLocation, function (App, state) {
	      _react2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));
	    });
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "app.jsx" + ": " + err.message); } }); } } })(); }

/***/ },

/***/ 34:
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

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var alt = __webpack_require__(74);
	
	var AppActions = function AppActions() {
	  _classCallCheck(this, AppActions);
	
	  this.generateActions('create', 'destroy', 'toggleComplete', 'fetch');
	};
	
	module.exports = alt.createActions(AppActions);
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppActions.js" + ": " + err.message); } }); } } })(); }

/***/ },

/***/ 47:
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

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _alt = __webpack_require__(115);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	exports['default'] = new _alt2['default']();
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "alt.js" + ": " + err.message); } }); } } })(); }

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _alt = __webpack_require__(74);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var _objectAssign = __webpack_require__(48);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _actionsAppActions = __webpack_require__(35);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	// import fetch from 'whatwg-fetch';
	
	var appStore = _alt2['default'].createStore((function () {
	  function AppStore() {
	    _classCallCheck(this, AppStore);
	
	    this.bindActions(_actionsAppActions2['default']);
	    this.dataByRestApi = {};
	    this.data = {};
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

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var Dispatcher = __webpack_require__(118).Dispatcher;
	
	var EventEmitter = _interopRequire(__webpack_require__(117));
	
	var Symbol = _interopRequire(__webpack_require__(116));
	
	var assign = _interopRequire(__webpack_require__(48));
	
	var ACTION_HANDLER = Symbol("action creator handler");
	var ACTION_KEY = Symbol("holds the actions uid symbol for listening");
	var ACTION_UID = Symbol("the actions uid name");
	var ALL_LISTENERS = Symbol("name of listeners");
	var EE = Symbol("event emitter instance");
	var INIT_SNAPSHOT = Symbol("init snapshot storage");
	var LAST_SNAPSHOT = Symbol("last snapshot storage");
	var LIFECYCLE = Symbol("store lifecycle listeners");
	var LISTENERS = Symbol("stores action listeners storage");
	var PUBLIC_METHODS = Symbol("store public method storage");
	var STATE_CHANGED = Symbol();
	var STATE_CONTAINER = Symbol("the state container");
	
	var GlobalActionsNameRegistry = {};
	
	function formatAsConstant(name) {
	  return name.replace(/[a-z]([A-Z])/g, function (i) {
	    return "" + i[0] + "_" + i[1].toLowerCase();
	  }).toUpperCase();
	}
	
	function uid(container, name) {
	  var count = 0;
	  var key = name;
	  while (Object.hasOwnProperty.call(container, key)) {
	    key = name + String(++count);
	  }
	  return key;
	}
	
	function doSetState(store, storeInstance, nextState) {
	  if (!nextState) {
	    return;
	  }
	
	  if (!store.alt.dispatcher.isDispatching()) {
	    throw new Error("You can only use setState while dispatching");
	  }
	
	  if (typeof nextState === "function") {
	    assign(storeInstance[STATE_CONTAINER], nextState(storeInstance[STATE_CONTAINER]));
	  } else {
	    assign(storeInstance[STATE_CONTAINER], nextState);
	  }
	
	  storeInstance[STATE_CHANGED] = true;
	}
	
	/* istanbul ignore next */
	function NoopClass() {}
	
	var builtIns = Object.getOwnPropertyNames(NoopClass);
	var builtInProto = Object.getOwnPropertyNames(NoopClass.prototype);
	
	var getInternalMethods = function (obj, excluded) {
	  return Object.getOwnPropertyNames(obj).reduce(function (value, m) {
	    if (excluded.indexOf(m) !== -1) {
	      return value;
	    }
	
	    value[m] = obj[m];
	    return value;
	  }, {});
	};
	
	var AltStore = (function () {
	  function AltStore(dispatcher, model, state, StoreModel) {
	    var _this8 = this;
	
	    _classCallCheck(this, AltStore);
	
	    this[EE] = new EventEmitter();
	    this[LIFECYCLE] = {};
	    this[STATE_CHANGED] = false;
	    this[STATE_CONTAINER] = state || model;
	
	    this.boundListeners = model[ALL_LISTENERS];
	    this.StoreModel = StoreModel;
	    if (typeof this.StoreModel === "object") {
	      this.StoreModel.state = assign({}, StoreModel.state);
	    }
	
	    assign(this[LIFECYCLE], model[LIFECYCLE]);
	    assign(this, model[PUBLIC_METHODS]);
	
	    // Register dispatcher
	    this.dispatchToken = dispatcher.register(function (payload) {
	      if (typeof model.beforeEach === "function") {
	        model.beforeEach(payload.action.toString(), payload.data, _this8[STATE_CONTAINER]);
	      }
	
	      if (model[LISTENERS][payload.action]) {
	        var result = false;
	
	        try {
	          result = model[LISTENERS][payload.action](payload.data);
	        } catch (e) {
	          if (_this8[LIFECYCLE].error) {
	            _this8[LIFECYCLE].error(e, payload.action.toString(), payload.data, _this8[STATE_CONTAINER]);
	          } else {
	            throw e;
	          }
	        }
	
	        if (result !== false || _this8[STATE_CHANGED]) {
	          _this8.emitChange();
	        }
	
	        _this8[STATE_CHANGED] = false;
	      }
	
	      if (typeof model.afterEach === "function") {
	        model.afterEach(payload.action.toString(), payload.data, _this8[STATE_CONTAINER]);
	      }
	    });
	
	    if (this[LIFECYCLE].init) {
	      this[LIFECYCLE].init();
	    }
	  }
	
	  _createClass(AltStore, {
	    getEventEmitter: {
	      value: function getEventEmitter() {
	        return this[EE];
	      }
	    },
	    emitChange: {
	      value: function emitChange() {
	        this[EE].emit("change", this[STATE_CONTAINER]);
	      }
	    },
	    listen: {
	      value: function listen(cb) {
	        var _this8 = this;
	
	        this[EE].on("change", cb);
	        return function () {
	          return _this8.unlisten(cb);
	        };
	      }
	    },
	    unlisten: {
	      value: function unlisten(cb) {
	        if (this[LIFECYCLE].unlisten) {
	          this[LIFECYCLE].unlisten();
	        }
	        this[EE].removeListener("change", cb);
	      }
	    },
	    getState: {
	      value: function getState() {
	        // Copy over state so it's RO.
	        var state = this[STATE_CONTAINER];
	        return Object.keys(state).reduce(function (obj, key) {
	          obj[key] = state[key];
	          return obj;
	        }, {});
	      }
	    }
	  });
	
	  return AltStore;
	})();
	
	var ActionCreator = (function () {
	  function ActionCreator(alt, name, action, actions) {
	    _classCallCheck(this, ActionCreator);
	
	    this[ACTION_UID] = name;
	    this[ACTION_HANDLER] = action.bind(this);
	    this.actions = actions;
	    this.alt = alt;
	  }
	
	  _createClass(ActionCreator, {
	    dispatch: {
	      value: function dispatch(data) {
	        this.alt.dispatch(this[ACTION_UID], data);
	      }
	    }
	  });
	
	  return ActionCreator;
	})();
	
	var StoreMixinListeners = {
	  on: function on(lifecycleEvent, handler) {
	    this[LIFECYCLE][lifecycleEvent] = handler.bind(this);
	  },
	
	  bindAction: function bindAction(symbol, handler) {
	    if (!symbol) {
	      throw new ReferenceError("Invalid action reference passed in");
	    }
	    if (typeof handler !== "function") {
	      throw new TypeError("bindAction expects a function");
	    }
	
	    if (handler.length > 1) {
	      throw new TypeError("Action handler in store " + this._storeName + " for " + ("" + (symbol[ACTION_KEY] || symbol).toString() + " was defined with 2 ") + "parameters. Only a single parameter is passed through the " + "dispatcher, did you mean to pass in an Object instead?");
	    }
	
	    // You can pass in the constant or the function itself
	    var key = symbol[ACTION_KEY] ? symbol[ACTION_KEY] : symbol;
	    this[LISTENERS][key] = handler.bind(this);
	    this[ALL_LISTENERS].push(Symbol.keyFor(key));
	  },
	
	  bindActions: function bindActions(actions) {
	    var _this8 = this;
	
	    Object.keys(actions).forEach(function (action) {
	      var symbol = actions[action];
	      var matchFirstCharacter = /./;
	      var assumedEventHandler = action.replace(matchFirstCharacter, function (x) {
	        return "on" + x[0].toUpperCase();
	      });
	      var handler = null;
	
	      if (_this8[action] && _this8[assumedEventHandler]) {
	        // If you have both action and onAction
	        throw new ReferenceError("You have multiple action handlers bound to an action: " + ("" + action + " and " + assumedEventHandler));
	      } else if (_this8[action]) {
	        // action
	        handler = _this8[action];
	      } else if (_this8[assumedEventHandler]) {
	        // onAction
	        handler = _this8[assumedEventHandler];
	      }
	
	      if (handler) {
	        _this8.bindAction(symbol, handler);
	      }
	    });
	  },
	
	  bindListeners: function bindListeners(obj) {
	    var _this8 = this;
	
	    Object.keys(obj).forEach(function (methodName) {
	      var symbol = obj[methodName];
	      var listener = _this8[methodName];
	
	      if (!listener) {
	        throw new ReferenceError("" + methodName + " defined but does not exist in " + _this8._storeName);
	      }
	
	      if (Array.isArray(symbol)) {
	        symbol.forEach(function (action) {
	          _this8.bindAction(action, listener);
	        });
	      } else {
	        _this8.bindAction(symbol, listener);
	      }
	    });
	  }
	
	};
	
	var StoreMixinEssentials = {
	  waitFor: function waitFor(sources) {
	    if (!sources) {
	      throw new ReferenceError("Dispatch tokens not provided");
	    }
	
	    if (arguments.length === 1) {
	      sources = Array.isArray(sources) ? sources : [sources];
	    } else {
	      sources = Array.prototype.slice.call(arguments);
	    }
	
	    var tokens = sources.map(function (source) {
	      return source.dispatchToken || source;
	    });
	
	    this.dispatcher.waitFor(tokens);
	  },
	
	  exportPublicMethods: function exportPublicMethods(methods) {
	    var _this8 = this;
	
	    Object.keys(methods).forEach(function (methodName) {
	      if (typeof methods[methodName] !== "function") {
	        throw new TypeError("exportPublicMethods expects a function");
	      }
	
	      _this8[PUBLIC_METHODS][methodName] = methods[methodName];
	    });
	  },
	
	  emitChange: function emitChange() {
	    this.getInstance().emitChange();
	  }
	};
	
	var setAppState = function (instance, data, onStore) {
	  var obj = instance.deserialize(data);
	  Object.keys(obj).forEach(function (key) {
	    var store = instance.stores[key];
	    if (store) {
	      if (store[LIFECYCLE].deserialize) {
	        obj[key] = store[LIFECYCLE].deserialize(obj[key]) || obj[key];
	      }
	      assign(store[STATE_CONTAINER], obj[key]);
	      onStore(store);
	    }
	  });
	};
	
	var snapshot = function (instance) {
	  for (var _len = arguments.length, storeNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    storeNames[_key - 1] = arguments[_key];
	  }
	
	  var stores = storeNames.length ? storeNames : Object.keys(instance.stores);
	  return stores.reduce(function (obj, key) {
	    var store = instance.stores[key];
	    if (store[LIFECYCLE].snapshot) {
	      store[LIFECYCLE].snapshot();
	    }
	    var customSnapshot = store[LIFECYCLE].serialize && store[LIFECYCLE].serialize();
	    obj[key] = customSnapshot ? customSnapshot : store.getState();
	    return obj;
	  }, {});
	};
	
	var saveInitialSnapshot = function (instance, key) {
	  var state = instance.stores[key][STATE_CONTAINER];
	  var initial = instance.deserialize(instance[INIT_SNAPSHOT]);
	  initial[key] = state;
	  instance[INIT_SNAPSHOT] = instance.serialize(initial);
	  instance[LAST_SNAPSHOT] = instance[INIT_SNAPSHOT];
	};
	
	var filterSnapshotOfStores = function (instance, serializedSnapshot, storeNames) {
	  var stores = instance.deserialize(serializedSnapshot);
	  var storesToReset = storeNames.reduce(function (obj, name) {
	    if (!stores[name]) {
	      throw new ReferenceError("" + name + " is not a valid store");
	    }
	    obj[name] = stores[name];
	    return obj;
	  }, {});
	  return instance.serialize(storesToReset);
	};
	
	var createStoreFromObject = function (alt, StoreModel, key, saveStore) {
	  var storeInstance = undefined;
	
	  var StoreProto = {};
	  StoreProto[ALL_LISTENERS] = [];
	  StoreProto[LIFECYCLE] = {};
	  StoreProto[LISTENERS] = {};
	
	  assign(StoreProto, {
	    _storeName: key,
	    alt: alt,
	    dispatcher: alt.dispatcher,
	    getInstance: function getInstance() {
	      return storeInstance;
	    },
	    setState: function setState(nextState) {
	      doSetState(this, storeInstance, nextState);
	    }
	  }, StoreMixinListeners, StoreMixinEssentials, StoreModel);
	
	  // bind the store listeners
	  /* istanbul ignore else */
	  if (StoreProto.bindListeners) {
	    StoreMixinListeners.bindListeners.call(StoreProto, StoreProto.bindListeners);
	  }
	
	  // bind the lifecycle events
	  /* istanbul ignore else */
	  if (StoreProto.lifecycle) {
	    Object.keys(StoreProto.lifecycle).forEach(function (event) {
	      StoreMixinListeners.on.call(StoreProto, event, StoreProto.lifecycle[event]);
	    });
	  }
	
	  // create the instance and assign the public methods to the instance
	  storeInstance = assign(new AltStore(alt.dispatcher, StoreProto, StoreProto.state, StoreModel), StoreProto.publicMethods);
	
	  /* istanbul ignore else */
	  if (saveStore) {
	    alt.stores[key] = storeInstance;
	    saveInitialSnapshot(alt, key);
	  }
	
	  return storeInstance;
	};
	
	var Alt = (function () {
	  function Alt() {
	    var config = arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Alt);
	
	    this.serialize = config.serialize || JSON.stringify;
	    this.deserialize = config.deserialize || JSON.parse;
	    this.dispatcher = config.dispatcher || new Dispatcher();
	    this.actions = {};
	    this.stores = {};
	    this[LAST_SNAPSHOT] = this[INIT_SNAPSHOT] = "{}";
	  }
	
	  _createClass(Alt, {
	    dispatch: {
	      value: function dispatch(action, data) {
	        this.dispatcher.dispatch({ action: action, data: data });
	      }
	    },
	    createStore: {
	      value: function createStore(StoreModel, iden) {
	        var saveStore = arguments[2] === undefined ? true : arguments[2];
	
	        var storeInstance = undefined;
	        var key = iden || StoreModel.name || StoreModel.displayName || "";
	
	        if (saveStore && (this.stores[key] || !key)) {
	          /* istanbul ignore else */
	          if (typeof console !== "undefined") {
	            if (this.stores[key]) {
	              console.warn(new ReferenceError("A store named " + key + " already exists, double check your store " + "names or pass in your own custom identifier for each store"));
	            } else {
	              console.warn(new ReferenceError("Store name was not specified"));
	            }
	          }
	
	          key = uid(this.stores, key);
	        }
	
	        if (typeof StoreModel === "object") {
	          return createStoreFromObject(this, StoreModel, key, saveStore);
	        }
	
	        // Creating a class here so we don't overload the provided store's
	        // prototype with the mixin behaviour and I'm extending from StoreModel
	        // so we can inherit any extensions from the provided store.
	
	        var Store = (function (_StoreModel) {
	          function Store(alt) {
	            _classCallCheck(this, Store);
	
	            _get(Object.getPrototypeOf(Store.prototype), "constructor", this).call(this, alt);
	          }
	
	          _inherits(Store, _StoreModel);
	
	          return Store;
	        })(StoreModel);
	
	        assign(Store.prototype, StoreMixinListeners, StoreMixinEssentials, {
	          _storeName: key,
	          alt: this,
	          dispatcher: this.dispatcher,
	          getInstance: function getInstance() {
	            return storeInstance;
	          },
	          setState: function setState(nextState) {
	            doSetState(this, storeInstance, nextState);
	          }
	        });
	
	        Store.prototype[ALL_LISTENERS] = [];
	        Store.prototype[LIFECYCLE] = {};
	        Store.prototype[LISTENERS] = {};
	        Store.prototype[PUBLIC_METHODS] = {};
	
	        var store = new Store(this);
	
	        storeInstance = assign(new AltStore(this.dispatcher, store, null, StoreModel), getInternalMethods(StoreModel, builtIns));
	
	        if (saveStore) {
	          this.stores[key] = storeInstance;
	          saveInitialSnapshot(this, key);
	        }
	
	        return storeInstance;
	      }
	    },
	    generateActions: {
	      value: function generateActions() {
	        for (var _len = arguments.length, actionNames = Array(_len), _key = 0; _key < _len; _key++) {
	          actionNames[_key] = arguments[_key];
	        }
	
	        return this.createActions(function () {
	          this.generateActions.apply(this, actionNames);
	        });
	      }
	    },
	    createAction: {
	      value: function createAction(name, implementation, obj) {
	        var actionId = uid(GlobalActionsNameRegistry, name);
	        GlobalActionsNameRegistry[actionId] = 1;
	        var actionName = Symbol["for"](actionId);
	
	        // Wrap the action so we can provide a dispatch method
	        var newAction = new ActionCreator(this, actionName, implementation, obj);
	
	        var action = newAction[ACTION_HANDLER];
	        action.defer = function () {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }
	
	          setTimeout(function () {
	            newAction[ACTION_HANDLER].apply(null, args);
	          });
	        };
	        action[ACTION_KEY] = actionName;
	        return action;
	      }
	    },
	    createActions: {
	      value: function createActions(ActionsClass) {
	        var _this8 = this;
	
	        var exportObj = arguments[1] === undefined ? {} : arguments[1];
	
	        var actions = {};
	        var key = ActionsClass.name || ActionsClass.displayName || "";
	
	        if (typeof ActionsClass === "function") {
	          (function () {
	            assign(actions, getInternalMethods(ActionsClass.prototype, builtInProto));
	
	            var ActionsGenerator = (function (_ActionsClass) {
	              function ActionsGenerator(alt) {
	                _classCallCheck(this, ActionsGenerator);
	
	                _get(Object.getPrototypeOf(ActionsGenerator.prototype), "constructor", this).call(this, alt);
	              }
	
	              _inherits(ActionsGenerator, _ActionsClass);
	
	              _createClass(ActionsGenerator, {
	                generateActions: {
	                  value: function generateActions() {
	                    for (var _len = arguments.length, actionNames = Array(_len), _key = 0; _key < _len; _key++) {
	                      actionNames[_key] = arguments[_key];
	                    }
	
	                    actionNames.forEach(function (actionName) {
	                      // This is a function so we can later bind this to ActionCreator
	                      actions[actionName] = function (x) {
	                        for (var _len2 = arguments.length, a = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                          a[_key2 - 1] = arguments[_key2];
	                        }
	
	                        this.dispatch(a.length ? [x].concat(a) : x);
	                      };
	                    });
	                  }
	                }
	              });
	
	              return ActionsGenerator;
	            })(ActionsClass);
	
	            new ActionsGenerator(_this8);
	          })();
	        } else {
	          assign(actions, ActionsClass);
	        }
	
	        return Object.keys(actions).reduce(function (obj, action) {
	          obj[action] = _this8.createAction("" + key + "#" + action, actions[action], obj);
	          var constant = formatAsConstant(action);
	          obj[constant] = obj[action][ACTION_KEY];
	          return obj;
	        }, exportObj);
	      }
	    },
	    takeSnapshot: {
	      value: function takeSnapshot() {
	        for (var _len = arguments.length, storeNames = Array(_len), _key = 0; _key < _len; _key++) {
	          storeNames[_key] = arguments[_key];
	        }
	
	        var state = snapshot.apply(undefined, [this].concat(storeNames));
	        this[LAST_SNAPSHOT] = this.serialize(assign(this.deserialize(this[LAST_SNAPSHOT]), state));
	        return this.serialize(state);
	      }
	    },
	    rollback: {
	      value: function rollback() {
	        setAppState(this, this[LAST_SNAPSHOT], function (store) {
	          if (store[LIFECYCLE].rollback) {
	            store[LIFECYCLE].rollback();
	          }
	          store.emitChange();
	        });
	      }
	    },
	    recycle: {
	      value: function recycle() {
	        for (var _len = arguments.length, storeNames = Array(_len), _key = 0; _key < _len; _key++) {
	          storeNames[_key] = arguments[_key];
	        }
	
	        var initialSnapshot = storeNames.length ? filterSnapshotOfStores(this, this[INIT_SNAPSHOT], storeNames) : this[INIT_SNAPSHOT];
	
	        setAppState(this, initialSnapshot, function (store) {
	          if (store[LIFECYCLE].init) {
	            store[LIFECYCLE].init();
	          }
	          store.emitChange();
	        });
	      }
	    },
	    flush: {
	      value: function flush() {
	        var state = this.serialize(snapshot(this));
	        this.recycle();
	        return state;
	      }
	    },
	    bootstrap: {
	      value: function bootstrap(data) {
	        setAppState(this, data, function (store) {
	          if (store[LIFECYCLE].bootstrap) {
	            store[LIFECYCLE].bootstrap();
	          }
	          store.emitChange();
	        });
	      }
	    },
	    addActions: {
	
	      // Instance type methods for injecting alt into your application as context
	
	      value: function addActions(name, ActionsClass) {
	        this.actions[name] = Array.isArray(ActionsClass) ? this.generateActions.apply(this, ActionsClass) : this.createActions(ActionsClass);
	      }
	    },
	    addStore: {
	      value: function addStore(name, StoreModel, saveStore) {
	        this.createStore(StoreModel, name, saveStore);
	      }
	    },
	    getActions: {
	      value: function getActions(name) {
	        return this.actions[name];
	      }
	    },
	    getStore: {
	      value: function getStore(name) {
	        return this.stores[name];
	      }
	    }
	  });
	
	  return Alt;
	})();
	
	module.exports = Alt;
	


/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var globalSymbolRegistryList = {};
	
	// Aliases & Helpers
	var make = Object.create;
	var defProps = Object.defineProperties;
	var defProp = Object.defineProperty;
	var defValue = function (value) {
	  var opts = arguments[1] === undefined ? {} : arguments[1];
	  return {
	    value: value,
	    configurable: !!opts.c,
	    writable: !!opts.w,
	    enumerable: !!opts.e
	  };
	};
	var isSymbol = function (symbol) {
	  return symbol && symbol[xSymbol.toStringTag] === "Symbol";
	};
	
	var supportsAccessors = undefined;
	try {
	  var x = defProp({}, "y", { get: function () {
	      return 1;
	    } });
	  supportsAccessors = x.y === 1;
	} catch (e) {
	  supportsAccessors = false;
	}
	
	var id = {};
	var uid = function (desc) {
	  desc = String(desc);
	  var x = "";
	  var i = 0;
	  while (id[desc + x]) {
	    x = i += 1;
	  }
	  id[desc + x] = 1;
	
	  var tag = "Symbol(" + desc + "" + x + ")";
	
	  /* istanbul ignore else */
	  if (supportsAccessors) {
	    // Make the symbols hidden to pre-es6 code
	    defProp(Object.prototype, tag, {
	      get: undefined,
	      set: function (value) {
	        defProp(this, tag, defValue(value, { c: true, w: true }));
	      },
	      configurable: true,
	      enumerable: false
	    });
	  }
	
	  return tag;
	};
	
	// The base symbol
	var SymbolProto = make(null);
	
	// 19.4.1.1
	function xSymbol(descString) {
	  if (this instanceof xSymbol) {
	    throw new TypeError("Symbol is not a constructor");
	  }
	
	  descString = descString === undefined ? "" : String(descString);
	
	  var tag = uid(descString);
	
	  /* istanbul ignore next */
	  if (!supportsAccessors) {
	    return tag;
	  }
	
	  return make(SymbolProto, {
	    __description__: defValue(descString),
	    __tag__: defValue(tag)
	  });
	}
	
	defProps(xSymbol, {
	  // 19.4.2.1
	  "for": defValue(function (key) {
	    var stringKey = String(key);
	
	    if (globalSymbolRegistryList[stringKey]) {
	      return globalSymbolRegistryList[stringKey];
	    }
	
	    var symbol = xSymbol(stringKey);
	    globalSymbolRegistryList[stringKey] = symbol;
	
	    return symbol;
	  }),
	
	  // 19.4.2.5
	  keyFor: defValue(function (sym) {
	    if (supportsAccessors && !isSymbol(sym)) {
	      throw new TypeError("" + sym + " is not a symbol");
	    }
	
	    for (var key in globalSymbolRegistryList) {
	      if (globalSymbolRegistryList[key] === sym) {
	        return supportsAccessors ? globalSymbolRegistryList[key].__description__ : globalSymbolRegistryList[key].substr(7, globalSymbolRegistryList[key].length - 8);
	      }
	    }
	  })
	});
	
	// 6.1.5.1
	defProps(xSymbol, {
	  hasInstance: defValue(xSymbol("hasInstance")),
	  isConcatSpreadable: defValue(xSymbol("isConcatSpreadable")),
	  iterator: defValue(xSymbol("iterator")),
	  match: defValue(xSymbol("match")),
	  replace: defValue(xSymbol("replace")),
	  search: defValue(xSymbol("search")),
	  species: defValue(xSymbol("species")),
	  split: defValue(xSymbol("split")),
	  toPrimitive: defValue(xSymbol("toPrimitive")),
	  toStringTag: defValue(xSymbol("toStringTag")),
	  unscopables: defValue(xSymbol("unscopables"))
	});
	
	// 19.4.3
	defProps(SymbolProto, {
	  constructor: defValue(xSymbol),
	
	  // 19.4.3.2
	  toString: defValue(function () {
	    return this.__tag__;
	  }),
	
	  // 19.4.3.3
	  valueOf: defValue(function () {
	    return "Symbol(" + this.__description__ + ")";
	  })
	});
	
	// 19.4.3.5
	/* istanbul ignore else */
	if (supportsAccessors) {
	  defProp(SymbolProto, xSymbol.toStringTag, defValue("Symbol", { c: true }));
	}
	
	module.exports = typeof Symbol === "function" ? Symbol : xSymbol;
	


/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} once Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }
	
	/**
	 * Holds the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;
	
	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  if (!this._events || !this._events[event]) return [];
	  if (this._events[event].fn) return [this._events[event].fn];
	
	  for (var i = 0, l = this._events[event].length, ee = new Array(l); i < l; i++) {
	    ee[i] = this._events[event][i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  if (!this._events || !this._events[event]) return false;
	
	  var listeners = this._events[event]
	    , len = arguments.length
	    , args
	    , i;
	
	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this);
	
	  if (!this._events) this._events = {};
	  if (!this._events[event]) this._events[event] = listener;
	  else {
	    if (!this._events[event].fn) this._events[event].push(listener);
	    else this._events[event] = [
	      this._events[event], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true);
	
	  if (!this._events) this._events = {};
	  if (!this._events[event]) this._events[event] = listener;
	  else {
	    if (!this._events[event].fn) this._events[event].push(listener);
	    else this._events[event] = [
	      this._events[event], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, once) {
	  if (!this._events || !this._events[event]) return this;
	
	  var listeners = this._events[event]
	    , events = [];
	
	  if (fn) {
	    if (listeners.fn && (listeners.fn !== fn || (once && !listeners.once))) {
	      events.push(listeners);
	    }
	    if (!listeners.fn) for (var i = 0, length = listeners.length; i < length; i++) {
	      if (listeners[i].fn !== fn || (once && !listeners[i].once)) {
	        events.push(listeners[i]);
	      }
	    }
	  }
	
	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[event] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[event];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;
	
	  if (event) delete this._events[event];
	  else this._events = {};
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the module.
	//
	EventEmitter.EventEmitter = EventEmitter;
	EventEmitter.EventEmitter2 = EventEmitter;
	EventEmitter.EventEmitter3 = EventEmitter;
	
	//
	// Expose the module.
	//
	module.exports = EventEmitter;


/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	module.exports.Dispatcher = __webpack_require__(119)


/***/ },

/***/ 119:
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * @typechecks
	 */
	
	"use strict";
	
	var invariant = __webpack_require__(120);
	
	var _lastID = 1;
	var _prefix = 'ID_';
	
	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *    CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *
	 *         case 'city-update':
	 *           FlightPriceStore.price =
	 *             FlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */
	
	  function Dispatcher() {
	    this.$Dispatcher_callbacks = {};
	    this.$Dispatcher_isPending = {};
	    this.$Dispatcher_isHandled = {};
	    this.$Dispatcher_isDispatching = false;
	    this.$Dispatcher_pendingPayload = null;
	  }
	
	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   *
	   * @param {function} callback
	   * @return {string}
	   */
	  Dispatcher.prototype.register=function(callback) {
	    var id = _prefix + _lastID++;
	    this.$Dispatcher_callbacks[id] = callback;
	    return id;
	  };
	
	  /**
	   * Removes a callback based on its token.
	   *
	   * @param {string} id
	   */
	  Dispatcher.prototype.unregister=function(id) {
	    invariant(
	      this.$Dispatcher_callbacks[id],
	      'Dispatcher.unregister(...): `%s` does not map to a registered callback.',
	      id
	    );
	    delete this.$Dispatcher_callbacks[id];
	  };
	
	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   *
	   * @param {array<string>} ids
	   */
	  Dispatcher.prototype.waitFor=function(ids) {
	    invariant(
	      this.$Dispatcher_isDispatching,
	      'Dispatcher.waitFor(...): Must be invoked while dispatching.'
	    );
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this.$Dispatcher_isPending[id]) {
	        invariant(
	          this.$Dispatcher_isHandled[id],
	          'Dispatcher.waitFor(...): Circular dependency detected while ' +
	          'waiting for `%s`.',
	          id
	        );
	        continue;
	      }
	      invariant(
	        this.$Dispatcher_callbacks[id],
	        'Dispatcher.waitFor(...): `%s` does not map to a registered callback.',
	        id
	      );
	      this.$Dispatcher_invokeCallback(id);
	    }
	  };
	
	  /**
	   * Dispatches a payload to all registered callbacks.
	   *
	   * @param {object} payload
	   */
	  Dispatcher.prototype.dispatch=function(payload) {
	    invariant(
	      !this.$Dispatcher_isDispatching,
	      'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.'
	    );
	    this.$Dispatcher_startDispatching(payload);
	    try {
	      for (var id in this.$Dispatcher_callbacks) {
	        if (this.$Dispatcher_isPending[id]) {
	          continue;
	        }
	        this.$Dispatcher_invokeCallback(id);
	      }
	    } finally {
	      this.$Dispatcher_stopDispatching();
	    }
	  };
	
	  /**
	   * Is this Dispatcher currently dispatching.
	   *
	   * @return {boolean}
	   */
	  Dispatcher.prototype.isDispatching=function() {
	    return this.$Dispatcher_isDispatching;
	  };
	
	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @param {string} id
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_invokeCallback=function(id) {
	    this.$Dispatcher_isPending[id] = true;
	    this.$Dispatcher_callbacks[id](this.$Dispatcher_pendingPayload);
	    this.$Dispatcher_isHandled[id] = true;
	  };
	
	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @param {object} payload
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_startDispatching=function(payload) {
	    for (var id in this.$Dispatcher_callbacks) {
	      this.$Dispatcher_isPending[id] = false;
	      this.$Dispatcher_isHandled[id] = false;
	    }
	    this.$Dispatcher_pendingPayload = payload;
	    this.$Dispatcher_isDispatching = true;
	  };
	
	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_stopDispatching=function() {
	    this.$Dispatcher_pendingPayload = null;
	    this.$Dispatcher_isDispatching = false;
	  };
	
	
	module.exports = Dispatcher;


/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	"use strict";
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;


/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	exports.push([module.id, "body {\r\n\twidth: 750px;\r\n\tmargin: auto;\r\n}\r\n\r\nh1, h2, h3 {\r\n\tmargin-top: 24px;\r\n\tmargin-bottom: 12px;\r\n}\r\n\r\ndiv.main-content {\r\n\t-webkit-padding-start: 40px;\r\n}", ""]);

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	exports.push([module.id, "div.header {\r\n\twidth: 100%;\r\n\tmargin: auto;\r\n\ttext-align: center;\r\n}\r\n\r\nheader {\r\n\ttext-align: center;\r\n\tborder-bottom: 2px solid #f4f4f4;\r\n}\r\n\r\nul {\r\n\tlist-style-type: none;\r\n}\r\n\r\nheader li {\r\n\tdisplay: inline;\r\n\tpadding: 5px;\r\n\tborder-left: 1px solid #eee;\r\n}\r\n\r\nli a {\r\n\tfont-size: 0.8rem;\r\n\ttext-transform: uppercase;\r\n\ttext-decoration: none;\r\n\tcolor: #888;\r\n}\r\n", ""]);

/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	exports.push([module.id, "button.destroy {\r\n\tmargin-left: 10px;\r\n\tbackground-color: rgba(0, 0, 0, 0.3);\r\n\tz-index: 1;\r\n\tright: 3px;\r\n\tborder-radius: 50%;\r\n\tbox-shadow: 0 0 2px #242020;\r\n\tcursor: pointer;\r\n}\r\n\r\nli.completed {\r\n\ttext-decoration: line-through;\t\r\n}\r\n", ""]);

/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	exports.push([module.id, "body {\n  font: 100% Helvetica, sans-serif;\n  color: #aaa; }\n", ""]);

/***/ },

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "favicon.ico"

/***/ },

/***/ 131:
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
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(27);
	
	var _HeaderHeader = __webpack_require__(133);
	
	var _HeaderHeader2 = _interopRequireDefault(_HeaderHeader);
	
	if (true) {
	  __webpack_require__(247);
	  __webpack_require__(125);
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
	        )
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

/***/ 132:
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
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Contact = (function (_React$Component) {
	  function Contact() {
	    _classCallCheck(this, Contact);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Contact, _React$Component);
	
	  _createClass(Contact, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h1',
	          null,
	          'CONTACT PAGE'
	        )
	      );
	    }
	  }]);
	
	  return Contact;
	})(_react2['default'].Component);
	
	exports['default'] = Contact;
	;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Contact.jsx" + ": " + err.message); } }); } } })(); }

/***/ },

/***/ 133:
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
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(27);
	
	var reactLogo = undefined;
	
	reactLogo = __webpack_require__(251);
	
	if (true) {
	  __webpack_require__(248);
	}
	
	var Header = (function (_React$Component) {
	  function Header() {
	    _classCallCheck(this, Header);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Header, _React$Component);
	
	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'header' },
	        _react2['default'].createElement('img', { src: reactLogo, height: '60' }),
	        _react2['default'].createElement(
	          'header',
	          null,
	          _react2['default'].createElement(
	            'ul',
	            null,
	            _react2['default'].createElement(
	              'li',
	              null,
	              _react2['default'].createElement(
	                _reactRouter.Link,
	                { to: 'app' },
	                'Home'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              null,
	              _react2['default'].createElement(
	                _reactRouter.Link,
	                { to: 'todo' },
	                'Todo'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              null,
	              _react2['default'].createElement(
	                _reactRouter.Link,
	                { to: 'contact' },
	                'Contact'
	              )
	            )
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

/***/ 134:
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
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _storesAppStore = __webpack_require__(75);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _actionsAppActions = __webpack_require__(35);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	/**
	 * Retrieve the current data from the AppStore
	 */
	function getDataState() {
	  return {
	    apiData: _storesAppStore2['default'].getState().dataByRestApi
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
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h1',
	          null,
	          'HOME PAGE'
	        ),
	        _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(
	            'button',
	            { onClick: this._onClick.bind(this) },
	            'FAKE API CALL'
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          null,
	          this.state.apiData.data
	        )
	      );
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

/***/ 135:
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
	
	var _react = __webpack_require__(6);
	
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

/***/ 136:
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
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(73);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _actionsAppActions = __webpack_require__(35);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var PropTypes = _react2['default'].PropTypes;
	
	if (true) {
	  __webpack_require__(249);
	}
	
	var TodoItem = (function (_React$Component) {
	  function TodoItem(props) {
	    _classCallCheck(this, TodoItem);
	
	    _get(Object.getPrototypeOf(TodoItem.prototype), 'constructor', this).call(this, props);
	    this.displayName = 'TodoItem';
	    this.propsTypes = {
	      todo: PropTypes.object.isRequired
	    };
	  }
	
	  _inherits(TodoItem, _React$Component);
	
	  _createClass(TodoItem, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.state = {
	        isEditing: false
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var todo = this.props.todo;
	
	      return _react2['default'].createElement(
	        'li',
	        { className: (0, _classnames2['default'])({
	            'completed': todo.complete,
	            'editing': this.state.isEditing
	          }),
	          key: todo.id },
	        _react2['default'].createElement('input', { className: 'toggle', type: 'checkbox', checked: todo.complete, onChange: this._onToggleComplete.bind(this) }),
	        _react2['default'].createElement(
	          'label',
	          null,
	          this.props.todo.text
	        ),
	        _react2['default'].createElement(
	          'button',
	          { className: 'destroy', onClick: this._onDestroyClick.bind(this) },
	          '✖'
	        )
	      );
	    }
	  }, {
	    key: '_onToggleComplete',
	    value: function _onToggleComplete() {
	      _actionsAppActions2['default'].toggleComplete(this.props.todo.id);
	    }
	  }, {
	    key: '_onDestroyClick',
	    value: function _onDestroyClick() {
	      _actionsAppActions2['default'].destroy(this.props.todo.id);
	    }
	  }]);
	
	  return TodoItem;
	})(_react2['default'].Component);
	
	;
	
	exports['default'] = TodoItem;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoItem.jsx" + ": " + err.message); } }); } } })(); }

/***/ },

/***/ 137:
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
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TodoItem = __webpack_require__(136);
	
	var _TodoItem2 = _interopRequireDefault(_TodoItem);
	
	var _TodoTextInput = __webpack_require__(138);
	
	var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);
	
	var _actionsAppActions = __webpack_require__(35);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var _storesAppStore = __webpack_require__(75);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	/**
	 * Retrieve the current data from the AppStore
	 */
	function getDataState() {
	  return {
	    allData: _storesAppStore2['default'].getState().data,
	    areAllComplete: _storesAppStore2['default'].areAllComplete()
	  };
	}
	
	var TodoSection = (function (_React$Component) {
	  function TodoSection() {
	    _classCallCheck(this, TodoSection);
	
	    _get(Object.getPrototypeOf(TodoSection.prototype), 'constructor', this).call(this);
	    this.state = getDataState();
	  }
	
	  _inherits(TodoSection, _React$Component);
	
	  _createClass(TodoSection, [{
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
	      var allTodos = this.state.allData;
	      var todos = [];
	
	      for (var key in allTodos) {
	        todos.push(_react2['default'].createElement(_TodoItem2['default'], { key: key, todo: allTodos[key] }));
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h1',
	          null,
	          'TODO PAGE'
	        ),
	        _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(_TodoTextInput2['default'], { className: 'edit', id: 'new-todo', placeholder: 'What needs to be done ?', onSave: this._onSave.bind(this), value: '' }),
	          _react2['default'].createElement(
	            'ul',
	            { id: 'todo-list' },
	            todos
	          )
	        )
	      );
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange() {
	      this.setState(getDataState());
	    }
	  }, {
	    key: '_onSave',
	    value: function _onSave(text) {
	      if (text.trim()) {
	        _actionsAppActions2['default'].create(text);
	      }
	    }
	  }]);
	
	  return TodoSection;
	})(_react2['default'].Component);
	
	exports['default'] = TodoSection;
	;
	
	TodoSection.prototype.displayName = 'TodoSection';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoSection.jsx" + ": " + err.message); } }); } } })(); }

/***/ },

/***/ 138:
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
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var PropTypes = _react2['default'].PropTypes;
	
	var ENTER_KEY_CODE = 13;
	
	var TodoTextInput = (function (_React$Component) {
	  function TodoTextInput(props) {
	    _classCallCheck(this, TodoTextInput);
	
	    _get(Object.getPrototypeOf(TodoTextInput.prototype), 'constructor', this).call(this, props);
	    this.displayName = 'TodoTextInput';
	    this.propsTypes = {
	      className: PropTypes.string,
	      id: PropTypes.string,
	      placeholder: PropTypes.string,
	      onSave: PropTypes.func.isRequired,
	      value: PropTypes.string
	    };
	    this.state = {
	      value: this.props.value || ''
	    };
	  }
	
	  _inherits(TodoTextInput, _React$Component);
	
	  _createClass(TodoTextInput, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('input', { className: this.props.className,
	        id: this.props.id,
	        placeholder: this.props.placeholder,
	        onChange: this._onChange.bind(this),
	        onKeyDown: this._onKeyDown.bind(this),
	        value: this.state.value,
	        autoFocus: true });
	    }
	  }, {
	    key: '_save',
	    value: function _save() {
	      this.props.onSave(this.state.value);
	      this.setState({
	        value: ''
	      });
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange( /*object*/event) {
	      this.setState({
	        value: event.target.value
	      });
	    }
	  }, {
	    key: '_onKeyDown',
	    value: function _onKeyDown(event) {
	      if (event.keyCode === ENTER_KEY_CODE) {
	        this._save();
	      }
	    }
	  }]);
	
	  return TodoTextInput;
	})(_react2['default'].Component);
	
	;
	
	exports['default'] = TodoTextInput;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoTextInput.jsx" + ": " + err.message); } }); } } })(); }

/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	/*eslint-disable no-unused-vars*/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	/*eslint-enable no-unused-vars*/
	
	var _reactRouter = __webpack_require__(27);
	
	var _componentsAppApp = __webpack_require__(131);
	
	var _componentsAppApp2 = _interopRequireDefault(_componentsAppApp);
	
	var _componentsContactSectionContact = __webpack_require__(132);
	
	var _componentsContactSectionContact2 = _interopRequireDefault(_componentsContactSectionContact);
	
	var _componentsHomeSectionHomeSection = __webpack_require__(134);
	
	var _componentsHomeSectionHomeSection2 = _interopRequireDefault(_componentsHomeSectionHomeSection);
	
	var _componentsNotFoundSectionNotFoundSection = __webpack_require__(135);
	
	var _componentsNotFoundSectionNotFoundSection2 = _interopRequireDefault(_componentsNotFoundSectionNotFoundSection);
	
	var _componentsTodoSectionTodoSection = __webpack_require__(137);
	
	var _componentsTodoSectionTodoSection2 = _interopRequireDefault(_componentsTodoSectionTodoSection);
	
	exports['default'] = _react2['default'].createElement(
	  _reactRouter.Route,
	  { name: 'app', path: '/', handler: _componentsAppApp2['default'] },
	  _react2['default'].createElement(_reactRouter.Route, { name: 'home', path: '/home', handler: _componentsHomeSectionHomeSection2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { name: 'todo', path: '/todo', handler: _componentsTodoSectionTodoSection2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { name: 'contact', path: '/contact', handler: _componentsContactSectionContact2['default'] }),
	  _react2['default'].createElement(_reactRouter.DefaultRoute, { handler: _componentsHomeSectionHomeSection2['default'] }),
	  _react2['default'].createElement(_reactRouter.NotFoundRoute, { handler: _componentsNotFoundSectionNotFoundSection2['default'] })
	);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/website-apis/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.js" + ": " + err.message); } }); } } })(); }

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(121);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(47)(content, {});
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

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(122);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(47)(content, {});
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

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(123);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(47)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./_TodoItem.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./_TodoItem.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(124);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(47)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?indentedSyntax!./styles.sass", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?indentedSyntax!./styles.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "V2d-uc_.png"

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9hY3Rpb25zL0FwcEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL2FsdC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL3N0b3Jlcy9BcHBTdG9yZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvfi9hbHQvZGlzdC9hbHQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL34vYWx0L34vZXMtc3ltYm9sL2Rpc3Qvc3ltYm9sLmpzIiwid2VicGFjazovLy8vVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9+L2FsdC9+L2V2ZW50ZW1pdHRlcjMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL34vYWx0L34vZmx1eC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvfi9hbHQvfi9mbHV4L2xpYi9EaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9+L2FsdC9+L2ZsdXgvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2NzcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vX1RvZG9JdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9zdHlsZXNoZWV0cy9zdHlsZXMuc2FzcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL2ltYWdlcy9mYXZpY29uLmljbyIsIndlYnBhY2s6Ly8vL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL2NvbXBvbmVudHMvQXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uL0NvbnRhY3QuanN4Iiwid2VicGFjazovLy8vVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9hcHAvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb24uanN4Iiwid2VicGFjazovLy8vVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9hcHAvY29tcG9uZW50cy9Ob3RGb3VuZFNlY3Rpb24vTm90Rm91bmRTZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb0l0ZW0uanN4Iiwid2VicGFjazovLy8vVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9UZXh0SW5wdXQuanN4Iiwid2VicGFjazovLy8vVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9hcHAvcm91dGVzLmpzIiwid2VicGFjazovLy8vVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzPzIwMTgiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyLnNjc3M/NDUxMCIsIndlYnBhY2s6Ly8vL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vX1RvZG9JdGVtLnNjc3M/MTViOCIsIndlYnBhY2s6Ly8vL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL3N0eWxlc2hlZXRzL3N0eWxlcy5zYXNzPzBjNzMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9jb21wb25lbnRzL0hlYWRlci9pbWFnZXMvcmVhY3QtbG9nby5wbmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7a0NBQWtCLENBQU87Ozs7d0NBQ04sRUFBYzs7OztBQUVqQyxLQUFNLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEdBQVUsQ0FBQyxDQUFDOztBQUVuQyxvQkFBTyxDQUFDLEdBQTJCLENBQUMsQ0FBQzs7QUFFckMsS0FBRyxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksTUFBTSxFQUFFO0FBQzVDLFNBQU0sQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN6Qiw4QkFBTyxHQUFHLENBQUMsTUFBTSxFQUFFLHlCQUFPLGVBQWUsRUFBRSxVQUFTLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDOUQsMEJBQU0sTUFBTSxDQUFDLGlDQUFDLEdBQUcsT0FBRSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztNQUN0RCxDQUFDLENBQUM7SUFDSjtFQUNGLEM7Ozs7Ozs7OztBQ2JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0EseUNBQXdDLGdCQUFnQjtBQUN4RCxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNq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O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRyxJQUFJO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDQUF1QztBQUN2Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVMsSUFBSTtBQUNiO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBLDJGQUEwRixhQUFhO0FBQ3ZHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRyxJQUFJO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUcsSUFBSTtBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFnRDs7QUFFaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFtRDtBQUNuRDs7QUFFQTtB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OztBQ2pCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7OztBQ2pCQSx1RCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuL3JvdXRlcycpO1xyXG5cclxucmVxdWlyZSgnLi9zdHlsZXNoZWV0cy9zdHlsZXMuc2FzcycpOyAgXHJcblxyXG5pZih0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdykge1xyXG4gIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHsgICAgXHJcbiAgICBSb3V0ZXIucnVuKHJvdXRlcywgUm91dGVyLkhpc3RvcnlMb2NhdGlvbiwgZnVuY3Rpb24oQXBwLCBzdGF0ZSkgeyAgXHJcbiAgICAgIFJlYWN0LnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcbiAgICB9KTsgICAgXHJcbiAgfVxyXG59O1xyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9hcHAuanN4XG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxuLy8gXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBhbHQgPSByZXF1aXJlKCcuLi9hbHQnKTtcclxuXHJcbmNsYXNzIEFwcEFjdGlvbnMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoXHJcbiAgICAgICdjcmVhdGUnLFxyXG4gICAgICAnZGVzdHJveScsXHJcbiAgICAgICd0b2dnbGVDb21wbGV0ZScsXHJcbiAgICAgICdmZXRjaCdcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFsdC5jcmVhdGVBY3Rpb25zKEFwcEFjdGlvbnMpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9+L2VzbGludC1sb2FkZXIhL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL2FjdGlvbnMvQXBwQWN0aW9ucy5qc1xuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCgpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQoKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGhlYWQuYXBwZW5kQ2hpbGQobGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQoKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYShKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiaW1wb3J0IEFsdCBmcm9tICdhbHQnO1xyXG5leHBvcnQgZGVmYXVsdCBuZXcgQWx0KCk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL34vZXNsaW50LWxvYWRlciEvVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9hcHAvYWx0LmpzXG4gKiovIiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xyXG5pbXBvcnQgbWVyZ2UgZnJvbSAnb2JqZWN0LWFzc2lnbic7XHJcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvQXBwQWN0aW9ucyc7XHJcbi8vIGltcG9ydCBmZXRjaCBmcm9tICd3aGF0d2ctZmV0Y2gnO1xyXG5cclxubGV0IGFwcFN0b3JlID0gYWx0LmNyZWF0ZVN0b3JlKGNsYXNzIEFwcFN0b3JlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYmluZEFjdGlvbnMoQXBwQWN0aW9ucyk7XHJcbiAgICB0aGlzLmRhdGFCeVJlc3RBcGkgPSB7fTtcclxuICAgIHRoaXMuZGF0YSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGlkLCB1cGRhdGVzKSB7XHJcbiAgICBpZih0aGlzLmRhdGFbaWRdICYmIHVwZGF0ZXMpe1xyXG4gICAgICB0aGlzLmRhdGFbaWRdID0gbWVyZ2UodGhpcy5kYXRhW2lkXSwgdXBkYXRlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBbGwodXBkYXRlcykge1xyXG4gICAgZm9yICh2YXIgaWQgaW4gdGhpcy5kYXRhKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKGlkLCB1cGRhdGVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ3JlYXRlKHRleHQpIHtcclxuICAgIHRleHQgPSB0ZXh0LnRyaW0oKTtcclxuICAgIGlmICh0ZXh0ID09PSAnJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBoYW5kIHdhdmluZyBvZiBjb3Vyc2UuXHJcbiAgICB2YXIgaWQgPSAoK25ldyBEYXRlKCkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpKS50b1N0cmluZygzNik7XHJcbiAgICB0aGlzLmRhdGFbaWRdID0ge1xyXG4gICAgICBpZDogaWQsXHJcbiAgICAgIGNvbXBsZXRlOiBmYWxzZSxcclxuICAgICAgdGV4dDogdGV4dFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uRmV0Y2goKSB7XHJcbiAgICB0aGlzLmRhdGFCeVJlc3RBcGkgPSB7ZGF0YTogJ2hlbGxvJ307XHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9naXRodWInKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KS50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhQnlSZXN0QXBpID0ge2RhdGE6IGpzb259O1xyXG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSgpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIG9uVXBkYXRlVGV4dCh4KSB7XHJcbiAgICBsZXQgeyBpZCwgdGV4dCB9ID0geDtcclxuICAgIHRleHQgPSB0ZXh0ID8gdGV4dC50cmltKCkgOiAnJztcclxuICAgIGlmICh0ZXh0ID09PSAnJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZShpZCwgeyB0ZXh0IH0pO1xyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVDb21wbGV0ZShpZCkge1xyXG4gICAgbGV0IGNvbXBsZXRlID0gIXRoaXMuZGF0YVtpZF0uY29tcGxldGU7XHJcbiAgICB0aGlzLnVwZGF0ZShpZCwgeyBjb21wbGV0ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlQ29tcGxldGVBbGwoKSB7XHJcbiAgICAvKnZhciBjb21wbGV0ZSA9ICF0b2RvU3RvcmUuYXJlQWxsQ29tcGxldGUoKTtcclxuICAgIHRoaXMudXBkYXRlQWxsKHsgY29tcGxldGUgfSk7Ki9cclxuICB9XHJcblxyXG4gIG9uRGVzdHJveShpZCkge1xyXG4gICAgZGVsZXRlIHRoaXMuZGF0YVtpZF07XHJcbiAgfVxyXG5cclxuICBvbkRlc3Ryb3lDb21wbGV0ZWQoKSB7XHJcbiAgICBmb3IgKGxldCBpZCBpbiB0aGlzLmRhdGEpIHtcclxuICAgICAgaWYgKHRoaXMuZGF0YVtpZF0uY29tcGxldGUpIHtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveShpZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhcmVBbGxDb21wbGV0ZSgpIHtcclxuICAgIGxldCB7IGRhdGEgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHtcclxuICAgICAgaWYgKCFkYXRhW2lkXS5jb21wbGV0ZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXBwU3RvcmU7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL34vZXNsaW50LWxvYWRlciEvVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9hcHAvc3RvcmVzL0FwcFN0b3JlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmUgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqOyB9O1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikgeyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpOyB9IH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MgJiYgZGVzYy53cml0YWJsZSkgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH07XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHsgdmFyIHByb3AgPSBwcm9wc1trZXldOyBwcm9wLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChwcm9wLnZhbHVlKSBwcm9wLndyaXRhYmxlID0gdHJ1ZTsgfSBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKTsgfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH07XG5cbnZhciBEaXNwYXRjaGVyID0gcmVxdWlyZShcImZsdXhcIikuRGlzcGF0Y2hlcjtcblxudmFyIEV2ZW50RW1pdHRlciA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiZXZlbnRlbWl0dGVyM1wiKSk7XG5cbnZhciBTeW1ib2wgPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcImVzLXN5bWJvbFwiKSk7XG5cbnZhciBhc3NpZ24gPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIikpO1xuXG52YXIgQUNUSU9OX0hBTkRMRVIgPSBTeW1ib2woXCJhY3Rpb24gY3JlYXRvciBoYW5kbGVyXCIpO1xudmFyIEFDVElPTl9LRVkgPSBTeW1ib2woXCJob2xkcyB0aGUgYWN0aW9ucyB1aWQgc3ltYm9sIGZvciBsaXN0ZW5pbmdcIik7XG52YXIgQUNUSU9OX1VJRCA9IFN5bWJvbChcInRoZSBhY3Rpb25zIHVpZCBuYW1lXCIpO1xudmFyIEFMTF9MSVNURU5FUlMgPSBTeW1ib2woXCJuYW1lIG9mIGxpc3RlbmVyc1wiKTtcbnZhciBFRSA9IFN5bWJvbChcImV2ZW50IGVtaXR0ZXIgaW5zdGFuY2VcIik7XG52YXIgSU5JVF9TTkFQU0hPVCA9IFN5bWJvbChcImluaXQgc25hcHNob3Qgc3RvcmFnZVwiKTtcbnZhciBMQVNUX1NOQVBTSE9UID0gU3ltYm9sKFwibGFzdCBzbmFwc2hvdCBzdG9yYWdlXCIpO1xudmFyIExJRkVDWUNMRSA9IFN5bWJvbChcInN0b3JlIGxpZmVjeWNsZSBsaXN0ZW5lcnNcIik7XG52YXIgTElTVEVORVJTID0gU3ltYm9sKFwic3RvcmVzIGFjdGlvbiBsaXN0ZW5lcnMgc3RvcmFnZVwiKTtcbnZhciBQVUJMSUNfTUVUSE9EUyA9IFN5bWJvbChcInN0b3JlIHB1YmxpYyBtZXRob2Qgc3RvcmFnZVwiKTtcbnZhciBTVEFURV9DSEFOR0VEID0gU3ltYm9sKCk7XG52YXIgU1RBVEVfQ09OVEFJTkVSID0gU3ltYm9sKFwidGhlIHN0YXRlIGNvbnRhaW5lclwiKTtcblxudmFyIEdsb2JhbEFjdGlvbnNOYW1lUmVnaXN0cnkgPSB7fTtcblxuZnVuY3Rpb24gZm9ybWF0QXNDb25zdGFudChuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoL1thLXpdKFtBLVpdKS9nLCBmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBcIlwiICsgaVswXSArIFwiX1wiICsgaVsxXS50b0xvd2VyQ2FzZSgpO1xuICB9KS50b1VwcGVyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiB1aWQoY29udGFpbmVyLCBuYW1lKSB7XG4gIHZhciBjb3VudCA9IDA7XG4gIHZhciBrZXkgPSBuYW1lO1xuICB3aGlsZSAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoY29udGFpbmVyLCBrZXkpKSB7XG4gICAga2V5ID0gbmFtZSArIFN0cmluZygrK2NvdW50KTtcbiAgfVxuICByZXR1cm4ga2V5O1xufVxuXG5mdW5jdGlvbiBkb1NldFN0YXRlKHN0b3JlLCBzdG9yZUluc3RhbmNlLCBuZXh0U3RhdGUpIHtcbiAgaWYgKCFuZXh0U3RhdGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXN0b3JlLmFsdC5kaXNwYXRjaGVyLmlzRGlzcGF0Y2hpbmcoKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjYW4gb25seSB1c2Ugc2V0U3RhdGUgd2hpbGUgZGlzcGF0Y2hpbmdcIik7XG4gIH1cblxuICBpZiAodHlwZW9mIG5leHRTdGF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgYXNzaWduKHN0b3JlSW5zdGFuY2VbU1RBVEVfQ09OVEFJTkVSXSwgbmV4dFN0YXRlKHN0b3JlSW5zdGFuY2VbU1RBVEVfQ09OVEFJTkVSXSkpO1xuICB9IGVsc2Uge1xuICAgIGFzc2lnbihzdG9yZUluc3RhbmNlW1NUQVRFX0NPTlRBSU5FUl0sIG5leHRTdGF0ZSk7XG4gIH1cblxuICBzdG9yZUluc3RhbmNlW1NUQVRFX0NIQU5HRURdID0gdHJ1ZTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIE5vb3BDbGFzcygpIHt9XG5cbnZhciBidWlsdElucyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE5vb3BDbGFzcyk7XG52YXIgYnVpbHRJblByb3RvID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTm9vcENsYXNzLnByb3RvdHlwZSk7XG5cbnZhciBnZXRJbnRlcm5hbE1ldGhvZHMgPSBmdW5jdGlvbiAob2JqLCBleGNsdWRlZCkge1xuICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5yZWR1Y2UoZnVuY3Rpb24gKHZhbHVlLCBtKSB7XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2YobSkgIT09IC0xKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdmFsdWVbbV0gPSBvYmpbbV07XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LCB7fSk7XG59O1xuXG52YXIgQWx0U3RvcmUgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBbHRTdG9yZShkaXNwYXRjaGVyLCBtb2RlbCwgc3RhdGUsIFN0b3JlTW9kZWwpIHtcbiAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBbHRTdG9yZSk7XG5cbiAgICB0aGlzW0VFXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzW0xJRkVDWUNMRV0gPSB7fTtcbiAgICB0aGlzW1NUQVRFX0NIQU5HRURdID0gZmFsc2U7XG4gICAgdGhpc1tTVEFURV9DT05UQUlORVJdID0gc3RhdGUgfHwgbW9kZWw7XG5cbiAgICB0aGlzLmJvdW5kTGlzdGVuZXJzID0gbW9kZWxbQUxMX0xJU1RFTkVSU107XG4gICAgdGhpcy5TdG9yZU1vZGVsID0gU3RvcmVNb2RlbDtcbiAgICBpZiAodHlwZW9mIHRoaXMuU3RvcmVNb2RlbCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgdGhpcy5TdG9yZU1vZGVsLnN0YXRlID0gYXNzaWduKHt9LCBTdG9yZU1vZGVsLnN0YXRlKTtcbiAgICB9XG5cbiAgICBhc3NpZ24odGhpc1tMSUZFQ1lDTEVdLCBtb2RlbFtMSUZFQ1lDTEVdKTtcbiAgICBhc3NpZ24odGhpcywgbW9kZWxbUFVCTElDX01FVEhPRFNdKTtcblxuICAgIC8vIFJlZ2lzdGVyIGRpc3BhdGNoZXJcbiAgICB0aGlzLmRpc3BhdGNoVG9rZW4gPSBkaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgICBpZiAodHlwZW9mIG1vZGVsLmJlZm9yZUVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBtb2RlbC5iZWZvcmVFYWNoKHBheWxvYWQuYWN0aW9uLnRvU3RyaW5nKCksIHBheWxvYWQuZGF0YSwgX3RoaXM4W1NUQVRFX0NPTlRBSU5FUl0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kZWxbTElTVEVORVJTXVtwYXlsb2FkLmFjdGlvbl0pIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gbW9kZWxbTElTVEVORVJTXVtwYXlsb2FkLmFjdGlvbl0ocGF5bG9hZC5kYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmIChfdGhpczhbTElGRUNZQ0xFXS5lcnJvcikge1xuICAgICAgICAgICAgX3RoaXM4W0xJRkVDWUNMRV0uZXJyb3IoZSwgcGF5bG9hZC5hY3Rpb24udG9TdHJpbmcoKSwgcGF5bG9hZC5kYXRhLCBfdGhpczhbU1RBVEVfQ09OVEFJTkVSXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UgfHwgX3RoaXM4W1NUQVRFX0NIQU5HRURdKSB7XG4gICAgICAgICAgX3RoaXM4LmVtaXRDaGFuZ2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzOFtTVEFURV9DSEFOR0VEXSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG1vZGVsLmFmdGVyRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG1vZGVsLmFmdGVyRWFjaChwYXlsb2FkLmFjdGlvbi50b1N0cmluZygpLCBwYXlsb2FkLmRhdGEsIF90aGlzOFtTVEFURV9DT05UQUlORVJdKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzW0xJRkVDWUNMRV0uaW5pdCkge1xuICAgICAgdGhpc1tMSUZFQ1lDTEVdLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQWx0U3RvcmUsIHtcbiAgICBnZXRFdmVudEVtaXR0ZXI6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRFdmVudEVtaXR0ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0VFXTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVtaXRDaGFuZ2U6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbWl0Q2hhbmdlKCkge1xuICAgICAgICB0aGlzW0VFXS5lbWl0KFwiY2hhbmdlXCIsIHRoaXNbU1RBVEVfQ09OVEFJTkVSXSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBsaXN0ZW46IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oY2IpIHtcbiAgICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICAgICAgdGhpc1tFRV0ub24oXCJjaGFuZ2VcIiwgY2IpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczgudW5saXN0ZW4oY2IpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgdW5saXN0ZW46IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmxpc3RlbihjYikge1xuICAgICAgICBpZiAodGhpc1tMSUZFQ1lDTEVdLnVubGlzdGVuKSB7XG4gICAgICAgICAgdGhpc1tMSUZFQ1lDTEVdLnVubGlzdGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1tFRV0ucmVtb3ZlTGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2IpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0U3RhdGU6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICAgICAgLy8gQ29weSBvdmVyIHN0YXRlIHNvIGl0J3MgUk8uXG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXNbU1RBVEVfQ09OVEFJTkVSXTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0YXRlKS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgICAgICAgb2JqW2tleV0gPSBzdGF0ZVtrZXldO1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBBbHRTdG9yZTtcbn0pKCk7XG5cbnZhciBBY3Rpb25DcmVhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQWN0aW9uQ3JlYXRvcihhbHQsIG5hbWUsIGFjdGlvbiwgYWN0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb25DcmVhdG9yKTtcblxuICAgIHRoaXNbQUNUSU9OX1VJRF0gPSBuYW1lO1xuICAgIHRoaXNbQUNUSU9OX0hBTkRMRVJdID0gYWN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICB0aGlzLmFsdCA9IGFsdDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBY3Rpb25DcmVhdG9yLCB7XG4gICAgZGlzcGF0Y2g6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaChkYXRhKSB7XG4gICAgICAgIHRoaXMuYWx0LmRpc3BhdGNoKHRoaXNbQUNUSU9OX1VJRF0sIGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIEFjdGlvbkNyZWF0b3I7XG59KSgpO1xuXG52YXIgU3RvcmVNaXhpbkxpc3RlbmVycyA9IHtcbiAgb246IGZ1bmN0aW9uIG9uKGxpZmVjeWNsZUV2ZW50LCBoYW5kbGVyKSB7XG4gICAgdGhpc1tMSUZFQ1lDTEVdW2xpZmVjeWNsZUV2ZW50XSA9IGhhbmRsZXIuYmluZCh0aGlzKTtcbiAgfSxcblxuICBiaW5kQWN0aW9uOiBmdW5jdGlvbiBiaW5kQWN0aW9uKHN5bWJvbCwgaGFuZGxlcikge1xuICAgIGlmICghc3ltYm9sKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJJbnZhbGlkIGFjdGlvbiByZWZlcmVuY2UgcGFzc2VkIGluXCIpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImJpbmRBY3Rpb24gZXhwZWN0cyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmIChoYW5kbGVyLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBY3Rpb24gaGFuZGxlciBpbiBzdG9yZSBcIiArIHRoaXMuX3N0b3JlTmFtZSArIFwiIGZvciBcIiArIChcIlwiICsgKHN5bWJvbFtBQ1RJT05fS0VZXSB8fCBzeW1ib2wpLnRvU3RyaW5nKCkgKyBcIiB3YXMgZGVmaW5lZCB3aXRoIDIgXCIpICsgXCJwYXJhbWV0ZXJzLiBPbmx5IGEgc2luZ2xlIHBhcmFtZXRlciBpcyBwYXNzZWQgdGhyb3VnaCB0aGUgXCIgKyBcImRpc3BhdGNoZXIsIGRpZCB5b3UgbWVhbiB0byBwYXNzIGluIGFuIE9iamVjdCBpbnN0ZWFkP1wiKTtcbiAgICB9XG5cbiAgICAvLyBZb3UgY2FuIHBhc3MgaW4gdGhlIGNvbnN0YW50IG9yIHRoZSBmdW5jdGlvbiBpdHNlbGZcbiAgICB2YXIga2V5ID0gc3ltYm9sW0FDVElPTl9LRVldID8gc3ltYm9sW0FDVElPTl9LRVldIDogc3ltYm9sO1xuICAgIHRoaXNbTElTVEVORVJTXVtrZXldID0gaGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXNbQUxMX0xJU1RFTkVSU10ucHVzaChTeW1ib2wua2V5Rm9yKGtleSkpO1xuICB9LFxuXG4gIGJpbmRBY3Rpb25zOiBmdW5jdGlvbiBiaW5kQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIHZhciBzeW1ib2wgPSBhY3Rpb25zW2FjdGlvbl07XG4gICAgICB2YXIgbWF0Y2hGaXJzdENoYXJhY3RlciA9IC8uLztcbiAgICAgIHZhciBhc3N1bWVkRXZlbnRIYW5kbGVyID0gYWN0aW9uLnJlcGxhY2UobWF0Y2hGaXJzdENoYXJhY3RlciwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIFwib25cIiArIHhbMF0udG9VcHBlckNhc2UoKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGhhbmRsZXIgPSBudWxsO1xuXG4gICAgICBpZiAoX3RoaXM4W2FjdGlvbl0gJiYgX3RoaXM4W2Fzc3VtZWRFdmVudEhhbmRsZXJdKSB7XG4gICAgICAgIC8vIElmIHlvdSBoYXZlIGJvdGggYWN0aW9uIGFuZCBvbkFjdGlvblxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJZb3UgaGF2ZSBtdWx0aXBsZSBhY3Rpb24gaGFuZGxlcnMgYm91bmQgdG8gYW4gYWN0aW9uOiBcIiArIChcIlwiICsgYWN0aW9uICsgXCIgYW5kIFwiICsgYXNzdW1lZEV2ZW50SGFuZGxlcikpO1xuICAgICAgfSBlbHNlIGlmIChfdGhpczhbYWN0aW9uXSkge1xuICAgICAgICAvLyBhY3Rpb25cbiAgICAgICAgaGFuZGxlciA9IF90aGlzOFthY3Rpb25dO1xuICAgICAgfSBlbHNlIGlmIChfdGhpczhbYXNzdW1lZEV2ZW50SGFuZGxlcl0pIHtcbiAgICAgICAgLy8gb25BY3Rpb25cbiAgICAgICAgaGFuZGxlciA9IF90aGlzOFthc3N1bWVkRXZlbnRIYW5kbGVyXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgX3RoaXM4LmJpbmRBY3Rpb24oc3ltYm9sLCBoYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBiaW5kTGlzdGVuZXJzOiBmdW5jdGlvbiBiaW5kTGlzdGVuZXJzKG9iaikge1xuICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgICB2YXIgc3ltYm9sID0gb2JqW21ldGhvZE5hbWVdO1xuICAgICAgdmFyIGxpc3RlbmVyID0gX3RoaXM4W21ldGhvZE5hbWVdO1xuXG4gICAgICBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcIlwiICsgbWV0aG9kTmFtZSArIFwiIGRlZmluZWQgYnV0IGRvZXMgbm90IGV4aXN0IGluIFwiICsgX3RoaXM4Ll9zdG9yZU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzeW1ib2wpKSB7XG4gICAgICAgIHN5bWJvbC5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICBfdGhpczguYmluZEFjdGlvbihhY3Rpb24sIGxpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpczguYmluZEFjdGlvbihzeW1ib2wsIGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59O1xuXG52YXIgU3RvcmVNaXhpbkVzc2VudGlhbHMgPSB7XG4gIHdhaXRGb3I6IGZ1bmN0aW9uIHdhaXRGb3Ioc291cmNlcykge1xuICAgIGlmICghc291cmNlcykge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwiRGlzcGF0Y2ggdG9rZW5zIG5vdCBwcm92aWRlZFwiKTtcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgc291cmNlcyA9IEFycmF5LmlzQXJyYXkoc291cmNlcykgPyBzb3VyY2VzIDogW3NvdXJjZXNdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzb3VyY2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICB2YXIgdG9rZW5zID0gc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5kaXNwYXRjaFRva2VuIHx8IHNvdXJjZTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlzcGF0Y2hlci53YWl0Rm9yKHRva2Vucyk7XG4gIH0sXG5cbiAgZXhwb3J0UHVibGljTWV0aG9kczogZnVuY3Rpb24gZXhwb3J0UHVibGljTWV0aG9kcyhtZXRob2RzKSB7XG4gICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICBPYmplY3Qua2V5cyhtZXRob2RzKS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIG1ldGhvZHNbbWV0aG9kTmFtZV0gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXhwb3J0UHVibGljTWV0aG9kcyBleHBlY3RzIGEgZnVuY3Rpb25cIik7XG4gICAgICB9XG5cbiAgICAgIF90aGlzOFtQVUJMSUNfTUVUSE9EU11bbWV0aG9kTmFtZV0gPSBtZXRob2RzW21ldGhvZE5hbWVdO1xuICAgIH0pO1xuICB9LFxuXG4gIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uIGVtaXRDaGFuZ2UoKSB7XG4gICAgdGhpcy5nZXRJbnN0YW5jZSgpLmVtaXRDaGFuZ2UoKTtcbiAgfVxufTtcblxudmFyIHNldEFwcFN0YXRlID0gZnVuY3Rpb24gKGluc3RhbmNlLCBkYXRhLCBvblN0b3JlKSB7XG4gIHZhciBvYmogPSBpbnN0YW5jZS5kZXNlcmlhbGl6ZShkYXRhKTtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgc3RvcmUgPSBpbnN0YW5jZS5zdG9yZXNba2V5XTtcbiAgICBpZiAoc3RvcmUpIHtcbiAgICAgIGlmIChzdG9yZVtMSUZFQ1lDTEVdLmRlc2VyaWFsaXplKSB7XG4gICAgICAgIG9ialtrZXldID0gc3RvcmVbTElGRUNZQ0xFXS5kZXNlcmlhbGl6ZShvYmpba2V5XSkgfHwgb2JqW2tleV07XG4gICAgICB9XG4gICAgICBhc3NpZ24oc3RvcmVbU1RBVEVfQ09OVEFJTkVSXSwgb2JqW2tleV0pO1xuICAgICAgb25TdG9yZShzdG9yZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBzbmFwc2hvdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc3RvcmVOYW1lcyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzdG9yZU5hbWVzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBzdG9yZXMgPSBzdG9yZU5hbWVzLmxlbmd0aCA/IHN0b3JlTmFtZXMgOiBPYmplY3Qua2V5cyhpbnN0YW5jZS5zdG9yZXMpO1xuICByZXR1cm4gc3RvcmVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICB2YXIgc3RvcmUgPSBpbnN0YW5jZS5zdG9yZXNba2V5XTtcbiAgICBpZiAoc3RvcmVbTElGRUNZQ0xFXS5zbmFwc2hvdCkge1xuICAgICAgc3RvcmVbTElGRUNZQ0xFXS5zbmFwc2hvdCgpO1xuICAgIH1cbiAgICB2YXIgY3VzdG9tU25hcHNob3QgPSBzdG9yZVtMSUZFQ1lDTEVdLnNlcmlhbGl6ZSAmJiBzdG9yZVtMSUZFQ1lDTEVdLnNlcmlhbGl6ZSgpO1xuICAgIG9ialtrZXldID0gY3VzdG9tU25hcHNob3QgPyBjdXN0b21TbmFwc2hvdCA6IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufTtcblxudmFyIHNhdmVJbml0aWFsU25hcHNob3QgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIGtleSkge1xuICB2YXIgc3RhdGUgPSBpbnN0YW5jZS5zdG9yZXNba2V5XVtTVEFURV9DT05UQUlORVJdO1xuICB2YXIgaW5pdGlhbCA9IGluc3RhbmNlLmRlc2VyaWFsaXplKGluc3RhbmNlW0lOSVRfU05BUFNIT1RdKTtcbiAgaW5pdGlhbFtrZXldID0gc3RhdGU7XG4gIGluc3RhbmNlW0lOSVRfU05BUFNIT1RdID0gaW5zdGFuY2Uuc2VyaWFsaXplKGluaXRpYWwpO1xuICBpbnN0YW5jZVtMQVNUX1NOQVBTSE9UXSA9IGluc3RhbmNlW0lOSVRfU05BUFNIT1RdO1xufTtcblxudmFyIGZpbHRlclNuYXBzaG90T2ZTdG9yZXMgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIHNlcmlhbGl6ZWRTbmFwc2hvdCwgc3RvcmVOYW1lcykge1xuICB2YXIgc3RvcmVzID0gaW5zdGFuY2UuZGVzZXJpYWxpemUoc2VyaWFsaXplZFNuYXBzaG90KTtcbiAgdmFyIHN0b3Jlc1RvUmVzZXQgPSBzdG9yZU5hbWVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBuYW1lKSB7XG4gICAgaWYgKCFzdG9yZXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcIlwiICsgbmFtZSArIFwiIGlzIG5vdCBhIHZhbGlkIHN0b3JlXCIpO1xuICAgIH1cbiAgICBvYmpbbmFtZV0gPSBzdG9yZXNbbmFtZV07XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xuICByZXR1cm4gaW5zdGFuY2Uuc2VyaWFsaXplKHN0b3Jlc1RvUmVzZXQpO1xufTtcblxudmFyIGNyZWF0ZVN0b3JlRnJvbU9iamVjdCA9IGZ1bmN0aW9uIChhbHQsIFN0b3JlTW9kZWwsIGtleSwgc2F2ZVN0b3JlKSB7XG4gIHZhciBzdG9yZUluc3RhbmNlID0gdW5kZWZpbmVkO1xuXG4gIHZhciBTdG9yZVByb3RvID0ge307XG4gIFN0b3JlUHJvdG9bQUxMX0xJU1RFTkVSU10gPSBbXTtcbiAgU3RvcmVQcm90b1tMSUZFQ1lDTEVdID0ge307XG4gIFN0b3JlUHJvdG9bTElTVEVORVJTXSA9IHt9O1xuXG4gIGFzc2lnbihTdG9yZVByb3RvLCB7XG4gICAgX3N0b3JlTmFtZToga2V5LFxuICAgIGFsdDogYWx0LFxuICAgIGRpc3BhdGNoZXI6IGFsdC5kaXNwYXRjaGVyLFxuICAgIGdldEluc3RhbmNlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZSgpIHtcbiAgICAgIHJldHVybiBzdG9yZUluc3RhbmNlO1xuICAgIH0sXG4gICAgc2V0U3RhdGU6IGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgICAgZG9TZXRTdGF0ZSh0aGlzLCBzdG9yZUluc3RhbmNlLCBuZXh0U3RhdGUpO1xuICAgIH1cbiAgfSwgU3RvcmVNaXhpbkxpc3RlbmVycywgU3RvcmVNaXhpbkVzc2VudGlhbHMsIFN0b3JlTW9kZWwpO1xuXG4gIC8vIGJpbmQgdGhlIHN0b3JlIGxpc3RlbmVyc1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoU3RvcmVQcm90by5iaW5kTGlzdGVuZXJzKSB7XG4gICAgU3RvcmVNaXhpbkxpc3RlbmVycy5iaW5kTGlzdGVuZXJzLmNhbGwoU3RvcmVQcm90bywgU3RvcmVQcm90by5iaW5kTGlzdGVuZXJzKTtcbiAgfVxuXG4gIC8vIGJpbmQgdGhlIGxpZmVjeWNsZSBldmVudHNcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKFN0b3JlUHJvdG8ubGlmZWN5Y2xlKSB7XG4gICAgT2JqZWN0LmtleXMoU3RvcmVQcm90by5saWZlY3ljbGUpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBTdG9yZU1peGluTGlzdGVuZXJzLm9uLmNhbGwoU3RvcmVQcm90bywgZXZlbnQsIFN0b3JlUHJvdG8ubGlmZWN5Y2xlW2V2ZW50XSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBjcmVhdGUgdGhlIGluc3RhbmNlIGFuZCBhc3NpZ24gdGhlIHB1YmxpYyBtZXRob2RzIHRvIHRoZSBpbnN0YW5jZVxuICBzdG9yZUluc3RhbmNlID0gYXNzaWduKG5ldyBBbHRTdG9yZShhbHQuZGlzcGF0Y2hlciwgU3RvcmVQcm90bywgU3RvcmVQcm90by5zdGF0ZSwgU3RvcmVNb2RlbCksIFN0b3JlUHJvdG8ucHVibGljTWV0aG9kcyk7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHNhdmVTdG9yZSkge1xuICAgIGFsdC5zdG9yZXNba2V5XSA9IHN0b3JlSW5zdGFuY2U7XG4gICAgc2F2ZUluaXRpYWxTbmFwc2hvdChhbHQsIGtleSk7XG4gIH1cblxuICByZXR1cm4gc3RvcmVJbnN0YW5jZTtcbn07XG5cbnZhciBBbHQgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBbHQoKSB7XG4gICAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWx0KTtcblxuICAgIHRoaXMuc2VyaWFsaXplID0gY29uZmlnLnNlcmlhbGl6ZSB8fCBKU09OLnN0cmluZ2lmeTtcbiAgICB0aGlzLmRlc2VyaWFsaXplID0gY29uZmlnLmRlc2VyaWFsaXplIHx8IEpTT04ucGFyc2U7XG4gICAgdGhpcy5kaXNwYXRjaGVyID0gY29uZmlnLmRpc3BhdGNoZXIgfHwgbmV3IERpc3BhdGNoZXIoKTtcbiAgICB0aGlzLmFjdGlvbnMgPSB7fTtcbiAgICB0aGlzLnN0b3JlcyA9IHt9O1xuICAgIHRoaXNbTEFTVF9TTkFQU0hPVF0gPSB0aGlzW0lOSVRfU05BUFNIT1RdID0gXCJ7fVwiO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFsdCwge1xuICAgIGRpc3BhdGNoOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaCh7IGFjdGlvbjogYWN0aW9uLCBkYXRhOiBkYXRhIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlU3RvcmU6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVTdG9yZShTdG9yZU1vZGVsLCBpZGVuKSB7XG4gICAgICAgIHZhciBzYXZlU3RvcmUgPSBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgdmFyIHN0b3JlSW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBrZXkgPSBpZGVuIHx8IFN0b3JlTW9kZWwubmFtZSB8fCBTdG9yZU1vZGVsLmRpc3BsYXlOYW1lIHx8IFwiXCI7XG5cbiAgICAgICAgaWYgKHNhdmVTdG9yZSAmJiAodGhpcy5zdG9yZXNba2V5XSB8fCAha2V5KSkge1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yZXNba2V5XSkge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4obmV3IFJlZmVyZW5jZUVycm9yKFwiQSBzdG9yZSBuYW1lZCBcIiArIGtleSArIFwiIGFscmVhZHkgZXhpc3RzLCBkb3VibGUgY2hlY2sgeW91ciBzdG9yZSBcIiArIFwibmFtZXMgb3IgcGFzcyBpbiB5b3VyIG93biBjdXN0b20gaWRlbnRpZmllciBmb3IgZWFjaCBzdG9yZVwiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4obmV3IFJlZmVyZW5jZUVycm9yKFwiU3RvcmUgbmFtZSB3YXMgbm90IHNwZWNpZmllZFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAga2V5ID0gdWlkKHRoaXMuc3RvcmVzLCBrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBTdG9yZU1vZGVsID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZVN0b3JlRnJvbU9iamVjdCh0aGlzLCBTdG9yZU1vZGVsLCBrZXksIHNhdmVTdG9yZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGluZyBhIGNsYXNzIGhlcmUgc28gd2UgZG9uJ3Qgb3ZlcmxvYWQgdGhlIHByb3ZpZGVkIHN0b3JlJ3NcbiAgICAgICAgLy8gcHJvdG90eXBlIHdpdGggdGhlIG1peGluIGJlaGF2aW91ciBhbmQgSSdtIGV4dGVuZGluZyBmcm9tIFN0b3JlTW9kZWxcbiAgICAgICAgLy8gc28gd2UgY2FuIGluaGVyaXQgYW55IGV4dGVuc2lvbnMgZnJvbSB0aGUgcHJvdmlkZWQgc3RvcmUuXG5cbiAgICAgICAgdmFyIFN0b3JlID0gKGZ1bmN0aW9uIChfU3RvcmVNb2RlbCkge1xuICAgICAgICAgIGZ1bmN0aW9uIFN0b3JlKGFsdCkge1xuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0b3JlKTtcblxuICAgICAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3RvcmUucHJvdG90eXBlKSwgXCJjb25zdHJ1Y3RvclwiLCB0aGlzKS5jYWxsKHRoaXMsIGFsdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX2luaGVyaXRzKFN0b3JlLCBfU3RvcmVNb2RlbCk7XG5cbiAgICAgICAgICByZXR1cm4gU3RvcmU7XG4gICAgICAgIH0pKFN0b3JlTW9kZWwpO1xuXG4gICAgICAgIGFzc2lnbihTdG9yZS5wcm90b3R5cGUsIFN0b3JlTWl4aW5MaXN0ZW5lcnMsIFN0b3JlTWl4aW5Fc3NlbnRpYWxzLCB7XG4gICAgICAgICAgX3N0b3JlTmFtZToga2V5LFxuICAgICAgICAgIGFsdDogdGhpcyxcbiAgICAgICAgICBkaXNwYXRjaGVyOiB0aGlzLmRpc3BhdGNoZXIsXG4gICAgICAgICAgZ2V0SW5zdGFuY2U6IGZ1bmN0aW9uIGdldEluc3RhbmNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlSW5zdGFuY2U7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXRTdGF0ZTogZnVuY3Rpb24gc2V0U3RhdGUobmV4dFN0YXRlKSB7XG4gICAgICAgICAgICBkb1NldFN0YXRlKHRoaXMsIHN0b3JlSW5zdGFuY2UsIG5leHRTdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBTdG9yZS5wcm90b3R5cGVbQUxMX0xJU1RFTkVSU10gPSBbXTtcbiAgICAgICAgU3RvcmUucHJvdG90eXBlW0xJRkVDWUNMRV0gPSB7fTtcbiAgICAgICAgU3RvcmUucHJvdG90eXBlW0xJU1RFTkVSU10gPSB7fTtcbiAgICAgICAgU3RvcmUucHJvdG90eXBlW1BVQkxJQ19NRVRIT0RTXSA9IHt9O1xuXG4gICAgICAgIHZhciBzdG9yZSA9IG5ldyBTdG9yZSh0aGlzKTtcblxuICAgICAgICBzdG9yZUluc3RhbmNlID0gYXNzaWduKG5ldyBBbHRTdG9yZSh0aGlzLmRpc3BhdGNoZXIsIHN0b3JlLCBudWxsLCBTdG9yZU1vZGVsKSwgZ2V0SW50ZXJuYWxNZXRob2RzKFN0b3JlTW9kZWwsIGJ1aWx0SW5zKSk7XG5cbiAgICAgICAgaWYgKHNhdmVTdG9yZSkge1xuICAgICAgICAgIHRoaXMuc3RvcmVzW2tleV0gPSBzdG9yZUluc3RhbmNlO1xuICAgICAgICAgIHNhdmVJbml0aWFsU25hcHNob3QodGhpcywga2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdG9yZUluc3RhbmNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZXJhdGVBY3Rpb25zOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVBY3Rpb25zKCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYWN0aW9uTmFtZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhY3Rpb25OYW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUFjdGlvbnMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zLmFwcGx5KHRoaXMsIGFjdGlvbk5hbWVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVBY3Rpb246IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVBY3Rpb24obmFtZSwgaW1wbGVtZW50YXRpb24sIG9iaikge1xuICAgICAgICB2YXIgYWN0aW9uSWQgPSB1aWQoR2xvYmFsQWN0aW9uc05hbWVSZWdpc3RyeSwgbmFtZSk7XG4gICAgICAgIEdsb2JhbEFjdGlvbnNOYW1lUmVnaXN0cnlbYWN0aW9uSWRdID0gMTtcbiAgICAgICAgdmFyIGFjdGlvbk5hbWUgPSBTeW1ib2xbXCJmb3JcIl0oYWN0aW9uSWQpO1xuXG4gICAgICAgIC8vIFdyYXAgdGhlIGFjdGlvbiBzbyB3ZSBjYW4gcHJvdmlkZSBhIGRpc3BhdGNoIG1ldGhvZFxuICAgICAgICB2YXIgbmV3QWN0aW9uID0gbmV3IEFjdGlvbkNyZWF0b3IodGhpcywgYWN0aW9uTmFtZSwgaW1wbGVtZW50YXRpb24sIG9iaik7XG5cbiAgICAgICAgdmFyIGFjdGlvbiA9IG5ld0FjdGlvbltBQ1RJT05fSEFORExFUl07XG4gICAgICAgIGFjdGlvbi5kZWZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG5ld0FjdGlvbltBQ1RJT05fSEFORExFUl0uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGFjdGlvbltBQ1RJT05fS0VZXSA9IGFjdGlvbk5hbWU7XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVBY3Rpb25zOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQWN0aW9ucyhBY3Rpb25zQ2xhc3MpIHtcbiAgICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGV4cG9ydE9iaiA9IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICAgICAgdmFyIGFjdGlvbnMgPSB7fTtcbiAgICAgICAgdmFyIGtleSA9IEFjdGlvbnNDbGFzcy5uYW1lIHx8IEFjdGlvbnNDbGFzcy5kaXNwbGF5TmFtZSB8fCBcIlwiO1xuXG4gICAgICAgIGlmICh0eXBlb2YgQWN0aW9uc0NsYXNzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXNzaWduKGFjdGlvbnMsIGdldEludGVybmFsTWV0aG9kcyhBY3Rpb25zQ2xhc3MucHJvdG90eXBlLCBidWlsdEluUHJvdG8pKTtcblxuICAgICAgICAgICAgdmFyIEFjdGlvbnNHZW5lcmF0b3IgPSAoZnVuY3Rpb24gKF9BY3Rpb25zQ2xhc3MpIHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gQWN0aW9uc0dlbmVyYXRvcihhbHQpIHtcbiAgICAgICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uc0dlbmVyYXRvcik7XG5cbiAgICAgICAgICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihBY3Rpb25zR2VuZXJhdG9yLnByb3RvdHlwZSksIFwiY29uc3RydWN0b3JcIiwgdGhpcykuY2FsbCh0aGlzLCBhbHQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgX2luaGVyaXRzKEFjdGlvbnNHZW5lcmF0b3IsIF9BY3Rpb25zQ2xhc3MpO1xuXG4gICAgICAgICAgICAgIF9jcmVhdGVDbGFzcyhBY3Rpb25zR2VuZXJhdG9yLCB7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBY3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVBY3Rpb25zKCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYWN0aW9uTmFtZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25OYW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbk5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgZnVuY3Rpb24gc28gd2UgY2FuIGxhdGVyIGJpbmQgdGhpcyB0byBBY3Rpb25DcmVhdG9yXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9uc1thY3Rpb25OYW1lXSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGEgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2goYS5sZW5ndGggPyBbeF0uY29uY2F0KGEpIDogeCk7XG4gICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4gQWN0aW9uc0dlbmVyYXRvcjtcbiAgICAgICAgICAgIH0pKEFjdGlvbnNDbGFzcyk7XG5cbiAgICAgICAgICAgIG5ldyBBY3Rpb25zR2VuZXJhdG9yKF90aGlzOCk7XG4gICAgICAgICAgfSkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhc3NpZ24oYWN0aW9ucywgQWN0aW9uc0NsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhhY3Rpb25zKS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgYWN0aW9uKSB7XG4gICAgICAgICAgb2JqW2FjdGlvbl0gPSBfdGhpczguY3JlYXRlQWN0aW9uKFwiXCIgKyBrZXkgKyBcIiNcIiArIGFjdGlvbiwgYWN0aW9uc1thY3Rpb25dLCBvYmopO1xuICAgICAgICAgIHZhciBjb25zdGFudCA9IGZvcm1hdEFzQ29uc3RhbnQoYWN0aW9uKTtcbiAgICAgICAgICBvYmpbY29uc3RhbnRdID0gb2JqW2FjdGlvbl1bQUNUSU9OX0tFWV07XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwgZXhwb3J0T2JqKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRha2VTbmFwc2hvdDoge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRha2VTbmFwc2hvdCgpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0b3JlTmFtZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBzdG9yZU5hbWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0YXRlID0gc25hcHNob3QuYXBwbHkodW5kZWZpbmVkLCBbdGhpc10uY29uY2F0KHN0b3JlTmFtZXMpKTtcbiAgICAgICAgdGhpc1tMQVNUX1NOQVBTSE9UXSA9IHRoaXMuc2VyaWFsaXplKGFzc2lnbih0aGlzLmRlc2VyaWFsaXplKHRoaXNbTEFTVF9TTkFQU0hPVF0pLCBzdGF0ZSkpO1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemUoc3RhdGUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcm9sbGJhY2s6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByb2xsYmFjaygpIHtcbiAgICAgICAgc2V0QXBwU3RhdGUodGhpcywgdGhpc1tMQVNUX1NOQVBTSE9UXSwgZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgICAgaWYgKHN0b3JlW0xJRkVDWUNMRV0ucm9sbGJhY2spIHtcbiAgICAgICAgICAgIHN0b3JlW0xJRkVDWUNMRV0ucm9sbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RvcmUuZW1pdENoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlY3ljbGU6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWN5Y2xlKCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc3RvcmVOYW1lcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIHN0b3JlTmFtZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW5pdGlhbFNuYXBzaG90ID0gc3RvcmVOYW1lcy5sZW5ndGggPyBmaWx0ZXJTbmFwc2hvdE9mU3RvcmVzKHRoaXMsIHRoaXNbSU5JVF9TTkFQU0hPVF0sIHN0b3JlTmFtZXMpIDogdGhpc1tJTklUX1NOQVBTSE9UXTtcblxuICAgICAgICBzZXRBcHBTdGF0ZSh0aGlzLCBpbml0aWFsU25hcHNob3QsIGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICAgIGlmIChzdG9yZVtMSUZFQ1lDTEVdLmluaXQpIHtcbiAgICAgICAgICAgIHN0b3JlW0xJRkVDWUNMRV0uaW5pdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdG9yZS5lbWl0Q2hhbmdlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZmx1c2g6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zZXJpYWxpemUoc25hcHNob3QodGhpcykpO1xuICAgICAgICB0aGlzLnJlY3ljbGUoKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH0sXG4gICAgYm9vdHN0cmFwOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYm9vdHN0cmFwKGRhdGEpIHtcbiAgICAgICAgc2V0QXBwU3RhdGUodGhpcywgZGF0YSwgZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgICAgaWYgKHN0b3JlW0xJRkVDWUNMRV0uYm9vdHN0cmFwKSB7XG4gICAgICAgICAgICBzdG9yZVtMSUZFQ1lDTEVdLmJvb3RzdHJhcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdG9yZS5lbWl0Q2hhbmdlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWRkQWN0aW9uczoge1xuXG4gICAgICAvLyBJbnN0YW5jZSB0eXBlIG1ldGhvZHMgZm9yIGluamVjdGluZyBhbHQgaW50byB5b3VyIGFwcGxpY2F0aW9uIGFzIGNvbnRleHRcblxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEFjdGlvbnMobmFtZSwgQWN0aW9uc0NsYXNzKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uc1tuYW1lXSA9IEFycmF5LmlzQXJyYXkoQWN0aW9uc0NsYXNzKSA/IHRoaXMuZ2VuZXJhdGVBY3Rpb25zLmFwcGx5KHRoaXMsIEFjdGlvbnNDbGFzcykgOiB0aGlzLmNyZWF0ZUFjdGlvbnMoQWN0aW9uc0NsYXNzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZFN0b3JlOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkU3RvcmUobmFtZSwgU3RvcmVNb2RlbCwgc2F2ZVN0b3JlKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlU3RvcmUoU3RvcmVNb2RlbCwgbmFtZSwgc2F2ZVN0b3JlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldEFjdGlvbnM6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBY3Rpb25zKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9uc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldFN0b3JlOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RvcmUobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZXNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gQWx0O1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBBbHQ7XG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvfi9hbHQvZGlzdC9hbHQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZ2xvYmFsU3ltYm9sUmVnaXN0cnlMaXN0ID0ge307XG5cbi8vIEFsaWFzZXMgJiBIZWxwZXJzXG52YXIgbWFrZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgZGVmUHJvcHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcztcbnZhciBkZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGRlZlZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBvcHRzID0gYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgY29uZmlndXJhYmxlOiAhIW9wdHMuYyxcbiAgICB3cml0YWJsZTogISFvcHRzLncsXG4gICAgZW51bWVyYWJsZTogISFvcHRzLmVcbiAgfTtcbn07XG52YXIgaXNTeW1ib2wgPSBmdW5jdGlvbiAoc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2wgJiYgc3ltYm9sW3hTeW1ib2wudG9TdHJpbmdUYWddID09PSBcIlN5bWJvbFwiO1xufTtcblxudmFyIHN1cHBvcnRzQWNjZXNzb3JzID0gdW5kZWZpbmVkO1xudHJ5IHtcbiAgdmFyIHggPSBkZWZQcm9wKHt9LCBcInlcIiwgeyBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gfSk7XG4gIHN1cHBvcnRzQWNjZXNzb3JzID0geC55ID09PSAxO1xufSBjYXRjaCAoZSkge1xuICBzdXBwb3J0c0FjY2Vzc29ycyA9IGZhbHNlO1xufVxuXG52YXIgaWQgPSB7fTtcbnZhciB1aWQgPSBmdW5jdGlvbiAoZGVzYykge1xuICBkZXNjID0gU3RyaW5nKGRlc2MpO1xuICB2YXIgeCA9IFwiXCI7XG4gIHZhciBpID0gMDtcbiAgd2hpbGUgKGlkW2Rlc2MgKyB4XSkge1xuICAgIHggPSBpICs9IDE7XG4gIH1cbiAgaWRbZGVzYyArIHhdID0gMTtcblxuICB2YXIgdGFnID0gXCJTeW1ib2woXCIgKyBkZXNjICsgXCJcIiArIHggKyBcIilcIjtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoc3VwcG9ydHNBY2Nlc3NvcnMpIHtcbiAgICAvLyBNYWtlIHRoZSBzeW1ib2xzIGhpZGRlbiB0byBwcmUtZXM2IGNvZGVcbiAgICBkZWZQcm9wKE9iamVjdC5wcm90b3R5cGUsIHRhZywge1xuICAgICAgZ2V0OiB1bmRlZmluZWQsXG4gICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBkZWZQcm9wKHRoaXMsIHRhZywgZGVmVmFsdWUodmFsdWUsIHsgYzogdHJ1ZSwgdzogdHJ1ZSB9KSk7XG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YWc7XG59O1xuXG4vLyBUaGUgYmFzZSBzeW1ib2xcbnZhciBTeW1ib2xQcm90byA9IG1ha2UobnVsbCk7XG5cbi8vIDE5LjQuMS4xXG5mdW5jdGlvbiB4U3ltYm9sKGRlc2NTdHJpbmcpIHtcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiB4U3ltYm9sKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvclwiKTtcbiAgfVxuXG4gIGRlc2NTdHJpbmcgPSBkZXNjU3RyaW5nID09PSB1bmRlZmluZWQgPyBcIlwiIDogU3RyaW5nKGRlc2NTdHJpbmcpO1xuXG4gIHZhciB0YWcgPSB1aWQoZGVzY1N0cmluZyk7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKCFzdXBwb3J0c0FjY2Vzc29ycykge1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICByZXR1cm4gbWFrZShTeW1ib2xQcm90bywge1xuICAgIF9fZGVzY3JpcHRpb25fXzogZGVmVmFsdWUoZGVzY1N0cmluZyksXG4gICAgX190YWdfXzogZGVmVmFsdWUodGFnKVxuICB9KTtcbn1cblxuZGVmUHJvcHMoeFN5bWJvbCwge1xuICAvLyAxOS40LjIuMVxuICBcImZvclwiOiBkZWZWYWx1ZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHN0cmluZ0tleSA9IFN0cmluZyhrZXkpO1xuXG4gICAgaWYgKGdsb2JhbFN5bWJvbFJlZ2lzdHJ5TGlzdFtzdHJpbmdLZXldKSB7XG4gICAgICByZXR1cm4gZ2xvYmFsU3ltYm9sUmVnaXN0cnlMaXN0W3N0cmluZ0tleV07XG4gICAgfVxuXG4gICAgdmFyIHN5bWJvbCA9IHhTeW1ib2woc3RyaW5nS2V5KTtcbiAgICBnbG9iYWxTeW1ib2xSZWdpc3RyeUxpc3Rbc3RyaW5nS2V5XSA9IHN5bWJvbDtcblxuICAgIHJldHVybiBzeW1ib2w7XG4gIH0pLFxuXG4gIC8vIDE5LjQuMi41XG4gIGtleUZvcjogZGVmVmFsdWUoZnVuY3Rpb24gKHN5bSkge1xuICAgIGlmIChzdXBwb3J0c0FjY2Vzc29ycyAmJiAhaXNTeW1ib2woc3ltKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlwiICsgc3ltICsgXCIgaXMgbm90IGEgc3ltYm9sXCIpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBnbG9iYWxTeW1ib2xSZWdpc3RyeUxpc3QpIHtcbiAgICAgIGlmIChnbG9iYWxTeW1ib2xSZWdpc3RyeUxpc3Rba2V5XSA9PT0gc3ltKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0c0FjY2Vzc29ycyA/IGdsb2JhbFN5bWJvbFJlZ2lzdHJ5TGlzdFtrZXldLl9fZGVzY3JpcHRpb25fXyA6IGdsb2JhbFN5bWJvbFJlZ2lzdHJ5TGlzdFtrZXldLnN1YnN0cig3LCBnbG9iYWxTeW1ib2xSZWdpc3RyeUxpc3Rba2V5XS5sZW5ndGggLSA4KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59KTtcblxuLy8gNi4xLjUuMVxuZGVmUHJvcHMoeFN5bWJvbCwge1xuICBoYXNJbnN0YW5jZTogZGVmVmFsdWUoeFN5bWJvbChcImhhc0luc3RhbmNlXCIpKSxcbiAgaXNDb25jYXRTcHJlYWRhYmxlOiBkZWZWYWx1ZSh4U3ltYm9sKFwiaXNDb25jYXRTcHJlYWRhYmxlXCIpKSxcbiAgaXRlcmF0b3I6IGRlZlZhbHVlKHhTeW1ib2woXCJpdGVyYXRvclwiKSksXG4gIG1hdGNoOiBkZWZWYWx1ZSh4U3ltYm9sKFwibWF0Y2hcIikpLFxuICByZXBsYWNlOiBkZWZWYWx1ZSh4U3ltYm9sKFwicmVwbGFjZVwiKSksXG4gIHNlYXJjaDogZGVmVmFsdWUoeFN5bWJvbChcInNlYXJjaFwiKSksXG4gIHNwZWNpZXM6IGRlZlZhbHVlKHhTeW1ib2woXCJzcGVjaWVzXCIpKSxcbiAgc3BsaXQ6IGRlZlZhbHVlKHhTeW1ib2woXCJzcGxpdFwiKSksXG4gIHRvUHJpbWl0aXZlOiBkZWZWYWx1ZSh4U3ltYm9sKFwidG9QcmltaXRpdmVcIikpLFxuICB0b1N0cmluZ1RhZzogZGVmVmFsdWUoeFN5bWJvbChcInRvU3RyaW5nVGFnXCIpKSxcbiAgdW5zY29wYWJsZXM6IGRlZlZhbHVlKHhTeW1ib2woXCJ1bnNjb3BhYmxlc1wiKSlcbn0pO1xuXG4vLyAxOS40LjNcbmRlZlByb3BzKFN5bWJvbFByb3RvLCB7XG4gIGNvbnN0cnVjdG9yOiBkZWZWYWx1ZSh4U3ltYm9sKSxcblxuICAvLyAxOS40LjMuMlxuICB0b1N0cmluZzogZGVmVmFsdWUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9fdGFnX187XG4gIH0pLFxuXG4gIC8vIDE5LjQuMy4zXG4gIHZhbHVlT2Y6IGRlZlZhbHVlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJTeW1ib2woXCIgKyB0aGlzLl9fZGVzY3JpcHRpb25fXyArIFwiKVwiO1xuICB9KVxufSk7XG5cbi8vIDE5LjQuMy41XG4vKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuaWYgKHN1cHBvcnRzQWNjZXNzb3JzKSB7XG4gIGRlZlByb3AoU3ltYm9sUHJvdG8sIHhTeW1ib2wudG9TdHJpbmdUYWcsIGRlZlZhbHVlKFwiU3ltYm9sXCIsIHsgYzogdHJ1ZSB9KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDogeFN5bWJvbDtcblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9+L2FsdC9+L2VzLXN5bWJvbC9kaXN0L3N5bWJvbC5qc1xuICoqIG1vZHVsZSBpZCA9IDExNlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlIEV2ZW50RW1pdHRlciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBFdmVudCBoYW5kbGVyIHRvIGJlIGNhbGxlZC5cbiAqIEBwYXJhbSB7TWl4ZWR9IGNvbnRleHQgQ29udGV4dCBmb3IgZnVuY3Rpb24gZXhlY3V0aW9uLlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIE9ubHkgZW1pdCBvbmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRUUoZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdGhpcy5mbiA9IGZuO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLm9uY2UgPSBvbmNlIHx8IGZhbHNlO1xufVxuXG4vKipcbiAqIE1pbmltYWwgRXZlbnRFbWl0dGVyIGludGVyZmFjZSB0aGF0IGlzIG1vbGRlZCBhZ2FpbnN0IHRoZSBOb2RlLmpzXG4gKiBFdmVudEVtaXR0ZXIgaW50ZXJmYWNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkgeyAvKiBOb3RoaW5nIHRvIHNldCAqLyB9XG5cbi8qKlxuICogSG9sZHMgdGhlIGFzc2lnbmVkIEV2ZW50RW1pdHRlcnMgYnkgbmFtZS5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuXG4vKipcbiAqIFJldHVybiBhIGxpc3Qgb2YgYXNzaWduZWQgZXZlbnQgbGlzdGVuZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBUaGUgZXZlbnRzIHRoYXQgc2hvdWxkIGJlIGxpc3RlZC5cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKGV2ZW50KSB7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbZXZlbnRdKSByZXR1cm4gW107XG4gIGlmICh0aGlzLl9ldmVudHNbZXZlbnRdLmZuKSByZXR1cm4gW3RoaXMuX2V2ZW50c1tldmVudF0uZm5dO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5fZXZlbnRzW2V2ZW50XS5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSB0aGlzLl9ldmVudHNbZXZlbnRdW2ldLmZuO1xuICB9XG5cbiAgcmV0dXJuIGVlO1xufTtcblxuLyoqXG4gKiBFbWl0IGFuIGV2ZW50IHRvIGFsbCByZWdpc3RlcmVkIGV2ZW50IGxpc3RlbmVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgVGhlIG5hbWUgb2YgdGhlIGV2ZW50LlxuICogQHJldHVybnMge0Jvb2xlYW59IEluZGljYXRpb24gaWYgd2UndmUgZW1pdHRlZCBhbiBldmVudC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW2V2ZW50XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdXG4gICAgLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBhcmdzXG4gICAgLCBpO1xuXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgbGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnMuZm4sIHRydWUpO1xuXG4gICAgc3dpdGNoIChsZW4pIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSksIHRydWU7XG4gICAgICBjYXNlIDM6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCksIHRydWU7XG4gICAgICBjYXNlIDY6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGkgPCBsZW47IGkrKykge1xuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZuLmFwcGx5KGxpc3RlbmVycy5jb250ZXh0LCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aFxuICAgICAgLCBqO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyc1tpXS5mbiwgdHJ1ZSk7XG5cbiAgICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICAgIGNhc2UgMTogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQpOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEpOyBicmVhaztcbiAgICAgICAgY2FzZSAzOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBuZXcgRXZlbnRMaXN0ZW5lciBmb3IgdGhlIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBOYW1lIG9mIHRoZSBldmVudC5cbiAqIEBwYXJhbSB7RnVuY3Rvbn0gZm4gQ2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge01peGVkfSBjb250ZXh0IFRoZSBjb250ZXh0IG9mIHRoZSBmdW5jdGlvbi5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IHRoaXMpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKSB0aGlzLl9ldmVudHMgPSB7fTtcbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZlbnRdKSB0aGlzLl9ldmVudHNbZXZlbnRdID0gbGlzdGVuZXI7XG4gIGVsc2Uge1xuICAgIGlmICghdGhpcy5fZXZlbnRzW2V2ZW50XS5mbikgdGhpcy5fZXZlbnRzW2V2ZW50XS5wdXNoKGxpc3RlbmVyKTtcbiAgICBlbHNlIHRoaXMuX2V2ZW50c1tldmVudF0gPSBbXG4gICAgICB0aGlzLl9ldmVudHNbZXZlbnRdLCBsaXN0ZW5lclxuICAgIF07XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkIGFuIEV2ZW50TGlzdGVuZXIgdGhhdCdzIG9ubHkgY2FsbGVkIG9uY2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IE5hbWUgb2YgdGhlIGV2ZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gQ2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge01peGVkfSBjb250ZXh0IFRoZSBjb250ZXh0IG9mIHRoZSBmdW5jdGlvbi5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCB0aGlzLCB0cnVlKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cykgdGhpcy5fZXZlbnRzID0ge307XG4gIGlmICghdGhpcy5fZXZlbnRzW2V2ZW50XSkgdGhpcy5fZXZlbnRzW2V2ZW50XSA9IGxpc3RlbmVyO1xuICBlbHNlIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50c1tldmVudF0uZm4pIHRoaXMuX2V2ZW50c1tldmVudF0ucHVzaChsaXN0ZW5lcik7XG4gICAgZWxzZSB0aGlzLl9ldmVudHNbZXZlbnRdID0gW1xuICAgICAgdGhpcy5fZXZlbnRzW2V2ZW50XSwgbGlzdGVuZXJcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFRoZSBldmVudCB3ZSB3YW50IHRvIHJlbW92ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciB0aGF0IHdlIG5lZWQgdG8gZmluZC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBPbmx5IHJlbW92ZSBvbmNlIGxpc3RlbmVycy5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldmVudCwgZm4sIG9uY2UpIHtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1tldmVudF0pIHJldHVybiB0aGlzO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdXG4gICAgLCBldmVudHMgPSBbXTtcblxuICBpZiAoZm4pIHtcbiAgICBpZiAobGlzdGVuZXJzLmZuICYmIChsaXN0ZW5lcnMuZm4gIT09IGZuIHx8IChvbmNlICYmICFsaXN0ZW5lcnMub25jZSkpKSB7XG4gICAgICBldmVudHMucHVzaChsaXN0ZW5lcnMpO1xuICAgIH1cbiAgICBpZiAoIWxpc3RlbmVycy5mbikgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5mbiAhPT0gZm4gfHwgKG9uY2UgJiYgIWxpc3RlbmVyc1tpXS5vbmNlKSkge1xuICAgICAgICBldmVudHMucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vXG4gIC8vIFJlc2V0IHRoZSBhcnJheSwgb3IgcmVtb3ZlIGl0IGNvbXBsZXRlbHkgaWYgd2UgaGF2ZSBubyBtb3JlIGxpc3RlbmVycy5cbiAgLy9cbiAgaWYgKGV2ZW50cy5sZW5ndGgpIHtcbiAgICB0aGlzLl9ldmVudHNbZXZlbnRdID0gZXZlbnRzLmxlbmd0aCA9PT0gMSA/IGV2ZW50c1swXSA6IGV2ZW50cztcbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW2V2ZW50XTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGxpc3RlbmVycyBvciBvbmx5IHRoZSBsaXN0ZW5lcnMgZm9yIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFRoZSBldmVudCB3YW50IHRvIHJlbW92ZSBhbGwgbGlzdGVuZXJzIGZvci5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KSB7XG4gIGlmICghdGhpcy5fZXZlbnRzKSByZXR1cm4gdGhpcztcblxuICBpZiAoZXZlbnQpIGRlbGV0ZSB0aGlzLl9ldmVudHNbZXZlbnRdO1xuICBlbHNlIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIEFsaWFzIG1ldGhvZHMgbmFtZXMgYmVjYXVzZSBwZW9wbGUgcm9sbCBsaWtlIHRoYXQuXG4vL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUub247XG5cbi8vXG4vLyBUaGlzIGZ1bmN0aW9uIGRvZXNuJ3QgYXBwbHkgYW55bW9yZS5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBtb2R1bGUuXG4vL1xuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIyID0gRXZlbnRFbWl0dGVyO1xuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlcjMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vXG4vLyBFeHBvc2UgdGhlIG1vZHVsZS5cbi8vXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvfi9hbHQvfi9ldmVudGVtaXR0ZXIzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMuRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4vbGliL0Rpc3BhdGNoZXInKVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9+L2FsdC9+L2ZsdXgvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRGlzcGF0Y2hlclxuICogQHR5cGVjaGVja3NcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJy4vaW52YXJpYW50Jyk7XG5cbnZhciBfbGFzdElEID0gMTtcbnZhciBfcHJlZml4ID0gJ0lEXyc7XG5cbi8qKlxuICogRGlzcGF0Y2hlciBpcyB1c2VkIHRvIGJyb2FkY2FzdCBwYXlsb2FkcyB0byByZWdpc3RlcmVkIGNhbGxiYWNrcy4gVGhpcyBpc1xuICogZGlmZmVyZW50IGZyb20gZ2VuZXJpYyBwdWItc3ViIHN5c3RlbXMgaW4gdHdvIHdheXM6XG4gKlxuICogICAxKSBDYWxsYmFja3MgYXJlIG5vdCBzdWJzY3JpYmVkIHRvIHBhcnRpY3VsYXIgZXZlbnRzLiBFdmVyeSBwYXlsb2FkIGlzXG4gKiAgICAgIGRpc3BhdGNoZWQgdG8gZXZlcnkgcmVnaXN0ZXJlZCBjYWxsYmFjay5cbiAqICAgMikgQ2FsbGJhY2tzIGNhbiBiZSBkZWZlcnJlZCBpbiB3aG9sZSBvciBwYXJ0IHVudGlsIG90aGVyIGNhbGxiYWNrcyBoYXZlXG4gKiAgICAgIGJlZW4gZXhlY3V0ZWQuXG4gKlxuICogRm9yIGV4YW1wbGUsIGNvbnNpZGVyIHRoaXMgaHlwb3RoZXRpY2FsIGZsaWdodCBkZXN0aW5hdGlvbiBmb3JtLCB3aGljaFxuICogc2VsZWN0cyBhIGRlZmF1bHQgY2l0eSB3aGVuIGEgY291bnRyeSBpcyBzZWxlY3RlZDpcbiAqXG4gKiAgIHZhciBmbGlnaHREaXNwYXRjaGVyID0gbmV3IERpc3BhdGNoZXIoKTtcbiAqXG4gKiAgIC8vIEtlZXBzIHRyYWNrIG9mIHdoaWNoIGNvdW50cnkgaXMgc2VsZWN0ZWRcbiAqICAgdmFyIENvdW50cnlTdG9yZSA9IHtjb3VudHJ5OiBudWxsfTtcbiAqXG4gKiAgIC8vIEtlZXBzIHRyYWNrIG9mIHdoaWNoIGNpdHkgaXMgc2VsZWN0ZWRcbiAqICAgdmFyIENpdHlTdG9yZSA9IHtjaXR5OiBudWxsfTtcbiAqXG4gKiAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSBiYXNlIGZsaWdodCBwcmljZSBvZiB0aGUgc2VsZWN0ZWQgY2l0eVxuICogICB2YXIgRmxpZ2h0UHJpY2VTdG9yZSA9IHtwcmljZTogbnVsbH1cbiAqXG4gKiBXaGVuIGEgdXNlciBjaGFuZ2VzIHRoZSBzZWxlY3RlZCBjaXR5LCB3ZSBkaXNwYXRjaCB0aGUgcGF5bG9hZDpcbiAqXG4gKiAgIGZsaWdodERpc3BhdGNoZXIuZGlzcGF0Y2goe1xuICogICAgIGFjdGlvblR5cGU6ICdjaXR5LXVwZGF0ZScsXG4gKiAgICAgc2VsZWN0ZWRDaXR5OiAncGFyaXMnXG4gKiAgIH0pO1xuICpcbiAqIFRoaXMgcGF5bG9hZCBpcyBkaWdlc3RlZCBieSBgQ2l0eVN0b3JlYDpcbiAqXG4gKiAgIGZsaWdodERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCkge1xuICogICAgIGlmIChwYXlsb2FkLmFjdGlvblR5cGUgPT09ICdjaXR5LXVwZGF0ZScpIHtcbiAqICAgICAgIENpdHlTdG9yZS5jaXR5ID0gcGF5bG9hZC5zZWxlY3RlZENpdHk7XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiBXaGVuIHRoZSB1c2VyIHNlbGVjdHMgYSBjb3VudHJ5LCB3ZSBkaXNwYXRjaCB0aGUgcGF5bG9hZDpcbiAqXG4gKiAgIGZsaWdodERpc3BhdGNoZXIuZGlzcGF0Y2goe1xuICogICAgIGFjdGlvblR5cGU6ICdjb3VudHJ5LXVwZGF0ZScsXG4gKiAgICAgc2VsZWN0ZWRDb3VudHJ5OiAnYXVzdHJhbGlhJ1xuICogICB9KTtcbiAqXG4gKiBUaGlzIHBheWxvYWQgaXMgZGlnZXN0ZWQgYnkgYm90aCBzdG9yZXM6XG4gKlxuICogICAgQ291bnRyeVN0b3JlLmRpc3BhdGNoVG9rZW4gPSBmbGlnaHREaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpIHtcbiAqICAgICBpZiAocGF5bG9hZC5hY3Rpb25UeXBlID09PSAnY291bnRyeS11cGRhdGUnKSB7XG4gKiAgICAgICBDb3VudHJ5U3RvcmUuY291bnRyeSA9IHBheWxvYWQuc2VsZWN0ZWRDb3VudHJ5O1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogV2hlbiB0aGUgY2FsbGJhY2sgdG8gdXBkYXRlIGBDb3VudHJ5U3RvcmVgIGlzIHJlZ2lzdGVyZWQsIHdlIHNhdmUgYSByZWZlcmVuY2VcbiAqIHRvIHRoZSByZXR1cm5lZCB0b2tlbi4gVXNpbmcgdGhpcyB0b2tlbiB3aXRoIGB3YWl0Rm9yKClgLCB3ZSBjYW4gZ3VhcmFudGVlXG4gKiB0aGF0IGBDb3VudHJ5U3RvcmVgIGlzIHVwZGF0ZWQgYmVmb3JlIHRoZSBjYWxsYmFjayB0aGF0IHVwZGF0ZXMgYENpdHlTdG9yZWBcbiAqIG5lZWRzIHRvIHF1ZXJ5IGl0cyBkYXRhLlxuICpcbiAqICAgQ2l0eVN0b3JlLmRpc3BhdGNoVG9rZW4gPSBmbGlnaHREaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpIHtcbiAqICAgICBpZiAocGF5bG9hZC5hY3Rpb25UeXBlID09PSAnY291bnRyeS11cGRhdGUnKSB7XG4gKiAgICAgICAvLyBgQ291bnRyeVN0b3JlLmNvdW50cnlgIG1heSBub3QgYmUgdXBkYXRlZC5cbiAqICAgICAgIGZsaWdodERpc3BhdGNoZXIud2FpdEZvcihbQ291bnRyeVN0b3JlLmRpc3BhdGNoVG9rZW5dKTtcbiAqICAgICAgIC8vIGBDb3VudHJ5U3RvcmUuY291bnRyeWAgaXMgbm93IGd1YXJhbnRlZWQgdG8gYmUgdXBkYXRlZC5cbiAqXG4gKiAgICAgICAvLyBTZWxlY3QgdGhlIGRlZmF1bHQgY2l0eSBmb3IgdGhlIG5ldyBjb3VudHJ5XG4gKiAgICAgICBDaXR5U3RvcmUuY2l0eSA9IGdldERlZmF1bHRDaXR5Rm9yQ291bnRyeShDb3VudHJ5U3RvcmUuY291bnRyeSk7XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiBUaGUgdXNhZ2Ugb2YgYHdhaXRGb3IoKWAgY2FuIGJlIGNoYWluZWQsIGZvciBleGFtcGxlOlxuICpcbiAqICAgRmxpZ2h0UHJpY2VTdG9yZS5kaXNwYXRjaFRva2VuID1cbiAqICAgICBmbGlnaHREaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpIHtcbiAqICAgICAgIHN3aXRjaCAocGF5bG9hZC5hY3Rpb25UeXBlKSB7XG4gKiAgICAgICAgIGNhc2UgJ2NvdW50cnktdXBkYXRlJzpcbiAqICAgICAgICAgICBmbGlnaHREaXNwYXRjaGVyLndhaXRGb3IoW0NpdHlTdG9yZS5kaXNwYXRjaFRva2VuXSk7XG4gKiAgICAgICAgICAgRmxpZ2h0UHJpY2VTdG9yZS5wcmljZSA9XG4gKiAgICAgICAgICAgICBnZXRGbGlnaHRQcmljZVN0b3JlKENvdW50cnlTdG9yZS5jb3VudHJ5LCBDaXR5U3RvcmUuY2l0eSk7XG4gKiAgICAgICAgICAgYnJlYWs7XG4gKlxuICogICAgICAgICBjYXNlICdjaXR5LXVwZGF0ZSc6XG4gKiAgICAgICAgICAgRmxpZ2h0UHJpY2VTdG9yZS5wcmljZSA9XG4gKiAgICAgICAgICAgICBGbGlnaHRQcmljZVN0b3JlKENvdW50cnlTdG9yZS5jb3VudHJ5LCBDaXR5U3RvcmUuY2l0eSk7XG4gKiAgICAgICAgICAgYnJlYWs7XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiBUaGUgYGNvdW50cnktdXBkYXRlYCBwYXlsb2FkIHdpbGwgYmUgZ3VhcmFudGVlZCB0byBpbnZva2UgdGhlIHN0b3JlcydcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzIGluIG9yZGVyOiBgQ291bnRyeVN0b3JlYCwgYENpdHlTdG9yZWAsIHRoZW5cbiAqIGBGbGlnaHRQcmljZVN0b3JlYC5cbiAqL1xuXG4gIGZ1bmN0aW9uIERpc3BhdGNoZXIoKSB7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9jYWxsYmFja3MgPSB7fTtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2lzUGVuZGluZyA9IHt9O1xuICAgIHRoaXMuJERpc3BhdGNoZXJfaXNIYW5kbGVkID0ge307XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9pc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9wZW5kaW5nUGF5bG9hZCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCB3aXRoIGV2ZXJ5IGRpc3BhdGNoZWQgcGF5bG9hZC4gUmV0dXJuc1xuICAgKiBhIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgd2l0aCBgd2FpdEZvcigpYC5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUucmVnaXN0ZXI9ZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICB2YXIgaWQgPSBfcHJlZml4ICsgX2xhc3RJRCsrO1xuICAgIHRoaXMuJERpc3BhdGNoZXJfY2FsbGJhY2tzW2lkXSA9IGNhbGxiYWNrO1xuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNhbGxiYWNrIGJhc2VkIG9uIGl0cyB0b2tlbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gICAqL1xuICBEaXNwYXRjaGVyLnByb3RvdHlwZS51bnJlZ2lzdGVyPWZ1bmN0aW9uKGlkKSB7XG4gICAgaW52YXJpYW50KFxuICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9jYWxsYmFja3NbaWRdLFxuICAgICAgJ0Rpc3BhdGNoZXIudW5yZWdpc3RlciguLi4pOiBgJXNgIGRvZXMgbm90IG1hcCB0byBhIHJlZ2lzdGVyZWQgY2FsbGJhY2suJyxcbiAgICAgIGlkXG4gICAgKTtcbiAgICBkZWxldGUgdGhpcy4kRGlzcGF0Y2hlcl9jYWxsYmFja3NbaWRdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXYWl0cyBmb3IgdGhlIGNhbGxiYWNrcyBzcGVjaWZpZWQgdG8gYmUgaW52b2tlZCBiZWZvcmUgY29udGludWluZyBleGVjdXRpb25cbiAgICogb2YgdGhlIGN1cnJlbnQgY2FsbGJhY2suIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIHVzZWQgYnkgYSBjYWxsYmFjayBpblxuICAgKiByZXNwb25zZSB0byBhIGRpc3BhdGNoZWQgcGF5bG9hZC5cbiAgICpcbiAgICogQHBhcmFtIHthcnJheTxzdHJpbmc+fSBpZHNcbiAgICovXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLndhaXRGb3I9ZnVuY3Rpb24oaWRzKSB7XG4gICAgaW52YXJpYW50KFxuICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9pc0Rpc3BhdGNoaW5nLFxuICAgICAgJ0Rpc3BhdGNoZXIud2FpdEZvciguLi4pOiBNdXN0IGJlIGludm9rZWQgd2hpbGUgZGlzcGF0Y2hpbmcuJ1xuICAgICk7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGlkcy5sZW5ndGg7IGlpKyspIHtcbiAgICAgIHZhciBpZCA9IGlkc1tpaV07XG4gICAgICBpZiAodGhpcy4kRGlzcGF0Y2hlcl9pc1BlbmRpbmdbaWRdKSB7XG4gICAgICAgIGludmFyaWFudChcbiAgICAgICAgICB0aGlzLiREaXNwYXRjaGVyX2lzSGFuZGxlZFtpZF0sXG4gICAgICAgICAgJ0Rpc3BhdGNoZXIud2FpdEZvciguLi4pOiBDaXJjdWxhciBkZXBlbmRlbmN5IGRldGVjdGVkIHdoaWxlICcgK1xuICAgICAgICAgICd3YWl0aW5nIGZvciBgJXNgLicsXG4gICAgICAgICAgaWRcbiAgICAgICAgKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpbnZhcmlhbnQoXG4gICAgICAgIHRoaXMuJERpc3BhdGNoZXJfY2FsbGJhY2tzW2lkXSxcbiAgICAgICAgJ0Rpc3BhdGNoZXIud2FpdEZvciguLi4pOiBgJXNgIGRvZXMgbm90IG1hcCB0byBhIHJlZ2lzdGVyZWQgY2FsbGJhY2suJyxcbiAgICAgICAgaWRcbiAgICAgICk7XG4gICAgICB0aGlzLiREaXNwYXRjaGVyX2ludm9rZUNhbGxiYWNrKGlkKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBwYXlsb2FkIHRvIGFsbCByZWdpc3RlcmVkIGNhbGxiYWNrcy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHBheWxvYWRcbiAgICovXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmRpc3BhdGNoPWZ1bmN0aW9uKHBheWxvYWQpIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICAhdGhpcy4kRGlzcGF0Y2hlcl9pc0Rpc3BhdGNoaW5nLFxuICAgICAgJ0Rpc3BhdGNoLmRpc3BhdGNoKC4uLik6IENhbm5vdCBkaXNwYXRjaCBpbiB0aGUgbWlkZGxlIG9mIGEgZGlzcGF0Y2guJ1xuICAgICk7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9zdGFydERpc3BhdGNoaW5nKHBheWxvYWQpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLiREaXNwYXRjaGVyX2NhbGxiYWNrcykge1xuICAgICAgICBpZiAodGhpcy4kRGlzcGF0Y2hlcl9pc1BlbmRpbmdbaWRdKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9pbnZva2VDYWxsYmFjayhpZCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuJERpc3BhdGNoZXJfc3RvcERpc3BhdGNoaW5nKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGlzIERpc3BhdGNoZXIgY3VycmVudGx5IGRpc3BhdGNoaW5nLlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuaXNEaXNwYXRjaGluZz1mdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kRGlzcGF0Y2hlcl9pc0Rpc3BhdGNoaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsIHRoZSBjYWxsYmFjayBzdG9yZWQgd2l0aCB0aGUgZ2l2ZW4gaWQuIEFsc28gZG8gc29tZSBpbnRlcm5hbFxuICAgKiBib29ra2VlcGluZy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuJERpc3BhdGNoZXJfaW52b2tlQ2FsbGJhY2s9ZnVuY3Rpb24oaWQpIHtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2lzUGVuZGluZ1tpZF0gPSB0cnVlO1xuICAgIHRoaXMuJERpc3BhdGNoZXJfY2FsbGJhY2tzW2lkXSh0aGlzLiREaXNwYXRjaGVyX3BlbmRpbmdQYXlsb2FkKTtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2lzSGFuZGxlZFtpZF0gPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgdXAgYm9va2tlZXBpbmcgbmVlZGVkIHdoZW4gZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXlsb2FkXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuJERpc3BhdGNoZXJfc3RhcnREaXNwYXRjaGluZz1mdW5jdGlvbihwYXlsb2FkKSB7XG4gICAgZm9yICh2YXIgaWQgaW4gdGhpcy4kRGlzcGF0Y2hlcl9jYWxsYmFja3MpIHtcbiAgICAgIHRoaXMuJERpc3BhdGNoZXJfaXNQZW5kaW5nW2lkXSA9IGZhbHNlO1xuICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9pc0hhbmRsZWRbaWRdID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuJERpc3BhdGNoZXJfcGVuZGluZ1BheWxvYWQgPSBwYXlsb2FkO1xuICAgIHRoaXMuJERpc3BhdGNoZXJfaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsZWFyIGJvb2trZWVwaW5nIHVzZWQgZm9yIGRpc3BhdGNoaW5nLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLiREaXNwYXRjaGVyX3N0b3BEaXNwYXRjaGluZz1mdW5jdGlvbigpIHtcbiAgICB0aGlzLiREaXNwYXRjaGVyX3BlbmRpbmdQYXlsb2FkID0gbnVsbDtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2lzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgfTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BhdGNoZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL34vYWx0L34vZmx1eC9saWIvRGlzcGF0Y2hlci5qc1xuICoqIG1vZHVsZSBpZCA9IDExOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgaW52YXJpYW50XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAoZmFsc2UpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnSW52YXJpYW50IFZpb2xhdGlvbjogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL34vYWx0L34vZmx1eC9saWIvaW52YXJpYW50LmpzXG4gKiogbW9kdWxlIGlkID0gMTIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcblxcdHdpZHRoOiA3NTBweDtcXHJcXG5cXHRtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbmgxLCBoMiwgaDMge1xcclxcblxcdG1hcmdpbi10b3A6IDI0cHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2Lm1haW4tY29udGVudCB7XFxyXFxuXFx0LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiA0MHB4O1xcclxcbn1cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvfi9jc3MtbG9hZGVyIS9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmhlYWRlciB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luOiBhdXRvO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNGY0ZjQ7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBsaSB7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lO1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7XFxyXFxufVxcclxcblxcclxcbmxpIGEge1xcclxcblxcdGZvbnQtc2l6ZTogMC44cmVtO1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGNvbG9yOiAjODg4O1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvfi9jc3MtbG9hZGVyIS9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYnV0dG9uLmRlc3Ryb3kge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdHJpZ2h0OiAzcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGJveC1zaGFkb3c6IDAgMCAycHggIzI0MjAyMDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmxpLmNvbXBsZXRlZCB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFx0XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9+L2Nzcy1sb2FkZXIhL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vX1RvZG9JdGVtLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250OiAxMDAlIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjYWFhOyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL34vY3NzLWxvYWRlciEvVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9+L3Nhc3MtbG9hZGVyP2luZGVudGVkU3ludGF4IS9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9zdHlsZXNoZWV0cy9zdHlsZXMuc2Fzc1xuICoqIG1vZHVsZSBpZCA9IDEyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbi5pY29cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvfi9maWxlLWxvYWRlcj9uYW1lPWZhdmljb24uaWNvIS9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9pbWFnZXMvZmF2aWNvbi5pY29cbiAqKiBtb2R1bGUgaWQgPSAxMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlSGFuZGxlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXIvSGVhZGVyJztcclxuXHJcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XHJcbiAgcmVxdWlyZSgnLi9fQXBwLnNjc3MnKTtcclxuICByZXF1aXJlKCdmaWxlP25hbWU9ZmF2aWNvbi5pY28hLi4vLi4vaW1hZ2VzL2Zhdmljb24uaWNvJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZGVyIC8+ICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj4gICAgIFxyXG4gICAgICAgIFx0PFJvdXRlSGFuZGxlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9jb21wb25lbnRzL0FwcC9BcHAuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+Q09OVEFDVCBQQUdFPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9hcHAvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxubGV0IHJlYWN0TG9nbztcclxuXHJcbnJlYWN0TG9nbyA9IHJlcXVpcmUoJy4vaW1hZ2VzL3JlYWN0LWxvZ28ucG5nJyk7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xyXG4gIHJlcXVpcmUoJy4vX0hlYWRlci5zY3NzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICBcdDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgIDxpbWcgc3JjPXtyZWFjdExvZ299IGhlaWdodD0nNjAnIC8+XHJcblx0XHRcdFx0PGhlYWRlcj5cclxuXHRcdFx0XHRcdDx1bD5cclxuICAgICAgICAgICAgPGxpPjxMaW5rIHRvPSdhcHAnPkhvbWU8L0xpbms+PC9saT5cclxuXHRcdFx0XHRcdCAgPGxpPjxMaW5rIHRvPSd0b2RvJz5Ub2RvPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48TGluayB0bz0nY29udGFjdCc+Q29udGFjdDwvTGluaz48L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2hlYWRlcj5cclxuXHRcdCAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZSc7XG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xuXG4vKipcbiAqIFJldHJpZXZlIHRoZSBjdXJyZW50IGRhdGEgZnJvbSB0aGUgQXBwU3RvcmVcbiAqL1xuZnVuY3Rpb24gZ2V0RGF0YVN0YXRlKCkge1xuICByZXR1cm4ge1xuICAgIGFwaURhdGE6IEFwcFN0b3JlLmdldFN0YXRlKCkuZGF0YUJ5UmVzdEFwaVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IGdldERhdGFTdGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQXBwU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBBcHBTdG9yZS51bmxpc3Rlbih0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgXHQ8aDE+SE9NRSBQQUdFPC9oMT5cbiAgICAgICAgPGRpdj48YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzKX0+RkFLRSBBUEkgQ0FMTDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICA8ZGl2Pnt0aGlzLnN0YXRlLmFwaURhdGEuZGF0YX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBfb25DbGljaygpIHtcbiAgICBBcHBBY3Rpb25zLmZldGNoKCk7XG4gIH1cblxuICBvbkNoYW5nZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKGdldERhdGFTdGF0ZSgpKTtcbiAgfVxuXG59O1xuXG5Ib21lU2VjdGlvbi5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSBcIkhvbWVTZWN0aW9uXCI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbi5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmRTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5QQUdFIE5PVCBGT1VORDwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5Ob3RGb3VuZFNlY3Rpb24ucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ05vdEZvdW5kU2VjdGlvbic7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9jb21wb25lbnRzL05vdEZvdW5kU2VjdGlvbi9Ob3RGb3VuZFNlY3Rpb24uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcclxuXHJcbmxldCB7IFByb3BUeXBlcyB9ID0gUmVhY3Q7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xyXG4gIHJlcXVpcmUoJy4vX1RvZG9JdGVtLnNjc3MnKTsgIFxyXG59XHJcblxyXG5jbGFzcyBUb2RvSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmRpc3BsYXlOYW1lID0gJ1RvZG9JdGVtJztcclxuICAgIHRoaXMucHJvcHNUeXBlcyA9IHsgICAgICBcclxuICAgICAgdG9kbzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9OyAgICAgICAgXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc0VkaXRpbmc6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdmFyIHRvZG8gPSB0aGlzLnByb3BzLnRvZG87XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGxpIGNsYXNzTmFtZT17Y3goe1xyXG4gICAgICAgICAgJ2NvbXBsZXRlZCc6IHRvZG8uY29tcGxldGUsXHJcbiAgICAgICAgICAnZWRpdGluZyc6IHRoaXMuc3RhdGUuaXNFZGl0aW5nXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAga2V5PXt0b2RvLmlkfT5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidG9nZ2xlXCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dG9kby5jb21wbGV0ZX0gb25DaGFuZ2U9e3RoaXMuX29uVG9nZ2xlQ29tcGxldGUuYmluZCh0aGlzKX0gLz5cclxuICAgICAgICA8bGFiZWw+e3RoaXMucHJvcHMudG9kby50ZXh0fTwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZXN0cm95XCIgb25DbGljaz17dGhpcy5fb25EZXN0cm95Q2xpY2suYmluZCh0aGlzKX0+JiMxMDAwNjs8L2J1dHRvbj5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfb25Ub2dnbGVDb21wbGV0ZSgpIHtcclxuICAgIEFwcEFjdGlvbnMudG9nZ2xlQ29tcGxldGUodGhpcy5wcm9wcy50b2RvLmlkKTtcclxuICB9XHJcblxyXG4gIF9vbkRlc3Ryb3lDbGljaygpIHtcclxuICAgIEFwcEFjdGlvbnMuZGVzdHJveSh0aGlzLnByb3BzLnRvZG8uaWQpO1xyXG4gIH1cclxuIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0l0ZW07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb0l0ZW0uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4vVG9kb0l0ZW0nO1xyXG5pbXBvcnQgVG9kb1RleHRJbnB1dCBmcm9tICcuL1RvZG9UZXh0SW5wdXQnO1xyXG5cclxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcclxuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZSc7XHJcblxyXG4vKipcclxuICogUmV0cmlldmUgdGhlIGN1cnJlbnQgZGF0YSBmcm9tIHRoZSBBcHBTdG9yZVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RGF0YVN0YXRlKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhbGxEYXRhOiBBcHBTdG9yZS5nZXRTdGF0ZSgpLmRhdGEsXHJcbiAgICBhcmVBbGxDb21wbGV0ZTogQXBwU3RvcmUuYXJlQWxsQ29tcGxldGUoKVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9TZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0gZ2V0RGF0YVN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIEFwcFN0b3JlLmxpc3Rlbih0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBBcHBTdG9yZS51bmxpc3Rlbih0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdmFyIGFsbFRvZG9zID0gdGhpcy5zdGF0ZS5hbGxEYXRhO1xyXG4gICAgdmFyIHRvZG9zID0gW107XHJcblxyXG4gICAgZm9yICh2YXIga2V5IGluIGFsbFRvZG9zKSB7XHJcbiAgICAgIHRvZG9zLnB1c2goPFRvZG9JdGVtIGtleT17a2V5fSB0b2RvPXthbGxUb2Rvc1trZXldfSAvPik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+VE9ETyBQQUdFPC9oMT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFRvZG9UZXh0SW5wdXQgY2xhc3NOYW1lPVwiZWRpdFwiIGlkPVwibmV3LXRvZG9cIiBwbGFjZWhvbGRlcj1cIldoYXQgbmVlZHMgdG8gYmUgZG9uZSA/XCIgb25TYXZlPXt0aGlzLl9vblNhdmUuYmluZCh0aGlzKX0gdmFsdWU9XCJcIiAvPlxyXG4gICAgICAgICAgPHVsIGlkPVwidG9kby1saXN0XCI+e3RvZG9zfTwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShnZXREYXRhU3RhdGUoKSk7XHJcbiAgfVxyXG5cclxuICBfb25TYXZlKHRleHQpIHtcclxuICAgIGlmICh0ZXh0LnRyaW0oKSl7XHJcbiAgICAgIEFwcEFjdGlvbnMuY3JlYXRlKHRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn07XHJcblxyXG5Ub2RvU2VjdGlvbi5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSBcIlRvZG9TZWN0aW9uXCI7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9TZWN0aW9uLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5sZXQgeyBQcm9wVHlwZXMgfSA9IFJlYWN0O1xyXG5cclxuY29uc3QgRU5URVJfS0VZX0NPREUgPSAxMztcclxuXHJcbmNsYXNzIFRvZG9UZXh0SW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5kaXNwbGF5TmFtZSA9ICdUb2RvVGV4dElucHV0JztcclxuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcclxuICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIG9uU2F2ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcgICAgICBcclxuICAgIH07ICAgIFxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUgfHwgJydcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7ICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGlucHV0IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9ICAgICAgICBcclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICBvbktleURvd249e3RoaXMuX29uS2V5RG93bi5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX0gLz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfc2F2ZSgpIHtcclxuICAgIHRoaXMucHJvcHMub25TYXZlKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHZhbHVlOiAnJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIF9vbkNoYW5nZSgvKm9iamVjdCovIGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfSAgXHJcbiAgXHJcbiAgX29uS2V5RG93bihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVOVEVSX0tFWV9DT0RFKSB7XHJcbiAgICAgIHRoaXMuX3NhdmUoKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvVGV4dElucHV0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9UZXh0SW5wdXQuanN4XG4gKiovIiwiLyplc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8qZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyovXHJcbmltcG9ydCB7Um91dGUsIERlZmF1bHRSb3V0ZSwgTm90Rm91bmRSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQXBwL0FwcCc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0JztcclxuaW1wb3J0IEhvbWVTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbic7XHJcbmltcG9ydCBOb3RGb3VuZFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kU2VjdGlvbi9Ob3RGb3VuZFNlY3Rpb24nO1xyXG5pbXBvcnQgVG9kb1NlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9TZWN0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChcclxuICA8Um91dGUgbmFtZT0nYXBwJyBwYXRoPScvJyBoYW5kbGVyPXtBcHBsaWNhdGlvbn0+XHJcbiAgICA8Um91dGUgbmFtZT0naG9tZScgcGF0aD0nL2hvbWUnIGhhbmRsZXI9e0hvbWVTZWN0aW9ufS8+XHJcbiAgICA8Um91dGUgbmFtZT0ndG9kbycgcGF0aD0nL3RvZG8nIGhhbmRsZXI9e1RvZG9TZWN0aW9ufS8+XHJcbiAgICA8Um91dGUgbmFtZT0nY29udGFjdCcgcGF0aD1cIi9jb250YWN0XCIgaGFuZGxlcj17Q29udGFjdH0vPlxyXG4gICAgPERlZmF1bHRSb3V0ZSBoYW5kbGVyPXtIb21lU2VjdGlvbn0gLz5cclxuICAgIDxOb3RGb3VuZFJvdXRlIGhhbmRsZXI9e05vdEZvdW5kU2VjdGlvbn0gLz5cclxuICA8L1JvdXRlPlxyXG4pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9+L2VzbGludC1sb2FkZXIhL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL3JvdXRlcy5qc1xuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vX0FwcC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9fQXBwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vX0FwcC5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXIuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hlYWRlci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXIuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9fVG9kb0l0ZW0uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vX1RvZG9JdGVtLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vX1RvZG9JdGVtLnNjc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9qdWxpZW52YWxlcnkvRG9jdW1lbnRzL0Rldi9HaXQvd2Vic2l0ZS1hcGlzL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL19Ub2RvSXRlbS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9pbmRlbnRlZFN5bnRheCEuL3N0eWxlcy5zYXNzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/aW5kZW50ZWRTeW50YXghLi9zdHlsZXMuc2Fzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/aW5kZW50ZWRTeW50YXghLi9zdHlsZXMuc2Fzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2p1bGllbnZhbGVyeS9Eb2N1bWVudHMvRGV2L0dpdC93ZWJzaXRlLWFwaXMvYXBwL3N0eWxlc2hlZXRzL3N0eWxlcy5zYXNzXG4gKiogbW9kdWxlIGlkID0gMjUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJWMmQtdWNfLnBuZ1wiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvanVsaWVudmFsZXJ5L0RvY3VtZW50cy9EZXYvR2l0L3dlYnNpdGUtYXBpcy9hcHAvY29tcG9uZW50cy9IZWFkZXIvaW1hZ2VzL3JlYWN0LWxvZ28ucG5nXG4gKiogbW9kdWxlIGlkID0gMjUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9