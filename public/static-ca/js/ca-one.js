// remove commented lines 

/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

  module.exports = jQuery;

  /***/ }),
  /* 1 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transitionend = exports.GetYoDigits = exports.rtl = undefined;
  
  var _jquery = __webpack_require__(0);
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // Core Foundation Utilities, utilized in a number of places.
  
  /**
   * Returns a boolean for RTL support
   */
  function rtl() {
    return (0, _jquery2.default)('html').attr('dir') === 'rtl';
  }
  
  /**
   * returns a random base-36 uid with namespacing
   * @function
   * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
   * @param {String} namespace - name of plugin to be incorporated in uid, optional.
   * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
   * @returns {String} - unique id
   */
  function GetYoDigits(length, namespace) {
    // length = length || 6;
    // return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? '-' + namespace : '');
    return;
  }
  
  function transitionend($elem) {
  
  }
  
  exports.rtl = rtl;
  exports.GetYoDigits = GetYoDigits;
  exports.transitionend = transitionend;
  
  /***/ }),
  /* 2 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Plugin = undefined;
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  var _jquery = __webpack_require__(0);
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  var _foundationUtil = __webpack_require__(1);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  // Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST

  var Plugin = function () {
    function Plugin(element, options) {
  
      _classCallCheck(this, Plugin);
  
      this._setup(element, options);
      var pluginName = getPluginName(this);
      this.uuid = (0, _foundationUtil.GetYoDigits)(6, pluginName);
  
      if (!this.$element.attr('data-' + pluginName)) {
        this.$element.attr('data-' + pluginName, this.uuid);
      }
      if (!this.$element.data('zfPlugin')) {
        this.$element.data('zfPlugin', this);
      }
      /**
       * Fires when the plugin has initialized.
       * @event Plugin#init
       */
      this.$element.trigger('init.zf.' + pluginName);
    }
  
    _createClass(Plugin, [{
      key: 'destroy',
      value: function destroy() {
        this._destroy();
        var pluginName = getPluginName(this);
        this.$element.removeAttr('data-' + pluginName).removeData('zfPlugin')
        /**
         * Fires when the plugin has been destroyed.
         * @event Plugin#destroyed
         */
        .trigger('destroyed.zf.' + pluginName);
        for (var prop in this) {
          this[prop] = null; //clean up script to prep for garbage collection.
        }
      }
    }]);
  
    return Plugin;
  }();
  
  
  
  
  function hyphenate(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
  
  function getPluginName(obj) {
  
  }
  
  exports.Plugin = Plugin;
  
  /***/ }),
  /* 3 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MediaQuery = undefined;
  
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
  
  var _jquery = __webpack_require__(0);
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // Default set of media queries
  var defaultQueries = {
    'default': 'only screen',
    landscape: 'only screen and (orientation: landscape)',
    portrait: 'only screen and (orientation: portrait)',
    retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'
  };
  
  
  var MediaQuery = {
    queries: [],
  
    current: '',
  
    /**
     * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
     * @function
     * @private
     */
    _init: function _init() {
     
    },
  
  
    /**
     * Checks if the screen is at least as wide as a breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint to check.
     * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
     */
    atLeast: function atLeast(size) {
     
    },
  
  
    /**
     * Checks if the screen matches to a breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
     * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
     */
    is: function is(size) {
     
      return false;
    },
  
  
    /**
     * Gets the media query of a breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint to get.
     * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
     */
    get: function get(size) {
     
      return null;
    },
  
  
    /**
     * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
     * @function
     * @private
     * @returns {String} Name of the current breakpoint.
     */
    _getCurrentSize: function _getCurrentSize() {
     
    },
  
  
    /**
     * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
     * @function
     * @private
     */
    _watcher: function _watcher() {
      var _this = this;
  
     
    }
  };
  
  // Thank you: https://github.com/sindresorhus/query-string
  function parseStyleToObject(str) {
    
  }
  
  exports.MediaQuery = MediaQuery;
  
  /***/ }),
  /* 4 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /*******************************************
   *                                         *
   
   *                                         *
   ******************************************/
  
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Keyboard = undefined;
  
  var _jquery = __webpack_require__(0);
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  var _foundationUtil = __webpack_require__(1);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var keyCodes = {
    9: 'TAB',
    13: 'ENTER',
    27: 'ESCAPE',
    32: 'SPACE',
    35: 'END',
    36: 'HOME',
    37: 'ARROW_LEFT',
    38: 'ARROW_UP',
    39: 'ARROW_RIGHT',
    40: 'ARROW_DOWN'
  };
  
  var commands = {};
  
  
  
  
  /***/ }),
  /* 5 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Triggers = undefined;
  
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
  
  var _jquery = __webpack_require__(0);
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  var _foundationUtil = __webpack_require__(6);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var MutationObserver = function () {
    
  }();
  
  var triggers = function triggers(el, type) {
   
  };
  
  var Triggers = {
    Listeners: {
      Basic: {},
      Global: {}
    },
    Initializers: {}
  };
  
  Triggers.Listeners.Basic = {
  
  };
  
  Triggers.Initializers.addClosemeListener = function (pluginName) {
    
  };
  
  function debounceGlobalListener(debounce, trigger, listener) {
   
  }
  
  
  Triggers.Initializers.addGlobalListeners = function () {
    var $document = (0, _jquery2.default)(document);
    Triggers.Initializers.addMutationEventsListener($document);
    Triggers.Initializers.addResizeListener();
    Triggers.Initializers.addScrollListener();
    Triggers.Initializers.addClosemeListener();
  };
  
  Triggers.init = function ($, Foundation) {
    
  };
  // dev needed
  // exports.Triggers = Triggers;
  
  /***/ }),
  /* 6 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Motion = exports.Move = undefined;
  
  var _jquery = __webpack_require__(0);
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  var _foundationUtil = __webpack_require__(1);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Motion module.
   * @module foundation.motion
   */
  
  var initClasses = ['mui-enter', 'mui-leave'];
  var activeClasses = ['mui-enter-active', 'mui-leave-active'];
  
  var Motion = {
    animateIn: function animateIn(element, animation, cb) {
      animate(true, element, animation, cb);
    },
  
    animateOut: function animateOut(element, animation, cb) {
      animate(false, element, animation, cb);
    }
  };
  
  function Move(duration, elem, fn) {
    var anim,
        prog,
        start = null;
    // console.log('called');
  
    if (duration === 0) {
      fn.apply(elem);
      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
      return;
    }
  
    function move(ts) {
      if (!start) start = ts;
      // console.log(start, ts);
      prog = ts - start;
      fn.apply(elem);
  
      if (prog < duration) {
        anim = window.requestAnimationFrame(move, elem);
      } else {
        window.cancelAnimationFrame(anim);
        elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
      }
    }
    anim = window.requestAnimationFrame(move);
  }
  
  /**
   * Animates an element in or out using a CSS transition class.
   * @function
   * @private
   * @param {Boolean} isIn - Defines if the animation is in or out.
   * @param {Object} element - jQuery or HTML object to animate.
   * @param {String} animation - CSS class to use.
   * @param {Function} cb - Callback to run when animation is finished.
   */
  function animate(isIn, element, animation, cb) {
    element = (0, _jquery2.default)(element).eq(0);
  
    if (!element.length) return;
  
    var initClass = isIn ? initClasses[0] : initClasses[1];
    var activeClass = isIn ? activeClasses[0] : activeClasses[1];
  
    // Set up the animation
    reset();
  
    element.addClass(animation).css('transition', 'none');
  
    requestAnimationFrame(function () {
      element.addClass(initClass);
      if (isIn) element.show();
    });
  
    // Start the animation
    requestAnimationFrame(function () {
      element[0].offsetWidth;
      element.css('transition', '').addClass(activeClass);
    });
  
    // Clean up the animation when it finishes
    element.one((0, _foundationUtil.transitionend)(element), finish);
  
    // Hides the element (for out animations), resets the element, and runs a callback
    function finish() {
      if (!isIn) element.hide();
      reset();
      if (cb) cb.apply(element);
    }
  
    // Resets transitions and removes motion-specific classes
    function reset() {
      element[0].style.transitionDuration = 0;
      element.removeClass(initClass + ' ' + activeClass + ' ' + animation);
    }
  }
  
  exports.Move = Move;
  exports.Motion = Motion;
  
  /***/ }),
  /* 7 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Box = undefined;
  
  var _foundationUtil = __webpack_require__(1);
  
  var Box = {
    ImNotTouchingYou: ImNotTouchingYou,
    OverlapArea: OverlapArea,
    GetDimensions: GetDimensions,
    GetOffsets: GetOffsets,
    GetExplicitOffsets: GetExplicitOffsets
  
    /**
     * Compares the dimensions of an element to a container and determines collision events with container.
     * @function
     * @param {jQuery} element - jQuery object to test for collisions.
     * @param {jQuery} parent - jQuery object to use as bounding container.
     * @param {Boolean} lrOnly - set to true to check left and right values only.
     * @param {Boolean} tbOnly - set to true to check top and bottom values only.
     * @default if no parent object passed, detects collisions with `window`.
     * @returns {Boolean} - true if collision free, false if a collision in any direction.
     */
  };function ImNotTouchingYou(element, parent, lrOnly, tbOnly, ignoreBottom) {
    return OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) === 0;
  };
  
  function OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) {
    var eleDims = GetDimensions(element),
        topOver,
        bottomOver,
        leftOver,
        rightOver;
    if (parent) {
      var parDims = GetDimensions(parent);
  
      bottomOver = parDims.height + parDims.offset.top - (eleDims.offset.top + eleDims.height);
      topOver = eleDims.offset.top - parDims.offset.top;
      leftOver = eleDims.offset.left - parDims.offset.left;
      rightOver = parDims.width + parDims.offset.left - (eleDims.offset.left + eleDims.width);
    } else {
      bottomOver = eleDims.windowDims.height + eleDims.windowDims.offset.top - (eleDims.offset.top + eleDims.height);
      topOver = eleDims.offset.top - eleDims.windowDims.offset.top;
      leftOver = eleDims.offset.left - eleDims.windowDims.offset.left;
      rightOver = eleDims.windowDims.width - (eleDims.offset.left + eleDims.width);
    }
  
    bottomOver = ignoreBottom ? 0 : Math.min(bottomOver, 0);
    topOver = Math.min(topOver, 0);
    leftOver = Math.min(leftOver, 0);
    rightOver = Math.min(rightOver, 0);
  
    if (lrOnly) {
      return leftOver + rightOver;
    }
    if (tbOnly) {
      return topOver + bottomOver;
    }
  
    // use sum of squares b/c we care about overlap area.
    return Math.sqrt(topOver * topOver + bottomOver * bottomOver + leftOver * leftOver + rightOver * rightOver);
  }
  
  /**
   * Uses native methods to return an object of dimension values.
   * @function
   * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
   * @returns {Object} - nested object of integer pixel values
   * TODO - if element is window, return only those values.
   */
  function GetDimensions(elem) {
    elem = elem.length ? elem[0] : elem;
  
    if (elem === window || elem === document) {
      throw new Error("I'm sorry,I  'm afraid I can't do that.");
    }
  
    var rect = elem.getBoundingClientRect(),
        parRect = elem.parentNode.getBoundingClientRect(),
        winRect = document.body.getBoundingClientRect(),
        winY = window.pageYOffset,
        winX = window.pageXOffset;
  
    return {
      width: rect.width,
      height: rect.height,
      offset: {
        top: rect.top + winY,
        left: rect.left + winX
      },
      parentDims: {
        width: parRect.width,
        height: parRect.height,
        offset: {
          top: parRect.top + winY,
          left: parRect.left + winX
        }
      },
      windowDims: {
        width: winRect.width,
        height: winRect.height,
        offset: {
          top: winY,
          left: winX
        }
      }
    };
  }
  
  /**
   * 
   * @function
   * @param {jQuery} element - jQuery object for the element being positioned.
   * @param {jQuery} anchor - jQuery object for the element's anchor point.
   * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
   * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
   * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
   * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
   * TODO alter/rewrite to work with `em` values as well/instead of pixels
   */

  
  //  dev brightness on off. 
  function GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {
    console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5");
    switch (position) {
      case 'top':
        return (0, _foundationUtil.rtl)() ? GetExplicitOffsets(element, anchor, 'top', 'left', vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, 'top', 'right', vOffset, hOffset, isOverflow);
      case 'bottom':
        return (0, _foundationUtil.rtl)() ? GetExplicitOffsets(element, anchor, 'bottom', 'left', vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, 'bottom', 'right', vOffset, hOffset, isOverflow);
      case 'center top':
        return GetExplicitOffsets(element, anchor, 'top', 'center', vOffset, hOffset, isOverflow);
      case 'center bottom':
        return GetExplicitOffsets(element, anchor, 'bottom', 'center', vOffset, hOffset, isOverflow);
      case 'center left':
        return GetExplicitOffsets(element, anchor, 'left', 'center', vOffset, hOffset, isOverflow);
      case 'center right':
        return GetExplicitOffsets(element, anchor, 'right', 'center', vOffset, hOffset, isOverflow);
      case 'left bottom':
        return GetExplicitOffsets(element, anchor, 'bottom', 'left', vOffset, hOffset, isOverflow);
      case 'right bottom':
        return GetExplicitOffsets(element, anchor, 'bottom', 'right', vOffset, hOffset, isOverflow);
      // Backwards compatibility... this along with the reveal and reveal full
      // classes are the only ones that didn't reference anchor
      case 'center':
        return {
          left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2 + hOffset,
          top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - ($eleDims.height / 2 + vOffset)
        };
      case 'reveal':
        return {
          left: ($eleDims.windowDims.width - $eleDims.width) / 2 + hOffset,
          top: $eleDims.windowDims.offset.top + vOffset
        };
      case 'reveal full':
        return {
          left: $eleDims.windowDims.offset.left,
          top: $eleDims.windowDims.offset.top
        };
        break;
      default:
        return {
          left: (0, _foundationUtil.rtl)() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset : $anchorDims.offset.left + hOffset,
          top: $anchorDims.offset.top + $anchorDims.height + vOffset
        };
  
    }
  }
  
  //  dev brightness on off. 
  function GetExplicitOffsets(element, anchor, position, alignment, vOffset, hOffset, isOverflow) {
    var $eleDims = GetDimensions(element),
        $anchorDims = anchor ? GetDimensions(anchor) : null;
  
    var topVal, leftVal;
  
    // set position related attribute
  
    switch (position) {
      case 'top':
        topVal = $anchorDims.offset.top - ($eleDims.height + vOffset);
        break;
      case 'bottom':
        topVal = $anchorDims.offset.top + $anchorDims.height + vOffset;
        break;
      case 'left':
        leftVal = $anchorDims.offset.left - ($eleDims.width + hOffset);
        break;
      case 'right':
        leftVal = $anchorDims.offset.left + $anchorDims.width + hOffset;
        break;
    }
  
    // set alignment related attribute
    switch (position) {
      case 'top':
      case 'bottom':
        switch (alignment) {
          case 'left':
            leftVal = $anchorDims.offset.left + hOffset;
            break;
          case 'right':
            leftVal = $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset;
            break;
          case 'center':
            leftVal = isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2 + hOffset;
            break;
        }
        break;
      case 'right':
      case 'left':
        switch (alignment) {
          case 'bottom':
            topVal = $anchorDims.offset.top - vOffset + $anchorDims.height - $eleDims.height;
            break;
          case 'top':
            topVal = $anchorDims.offset.top + vOffset;
            break;
          case 'center':
            topVal = $anchorDims.offset.top + vOffset + $anchorDims.height / 2 - $eleDims.height / 2;
            break;
        }
        break;
    }
    return { top: topVal, left: leftVal };
  }
  
  exports.Box = Box;
  
  /***/ }),
  /* 8 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.onImagesLoaded = undefined;
  
  var _jquery = __webpack_require__(0);
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Runs a callback function when images are fully loaded.
   * @param {Object} images - Image(s) to check if loaded.
   * @param {Func} callback - Function to execute when image is fully loaded.
   */
  function onImagesLoaded(images, callback) {
    var self = this,
        unloaded = images.length;
  
    if (unloaded === 0) {
      callback();
    }
  
    images.each(function () {
      // Check if image is loaded
      if (this.complete && this.naturalWidth !== undefined) {
        singleImageLoaded();
      } else {
        // If the above check failed, simulate loading on detached element.
        var image = new Image();
        // Still count image as loaded if it finalizes with an error.
        var events = "load.zf.images error.zf.images";
        (0, _jquery2.default)(image).one(events, function me(event) {
          // Unbind the event listeners. We're using 'one' but only one of the two events will have fired.
          (0, _jquery2.default)(this).off(events, me);
          singleImageLoaded();
        });
        image.src = (0, _jquery2.default)(this).attr('src');
      }
    });
  
    function singleImageLoaded() {
      unloaded--;
      if (unloaded === 0) {
        callback();
      }
    }
  }
  
  exports.onImagesLoaded = onImagesLoaded;
  
  /***/ }),
  /* 9 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Nest = undefined;
  
  var _jquery = __webpack_require__(0);
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Nest = {
    Feather: function Feather(menu) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'zf';
  
      menu.attr('role', 'menubar');
  
      var items = menu.find('li').attr({ 'role': 'menuitem' }),
          subMenuClass = 'is-' + type + '-submenu',
          subItemClass = subMenuClass + '-item',
          hasSubClass = 'is-' + type + '-submenu-parent',
          applyAria = type !== 'accordion'; // Accordions handle their own ARIA attriutes.
  
      items.each(function () {
        var $item = (0, _jquery2.default)(this),
            $sub = $item.children('ul');
  
        if ($sub.length) {
          $item.addClass(hasSubClass);
          $sub.addClass('submenu ' + subMenuClass).attr({ 'data-submenu': '' });
          if (applyAria) {
            $item.attr({
              'aria-haspopup': true,
              'aria-label': $item.children('a:first').text()
            });
            // Note: 
            if (type === 'drilldown') {
              $item.attr({ 'aria-expanded': false });
            }
          }
          $sub.addClass('submenu ' + subMenuClass).attr({
            'data-submenu': '',
            'role': 'menu'
          });
          if (type === 'drilldown') {
            $sub.attr({ 'aria-hidden': true });
          }
        }
  
        if ($item.parent('[data-submenu]').length) {
          $item.addClass('is-submenu-item ' + subItemClass);
        }
      });
  
      return;
    },
    Burn: function Burn(menu, type) {
      var //items = menu.find('li'),
      subMenuClass = 'is-' + type + '-submenu',
          subItemClass = subMenuClass + '-item',
          hasSubClass = 'is-' + type + '-submenu-parent';
  
      menu.find('>li, .menu, .menu > li').removeClass(subMenuClass + ' ' + subItemClass + ' ' + hasSubClass + ' is-submenu-item submenu is-active').removeAttr('data-submenu').css('display', '');
    }
  };
  
  exports.Nest = Nest;
  
  /***/ }),
  /* 10 */
  /***/ (function(module, exports) {
  
  var g;
  
  // This works in non-strict mode
  g = (function() {
    return this;
  })();
  
  try {
    // This works if eval is allowed (see CSP)
    g = g || Function("return this")() || (1,eval)("this");
  } catch(e) {
    // This works if the window reference is available
    if(typeof window === "object")
      g = window;
  }
  
  // g can still be undefined, but nothing to do about it...
  // We return undefined, instead of nothing here, so it's
  // easier to handle this case. if(!global) { ...}
  
  module.exports = g;
  
  
  /***/ }),
  /* 11 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Touch = undefined;
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //**************************************************

  //**************************************************
  
  var _jquery = __webpack_require__(0);
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  var Touch = {};
  
  var startPosX,
      startPosY,
      startTime,
      elapsedTime,
      isMoving = false;
  
  function onTouchEnd() {
    //  alert(this);
    this.removeEventListener('touchmove', onTouchMove);
    this.removeEventListener('touchend', onTouchEnd);
    isMoving = false;
  }
  
  function onTouchMove(e) {
    
  }
  
  function onTouchStart(e) {
  
  }
  
  function init() {
    this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
  }
  
  function teardown() {
    this.removeEventListener('touchstart', onTouchStart);
  }
  
  var SpotSwipe = function () {
    function SpotSwipe($) {
      _classCallCheck(this, SpotSwipe);
  
      this.version = '1.0.0';
      this.enabled = 'ontouchstart' in document.documentElement;
      this.preventDefault = false;
      this.moveThreshold = 75;
      this.timeThreshold = 200;
      this.$ = $;
      this._init();
    }
  
    _createClass(SpotSwipe, [{
      key: '_init',
      value: function _init() {
        var $ = this.$;
        $.event.special.swipe = { setup: init };
  
        $.each(['left', 'up', 'down', 'right'], function () {
          $.event.special['swipe' + this] = { setup: function setup() {
              $(this).on('swipe', $.noop);
            } };
        });
      }
    }]);
  
    return SpotSwipe;
  }();
  
  /****************************************************
   
   ****************************************************/
  
  Touch.setupSpotSwipe = function ($) {
    $.spotSwipe = new SpotSwipe($);
  };
  
  /****************************************************
   * Method for adding pseudo drag events to elements *
   ***************************************************/
  Touch.setupTouchHandler = function ($) {
  
  };
  
  Touch.init = function ($) {
    if (typeof $.spotSwipe === 'undefined') {
      Touch.setupSpotSwipe($);
      Touch.setupTouchHandler($);
    }
  };
  
  exports.Touch = Touch;


  
  
  /***/ }),
  /* 12 */
  /***/ (function(module, exports, __webpack_require__) {
  
    "use strict";
  
  
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Timer = undefined;
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function Timer(elem, options, cb) {
    
    }
    
    exports.Timer = Timer;
    
    /***/ }),
    /* 13 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Accordion = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(4);
    
    var _foundationUtil2 = __webpack_require__(1);
    
    var _foundation = __webpack_require__(2);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    /**
    
    /***/ }),
    /* 14 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AccordionMenu = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(4);
    
    var _foundationUtil2 = __webpack_require__(9);
    
    var _foundationUtil3 = __webpack_require__(1);
    
    var _foundation = __webpack_require__(2);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    
    /***/ }),
    /* 15 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Drilldown = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(4);
    
    var _foundationUtil2 = __webpack_require__(9);
    
    var _foundationUtil3 = __webpack_require__(1);
    
    var _foundationUtil4 = __webpack_require__(7);
    
    var _foundation = __webpack_require__(2);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    
    /***/ }),
    /* 16 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Positionable = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _foundationUtil = __webpack_require__(7);
    
    var _foundation = __webpack_require__(2);
    
    var _foundationUtil2 = __webpack_require__(1);
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    var POSITIONS = ['left', 'right', 'top', 'bottom'];
    var VERTICAL_ALIGNMENTS = ['top', 'bottom', 'center'];
    var HORIZONTAL_ALIGNMENTS = ['left', 'right', 'center'];
    
    var ALIGNMENTS = {
      'left': VERTICAL_ALIGNMENTS,
      'right': VERTICAL_ALIGNMENTS,
      'top': HORIZONTAL_ALIGNMENTS,
      'bottom': HORIZONTAL_ALIGNMENTS
    };
    
    function nextItem(item, array) {
      var currentIdx = array.indexOf(item);
      if (currentIdx === array.length - 1) {
        return array[0];
      } else {
        return array[currentIdx + 1];
      }
    }
    
    var Positionable = function (_Plugin) {
      _inherits(Positionable, _Plugin);
    
      function Positionable() {
        _classCallCheck(this, Positionable);
    
        return _possibleConstructorReturn(this, (Positionable.__proto__ || Object.getPrototypeOf(Positionable)).apply(this, arguments));
      }
    
      _createClass(Positionable, [{
        key: '_init',
    
        /**
        
         *
         **/
    
        value: function _init() {
          this.triedPositions = {};
          this.position = this.options.position === 'auto' ? this._getDefaultPosition() : this.options.position;
          this.alignment = this.options.alignment === 'auto' ? this._getDefaultAlignment() : this.options.alignment;
        }
      }, {
        key: '_getDefaultPosition',
        value: function _getDefaultPosition() {
          return 'bottom';
        }
      }, {
        key: '_getDefaultAlignment',
        value: function _getDefaultAlignment() {
          switch (this.position) {
            case 'bottom':
            case 'top':
              return (0, _foundationUtil2.rtl)() ? 'right' : 'left';
            case 'left':
            case 'right':
              return 'bottom';
          }
        }
    
        /**
         * Adjusts the positionable possible positions by iterating through alignments
         * and positions.
         * @function
         * @private
         */
    
      }, {
        key: '_reposition',
        value: function _reposition() {
          if (this._alignmentsExhausted(this.position)) {
            this.position = nextItem(this.position, POSITIONS);
            this.alignment = ALIGNMENTS[this.position][0];
          } else {
            this._realign();
          }
        }
    
        /**
         * Adjusts the dropdown pane possible positions by iterating through alignments
         * on the current position.
         * @function
         * @private
         */
    
      }, {
        key: '_realign',
        value: function _realign() {
          this._addTriedPosition(this.position, this.alignment);
          this.alignment = nextItem(this.alignment, ALIGNMENTS[this.position]);
        }
      }, {
        key: '_addTriedPosition',
        value: function _addTriedPosition(position, alignment) {
          this.triedPositions[position] = this.triedPositions[position] || [];
          this.triedPositions[position].push(alignment);
        }
      }, {
        key: '_positionsExhausted',
        value: function _positionsExhausted() {
          var isExhausted = true;
          for (var i = 0; i < POSITIONS.length; i++) {
            isExhausted = isExhausted && this._alignmentsExhausted(POSITIONS[i]);
          }
          return isExhausted;
        }
      }, {
        key: '_alignmentsExhausted',
        value: function _alignmentsExhausted(position) {
          return this.triedPositions[position] && this.triedPositions[position].length == ALIGNMENTS[position].length;
        }
    
        // When we're trying to center, we don't want to apply offset that's going to
        // take us just off center, so wrap around to return 0 for the appropriate
        // offset in those alignments.  TODO: Figure out if we want to make this
        // configurable behavior... it feels more intuitive, especially for tooltips, but
        // it's possible someone might actually want to start from center and then nudge
        // slightly off.
    
      }, {
        key: '_getVOffset',
        value: function _getVOffset() {
          return this.options.vOffset;
        }
      }, {
        key: '_getHOffset',
        value: function _getHOffset() {
          return this.options.hOffset;
        }
      }, {
        key: '_setPosition',
        value: function _setPosition($anchor, $element, $parent) {
          if ($anchor.attr('aria-expanded') === 'false') {
            return false;
          }
          var $eleDims = _foundationUtil.Box.GetDimensions($element),
              $anchorDims = _foundationUtil.Box.GetDimensions($anchor);
    
          $element.offset(_foundationUtil.Box.GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
    
          if (!this.options.allowOverlap) {
            var overlaps = {};
            var minOverlap = 100000000;
            // default coordinates to how we start, in case we can't figure out better
            var minCoordinates = { position: this.position, alignment: this.alignment };
            while (!this._positionsExhausted()) {
              var overlap = _foundationUtil.Box.OverlapArea($element, $parent, false, false, this.options.allowBottomOverlap);
              if (overlap === 0) {
                return;
              }
    
              if (overlap < minOverlap) {
                minOverlap = overlap;
                minCoordinates = { position: this.position, alignment: this.alignment };
              }
    
              this._reposition();
    
              $element.offset(_foundationUtil.Box.GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
            }
            // If we get through the entire loop, there was no non-overlapping
            // position available. Pick the version with least overlap.
            this.position = minCoordinates.position;
            this.alignment = minCoordinates.alignment;
            $element.offset(_foundationUtil.Box.GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
          }
        }
      }]);
    
      return Positionable;
    }(_foundation.Plugin);
    
    Positionable.defaults = {
      /**
       * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.
       * @option
       * @type {string}
       * @default 'auto'
       */
      position: 'auto',
      /**
       * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.
       * @option
       * @type {string}
       * @default 'auto'
       */
      alignment: 'auto',
      /**
       * Allow overlap of container/window. If false, dropdown positionable first
       * try to position as defined by data-position and data-alignment, but
       * reposition if it would cause an overflow.
       * @option
       * @type {boolean}
       * @default false
       */
      allowOverlap: false,
      /**
       
       * @option
       * @type {boolean}
       * @default true
       */
      allowBottomOverlap: true,
      /**
       
       * @option
       * @type {number}
       * @default 0
       */
      vOffset: 0,
      /**
       
       * @option
       * @type {number}
       * @default 0
       */
      hOffset: 0
    };
    
    exports.Positionable = Positionable;
    
    /***/ }),
    /* 17 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DropdownMenu = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(4);
    
    var _foundationUtil2 = __webpack_require__(9);
    
    var _foundationUtil3 = __webpack_require__(7);
    
    var _foundationUtil4 = __webpack_require__(1);
    
    var _foundation = __webpack_require__(2);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    /***/ }),
    /* 18 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.SmoothScroll = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(1);
    
    var _foundation = __webpack_require__(2);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    
    /***/ }),
    /* 19 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Tabs = undefined;
    
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(4);
    
    var _foundationUtil2 = __webpack_require__(8);
    
    var _foundation = __webpack_require__(2);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    
    /***/ }),
    /* 20 */
    /***/ (function(module, exports, __webpack_require__) {
    
    module.exports = __webpack_require__(21);
    
    
    /***/ }),
    /* 21 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _whatInput = __webpack_require__(22);
    
    var _whatInput2 = _interopRequireDefault(_whatInput);
    
    __webpack_require__(23);
    
    __webpack_require__(24);
    
    var _foundationSites = __webpack_require__(28);
    
    var _foundationSites2 = _interopRequireDefault(_foundationSites);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    window.$ = _jquery2.default;
    
    // If you want to pick and choose which modules to include, comment out the above and uncomment
    // the line below
    //import './lib/foundation-explicit-pieces';
    
    (0, _jquery2.default)(document).foundation();
    
    (0, _jquery2.default)(function () {
        (0, _jquery2.default)('.main-panel:first-child').addClass('expand');
        (0, _jquery2.default)('.tabs-title:first-child').addClass('is-active');
    });
    
    (0, _jquery2.default)('#teams-tabs').on('change.zf.tabs', function () {
    
        (0, _jquery2.default)(function () {
            (0, _jquery2.default)('.main-panel:first-child').removeClass('expand');
        });
    });
    
    (0, _jquery2.default)(document).ready(function () {
        AOS.init({
            offset: 100,
            duration: 1000,
            once: true,
            disable: 'mobile'
        });
    });
    
    (0, _jquery2.default)(".primary-menu ul li .sub-menu").hover(function () {
        (0, _jquery2.default)(this).siblings().toggleClass('background-header');
    });
    
    (0, _jquery2.default)(".dark-overlay").hide();
    
    (0, _jquery2.default)(".primary-menu ul .menu-item-has-children").hover(function () {
        (0, _jquery2.default)(".dark-overlay").toggle();
        console.log('hovered');
    });
    
    //Home Page Accordion
    
    // if ((0, _jquery2.default)(window).width() > 1024) {
    
    //     (0, _jquery2.default)(".accordion-section .tile-1").hover(function () {
    
    //         (0, _jquery2.default)(this).css('cursor', 'pointer');
    
    //         (0, _jquery2.default)(".tile-1 .para-content").toggleClass('show-me');
    //         (0, _jquery2.default)(".tile-2 h2").toggleClass('reduce-opacity');
    //         (0, _jquery2.default)(".tile-3 h2").toggleClass('reduce-opacity');
    //         (0, _jquery2.default)(".tile-4 h2").toggleClass('reduce-opacity');
    
    //         (0, _jquery2.default)(".tile-2 .button").toggleClass('reduce-button-opacity');
    //         (0, _jquery2.default)(".tile-3 .button").toggleClass('reduce-button-opacity');
    //         (0, _jquery2.default)(".tile-4 .button").toggleClass('reduce-button-opacity');
    
    //         (0, _jquery2.default)(".tile-1 .back-image").toggleClass('hide-image');
    //         (0, _jquery2.default)(".tile-2 .back-image").toggleClass('hide-image');
    //         (0, _jquery2.default)(".tile-3 .back-image").toggleClass('hide-image');
    //         (0, _jquery2.default)(".tile-4 .back-image").toggleClass('hide-image');
    
    //         (0, _jquery2.default)(".full-image-1").toggleClass('show-full-width-image');
    //     });
    
    //     (0, _jquery2.default)(".accordion-section .tile-2").hover(function () {
    
    //         (0, _jquery2.default)(this).css('cursor', 'pointer');
    
    //         (0, _jquery2.default)(".tile-2 .para-content").toggleClass('show-me');
    //         (0, _jquery2.default)(".tile-1 h2").toggleClass('reduce-opacity');
    //         (0, _jquery2.default)(".tile-3 h2").toggleClass('reduce-opacity');
    //         (0, _jquery2.default)(".tile-4 h2").toggleClass('reduce-opacity');
    
    //         (0, _jquery2.default)(".tile-1 .button").toggleClass('reduce-button-opacity');
    //         (0, _jquery2.default)(".tile-3 .button").toggleClass('reduce-button-opacity');
    //         (0, _jquery2.default)(".tile-4 .button").toggleClass('reduce-button-opacity');
    
    //         (0, _jquery2.default)(".tile-1 .back-image").toggleClass('hide-image');
    //         (0, _jquery2.default)(".tile-2 .back-image").toggleClass('hide-image');
    //         (0, _jquery2.default)(".tile-3 .back-image").toggleClass('hide-image');
    //         (0, _jquery2.default)(".tile-4 .back-image").toggleClass('hide-image');
    
    //         (0, _jquery2.default)(".full-image-2").toggleClass('show-full-width-image');
    //     });
    
    //     (0, _jquery2.default)(".accordion-section .tile-3").hover(function () {
    
    //         (0, _jquery2.default)(this).css('cursor', 'pointer');
    
    //         (0, _jquery2.default)(".tile-3 .para-content").toggleClass('show-me');
    //         (0, _jquery2.default)(".tile-1 h2").toggleClass('reduce-opacity');
    //         (0, _jquery2.default)(".tile-2 h2").toggleClass('reduce-opacity');
    //         (0, _jquery2.default)(".tile-4 h2").toggleClass('reduce-opacity');
    
    //         (0, _jquery2.default)(".tile-1 .button").toggleClass('reduce-button-opacity');
    //         (0, _jquery2.default)(".tile-2 .button").toggleClass('reduce-button-opacity');
    //         (0, _jquery2.default)(".tile-4 .button").toggleClass('reduce-button-opacity');
    
    //         (0, _jquery2.default)(".tile-1 .back-image").toggleClass('hide-image');
    //         (0, _jquery2.default)(".tile-2 .back-image").toggleClass('hide-image');
    //         (0, _jquery2.default)(".tile-3 .back-image").toggleClass('hide-image');
    //         (0, _jquery2.default)(".tile-4 .back-image").toggleClass('hide-image');
    
    //         (0, _jquery2.default)(".full-image-3").toggleClass('show-full-width-image');
    //     });
    
    //     (0, _jquery2.default)(".accordion-section .tile-4").hover(function () {
    
    //         (0, _jquery2.default)(this).css('cursor', 'pointer');
    
    //         (0, _jquery2.default)(".tile-4 .para-content").toggleClass('show-me');
    //         (0, _jquery2.default)(".tile-1 h2").toggleClass('reduce-opacity');
    //         (0, _jquery2.default)(".tile-2 h2").toggleClass('reduce-opacity');
    //         (0, _jquery2.default)(".tile-3 h2").toggleClass('reduce-opacity');
    
    //         (0, _jquery2.default)(".tile-1 .button").toggleClass('reduce-button-opacity');
    //         (0, _jquery2.default)(".tile-2 .button").toggleClass('reduce-button-opacity');
    //         (0, _jquery2.default)(".tile-3 .button").toggleClass('reduce-button-opacity');
    
    //         (0, _jquery2.default)(".tile-1 .back-image").toggleClass('hide-image');
    //         (0, _jquery2.default)(".tile-2 .back-image").toggleClass('hide-image');
    //         (0, _jquery2.default)(".tile-3 .back-image").toggleClass('hide-image');
    //         (0, _jquery2.default)(".tile-4 .back-image").toggleClass('hide-image');
    
    //         (0, _jquery2.default)(".full-image-4").toggleClass('show-full-width-image');
    //     });
    // }
    
    /*
     * Swiper.js
     *
     * Header
     *
     */
    var swiper1 = new Swiper('.swiper-container-hero', {
        speed: 1200,
    
        pagination: {
            el: '.swiper-pagination'
        },
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    
    });
    
    /*
     * Swiper.js
     *
     *
     *
     */
    
    
    
    (0, _jquery2.default)(".dropdown-button").click(function () {
    
        (0, _jquery2.default)(".dropdown-container").slideToggle();
    });
    
    /***/ }),
    /* 22 */
    /***/ (function(module, exports, __webpack_require__) {
    
    /**
     * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
     * @version v4.3.1
     * @link https://github.com/ten1seven/what-input
     * @license MIT
     */
    (function webpackUniversalModuleDefinition(root, factory) {
      if(true)
        module.exports = factory();
      else if(typeof define === 'function' && define.amd)
        define("whatInput", [], factory);
      else if(typeof exports === 'object')
        exports["whatInput"] = factory();
      else
        root["whatInput"] = factory();
    })(this, function() {
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
    /******/ 	__webpack_require__.p = "";
    
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(0);
    /******/ })
    /************************************************************************/
    /******/ ([
    /* 0 */
    /***/ function(module, exports) {
    
      'use strict';
    
      module.exports = function () {
        /*
         * variables
         */
    
        // last used input type
        var currentInput = 'initial';
    
        // last used input intent
        var currentIntent = null;
    
        // cache document.documentElement
        var doc = document.documentElement;
    
        // form input types
        var formInputs = ['input', 'select', 'textarea'];
    
        var functionList = [];
    
        // list of modifier keys commonly used with the mouse and
        // can be safely ignored to prevent false keyboard detection
        var ignoreMap = [16, // shift
        17, // control
        18, // alt
        91, // Windows key / left Apple cmd
        93 // Windows menu / right Apple cmd
        ];
    
        // list of keys for which we change intent even for form inputs
        var changeIntentMap = [9 // tab
        ];
    
        // mapping of events to input types
        var inputMap = {
          keydown: 'keyboard',
          keyup: 'keyboard',
          mousedown: 'mouse',
          mousemove: 'mouse',
          MSPointerDown: 'pointer',
          MSPointerMove: 'pointer',
          pointerdown: 'pointer',
          pointermove: 'pointer',
          touchstart: 'touch'
        };
    
        // array of all used input types
        var inputTypes = [];
    
        // boolean: true if touch buffer is active
        var isBuffering = false;
    
        // boolean: true if the page is being scrolled
        var isScrolling = false;
    
        // store current mouse position
        var mousePos = {
          x: null,
          y: null
        };
    
        // map of IE 10 pointer events
        var pointerMap = {
          2: 'touch',
          3: 'touch', // treat pen like touch
          4: 'mouse'
        };
    
        var supportsPassive = false;
    
        try {
          var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
              supportsPassive = true;
            }
          });
    
          window.addEventListener('test', null, opts);
        } catch (e) {}
    
        /*
         * set up
         */
    
        var setUp = function setUp() {
          // add correct mouse wheel event mapping to `inputMap`
          inputMap[detectWheel()] = 'mouse';
    
          addListeners();
          setInput();
        };
    
        /*
         * events
         */
    
        var addListeners = function addListeners() {
          // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
          // can only demonstrate potential, but not actual, interaction
          // and are treated separately
          var options = supportsPassive ? { passive: true } : false;
    
          // pointer events (mouse, pen, touch)
          if (window.PointerEvent) {
            doc.addEventListener('pointerdown', updateInput);
            doc.addEventListener('pointermove', setIntent);
          } else if (window.MSPointerEvent) {
            doc.addEventListener('MSPointerDown', updateInput);
            doc.addEventListener('MSPointerMove', setIntent);
          } else {
            // mouse events
            doc.addEventListener('mousedown', updateInput);
            doc.addEventListener('mousemove', setIntent);
    
            // touch events
            if ('ontouchstart' in window) {
              doc.addEventListener('touchstart', touchBuffer, options);
              doc.addEventListener('touchend', touchBuffer);
            }
          }
    
          // mouse wheel
          doc.addEventListener(detectWheel(), setIntent, options);
    
          // keyboard events
          doc.addEventListener('keydown', updateInput);
          doc.addEventListener('keyup', updateInput);
        };
    
        // checks conditions before updating new input
        var updateInput = function updateInput(event) {
          // only execute if the touch buffer timer isn't running
          if (!isBuffering) {
            var eventKey = event.which;
            var value = inputMap[event.type];
            if (value === 'pointer') value = pointerType(event);
    
            if (currentInput !== value || currentIntent !== value) {
              var activeElem = document.activeElement;
              var activeInput = false;
              var notFormInput = activeElem && activeElem.nodeName && formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1;
    
              if (notFormInput || changeIntentMap.indexOf(eventKey) !== -1) {
                activeInput = true;
              }
    
              if (value === 'touch' ||
              // ignore mouse modifier keys
              value === 'mouse' ||
              // don't switch if the current element is a form input
              value === 'keyboard' && eventKey && activeInput && ignoreMap.indexOf(eventKey) === -1) {
                // set the current and catch-all variable
                currentInput = currentIntent = value;
    
                setInput();
              }
            }
          }
        };

        // dev needed
    
        // updates the doc and `inputTypes` array with new input
        var setInput = function setInput() {
          doc.setAttribute('data-whatinput', currentInput);
          doc.setAttribute('data-whatintent', currentInput);
    
          if (inputTypes.indexOf(currentInput) === -1) {
            inputTypes.push(currentInput);
            doc.className += ' whatinput-types-' + currentInput;
          }
    
          fireFunctions('input');
        };
    
        // dev needed
        // updates input intent for `mousemove` and `pointermove`
        var setIntent = function setIntent(event) {
          // test to see if `mousemove` happened relative to the screen
          // to detect scrolling versus mousemove
          if (mousePos['x'] !== event.screenX || mousePos['y'] !== event.screenY) {
            isScrolling = false;
    
            mousePos['x'] = event.screenX;
            mousePos['y'] = event.screenY;
          } else {
            isScrolling = true;
          }
    
          // only execute if the touch buffer timer isn't running
          // or scrolling isn't happening
          if (!isBuffering && !isScrolling) {
            var value = inputMap[event.type];
            if (value === 'pointer') value = pointerType(event);
    
            if (currentIntent !== value) {
              currentIntent = value;
    
              doc.setAttribute('data-whatintent', currentIntent);
    
              fireFunctions('intent');
            }
          }
        };
    
        // buffers touch events because they frequently also fire mouse events
        var touchBuffer = function touchBuffer(event) {
          if (event.type === 'touchstart') {
            isBuffering = false;
    
            // set the current input
            updateInput(event);
          } else {
            isBuffering = true;
          }
        };
    
        var fireFunctions = function fireFunctions(type) {
          for (var i = 0, len = functionList.length; i < len; i++) {
            if (functionList[i].type === type) {
              functionList[i].fn.call(undefined, currentIntent);
            }
          }
        };
    
        /*
         * utilities
         */
    
        var pointerType = function pointerType(event) {
          if (typeof event.pointerType === 'number') {
            return pointerMap[event.pointerType];
          } else {
            // treat pen like touch
            return event.pointerType === 'pen' ? 'touch' : event.pointerType;
          }
        };
    
        // detect version of mouse wheel event to use
        // via https://developer.mozilla.org/en-US/docs/Web/Events/wheel
        var detectWheel = function detectWheel() {
          var wheelType = void 0;
    
          // Modern browsers support "wheel"
          if ('onwheel' in document.createElement('div')) {
            wheelType = 'wheel';
          } else {
            // Webkit and IE support at least "mousewheel"
            // or assume that remaining browsers are older Firefox
            wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
          }
    
          return wheelType;
        };
    
        var objPos = function objPos(match) {
          for (var i = 0, len = functionList.length; i < len; i++) {
            if (functionList[i].fn === match) {
              return i;
            }
          }
        };
    
        /*
         * init
         */
    
      
        if ('addEventListener' in window && Array.prototype.indexOf) {
          setUp();
        }
    
        /*
         * api
         */
    
        return {
          // returns string: the current input type
         
          ask: function ask(opt) {
            return opt === 'loose' ? currentIntent : currentInput;
          },
    
          // returns array: all the detected input types
          types: function types() {
            return inputTypes;
          },
    
          // overwrites ignored keys with provided array
          ignoreKeys: function ignoreKeys(arr) {
            ignoreMap = arr;
          },
    
          // attach functions to input and intent "events"
          // funct: function to fire on change
          // eventType: 'input'|'intent'
          registerOnChange: function registerOnChange(fn, eventType) {
            functionList.push({
              fn: fn,
              type: eventType || 'input'
            });
          },
    
          unRegisterOnChange: function unRegisterOnChange(fn) {
            var position = objPos(fn);
    
            if (position) {
              functionList.splice(position, 1);
            }
          }
        };
      }();
    
    /***/ }
    /******/ ])
    });
    ;
    
    /***/ }),
    /* 23 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    /***/ }),
    /* 24 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    /* WEBPACK VAR INJECTION */(function(global, setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
    
    // Disable Swiper if 1 slide
    if ($(".swiper-container .swiper-slide").length == 3) {
        $('.swiper-wrapper').addClass("disabled");
        $('.swiper-pagination').addClass("disabled");
    }
    
    
    // Sticky hamburger menu on tablet and mobile.
    
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(document).scrollTop() > 50) {
    
                $('.header-fixed').addClass('fixed-header');
                $('.black-logo').show();
                $('.white-logo').hide();
                $('.reservation-button').removeClass('white-button');
            } else {
                $('.header-fixed').removeClass('fixed-header');
                $('.black-logo').hide();
                $('.white-logo').show();
                $('.reservation-button').addClass('white-button');
            }
        });
    });
    
    $(document).ready(function () {
        window.scrollTo(0, 0);
    });
    
    $('[data-reveal]').on('open.zf.reveal', function () {
    
        var iframehome = $(this).find("iframe")[0],
            player = $f(iframehome);
    
        player.addEvent('ready', function () {
            player.api("play");
            player.api('setVolume', 1);
        });
    });
    
    $('[data-reveal]').on('closed.zf.reveal', function () {
        console.log('closed');
    
        var iframehome = $(this).find("iframe")[0],
            player = $f(iframehome);
    
        player.addEvent('ready', function () {
            player.api("stop");
            player.api('setVolume', 0);
            player.api("seekTo", 0);
        });
    });
    
    //Function to detect if element is in viewport.
    function isScrolledIntoView(elem) {
        var $window = $(window),
            docViewTop = $window.scrollTop(),
            docViewBottom = docViewTop + $window.height(),
            elemTop = $(elem).offset().top,
            elemBottom = elemTop + $(elem).outerHeight();
        return elemBottom <= docViewBottom && elemTop >= docViewTop;
    }
    
    // For this to work you need to detect if the element exists on the page, if yes, the it will run the isScrolledIntoView if statement.
    $(window).on("scroll", function () {
    
        // Animation - About Page, Timeline slider slide out.
        if ($(".counter")[0]) {
            if (isScrolledIntoView('.counter')) {
    
                $('.counter').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
    
                    $({ countNum: $this.text() }).animate({
                        countNum: countTo
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function step() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function complete() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }
    
                    });
                });
            }
        }
    });
    
    
    
    // Hamburger animation and toggle main menu
    
    $(document).ready(function () {
    
        var buttonclicked;
    
        $('.nav-menu').click(function () {
            if (buttonclicked != true) {
                buttonclicked = true;
                $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
                $('.mobile-navigation').slideToggle();
                $('header').toggleClass('reveal-header');
                $('.reservation-button').toggleClass('show-reservation');
                $('.logo-header').toggleClass('show-reservation');
                $('.nav-menu-container').toggleClass('show-menu');
                $('.white-logo').show();
                $('.show-hamburger-logo').toggleClass('show-logo');
            } else {
                $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
                $('.mobile-navigation').slideToggle();
                $('header').toggleClass('reveal-header');
                $('.reservation-button').toggleClass('show-reservation');
                $('.logo-header').toggleClass('show-reservation');
                $('.nav-menu-container').toggleClass('show-menu');
                $('.white-logo').show();
                $('.show-hamburger-logo').toggleClass('show-logo');
            }
        });
    });
    /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(25).setImmediate))
    
    /***/ }),
    /* 25 */
    /***/ (function(module, exports, __webpack_require__) {
    
    /* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
                (typeof self !== "undefined" && self) ||
                window;
    var apply = Function.prototype.apply;
    
    // DOM APIs, for completeness
    
    exports.setTimeout = function() {
      return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
    };
    exports.setInterval = function() {
      return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
    };
    exports.clearTimeout =
    exports.clearInterval = function(timeout) {
      if (timeout) {
        timeout.close();
      }
    };
    
    function Timeout(id, clearFn) {
      this._id = id;
      this._clearFn = clearFn;
    }
    Timeout.prototype.unref = Timeout.prototype.ref = function() {};
    Timeout.prototype.close = function() {
      this._clearFn.call(scope, this._id);
    };
    
    // Does not start the time, just sets up the members needed.
    exports.enroll = function(item, msecs) {
      clearTimeout(item._idleTimeoutId);
      item._idleTimeout = msecs;
    };
    
    exports.unenroll = function(item) {
      clearTimeout(item._idleTimeoutId);
      item._idleTimeout = -1;
    };
    
    exports._unrefActive = exports.active = function(item) {
      clearTimeout(item._idleTimeoutId);
    
      var msecs = item._idleTimeout;
      if (msecs >= 0) {
        item._idleTimeoutId = setTimeout(function onTimeout() {
          if (item._onTimeout)
            item._onTimeout();
        }, msecs);
      }
    };
    
    // setimmediate attaches itself to the global object
    __webpack_require__(26);
    // On some exotic environments, it's not clear which object `setimmediate` was
    // able to install onto.  Search each possibility in the same order as the
    // `setimmediate` library.
    exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                           (typeof global !== "undefined" && global.setImmediate) ||
                           (this && this.setImmediate);
    exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                             (typeof global !== "undefined" && global.clearImmediate) ||
                             (this && this.clearImmediate);
    
    /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))
    
    /***/ }),
    /* 26 */
    /***/ (function(module, exports, __webpack_require__) {
    
    /* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
        "use strict";
    
        if (global.setImmediate) {
            return;
        }
    
        var nextHandle = 1; // Spec says greater than zero
        var tasksByHandle = {};
        var currentlyRunningATask = false;
        var doc = global.document;
        var registerImmediate;
    
        function setImmediate(callback) {
          // Callback can either be a function or a string
          if (typeof callback !== "function") {
            callback = new Function("" + callback);
          }
          // Copy function arguments
          var args = new Array(arguments.length - 1);
          for (var i = 0; i < args.length; i++) {
              args[i] = arguments[i + 1];
          }
          // Store and register the task
          var task = { callback: callback, args: args };
          tasksByHandle[nextHandle] = task;
          registerImmediate(nextHandle);
          return nextHandle++;
        }
    
        function clearImmediate(handle) {
            delete tasksByHandle[handle];
        }
    
        function run(task) {
            var callback = task.callback;
            var args = task.args;
            switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
            }
        }
    
        function runIfPresent(handle) {
            // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
            // So if we're currently running a task, we'll need to delay this invocation.
            if (currentlyRunningATask) {
                // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                // "too much recursion" error.
                setTimeout(runIfPresent, 0, handle);
            } else {
                var task = tasksByHandle[handle];
                if (task) {
                    currentlyRunningATask = true;
                    try {
                        run(task);
                    } finally {
                        clearImmediate(handle);
                        currentlyRunningATask = false;
                    }
                }
            }
        }
    
        function installNextTickImplementation() {
            registerImmediate = function(handle) {
                process.nextTick(function () { runIfPresent(handle); });
            };
        }
    
        // dev dont fuck the four funcs below. it dims the page. 
        function canUsePostMessage() {
            // The test against `importScripts` prevents this implementation from being installed inside a web worker,
            // where `global.postMessage` means something completely different and can't be used for this purpose.
            if (global.postMessage && !global.importScripts) {
                // var postMessageIsAsynchronous = true;
                // var oldOnMessage = global.onmessage;
                // global.onmessage = function() {
                //     postMessageIsAsynchronous = false;
                // };
                // global.postMessage("", "*");
                // global.onmessage = oldOnMessage;
                // return postMessageIsAsynchronous;
            }
        }
    
        function installPostMessageImplementation() {
            // Installs an event handler on `global` for the `message` event: see
            // * https://developer.mozilla.org/en/DOM/window.postMessage
            // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    
            var messagePrefix = "setImmediate$" + Math.random() + "$";
            var onGlobalMessage = function(event) {
                if (event.source === global &&
                    typeof event.data === "string" &&
                    event.data.indexOf(messagePrefix) === 0) {
                    runIfPresent(+event.data.slice(messagePrefix.length));
                }
            };
    
            if (global.addEventListener) {
                global.addEventListener("message", onGlobalMessage, false);
            } else {
                global.attachEvent("onmessage", onGlobalMessage);
            }
    
            registerImmediate = function(handle) {
                global.postMessage(messagePrefix + handle, "*");
            };
        }
    
        function installMessageChannelImplementation() {
            var channel = new MessageChannel();
            channel.port1.onmessage = function(event) {
                var handle = event.data;
                runIfPresent(handle);
            };
    
            registerImmediate = function(handle) {
                channel.port2.postMessage(handle);
            };
        }
    
        function installReadyStateChangeImplementation() {
            var html = doc.documentElement;
            registerImmediate = function(handle) {
                
                var script = doc.createElement("script");
                script.onreadystatechange = function () {
                    runIfPresent(handle);
                    script.onreadystatechange = null;
                    html.removeChild(script);
                    script = null;
                };
                html.appendChild(script);
            };
        }
    
        function installSetTimeoutImplementation() {
            registerImmediate = function(handle) {
                setTimeout(runIfPresent, 0, handle);
            };
        }
    
        // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
        var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
        attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
    
        // Don't get fooled by e.g. browserify environments.
        if ({}.toString.call(global.process) === "[object process]") {
            // For Node.js before 0.9
            installNextTickImplementation();
    
        } else if (canUsePostMessage()) {
            // For non-IE10 modern browsers
            installPostMessageImplementation();
    
        } else if (global.MessageChannel) {
            // For web workers, where supported
            installMessageChannelImplementation();
    
        } else if (doc && "onreadystatechange" in doc.createElement("script")) {
            // For IE 6–8
            installReadyStateChangeImplementation();
    
        } else {
            // For older browsers
            installSetTimeoutImplementation();
        }
    
        attachTo.setImmediate = setImmediate;
        attachTo.clearImmediate = clearImmediate;
    }(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));
    
    /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(27)))
    
    /***/ }),
    /* 27 */
    /***/ (function(module, exports) {
    
    // shim for using process in browser
    var process = module.exports = {};
    
    
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    
    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};
    
    function noop() {}
    
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;
    
    process.listeners = function (name) { return [] }
    
    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };
    
    process.cwd = function () { return '/' };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function() { return 0; };
    
    
    /***/ }),
    /* 28 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundation = __webpack_require__(29);
    
    var _foundationUtil = __webpack_require__(1);
    
    var _foundationUtil2 = __webpack_require__(7);
    
    var _foundationUtil3 = __webpack_require__(8);
    
    var _foundationUtil4 = __webpack_require__(4);
    
    var _foundationUtil5 = __webpack_require__(3);
    
    var _foundationUtil6 = __webpack_require__(6);
    
    var _foundationUtil7 = __webpack_require__(9);
    
    var _foundationUtil8 = __webpack_require__(12);
    
    var _foundationUtil9 = __webpack_require__(11);
    
    var _foundationUtil10 = __webpack_require__(5);
    
    var _foundation2 = __webpack_require__(30);
    
    var _foundation3 = __webpack_require__(13);
    
    var _foundation4 = __webpack_require__(14);
    
    var _foundation5 = __webpack_require__(15);
    
    var _foundation6 = __webpack_require__(31);
    
    var _foundation7 = __webpack_require__(17);
    
    var _foundation8 = __webpack_require__(32);
    
    var _foundation9 = __webpack_require__(33);
    
    var _foundation10 = __webpack_require__(34);
    
    var _foundation11 = __webpack_require__(35);
    
    var _foundation12 = __webpack_require__(36);
    
    var _foundation13 = __webpack_require__(37);
    
    var _foundation14 = __webpack_require__(38);
    
    var _foundation15 = __webpack_require__(39);
    
    var _foundation16 = __webpack_require__(40);
    
    var _foundation17 = __webpack_require__(18);
    
    var _foundation18 = __webpack_require__(41);
    
    var _foundation19 = __webpack_require__(19);
    
    var _foundation20 = __webpack_require__(42);
    
    var _foundation21 = __webpack_require__(43);
    
    var _foundation22 = __webpack_require__(44);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    _foundation.Foundation.addToJquery(_jquery2.default);
    
    // Add Foundation Utils to Foundation global namespace for backwards
    // compatibility.
    
    _foundation.Foundation.rtl = _foundationUtil.rtl;
    _foundation.Foundation.GetYoDigits = _foundationUtil.GetYoDigits;
    _foundation.Foundation.transitionend = _foundationUtil.transitionend;
    
    _foundation.Foundation.Box = _foundationUtil2.Box;
    _foundation.Foundation.onImagesLoaded = _foundationUtil3.onImagesLoaded;
    _foundation.Foundation.Keyboard = _foundationUtil4.Keyboard;
    _foundation.Foundation.MediaQuery = _foundationUtil5.MediaQuery;
    _foundation.Foundation.Motion = _foundationUtil6.Motion;
    _foundation.Foundation.Move = _foundationUtil6.Move;
    _foundation.Foundation.Nest = _foundationUtil7.Nest;
    _foundation.Foundation.Timer = _foundationUtil8.Timer;
    
    
    _foundationUtil9.Touch.init(_jquery2.default);
    
    // later 
    _foundation.Foundation.plugin(_foundation15.Reveal, 'Reveal');
    
    
    
    exports.default = _foundation.Foundation;
    
    /***/ }),
    /* 29 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Foundation = undefined;
    
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(1);
    
    var _foundationUtil2 = __webpack_require__(3);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var FOUNDATION_VERSION = '6.4.3';
    
    // Global Foundation object
    // This is attached to the window, or used as a module for AMD/Browserify
    var Foundation = {
      version: FOUNDATION_VERSION,
    
      /**
       * Stores initialized plugins.
       */
      _plugins: {},
    
      /**
       * Stores generated unique ids for plugin instances
       */
      _uuids: [],
    
      /**
       * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
       * @param {Object} plugin - The constructor of the plugin.
       */
      plugin: function plugin(_plugin, name) {
        // Object key to use when adding to global Foundation object
        // Examples: Foundation.Reveal, Foundation.OffCanvas
        var className = name || functionName(_plugin);
        // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
        // Examples: data-reveal, data-off-canvas
        var attrName = hyphenate(className);
    
        // Add to the Foundation object and the plugins list (for reflowing)
        this._plugins[attrName] = this[className] = _plugin;
      },
      /**
       * @function
       * Populates the _uuids array with pointers to each individual plugin instance.
       * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
       * Also fires the initialization event for each plugin, consolidating repetitive code.
       * @param {Object} plugin - an instance of a plugin, usually `this` in context.
       * @param {String} name - the name of the plugin, passed as a camelCased string.
       * @fires Plugin#init
       */
      registerPlugin: function registerPlugin(plugin, name) {
        var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
        plugin.uuid = (0, _foundationUtil.GetYoDigits)(6, pluginName);
    
        if (!plugin.$element.attr('data-' + pluginName)) {
          plugin.$element.attr('data-' + pluginName, plugin.uuid);
        }
        if (!plugin.$element.data('zfPlugin')) {
          plugin.$element.data('zfPlugin', plugin);
        }
        /**
         * Fires when the plugin has initialized.
         * @event Plugin#init
         */
        plugin.$element.trigger('init.zf.' + pluginName);
    
        this._uuids.push(plugin.uuid);
    
        return;
      },
      /**
       * @function
       * Removes the plugins uuid from the _uuids array.
       * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
       * Also fires the destroyed event for the plugin, consolidating repetitive code.
       * @param {Object} plugin - an instance of a plugin, usually `this` in context.
       * @fires Plugin#destroyed
       */
      unregisterPlugin: function unregisterPlugin(plugin) {
        var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));
    
        this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
        plugin.$element.removeAttr('data-' + pluginName).removeData('zfPlugin')
        /**
         * Fires when the plugin has been destroyed.
         * @event Plugin#destroyed
         */
        .trigger('destroyed.zf.' + pluginName);
        for (var prop in plugin) {
          plugin[prop] = null; //clean up script to prep for garbage collection.
        }
        return;
      },
    
      /**
       * @function
       * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
       * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
       * @default If no argument is passed, reflow all currently active plugins.
       */
      reInit: function reInit(plugins) {
        var isJQ = plugins instanceof _jquery2.default;
        try {
          if (isJQ) {
            plugins.each(function () {
              (0, _jquery2.default)(this).data('zfPlugin')._init();
            });
          } else {
            var type = typeof plugins === 'undefined' ? 'undefined' : _typeof(plugins),
                _this = this,
                fns = {
              'object': function object(plgs) {
                plgs.forEach(function (p) {
                  p = hyphenate(p);
                  (0, _jquery2.default)('[data-' + p + ']').foundation('_init');
                });
              },
              'string': function string() {
                plugins = hyphenate(plugins);
                (0, _jquery2.default)('[data-' + plugins + ']').foundation('_init');
              },
              'undefined': function undefined() {
                this['object'](Object.keys(_this._plugins));
              }
            };
            fns[type](plugins);
          }
        } catch (err) {
          console.error(err);
        } finally {
          return plugins;
        }
      },
    
      /**
       * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
       * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
       * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
       */
      reflow: function reflow(elem, plugins) {
    
        // If plugins is undefined, just grab everything
        if (typeof plugins === 'undefined') {
          plugins = Object.keys(this._plugins);
        }
        // If plugins is a string, convert it to an array with one item
        else if (typeof plugins === 'string') {
            plugins = [plugins];
          }
    
        var _this = this;
    
        // Iterate through each plugin
        _jquery2.default.each(plugins, function (i, name) {
          // Get the current plugin
          var plugin = _this._plugins[name];
    
          // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
          var $elem = (0, _jquery2.default)(elem).find('[data-' + name + ']').addBack('[data-' + name + ']');
    
          // For each plugin found, initialize it
          $elem.each(function () {
            var $el = (0, _jquery2.default)(this),
                opts = {};
            // Don't double-dip on plugins
            if ($el.data('zfPlugin')) {
              console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
              return;
            }
    
            if ($el.attr('data-options')) {
              var thing = $el.attr('data-options').split(';').forEach(function (e, i) {
                var opt = e.split(':').map(function (el) {
                  return el.trim();
                });
                if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
              });
            }
            try {
              $el.data('zfPlugin', new plugin((0, _jquery2.default)(this), opts));
            } catch (er) {
              console.error(er);
            } finally {
              return;
            }
          });
        });
      },
      getFnName: functionName,
    
      addToJquery: function addToJquery($) {
        // TODO: consider not making this a jQuery function
        // TODO: need way to reflow vs. re-initialize
        /**
         * The Foundation jQuery method.
         * @param {String|Array} method - An action to perform on the current jQuery object.
         */
        var foundation = function foundation(method) {
          var type = typeof method === 'undefined' ? 'undefined' : _typeof(method),
              $noJS = $('.no-js');
    
          if ($noJS.length) {
            $noJS.removeClass('no-js');
          }
    
          if (type === 'undefined') {
            //needs to initialize the Foundation object, or an individual plugin.
            _foundationUtil2.MediaQuery._init();
            Foundation.reflow(this);
          } else if (type === 'string') {
            //an individual method to invoke on a plugin or group of plugins
            var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary
            var plugClass = this.data('zfPlugin'); //determine the class of plugin
    
            if (plugClass !== undefined && plugClass[method] !== undefined) {
              //make sure both the class and method exist
              if (this.length === 1) {
                //if there's only one, call it directly.
                plugClass[method].apply(plugClass, args);
              } else {
                this.each(function (i, el) {
                  //otherwise loop through the jQuery collection and invoke the method on each
                  plugClass[method].apply($(el).data('zfPlugin'), args);
                });
              }
            } else {
              //error for no class or no method
              throw new ReferenceError("We're sorry, '" + method + "' is not an available " + (plugClass ? functionName(plugClass) : 'this element') + '.');
            }
          } else {
            //error for invalid argument type
            throw new TypeError('We\'re sorry, ' + type + ' is not a valid parameter. You must use a string ');
          }
          return this;
        };
        $.fn.foundation = foundation;
        return $;
      }
    };
    
  
    window.Foundation = Foundation;
    
    // Polyfill for requestAnimationFrame
    (function () {
      if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
        return new Date().getTime();
      };
    
      var vendors = ['webkit', 'moz'];
      for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
      }
      if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function (callback) {
          var now = Date.now();
          var nextTime = Math.max(lastTime + 16, now);
          return setTimeout(function () {
            callback(lastTime = nextTime);
          }, nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
      }
      /**
       * Polyfill for performance.now, required by rAF
       */
      if (!window.performance || !window.performance.now) {
        window.performance = {
          start: Date.now(),
          now: function now() {
            return Date.now() - this.start;
          }
        };
      }
    })();
    if (!Function.prototype.bind) {
      Function.prototype.bind = function (oThis) {
        if (typeof this !== 'function') {
          // closest thing possible to the ECMAScript 5
          // internal IsCallable function
          throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }
    
        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function fNOP() {},
            fBound = function fBound() {
          return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
        };
    
        if (this.prototype) {
          // native functions don't have a prototype
          fNOP.prototype = this.prototype;
        }
        fBound.prototype = new fNOP();
    
        return fBound;
      };
    }
    // Polyfill to get the name of a function in IE9
    function functionName(fn) {
      if (Function.prototype.name === undefined) {
        var funcNameRegex = /function\s([^(]{1,})\(/;
        var results = funcNameRegex.exec(fn.toString());
        return results && results.length > 1 ? results[1].trim() : "";
      } else if (fn.prototype === undefined) {
        return fn.constructor.name;
      } else {
        return fn.prototype.constructor.name;
      }
    }
    function parseValue(str) {
      if ('true' === str) return true;else if ('false' === str) return false;else if (!isNaN(str * 1)) return parseFloat(str);
      return str;
    }
    // Convert PascalCase to kebab-case
    // Thank you: http://stackoverflow.com/a/8955580
    function hyphenate(str) {
      return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }
    
    exports.Foundation = Foundation;
    
    /***/ }),
    /* 30 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Abide = undefined;
    
    
    
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundation = __webpack_require__(2);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    
    /***/ }),
    /* 31 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Dropdown = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(4);
    
    var _foundationUtil2 = __webpack_require__(1);
    
    var _foundation = __webpack_require__(16);
    
    var _foundationUtil3 = __webpack_require__(5);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    
    /***/ }),
    /* 32 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Equalizer = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(3);
    
    var _foundationUtil2 = __webpack_require__(8);
    
    var _foundationUtil3 = __webpack_require__(1);
    
    var _foundation = __webpack_require__(2);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    
    /***/ }),
    /* 33 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Interchange = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(3);
    
    var _foundation = __webpack_require__(2);
    
    var _foundationUtil2 = __webpack_require__(1);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    /***/ }),
    /* 34 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(1);
    
    var _foundation = __webpack_require__(2);
    
    var _foundation2 = __webpack_require__(18);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    
    /***/ }),
    /* 35 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.OffCanvas = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(4);
    
    var _foundationUtil2 = __webpack_require__(3);
    
    var _foundationUtil3 = __webpack_require__(1);
    
    var _foundation = __webpack_require__(2);
    
    var _foundationUtil4 = __webpack_require__(5);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    /***/ }),
    /* 36 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Orbit = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(4);
    
    var _foundationUtil2 = __webpack_require__(6);
    
    var _foundationUtil3 = __webpack_require__(12);
    
    var _foundationUtil4 = __webpack_require__(8);
    
    var _foundationUtil5 = __webpack_require__(1);
    
    var _foundation = __webpack_require__(2);
    
    var _foundationUtil6 = __webpack_require__(11);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    
    /***/ }),
    /* 37 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ResponsiveMenu = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(3);
    
    var _foundationUtil2 = __webpack_require__(1);
    
    var _foundation = __webpack_require__(2);
    
    var _foundation2 = __webpack_require__(17);
    
    var _foundation3 = __webpack_require__(15);
    
    var _foundation4 = __webpack_require__(14);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    var MenuPlugins = {
      dropdown: {
        cssClass: 'dropdown',
        plugin: _foundation2.DropdownMenu
      },
      drilldown: {
        cssClass: 'drilldown',
        plugin: _foundation3.Drilldown
      },
      accordion: {
        cssClass: 'accordion-menu',
        plugin: _foundation4.AccordionMenu
      }
    };
    
    // import "foundation.util.triggers.js";
    
    
    /**
     * ResponsiveMenu module.
     * @module foundation.responsiveMenu
     * @requires foundation.util.triggers
     * @requires foundation.util.mediaQuery
     */
    
    var ResponsiveMenu = function (_Plugin) {
      _inherits(ResponsiveMenu, _Plugin);
    
      function ResponsiveMenu() {
        _classCallCheck(this, ResponsiveMenu);
    
        return _possibleConstructorReturn(this, (ResponsiveMenu.__proto__ || Object.getPrototypeOf(ResponsiveMenu)).apply(this, arguments));
      }
    
      _createClass(ResponsiveMenu, [{
        key: '_setup',
    
        /**
         * Creates a new instance of a responsive menu.
         * @class
         * @name ResponsiveMenu
         * @fires ResponsiveMenu#init
         * @param {jQuery} element - jQuery object to make into a dropdown menu.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
          this.$element = (0, _jquery2.default)(element);
          this.rules = this.$element.data('responsive-menu');
          this.currentMq = null;
          this.currentPlugin = null;
          this.className = 'ResponsiveMenu'; // ie9 back compat
    
          this._init();
          this._events();
        }
    
        /**
         * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
         * @function
         * @private
         */
    
      }, {
        key: '_init',
        value: function _init() {
    
          _foundationUtil.MediaQuery._init();
          // The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules
          if (typeof this.rules === 'string') {
            var rulesTree = {};
    
            // Parse rules from "classes" pulled from data attribute
            var rules = this.rules.split(' ');
    
            // Iterate through every rule found
            for (var i = 0; i < rules.length; i++) {
              var rule = rules[i].split('-');
              var ruleSize = rule.length > 1 ? rule[0] : 'small';
              var rulePlugin = rule.length > 1 ? rule[1] : rule[0];
    
              if (MenuPlugins[rulePlugin] !== null) {
                rulesTree[ruleSize] = MenuPlugins[rulePlugin];
              }
            }
    
            this.rules = rulesTree;
          }
    
          if (!_jquery2.default.isEmptyObject(this.rules)) {
            this._checkMediaQueries();
          }
          // Add data-mutate since children may need it.
          this.$element.attr('data-mutate', this.$element.attr('data-mutate') || (0, _foundationUtil2.GetYoDigits)(6, 'responsive-menu'));
        }
    
        /**
         * Initializes events for the Menu.
         * @function
         * @private
         */
    
      }, {
        key: '_events',
        value: function _events() {
          var _this = this;
    
          (0, _jquery2.default)(window).on('changed.zf.mediaquery', function () {
            _this._checkMediaQueries();
          });
          // $(window).on('resize.zf.ResponsiveMenu', function() {
          //   _this._checkMediaQueries();
          // });
        }
    
        /**
         * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
         * @function
         * @private
         */
    
      }, {
        key: '_checkMediaQueries',
        value: function _checkMediaQueries() {
          var matchedMq,
              _this = this;
          // Iterate through each rule and find the last matching rule
          _jquery2.default.each(this.rules, function (key) {
            if (_foundationUtil.MediaQuery.atLeast(key)) {
              matchedMq = key;
            }
          });
    
          // No match? No dice
          if (!matchedMq) return;
    
          // Plugin already initialized? We good
          if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;
    
          // Remove existing plugin-specific CSS classes
          _jquery2.default.each(MenuPlugins, function (key, value) {
            _this.$element.removeClass(value.cssClass);
          });
    
          // Add the CSS class for the new plugin
          this.$element.addClass(this.rules[matchedMq].cssClass);
    
          // Create an instance of the new plugin
          if (this.currentPlugin) this.currentPlugin.destroy();
          this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
        }
    
        /**
         * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
         * @function
         */
    
      }, {
        key: '_destroy',
        value: function _destroy() {
          this.currentPlugin.destroy();
          (0, _jquery2.default)(window).off('.zf.ResponsiveMenu');
        }
      }]);
    
      return ResponsiveMenu;
    }(_foundation.Plugin);
    
    ResponsiveMenu.defaults = {};
    
    exports.ResponsiveMenu = ResponsiveMenu;
    
    /***/ }),
    /* 38 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(3);
    
    var _foundationUtil2 = __webpack_require__(6);
    
    var _foundation = __webpack_require__(2);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    
    /***/ }),
    /* 39 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Reveal = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(4);
    
    var _foundationUtil2 = __webpack_require__(3);
    
    var _foundationUtil3 = __webpack_require__(6);
    
    var _foundation = __webpack_require__(2);
    
    var _foundationUtil4 = __webpack_require__(5);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    // dev check this, make the brightness dark
    /**
     * Reveal module.
     * @module foundation.reveal
     * @requires foundation.util.keyboard
     * @requires foundation.util.triggers
     * @requires foundation.util.mediaQuery
     * @requires foundation.util.motion if using animations
     */
    
    var Reveal = function (_Plugin) {
      _inherits(Reveal, _Plugin);
    
      function Reveal() {
        _classCallCheck(this, Reveal);
    
        return _possibleConstructorReturn(this, (Reveal.__proto__ || Object.getPrototypeOf(Reveal)).apply(this, arguments));
      }
    
      _createClass(Reveal, [{
        key: '_setup',
    
        /**
         * Creates a new instance of Reveal.
         * @class
         * @name Reveal
         * @param {jQuery} element - jQuery object to use for the modal.
         * @param {Object} options - optional parameters.
         */
        value: function _setup(element, options) {
          this.$element = element;
          this.options = _jquery2.default.extend({}, Reveal.defaults, this.$element.data(), options);
          this.className = 'Reveal'; // ie9 back compat
          this._init();
    
          // Triggers init is idempotent, just need to make sure it is initialized
          _foundationUtil4.Triggers.init(_jquery2.default);
    
          _foundationUtil.Keyboard.register('Reveal', {
            'ESCAPE': 'close'
          });
        }
    
        /**
         * Initializes the modal by adding the overlay and close buttons, (if selected).
         * @private
         */
    
      }, {
        key: '_init',
        value: function _init() {
          _foundationUtil2.MediaQuery._init();
          this.id = this.$element.attr('id');
          this.isActive = false;
          this.cached = { mq: _foundationUtil2.MediaQuery.current };
          this.isMobile = mobileSniff();
    
          this.$anchor = (0, _jquery2.default)('[data-open="' + this.id + '"]').length ? (0, _jquery2.default)('[data-open="' + this.id + '"]') : (0, _jquery2.default)('[data-toggle="' + this.id + '"]');
          this.$anchor.attr({
            'aria-controls': this.id,
            'aria-haspopup': true,
            'tabindex': 0
          });
    
          if (this.options.fullScreen || this.$element.hasClass('full')) {
            this.options.fullScreen = true;
            this.options.overlay = false;
          }
          if (this.options.overlay && !this.$overlay) {
            this.$overlay = this._makeOverlay(this.id);
          }
    
          this.$element.attr({
            'role': 'dialog',
            'aria-hidden': true,
            'data-yeti-box': this.id,
            'data-resize': this.id
          });
    
          if (this.$overlay) {
            this.$element.detach().appendTo(this.$overlay);
          } else {
            this.$element.detach().appendTo((0, _jquery2.default)(this.options.appendTo));
            this.$element.addClass('without-overlay');
          }
          this._events();
          if (this.options.deepLink && window.location.hash === '#' + this.id) {
            (0, _jquery2.default)(window).one('load.zf.reveal', this.open.bind(this));
          }
        }
    
        /**
         * Creates an overlay div to display behind the modal.
         * @private
         */
    
      }, {
        key: '_makeOverlay',
        value: function _makeOverlay() {
          var additionalOverlayClasses = '';
    
          if (this.options.additionalOverlayClasses) {
            additionalOverlayClasses = ' ' + this.options.additionalOverlayClasses;
          }
    
          return (0, _jquery2.default)('<div></div>').addClass('reveal-overlay' + additionalOverlayClasses).appendTo(this.options.appendTo);
        }
    
        /**
         * Updates position of modal
         * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
         * @private
         */
    
      }, {
    
    
      }, {
        key: '_handleState',
        value: function _handleState(e) {
      
        }
    
        /**
         * Opens the modal controlled by `this.$anchor`, and closes all others by default.
         * @function
         * @fires Reveal#closeme
         * @fires Reveal#open
         */
    
      }, {
        key: 'open',
        value: function open() {
      
        }
    
        /**
         * Adds extra event handlers for the body and window if necessary.
         * @private
         */
    
      }, {
     
    
      }, {
        key: 'close',
        value: function close() {  
     
        }
    
        /**
         * Toggles the open/closed state of a modal.
         * @function
         */
    
      }, {
     
      }, {
        key: '_destroy',
    
    
        /**
         * Destroys an instance of a modal.
         * @function
         */
        value: function _destroy() {
          // if (this.options.overlay) {
          //   this.$element.appendTo((0, _jquery2.default)(this.options.appendTo)); // move $element outside of $overlay to prevent error unregisterPlugin()
          //   this.$overlay.hide().off().remove();
          // }
          // this.$element.hide().off();
          // this.$anchor.off('.zf');
          // (0, _jquery2.default)(window).off('.zf.reveal:' + this.id);
        }
      }]);
    
      return Reveal;
    }(_foundation.Plugin);
    
    Reveal.defaults = {
    
    };
    
    function iPhoneSniff() {
      return (/iP(ad|hone|od).*OS/.test(window.navigator.userAgent)
      );
    }
    
    function androidSniff() {
      return (/Android/.test(window.navigator.userAgent)
      );
    }
    
    function mobileSniff() {
      return iPhoneSniff() || androidSniff();
    }
    
    // exports.Reveal = Reveal;
    
    /***/ }),
    /* 40 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    // exports.Slider = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(4);
    
    var _foundationUtil2 = __webpack_require__(6);
    
    var _foundationUtil3 = __webpack_require__(1);
    
    var _foundation = __webpack_require__(2);
    
    var _foundationUtil4 = __webpack_require__(11);
    
    var _foundationUtil5 = __webpack_require__(5);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    
    function percent(frac, num) {
      return frac / num;
    }
    function absPosition($handle, dir, clickPos, param) {
      return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);
    }
    function baseLog(base, value) {
      return Math.log(value) / Math.log(base);
    }
    
    // exports.Slider = Slider;
    
    /***/ }),
    /* 41 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(1);
    
    var _foundationUtil2 = __webpack_require__(3);
    
    var _foundation = __webpack_require__(2);
    
    var _foundationUtil3 = __webpack_require__(5);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    
    
    /***/ }),
    /* 42 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Toggler = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(6);
    
    var _foundation = __webpack_require__(2);
    
    var _foundationUtil2 = __webpack_require__(5);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    /***/ }),
    /* 43 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Tooltip = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(1);
    
    var _foundationUtil2 = __webpack_require__(3);
    
    var _foundationUtil3 = __webpack_require__(5);
    
    var _foundation = __webpack_require__(16);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    
    
    /***/ }),
    /* 44 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    // exports.ResponsiveAccordionTabs = undefined;
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _jquery = __webpack_require__(0);
    
    var _jquery2 = _interopRequireDefault(_jquery);
    
    var _foundationUtil = __webpack_require__(3);
    
    var _foundationUtil2 = __webpack_require__(1);
    
    var _foundation = __webpack_require__(2);
    
    var _foundation2 = __webpack_require__(13);
    
    var _foundation3 = __webpack_require__(19);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    // The plugin matches the plugin classes with these plugin instances.
    var MenuPlugins = {
      tabs: {
        cssClass: 'tabs',
        plugin: _foundation3.Tabs
      },
      accordion: {
        cssClass: 'accordion',
        plugin: _foundation2.Accordion
      }
    };
    
    
    /***/ })
    /******/ ]);
    