(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["UserAgant"] = factory();
	else
		root["UserAgant"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/UserAgant.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/UserAgant.ts":
/*!**************************!*\
  !*** ./src/UserAgant.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * UserAgant v0.1.0
 * MIT license
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var UserAgant =
/** @class */
function () {
  function UserAgant() {
    this.ua = window.navigator.userAgent.toLowerCase();
    this.ver = window.navigator.appVersion.toLowerCase();
    console.log(this.ua);
    console.log(this.ver);
  }

  UserAgant.prototype.browser = function () {
    var b = ''; // Edge

    if (this.ua.indexOf('edge') !== -1) {
      b = 'edge';
    } // ieMobile
    else if (this.ua.indexOf('iemobile') !== -1) {
        b = 'iemobile';
      } // ie11
      else if (this.ua.indexOf('trident/7') !== -1) {
          b = 'ie11';
        } // ie
        else if (this.ua.indexOf('msie') !== -1 && this.ua.indexOf('opera') === -1) {
            // ie6
            if (this.ver.indexOf('msie 6.') !== -1) {
              b = 'ie6';
            } // ie7
            else if (this.ver.indexOf('msie 7.') !== -1) {
                b = 'ie7';
              } // ie8
              else if (this.ver.indexOf('msie 8.') !== -1) {
                  b = 'ie8';
                } // ie9
                else if (this.ver.indexOf('msie 9.') !== -1) {
                    b = 'ie9';
                  } // ie10
                  else if (this.ver.indexOf('msie 10.') !== -1) {
                      b = 'ie10';
                    }
          } // Chrome
          else if (this.ua.indexOf('chrome') !== -1 && this.ua.indexOf('edge') === -1) {
              b = 'chrome';
            } // Safari
            else if (this.ua.indexOf('safari') !== -1 && this.ua.indexOf('chrome') === -1) {
                b = 'safari';
              } // Opera
              else if (this.ua.indexOf('opera') !== -1) {
                  b = 'opera';
                } // Firefox
                else if (this.ua.indexOf('firefox') !== -1) {
                    b = 'firefox';
                  } // Unknown
                  else {
                      b = 'unknown_browser';
                    }

    return b;
  };

  UserAgant.prototype.device = function () {
    if (this.ua.indexOf('iphone') !== -1 || this.ua.indexOf('ipod') !== -1) return 'iphone';else if (this.ua.indexOf('ipad') !== -1) return 'ipad';else if (this.ua.indexOf('android') !== -1) return 'android';else if (this.ua.indexOf('windows') !== -1 && this.ua.indexOf('phone') !== -1) return 'windows_phone';else return '';
  };

  UserAgant.prototype.iosVersion = function () {
    var value = 0;

    if (this.isiOS()) {
      // if (/iP(hone|od|ad)/.test(navigator.platform)) {
      var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
      var versions = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || '0', 10)];
      value = versions[0];
    } else {
      value = 0;
    }

    return value;
  };

  UserAgant.prototype.androidVersion = function () {
    var ua = this.ua.toLowerCase();
    var match = ua.match(/android\s([0-9\.]*)/);

    if (match) {
      return parseFloat(match[1]);
    } else {
      return 0;
    }
  };

  UserAgant.prototype.isIE = function () {
    var browser = this.browser();

    if (browser.substr(0, 2) === 'ie' && browser !== 'iemobile') {
      return true;
    } else {
      return false;
    }
  };

  UserAgant.prototype.isiOS = function () {
    var device = this.device();
    return device === 'iphone' || device === 'ipad';
  };

  UserAgant.prototype.isAndroid = function () {
    var ua = this.ua.toLowerCase();

    if (ua.indexOf('android') > -1) {
      return true;
    } else {
      return false;
    }
  };

  UserAgant.prototype.isMobile = function () {
    var device = this.device();
    return this.ua.indexOf('mobi') !== -1 || device === 'iphone' || device === 'windows_phone' && this.ua.indexOf('wpdesktop') === -1 || device === 'iemobile';
  };

  UserAgant.prototype.isTablet = function () {
    var device = this.device();
    var isMobile = this.isMobile();
    return device === 'ipad' || device === 'android' && !isMobile;
  };

  UserAgant.prototype.isTouch = function () {
    return 'ontouchstart' in window;
  };

  UserAgant.prototype.isModern = function () {
    var browser = this.browser();
    var iosVersion = this.iosVersion();
    return !(browser === 'ie6' || browser === 'ie7' || browser === 'ie8' || browser === 'ie9' || 0 < iosVersion && iosVersion < 8);
  };

  UserAgant.prototype.homeClass = function () {
    var browser = this.browser();
    var device = this.device();
    var classStr = '';
    classStr += browser !== '' ? browser + ' ' : 'browser-unknown ', classStr += device !== '' ? device + ' ' : 'device-unknown ', classStr += this.isMobile() ? 'mobile ' : 'desktop ', classStr += this.isTouch() ? 'touch ' : 'mouse ', classStr += this.isiOS() ? 'ios ' : '', classStr += this.isIE() ? 'ie ' : '', classStr += this.isModern() ? 'modern ' : 'old ';
    return classStr;
  };

  UserAgant.prototype.addClass = function () {
    var homeClass = this.homeClass();
    document.addEventListener('DOMContentLoaded', function () {
      if (document.documentElement) document.documentElement.className += homeClass;
    });
  };

  return UserAgant;
}();

exports.default = UserAgant;

/***/ })

/******/ });
});
//# sourceMappingURL=UserAgant.js.map