(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var isString = function isString(val) {
    return typeof val === 'string';
  };

  var isBlob = function isBlob(val) {
    return val instanceof Blob;
  };

  polyfill.call((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' ? window : undefined || {});

  function polyfill() {
    if (!('navigator' in this)) {
      this.navigator = {};
    }

    if (typeof this.navigator.sendBeacon !== 'function') {
      this.navigator.sendBeacon = sendBeacon.bind(this);
    }
  }

  function sendBeacon(url, data) {
    var xhr = 'XMLHttpRequest' in this ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('POST', url, false);
    xhr.withCredentials = true;
    xhr.setRequestHeader('Accept', '*/*');

    if (isString(data)) {
      xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
      xhr.responseType = 'text';
    } else if (isBlob(data) && data.type) {
      xhr.setRequestHeader('Content-Type', data.type);
    }

    try {
      xhr.send(data);
    } catch (error) {
      return false;
    }

    return true;
  }

})));
