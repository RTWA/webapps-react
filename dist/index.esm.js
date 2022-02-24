import _defineProperty from'@babel/runtime/helpers/defineProperty';import _objectWithoutProperties from'@babel/runtime/helpers/objectWithoutProperties';import _asyncToGenerator from'@babel/runtime/helpers/asyncToGenerator';import _regeneratorRuntime from'@babel/runtime/regenerator';import _extends from'@babel/runtime/helpers/extends';import React$1,{useState,useRef,useCallback,useEffect,useMemo,Children,isValidElement,cloneElement,Component,useContext,createRef}from'react';import {NavLink,useLocation,withRouter,Link as Link$1}from'react-router-dom';import _slicedToArray from'@babel/runtime/helpers/slicedToArray';import ReactDOM,{unstable_batchedUpdates,createPortal}from'react-dom';import _toConsumableArray from'@babel/runtime/helpers/toConsumableArray';import _classCallCheck$1 from'@babel/runtime/helpers/classCallCheck';import _createClass$1 from'@babel/runtime/helpers/createClass';import _assertThisInitialized$1 from'@babel/runtime/helpers/assertThisInitialized';import _inherits$1 from'@babel/runtime/helpers/inherits';import _possibleConstructorReturn$1 from'@babel/runtime/helpers/possibleConstructorReturn';import _getPrototypeOf from'@babel/runtime/helpers/getPrototypeOf';import _objectWithoutPropertiesLoose from'@babel/runtime/helpers/esm/objectWithoutPropertiesLoose';import _extends$1 from'@babel/runtime/helpers/esm/extends';import _assertThisInitialized from'@babel/runtime/helpers/esm/assertThisInitialized';import _inheritsLoose from'@babel/runtime/helpers/esm/inheritsLoose';import _typeof from'@babel/runtime/helpers/typeof';import path from'path';import process$1 from'process';import {fileURLToPath}from'url';var getCookie = function getCookie(name) {
  var _document;

  var value = "; ".concat((_document = document) === null || _document === void 0 ? void 0 : _document.cookie);
  var parts = value.split("; ".concat(name, "="));
  if (parts.length === 2) return parts.pop().split(';').shift();
};var _excluded$r = ["headers", "accept", "type"],
    _excluded2$2 = ["headers", "accept", "type"];

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var RE_CONTENT_TYPE_JSON = new RegExp("^application/(x-)?json", "i");
var RE_CONTENT_TYPE_TEXT = new RegExp("^text/", "i"); // Static strings.

var TYPE_JSON = 'application/json';
var UNEXPECTED_ERROR_MESSAGE = "An unexpected error occurred while processing your request.";
var controller = new AbortController();
var client = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(endpoint) {
    var data,
        _ref2,
        customHeaders,
        _ref2$accept,
        accept,
        _ref2$type,
        type,
        customConfig,
        config,
        csrfToken,
        url,
        fetchResponse,
        responseData,
        _args2 = arguments;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : undefined;
            _ref2 = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {}, customHeaders = _ref2.headers, _ref2$accept = _ref2.accept, accept = _ref2$accept === void 0 ? TYPE_JSON : _ref2$accept, _ref2$type = _ref2.type, type = _ref2$type === void 0 ? TYPE_JSON : _ref2$type, customConfig = _objectWithoutProperties(_ref2, _excluded$r);
            _context2.prev = 2;
            config = _objectSpread$9({
              method: data ? 'POST' : 'GET',
              body: data ? JSON.stringify(data) : undefined,
              headers: _objectSpread$9({
                'Accept': accept ? accept : null,
                'Content-Type': data ? type : undefined
              }, customHeaders),
              signal: controller.signal
            }, customConfig);
            csrfToken = getCookie('XSRF-TOKEN');

            if (csrfToken !== undefined) {
              config.headers['X-XSRF-TOKEN'] = csrfToken.replace('%3D', '=');
            }

            url = "".concat(window.location.origin.replace(/\/$/, "")).concat(endpoint);
            _context2.next = 9;
            return fetch(url, config);

          case 9:
            fetchResponse = _context2.sent;
            _context2.next = 12;
            return unwrapResponseData(fetchResponse);

          case 12:
            responseData = _context2.sent;
            return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(resolve, reject) {
                return _regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(fetchResponse.ok && fetchResponse.status >= 200 && fetchResponse.status < 300)) {
                          _context.next = 3;
                          break;
                        }

                        fetchResponse.data = responseData;
                        return _context.abrupt("return", resolve(fetchResponse));

                      case 3:
                        return _context.abrupt("return", reject(normalizeError(responseData, url, config, fetchResponse)));

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2, _x3) {
                return _ref3.apply(this, arguments);
              };
            }()));

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](2);
            return _context2.abrupt("return", Promise.reject(normalizeTransportError(_context2.t0)));

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 16]]);
  }));

  return function client(_x) {
    return _ref.apply(this, arguments);
  };
}();
var unabortableClient = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(endpoint) {
    var data,
        _ref5,
        customHeaders,
        _ref5$accept,
        accept,
        _ref5$type,
        type,
        customConfig,
        config,
        csrfToken,
        url,
        fetchResponse,
        responseData,
        _args4 = arguments;

    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            data = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : undefined;
            _ref5 = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {}, customHeaders = _ref5.headers, _ref5$accept = _ref5.accept, accept = _ref5$accept === void 0 ? TYPE_JSON : _ref5$accept, _ref5$type = _ref5.type, type = _ref5$type === void 0 ? TYPE_JSON : _ref5$type, customConfig = _objectWithoutProperties(_ref5, _excluded2$2);
            _context4.prev = 2;
            config = _objectSpread$9({
              method: data ? 'POST' : 'GET',
              body: data ? JSON.stringify(data) : undefined,
              headers: _objectSpread$9({
                'Accept': accept ? accept : null,
                'Content-Type': data ? type : undefined
              }, customHeaders)
            }, customConfig);
            csrfToken = getCookie('XSRF-TOKEN');

            if (csrfToken !== undefined) {
              config.headers['X-XSRF-TOKEN'] = csrfToken.replace('%3D', '=');
            }

            url = "".concat(window.location.origin.replace(/\/$/, "")).concat(endpoint);
            _context4.next = 9;
            return fetch(url, config);

          case 9:
            fetchResponse = _context4.sent;
            _context4.next = 12;
            return unwrapResponseData(fetchResponse);

          case 12:
            responseData = _context4.sent;
            return _context4.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(resolve, reject) {
                return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!(fetchResponse.ok && fetchResponse.status >= 200 && fetchResponse.status < 300)) {
                          _context3.next = 3;
                          break;
                        }

                        fetchResponse.data = responseData;
                        return _context3.abrupt("return", resolve(fetchResponse));

                      case 3:
                        return _context3.abrupt("return", reject(normalizeError(responseData, url, config, fetchResponse)));

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x5, _x6) {
                return _ref6.apply(this, arguments);
              };
            }()));

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](2);
            return _context4.abrupt("return", Promise.reject(normalizeTransportError(_context4.t0)));

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 16]]);
  }));

  return function unabortableClient(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var normalizeError = function normalizeError(data, url, config, fetchResponse) {
  if (fetchResponse.status === 401 && window.location.pathname !== '/login') {
    new Promise( /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(resolve, reject) {
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return unabortableClient('/api/logout', {});

              case 3:
                localStorage.setItem('WA_Login', window.location.href);
                window.location.replace(window.location.origin + '/login?logout');
                resolve(true);
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", reject(_context5.t0));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }));

      return function (_x7, _x8) {
        return _ref7.apply(this, arguments);
      };
    }());
  }

  var error = {
    data: _objectSpread$9({
      type: "ServerError",
      message: UNEXPECTED_ERROR_MESSAGE
    }, data),
    status: {
      code: fetchResponse.status,
      text: fetchResponse.statusText,
      isAbort: false
    },
    // The following data is being provided for debugging
    requestUrl: url,
    requestConfig: config,
    response: fetchResponse
  };
  return error;
};

var normalizeTransportError = function normalizeTransportError(transportError) {
  return {
    data: {
      type: "TransportError",
      message: UNEXPECTED_ERROR_MESSAGE,
      rootCause: transportError
    },
    status: {
      code: 0,
      text: "Unknown",
      isAbort: transportError.name === "AbortError"
    }
  };
};

var unwrapResponseData = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(response) {
    var contentType;
    return _regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!(response.status === 204)) {
              _context6.next = 2;
              break;
            }

            return _context6.abrupt("return");

          case 2:
            contentType = response.headers.has('Content-Type') ? response.headers.get('Content-Type') : "";

            if (!RE_CONTENT_TYPE_JSON.test(contentType)) {
              _context6.next = 9;
              break;
            }

            _context6.next = 6;
            return response.json();

          case 6:
            return _context6.abrupt("return", _context6.sent);

          case 9:
            if (!RE_CONTENT_TYPE_TEXT.test(contentType)) {
              _context6.next = 15;
              break;
            }

            _context6.next = 12;
            return response.text();

          case 12:
            return _context6.abrupt("return", _context6.sent);

          case 15:
            _context6.next = 17;
            return response.blob();

          case 17:
            return _context6.abrupt("return", _context6.sent);

          case 18:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function unwrapResponseData(_x9) {
    return _ref8.apply(this, arguments);
  };
}();var propTypes = {exports: {}};var reactIs$1 = {exports: {}};var reactIs_production_min$1 = {};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1="function"===typeof Symbol&&Symbol.for,c$1=b$1?Symbol.for("react.element"):60103,d$1=b$1?Symbol.for("react.portal"):60106,e$1=b$1?Symbol.for("react.fragment"):60107,f$1=b$1?Symbol.for("react.strict_mode"):60108,g$1=b$1?Symbol.for("react.profiler"):60114,h$1=b$1?Symbol.for("react.provider"):60109,k$1=b$1?Symbol.for("react.context"):60110,l$1=b$1?Symbol.for("react.async_mode"):60111,m$1=b$1?Symbol.for("react.concurrent_mode"):60111,n$1=b$1?Symbol.for("react.forward_ref"):60112,p$1=b$1?Symbol.for("react.suspense"):60113,q$1=b$1?
Symbol.for("react.suspense_list"):60120,r$1=b$1?Symbol.for("react.memo"):60115,t=b$1?Symbol.for("react.lazy"):60116,v$1=b$1?Symbol.for("react.block"):60121,w$1=b$1?Symbol.for("react.fundamental"):60117,x$1=b$1?Symbol.for("react.responder"):60118,y$1=b$1?Symbol.for("react.scope"):60119;
function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l$1:case m$1:case e$1:case g$1:case f$1:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n$1:case t:case r$1:case h$1:return a;default:return u}}case d$1:return u}}}function A$1(a){return z$1(a)===m$1}reactIs_production_min$1.AsyncMode=l$1;reactIs_production_min$1.ConcurrentMode=m$1;reactIs_production_min$1.ContextConsumer=k$1;reactIs_production_min$1.ContextProvider=h$1;reactIs_production_min$1.Element=c$1;reactIs_production_min$1.ForwardRef=n$1;reactIs_production_min$1.Fragment=e$1;reactIs_production_min$1.Lazy=t;reactIs_production_min$1.Memo=r$1;reactIs_production_min$1.Portal=d$1;
reactIs_production_min$1.Profiler=g$1;reactIs_production_min$1.StrictMode=f$1;reactIs_production_min$1.Suspense=p$1;reactIs_production_min$1.isAsyncMode=function(a){return A$1(a)||z$1(a)===l$1};reactIs_production_min$1.isConcurrentMode=A$1;reactIs_production_min$1.isContextConsumer=function(a){return z$1(a)===k$1};reactIs_production_min$1.isContextProvider=function(a){return z$1(a)===h$1};reactIs_production_min$1.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};reactIs_production_min$1.isForwardRef=function(a){return z$1(a)===n$1};reactIs_production_min$1.isFragment=function(a){return z$1(a)===e$1};reactIs_production_min$1.isLazy=function(a){return z$1(a)===t};
reactIs_production_min$1.isMemo=function(a){return z$1(a)===r$1};reactIs_production_min$1.isPortal=function(a){return z$1(a)===d$1};reactIs_production_min$1.isProfiler=function(a){return z$1(a)===g$1};reactIs_production_min$1.isStrictMode=function(a){return z$1(a)===f$1};reactIs_production_min$1.isSuspense=function(a){return z$1(a)===p$1};
reactIs_production_min$1.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e$1||a===m$1||a===g$1||a===f$1||a===p$1||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r$1||a.$$typeof===h$1||a.$$typeof===k$1||a.$$typeof===n$1||a.$$typeof===w$1||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v$1)};reactIs_production_min$1.typeOf=z$1;var reactIs_development$1 = {};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development$1.AsyncMode = AsyncMode;
reactIs_development$1.ConcurrentMode = ConcurrentMode;
reactIs_development$1.ContextConsumer = ContextConsumer;
reactIs_development$1.ContextProvider = ContextProvider;
reactIs_development$1.Element = Element;
reactIs_development$1.ForwardRef = ForwardRef;
reactIs_development$1.Fragment = Fragment;
reactIs_development$1.Lazy = Lazy;
reactIs_development$1.Memo = Memo;
reactIs_development$1.Portal = Portal;
reactIs_development$1.Profiler = Profiler;
reactIs_development$1.StrictMode = StrictMode;
reactIs_development$1.Suspense = Suspense;
reactIs_development$1.isAsyncMode = isAsyncMode;
reactIs_development$1.isConcurrentMode = isConcurrentMode;
reactIs_development$1.isContextConsumer = isContextConsumer;
reactIs_development$1.isContextProvider = isContextProvider;
reactIs_development$1.isElement = isElement;
reactIs_development$1.isForwardRef = isForwardRef;
reactIs_development$1.isFragment = isFragment;
reactIs_development$1.isLazy = isLazy;
reactIs_development$1.isMemo = isMemo;
reactIs_development$1.isPortal = isPortal;
reactIs_development$1.isProfiler = isProfiler;
reactIs_development$1.isStrictMode = isStrictMode;
reactIs_development$1.isSuspense = isSuspense;
reactIs_development$1.isValidElementType = isValidElementType;
reactIs_development$1.typeOf = typeOf;
  })();
}if (process.env.NODE_ENV === 'production') {
  reactIs$1.exports = reactIs_production_min$1;
} else {
  reactIs$1.exports = reactIs_development$1;
}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$2 = reactIs$1.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var checkPropTypes = checkPropTypes_1;

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$2.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs$1 = reactIs$1.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs$1.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes.exports;var classnames = {exports: {}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

var classNames = classnames.exports;var _excluded$q = ["tag", "className", "innerRef", "color", "pill", "children"];

var Badge = function Badge(props) {
  var tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      pill = props.pill,
      children = props.children,
      attributes = _objectWithoutProperties(props, _excluded$q);

  var classes = classNames(className, 'inline-flex', 'items-center', 'justify-center', 'px-2', 'py-1', 'text-xs', 'font-bold', 'leading-none', "bg-".concat(color), pill ? 'rounded-full' : '');
  var Tag = attributes.to || attributes.href ? NavLink : tag;

  var ref = _defineProperty({}, "".concat(typeof Tag === 'string' ? 'ref' : 'innerRef'), innerRef);

  return /*#__PURE__*/React$1.createElement(Tag, _extends({
    className: classes
  }, attributes, ref), children);
};

Badge.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  color: PropTypes.string,
  pill: PropTypes.bool
};
Badge.defaultProps = {
  tag: 'span'
};var _excluded$p = ["tag", "className", "innerRef", "color", "darkColor", "children"];

var Banner = function Banner(props) {
  var tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      darkColor = props.darkColor,
      children = props.children,
      attributes = _objectWithoutProperties(props, _excluded$p);

  var classes = classNames(className, 'w-full', 'py-2', 'px-8', 'mb-4', "bg-".concat(color), "dark:bg-".concat(darkColor));
  var Tag = attributes.to || attributes.hred ? NavLink : tag;

  var ref = _defineProperty({}, "".concat(typeof Tag === 'string' ? 'ref' : 'innerRef'), innerRef);

  return /*#__PURE__*/React$1.createElement(Tag, _extends({
    className: classes
  }, attributes, ref), children);
};

Banner.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  color: PropTypes.string,
  darkColor: PropTypes.string
};
Banner.defaultProps = {
  tag: 'div',
  color: 'gray-300',
  darkColor: 'gray-700'
};var _excluded$o = ["className", "innerRef", "active", "href", "onClick", "disabled"];

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Link = function Link(props) {
  var className = props.className,
      innerRef = props.innerRef,
      active = props.active,
      href = props.href,
      onClick = props.onClick,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, _excluded$o);

  var to = rest ? rest.to : null;

  var click = function click(e) {
    if (!href && !to || href === '#') {
      e.preventDefault();
    }

    !disabled && onClick && onClick(e);
  };

  var classes = classNames(active, disabled, className);
  return to ? /*#__PURE__*/React$1.createElement(NavLink, _extends({}, rest, {
    className: classes,
    onClick: click,
    ref: innerRef
  })) : /*#__PURE__*/React$1.createElement("a", _extends({
    href: href || '#',
    className: classes,
    rel: rest.target === '_blank' ? 'noopener norefferer' : null
  }, rest, {
    onClick: click,
    ref: innerRef
  }));
};

Link.propTypes = _objectSpread$8(_objectSpread$8({
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  active: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}, NavLink.propTypes), {}, {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
});var AuthContext = /*#__PURE__*/React$1.createContext({});var Loader = function Loader(props) {
  var className = props.className,
      style = props.style,
      color = props.color,
      height = props.height,
      width = props.width,
      alignment = props.alignment;
  var classes = classNames('loader', "text-".concat(color, "-300"), "dark:text-".concat(color, "-500"), "h-".concat(height), "w-".concat(width), alignment === 'left' ? 'mr-auto' : '', alignment === 'center' ? 'mx-auto' : '', alignment === 'right' ? 'ml-auto' : '', className);
  var circleClasses = classNames('animate-spin', 'inline', 'text-gray-200', 'dark:text-gray-600', "fill-".concat(color, "-600"), "h-".concat(height), "w-".concat(width), className);

  if (style === 'circle') {
    return /*#__PURE__*/React$1.createElement("div", {
      className: "text-".concat(alignment)
    }, /*#__PURE__*/React$1.createElement("svg", {
      role: "status",
      "class": circleClasses,
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React$1.createElement("path", {
      d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
      fill: "currentColor"
    }), /*#__PURE__*/React$1.createElement("path", {
      d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
      fill: "currentFill"
    })), /*#__PURE__*/React$1.createElement("div", {
      className: "sr-only"
    }, "Loading"));
  }

  return /*#__PURE__*/React$1.createElement("div", {
    className: classes
  }, /*#__PURE__*/React$1.createElement("svg", {
    viewBox: "0 0 45 45",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor"
  }, /*#__PURE__*/React$1.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1 1)",
    strokeWidth: 2
  }, /*#__PURE__*/React$1.createElement("circle", {
    cx: 22,
    cy: 22,
    r: 6,
    strokeOpacity: 0
  }, /*#__PURE__*/React$1.createElement("animate", {
    attributeName: "r",
    begin: "1.5s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React$1.createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "1.5s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React$1.createElement("animate", {
    attributeName: "stroke-width",
    begin: "1.5s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React$1.createElement("circle", {
    cx: 22,
    cy: 22,
    r: 6,
    strokeOpacity: 0
  }, /*#__PURE__*/React$1.createElement("animate", {
    attributeName: "r",
    begin: "3s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React$1.createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "3s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React$1.createElement("animate", {
    attributeName: "stroke-width",
    begin: "3s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React$1.createElement("circle", {
    cx: 22,
    cy: 22,
    r: 8
  }, /*#__PURE__*/React$1.createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.5s",
    values: "6;1;2;3;4;5;6",
    calcMode: "linear",
    repeatCount: "indefinite"
  })))), /*#__PURE__*/React$1.createElement("div", {
    className: "sr-only"
  }, "Loading"));
};

Loader.propsTypes = {
  style: PropTypes.oneOf(['', 'circle']),
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  alignment: PropTypes.oneOf(['left', 'center', 'right'])
};
Loader.defaultProps = {
  style: '',
  color: 'gray',
  height: '24',
  width: '24',
  alignment: 'center'
};var Auth = function Auth(props) {
  var _useState = useState({
    user: null,
    authenticated: null,
    preferences: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var isMountedRef = useRef(true);
  var isMounted = useCallback(function () {
    return isMountedRef.current;
  }, []);
  useEffect(function () {
    if (props.checkOnInit) {
      checkAuthentication();
    }

    return function () {
      void (isMountedRef.current = false);
      controller.abort();
    };
  }, []);

  var signIn = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(username, password) {
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(resolve, reject) {
                  var _yield$client, data, preferences;

                  return _regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return client('/sanctum/csrf_cookie', undefined, {
                            accept: 'text/html'
                          });

                        case 3:
                          _context.next = 5;
                          return client('/login', {
                            username: username,
                            password: password
                          });

                        case 5:
                          _context.next = 7;
                          return client('/api/user');

                        case 7:
                          _yield$client = _context.sent;
                          data = _yield$client.data;
                          preferences = data.preferences ? data.preferences : {};
                          delete data.preferences;

                          if (!isMounted) {
                            _context.next = 14;
                            break;
                          }

                          setState({
                            user: data,
                            authenticated: true,
                            preferences: preferences
                          });
                          return _context.abrupt("return", resolve(data));

                        case 14:
                          _context.next = 20;
                          break;

                        case 16:
                          _context.prev = 16;
                          _context.t0 = _context["catch"](0);

                          if (!isMounted) {
                            _context.next = 20;
                            break;
                          }

                          return _context.abrupt("return", reject(_context.t0));

                        case 20:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[0, 16]]);
                }));

                return function (_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function signIn(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var signOut = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
      return _regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              new Promise( /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(resolve, reject) {
                  return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.prev = 0;
                          _context3.next = 3;
                          return unabortableClient('/api/logout', {});

                        case 3:
                          if (isMounted) {
                            setState({
                              user: null,
                              authenticated: false
                            });
                            window.location.replace("//" + window.location.hostname + '/login?logout');
                            resolve(true);
                          }

                          _context3.next = 10;
                          break;

                        case 6:
                          _context3.prev = 6;
                          _context3.t0 = _context3["catch"](0);

                          if (!isMounted) {
                            _context3.next = 10;
                            break;
                          }

                          return _context3.abrupt("return", reject(_context3.t0));

                        case 10:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, null, [[0, 6]]);
                }));

                return function (_x5, _x6) {
                  return _ref4.apply(this, arguments);
                };
              }());

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function signOut() {
      return _ref3.apply(this, arguments);
    };
  }();

  var setUser = function setUser(user, authenticated) {
    if (isMounted) {
      setState({
        user: user,
        authenticated: authenticated
      });
    }
  };

  var checkAuthentication = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
      return _regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(resolve, reject) {
                  var _yield$client2, data, preferences;

                  return _regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          if (!(state.authenticated === null)) {
                            _context5.next = 25;
                            break;
                          }

                          _context5.prev = 1;
                          _context5.next = 4;
                          return client('/api/user');

                        case 4:
                          _yield$client2 = _context5.sent;
                          data = _yield$client2.data;
                          preferences = data.preferences ? data.preferences : {};
                          delete data.preferences;

                          if (!isMounted) {
                            _context5.next = 11;
                            break;
                          }

                          setState({
                            user: data,
                            authenticated: true,
                            preferences: preferences
                          });
                          return _context5.abrupt("return", resolve(true));

                        case 11:
                          _context5.next = 23;
                          break;

                        case 13:
                          _context5.prev = 13;
                          _context5.t0 = _context5["catch"](1);

                          if (!(_context5.t0.response && _context5.t0.status.code === 401)) {
                            _context5.next = 21;
                            break;
                          }

                          if (!isMounted) {
                            _context5.next = 19;
                            break;
                          }

                          setState({
                            user: null,
                            authenticated: false,
                            preferences: {}
                          });
                          return _context5.abrupt("return", resolve(false));

                        case 19:
                          _context5.next = 23;
                          break;

                        case 21:
                          if (!isMounted) {
                            _context5.next = 23;
                            break;
                          }

                          return _context5.abrupt("return", reject(_context5.t0));

                        case 23:
                          _context5.next = 27;
                          break;

                        case 25:
                          if (!isMounted) {
                            _context5.next = 27;
                            break;
                          }

                          return _context5.abrupt("return", resolve(state.authenticated));

                        case 27:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, null, [[1, 13]]);
                }));

                return function (_x7, _x8) {
                  return _ref6.apply(this, arguments);
                };
              }()));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function checkAuthentication() {
      return _ref5.apply(this, arguments);
    };
  }();

  var checkPermission = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(permission) {
      return _regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(resolve, reject) {
                  return _regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return client('/api/permission/check', {
                            'permission': permission
                          }).then(function (json) {
                            if (isMounted) {
                              return resolve(json.data.has_permission);
                            }
                          })["catch"](function (error) {
                            if (isMounted) {
                              return reject(error);
                            }
                          });

                        case 2:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function (_x10, _x11) {
                  return _ref8.apply(this, arguments);
                };
              }()));

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function checkPermission(_x9) {
      return _ref7.apply(this, arguments);
    };
  }();

  var checkGroup = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee10(group) {
      return _regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9(resolve, reject) {
                  return _regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return client('/api/group/check', {
                            'group': group
                          }).then(function (data) {
                            if (isMounted) {
                              return resolve(data.in_group);
                            }
                          })["catch"](function (error) {
                            if (isMounted) {
                              return reject(error);
                            }
                          });

                        case 2:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }));

                return function (_x13, _x14) {
                  return _ref10.apply(this, arguments);
                };
              }()));

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function checkGroup(_x12) {
      return _ref9.apply(this, arguments);
    };
  }();

  var setPreference = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee11(preference, value) {
      var preferences;
      return _regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              preferences = state.preferences;
              preferences[preference] = value;
              setState({
                preferences: preferences
              });
              _context11.next = 5;
              return client('/api/user/preference', {
                'preference': preference,
                'value': value
              }, {
                method: 'PUT'
              })["catch"](function (error) {
                var _error$status;

                if (!((_error$status = error.status) !== null && _error$status !== void 0 && _error$status.isAbort) && isMounted) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 5:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function setPreference(_x15, _x16) {
      return _ref11.apply(this, arguments);
    };
  }();

  if (state.authenticated !== null) {
    return /*#__PURE__*/React$1.createElement(AuthContext.Provider, {
      children: props.children || null,
      value: {
        user: state.user,
        authenticated: state.authenticated,
        signIn: signIn,
        signOut: signOut,
        setUser: setUser,
        checkAuthentication: checkAuthentication,
        checkPermission: checkPermission,
        checkGroup: checkGroup,
        preferences: state.preferences,
        setPreference: setPreference
      }
    });
  } else {
    return /*#__PURE__*/React$1.createElement(Loader, null);
  }
};

Auth.propTypes = {
  config: PropTypes.object,
  checkOnInit: PropTypes.bool
};
Auth.defaultProps = {
  checkOnInit: true
};var isProduction = process.env.NODE_ENV === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? prefix + ": " + provided : prefix;
    throw new Error(value);
}var withAuth = function withAuth(Component) {
  var displayName = "withAuth(".concat(Component.displayName || Component.name, ")");

  var C = function C(props) {
    return /*#__PURE__*/React$1.createElement(AuthContext.Consumer, null, function (context) {
      invariant(context, "You should not use <".concat(displayName, " /> outside a <Auth>"));
      return /*#__PURE__*/React$1.createElement(Component, _extends({}, props, context));
    });
  };

  C.displayName = displayName;
  return C;
};/**
 * Abstraction for localStorage that uses an in-memory fallback when localStorage throws an error.
 * Reasons for throwing an error:
 * - maximum quota is exceeded
 * - under Mobile Safari (since iOS 5) when the user enters private mode `localStorage.setItem()`
 *   will throw
 * - trying to access localStorage object when cookies are disabled in Safari throws
 *   "SecurityError: The operation is insecure."
 */
const data = {};
var storage = {
    get(key, defaultValue) {
        var _a;
        try {
            return (_a = data[key]) !== null && _a !== void 0 ? _a : parseJSON(localStorage.getItem(key));
        }
        catch (_b) {
            return defaultValue;
        }
    },
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            data[key] = undefined;
            return true;
        }
        catch (_a) {
            data[key] = value;
            return false;
        }
    },
    remove(key) {
        data[key] = undefined;
        localStorage.removeItem(key);
    },
};
/**
 * A wrapper for `JSON.parse()` which supports the return value of `JSON.stringify(undefined)`
 * which returns the string `"undefined"` and this method returns the value `undefined`.
 */
function parseJSON(value) {
    return value === 'undefined'
        ? undefined
        : // JSON.parse() doesn't accept non-string values, this is why we pass empty
            // string which will throw an error which can be handled
            JSON.parse(value !== null && value !== void 0 ? value : '');
}function useLocalStorageStateBase(key, defaultValue) {
    const defaultValueForKey = useMemo(() => {
        const isCallable = (value) => typeof value === 'function';
        return isCallable(defaultValue) ? defaultValue() : defaultValue;
        // disabling "exhaustive-deps" because we don't want to change the default state when the
        // `defaultValue` is changed
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);
    const defaultState = useMemo(() => {
        return {
            value: storage.get(key, defaultValueForKey),
            isPersistent: (() => {
                /**
                 * We want to return `true` on the server. If you render a message based on
                 * `isPersistent` and the server returns `false` then the message will flicker until
                 * hydration is done:
                 * `{!isPersistent && <span>You changes aren't being persisted.</span>}`
                 */
                if (typeof window === 'undefined') {
                    return true;
                }
                try {
                    // - ulss = use-local-storage-state
                    // - using shorthand to make library smaller in size
                    localStorage.setItem('__ulss', '#');
                    localStorage.removeItem('__ulss');
                    return true;
                }
                catch (_a) {
                    return false;
                }
            })(),
        };
    }, [key, defaultValueForKey]);
    const [{ value, isPersistent }, setState] = useState(defaultState);
    const updateValue = useMemo(() => {
        return (newValue) => {
            const isCallable = (value) => typeof value === 'function';
            if (isCallable(newValue)) {
                setState((state) => ({
                    value: newValue(state.value),
                    isPersistent: storage.set(key, newValue(state.value)),
                }));
            }
            else {
                setState({
                    value: newValue,
                    isPersistent: storage.set(key, newValue),
                });
            }
        };
    }, [key]);
    // syncs changes across tabs and iframe's
    useEffect(() => {
        const onStorage = (e) => {
            if (e.storageArea === localStorage && e.key === key) {
                setState({
                    value: storage.get(key, defaultValueForKey),
                    isPersistent: true,
                });
            }
        };
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    }, [key, defaultValueForKey]);
    const isFirstRender = useRef(true);
    useEffect(() => {
        // https://github.com/astoilkov/use-local-storage-state/issues/30
        if (isFirstRender.current && defaultState.value === undefined) {
            return;
        }
        // set the `defaultValue` in the localStorage on initial render:
        // https://github.com/astoilkov/use-local-storage-state/issues/26
        storage.set(key, defaultState.value);
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        // update the state when the `key` property changes (not on first render because this will
        // cause a second unnecessary render)
        setState(defaultState);
    }, [key, defaultState]);
    return useMemo(() => [
        value,
        updateValue,
        {
            isPersistent: isPersistent,
            removeItem() {
                storage.remove(key);
                setState((state) => ({
                    value: defaultValueForKey,
                    isPersistent: state.isPersistent,
                }));
            },
        },
    ], [value, updateValue, isPersistent, key, defaultValueForKey]);
}function createLocalStorageStateHook(key, defaultValue) {
    const setValueFunctions = [];
    const removeItemFunctions = [];
    return function useLocalStorageStateHook() {
        const [value, setValue, { isPersistent, removeItem }] = useLocalStorageStateBase(key, defaultValue);
        const setValueAll = useCallback((newValue) => {
            unstable_batchedUpdates(() => {
                for (const setValueFunction of setValueFunctions) {
                    setValueFunction(newValue);
                }
            });
        }, []);
        useEffect(() => {
            setValueFunctions.push(setValue);
            removeItemFunctions.push(removeItem);
            return () => {
                setValueFunctions.splice(setValueFunctions.indexOf(setValue), 1);
                removeItemFunctions.splice(removeItemFunctions.indexOf(removeItem), 1);
            };
        }, [setValue, removeItem]);
        return useMemo(() => [
            value,
            setValueAll,
            {
                isPersistent,
                removeItem() {
                    for (const removeItemFunction of removeItemFunctions) {
                        removeItemFunction();
                    }
                },
            },
        ], [value, setValueAll, isPersistent]);
    };
}var _excluded$n = ["hasToasts", "placement", "className"];
var placements = {
  'top-left': ['top-0', 'left-0'],
  'top-center': ['top-0', 'left-1/2', 'transform', '-translate-x-1/2'],
  'top-right': ['top-0', 'right-0'],
  'bottom-left': ['bottom-0', 'left-0'],
  'bottom-center': ['bottom-0', 'left-1/2', 'transform', '-translate-x-1/2'],
  'bottom-right': ['bottom-0', 'right-0']
};

var classes = function classes(placement, hasToasts, className) {
  return classNames('box-border', 'max-w-full', 'max-h-screen', 'overflow-hidden', 'fixed', 'p-2', placements[placement], hasToasts ? null : 'pointer-events-none', className);
};

var ToastContainer = function ToastContainer(_ref) {
  var hasToasts = _ref.hasToasts,
      placement = _ref.placement,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$n);

  return /*#__PURE__*/React$1.createElement("div", _extends({
    className: classes(placement, hasToasts, className),
    style: {
      zIndex: 1000
    }
  }, props));
};var SuccessIcon = function SuccessIcon() {
  return /*#__PURE__*/React$1.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 mt-0.5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
};
var InfoIcon = function InfoIcon() {
  return /*#__PURE__*/React$1.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 mt-0.5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
};
var WarnIcon = function WarnIcon() {
  return /*#__PURE__*/React$1.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 mt-0.5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
};
var ErrorIcon = function ErrorIcon() {
  return /*#__PURE__*/React$1.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 mt-0.5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
};
var MiscIcon = function MiscIcon() {
  return /*#__PURE__*/React$1.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 mt-0.5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
  }));
};
var CloseIcon = function CloseIcon() {
  return /*#__PURE__*/React$1.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 mt-0.5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  }));
};var NOOP = function NOOP() {};
function generateUEID() {
  var first = Math.random() * 46656 | 0;
  var second = Math.random() * 46656 | 0;
  first = ('000' + first.toString(36)).slice(-3);
  second = ('000' + second.toString(36)).slice(-3);
  return first + second;
}var appearances = {
  success: {
    icon: SuccessIcon,
    iconColor: 'text-green-500'
  },
  error: {
    icon: ErrorIcon,
    iconColor: 'text-red-500'
  },
  danger: {
    icon: ErrorIcon,
    iconColor: 'text-white dark:text-gray-900',
    background: 'bg-red-500',
    border: 'border-red-500',
    title: 'text-white dark:text-gray-900',
    content: 'text-gray-200 dark:text-gray-800'
  },
  warning: {
    icon: WarnIcon,
    iconColor: 'text-orange-500'
  },
  info: {
    icon: InfoIcon,
    iconColor: 'text-blue-500'
  },
  misc: {
    icon: MiscIcon,
    iconColor: 'text-gray-500 dark:text-white'
  }
};var _excluded$m = ["autoDismissTimeout", "opacity", "isRunning"],
    _excluded2$1 = ["appearance", "placement", "transitionDuration", "transitionState"],
    _excluded3 = ["appearance", "autoDismiss", "autoDismissTimeout", "title", "content", "isRunning", "onDismiss", "placement", "transitionDuration", "transitionState", "onMouseEnter", "onMouseLeave", "action", "actionLabel", "secondaryAction", "secondaryActionLabel", "UI", "color"];

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var gutter = 8; // NOTE: invoke animation when NOT `autoDismiss` with opacity of 0 to avoid a
// paint bug in FireFox.
// https://bugzilla.mozilla.org/show_bug.cgi?id=625289

var Countdown = function Countdown(_ref) {
  _ref.autoDismissTimeout;
      var opacity = _ref.opacity,
      isRunning = _ref.isRunning,
      props = _objectWithoutProperties(_ref, _excluded$m);

  return /*#__PURE__*/React$1.createElement("div", _extends({
    className: "toast-countdown",
    style: {
      // animation: `${shrinkKeyframes} ${autoDismissTimeout}ms linear`,
      animationPlayState: isRunning ? 'running' : 'paused',
      backgroundColor: 'rgba(0,0,0,0.1)',
      bottom: 0,
      height: 0,
      left: 0,
      opacity: opacity,
      position: 'absolute',
      width: '100%'
    }
  }, props));
};

function getTranslate(placement) {
  var pos = placement.split('-');
  var relevantPlacement = pos[1] === 'center' ? pos[0] : pos[1];
  var translateMap = {
    right: 'translate3d(120%, 0, 0)',
    left: 'translate3d(-120%, 0, 0)',
    bottom: 'translate3d(0, 120%, 0)',
    top: 'translate3d(0, -120%, 0)'
  };
  return translateMap[relevantPlacement];
}

var toastStates = function toastStates(placement) {
  return {
    entering: {
      transform: getTranslate(placement)
    },
    entered: {
      transform: 'translate3d(0,0,0)'
    },
    exiting: {
      transform: 'scale(0.66)',
      opacity: 0
    },
    exited: {
      transform: 'scale(0.66)',
      opacity: 0
    }
  };
};

var ToastElement = function ToastElement(_ref2) {
  var _appearances$appearan, _appearances$appearan2;

  var appearance = _ref2.appearance,
      placement = _ref2.placement,
      transitionDuration = _ref2.transitionDuration,
      transitionState = _ref2.transitionState,
      props = _objectWithoutProperties(_ref2, _excluded2$1);

  var _useState = useState('auto'),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var elementRef = useRef(null);
  useEffect(function () {
    if (transitionState === 'entered') {
      var el = elementRef.current;
      setHeight(el.offsetHeight + gutter);
    }

    if (transitionState === 'exiting') {
      setHeight(0);
    }
  }, [transitionState]);
  return /*#__PURE__*/React$1.createElement("div", {
    ref: elementRef,
    style: {
      height: height,
      transition: "height ".concat(transitionDuration - 100, "ms 100ms")
    }
  }, /*#__PURE__*/React$1.createElement("div", _extends({
    className: "".concat((_appearances$appearan = appearances[appearance]) !== null && _appearances$appearan !== void 0 && _appearances$appearan.background ? appearances[appearance].background : 'bg-white dark:bg-gray-600', "\n                    ").concat((_appearances$appearan2 = appearances[appearance]) !== null && _appearances$appearan2 !== void 0 && _appearances$appearan2.border ? appearances[appearance].border : 'border-gray-200 dark:border-gray-600', "\n                    border overflow-hidden shadow-lg rounded-lg mx-auto mb-2 flex flex-row w-96"),
    style: _objectSpread$7({
      transition: "transform ".concat(transitionDuration, "ms cubic-bezier(0.2, 0, 0, 1), opacity ").concat(transitionDuration, "ms")
    }, toastStates(placement)[transitionState])
  }, props)));
};

var DefaultToast = function DefaultToast(_ref3) {
  var _ref3$appearance = _ref3.appearance,
      appearance = _ref3$appearance === void 0 ? 'misc' : _ref3$appearance,
      autoDismiss = _ref3.autoDismiss,
      autoDismissTimeout = _ref3.autoDismissTimeout,
      title = _ref3.title,
      content = _ref3.content,
      isRunning = _ref3.isRunning,
      onDismiss = _ref3.onDismiss,
      placement = _ref3.placement,
      transitionDuration = _ref3.transitionDuration,
      transitionState = _ref3.transitionState,
      onMouseEnter = _ref3.onMouseEnter,
      onMouseLeave = _ref3.onMouseLeave,
      action = _ref3.action,
      actionLabel = _ref3.actionLabel,
      secondaryAction = _ref3.secondaryAction,
      secondaryActionLabel = _ref3.secondaryActionLabel,
      UI = _ref3.UI,
      color = _ref3.color,
      otherProps = _objectWithoutProperties(_ref3, _excluded3);

  var style = appearances[appearance];
  return /*#__PURE__*/React$1.createElement(ToastElement, _extends({
    appearance: appearance,
    placement: placement,
    transitionState: transitionState,
    transitionDuration: transitionDuration,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, otherProps), appearance !== 'plain' ? /*#__PURE__*/React$1.createElement("div", {
    className: "flex ".concat(content !== '' ? 'pt-2' : 'pt-4', " pl-3 ").concat(style.iconColor)
  }, /*#__PURE__*/React$1.createElement(Countdown, {
    opacity: autoDismiss ? 1 : 0,
    autoDismissTimeout: autoDismissTimeout,
    isRunning: isRunning
  }), /*#__PURE__*/React$1.createElement(style.icon, null)) : null, /*#__PURE__*/React$1.createElement("div", {
    className: "flex-grow ".concat(content !== '' ? 'p-2' : 'p-4 pl-2', " ").concat(appearance === 'plain' ? 'pl-4' : '')
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "font-medium ".concat(style !== null && style !== void 0 && style.title ? style.title : 'dark:text-white')
  }, title), content !== '' ? /*#__PURE__*/React$1.createElement("div", {
    className: "text-sm tracking-tight ".concat(style !== null && style !== void 0 && style.content ? style.content : 'text-gray-600 dark:text-gray-300')
  }, content) : null, action && secondaryAction ? /*#__PURE__*/React$1.createElement("div", {
    className: "flex flex-row gap-x-6 pt-2"
  }, /*#__PURE__*/React$1.createElement("button", {
    role: "button",
    className: "text-".concat(color ? color : UI.theme, "-600 dark:text-").concat(color ? color : UI.theme, "-500 hover:text-").concat(color ? color : UI.theme, "-500 dark:hover:text-").concat(color ? color : UI.theme, "-600 font-bold"),
    onClick: action
  }, actionLabel), /*#__PURE__*/React$1.createElement("button", {
    role: "button",
    className: "text-gray-500 dark:text-white hover:font-medium",
    onClick: secondaryAction === 'dismiss' ? onDismiss : secondaryAction
  }, secondaryActionLabel)) : null), action && !secondaryAction ? /*#__PURE__*/React$1.createElement("div", {
    className: "flex items-center text-".concat(color ? color : UI.theme, "-600 dark:text-").concat(color ? color : UI.theme, "-500 hover:text-").concat(color ? color : UI.theme, "-500 dark:hover:text-").concat(color ? color : UI.theme, "-600 px-4")
  }, /*#__PURE__*/React$1.createElement("button", {
    role: "button",
    className: "font-bold",
    onClick: action
  }, actionLabel)) : null, onDismiss && secondaryAction !== 'dismiss' ? /*#__PURE__*/React$1.createElement("div", {
    role: "button",
    className: "text-gray-800 dark:text-gray-200 cursor-pointer flex-shrink-0 pr-3 opacity-50 hover:opacity-100 transition-opacity ".concat(content !== '' ? 'pt-2' : 'pt-4'),
    onClick: onDismiss
  }, /*#__PURE__*/React$1.createElement(CloseIcon, null), /*#__PURE__*/React$1.createElement("span", {
    className: "sr-only"
  }, "Close")) : null);
};
DefaultToast.defaultProps = {
  onDismiss: NOOP
};var config = {
  disabled: false
};var timeoutsShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;var TransitionGroupContext = React$1.createContext(null);var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React$1.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React$1.cloneElement(React$1.Children.only(children), childProps))
    );
  };

  return Transition;
}(React$1.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === 'undefined' ? PropTypes.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return PropTypes.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition$1 = Transition;/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!isValidElement(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends$1({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/React$1.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/React$1.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React$1.createElement(Component, props, children));
  };

  return TransitionGroup;
}(React$1.Component);

TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: PropTypes.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: PropTypes.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: PropTypes.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: PropTypes.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: PropTypes.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: PropTypes.func
} : {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup$1 = TransitionGroup;var _excluded$l = ["autoDismiss", "autoDismissTimeout", "component"];

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Timer(callback, delay) {
  var timerId;
  var start = delay;
  var remaining = delay;

  this.clear = function () {
    clearTimeout(timerId);
  };

  this.pause = function () {
    clearTimeout(timerId);
    remaining -= Date.now() - start;
  };

  this.resume = function () {
    start = Date.now();
    clearTimeout(timerId);
    timerId = setTimeout(callback, remaining);
  };

  this.resume();
}

var ToastController = /*#__PURE__*/function (_Component) {
  _inherits$1(ToastController, _Component);

  var _super = _createSuper$3(ToastController);

  function ToastController() {
    var _this;

    _classCallCheck$1(this, ToastController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized$1(_this), "state", {
      isRunning: Boolean(_this.props.autoDismiss)
    });

    _defineProperty(_assertThisInitialized$1(_this), "startTimer", function () {
      var _this$props = _this.props,
          autoDismiss = _this$props.autoDismiss,
          autoDismissTimeout = _this$props.autoDismissTimeout,
          onDismiss = _this$props.onDismiss;
      if (!autoDismiss) return;

      _this.setState({
        isRunning: true
      });

      _this.timeout = new Timer(onDismiss, autoDismissTimeout);
    });

    _defineProperty(_assertThisInitialized$1(_this), "clearTimer", function () {
      if (_this.timeout) _this.timeout.clear();
    });

    _defineProperty(_assertThisInitialized$1(_this), "onMouseEnter", function () {
      _this.setState({
        isRunning: false
      }, function () {
        if (_this.timeout) _this.timeout.pause();
      });
    });

    _defineProperty(_assertThisInitialized$1(_this), "onMouseLeave", function () {
      _this.setState({
        isRunning: true
      }, function () {
        if (_this.timeout) _this.timeout.resume();
      });
    });

    return _this;
  }

  _createClass$1(ToastController, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.autoDismiss !== this.props.autoDismiss) {
        var startOrClear = this.props.autoDismiss ? this.startTimer : this.clearTimer;
        startOrClear();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          autoDismiss = _this$props2.autoDismiss,
          autoDismissTimeout = _this$props2.autoDismissTimeout,
          Toast = _this$props2.component,
          props = _objectWithoutProperties(_this$props2, _excluded$l);

      var isRunning = this.state.isRunning; // NOTE: conditions here so methods can be clean

      var handleMouseEnter = autoDismiss ? this.onMouseEnter : NOOP;
      var handleMouseLeave = autoDismiss ? this.onMouseLeave : NOOP;
      return /*#__PURE__*/React$1.createElement(Toast, _extends({
        autoDismiss: autoDismiss,
        autoDismissTimeout: autoDismissTimeout,
        isRunning: isRunning,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave
      }, props));
    }
  }]);

  return ToastController;
}(Component);

_defineProperty(ToastController, "defaultProps", {
  autoDismiss: false
});var _excluded$k = ["appearance", "autoDismiss", "title", "content", "id", "onDismiss", "action", "actionLabel", "secondaryAction", "secondaryActionLabel"];

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var defaultComponents = {
  Toast: DefaultToast,
  ToastContainer: ToastContainer
};
var ToastContext = /*#__PURE__*/React$1.createContext();
var Consumer = ToastContext.Consumer,
    Provider = ToastContext.Provider;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement); // Provider
// ===========================

var ToastProvider = /*#__PURE__*/function (_Component) {
  _inherits$1(ToastProvider, _Component);

  var _super = _createSuper$2(ToastProvider);

  function ToastProvider() {
    var _this;

    _classCallCheck$1(this, ToastProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized$1(_this), "state", {
      toasts: []
    });

    _defineProperty(_assertThisInitialized$1(_this), "has", function (id) {
      if (!_this.state.toasts.length) {
        return false;
      }

      return Boolean(_this.state.toasts.filter(function (t) {
        return t.id === id;
      }).length);
    });

    _defineProperty(_assertThisInitialized$1(_this), "onDismiss", function (id) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NOOP;
      return function () {
        cb(id);

        _this.remove(id);
      };
    });

    _defineProperty(_assertThisInitialized$1(_this), "add", function (title, content) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : NOOP;
      var id = options.id ? options.id : generateUEID();

      var callback = function callback() {
        return cb(id);
      }; // Bail if a toast exists with this ID


      if (_this.has(id)) {
        return;
      } // Update the toast stack


      _this.setState(function (state) {
        var newToast = _objectSpread$6({
          title: title,
          content: content,
          id: id
        }, options);

        var toasts = _this.props.newestOnTop ? [newToast].concat(_toConsumableArray(state.toasts)) : [].concat(_toConsumableArray(state.toasts), [newToast]);
        return {
          toasts: toasts
        };
      }, callback); // Consumer may want to do something with the generated ID (and not use the callback)


      return id;
    });

    _defineProperty(_assertThisInitialized$1(_this), "remove", function (id) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NOOP;

      var callback = function callback() {
        return cb(id);
      }; // Bail if NO toasts exits with this ID


      if (!_this.has(id)) {
        return;
      }

      _this.setState(function (state) {
        var toasts = state.toasts.filter(function (t) {
          return t.id !== id;
        });
        return {
          toasts: toasts
        };
      }, callback);
    });

    _defineProperty(_assertThisInitialized$1(_this), "removeAll", function () {
      if (!_this.state.toasts.length) {
        return;
      }

      _this.state.toasts.forEach(function (t) {
        return _this.remove(t.id);
      });
    });

    _defineProperty(_assertThisInitialized$1(_this), "update", function (id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NOOP;

      var callback = function callback() {
        return cb(id);
      }; // Bail if NO toasts exist with ID


      if (!_this.has(id)) {
        return;
      } // Update the toast stack


      _this.setState(function (state) {
        var old = state.toasts;
        var i = old.findIndex(function (t) {
          return t.id === id;
        });

        var updateToast = _objectSpread$6(_objectSpread$6({}, old[i]), options);

        var toasts = [].concat(_toConsumableArray(old.slice(0, i)), [updateToast], _toConsumableArray(old.slice(i + 1)));
        return {
          toasts: toasts
        };
      }, callback);
    });

    return _this;
  }

  _createClass$1(ToastProvider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          inheritedAutoDismiss = _this$props.autoDismiss,
          autoDismissTimeout = _this$props.autoDismissTimeout,
          children = _this$props.children,
          components = _this$props.components,
          placement = _this$props.placement,
          portalTargetSelector = _this$props.portalTargetSelector,
          transitionDuration = _this$props.transitionDuration,
          containerClasses = _this$props.containerClasses,
          UI = _this$props.UI,
          color = _this$props.color;

      var _defaultComponents$co = _objectSpread$6(_objectSpread$6({}, defaultComponents), components),
          Toast = _defaultComponents$co.Toast,
          ToastContainer = _defaultComponents$co.ToastContainer;

      var add = this.add,
          remove = this.remove,
          removeAll = this.removeAll,
          update = this.update;
      var toasts = Object.freeze(this.state.toasts);
      var hasToasts = Boolean(toasts.length);
      var portalTarget = canUseDOM ? portalTargetSelector ? document.querySelector(portalTargetSelector) : document.body : null;
      return /*#__PURE__*/React$1.createElement(Provider, {
        value: {
          add: add,
          remove: remove,
          removeAll: removeAll,
          update: update,
          toasts: toasts
        }
      }, children, portalTarget ? /*#__PURE__*/createPortal( /*#__PURE__*/React$1.createElement(ToastContainer, {
        className: containerClasses,
        placement: placement,
        hasToasts: hasToasts
      }, /*#__PURE__*/React$1.createElement(TransitionGroup$1, {
        component: null
      }, toasts.map(function (_ref) {
        var appearance = _ref.appearance,
            autoDismiss = _ref.autoDismiss,
            title = _ref.title,
            content = _ref.content,
            id = _ref.id,
            onDismiss = _ref.onDismiss,
            action = _ref.action,
            actionLabel = _ref.actionLabel,
            secondaryAction = _ref.secondaryAction,
            secondaryActionLabel = _ref.secondaryActionLabel,
            unknownConsumerProps = _objectWithoutProperties(_ref, _excluded$k);

        return /*#__PURE__*/React$1.createElement(Transition$1, {
          appear: true,
          key: id,
          mountOnEnter: true,
          timeout: transitionDuration,
          unmountOnExit: true
        }, function (transitionState) {
          return /*#__PURE__*/React$1.createElement(ToastController, _extends({
            appearance: appearance,
            autoDismiss: autoDismiss !== undefined ? autoDismiss : inheritedAutoDismiss,
            autoDismissTimeout: autoDismissTimeout,
            component: Toast,
            key: id,
            onDismiss: _this2.onDismiss(id, onDismiss),
            placement: placement,
            transitionDuration: transitionDuration,
            transitionState: transitionState,
            title: title,
            content: content,
            action: action,
            actionLabel: actionLabel,
            secondaryAction: secondaryAction,
            secondaryActionLabel: secondaryActionLabel,
            UI: UI,
            color: color
          }, unknownConsumerProps));
        });
      }))), portalTarget) : /*#__PURE__*/React$1.createElement(ToastContainer, {
        placement: placement,
        hasToasts: hasToasts
      }));
    }
  }]);

  return ToastProvider;
}(Component);

_defineProperty(ToastProvider, "defaultProps", {
  autoDismiss: false,
  autoDismissTimeout: 5000,
  components: defaultComponents,
  newestOnTop: false,
  placement: 'top-right',
  transitionDuration: 220,
  containerClasses: ''
});

var ToastConsumer = function ToastConsumer(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React$1.createElement(Consumer, null, function (context) {
    return children(context);
  });
};
var withToastManager = function withToastManager(Comp) {
  return /*#__PURE__*/React$1.forwardRef(function (props, ref) {
    return /*#__PURE__*/React$1.createElement(ToastConsumer, null, function (context) {
      return /*#__PURE__*/React$1.createElement(Comp, _extends({
        toastManager: context
      }, props, {
        ref: ref
      }));
    });
  });
};
var useToasts = function useToasts() {
  var ctx = useContext(ToastContext);

  if (!ctx) {
    throw Error('The `useToasts` hook must be called from a descendent of the `ToastProvider`.');
  }

  return {
    addToast: ctx.add,
    removeToast: ctx.remove,
    removeAllToasts: ctx.removeAll,
    updateToast: ctx.update,
    toastStack: ctx.toasts
  };
};function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var WebAppsContext = /*#__PURE__*/React$1.createContext({});
var useModals = createLocalStorageStateHook('modals', {});
var useUI$1 = createLocalStorageStateHook('UI', {
  sidebar: 'responsive',
  envWriteable: false
});

var WebAppsProvider = function WebAppsProvider(props) {
  var _useUI = useUI$1(),
      _useUI2 = _slicedToArray(_useUI, 2),
      UI = _useUI2[0],
      setUI = _useUI2[1];

  var _useModals = useModals(),
      _useModals2 = _slicedToArray(_useModals, 2),
      modals = _useModals2[0],
      setModals = _useModals2[1];

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      navigation = _useState2[0],
      setNavigation = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      apps = _useState4[0],
      setApps = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      plugins = _useState6[0],
      setPlugins = _useState6[1];

  var _useToasts = useToasts(),
      addToast = _useToasts.addToast;

  var isMountedRef = useRef(true);
  var isMounted = useCallback(function () {
    return isMountedRef.current;
  }, []);
  useEffect(function () {
    loadUI();
    loadNavigation();
    getApps();
    getPlugins();
    return function () {
      void (isMountedRef.current = false);
      controller.abort();
    };
  }, []);

  var toggleModal = function toggleModal(modal) {
    if (unmounted.current) {
      setModals({
        modal: !modals[modal]
      });
    }
  };

  var loadUI = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return client('/api/setting', {
                key: JSON.stringify(['core.ui.theme', 'core.ui.dark_mode'])
              }).then(function (json) {
                if (isMounted()) {
                  UI.theme = json.data['core.ui.theme'];
                  UI.dark_mode = json.data['core.ui.dark_mode'];
                  setUI(_objectSpread$5({}, UI));
                }
              })["catch"](function (error) {
                var _error$status;

                if (!((_error$status = error.status) !== null && _error$status !== void 0 && _error$status.isAbort) && isMounted()) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadUI() {
      return _ref.apply(this, arguments);
    };
  }();

  var loadNavigation = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return client('/api/navigation').then(function (json) {
                if (isMounted()) {
                  navigation.menu = json.data.navigation;
                  navigation.routes = json.data.routes;
                  UI.envWriteable = json.data.envPermissions;
                  setNavigation(_objectSpread$5({}, navigation));
                  setUI(_objectSpread$5({}, UI));
                }
              })["catch"](function (error) {
                var _error$status2;

                if (!((_error$status2 = error.status) !== null && _error$status2 !== void 0 && _error$status2.isAbort) && isMounted()) {
                  var nav = [];
                  nav['error'] = true;
                  nav['message'] = error.data.message;
                  setNavigation(nav);
                }
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function loadNavigation() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getApps = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return client('/api/apps').then(function (json) {
                if (isMounted()) {
                  apps.local = json.data.apps;
                  setApps(_objectSpread$5({}, apps));
                }
              })["catch"](function (error) {
                var _error$status3;

                if (!((_error$status3 = error.status) !== null && _error$status3 !== void 0 && _error$status3.isAbort) && isMounted()) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 2:
              _context3.next = 4;
              return client('/api/online/apps/list').then(function (json) {
                if (isMounted()) {
                  apps.online = json.data.apps;
                  setApps(_objectSpread$5({}, apps));
                }
              })["catch"](function (error) {
                var _error$status4;

                if (!((_error$status4 = error.status) !== null && _error$status4 !== void 0 && _error$status4.isAbort) && isMounted()) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getApps() {
      return _ref3.apply(this, arguments);
    };
  }();

  var getPlugins = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
      return _regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return client('/api/plugins').then(function (json) {
                if (isMounted()) {
                  plugins.all = json.data.plugins;
                  setPlugins(_objectSpread$5({}, plugins));
                }
              })["catch"](function (error) {
                var _error$status5;

                if (!((_error$status5 = error.status) !== null && _error$status5 !== void 0 && _error$status5.isAbort) && isMounted()) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 2:
              _context4.next = 4;
              return client('/api/plugins/active').then(function (json) {
                if (isMounted()) {
                  plugins.active = json.data.plugins;
                  setPlugins(_objectSpread$5({}, plugins));
                }
              })["catch"](function (error) {
                var _error$status6;

                if (!((_error$status6 = error.status) !== null && _error$status6 !== void 0 && _error$status6.isAbort) && isMounted()) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 4:
              _context4.next = 6;
              return client('/api/online/plugins/list').then(function (json) {
                if (isMounted()) {
                  plugins.online = json.data.plugins;
                  setPlugins(_objectSpread$5({}, plugins));
                }
              })["catch"](function (error) {
                var _error$status7;

                if (!((_error$status7 = error.status) !== null && _error$status7 !== void 0 && _error$status7.isAbort) && isMounted()) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getPlugins() {
      return _ref4.apply(this, arguments);
    };
  }();

  var downloadApp = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(e) {
      return _regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              _context5.next = 3;
              return client('/api/online/apps/download', {
                slug: e.target.dataset.slug
              }).then(function (json) {
                if (isMounted()) {
                  addToast(e.target.dataset.slug, 'Has been downloaded and installed', {
                    appearance: 'success'
                  });
                  apps.local = json.data.apps;
                  apps.online = json.data.online;
                  setApps(_objectSpread$5({}, apps));
                }
              })["catch"](function (error) {
                var _error$status8;

                if (!((_error$status8 = error.status) !== null && _error$status8 !== void 0 && _error$status8.isAbort) && isMounted()) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function downloadApp(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  var updateApp = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(e) {
      return _regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();
              _context6.next = 3;
              return client('/api/online/apps/download', {
                slug: e.target.dataset.slug
              }).then(function (json) {
                if (isMounted()) {
                  addToast(e.target.dataset.slug, "Has been updated", {
                    appearance: 'success'
                  });
                  apps.local = json.data.apps;
                  apps.online = json.data.online;
                  setApps(_objectSpread$5({}, apps));
                }
              })["catch"](function (error) {
                var _error$status9;

                if (!((_error$status9 = error.status) !== null && _error$status9 !== void 0 && _error$status9.isAbort) && isMounted()) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function updateApp(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();

  var activateApp = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(e) {
      return _regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();
              _context7.next = 3;
              return client('/api/apps/control', {
                slug: e.target.dataset.slug,
                task: 'activate'
              }).then(function (json) {
                if (isMounted()) {
                  addToast(json.data.message, '', {
                    appearance: 'success'
                  }); // Reload Navigation

                  // Reload Navigation
                  loadNavigation();
                  Object.keys(apps.local).map(function (key) {
                    if (e.target.dataset.slug === apps.local[key].slug) {
                      apps.local[key].active = true;
                    }
                  });
                  Object.keys(apps.online).map(function (key) {
                    if (e.target.dataset.slug === apps.online[key].slug) {
                      apps.online[key].active = true;
                    }
                  });
                  setApps(_objectSpread$5({}, apps));
                }
              })["catch"](function (error) {
                var _error$status10;

                if (!((_error$status10 = error.status) !== null && _error$status10 !== void 0 && _error$status10.isAbort) && isMounted()) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function activateApp(_x3) {
      return _ref7.apply(this, arguments);
    };
  }();

  var deactivateApp = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(e) {
      return _regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();
              _context8.next = 3;
              return client('/api/apps/control', {
                slug: e.target.dataset.slug,
                task: 'deactivate'
              }).then(function (json) {
                if (isMounted()) {
                  addToast(json.data.message, '', {
                    appearance: 'success'
                  }); // Reload Navigation

                  // Reload Navigation
                  loadNavigation();
                  Object.keys(apps.local).map(function (key) {
                    if (e.target.dataset.slug === apps.local[key].slug) {
                      apps.local[key].active = false;
                    }
                  });
                  Object.keys(apps.online).map(function (key) {
                    if (e.target.dataset.slug === apps.online[key].slug) {
                      apps.online[key].active = false;
                    }
                  });
                  setApps(_objectSpread$5({}, apps));
                }
              })["catch"](function (error) {
                var _error$status11;

                if (!((_error$status11 = error.status) !== null && _error$status11 !== void 0 && _error$status11.isAbort) && isMounted()) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function deactivateApp(_x4) {
      return _ref8.apply(this, arguments);
    };
  }();

  var installApp = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9(e) {
      return _regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();
              _context9.next = 3;
              return client('/api/apps/control', {
                slug: e.target.dataset.slug,
                task: 'install'
              }).then(function (json) {
                if (isMounted()) {
                  addToast(json.data.message, '', {
                    appearance: 'success'
                  }); // Reload Navigation

                  // Reload Navigation
                  loadNavigation();
                  Object.keys(apps.local).map(function (key) {
                    if (e.target.dataset.slug === apps.local[key].slug) {
                      apps.local[key].installed = true;
                    }
                  });
                  Object.keys(apps.online).map(function (key) {
                    if (e.target.dataset.slug === apps.online[key].slug) {
                      apps.online[key].installed = true;
                    }
                  });
                  setApps(_objectSpread$5({}, apps));
                }
              })["catch"](function (error) {
                var _error$status12;

                if (!((_error$status12 = error.status) !== null && _error$status12 !== void 0 && _error$status12.isAbort) && isMounted()) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 3:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function installApp(_x5) {
      return _ref9.apply(this, arguments);
    };
  }();

  var uninstallApp = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee10(e) {
      return _regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              e.preventDefault();
              _context10.next = 3;
              return client('/api/apps/control', {
                slug: e.target.dataset.slug,
                task: 'uninstall'
              }).then(function (json) {
                if (isMounted()) {
                  addToast(json.data.message, '', {
                    appearance: 'success'
                  });
                  var _apps2 = [];
                  Object.keys(apps.local).map(function (key) {
                    if (e.target.dataset.slug !== apps.local[key].slug) {
                      _apps2.push(apps.local[key]);
                    }
                  });
                  apps.local = _apps2;
                  Object.keys(apps.online).map(function (key) {
                    if (e.target.dataset.slug === apps.online[key].slug) {
                      apps.online[key] = json.data.app;
                    }
                  });
                  setApps(_objectSpread$5({}, apps));
                }
              })["catch"](function (error) {
                var _error$status13;

                if (!((_error$status13 = error.status) !== null && _error$status13 !== void 0 && _error$status13.isAbort) && isMounted()) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 3:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function uninstallApp(_x6) {
      return _ref10.apply(this, arguments);
    };
  }();

  var downloadPlugin = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee11(e) {
      return _regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              e.preventDefault();
              _context11.next = 3;
              return client('/api/online/plugins/download', {
                slug: e.target.dataset.slug
              }).then(function (json) {
                if (isMounted()) {
                  addToast(json.data.message, '', {
                    appearance: 'success'
                  });
                  plugins.all = json.data.plugins;
                  plugins.online = json.data.online;
                  setPlugins(_objectSpread$5({}, plugins));
                }
              })["catch"](function (error) {
                var _error$status14;

                if (!((_error$status14 = error.status) !== null && _error$status14 !== void 0 && _error$status14.isAbort) && isMounted()) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 3:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function downloadPlugin(_x7) {
      return _ref11.apply(this, arguments);
    };
  }();

  var updatePlugin = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee12(e) {
      return _regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e.preventDefault();
              _context12.next = 3;
              return client('/api/online/plugins/download', {
                slug: e.target.dataset.slug
              }).then(function (json) {
                if (isMounted()) {
                  addToast(json.data.message, '', {
                    appearance: 'success'
                  });
                  plugins.all = json.data.plugins;
                  plugins.online = json.data.online;
                  setPlugins(_objectSpread$5({}, plugins));
                }
              })["catch"](function (error) {
                var _error$status15;

                if (!((_error$status15 = error.status) !== null && _error$status15 !== void 0 && _error$status15.isAbort) && isMounted()) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 3:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function updatePlugin(_x8) {
      return _ref12.apply(this, arguments);
    };
  }();

  var togglePlugin = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee13(e) {
      return _regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              e.preventDefault();
              _context13.next = 3;
              return client('/api/plugins/toggle', {
                slug: e.target.dataset.slug
              }).then(function (json) {
                if (isMounted()) {
                  addToast(json.data.plugin.name, json.data.message, {
                    appearance: 'success'
                  });
                  Object.keys(plugins.all).map(function (key) {
                    if (e.target.dataset.slug === plugins.all[key].slug) {
                      plugins.all[key].state = json.data.plugin.state;
                      plugins.all[key].installed = true;
                      delete plugins.all[key].downloaded;
                    }
                  });
                  Object.keys(plugins.online).map(function (key) {
                    if (e.target.dataset.slug === plugins.online[key].slug) {
                      plugins.online[key].state = json.data.plugin.state;
                      plugins.online[key].installed = true;
                      delete plugins.online[key].downloaded;
                    }
                  });
                  setPlugins(_objectSpread$5({}, plugins));
                }
              })["catch"](function (error) {
                var _error$status16;

                if (!((_error$status16 = error.status) !== null && _error$status16 !== void 0 && _error$status16.isAbort) && isMounted()) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 3:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    return function togglePlugin(_x9) {
      return _ref13.apply(this, arguments);
    };
  }();

  var uninstallPlugin = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee14(e) {
      return _regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              e.preventDefault();
              _context14.next = 3;
              return client('/api/plugin', {
                slug: e.target.dataset.slug,
                '_method': 'DELETE'
              }, {
                method: 'DELETE'
              }).then(function (json) {
                if (isMounted()) {
                  addToast(json.data.plugin.name, json.data.message, {
                    appearance: 'success'
                  });
                  var _plugins2 = [];
                  Object.keys(plugins.all).map(function (key) {
                    if (e.target.dataset.slug !== plugins.all[key].slug) {
                      _plugins2.push(plugins.all[key]);
                    }
                  });
                  plugins.all = _plugins2;
                  Object.keys(plugins.online).map(function (key) {
                    if (e.target.dataset.slug === plugins.online[key].slug) {
                      plugins.online[key] = json.data.plugin;
                    }
                  });
                  setPlugins(_objectSpread$5({}, plugins));
                }
              })["catch"](function (error) {
                var _error$status17;

                if (!((_error$status17 = error.status) !== null && _error$status17 !== void 0 && _error$status17.isAbort) && isMounted()) {
                  // TODO: Handle errors
                  console.error(error);
                }
              });

            case 3:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }));

    return function uninstallPlugin(_x10) {
      return _ref14.apply(this, arguments);
    };
  }();

  var _apps = {
    local: apps.local,
    online: apps.online,
    download: downloadApp,
    update: updateApp,
    activate: activateApp,
    deactivate: deactivateApp,
    install: installApp,
    uninstall: uninstallApp
  };
  var _plugins = {
    all: plugins.all,
    active: plugins.active,
    online: plugins.online,
    download: downloadPlugin,
    update: updatePlugin,
    toggle: togglePlugin,
    uninstall: uninstallPlugin
  };
  return /*#__PURE__*/React$1.createElement(WebAppsContext.Provider, {
    value: {
      navigation: navigation,
      UI: UI,
      modals: modals,
      loadNavigation: loadNavigation,
      setUI: setUI,
      setModals: setModals,
      toggleModal: toggleModal,
      apps: _apps,
      plugins: _plugins
    }
  }, props.children || null);
};

var WebApps = function WebApps(props) {
  var _useUI3 = useUI$1(),
      _useUI4 = _slicedToArray(_useUI3, 2),
      UI = _useUI4[0];
      _useUI4[1];

  return /*#__PURE__*/React$1.createElement(ToastProvider, {
    UI: UI,
    autoDismiss: "true",
    autoDismissTimeout: "3000"
  }, /*#__PURE__*/React$1.createElement(WebAppsProvider, props));
};var withWebApps = function withWebApps(Component) {
  var displayName = "withWebApps(".concat(Component.displayName || Component.name, ")");

  var C = function C(props) {
    return /*#__PURE__*/React$1.createElement(WebAppsContext.Consumer, null, function (context) {
      invariant(context, "You should not use <".concat(displayName, " /> outside a <WebApps>"));
      return /*#__PURE__*/React$1.createElement(Component, _extends({}, props, context));
    });
  };

  C.displayName = displayName;
  return C;
};var _excluded$j = ["style", "size", "rounded", "square", "className", "children"];

var Button = function Button(props) {
  var style = props.style,
      size = props.size,
      rounded = props.rounded,
      square = props.square,
      className = props.className,
      children = props.children,
      attributes = _objectWithoutProperties(props, _excluded$j);

  var _useContext = useContext(WebAppsContext),
      UI = _useContext.UI;

  var color = props.color === 'brand' ? UI.theme : props.color;
  var classes = classNames('font-bold', 'outline-none', 'focus:outline-none', 'ease-linear', 'transition-all', 'duration-150', style === 'full' ? "bg-".concat(color, "-600 hover:bg-").concat(color, "-400 dark:bg-").concat(color, "-400 dark:hover:bg-").concat(color, "-600 text-white dark:text-gray-900") : '', style === 'outline' ? "text-".concat(color, "-600 dark:text-").concat(color, "-400 bg-transparent border border-").concat(color, "-600 dark:border-").concat(color, "-400 hover:bg-").concat(color, "-600 dark:hover:bg-").concat(color, "-400 hover:text-white dark:hover:text-white") : '', style === 'ghost' ? "text-".concat(color, "-600 dark:text-").concat(color, "-400 bg-transparent hover:bg-").concat(color, "-600 dark:hover:bg-").concat(color, "-400 hover:text-white dark:hover:text-white") : '', style === 'link' ? "text-".concat(color, "-600 dark:text-").concat(color, "-400 bg-transparent hover:text-").concat(color, "-400 dark:hover:text-").concat(color, "-600") : '', size === "small" ? 'text-xs px-2 py-1' : size === "large" ? 'text-lg px-8 py-3' : 'px-4 py-2', rounded ? 'rounded-full' : square ? 'rounded-none' : 'rounded-md', className);
  return props.href !== undefined || props.to !== undefined ? /*#__PURE__*/React$1.createElement(Link, _extends({
    className: classes
  }, attributes), children) : /*#__PURE__*/React$1.createElement("button", _extends({
    type: "button",
    className: classes
  }, attributes), children);
};

Button.propTypes = {
  color: PropTypes.string,
  style: PropTypes.oneOf(['full', 'outline', 'ghost', 'link']),
  size: PropTypes.oneOf(['', 'small', 'large']),
  rounded: PropTypes.bool,
  square: PropTypes.bool
};
Button.defaultProps = {
  color: 'brand',
  style: 'full',
  size: ''
};var ColorGridSelect = function ColorGridSelect(props) {
  var id = props.id,
      label = props.label,
      helpText = props.helpText,
      wrapperClassName = props.wrapperClassName,
      labelClassName = props.labelClassName,
      colors = props.colors,
      onSelect = props.onSelect;

  var _useContext = useContext(WebAppsContext),
      UI = _useContext.UI;

  var labelClasses = classNames('block', 'mb-2', 'text-sm', 'font-medium', 'text-gray-700', 'dark:text-gray-300', labelClassName);
  return /*#__PURE__*/React$1.createElement("div", {
    className: wrapperClassName
  }, /*#__PURE__*/React$1.createElement("label", {
    className: labelClasses,
    htmlFor: id
  }, label), /*#__PURE__*/React$1.createElement("div", {
    className: "grid grid-cols-1 md:col-span-3 sm:grid-cols-".concat(colors.length / 2, " xl:grid-cols-").concat(colors.length, " gap-y-2 gap-x-4 mt-1 xl:mt-0 w-full")
  }, Object(colors).map(function (color) {
    return color.selected ? /*#__PURE__*/React$1.createElement("div", {
      key: color.value,
      onClick: function onClick() {
        return onSelect(color.value);
      },
      className: "border-2 border-white dark:border-gray-800 w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-2 cursor-pointer ring-4 ring-".concat(UI.theme, "-600 dark:ring-").concat(UI.theme, "-500 ring-opacity-50")
    }, /*#__PURE__*/React$1.createElement("div", {
      className: "h-10 ".concat(color.bgClasses, " not-sr-only")
    }), /*#__PURE__*/React$1.createElement("div", {
      className: "text-center font-semibold"
    }, color.name)) : /*#__PURE__*/React$1.createElement("div", {
      key: color.value,
      onClick: function onClick() {
        return onSelect(color.value);
      },
      className: "border-2 border-white dark:border-gray-800 w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-2 cursor-pointer"
    }, /*#__PURE__*/React$1.createElement("div", {
      className: "h-10 ".concat(color.bgClasses, " not-sr-only")
    }), /*#__PURE__*/React$1.createElement("div", {
      className: "text-center"
    }, color.name));
  })), helpText !== '' ? /*#__PURE__*/React$1.createElement("p", {
    "class": "mt-1 text-sm text-gray-500 dark:text-gray-400"
  }, helpText) : null);
};

ColorGridSelect.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  wrapperClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  labelClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  colors: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onSelect: PropTypes.func
};
ColorGridSelect.defaultProps = {
  id: '',
  label: '',
  helpText: '',
  wrapperClassName: 'mb-6',
  labelClassName: '',
  colors: []
};var _excluded$i = ["text", "confirmText", "onClick", "timeout", "initialColor", "confirmColor", "className"];

var ConfirmDeleteButton = function ConfirmDeleteButton(props) {
  var text = props.text,
      confirmText = props.confirmText,
      onClick = props.onClick,
      timeout = props.timeout,
      initialColor = props.initialColor,
      confirmColor = props.confirmColor,
      className = props.className,
      attributes = _objectWithoutProperties(props, _excluded$i);

  var isMountedRef = useRef(true);
  var isMounted = useCallback(function () {
    return isMountedRef.current;
  }, []);
  useEffect(function () {
  }, []);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      waiting = _useState2[0],
      setWaiting = _useState2[1];

  var onConfirm = function onConfirm(e) {
    e.preventDefault();
    setWaiting(false);
    onClick();
  };

  var onQuery = function onQuery(e) {
    e.preventDefault();
    setWaiting(true);
    setTimeout(function () {
      if (isMounted()) {
        setWaiting(false);
      }
    }, timeout);
  };

  return waiting ? /*#__PURE__*/React$1.createElement(Button, _extends({
    className: classNames('flex', 'flex-row', 'items-center', className),
    color: confirmColor,
    onClick: onConfirm
  }, attributes), /*#__PURE__*/React$1.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 mr-2",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  })), confirmText) : /*#__PURE__*/React$1.createElement(Button, _extends({
    className: classNames('flex', 'flex-row', 'items-center', className),
    color: initialColor,
    onClick: onQuery
  }, attributes), /*#__PURE__*/React$1.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 mr-2",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  })), text);
};

ConfirmDeleteButton.propTypes = {
  text: PropTypes.string,
  confirmText: PropTypes.string,
  onClick: PropTypes.func,
  timeout: PropTypes.number,
  initialColor: PropTypes.string,
  confirmColor: PropTypes.string
};
ConfirmDeleteButton.defaultProps = {
  text: "Delete",
  confirmText: "Delete - Are you sure?",
  timeout: 2000,
  initialColor: 'red',
  confirmColor: 'orange'
};var _excluded$h = ["title", "message", "cancelText", "confirmText", "onCancel", "onConfirm"];

var ConfirmDeleteModal = function ConfirmDeleteModal(props) {
  var title = props.title,
      message = props.message,
      cancelText = props.cancelText,
      confirmText = props.confirmText,
      onCancel = props.onCancel,
      onConfirm = props.onConfirm,
      attributes = _objectWithoutProperties(props, _excluded$h);

  return /*#__PURE__*/React$1.createElement("div", _extends({
    className: "fixed z-50 inset-0 overflow-y-auto"
  }, attributes), /*#__PURE__*/React$1.createElement("div", {
    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "fixed inset-0 transition-opacity",
    "aria-hidden": "true"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "absolute inset-0 bg-gray-500 opacity-75"
  })), /*#__PURE__*/React$1.createElement("span", {
    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
    "aria-hidden": "true"
  }, "\u200B"), /*#__PURE__*/React$1.createElement("div", {
    className: "inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "modal-headline"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "bg-white dark:bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "sm:flex sm:items-start"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 sm:mx-0 sm:h-10 sm:w-10"
  }, /*#__PURE__*/React$1.createElement("svg", {
    className: "h-6 w-6 text-red-600 dark:text-red-400",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  }))), /*#__PURE__*/React$1.createElement("div", {
    className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
  }, /*#__PURE__*/React$1.createElement("h3", {
    className: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100",
    id: "modal-headline"
  }, title), /*#__PURE__*/React$1.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/React$1.createElement("p", {
    className: "text-sm text-gray-500 dark:text-gray-300 whitespace-pre-wrap"
  }, message))))), /*#__PURE__*/React$1.createElement("div", {
    className: "bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
  }, /*#__PURE__*/React$1.createElement("button", {
    type: "button",
    className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:ring-0 sm:ml-3 sm:w-auto sm:text-sm",
    onClick: onConfirm
  }, confirmText), /*#__PURE__*/React$1.createElement("button", {
    type: "button",
    className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-700 shadow-sm px-4 py-2 bg-white dark:bg-gray-500 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
    onClick: onCancel
  }, cancelText)))));
};

ConfirmDeleteModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func
};
ConfirmDeleteModal.defaultProps = {
  title: "Are you sure?",
  message: "Are you sure to wish to delete this item?\nThis action cannot be undone.",
  cancelText: "No",
  confirmText: "Yes"
};var _excluded$g = ["id", "name", "label", "action", "helpText", "error", "state", "wrapperClassName", "labelClassName", "inputClassName"];

var Input = function Input(props) {
  var id = props.id,
      name = props.name,
      label = props.label,
      action = props.action,
      helpText = props.helpText,
      error = props.error,
      state = props.state,
      wrapperClassName = props.wrapperClassName,
      labelClassName = props.labelClassName,
      inputClassName = props.inputClassName,
      attributes = _objectWithoutProperties(props, _excluded$g);

  var _useContext = useContext(WebAppsContext),
      UI = _useContext.UI;

  var labelClasses = classNames('block', 'mb-2', 'text-sm', 'font-medium', 'text-gray-700', 'dark:text-gray-300', labelClassName);
  var inputClasses = classNames('bg-gray-50', 'border-2', 'border-gray-300', 'text-gray-900', 'outline-none', 'text-sm', 'rounded-lg', 'block', 'w-full', 'p-2.5', 'dark:bg-gray-700', 'dark:border-gray-600', 'dark:placeholder-gray-400', 'dark:text-white', 'transition-colors', "focus:ring-".concat(UI.theme, "-600"), "dark:focus:ring-".concat(UI.theme, "-500"), "focus:border-".concat(UI.theme, "-600"), "dark:focus:border-".concat(UI.theme, "-500"), state === 'error' ? 'border-red-500 text-red-500 focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500' : '', state === 'saved' ? 'border-green-500 text-green-500 focus:border-green-500 dark:focus:border-green-500 focus:ring-green-500 dark:focus:ring-green-500' : '', state === 'saving' ? 'border-orange-500 focus:border-orange-500 dark:focus:border-orange-500 focus:ring-orange-500 dark:focus:ring-orange-500' : '', inputClassName);

  var Append = function Append() {
    if (state === 'saving') {
      return /*#__PURE__*/React$1.createElement(Loader, {
        style: "circle",
        height: "5",
        width: "5",
        color: "orange"
      });
    } else if (state === 'saved') {
      return /*#__PURE__*/React$1.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-5 w-5 text-green-500",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }, /*#__PURE__*/React$1.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M5 13l4 4L19 7"
      }));
    } else if (state === 'error') {
      return /*#__PURE__*/React$1.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-5 w-5 text-red-500",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }, /*#__PURE__*/React$1.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M6 18L18 6M6 6l12 12"
      }));
    } else if (action) {
      return action;
    }

    return null;
  };

  return /*#__PURE__*/React$1.createElement("div", {
    className: wrapperClassName
  }, label !== '' ? /*#__PURE__*/React$1.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, label) : null, /*#__PURE__*/React$1.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React$1.createElement("input", _extends({
    id: id,
    name: name,
    className: inputClasses
  }, attributes)), /*#__PURE__*/React$1.createElement("div", {
    className: "flex absolute inset-y-0 right-0 items-center pr-3"
  }, /*#__PURE__*/React$1.createElement(Append, null))), helpText !== '' || error !== '' ? /*#__PURE__*/React$1.createElement("span", {
    "class": "text-sm transition-colors ".concat(state === 'error' ? 'text-red-500' : 'text-gray-500 dark:text-gray-400')
  }, state === 'error' ? error : helpText) : null);
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  action: PropTypes.object,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  error: PropTypes.string,
  state: PropTypes.oneOf(['', 'saving', 'error', 'saved']),
  wrapperClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  labelClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  inputClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
};
Input.defaultProps = {
  error: '',
  state: '',
  label: '',
  helpText: '',
  wrapperClassName: 'mb-6',
  labelClassName: '',
  inputClassName: ''
};var _excluded$f = ["data", "select", "placeholder", "noMatchesText", "limit", "labelKey", "valueKey"];

var DataSuggest = function DataSuggest(_ref) {
  var data = _ref.data,
      select = _ref.select,
      placeholder = _ref.placeholder,
      noMatchesText = _ref.noMatchesText,
      limit = _ref.limit,
      labelKey = _ref.labelKey,
      valueKey = _ref.valueKey,
      props = _objectWithoutProperties(_ref, _excluded$f);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      filteredData = _useState4[0],
      setFilteredData = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showResults = _useState6[0],
      setShowResults = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      dataInput = _useState8[0],
      setDataInput = _useState8[1];

  var onChange = function onChange(e) {
    var dataInput = e.currentTarget.value;

    var _filteredData = data.filter(function (data) {
      return data[labelKey].toLowerCase().indexOf(dataInput.toLowerCase()) > -1;
    });

    setActive(0);
    setFilteredData(_filteredData);
    setShowResults(true);
    setDataInput(e.currentTarget.value);
  };

  var onClick = function onClick(e) {
    e.stopPropagation();
    setDataInput(filteredData[e.currentTarget.dataset.key][labelKey]);
    select(filteredData[e.currentTarget.dataset.key]);
    setActive(0);
    setFilteredData([]);
    setShowResults(false);
  };

  var onKeyDown = function onKeyDown(e) {
    if (e.keyCode === 13) {
      setDataInput(filteredData[active][labelKey]);
      select(filteredData[active]);
      setShowResults(false);
      setActive(0);
    } else if (e.keyCode === 38) {
      if (active === 0) return;
      setActive(active - 1);
    } else if (e.keyCode === 40) {
      if (active + 1 === filteredData.length) return;
      setActive(active + 1);
    }
  };

  var dataListComponent;

  if (showResults && dataInput) {
    if (filteredData.length) {
      var count = 1;
      dataListComponent = /*#__PURE__*/React$1.createElement("ul", {
        className: "absolute inset-x-0 bg-white dark:bg-gray-700 rounded-b border border-gray-200 dark:border-gray-600 text-gray-900 text-sm font-medium dark:text-white cursor-pointer"
      }, filteredData.map(function (data, index) {
        if (limit === 0 || count <= limit) {
          var className = "flex flex-row gap-x-2 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-900";

          if (index === active) {
            className = "flex flex-row gap-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900";
          }

          count = count + 1;
          return /*#__PURE__*/React$1.createElement("li", {
            className: className,
            key: data[valueKey],
            "data-key": index,
            onClick: onClick
          }, data[labelKey]);
        }
      }));
    } else {
      dataListComponent = /*#__PURE__*/React$1.createElement("ul", {
        className: "absolute inset-x-0 bg-white dark:bg-gray-700 rounded-b border border-gray-200 dark:border-gray-600 text-gray-900 text-sm font-medium dark:text-white cursor-pointer"
      }, /*#__PURE__*/React$1.createElement("li", {
        className: "px-4 py-2 text-center"
      }, /*#__PURE__*/React$1.createElement("em", null, noMatchesText)));
    }
  }

  return /*#__PURE__*/React$1.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React$1.createElement(Input, _extends({
    type: "text",
    onChange: onChange,
    onKeyDown: onKeyDown,
    value: dataInput,
    placeholder: placeholder,
    autoComplete: "no"
  }, props)), dataListComponent);
};

DataSuggest.propTypes = {
  data: PropTypes.instanceOf(Array),
  select: PropTypes.instanceOf(Function),
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  placeholder: PropTypes.string,
  noMatchesText: PropTypes.string,
  limit: PropTypes.number
};
DataSuggest.defaultProps = {
  data: [],
  select: function select() {
    return true;
  },
  valueKey: 'value',
  labelKey: 'label',
  placeholder: 'Start typing to search...',
  noMatchesText: 'No matching results found!',
  limit: 0
};var _excluded$e = ["show", "text", "buttonClassNames", "dropClassNames"];

var DropDownButton = function DropDownButton(props) {
  var show = props.show,
      text = props.text,
      buttonClassNames = props.buttonClassNames,
      dropClassNames = props.dropClassNames,
      rest = _objectWithoutProperties(props, _excluded$e);

  var _useState = useState(show),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  useEffect(function (show) {
    setOpen(show);
  }, [show]);

  var toggle = function toggle() {
    setOpen(!open);
  };

  var close = function close() {
    setOpen(false);
  };

  var dropClass = classNames('origin-top-right', 'absolute', 'right-0', 'w-56', 'bg-white', 'dark:bg-gray-700', 'shadow-lg', 'ring-1', 'ring-black', 'ring-opacity-5', 'z-20', dropClassNames, open ? '' : 'hidden');
  var childrenWithClose = React$1.Children.map(props.children, function (child) {
    if ( /*#__PURE__*/React$1.isValidElement(child)) {
      return /*#__PURE__*/React$1.cloneElement(child, {
        onClick: close
      });
    }

    return child;
  });
  var id = "options-menu-".concat(Math.floor(Math.random() * 1000));
  return /*#__PURE__*/React$1.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React$1.createElement(Button, _extends({
    className: buttonClassNames
  }, rest, {
    id: id,
    "aria-haspopup": "true",
    "aria-expanded": "false",
    onClick: toggle
  }), text), /*#__PURE__*/React$1.createElement("div", {
    className: dropClass
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "py-1",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": id
  }, childrenWithClose)));
};

DropDownButton.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};var _excluded$d = ["icon"];

var Icon = function Icon(props) {
  var icon = props.icon,
      attributes = _objectWithoutProperties(props, _excluded$d);

  var addClasses = function addClasses(string) {
    if (typeof string === 'string') {
      return string.replace(/<svg/g, "<svg class=\"".concat(attributes.className, "\""));
    }
  };

  return /*#__PURE__*/React$1.createElement("div", _extends({
    dangerouslySetInnerHTML: {
      __html: addClasses(icon)
    }
  }, attributes));
};

Icon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};var InfiniteScroll = function InfiniteScroll(props) {
  var _useState = useState(1),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var marker = useRef(null);
  useEffect(function () {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };
    var observer = new IntersectionObserver(handleObserver, options);

    if (marker.current) {
      observer.observe(marker.current);
    }
  }, []);
  useEffect(function () {
    if (props.hasMore) {
      props.loadMore();
    }
  }, [page]);

  var handleObserver = function handleObserver(entities) {
    var target = entities[0]; // Only interact, if we are not in a test environment (Jest)

    if (target.isIntersecting && (process.env.JEST_WORKER_ID === undefined || process.env.NODE_ENV !== 'test')) {
      setPage(function (page) {
        return page + 1;
      });
    }
  };

  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, props.children, /*#__PURE__*/React$1.createElement("span", {
    ref: marker
  }));
};/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */

function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();

  i.containerWidth = Math.round(rect.width);
  i.containerHeight = Math.round(rect.height);

  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      ((i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth)) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth -
        9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

function clickRail(i) {
  i.element;

  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
}

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    if (e.type.startsWith('touch') && e.changedTouches.length > 1) {
      e.preventDefault();
    }
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = (-1 * e.wheelDeltaX) / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        if (!i.element) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers$1 = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
        ? 'end'
        : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
        ? 'end'
        : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers$1[handlerName](this$1$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};var _excluded$c = ["tag", "className", "settings"];

var Scrollbar = function Scrollbar(props) {
  var Tag = props.tag,
      className = props.className,
      settings = props.settings,
      attributes = _objectWithoutProperties(props, _excluded$c);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      instance = _useState2[0],
      setInstance = _useState2[1];

  var ref = /*#__PURE__*/createRef();
  useEffect(function () {
    init();
  }, []);

  var init = function init() {
    if (!instance) {
      createPerfectScrollbar();
    }
  };

  var createPerfectScrollbar = function createPerfectScrollbar() {
    setInstance(new PerfectScrollbar(ref.current, settings));
  };


  return /*#__PURE__*/React$1.createElement(Tag, _extends({
    className: classNames(className),
    style: {
      position: 'relative'
    }
  }, attributes, {
    ref: ref
  }));
};

Scrollbar.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  settings: PropTypes.object,
  switcher: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
Scrollbar.defaultProps = {
  tag: 'div'
};var _excluded$b = ["id", "name", "label", "action", "helpText", "error", "state", "wrapperClassName", "labelClassName", "selectClassName", "children"];

var Select = function Select(props) {
  var id = props.id,
      name = props.name,
      label = props.label,
      action = props.action,
      helpText = props.helpText,
      error = props.error,
      state = props.state,
      wrapperClassName = props.wrapperClassName,
      labelClassName = props.labelClassName,
      selectClassName = props.selectClassName,
      children = props.children,
      attributes = _objectWithoutProperties(props, _excluded$b);

  var _useContext = useContext(WebAppsContext),
      UI = _useContext.UI;

  var labelClasses = classNames('block', 'mb-2', 'text-sm', 'font-medium', 'text-gray-700', 'dark:text-gray-300', labelClassName);
  var selectClasses = classNames('bg-gray-50', 'border-2', 'border-gray-300', 'text-gray-900', 'outline-none', 'text-sm', 'rounded-lg', 'block', 'w-full', 'p-2.5', 'dark:bg-gray-700', 'dark:border-gray-600', 'dark:placeholder-gray-400', 'dark:text-white', 'transition-colors', "focus:ring-".concat(UI.theme, "-600"), "dark:focus:ring-".concat(UI.theme, "-500"), "focus:border-".concat(UI.theme, "-600"), "dark:focus:border-".concat(UI.theme, "-500"), state === 'error' ? 'border-red-500 text-red-500 focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500' : '', state === 'saved' ? 'border-green-500 text-green-500 focus:border-green-500 dark:focus:border-green-500 focus:ring-green-500 dark:focus:ring-green-500' : '', state === 'saving' ? 'border-orange-500 focus:border-orange-500 dark:focus:border-orange-500 focus:ring-orange-500 dark:focus:ring-orange-500' : '', selectClassName);

  var Append = function Append() {
    if (state === 'saving') {
      return /*#__PURE__*/React$1.createElement(Loader, {
        style: "circle",
        height: "5",
        width: "5",
        color: "orange"
      });
    } else if (state === 'saved') {
      return /*#__PURE__*/React$1.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-5 w-5 text-green-500",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }, /*#__PURE__*/React$1.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M5 13l4 4L19 7"
      }));
    } else if (state === 'error') {
      return /*#__PURE__*/React$1.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-5 w-5 text-red-500",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }, /*#__PURE__*/React$1.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M6 18L18 6M6 6l12 12"
      }));
    } else if (action) {
      return action;
    }

    return null;
  };

  return /*#__PURE__*/React$1.createElement("div", {
    className: wrapperClassName
  }, label !== '' ? /*#__PURE__*/React$1.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, label) : null, /*#__PURE__*/React$1.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React$1.createElement("select", _extends({
    id: id,
    name: name,
    className: selectClasses
  }, attributes), children), /*#__PURE__*/React$1.createElement("div", {
    className: "flex absolute inset-y-0 right-5 items-center pr-3"
  }, /*#__PURE__*/React$1.createElement(Append, null))), helpText !== '' || error !== '' ? /*#__PURE__*/React$1.createElement("span", {
    "class": "text-sm transition-colors ".concat(state === 'error' ? 'text-red-500' : 'text-gray-500 dark:text-gray-400')
  }, state === 'error' ? error : helpText) : null);
};

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  action: PropTypes.object,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  error: PropTypes.string,
  state: PropTypes.oneOf(['', 'saving', 'error', 'saved']),
  wrapperClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  labelClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  selectClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
};
Select.defaultProps = {
  error: '',
  state: '',
  label: '',
  helpText: '',
  wrapperClassName: 'mb-6',
  labelClassName: '',
  selectClassName: ''
};var _excluded$a = ["UI", "setUI"],
    _excluded2 = ["children", "className", "innerRef", "color", "icon", "name", "badge", "show", "route"];

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DropdownContext = /*#__PURE__*/React$1.createContext({});

var NavDropdown = function NavDropdown(_ref) {
  var UI = _ref.UI,
      setUI = _ref.setUI,
      props = _objectWithoutProperties(_ref, _excluded$a);

  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      icon = props.icon,
      name = props.name,
      badge = props.badge,
      show = props.show,
      route = props.route;
      _objectWithoutProperties(props, _excluded2);

  var ref = /*#__PURE__*/createRef();
  innerRef && innerRef(ref);

  if (UI.navigation === undefined) {
    return null;
  }

  var _UI$navigation = UI.navigation,
      dropdownMode = _UI$navigation.dropdownMode,
      openDropdown = _UI$navigation.openDropdown;

  var _useState = useState(show),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  useEffect(function () {
    setIsOpen(show);
  }, [show]);
  useEffect(function () {
    !dropdownMode && (!openDropdown || !ref.current.contains(openDropdown)) && setIsOpen(false);
  }, [openDropdown]);

  var toggle = function toggle(e) {
    e.preventDefault();

    if (!dropdownMode && UI.navigation !== undefined) {
      UI.navigation.openDropdown = isOpen ? ref.current.parentNode.closest('.nav-dropdown') : ref.current;
      setUI(_objectSpread$4({}, UI));
    }

    setIsOpen(!isOpen);
  };

  var path = '';

  try {
    path = useLocation().pathname;
  } catch (e) {
    console.warn(e);
  }

  useEffect(function () {
    if (dropdownMode === 'close') setIsOpen(false);else if (dropdownMode === 'closeInactive' && route) setIsOpen(path.includes(route));else if ((!dropdownMode || dropdownMode !== 'noAction') && !isOpen && route) setIsOpen(path.includes(route));
  }, [path]);
  var linkClasses = classNames('flex', 'items-center', 'py-2', 'transition-colors', 'duration-200', 'focus:outline-none', 'hover:bg-gray-100', 'dark:hover:bg-gray-600', color ? "text-".concat(color, "-600 hover:text-").concat(color, "-800 dark:text-").concat(color, "-400 dark:hover:text-").concat(color, "-100") : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white', isOpen ? color ? "text-".concat(color, "-800 bg-gray-100 dark:text-").concat(color, "-100 dark:bg-gray-600 rounded-t-lg") : 'text-gray-800 bg-gray-100 dark:text-white dark:bg-gray-600 rounded-t-lg' : 'rounded-lg');
  var dropIcon = isOpen ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>';
  return /*#__PURE__*/React$1.createElement("li", {
    className: classNames(className, 'mb-2'),
    ref: ref
  }, /*#__PURE__*/React$1.createElement("a", {
    href: "#",
    className: linkClasses,
    tabIndex: "0",
    onClick: toggle,
    "aria-label": "menu dropdown"
  }, icon && /*#__PURE__*/React$1.createElement(Icon, {
    icon: icon,
    className: "h-5 w-10"
  }), /*#__PURE__*/React$1.createElement("span", {
    className: "font-medium text-sm"
  }, name), badge && /*#__PURE__*/React$1.createElement(Badge, _objectSpread$4(_objectSpread$4({}, badge), {}, {
    text: null
  }), badge.text), /*#__PURE__*/React$1.createElement(Icon, {
    icon: dropIcon,
    className: "ml-auto h-5 w-5"
  })), /*#__PURE__*/React$1.createElement("ul", {
    className: classNames(isOpen ? 'block py-1 bg-gray-100 dark:bg-gray-600 rounded-b-lg' : 'hidden')
  }, /*#__PURE__*/React$1.createElement(DropdownContext.Provider, {
    value: {
      isOpen: isOpen
    }
  }, children)));
};

var NavDropdown$1 = withWebApps(NavDropdown);var _excluded$9 = ["className", "innerRef", "name", "icon", "badge", "addLinkClass", "label", "color"];

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var NavChild = function NavChild(props) {
  var className = props.className,
      innerRef = props.innerRef,
      name = props.name,
      icon = props.icon,
      badge = props.badge;
      props.addLinkClass;
      props.label;
      var color = props.color,
      rest = _objectWithoutProperties(props, _excluded$9);

  var _useContext = useContext(DropdownContext),
      isOpen = _useContext.isOpen;

  var linkClasses = classNames('flex', 'items-center', 'p-2', 'px-4', 'mb-1', 'transition-colors', 'duration-200', 'focus:outline-none', 'hover:font-medium', 'hover:bg-gray-200', 'dark:hover:bg-gray-900', color ? "text-".concat(color, "-600 hover:text-").concat(color, "-900 dark:text-").concat(color, "-400 dark:hover:text-").concat(color, "-100") : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white');
  var routerLinkProps = rest.to && {
    exact: true,
    activeClassName: classNames(color ? "font-medium text-".concat(color, "-900 dark:text-").concat(color, "-100") : 'font-medium text-gray-900 dark:text-white')
  };
  return /*#__PURE__*/React$1.createElement("li", {
    className: className,
    ref: innerRef
  }, /*#__PURE__*/React$1.createElement(Link, _extends({
    className: linkClasses
  }, routerLinkProps, rest, {
    tabIndex: isOpen === false ? -1 : 0
  }), icon && /*#__PURE__*/React$1.createElement(Icon, {
    className: "h-5 w-5 mr-4",
    icon: icon
  }), /*#__PURE__*/React$1.createElement("span", {
    className: "text-sm"
  }, name), badge && /*#__PURE__*/React$1.createElement(Badge, _objectSpread$3(_objectSpread$3({}, badge), {}, {
    text: null
  }), badge.text)));
};var _excluded$8 = ["className", "innerRef", "name", "icon", "badge", "addLinkClass", "label", "color"];

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var NavItem = function NavItem(props) {
  var className = props.className,
      innerRef = props.innerRef,
      name = props.name,
      icon = props.icon,
      badge = props.badge;
      props.addLinkClass;
      props.label;
      var color = props.color,
      rest = _objectWithoutProperties(props, _excluded$8);

  var _useContext = useContext(DropdownContext),
      isOpen = _useContext.isOpen;

  var linkClasses = classNames('flex', 'items-center', 'py-2', 'mb-1', 'rounded-lg', 'transition-colors', 'duration-200', 'focus:outline-none', color ? "text-".concat(color, "-600 hover:text-").concat(color, "-800 dark:text-").concat(color, "-400 dark:hover:text-").concat(color, "-100 hover:bg-").concat(color, "-100 dark:hover:bg-").concat(color, "-600") : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600');
  var routerLinkProps = rest.to && {
    exact: true,
    activeClassName: classNames(color ? "text-".concat(color, "-800 bg-gray-100 dark:text-").concat(color, "-100 dark:bg-gray-600") : 'text-gray-800 bg-gray-100 dark:text-white dark:bg-gray-600')
  };
  return /*#__PURE__*/React$1.createElement("li", {
    className: className,
    ref: innerRef
  }, /*#__PURE__*/React$1.createElement(Link, _extends({
    className: linkClasses
  }, routerLinkProps, rest, {
    tabIndex: isOpen === false ? -1 : 0
  }), icon && /*#__PURE__*/React$1.createElement(Icon, {
    icon: icon,
    className: "h-5 w-10"
  }), /*#__PURE__*/React$1.createElement("span", {
    className: "font-medium text-sm"
  }, name), badge && /*#__PURE__*/React$1.createElement(Badge, _objectSpread$2(_objectSpread$2({}, badge), {}, {
    text: null
  }), badge.text)));
};var _excluded$7 = ["name", "className", "innerRef"];

var NavTitle = function NavTitle(props) {
  var name = props.name,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, _excluded$7);

  var classes = classNames('relative', 'my-6', 'h-px', 'bg-gray-600', 'dark:bg-gray-400', className);
  return /*#__PURE__*/React$1.createElement("li", _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }), /*#__PURE__*/React$1.createElement("div", {
    className: "absolute left-0 top-0 flex justify-center w-full -mt-2"
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "bg-white dark:bg-gray-800 px-4 text-xs text-gray-600 dark:text-gray-400 uppercase"
  }, name)));
};

NavTitle.propTypes = {
  name: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};var _excluded$6 = ["_tag", "_children"];

var CreateElement = function CreateElement(_ref) {
  var items = _ref.items,
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? {} : _ref$components;

  var renderItem = function renderItem(item, i) {
    var _tag = item._tag,
        _children = item._children,
        rest = _objectWithoutProperties(item, _excluded$6);

    var Tag = components[_tag] || _tag;
    var children = _children ? _children.map(function (child, i) {
      return _typeof(child) === 'object' ? renderItem(child, i) : child;
    }) : '';
    return /*#__PURE__*/React$1.createElement(Tag, _extends({
      key: Tag + i
    }, rest), children);
  };

  var generatedItems = useMemo(function () {
    return items && items.map(function (item, i) {
      return renderItem(item, i);
    });
  }, [JSON.stringify(items)]);
  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, generatedItems);
}; // items: PropTypes.oneOfType[PropTypes.array, PropTypes.object],


CreateElement.propTypes = {
  components: PropTypes.object
};function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var NavigationError = /*#__PURE__*/function (_Component) {
  _inherits$1(NavigationError, _Component);

  var _super = _createSuper$1(NavigationError);

  function NavigationError(props) {
    var _this;

    _classCallCheck$1(this, NavigationError);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false,
      info: '',
      error: ''
    };
    return _this;
  }

  _createClass$1(NavigationError, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        info: info,
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/React$1.createElement("ul", {
          className: "px-4 my-auto"
        }, /*#__PURE__*/React$1.createElement("li", {
          className: "w-full text-center p-2 rounded-lg transition-colors duration-200 focus:outline-none text-gray-600 dark:text-gray-400"
        }, "Failed to load navigation."), /*#__PURE__*/React$1.createElement("li", {
          className: "w-full text-center p-2 rounded-lg transition-colors duration-200 focus:outline-none text-gray-600 dark:text-gray-400"
        }, this.state.error.toString()), /*#__PURE__*/React$1.createElement("li", null, /*#__PURE__*/React$1.createElement("button", {
          className: "w-full text-center p-2 rounded-lg transition-colors duration-200 focus:outline-none text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-100 hover:bg-red-100 dark:hover:bg-red-600",
          onClick: this.props.retry
        }, "Click here to try again.")));
      }

      return this.props.children;
    }
  }]);

  return NavigationError;
}(Component);var _excluded$5 = ["loadNavigation", "UI", "setUI"];

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SidebarWrapper = function SidebarWrapper(_ref) {
  var loadNavigation = _ref.loadNavigation,
      UI = _ref.UI,
      setUI = _ref.setUI,
      props = _objectWithoutProperties(_ref, _excluded$5);

  var children = props.children,
      dropdownMode = props.dropdownMode;
  useEffect(function () {
    if (UI !== undefined) {
      UI.navigation = {
        dropdownMode: dropdownMode,
        openDropdown: ''
      };
      setUI(_objectSpread$1({}, UI));
    }
  }, [dropdownMode]);
  useEffect(function () {
    if (UI.navigation === undefined) {
      UI.navigation = {
        dropdownMode: dropdownMode,
        openDropdown: ''
      };
      setUI(_objectSpread$1({}, UI));
    }
  }, [UI]);

  var _useState = useState('hidden'),
      _useState2 = _slicedToArray(_useState, 2),
      collapseShow = _useState2[0],
      setCollapseShow = _useState2[1];

  var toggle = function toggle() {
    setCollapseShow(collapseShow === 'hidden' ? '' : 'hidden');
  };

  var isRtl = getComputedStyle(document.querySelector('html')).direction === 'rtl';
  return /*#__PURE__*/React$1.createElement("nav", {
    className: "flex flex-wrap items-center relative z-50 shadow-xl bg-white dark:bg-gray-800 md:flex-col md:w-72 md:h-screen md:border-r border-transparent dark:border-gray-600"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
  }, /*#__PURE__*/React$1.createElement("button", {
    className: "cursor-pointer text-black dark:text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent outline-none",
    type: "button",
    onClick: toggle
  }, /*#__PURE__*/React$1.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h16"
  }))), /*#__PURE__*/React$1.createElement("div", {
    className: "flex flex-none items-center justify-center md:h-24 py-2 md:py-0 mx-auto text-gray-600 dark:text-gray-300"
  }, /*#__PURE__*/React$1.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    className: "h-10 text-".concat(UI.theme, "-600 dark:text-").concat(UI.theme, "-500")
  }, /*#__PURE__*/React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
  })), /*#__PURE__*/React$1.createElement("span", {
    className: "ml-4 text-2xl font-bold"
  }, "WebApps")), /*#__PURE__*/React$1.createElement(NavigationError, {
    retry: loadNavigation
  }, /*#__PURE__*/React$1.createElement(Scrollbar, {
    settings: {
      suppressScrollX: !isRtl
    },
    tag: "ul",
    className: "md:my-5 md:px-4 md:flex md:flex-col md:flex-grow md:relative md:top-0 md:left-0 md:right-0 md:p-0 bg-white dark:bg-gray-800 absolute top-14 left-2 right-2 p-2 z-40 overflow-y-auto overflow-x-hidden h-auto flex-1 rounded-b ".concat(collapseShow)
  }, children))));
};

SidebarWrapper.propTypes = {
  dropdownMode: PropTypes.oneOf(['', 'openActive', 'close', 'closeInactive', 'noAction'])
};
SidebarWrapper.defaultProps = {
  dropdownMode: 'closeInactive'
};
var SidebarWrapper$1 = withWebApps(SidebarWrapper);var _excluded$4 = ["navigation"];

var Sidebar = function Sidebar(_ref) {
  var navigation = _ref.navigation,
      props = _objectWithoutProperties(_ref, _excluded$4);

  useEffect(function () {
    if (navigation.menu !== null && navigation.menu !== undefined) {
      if (navigation.menu.error) {
        throw new Error(navigation.menu.message);
      }
    }
  }, [navigation]);
  return /*#__PURE__*/React$1.createElement(SidebarWrapper$1, props, navigation.menu !== null && navigation.menu !== undefined && !navigation.menu.error ? /*#__PURE__*/React$1.createElement(CreateElement, {
    items: navigation.menu,
    components: {
      NavChild: NavChild,
      NavDropdown: NavDropdown$1,
      NavItem: NavItem,
      NavTitle: NavTitle
    }
  }) : null);
};

var Sidebar$1 = withWebApps(Sidebar);var Switch = function Switch(props) {
  var id = props.id,
      name = props.name,
      label = props.label,
      helpText = props.helpText,
      error = props.error,
      state = props.state,
      checked = props.checked,
      disabled = props.disabled,
      onChange = props.onChange,
      className = props.className;

  var _useContext = useContext(WebAppsContext),
      UI = _useContext.UI;

  var classes = classNames('outline-none', 'focus:ring-0', 'focus:ring-offset-0', 'focus:outline-none', 'right-4', 'checked:right-0', 'duration-200', 'ease-in', 'absolute', 'block', 'w-6', 'h-6', 'rounded-full', 'bg-white', 'border-2', 'appearance-none', 'transition-colours', 'duration-500', disabled ? 'cursor-not-allowed' : 'cursor-pointer', checked ? "border-".concat(UI.theme, "-600 dark:border-").concat(UI.theme, "-500") : 'border-gray-300 dark:border-gray-700', state === 'error' ? 'border-red-500' : '', state === 'saved' ? 'border-green-500' : '', state === 'saving' ? 'border-orange-500' : '');
  var labelClasses = classNames('block', 'overflow-hidden', 'h-6', 'rounded-full', 'transition-colours', 'duration-500', disabled ? 'cursor-not-allowed' : 'cursor-pointer', !checked && state === '' ? 'bg-gray-300 dark:bg-gray-700' : '', checked && state === '' ? "bg-".concat(UI.theme, "-600 dark:bg-").concat(UI.theme, "-500") : '', state === 'error' ? 'bg-red-500' : '', state === 'saved' ? 'bg-green-500' : '', state === 'saving' ? 'bg-orange-500' : '');
  return /*#__PURE__*/React$1.createElement("div", {
    className: className
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "relative inline-block w-10 mr-2 align-middle select-none"
  }, /*#__PURE__*/React$1.createElement("input", {
    type: "checkbox",
    id: id,
    name: name,
    className: classes,
    checked: checked,
    disabled: disabled,
    onChange: onChange
  }), /*#__PURE__*/React$1.createElement("label", {
    htmlFor: id,
    className: labelClasses
  })), /*#__PURE__*/React$1.createElement("label", {
    htmlFor: id,
    className: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
  }, label), helpText !== '' || error !== '' ? /*#__PURE__*/React$1.createElement("p", {
    className: "text-sm transition-colors ".concat(state === 'error' ? 'text-red-500' : 'text-gray-500 dark:text-gray-400')
  }, state === 'error' ? error : helpText) : null);
};

Switch.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  error: PropTypes.string,
  state: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
};
Switch.defaultProps = {
  error: '',
  state: '',
  label: '',
  helpText: '',
  disabled: false,
  className: 'w-full'
};var initials_1 = initials$2;

// extend public API
initials$2.addTo = addInitialsTo;
initials$2.parse = parse$2;
initials$2.find = initials$2;

// defaults
var defaultLength = 2;

// there is no support for look-behinds in JS, and the \b selector
// doesn't work with diacritics. So we maintain a blacklist of
// "non letters", that we use later to build our regex.
var nonLetters = ' -\\/:-@\\[-`\\{-\\~';
// regex patterns
var uppercaseLettersOnlyPattern = /^[A-Z]+$/;
var initialsInNamePattern = /\(([^\)]+)\)/;
var nameIsEmailPattern = /^[^\s]+@[^\s]+$/;
var findDomainInEmailPattern = /@[^\s]+/;
var findEmailPattern = /[\w\._-]+@[\w\.-]+[\w]/g;

// match everything that is a "non letter" (see above)
// followed by all but a "non letter".
// Expl: "Jörg Jäger-Franke" => ["J", " J", "-F"]
var findFirstLettersOfWordsPattern = new RegExp('(^|[' + nonLetters + '])[^' + nonLetters + ']', 'g');
var findAllNonCharactersPattern = new RegExp('[' + nonLetters + ']', 'g');

// PUBLIC API METHODS

//
// initials allows to be used with either a string or an array of strings
//
function initials$2 (nameOrNames, options) {
  if (!nameOrNames) return ''
  if (typeof nameOrNames === 'string') return initialsForSingleName(nameOrNames, normalize$1(options))
  return initialsForMultipleNames(nameOrNames, normalize$1(options))
}

//
// finds initials in a name and adds them to the right side
//
function addInitialsTo (nameOrNames, options) {
  if (!nameOrNames) return ''
  if (typeof nameOrNames === 'string') return addInitialsToSingleName(nameOrNames, normalize$1(options))
  return addInitialsToMultipleNames(nameOrNames, normalize$1(options))
}

//
// extract name, initials, email
//
function parse$2 (nameOrNames, options) {
  if (!nameOrNames) return {}
  if (typeof nameOrNames === 'string') return parseSingleName(nameOrNames, normalize$1(options))
  return parseMultipleNames(nameOrNames, normalize$1(options))
}

// HELPER METHODS

//
// Find initials in a single given name string
//
function initialsForSingleName (name, options) {
  var matches;
  var result;
  var initials;
  var length = options.length || 2;

  initials = findPreferredInitials(name, options);
  if (initials) return initials

  name = cleanupName(name);
  if (!name) return ''

  // there is no support for look-behinds in JS, and the \b selector
  // doesn't work with diacritics. So we match everything that is a
  // "non character" followed by all but a "non character". To fix
  // that, we map the results to its last character.
  // Expl: "Jörg Jäger" => ["J", " J"] => ["J", "J"]
  matches = name.match(findFirstLettersOfWordsPattern).map(function (match) {
    return match[match.length - 1]
  });

  if (matches.length < 2) {
    if (name.length > length) {
      return name.substr(0, length)
    } else {
      return name
    }
  } else {
    result = matches.join('');
  }

  if (result.length >= length) {
    return result
  }

  // This is where it gets complicated.
  // Let's say we're in initials('John Doe', 3), so up to here
  // we have `result === 'JD'`, but what we want is `result === `JDo`.

  // First, we calculate all remaining options that we have
  var possibleInitials = getPossibleInitialsForName(name);
  var option;

  // then we return the first option that has the required length
  for (var i = 0; i < possibleInitials.length; i++) {
    if (possibleInitials[i].length >= length) return possibleInitials[i]
  }
  // if that didn't work, we return the last possible option
  return option
}

//
//
//
function initialsForMultipleNames (names, options) {
  var optionsForNames = [];
  var optionsCountForNames;
  var map = {};
  var duplicatesMap = {};
  var initialsForNamesMap = {};
  var initials;
  var possibleInitials;
  var length = options.length || 2;

  // get all possible initials for all names for given length
  names.forEach(function (name) {
    // normalize
    if (!name) name = '';

    // known name? Gets same initials, stop here
    if (initialsForNamesMap[name]) return

    // too short to extract initials from? Use name as initials.
    if (name.length < length) {
      initialsForNamesMap[name] = [name];
      return
    }

    // preferred initials like (JD)? Use these
    initials = findPreferredInitials(name, options);
    if (initials) {
      map[initials] = 1;
      initialsForNamesMap[name] = [initials];
      return
    }

    // return all possible initials for given length
    possibleInitials = getPossibleInitialsForName(name).filter(function (initials) {
      if (initials.length !== length) return false
      if (map[initials]) duplicatesMap[initials] = 1;
      map[initials] = 1;
      return true
    });

    initialsForNamesMap[name] = possibleInitials;
  });

  // remove duplicates
  var keys = [];
  for (var k in initialsForNamesMap) {
    keys.unshift(k);
  }
  for (var c = keys.length, n = 0; n < c; n++) {
    possibleInitials = initialsForNamesMap[keys[n]];
    optionsForNames.push(possibleInitials);

    for (var i = 0; i < possibleInitials.length; i++) {
      if (duplicatesMap[possibleInitials[i]] > 0) {
        duplicatesMap[possibleInitials[i]]--;
        possibleInitials.splice(i, 1);
      }
    }
  }

  // make sure we still have options for every name
  optionsCountForNames = optionsForNames.map(function (options) { return options.length });

  // if names were empty, optionsCountForNames is empty. In that case stop here
  if (optionsCountForNames.length === 0) return names

  if (Math.min.apply(null, optionsCountForNames) === 0) {
    options.length++;
    return initialsForMultipleNames(names, options)
  }

  // if we do, return the first option for each
  return names.map(function (name) { return initialsForNamesMap[name][0] })
}

//
//
//
function addInitialsToSingleName (name, options) {
  var parts = parseSingleName(name, options);
  return format(parts)
}

//
//
//
function addInitialsToMultipleNames (names, options) {
  return parseMultipleNames(names, options).map(format)
}

//
//
//
function parseSingleName (name, options) {
  var initials;
  var email;
  var matches;
  var parts = {};

  if (!name) return {}

  // are initials part of the name?
  initials = findPreferredInitials(name, options);
  if (initials) {
    // if yes, remove it from name
    name = name.replace(uppercaseLettersOnlyPattern, '');
    name = name.replace(initialsInNamePattern, '');
  }

  // use preferred initials if passed
  if (options.initials) initials = options.initials;

  // if no initials found yet, extract initials from name
  if (!initials) initials = initialsForSingleName(name, options);

  // is there an email in the name?
  matches = name.match(findEmailPattern);
  if (matches != null) email = matches.pop();
  if (email) {
    // if yes, remove it from name
    name = name.replace(email, '');

    // if the email and the name are the same, initials can not be rendered
    // the initials method uses email for rendering just when the name is false
    // see https://github.com/gr2m/initials/issues/7 for more details
    if (name.trim() === '<' + email + '>') {
      // set the name to undefined
      name = '';

      // fire up the initials again with the email
      if (!initials) {
        initials = initialsForSingleName(email, options);
      }
    }
  }

  // clean up the rest
  name = name.replace(findAllNonCharactersPattern, ' ').trim();

  // do only return what's present
  if (name) parts.name = name;
  if (initials) parts.initials = initials;
  if (email) parts.email = email;

  return parts
}

//
//
//
function parseMultipleNames (names, options) {
  var initialsArray = initialsForMultipleNames(names, options);

  return names.map(function (name, i) {
    options.existing[name] = initialsArray[i];
    return parseSingleName(name, options)
  })
}

//
//
//
function format (parts) {

  // neither name nor email: return initials
  if (!parts.name && !parts.email) return parts.initials

  // no email: return name with initials
  if (!parts.email) return parts.name + ' (' + parts.initials + ')'

  // no name: return email with initials
  if (!parts.name) return parts.email + ' (' + parts.initials + ')'

  // return name with initials & name
  return parts.name + ' (' + parts.initials + ') <' + parts.email + '>'
}

//
//
//
function cleanupName (name) {
  // in case the name is an email address, remove the @xx.yy part
  // otherwise remove an eventual email address from name
  if (nameIsEmailPattern.test(name)) {
    name = name.replace(findDomainInEmailPattern, '');
  } else {
    name = name.replace(findEmailPattern, '');
  }

  // replace all non characters with ' ' & trim
  name = name.replace(findAllNonCharactersPattern, ' ').trim();

  return name
}

//
//
//
function findPreferredInitials (name, options) {
  var matches;

  // if preferred initials passed for current name
  if (options.existing[name]) return options.existing[name]

  // if the name contains only upcase letters, let's take it as the initials as well
  if (uppercaseLettersOnlyPattern.test(name)) {
    return name
  }

  // are the initials part of the given name, e.g. »Eddie Murphie (em)«?
  matches = name.match(initialsInNamePattern);

  // if yes, return them
  if (matches != null) {
    return matches.pop()
  }
}

//
// e.g. for John Doe:
// - JDo
// - JDoe
// - JoDoe
// - JohDoe
// - JohnDoe
//
var cache = {};
function getPossibleInitialsForName (name) {
  var parts;
  var partsPossibilities;
  var options = [];

  name = cleanupName(name);

  if (cache[name]) {
    return cache[name].slice(0) // return copy
  }

  // split names into parts
  // 'John Doe' => ['Doe', 'John']
  parts = name.split(' ');

  // map parts to all its possible initials
  // 'John' => ['J', 'Jo', 'Joh', 'John']
  partsPossibilities = parts.map(getPossibleInitialsForWord);

  options = combineAll(partsPossibilities);

  // sort options, shortest first
  options = options.sort(function (a, b) {
    return a.length - b.length || options.indexOf(a) - options.indexOf(b)
  });

  // cache for future
  cache[name] = options;

  // return options
  return options.slice(0)
}

//
//
//
function combineAll (array) {
  var current = array.shift();
  var temp;
  var results;
  if (array.length > 0) {
    results = [];
    temp = combineAll(array);
    current.forEach(function (value1) {
      temp.forEach(function (value2) {
        results.push(value1 + value2);
      });
    });
    return results
  } else {
    return current
  }
}

//
//
//
function getPossibleInitialsForWord (word) {
  var options = [];
  while (word.length) {
    options.unshift(word);
    word = word.substr(0, word.length - 1);
  }
  return options
}

//
// make sure that options is always an object, and that
// * options.length is a number and >= defaultLength
// * existing is set and an object
//
function normalize$1 (options) {
  if (!options) options = {length: defaultLength};
  if (typeof options === 'number') options = {length: options};

  options.length = Math.max(options.length || 0, defaultLength);
  options.existing = options.existing || {};

  return options
}var initials$1 = initials_1;var addPx$1 = function(num){
    if (!isNaN(num)){
        return num.toString(10)+'px';
    }
    return num;
};var hexToRgb$1 = function hexToRgb (hex) {

  if (hex.charAt && hex.charAt(0) === '#') {
    hex = removeHash(hex);
  }

  if (hex.length === 3) {
    hex = expand(hex);
  }

  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return [r, g, b]
};

function removeHash (hex) {

  var arr = hex.split('');
  arr.shift();
  return arr.join('')
}

function expand (hex) {

  return hex
    .split('')
    .reduce(function (accum, value) {

      return accum.concat([value, value])
    }, [])
    .join('')
}var hexToRgb = hexToRgb$1;

var contrast$1 = function contrast (hex) {
  var rgb = hexToRgb(hex);
  var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);

  return (o <= 180) ? 'dark' : 'light';
};var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = React$1;
var initials = initials$1;
var addPx = addPx$1;
var contrast = contrast$1;

// from https://flatuicolors.com/
var defaultColors = ['#2ecc71', // emerald
'#3498db', // peter river
'#8e44ad', // wisteria
'#e67e22', // carrot
'#e74c3c', // alizarin
'#1abc9c', // turquoise
'#2c3e50'];

function sumChars(str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }

  return sum;
}

var UserAvatar = function (_React$Component) {
  _inherits(UserAvatar, _React$Component);

  function UserAvatar() {
    _classCallCheck(this, UserAvatar);

    return _possibleConstructorReturn(this, (UserAvatar.__proto__ || Object.getPrototypeOf(UserAvatar)).apply(this, arguments));
  }

  _createClass(UserAvatar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$borderRadius = _props.borderRadius,
          borderRadius = _props$borderRadius === undefined ? '100%' : _props$borderRadius,
          src = _props.src,
          srcset = _props.srcset,
          name = _props.name,
          color = _props.color,
          _props$colors = _props.colors,
          colors = _props$colors === undefined ? defaultColors : _props$colors,
          size = _props.size,
          style = _props.style;
          _props.onClick;
          var className = _props.className;


      if (!name) throw new Error('UserAvatar requires a name');

      var abbr = initials(name);
      size = addPx(size);

      var imageStyle = {
        display: 'block',
        borderRadius: borderRadius
      };

      var innerStyle = {
        lineHeight: size,
        textAlign: 'center',
        borderRadius: borderRadius
      };

      if (size) {
        imageStyle.width = innerStyle.width = innerStyle.maxWidth = size;
        imageStyle.height = innerStyle.height = innerStyle.maxHeight = size;
      }

      var inner = void 0,
          classes = [className, 'UserAvatar'];
      if (src || srcset) {
        inner = React.createElement('img', { className: 'UserAvatar--img', style: imageStyle, src: src, srcSet: srcset, alt: name });
      } else {
        var background = void 0;
        if (color) {
          background = color;
        } else {
          // pick a deterministic color from the list
          var i = sumChars(name) % colors.length;
          background = colors[i];
        }

        innerStyle.backgroundColor = background;

        inner = abbr;
      }

      if (innerStyle.backgroundColor) {
        classes.push('UserAvatar--' + contrast(innerStyle.backgroundColor));
      }

      return React.createElement(
        'div',
        { 'aria-label': name, className: classes.join(' '), style: style },
        React.createElement(
          'div',
          { className: 'UserAvatar--inner', style: innerStyle },
          inner
        )
      );
    }
  }]);

  return UserAvatar;
}(React.Component);

var userAvatar = UserAvatar;var _excluded$3 = ["users", "select", "photos", "placeholder", "noMatchesText", "limit"];

var UserSuggest = function UserSuggest(_ref) {
  var users = _ref.users,
      select = _ref.select,
      photos = _ref.photos,
      placeholder = _ref.placeholder,
      noMatchesText = _ref.noMatchesText,
      limit = _ref.limit,
      props = _objectWithoutProperties(_ref, _excluded$3);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      activeUser = _useState2[0],
      setActiveUser = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      filteredUsers = _useState4[0],
      setFilteredUsers = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showUsers = _useState6[0],
      setShowUsers = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      userInput = _useState8[0],
      setUserInput = _useState8[1];

  var onChange = function onChange(e) {
    var userInput = e.currentTarget.value;

    var _filteredUsers = users.filter(function (user) {
      return user.username.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
    });

    setActiveUser(0);
    setFilteredUsers(_filteredUsers);
    setShowUsers(true);
    setUserInput(e.currentTarget.value);
  };

  var onClick = function onClick(e) {
    e.stopPropagation();
    setUserInput(filteredUsers[e.currentTarget.dataset.key].username);
    select(filteredUsers[e.currentTarget.dataset.key]);
    setActiveUser(0);
    setFilteredUsers([]);
    setShowUsers(false);
  };

  var onKeyDown = function onKeyDown(e) {
    if (e.keyCode === 13) {
      setUserInput(filteredUsers[activeUser].username);
      select(filteredUsers[activeUser]);
      setShowUsers(false);
      setActiveUser(0);
    } else if (e.keyCode === 38) {
      if (activeUser === 0) return;
      setActiveUser(activeUser - 1);
    } else if (e.keyCode === 40) {
      if (activeUser + 1 === filteredUsers.length) return;
      setActiveUser(activeUser + 1);
    }
  };

  var usersListComponent;

  if (showUsers && userInput) {
    if (filteredUsers.length) {
      var count = 1;
      usersListComponent = /*#__PURE__*/React$1.createElement("ul", {
        className: "absolute inset-x-0 bg-white dark:bg-gray-700 rounded-b border border-gray-200 dark:border-gray-600 text-gray-900 text-sm font-medium dark:text-white cursor-pointer"
      }, filteredUsers.map(function (user, index) {
        if (limit === 0 || count <= limit) {
          var className = "flex flex-row gap-x-2 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-900";

          if (index === activeUser) {
            className = "flex flex-row gap-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900";
          }

          count = count + 1;
          return /*#__PURE__*/React$1.createElement("li", {
            className: className,
            key: user.id,
            "data-key": index,
            onClick: onClick
          }, photos ? /*#__PURE__*/React$1.createElement(userAvatar, {
            size: "18",
            name: user.name,
            src: "/user/".concat(user.id, "/photo")
          }) : null, /*#__PURE__*/React$1.createElement("strong", null, user.name), " ", /*#__PURE__*/React$1.createElement("em", null, "(", user.email, ")"));
        }
      }));
    } else {
      usersListComponent = /*#__PURE__*/React$1.createElement("ul", {
        className: "absolute inset-x-0 bg-white dark:bg-gray-700 rounded-b border border-gray-200 dark:border-gray-600 text-gray-900 text-sm font-medium dark:text-white cursor-pointer"
      }, /*#__PURE__*/React$1.createElement("li", {
        className: "px-4 py-2 text-center"
      }, /*#__PURE__*/React$1.createElement("em", null, noMatchesText)));
    }
  }

  return /*#__PURE__*/React$1.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React$1.createElement(Input, _extends({
    type: "text",
    onChange: onChange,
    onKeyDown: onKeyDown,
    value: userInput,
    placeholder: placeholder,
    autoComplete: "no"
  }, props)), usersListComponent);
};

UserSuggest.propTypes = {
  users: PropTypes.instanceOf(Array),
  select: PropTypes.instanceOf(Function),
  photos: PropTypes.bool,
  placeholder: PropTypes.string,
  noMatchesText: PropTypes.string,
  limit: PropTypes.number
};
UserSuggest.defaultProps = {
  users: [],
  select: function select() {
    return true;
  },
  photos: true,
  placeholder: 'Start typing a username...',
  noMatchesText: 'No matching users found!',
  limit: 0
};const protocols = ['http', 'https', 'mailto', 'tel'];

/**
 * @param {string} uri
 * @returns {string}
 */
function uriTransformer(uri) {
  const url = (uri || '').trim();
  const first = url.charAt(0);

  if (first === '#' || first === '/') {
    return url
  }

  const colon = url.indexOf(':');
  if (colon === -1) {
    return url
  }

  let index = -1;

  while (++index < protocols.length) {
    const protocol = protocols[index];

    if (
      colon === protocol.length &&
      url.slice(0, protocol.length).toLowerCase() === protocol
    ) {
      return url
    }
  }

  index = url.indexOf('?');
  if (index !== -1 && colon > index) {
    return url
  }

  index = url.indexOf('#');
  if (index !== -1 && colon > index) {
    return url
  }

  // eslint-disable-next-line no-script-url
  return 'javascript:void(0)'
}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

var isBuffer = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
};var own$9 = {}.hasOwnProperty;

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 */

/**
 * Stringify one point, a position (start and end points), or a node’s
 * positional information.
 *
 * @param {Node|Position|Point} [value]
 * @returns {string}
 */
function stringifyPosition(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return ''
  }

  // Node.
  if (own$9.call(value, 'position') || own$9.call(value, 'type')) {
    // @ts-ignore looks like a node.
    return position(value.position)
  }

  // Position.
  if (own$9.call(value, 'start') || own$9.call(value, 'end')) {
    // @ts-ignore looks like a position.
    return position(value)
  }

  // Point.
  if (own$9.call(value, 'line') || own$9.call(value, 'column')) {
    // @ts-ignore looks like a point.
    return point$1(value)
  }

  // ?
  return ''
}

/**
 * @param {Point} point
 * @returns {string}
 */
function point$1(point) {
  return index$1(point && point.line) + ':' + index$1(point && point.column)
}

/**
 * @param {Position} pos
 * @returns {string}
 */
function position(pos) {
  return point$1(pos && pos.start) + '-' + point$1(pos && pos.end)
}

/**
 * @param {number} value
 * @returns {number}
 */
function index$1(value) {
  return value && typeof value === 'number' ? value : 1
}/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 */

class VFileMessage extends Error {
  /**
   * Constructor of a message for `reason` at `place` from `origin`.
   * When an error is passed in as `reason`, copies the `stack`.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   */
  constructor(reason, place, origin) {
    /** @type {[string?, string?]} */
    var parts = [null, null];
    /** @type {Position} */
    var position = {
      start: {line: null, column: null},
      end: {line: null, column: null}
    };
    /** @type {number} */
    var index;

    super();

    if (typeof place === 'string') {
      origin = place;
      place = null;
    }

    if (typeof origin === 'string') {
      index = origin.indexOf(':');

      if (index === -1) {
        parts[1] = origin;
      } else {
        parts[0] = origin.slice(0, index);
        parts[1] = origin.slice(index + 1);
      }
    }

    if (place) {
      // Node.
      if ('type' in place || 'position' in place) {
        if (place.position) {
          position = place.position;
        }
      }
      // Position.
      else if ('start' in place || 'end' in place) {
        // @ts-ignore Looks like a position.
        position = place;
      }
      // Point.
      else if ('line' in place || 'column' in place) {
        // @ts-ignore Looks like a point.
        position.start = place;
      }
    }

    // Fields from `Error`
    this.name = stringifyPosition(place) || '1:1';
    this.message = typeof reason === 'object' ? reason.message : reason;
    this.stack = typeof reason === 'object' ? reason.stack : '';

    /**
     * Reason for message.
     * @type {string}
     */
    this.reason = this.message;
    /**
     * Starting line of error.
     * @type {number?}
     */
    this.line = position.start.line;
    /**
     * Starting column of error.
     * @type {number?}
     */
    this.column = position.start.column;
    /**
     * Namespace of warning.
     * @type {string?}
     */
    this.source = parts[0];
    /**
     * Category of message.
     * @type {string?}
     */
    this.ruleId = parts[1];
    /**
     * Full range information, when available.
     * Has start and end properties, both set to an object with line and column, set to number?.
     * @type {Position?}
     */
    this.position = position;

    // The following fields are “well known”.
    // Not standard.
    // Feel free to add other non-standard fields to your messages.

    /* eslint-disable no-unused-expressions */
    /**
     * You may add a file property with a path of a file (used throughout the VFile ecosystem).
     * @type {string?}
     */
    this.file;
    /**
     * If true, marks associated file as no longer processable.
     * @type {boolean?}
     */
    this.fatal;
    /**
     * You may add a url property with a link to documentation for the message.
     * @type {string?}
     */
    this.url;
    /**
     * You may add a note property with a long form description of the message (supported by vfile-reporter).
     * @type {string?}
     */
    this.note;
    /* eslint-enable no-unused-expressions */
  }
}

VFileMessage.prototype.file = '';
VFileMessage.prototype.name = '';
VFileMessage.prototype.reason = '';
VFileMessage.prototype.message = '';
VFileMessage.prototype.stack = '';
VFileMessage.prototype.fatal = null;
VFileMessage.prototype.column = null;
VFileMessage.prototype.line = null;
VFileMessage.prototype.source = null;
VFileMessage.prototype.ruleId = null;
VFileMessage.prototype.position = null;const proc = process$1;/**
 * @typedef URL
 * @property {string} hash
 * @property {string} host
 * @property {string} hostname
 * @property {string} href
 * @property {string} origin
 * @property {string} password
 * @property {string} pathname
 * @property {string} port
 * @property {string} protocol
 * @property {string} search
 * @property {any} searchParams
 * @property {string} username
 * @property {() => string} toString
 * @property {() => string} toJSON
 */

/**
 * @param {unknown} fileURLOrPath
 * @returns {fileURLOrPath is URL}
 */
// From: <https://github.com/nodejs/node/blob/fcf8ba4/lib/internal/url.js#L1501>
function isUrl(fileURLOrPath) {
  return (
    fileURLOrPath !== null &&
    typeof fileURLOrPath === 'object' &&
    // @ts-expect-error: indexable.
    fileURLOrPath.href &&
    // @ts-expect-error: indexable.
    fileURLOrPath.origin
  )
}/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 * @typedef {import('./minurl.shared.js').URL} URL
 * @typedef {import('..').VFileData} VFileData
 *
 * @typedef {'ascii'|'utf8'|'utf-8'|'utf16le'|'ucs2'|'ucs-2'|'base64'|'base64url'|'latin1'|'binary'|'hex'} BufferEncoding
 *   Encodings supported by the buffer class.
 *   This is a copy of the typing from Node, copied to prevent Node globals from
 *   being needed.
 *   Copied from: <https://github.com/DefinitelyTyped/DefinitelyTyped/blob/90a4ec8/types/node/buffer.d.ts#L170>
 *
 * @typedef {string|Uint8Array} VFileValue
 *   Contents of the file.
 *   Can either be text, or a Buffer like structure.
 *   This does not directly use type `Buffer`, because it can also be used in a
 *   browser context.
 *   Instead this leverages `Uint8Array` which is the base type for `Buffer`,
 *   and a native JavaScript construct.
 *
 * @typedef {VFileValue|VFileOptions|VFile|URL} VFileCompatible
 *   Things that can be passed to the constructor.
 *
 * @typedef VFileCoreOptions
 * @property {VFileValue} [value]
 * @property {string} [cwd]
 * @property {Array.<string>} [history]
 * @property {string|URL} [path]
 * @property {string} [basename]
 * @property {string} [stem]
 * @property {string} [extname]
 * @property {string} [dirname]
 * @property {VFileData} [data]
 *
 * @typedef {{[key: string]: unknown} & VFileCoreOptions} VFileOptions
 *   Configuration: a bunch of keys that will be shallow copied over to the new
 *   file.
 *
 * @typedef {Object.<string, unknown>} VFileReporterSettings
 * @typedef {<T = VFileReporterSettings>(files: VFile[], options: T) => string} VFileReporter
 */

// Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.
const order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];

class VFile {
  /**
   * Create a new virtual file.
   *
   * If `options` is `string` or `Buffer`, treats it as `{value: options}`.
   * If `options` is a `VFile`, shallow copies its data over to the new file.
   * All other given fields are set on the newly created `VFile`.
   *
   * Path related properties are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * It’s not possible to set either `dirname` or `extname` without setting
   * either `history`, `path`, `basename`, or `stem` as well.
   *
   * @param {VFileCompatible} [value]
   */
  constructor(value) {
    /** @type {VFileOptions} */
    let options;

    if (!value) {
      options = {};
    } else if (typeof value === 'string' || isBuffer(value)) {
      // @ts-expect-error Looks like a buffer.
      options = {value};
    } else if (isUrl(value)) {
      options = {path: value};
    } else {
      // @ts-expect-error Looks like file or options.
      options = value;
    }

    /**
     * Place to store custom information.
     * It’s OK to store custom data directly on the file, moving it to `data`
     * gives a little more privacy.
     * @type {VFileData}
     */
    this.data = {};

    /**
     * List of messages associated with the file.
     * @type {Array.<VFileMessage>}
     */
    this.messages = [];

    /**
     * List of file paths the file moved between.
     * @type {Array.<string>}
     */
    this.history = [];

    /**
     * Base of `path`.
     * Defaults to `process.cwd()` (`/` in browsers).
     * @type {string}
     */
    this.cwd = proc.cwd();

    /* eslint-disable no-unused-expressions */
    /**
     * Raw value.
     * @type {VFileValue}
     */
    this.value;

    // The below are non-standard, they are “well-known”.
    // As in, used in several tools.

    /**
     * Whether a file was saved to disk.
     * This is used by vfile reporters.
     * @type {boolean}
     */
    this.stored;

    /**
     * Sometimes files have a non-string representation.
     * This can be stored in the `result` field.
     * One example is when turning markdown into React nodes.
     * This is used by unified to store non-string results.
     * @type {unknown}
     */
    this.result;

    /**
     * Sometimes files have a source map associated with them.
     * This can be stored in the `map` field.
     * This should be a `RawSourceMap` type from the `source-map` module.
     * @type {unknown}
     */
    this.map;
    /* eslint-enable no-unused-expressions */

    // Set path related properties in the correct order.
    let index = -1;

    while (++index < order.length) {
      const prop = order[index];

      // Note: we specifically use `in` instead of `hasOwnProperty` to accept
      // `vfile`s too.
      if (prop in options && options[prop] !== undefined) {
        // @ts-expect-error: TS is confused by the different types for `history`.
        this[prop] = prop === 'history' ? [...options[prop]] : options[prop];
      }
    }

    /** @type {string} */
    let prop;

    // Set non-path related properties.
    for (prop in options) {
      // @ts-expect-error: fine to set other things.
      if (!order.includes(prop)) this[prop] = options[prop];
    }
  }

  /**
   * Access full path (`~/index.min.js`).
   *
   * @returns {string}
   */
  get path() {
    return this.history[this.history.length - 1]
  }

  /**
   * Set full path (`~/index.min.js`).
   * Cannot be nullified.
   *
   * @param {string|URL} path
   */
  set path(path) {
    if (isUrl(path)) {
      path = fileURLToPath(path);
    }

    assertNonEmpty(path, 'path');

    if (this.path !== path) {
      this.history.push(path);
    }
  }

  /**
   * Access parent path (`~`).
   */
  get dirname() {
    return typeof this.path === 'string' ? path.dirname(this.path) : undefined
  }

  /**
   * Set parent path (`~`).
   * Cannot be set if there's no `path` yet.
   */
  set dirname(dirname) {
    assertPath(this.basename, 'dirname');
    this.path = path.join(dirname || '', this.basename);
  }

  /**
   * Access basename (including extname) (`index.min.js`).
   */
  get basename() {
    return typeof this.path === 'string' ? path.basename(this.path) : undefined
  }

  /**
   * Set basename (`index.min.js`).
   * Cannot contain path separators.
   * Cannot be nullified either (use `file.path = file.dirname` instead).
   */
  set basename(basename) {
    assertNonEmpty(basename, 'basename');
    assertPart(basename, 'basename');
    this.path = path.join(this.dirname || '', basename);
  }

  /**
   * Access extname (including dot) (`.js`).
   */
  get extname() {
    return typeof this.path === 'string' ? path.extname(this.path) : undefined
  }

  /**
   * Set extname (including dot) (`.js`).
   * Cannot be set if there's no `path` yet and cannot contain path separators.
   */
  set extname(extname) {
    assertPart(extname, 'extname');
    assertPath(this.dirname, 'extname');

    if (extname) {
      if (extname.charCodeAt(0) !== 46 /* `.` */) {
        throw new Error('`extname` must start with `.`')
      }

      if (extname.includes('.', 1)) {
        throw new Error('`extname` cannot contain multiple dots')
      }
    }

    this.path = path.join(this.dirname, this.stem + (extname || ''));
  }

  /**
   * Access stem (w/o extname) (`index.min`).
   */
  get stem() {
    return typeof this.path === 'string'
      ? path.basename(this.path, this.extname)
      : undefined
  }

  /**
   * Set stem (w/o extname) (`index.min`).
   * Cannot be nullified, and cannot contain path separators.
   */
  set stem(stem) {
    assertNonEmpty(stem, 'stem');
    assertPart(stem, 'stem');
    this.path = path.join(this.dirname || '', stem + (this.extname || ''));
  }

  /**
   * Serialize the file.
   *
   * @param {BufferEncoding} [encoding='utf8'] If `file.value` is a buffer, `encoding` is used to serialize buffers.
   * @returns {string}
   */
  toString(encoding) {
    // @ts-expect-error string’s don’t accept the parameter, but buffers do.
    return (this.value || '').toString(encoding)
  }

  /**
   * Create a message and associates it w/ the file.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {VFileMessage}
   */
  message(reason, place, origin) {
    const message = new VFileMessage(reason, place, origin);

    if (this.path) {
      message.name = this.path + ':' + message.name;
      message.file = this.path;
    }

    message.fatal = false;

    this.messages.push(message);

    return message
  }

  /**
   * Info: create a message, associate it with the file, and mark the fatality
   * as `null`.
   * Calls `message()` internally.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {VFileMessage}
   */
  info(reason, place, origin) {
    const message = this.message(reason, place, origin);

    message.fatal = null;

    return message
  }

  /**
   * Fail: create a message, associate it with the file, mark the fatality as
   * `true`.
   * Note: fatal errors mean a file is no longer processable.
   * Calls `message()` internally.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {never}
   */
  fail(reason, place, origin) {
    const message = this.message(reason, place, origin);

    message.fatal = true;

    throw message
  }
}

/**
 * Assert that `part` is not a path (as in, does not contain `path.sep`).
 *
 * @param {string|undefined} part
 * @param {string} name
 * @returns {void}
 */
function assertPart(part, name) {
  if (part && part.includes(path.sep)) {
    throw new Error(
      '`' + name + '` cannot be a path: did not expect `' + path.sep + '`'
    )
  }
}

/**
 * Assert that `part` is not empty.
 *
 * @param {string|undefined} part
 * @param {string} name
 * @returns {asserts part is string}
 */
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty')
  }
}

/**
 * Assert `path` exists.
 *
 * @param {string|undefined} path
 * @param {string} name
 * @returns {asserts path is string}
 */
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too')
  }
}/**
 * Throw a given error.
 *
 * @param {Error|null|undefined} [error]
 *   Maybe error.
 * @returns {asserts error is null|undefined}
 */
function bail(error) {
  if (error) {
    throw error
  }
}var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject$1 = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

var extend = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject$1(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject$1(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};function isPlainObject(value) {
	if (Object.prototype.toString.call(value) !== '[object Object]') {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);
	return prototype === null || prototype === Object.prototype;
}/**
 * @typedef {(error?: Error|null|undefined, ...output: any[]) => void} Callback
 * @typedef {(...input: any[]) => any} Middleware
 *
 * @typedef {(...input: any[]) => void} Run Call all middleware.
 * @typedef {(fn: Middleware) => Pipeline} Use Add `fn` (middleware) to the list.
 * @typedef {{run: Run, use: Use}} Pipeline
 */

/**
 * Create new middleware.
 *
 * @returns {Pipeline}
 */
function trough() {
  /** @type {Middleware[]} */
  const fns = [];
  /** @type {Pipeline} */
  const pipeline = {run, use};

  return pipeline

  /** @type {Run} */
  function run(...values) {
    let middlewareIndex = -1;
    /** @type {Callback} */
    const callback = values.pop();

    if (typeof callback !== 'function') {
      throw new TypeError('Expected function as last argument, not ' + callback)
    }

    next(null, ...values);

    /**
     * Run the next `fn`, or we’re done.
     *
     * @param {Error|null|undefined} error
     * @param {any[]} output
     */
    function next(error, ...output) {
      const fn = fns[++middlewareIndex];
      let index = -1;

      if (error) {
        callback(error);
        return
      }

      // Copy non-nullish input into values.
      while (++index < values.length) {
        if (output[index] === null || output[index] === undefined) {
          output[index] = values[index];
        }
      }

      // Save the newly created `output` for the next call.
      values = output;

      // Next or done.
      if (fn) {
        wrap$1(fn, next)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }

  /** @type {Use} */
  function use(middelware) {
    if (typeof middelware !== 'function') {
      throw new TypeError(
        'Expected `middelware` to be a function, not ' + middelware
      )
    }

    fns.push(middelware);
    return pipeline
  }
}

/**
 * Wrap `middleware`.
 * Can be sync or async; return a promise, receive a callback, or return new
 * values and errors.
 *
 * @param {Middleware} middleware
 * @param {Callback} callback
 */
function wrap$1(middleware, callback) {
  /** @type {boolean} */
  let called;

  return wrapped

  /**
   * Call `middleware`.
   * @param {any[]} parameters
   * @returns {void}
   */
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    /** @type {any} */
    let result;

    if (fnExpectsCallback) {
      parameters.push(done);
    }

    try {
      result = middleware(...parameters);
    } catch (error) {
      /** @type {Error} */
      const exception = error;

      // Well, this is quite the pickle.
      // `middleware` received a callback and called it synchronously, but that
      // threw an error.
      // The only thing left to do is to throw the thing instead.
      if (fnExpectsCallback && called) {
        throw exception
      }

      return done(exception)
    }

    if (!fnExpectsCallback) {
      if (result instanceof Promise) {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }

  /**
   * Call `callback`, only once.
   * @type {Callback}
   */
  function done(error, ...output) {
    if (!called) {
      called = true;
      callback(error, ...output);
    }
  }

  /**
   * Call `done` with one value.
   *
   * @param {any} [value]
   */
  function then(value) {
    done(null, value);
  }
}/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('vfile').VFileCompatible} VFileCompatible
 * @typedef {import('vfile').VFileValue} VFileValue
 * @typedef {import('..').Processor} Processor
 * @typedef {import('..').Plugin} Plugin
 * @typedef {import('..').Preset} Preset
 * @typedef {import('..').Pluggable} Pluggable
 * @typedef {import('..').PluggableList} PluggableList
 * @typedef {import('..').Transformer} Transformer
 * @typedef {import('..').Parser} Parser
 * @typedef {import('..').Compiler} Compiler
 * @typedef {import('..').RunCallback} RunCallback
 * @typedef {import('..').ProcessCallback} ProcessCallback
 *
 * @typedef Context
 * @property {Node} tree
 * @property {VFile} file
 */

// Expose a frozen processor.
const unified = base().freeze();

const own$8 = {}.hasOwnProperty;

// Function to create the first processor.
/**
 * @returns {Processor}
 */
function base() {
  const transformers = trough();
  /** @type {Processor['attachers']} */
  const attachers = [];
  /** @type {Record<string, unknown>} */
  let namespace = {};
  /** @type {boolean|undefined} */
  let frozen;
  let freezeIndex = -1;

  // Data management.
  // @ts-expect-error: overloads are handled.
  processor.data = data;
  processor.Parser = undefined;
  processor.Compiler = undefined;

  // Lock.
  processor.freeze = freeze;

  // Plugins.
  processor.attachers = attachers;
  // @ts-expect-error: overloads are handled.
  processor.use = use;

  // API.
  processor.parse = parse;
  processor.stringify = stringify;
  // @ts-expect-error: overloads are handled.
  processor.run = run;
  processor.runSync = runSync;
  // @ts-expect-error: overloads are handled.
  processor.process = process;
  processor.processSync = processSync;

  // Expose.
  return processor

  // Create a new processor based on the processor in the current scope.
  /** @type {Processor} */
  function processor() {
    const destination = base();
    let index = -1;

    while (++index < attachers.length) {
      destination.use(...attachers[index]);
    }

    destination.data(extend(true, {}, namespace));

    return destination
  }

  /**
   * @param {string|Record<string, unknown>} [key]
   * @param {unknown} [value]
   * @returns {unknown}
   */
  function data(key, value) {
    if (typeof key === 'string') {
      // Set `key`.
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen);
        namespace[key] = value;
        return processor
      }

      // Get `key`.
      return (own$8.call(namespace, key) && namespace[key]) || null
    }

    // Set space.
    if (key) {
      assertUnfrozen('data', frozen);
      namespace = key;
      return processor
    }

    // Get space.
    return namespace
  }

  /** @type {Processor['freeze']} */
  function freeze() {
    if (frozen) {
      return processor
    }

    while (++freezeIndex < attachers.length) {
      const [attacher, ...options] = attachers[freezeIndex];

      if (options[0] === false) {
        continue
      }

      if (options[0] === true) {
        options[1] = undefined;
      }

      /** @type {Transformer|void} */
      const transformer = attacher.call(processor, ...options);

      if (typeof transformer === 'function') {
        transformers.use(transformer);
      }
    }

    frozen = true;
    freezeIndex = Number.POSITIVE_INFINITY;

    return processor
  }

  /**
   * @param {Pluggable|null|undefined} [value]
   * @param {...unknown} options
   * @returns {Processor}
   */
  function use(value, ...options) {
    /** @type {Record<string, unknown>|undefined} */
    let settings;

    assertUnfrozen('use', frozen);

    if (value === null || value === undefined) ; else if (typeof value === 'function') {
      addPlugin(value, ...options);
    } else if (typeof value === 'object') {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError('Expected usable value, not `' + value + '`')
    }

    if (settings) {
      namespace.settings = Object.assign(namespace.settings || {}, settings);
    }

    return processor

    /**
     * @param {import('..').Pluggable<unknown[]>} value
     * @returns {void}
     */
    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value);
      } else if (typeof value === 'object') {
        if (Array.isArray(value)) {
          const [plugin, ...options] = value;
          addPlugin(plugin, ...options);
        } else {
          addPreset(value);
        }
      } else {
        throw new TypeError('Expected usable value, not `' + value + '`')
      }
    }

    /**
     * @param {Preset} result
     * @returns {void}
     */
    function addPreset(result) {
      addList(result.plugins);

      if (result.settings) {
        settings = Object.assign(settings || {}, result.settings);
      }
    }

    /**
     * @param {PluggableList|null|undefined} [plugins]
     * @returns {void}
     */
    function addList(plugins) {
      let index = -1;

      if (plugins === null || plugins === undefined) ; else if (Array.isArray(plugins)) {
        while (++index < plugins.length) {
          const thing = plugins[index];
          add(thing);
        }
      } else {
        throw new TypeError('Expected a list of plugins, not `' + plugins + '`')
      }
    }

    /**
     * @param {Plugin} plugin
     * @param {...unknown} [value]
     * @returns {void}
     */
    function addPlugin(plugin, value) {
      let index = -1;
      /** @type {Processor['attachers'][number]|undefined} */
      let entry;

      while (++index < attachers.length) {
        if (attachers[index][0] === plugin) {
          entry = attachers[index];
          break
        }
      }

      if (entry) {
        if (isPlainObject(entry[1]) && isPlainObject(value)) {
          value = extend(true, entry[1], value);
        }

        entry[1] = value;
      } else {
        // @ts-expect-error: fine.
        attachers.push([...arguments]);
      }
    }
  }

  /** @type {Processor['parse']} */
  function parse(doc) {
    processor.freeze();
    const file = vfile(doc);
    const Parser = processor.Parser;
    assertParser('parse', Parser);

    if (newable(Parser, 'parse')) {
      // @ts-expect-error: `newable` checks this.
      return new Parser(String(file), file).parse()
    }

    // @ts-expect-error: `newable` checks this.
    return Parser(String(file), file) // eslint-disable-line new-cap
  }

  /** @type {Processor['stringify']} */
  function stringify(node, doc) {
    processor.freeze();
    const file = vfile(doc);
    const Compiler = processor.Compiler;
    assertCompiler('stringify', Compiler);
    assertNode(node);

    if (newable(Compiler, 'compile')) {
      // @ts-expect-error: `newable` checks this.
      return new Compiler(node, file).compile()
    }

    // @ts-expect-error: `newable` checks this.
    return Compiler(node, file) // eslint-disable-line new-cap
  }

  /**
   * @param {Node} node
   * @param {VFileCompatible|RunCallback} [doc]
   * @param {RunCallback} [callback]
   * @returns {Promise<Node>|void}
   */
  function run(node, doc, callback) {
    assertNode(node);
    processor.freeze();

    if (!callback && typeof doc === 'function') {
      callback = doc;
      doc = undefined;
    }

    if (!callback) {
      return new Promise(executor)
    }

    executor(null, callback);

    /**
     * @param {null|((node: Node) => void)} resolve
     * @param {(error: Error) => void} reject
     * @returns {void}
     */
    function executor(resolve, reject) {
      // @ts-expect-error: `doc` can’t be a callback anymore, we checked.
      transformers.run(node, vfile(doc), done);

      /**
       * @param {Error|null} error
       * @param {Node} tree
       * @param {VFile} file
       * @returns {void}
       */
      function done(error, tree, file) {
        tree = tree || node;
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(tree);
        } else {
          // @ts-expect-error: `callback` is defined if `resolve` is not.
          callback(null, tree, file);
        }
      }
    }
  }

  /** @type {Processor['runSync']} */
  function runSync(node, file) {
    /** @type {Node|undefined} */
    let result;
    /** @type {boolean|undefined} */
    let complete;

    processor.run(node, file, done);

    assertDone('runSync', 'run', complete);

    // @ts-expect-error: we either bailed on an error or have a tree.
    return result

    /**
     * @param {Error|null} [error]
     * @param {Node} [tree]
     * @returns {void}
     */
    function done(error, tree) {
      bail(error);
      result = tree;
      complete = true;
    }
  }

  /**
   * @param {VFileCompatible} doc
   * @param {ProcessCallback} [callback]
   * @returns {Promise<VFile>|undefined}
   */
  function process(doc, callback) {
    processor.freeze();
    assertParser('process', processor.Parser);
    assertCompiler('process', processor.Compiler);

    if (!callback) {
      return new Promise(executor)
    }

    executor(null, callback);

    /**
     * @param {null|((file: VFile) => void)} resolve
     * @param {(error?: Error|null|undefined) => void} reject
     * @returns {void}
     */
    function executor(resolve, reject) {
      const file = vfile(doc);

      processor.run(processor.parse(file), file, (error, tree, file) => {
        if (error || !tree || !file) {
          done(error);
        } else {
          /** @type {unknown} */
          const result = processor.stringify(tree, file);

          if (result === undefined || result === null) ; else if (looksLikeAVFileValue(result)) {
            file.value = result;
          } else {
            file.result = result;
          }

          done(error, file);
        }
      });

      /**
       * @param {Error|null|undefined} [error]
       * @param {VFile|undefined} [file]
       * @returns {void}
       */
      function done(error, file) {
        if (error || !file) {
          reject(error);
        } else if (resolve) {
          resolve(file);
        } else {
          // @ts-expect-error: `callback` is defined if `resolve` is not.
          callback(null, file);
        }
      }
    }
  }

  /** @type {Processor['processSync']} */
  function processSync(doc) {
    /** @type {boolean|undefined} */
    let complete;

    processor.freeze();
    assertParser('processSync', processor.Parser);
    assertCompiler('processSync', processor.Compiler);

    const file = vfile(doc);

    processor.process(file, done);

    assertDone('processSync', 'process', complete);

    return file

    /**
     * @param {Error|null|undefined} [error]
     * @returns {void}
     */
    function done(error) {
      complete = true;
      bail(error);
    }
  }
}

/**
 * Check if `value` is a constructor.
 *
 * @param {unknown} value
 * @param {string} name
 * @returns {boolean}
 */
function newable(value, name) {
  return (
    typeof value === 'function' &&
    // Prototypes do exist.
    // type-coverage:ignore-next-line
    value.prototype &&
    // A function with keys in its prototype is probably a constructor.
    // Classes’ prototype methods are not enumerable, so we check if some value
    // exists in the prototype.
    // type-coverage:ignore-next-line
    (keys(value.prototype) || name in value.prototype)
  )
}

/**
 * Check if `value` is an object with keys.
 *
 * @param {Record<string, unknown>} value
 * @returns {boolean}
 */
function keys(value) {
  /** @type {string} */
  let key;

  for (key in value) {
    if (own$8.call(value, key)) {
      return true
    }
  }

  return false
}

/**
 * Assert a parser is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Parser}
 */
function assertParser(name, value) {
  if (typeof value !== 'function') {
    throw new TypeError('Cannot `' + name + '` without `Parser`')
  }
}

/**
 * Assert a compiler is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Compiler}
 */
function assertCompiler(name, value) {
  if (typeof value !== 'function') {
    throw new TypeError('Cannot `' + name + '` without `Compiler`')
  }
}

/**
 * Assert the processor is not frozen.
 *
 * @param {string} name
 * @param {unknown} frozen
 * @returns {asserts frozen is false}
 */
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      'Cannot call `' +
        name +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.'
    )
  }
}

/**
 * Assert `node` is a unist node.
 *
 * @param {unknown} node
 * @returns {asserts node is Node}
 */
function assertNode(node) {
  // `isPlainObj` unfortunately uses `any` instead of `unknown`.
  // type-coverage:ignore-next-line
  if (!isPlainObject(node) || typeof node.type !== 'string') {
    throw new TypeError('Expected node, got `' + node + '`')
    // Fine.
  }
}

/**
 * Assert that `complete` is `true`.
 *
 * @param {string} name
 * @param {string} asyncName
 * @param {unknown} complete
 * @returns {asserts complete is true}
 */
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      '`' + name + '` finished async. Use `' + asyncName + '` instead'
    )
  }
}

/**
 * @param {VFileCompatible} [value]
 * @returns {VFile}
 */
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value)
}

/**
 * @param {VFileCompatible} [value]
 * @returns {value is VFile}
 */
function looksLikeAVFile(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      'message' in value &&
      'messages' in value
  )
}

/**
 * @param {unknown} [value]
 * @returns {value is VFileValue}
 */
function looksLikeAVFileValue(value) {
  return typeof value === 'string' || isBuffer(value)
}/**
 * @typedef Options
 * @property {boolean} [includeImageAlt=true]
 */

/**
 * Get the text content of a node.
 * Prefer the node’s plain-text fields, otherwise serialize its children,
 * and if the given value is an array, serialize the nodes in it.
 *
 * @param {unknown} node
 * @param {Options} [options]
 * @returns {string}
 */
function toString(node, options) {
  var {includeImageAlt = true} = options || {};
  return one$1(node, includeImageAlt)
}

/**
 * @param {unknown} node
 * @param {boolean} includeImageAlt
 * @returns {string}
 */
function one$1(node, includeImageAlt) {
  return (
    (node &&
      typeof node === 'object' &&
      // @ts-ignore looks like a literal.
      (node.value ||
        // @ts-ignore looks like an image.
        (includeImageAlt ? node.alt : '') ||
        // @ts-ignore looks like a parent.
        ('children' in node && all$1(node.children, includeImageAlt)) ||
        (Array.isArray(node) && all$1(node, includeImageAlt)))) ||
    ''
  )
}

/**
 * @param {Array.<unknown>} values
 * @param {boolean} includeImageAlt
 * @returns {string}
 */
function all$1(values, includeImageAlt) {
  /** @type {Array.<string>} */
  var result = [];
  var index = -1;

  while (++index < values.length) {
    result[index] = one$1(values[index], includeImageAlt);
  }

  return result.join('')
}/**
 * Like `Array#splice`, but smarter for giant arrays.
 *
 * `Array#splice` takes all items to be inserted as individual argument which
 * causes a stack overflow in V8 when trying to insert 100k items for instance.
 *
 * Otherwise, this does not return the removed items, and takes `items` as an
 * array instead of rest parameters.
 *
 * @template {unknown} T
 * @param {T[]} list
 * @param {number} start
 * @param {number} remove
 * @param {T[]} items
 * @returns {void}
 */
function splice(list, start, remove, items) {
  const end = list.length;
  let chunkStart = 0;
  /** @type {unknown[]} */

  let parameters; // Make start between zero and `end` (included).

  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }

  remove = remove > 0 ? remove : 0; // No need to chunk the items if there’s only a couple (10k) items.

  if (items.length < 10000) {
    parameters = Array.from(items);
    parameters.unshift(start, remove) // @ts-expect-error Hush, it’s fine.
    ;[].splice.apply(list, parameters);
  } else {
    // Delete `remove` items starting from `start`
    if (remove) [].splice.apply(list, [start, remove]); // Insert the items in chunks to not cause stack overflows.

    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 10000);
      parameters.unshift(start, 0) // @ts-expect-error Hush, it’s fine.
      ;[].splice.apply(list, parameters);
      chunkStart += 10000;
      start += 10000;
    }
  }
}
/**
 * Append `items` (an array) at the end of `list` (another array).
 * When `list` was empty, returns `items` instead.
 *
 * This prevents a potentially expensive operation when `list` is empty,
 * and adds items in batches to prevent V8 from hanging.
 *
 * @template {unknown} T
 * @param {T[]} list
 * @param {T[]} items
 * @returns {T[]}
 */

function push(list, items) {
  if (list.length > 0) {
    splice(list, list.length, 0, items);
    return list
  }

  return items
}/**
 * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */

const hasOwnProperty = {}.hasOwnProperty;

/**
 * Combine several syntax extensions into one.
 *
 * @param {Extension[]} extensions List of syntax extensions.
 * @returns {NormalizedExtension} A single combined extension.
 */
function combineExtensions(extensions) {
  /** @type {NormalizedExtension} */
  const all = {};
  let index = -1;

  while (++index < extensions.length) {
    syntaxExtension(all, extensions[index]);
  }

  return all
}

/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all Extension to merge into.
 * @param {Extension} extension Extension to merge.
 * @returns {void}
 */
function syntaxExtension(all, extension) {
  /** @type {string} */
  let hook;

  for (hook in extension) {
    const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;
    const left = maybe || (all[hook] = {});
    const right = extension[hook];
    /** @type {string} */
    let code;

    for (code in right) {
      if (!hasOwnProperty.call(left, code)) left[code] = [];
      const value = right[code];
      constructs(
        // @ts-expect-error Looks like a list.
        left[code],
        Array.isArray(value) ? value : value ? [value] : []
      );
    }
  }
}

/**
 * Merge `list` into `existing` (both lists of constructs).
 * Mutates `existing`.
 *
 * @param {unknown[]} existing
 * @param {unknown[]} list
 * @returns {void}
 */
function constructs(existing, list) {
  let index = -1;
  /** @type {unknown[]} */
  const before = [];

  while (++index < list.length) {
(list[index].add === 'after' ? existing : before).push(list[index]);
  }

  splice(existing, 0, 0, before);
}// This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.
const unicodePunctuationRegex =
  /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;/**
 * @typedef {import('micromark-util-types').Code} Code
 */
/**
 * Check whether the character code represents an ASCII alpha (`a` through `z`,
 * case insensitive).
 *
 * An **ASCII alpha** is an ASCII upper alpha or ASCII lower alpha.
 *
 * An **ASCII upper alpha** is a character in the inclusive range U+0041 (`A`)
 * to U+005A (`Z`).
 *
 * An **ASCII lower alpha** is a character in the inclusive range U+0061 (`a`)
 * to U+007A (`z`).
 */

const asciiAlpha = regexCheck(/[A-Za-z]/);
/**
 * Check whether the character code represents an ASCII digit (`0` through `9`).
 *
 * An **ASCII digit** is a character in the inclusive range U+0030 (`0`) to
 * U+0039 (`9`).
 */

const asciiDigit = regexCheck(/\d/);
/**
 * Check whether the character code represents an ASCII hex digit (`a` through
 * `f`, case insensitive, or `0` through `9`).
 *
 * An **ASCII hex digit** is an ASCII digit (see `asciiDigit`), ASCII upper hex
 * digit, or an ASCII lower hex digit.
 *
 * An **ASCII upper hex digit** is a character in the inclusive range U+0041
 * (`A`) to U+0046 (`F`).
 *
 * An **ASCII lower hex digit** is a character in the inclusive range U+0061
 * (`a`) to U+0066 (`f`).
 */

const asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
/**
 * Check whether the character code represents an ASCII alphanumeric (`a`
 * through `z`, case insensitive, or `0` through `9`).
 *
 * An **ASCII alphanumeric** is an ASCII digit (see `asciiDigit`) or ASCII alpha
 * (see `asciiAlpha`).
 */

const asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
/**
 * Check whether the character code represents ASCII punctuation.
 *
 * An **ASCII punctuation** is a character in the inclusive ranges U+0021
 * EXCLAMATION MARK (`!`) to U+002F SLASH (`/`), U+003A COLON (`:`) to U+0040 AT
 * SIGN (`@`), U+005B LEFT SQUARE BRACKET (`[`) to U+0060 GRAVE ACCENT
 * (`` ` ``), or U+007B LEFT CURLY BRACE (`{`) to U+007E TILDE (`~`).
 */

const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
/**
 * Check whether the character code represents an ASCII atext.
 *
 * atext is an ASCII alphanumeric (see `asciiAlphanumeric`), or a character in
 * the inclusive ranges U+0023 NUMBER SIGN (`#`) to U+0027 APOSTROPHE (`'`),
 * U+002A ASTERISK (`*`), U+002B PLUS SIGN (`+`), U+002D DASH (`-`), U+002F
 * SLASH (`/`), U+003D EQUALS TO (`=`), U+003F QUESTION MARK (`?`), U+005E
 * CARET (`^`) to U+0060 GRAVE ACCENT (`` ` ``), or U+007B LEFT CURLY BRACE
 * (`{`) to U+007E TILDE (`~`).
 *
 * See:
 * **\[RFC5322]**:
 * [Internet Message Format](https://tools.ietf.org/html/rfc5322).
 * P. Resnick.
 * IETF.
 */

const asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
/**
 * Check whether a character code is an ASCII control character.
 *
 * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)
 * to U+001F (US), or U+007F (DEL).
 *
 * @param {Code} code
 * @returns {code is number}
 */

function asciiControl(code) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code !== null && (code < 32 || code === 127)
  )
}
/**
 * Check whether a character code is a markdown line ending (see
 * `markdownLineEnding`) or markdown space (see `markdownSpace`).
 *
 * @param {Code} code
 * @returns {code is number}
 */

function markdownLineEndingOrSpace(code) {
  return code !== null && (code < 0 || code === 32)
}
/**
 * Check whether a character code is a markdown line ending.
 *
 * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN
 * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).
 *
 * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE
 * RETURN (CR) are replaced by these virtual characters depending on whether
 * they occurred together.
 *
 * @param {Code} code
 * @returns {code is number}
 */

function markdownLineEnding(code) {
  return code !== null && code < -2
}
/**
 * Check whether a character code is a markdown space.
 *
 * A **markdown space** is the concrete character U+0020 SPACE (SP) and the
 * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).
 *
 * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is
 * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL
 * SPACE (VS) characters, depending on the column at which the tab occurred.
 *
 * @param {Code} code
 * @returns {code is number}
 */

function markdownSpace(code) {
  return code === -2 || code === -1 || code === 32
}
/**
 * Check whether the character code represents Unicode whitespace.
 *
 * Note that this does handle micromark specific markdown whitespace characters.
 * See `markdownLineEndingOrSpace` to check that.
 *
 * A **Unicode whitespace** is a character in the Unicode `Zs` (Separator,
 * Space) category, or U+0009 CHARACTER TABULATION (HT), U+000A LINE FEED (LF),
 * U+000C (FF), or U+000D CARRIAGE RETURN (CR) (**\[UNICODE]**).
 *
 * See:
 * **\[UNICODE]**:
 * [The Unicode Standard](https://www.unicode.org/versions/).
 * Unicode Consortium.
 */

const unicodeWhitespace = regexCheck(/\s/);
/**
 * Check whether the character code represents Unicode punctuation.
 *
 * A **Unicode punctuation** is a character in the Unicode `Pc` (Punctuation,
 * Connector), `Pd` (Punctuation, Dash), `Pe` (Punctuation, Close), `Pf`
 * (Punctuation, Final quote), `Pi` (Punctuation, Initial quote), `Po`
 * (Punctuation, Other), or `Ps` (Punctuation, Open) categories, or an ASCII
 * punctuation (see `asciiPunctuation`).
 *
 * See:
 * **\[UNICODE]**:
 * [The Unicode Standard](https://www.unicode.org/versions/).
 * Unicode Consortium.
 */
// Size note: removing ASCII from the regex and using `asciiPunctuation` here
// In fact adds to the bundle size.

const unicodePunctuation = regexCheck(unicodePunctuationRegex);
/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 * @returns {(code: Code) => code is number}
 */

function regexCheck(regex) {
  return check
  /**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code Character code
   * @returns {code is number} Whether the character code matches the bound regex
   */

  function check(code) {
    return code !== null && regex.test(String.fromCharCode(code))
  }
}/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */
/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {string} type
 * @param {number} [max=Infinity]
 * @returns {State}
 */

function factorySpace(effects, ok, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start
  /** @type {State} */

  function start(code) {
    if (markdownSpace(code)) {
      effects.enter(type);
      return prefix(code)
    }

    return ok(code)
  }
  /** @type {State} */

  function prefix(code) {
    if (markdownSpace(code) && size++ < limit) {
      effects.consume(code);
      return prefix
    }

    effects.exit(type);
    return ok(code)
  }
}/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {InitialConstruct} */
const content$1 = {
  tokenize: initializeContent
};
/** @type {Initializer} */

function initializeContent(effects) {
  const contentStart = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStartConstruct,
    paragraphInitial
  );
  /** @type {Token} */

  let previous;
  return contentStart
  /** @type {State} */

  function afterContentStartConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return
    }

    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, contentStart, 'linePrefix')
  }
  /** @type {State} */

  function paragraphInitial(code) {
    effects.enter('paragraph');
    return lineStart(code)
  }
  /** @type {State} */

  function lineStart(code) {
    const token = effects.enter('chunkText', {
      contentType: 'text',
      previous
    });

    if (previous) {
      previous.next = token;
    }

    previous = token;
    return data(code)
  }
  /** @type {State} */

  function data(code) {
    if (code === null) {
      effects.exit('chunkText');
      effects.exit('paragraph');
      effects.consume(code);
      return
    }

    if (markdownLineEnding(code)) {
      effects.consume(code);
      effects.exit('chunkText');
      return lineStart
    } // Data.

    effects.consume(code);
    return data
  }
}/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Point} Point
 */
/** @type {InitialConstruct} */

const document$2 = {
  tokenize: initializeDocument
};
/** @type {Construct} */

const containerConstruct = {
  tokenize: tokenizeContainer
};
/** @type {Initializer} */

function initializeDocument(effects) {
  const self = this;
  /** @type {StackItem[]} */

  const stack = [];
  let continued = 0;
  /** @type {TokenizeContext|undefined} */

  let childFlow;
  /** @type {Token|undefined} */

  let childToken;
  /** @type {number} */

  let lineStartOffset;
  return start
  /** @type {State} */

  function start(code) {
    // First we iterate through the open blocks, starting with the root
    // document, and descending through last children down to the last open
    // block.
    // Each block imposes a condition that the line must satisfy if the block is
    // to remain open.
    // For example, a block quote requires a `>` character.
    // A paragraph requires a non-blank line.
    // In this phase we may match all or just some of the open blocks.
    // But we cannot close unmatched blocks yet, because we may have a lazy
    // continuation line.
    if (continued < stack.length) {
      const item = stack[continued];
      self.containerState = item[1];
      return effects.attempt(
        item[0].continuation,
        documentContinue,
        checkNewContainers
      )(code)
    } // Done.

    return checkNewContainers(code)
  }
  /** @type {State} */

  function documentContinue(code) {
    continued++; // Note: this field is called `_closeFlow` but it also closes containers.
    // Perhaps a good idea to rename it but it’s already used in the wild by
    // extensions.

    if (self.containerState._closeFlow) {
      self.containerState._closeFlow = undefined;

      if (childFlow) {
        closeFlow();
      } // Note: this algorithm for moving events around is similar to the
      // algorithm when dealing with lazy lines in `writeToChild`.

      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      /** @type {Point|undefined} */

      let point; // Find the flow chunk.

      while (indexBeforeFlow--) {
        if (
          self.events[indexBeforeFlow][0] === 'exit' &&
          self.events[indexBeforeFlow][1].type === 'chunkFlow'
        ) {
          point = self.events[indexBeforeFlow][1].end;
          break
        }
      }

      exitContainers(continued); // Fix positions.

      let index = indexBeforeExits;

      while (index < self.events.length) {
        self.events[index][1].end = Object.assign({}, point);
        index++;
      } // Inject the exits earlier (they’re still also at the end).

      splice(
        self.events,
        indexBeforeFlow + 1,
        0,
        self.events.slice(indexBeforeExits)
      ); // Discard the duplicate exits.

      self.events.length = index;
      return checkNewContainers(code)
    }

    return start(code)
  }
  /** @type {State} */

  function checkNewContainers(code) {
    // Next, after consuming the continuation markers for existing blocks, we
    // look for new block starts (e.g. `>` for a block quote).
    // If we encounter a new block start, we close any blocks unmatched in
    // step 1 before creating the new block as a child of the last matched
    // block.
    if (continued === stack.length) {
      // No need to `check` whether there’s a container, of `exitContainers`
      // would be moot.
      // We can instead immediately `attempt` to parse one.
      if (!childFlow) {
        return documentContinued(code)
      } // If we have concrete content, such as block HTML or fenced code,
      // we can’t have containers “pierce” into them, so we can immediately
      // start.

      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code)
      } // If we do have flow, it could still be a blank line,
      // but we’d be interrupting it w/ a new container if there’s a current
      // construct.

      self.interrupt = Boolean(
        childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack
      );
    } // Check if there is a new container.

    self.containerState = {};
    return effects.check(
      containerConstruct,
      thereIsANewContainer,
      thereIsNoNewContainer
    )(code)
  }
  /** @type {State} */

  function thereIsANewContainer(code) {
    if (childFlow) closeFlow();
    exitContainers(continued);
    return documentContinued(code)
  }
  /** @type {State} */

  function thereIsNoNewContainer(code) {
    self.parser.lazy[self.now().line] = continued !== stack.length;
    lineStartOffset = self.now().offset;
    return flowStart(code)
  }
  /** @type {State} */

  function documentContinued(code) {
    // Try new containers.
    self.containerState = {};
    return effects.attempt(
      containerConstruct,
      containerContinue,
      flowStart
    )(code)
  }
  /** @type {State} */

  function containerContinue(code) {
    continued++;
    stack.push([self.currentConstruct, self.containerState]); // Try another.

    return documentContinued(code)
  }
  /** @type {State} */

  function flowStart(code) {
    if (code === null) {
      if (childFlow) closeFlow();
      exitContainers(0);
      effects.consume(code);
      return
    }

    childFlow = childFlow || self.parser.flow(self.now());
    effects.enter('chunkFlow', {
      contentType: 'flow',
      previous: childToken,
      _tokenizer: childFlow
    });
    return flowContinue(code)
  }
  /** @type {State} */

  function flowContinue(code) {
    if (code === null) {
      writeToChild(effects.exit('chunkFlow'), true);
      exitContainers(0);
      effects.consume(code);
      return
    }

    if (markdownLineEnding(code)) {
      effects.consume(code);
      writeToChild(effects.exit('chunkFlow')); // Get ready for the next line.

      continued = 0;
      self.interrupt = undefined;
      return start
    }

    effects.consume(code);
    return flowContinue
  }
  /**
   * @param {Token} token
   * @param {boolean} [eof]
   * @returns {void}
   */

  function writeToChild(token, eof) {
    const stream = self.sliceStream(token);
    if (eof) stream.push(null);
    token.previous = childToken;
    if (childToken) childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream); // Alright, so we just added a lazy line:
    //
    // ```markdown
    // > a
    // b.
    //
    // Or:
    //
    // > ~~~c
    // d
    //
    // Or:
    //
    // > | e |
    // f
    // ```
    //
    // The construct in the second example (fenced code) does not accept lazy
    // lines, so it marked itself as done at the end of its first line, and
    // then the content construct parses `d`.
    // Most constructs in markdown match on the first line: if the first line
    // forms a construct, a non-lazy line can’t “unmake” it.
    //
    // The construct in the third example is potentially a GFM table, and
    // those are *weird*.
    // It *could* be a table, from the first line, if the following line
    // matches a condition.
    // In this case, that second line is lazy, which “unmakes” the first line
    // and turns the whole into one content block.
    //
    // We’ve now parsed the non-lazy and the lazy line, and can figure out
    // whether the lazy line started a new flow block.
    // If it did, we exit the current containers between the two flow blocks.

    if (self.parser.lazy[token.start.line]) {
      let index = childFlow.events.length;

      while (index--) {
        if (
          // The token starts before the line ending…
          childFlow.events[index][1].start.offset < lineStartOffset && // …and either is not ended yet…
          (!childFlow.events[index][1].end || // …or ends after it.
            childFlow.events[index][1].end.offset > lineStartOffset)
        ) {
          // Exit: there’s still something open, which means it’s a lazy line
          // part of something.
          return
        }
      } // Note: this algorithm for moving events around is similar to the
      // algorithm when closing flow in `documentContinue`.

      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      /** @type {boolean|undefined} */

      let seen;
      /** @type {Point|undefined} */

      let point; // Find the previous chunk (the one before the lazy line).

      while (indexBeforeFlow--) {
        if (
          self.events[indexBeforeFlow][0] === 'exit' &&
          self.events[indexBeforeFlow][1].type === 'chunkFlow'
        ) {
          if (seen) {
            point = self.events[indexBeforeFlow][1].end;
            break
          }

          seen = true;
        }
      }

      exitContainers(continued); // Fix positions.

      index = indexBeforeExits;

      while (index < self.events.length) {
        self.events[index][1].end = Object.assign({}, point);
        index++;
      } // Inject the exits earlier (they’re still also at the end).

      splice(
        self.events,
        indexBeforeFlow + 1,
        0,
        self.events.slice(indexBeforeExits)
      ); // Discard the duplicate exits.

      self.events.length = index;
    }
  }
  /**
   * @param {number} size
   * @returns {void}
   */

  function exitContainers(size) {
    let index = stack.length; // Exit open containers.

    while (index-- > size) {
      const entry = stack[index];
      self.containerState = entry[1];
      entry[0].exit.call(self, effects);
    }

    stack.length = size;
  }

  function closeFlow() {
    childFlow.write([null]);
    childToken = undefined;
    childFlow = undefined;
    self.containerState._closeFlow = undefined;
  }
}
/** @type {Tokenizer} */

function tokenizeContainer(effects, ok, nok) {
  return factorySpace(
    effects,
    effects.attempt(this.parser.constructs.document, ok, nok),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4
  )
}/**
 * @typedef {import('micromark-util-types').Code} Code
 */

/**
 * Classify whether a character code represents whitespace, punctuation, or
 * something else.
 *
 * Used for attention (emphasis, strong), whose sequences can open or close
 * based on the class of surrounding characters.
 *
 * Note that eof (`null`) is seen as whitespace.
 *
 * @param {Code} code
 * @returns {number|undefined}
 */
function classifyCharacter(code) {
  if (
    code === null ||
    markdownLineEndingOrSpace(code) ||
    unicodeWhitespace(code)
  ) {
    return 1
  }

  if (unicodePunctuation(code)) {
    return 2
  }
}/**
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Resolver} Resolver
 */

/**
 * Call all `resolveAll`s.
 *
 * @param {{resolveAll?: Resolver}[]} constructs
 * @param {Event[]} events
 * @param {TokenizeContext} context
 * @returns {Event[]}
 */
function resolveAll(constructs, events, context) {
  /** @type {Resolver[]} */
  const called = [];
  let index = -1;

  while (++index < constructs.length) {
    const resolve = constructs[index].resolveAll;

    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }

  return events
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Point} Point
 */

/** @type {Construct} */
const attention = {
  name: 'attention',
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};
/**
 * Take all events and resolve attention to emphasis or strong.
 *
 * @type {Resolver}
 */

function resolveAllAttention(events, context) {
  let index = -1;
  /** @type {number} */

  let open;
  /** @type {Token} */

  let group;
  /** @type {Token} */

  let text;
  /** @type {Token} */

  let openingSequence;
  /** @type {Token} */

  let closingSequence;
  /** @type {number} */

  let use;
  /** @type {Event[]} */

  let nextEvents;
  /** @type {number} */

  let offset; // Walk through all events.
  //
  // Note: performance of this is fine on an mb of normal markdown, but it’s
  // a bottleneck for malicious stuff.

  while (++index < events.length) {
    // Find a token that can close.
    if (
      events[index][0] === 'enter' &&
      events[index][1].type === 'attentionSequence' &&
      events[index][1]._close
    ) {
      open = index; // Now walk back to find an opener.

      while (open--) {
        // Find a token that can open the closer.
        if (
          events[open][0] === 'exit' &&
          events[open][1].type === 'attentionSequence' &&
          events[open][1]._open && // If the markers are the same:
          context.sliceSerialize(events[open][1]).charCodeAt(0) ===
            context.sliceSerialize(events[index][1]).charCodeAt(0)
        ) {
          // If the opening can close or the closing can open,
          // and the close size *is not* a multiple of three,
          // but the sum of the opening and closing size *is* multiple of three,
          // then don’t match.
          if (
            (events[open][1]._close || events[index][1]._open) &&
            (events[index][1].end.offset - events[index][1].start.offset) % 3 &&
            !(
              (events[open][1].end.offset -
                events[open][1].start.offset +
                events[index][1].end.offset -
                events[index][1].start.offset) %
              3
            )
          ) {
            continue
          } // Number of markers to use from the sequence.

          use =
            events[open][1].end.offset - events[open][1].start.offset > 1 &&
            events[index][1].end.offset - events[index][1].start.offset > 1
              ? 2
              : 1;
          const start = Object.assign({}, events[open][1].end);
          const end = Object.assign({}, events[index][1].start);
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start,
            end: Object.assign({}, events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: Object.assign({}, events[index][1].start),
            end
          };
          text = {
            type: use > 1 ? 'strongText' : 'emphasisText',
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index][1].start)
          };
          group = {
            type: use > 1 ? 'strong' : 'emphasis',
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          };
          events[open][1].end = Object.assign({}, openingSequence.start);
          events[index][1].start = Object.assign({}, closingSequence.end);
          nextEvents = []; // If there are more markers in the opening, add them before.

          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [
              ['enter', events[open][1], context],
              ['exit', events[open][1], context]
            ]);
          } // Opening.

          nextEvents = push(nextEvents, [
            ['enter', group, context],
            ['enter', openingSequence, context],
            ['exit', openingSequence, context],
            ['enter', text, context]
          ]); // Between.

          nextEvents = push(
            nextEvents,
            resolveAll(
              context.parser.constructs.insideSpan.null,
              events.slice(open + 1, index),
              context
            )
          ); // Closing.

          nextEvents = push(nextEvents, [
            ['exit', text, context],
            ['enter', closingSequence, context],
            ['exit', closingSequence, context],
            ['exit', group, context]
          ]); // If there are more markers in the closing, add them after.

          if (events[index][1].end.offset - events[index][1].start.offset) {
            offset = 2;
            nextEvents = push(nextEvents, [
              ['enter', events[index][1], context],
              ['exit', events[index][1], context]
            ]);
          } else {
            offset = 0;
          }

          splice(events, open - 1, index - open + 3, nextEvents);
          index = open + nextEvents.length - offset - 2;
          break
        }
      }
    }
  } // Remove remaining sequences.

  index = -1;

  while (++index < events.length) {
    if (events[index][1].type === 'attentionSequence') {
      events[index][1].type = 'data';
    }
  }

  return events
}
/** @type {Tokenizer} */

function tokenizeAttention(effects, ok) {
  const attentionMarkers = this.parser.constructs.attentionMarkers.null;
  const previous = this.previous;
  const before = classifyCharacter(previous);
  /** @type {NonNullable<Code>} */

  let marker;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('attentionSequence');
    marker = code;
    return sequence(code)
  }
  /** @type {State} */

  function sequence(code) {
    if (code === marker) {
      effects.consume(code);
      return sequence
    }

    const token = effects.exit('attentionSequence');
    const after = classifyCharacter(code);
    const open =
      !after || (after === 2 && before) || attentionMarkers.includes(code);
    const close =
      !before || (before === 2 && after) || attentionMarkers.includes(previous);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok(code)
  }
}
/**
 * Move a point a bit.
 *
 * Note: `move` only works inside lines! It’s not possible to move past other
 * chunks (replacement characters, tabs, or line endings).
 *
 * @param {Point} point
 * @param {number} offset
 * @returns {void}
 */

function movePoint(point, offset) {
  point.column += offset;
  point.offset += offset;
  point._bufferIndex += offset;
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
const autolink = {
  name: 'autolink',
  tokenize: tokenizeAutolink
};
/** @type {Tokenizer} */

function tokenizeAutolink(effects, ok, nok) {
  let size = 1;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('autolink');
    effects.enter('autolinkMarker');
    effects.consume(code);
    effects.exit('autolinkMarker');
    effects.enter('autolinkProtocol');
    return open
  }
  /** @type {State} */

  function open(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      return schemeOrEmailAtext
    }

    return asciiAtext(code) ? emailAtext(code) : nok(code)
  }
  /** @type {State} */

  function schemeOrEmailAtext(code) {
    return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)
      ? schemeInsideOrEmailAtext(code)
      : emailAtext(code)
  }
  /** @type {State} */

  function schemeInsideOrEmailAtext(code) {
    if (code === 58) {
      effects.consume(code);
      return urlInside
    }

    if (
      (code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) &&
      size++ < 32
    ) {
      effects.consume(code);
      return schemeInsideOrEmailAtext
    }

    return emailAtext(code)
  }
  /** @type {State} */

  function urlInside(code) {
    if (code === 62) {
      effects.exit('autolinkProtocol');
      return end(code)
    }

    if (code === null || code === 32 || code === 60 || asciiControl(code)) {
      return nok(code)
    }

    effects.consume(code);
    return urlInside
  }
  /** @type {State} */

  function emailAtext(code) {
    if (code === 64) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot
    }

    if (asciiAtext(code)) {
      effects.consume(code);
      return emailAtext
    }

    return nok(code)
  }
  /** @type {State} */

  function emailAtSignOrDot(code) {
    return asciiAlphanumeric(code) ? emailLabel(code) : nok(code)
  }
  /** @type {State} */

  function emailLabel(code) {
    if (code === 46) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot
    }

    if (code === 62) {
      // Exit, then change the type.
      effects.exit('autolinkProtocol').type = 'autolinkEmail';
      return end(code)
    }

    return emailValue(code)
  }
  /** @type {State} */

  function emailValue(code) {
    if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
      effects.consume(code);
      return code === 45 ? emailValue : emailLabel
    }

    return nok(code)
  }
  /** @type {State} */

  function end(code) {
    effects.enter('autolinkMarker');
    effects.consume(code);
    effects.exit('autolinkMarker');
    effects.exit('autolink');
    return ok
  }
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
const blankLine = {
  tokenize: tokenizeBlankLine,
  partial: true
};
/** @type {Tokenizer} */

function tokenizeBlankLine(effects, ok, nok) {
  return factorySpace(effects, afterWhitespace, 'linePrefix')
  /** @type {State} */

  function afterWhitespace(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code)
  }
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
const blockQuote = {
  name: 'blockQuote',
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit
};
/** @type {Tokenizer} */

function tokenizeBlockQuoteStart(effects, ok, nok) {
  const self = this;
  return start
  /** @type {State} */

  function start(code) {
    if (code === 62) {
      const state = self.containerState;

      if (!state.open) {
        effects.enter('blockQuote', {
          _container: true
        });
        state.open = true;
      }

      effects.enter('blockQuotePrefix');
      effects.enter('blockQuoteMarker');
      effects.consume(code);
      effects.exit('blockQuoteMarker');
      return after
    }

    return nok(code)
  }
  /** @type {State} */

  function after(code) {
    if (markdownSpace(code)) {
      effects.enter('blockQuotePrefixWhitespace');
      effects.consume(code);
      effects.exit('blockQuotePrefixWhitespace');
      effects.exit('blockQuotePrefix');
      return ok
    }

    effects.exit('blockQuotePrefix');
    return ok(code)
  }
}
/** @type {Tokenizer} */

function tokenizeBlockQuoteContinuation(effects, ok, nok) {
  return factorySpace(
    effects,
    effects.attempt(blockQuote, ok, nok),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4
  )
}
/** @type {Exiter} */

function exit(effects) {
  effects.exit('blockQuote');
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
const characterEscape = {
  name: 'characterEscape',
  tokenize: tokenizeCharacterEscape
};
/** @type {Tokenizer} */

function tokenizeCharacterEscape(effects, ok, nok) {
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('characterEscape');
    effects.enter('escapeMarker');
    effects.consume(code);
    effects.exit('escapeMarker');
    return open
  }
  /** @type {State} */

  function open(code) {
    if (asciiPunctuation(code)) {
      effects.enter('characterEscapeValue');
      effects.consume(code);
      effects.exit('characterEscapeValue');
      effects.exit('characterEscape');
      return ok
    }

    return nok(code)
  }
}/**
 * Map of named character references.
 *
 * @type {Record<string, string>}
 */
const characterEntities = {
  AEli: 'Æ',
  AElig: 'Æ',
  AM: '&',
  AMP: '&',
  Aacut: 'Á',
  Aacute: 'Á',
  Abreve: 'Ă',
  Acir: 'Â',
  Acirc: 'Â',
  Acy: 'А',
  Afr: '𝔄',
  Agrav: 'À',
  Agrave: 'À',
  Alpha: 'Α',
  Amacr: 'Ā',
  And: '⩓',
  Aogon: 'Ą',
  Aopf: '𝔸',
  ApplyFunction: '⁡',
  Arin: 'Å',
  Aring: 'Å',
  Ascr: '𝒜',
  Assign: '≔',
  Atild: 'Ã',
  Atilde: 'Ã',
  Aum: 'Ä',
  Auml: 'Ä',
  Backslash: '∖',
  Barv: '⫧',
  Barwed: '⌆',
  Bcy: 'Б',
  Because: '∵',
  Bernoullis: 'ℬ',
  Beta: 'Β',
  Bfr: '𝔅',
  Bopf: '𝔹',
  Breve: '˘',
  Bscr: 'ℬ',
  Bumpeq: '≎',
  CHcy: 'Ч',
  COP: '©',
  COPY: '©',
  Cacute: 'Ć',
  Cap: '⋒',
  CapitalDifferentialD: 'ⅅ',
  Cayleys: 'ℭ',
  Ccaron: 'Č',
  Ccedi: 'Ç',
  Ccedil: 'Ç',
  Ccirc: 'Ĉ',
  Cconint: '∰',
  Cdot: 'Ċ',
  Cedilla: '¸',
  CenterDot: '·',
  Cfr: 'ℭ',
  Chi: 'Χ',
  CircleDot: '⊙',
  CircleMinus: '⊖',
  CirclePlus: '⊕',
  CircleTimes: '⊗',
  ClockwiseContourIntegral: '∲',
  CloseCurlyDoubleQuote: '”',
  CloseCurlyQuote: '’',
  Colon: '∷',
  Colone: '⩴',
  Congruent: '≡',
  Conint: '∯',
  ContourIntegral: '∮',
  Copf: 'ℂ',
  Coproduct: '∐',
  CounterClockwiseContourIntegral: '∳',
  Cross: '⨯',
  Cscr: '𝒞',
  Cup: '⋓',
  CupCap: '≍',
  DD: 'ⅅ',
  DDotrahd: '⤑',
  DJcy: 'Ђ',
  DScy: 'Ѕ',
  DZcy: 'Џ',
  Dagger: '‡',
  Darr: '↡',
  Dashv: '⫤',
  Dcaron: 'Ď',
  Dcy: 'Д',
  Del: '∇',
  Delta: 'Δ',
  Dfr: '𝔇',
  DiacriticalAcute: '´',
  DiacriticalDot: '˙',
  DiacriticalDoubleAcute: '˝',
  DiacriticalGrave: '`',
  DiacriticalTilde: '˜',
  Diamond: '⋄',
  DifferentialD: 'ⅆ',
  Dopf: '𝔻',
  Dot: '¨',
  DotDot: '⃜',
  DotEqual: '≐',
  DoubleContourIntegral: '∯',
  DoubleDot: '¨',
  DoubleDownArrow: '⇓',
  DoubleLeftArrow: '⇐',
  DoubleLeftRightArrow: '⇔',
  DoubleLeftTee: '⫤',
  DoubleLongLeftArrow: '⟸',
  DoubleLongLeftRightArrow: '⟺',
  DoubleLongRightArrow: '⟹',
  DoubleRightArrow: '⇒',
  DoubleRightTee: '⊨',
  DoubleUpArrow: '⇑',
  DoubleUpDownArrow: '⇕',
  DoubleVerticalBar: '∥',
  DownArrow: '↓',
  DownArrowBar: '⤓',
  DownArrowUpArrow: '⇵',
  DownBreve: '̑',
  DownLeftRightVector: '⥐',
  DownLeftTeeVector: '⥞',
  DownLeftVector: '↽',
  DownLeftVectorBar: '⥖',
  DownRightTeeVector: '⥟',
  DownRightVector: '⇁',
  DownRightVectorBar: '⥗',
  DownTee: '⊤',
  DownTeeArrow: '↧',
  Downarrow: '⇓',
  Dscr: '𝒟',
  Dstrok: 'Đ',
  ENG: 'Ŋ',
  ET: 'Ð',
  ETH: 'Ð',
  Eacut: 'É',
  Eacute: 'É',
  Ecaron: 'Ě',
  Ecir: 'Ê',
  Ecirc: 'Ê',
  Ecy: 'Э',
  Edot: 'Ė',
  Efr: '𝔈',
  Egrav: 'È',
  Egrave: 'È',
  Element: '∈',
  Emacr: 'Ē',
  EmptySmallSquare: '◻',
  EmptyVerySmallSquare: '▫',
  Eogon: 'Ę',
  Eopf: '𝔼',
  Epsilon: 'Ε',
  Equal: '⩵',
  EqualTilde: '≂',
  Equilibrium: '⇌',
  Escr: 'ℰ',
  Esim: '⩳',
  Eta: 'Η',
  Eum: 'Ë',
  Euml: 'Ë',
  Exists: '∃',
  ExponentialE: 'ⅇ',
  Fcy: 'Ф',
  Ffr: '𝔉',
  FilledSmallSquare: '◼',
  FilledVerySmallSquare: '▪',
  Fopf: '𝔽',
  ForAll: '∀',
  Fouriertrf: 'ℱ',
  Fscr: 'ℱ',
  GJcy: 'Ѓ',
  G: '>',
  GT: '>',
  Gamma: 'Γ',
  Gammad: 'Ϝ',
  Gbreve: 'Ğ',
  Gcedil: 'Ģ',
  Gcirc: 'Ĝ',
  Gcy: 'Г',
  Gdot: 'Ġ',
  Gfr: '𝔊',
  Gg: '⋙',
  Gopf: '𝔾',
  GreaterEqual: '≥',
  GreaterEqualLess: '⋛',
  GreaterFullEqual: '≧',
  GreaterGreater: '⪢',
  GreaterLess: '≷',
  GreaterSlantEqual: '⩾',
  GreaterTilde: '≳',
  Gscr: '𝒢',
  Gt: '≫',
  HARDcy: 'Ъ',
  Hacek: 'ˇ',
  Hat: '^',
  Hcirc: 'Ĥ',
  Hfr: 'ℌ',
  HilbertSpace: 'ℋ',
  Hopf: 'ℍ',
  HorizontalLine: '─',
  Hscr: 'ℋ',
  Hstrok: 'Ħ',
  HumpDownHump: '≎',
  HumpEqual: '≏',
  IEcy: 'Е',
  IJlig: 'Ĳ',
  IOcy: 'Ё',
  Iacut: 'Í',
  Iacute: 'Í',
  Icir: 'Î',
  Icirc: 'Î',
  Icy: 'И',
  Idot: 'İ',
  Ifr: 'ℑ',
  Igrav: 'Ì',
  Igrave: 'Ì',
  Im: 'ℑ',
  Imacr: 'Ī',
  ImaginaryI: 'ⅈ',
  Implies: '⇒',
  Int: '∬',
  Integral: '∫',
  Intersection: '⋂',
  InvisibleComma: '⁣',
  InvisibleTimes: '⁢',
  Iogon: 'Į',
  Iopf: '𝕀',
  Iota: 'Ι',
  Iscr: 'ℐ',
  Itilde: 'Ĩ',
  Iukcy: 'І',
  Ium: 'Ï',
  Iuml: 'Ï',
  Jcirc: 'Ĵ',
  Jcy: 'Й',
  Jfr: '𝔍',
  Jopf: '𝕁',
  Jscr: '𝒥',
  Jsercy: 'Ј',
  Jukcy: 'Є',
  KHcy: 'Х',
  KJcy: 'Ќ',
  Kappa: 'Κ',
  Kcedil: 'Ķ',
  Kcy: 'К',
  Kfr: '𝔎',
  Kopf: '𝕂',
  Kscr: '𝒦',
  LJcy: 'Љ',
  L: '<',
  LT: '<',
  Lacute: 'Ĺ',
  Lambda: 'Λ',
  Lang: '⟪',
  Laplacetrf: 'ℒ',
  Larr: '↞',
  Lcaron: 'Ľ',
  Lcedil: 'Ļ',
  Lcy: 'Л',
  LeftAngleBracket: '⟨',
  LeftArrow: '←',
  LeftArrowBar: '⇤',
  LeftArrowRightArrow: '⇆',
  LeftCeiling: '⌈',
  LeftDoubleBracket: '⟦',
  LeftDownTeeVector: '⥡',
  LeftDownVector: '⇃',
  LeftDownVectorBar: '⥙',
  LeftFloor: '⌊',
  LeftRightArrow: '↔',
  LeftRightVector: '⥎',
  LeftTee: '⊣',
  LeftTeeArrow: '↤',
  LeftTeeVector: '⥚',
  LeftTriangle: '⊲',
  LeftTriangleBar: '⧏',
  LeftTriangleEqual: '⊴',
  LeftUpDownVector: '⥑',
  LeftUpTeeVector: '⥠',
  LeftUpVector: '↿',
  LeftUpVectorBar: '⥘',
  LeftVector: '↼',
  LeftVectorBar: '⥒',
  Leftarrow: '⇐',
  Leftrightarrow: '⇔',
  LessEqualGreater: '⋚',
  LessFullEqual: '≦',
  LessGreater: '≶',
  LessLess: '⪡',
  LessSlantEqual: '⩽',
  LessTilde: '≲',
  Lfr: '𝔏',
  Ll: '⋘',
  Lleftarrow: '⇚',
  Lmidot: 'Ŀ',
  LongLeftArrow: '⟵',
  LongLeftRightArrow: '⟷',
  LongRightArrow: '⟶',
  Longleftarrow: '⟸',
  Longleftrightarrow: '⟺',
  Longrightarrow: '⟹',
  Lopf: '𝕃',
  LowerLeftArrow: '↙',
  LowerRightArrow: '↘',
  Lscr: 'ℒ',
  Lsh: '↰',
  Lstrok: 'Ł',
  Lt: '≪',
  Map: '⤅',
  Mcy: 'М',
  MediumSpace: ' ',
  Mellintrf: 'ℳ',
  Mfr: '𝔐',
  MinusPlus: '∓',
  Mopf: '𝕄',
  Mscr: 'ℳ',
  Mu: 'Μ',
  NJcy: 'Њ',
  Nacute: 'Ń',
  Ncaron: 'Ň',
  Ncedil: 'Ņ',
  Ncy: 'Н',
  NegativeMediumSpace: '​',
  NegativeThickSpace: '​',
  NegativeThinSpace: '​',
  NegativeVeryThinSpace: '​',
  NestedGreaterGreater: '≫',
  NestedLessLess: '≪',
  NewLine: '\n',
  Nfr: '𝔑',
  NoBreak: '⁠',
  NonBreakingSpace: ' ',
  Nopf: 'ℕ',
  Not: '⫬',
  NotCongruent: '≢',
  NotCupCap: '≭',
  NotDoubleVerticalBar: '∦',
  NotElement: '∉',
  NotEqual: '≠',
  NotEqualTilde: '≂̸',
  NotExists: '∄',
  NotGreater: '≯',
  NotGreaterEqual: '≱',
  NotGreaterFullEqual: '≧̸',
  NotGreaterGreater: '≫̸',
  NotGreaterLess: '≹',
  NotGreaterSlantEqual: '⩾̸',
  NotGreaterTilde: '≵',
  NotHumpDownHump: '≎̸',
  NotHumpEqual: '≏̸',
  NotLeftTriangle: '⋪',
  NotLeftTriangleBar: '⧏̸',
  NotLeftTriangleEqual: '⋬',
  NotLess: '≮',
  NotLessEqual: '≰',
  NotLessGreater: '≸',
  NotLessLess: '≪̸',
  NotLessSlantEqual: '⩽̸',
  NotLessTilde: '≴',
  NotNestedGreaterGreater: '⪢̸',
  NotNestedLessLess: '⪡̸',
  NotPrecedes: '⊀',
  NotPrecedesEqual: '⪯̸',
  NotPrecedesSlantEqual: '⋠',
  NotReverseElement: '∌',
  NotRightTriangle: '⋫',
  NotRightTriangleBar: '⧐̸',
  NotRightTriangleEqual: '⋭',
  NotSquareSubset: '⊏̸',
  NotSquareSubsetEqual: '⋢',
  NotSquareSuperset: '⊐̸',
  NotSquareSupersetEqual: '⋣',
  NotSubset: '⊂⃒',
  NotSubsetEqual: '⊈',
  NotSucceeds: '⊁',
  NotSucceedsEqual: '⪰̸',
  NotSucceedsSlantEqual: '⋡',
  NotSucceedsTilde: '≿̸',
  NotSuperset: '⊃⃒',
  NotSupersetEqual: '⊉',
  NotTilde: '≁',
  NotTildeEqual: '≄',
  NotTildeFullEqual: '≇',
  NotTildeTilde: '≉',
  NotVerticalBar: '∤',
  Nscr: '𝒩',
  Ntild: 'Ñ',
  Ntilde: 'Ñ',
  Nu: 'Ν',
  OElig: 'Œ',
  Oacut: 'Ó',
  Oacute: 'Ó',
  Ocir: 'Ô',
  Ocirc: 'Ô',
  Ocy: 'О',
  Odblac: 'Ő',
  Ofr: '𝔒',
  Ograv: 'Ò',
  Ograve: 'Ò',
  Omacr: 'Ō',
  Omega: 'Ω',
  Omicron: 'Ο',
  Oopf: '𝕆',
  OpenCurlyDoubleQuote: '“',
  OpenCurlyQuote: '‘',
  Or: '⩔',
  Oscr: '𝒪',
  Oslas: 'Ø',
  Oslash: 'Ø',
  Otild: 'Õ',
  Otilde: 'Õ',
  Otimes: '⨷',
  Oum: 'Ö',
  Ouml: 'Ö',
  OverBar: '‾',
  OverBrace: '⏞',
  OverBracket: '⎴',
  OverParenthesis: '⏜',
  PartialD: '∂',
  Pcy: 'П',
  Pfr: '𝔓',
  Phi: 'Φ',
  Pi: 'Π',
  PlusMinus: '±',
  Poincareplane: 'ℌ',
  Popf: 'ℙ',
  Pr: '⪻',
  Precedes: '≺',
  PrecedesEqual: '⪯',
  PrecedesSlantEqual: '≼',
  PrecedesTilde: '≾',
  Prime: '″',
  Product: '∏',
  Proportion: '∷',
  Proportional: '∝',
  Pscr: '𝒫',
  Psi: 'Ψ',
  QUO: '"',
  QUOT: '"',
  Qfr: '𝔔',
  Qopf: 'ℚ',
  Qscr: '𝒬',
  RBarr: '⤐',
  RE: '®',
  REG: '®',
  Racute: 'Ŕ',
  Rang: '⟫',
  Rarr: '↠',
  Rarrtl: '⤖',
  Rcaron: 'Ř',
  Rcedil: 'Ŗ',
  Rcy: 'Р',
  Re: 'ℜ',
  ReverseElement: '∋',
  ReverseEquilibrium: '⇋',
  ReverseUpEquilibrium: '⥯',
  Rfr: 'ℜ',
  Rho: 'Ρ',
  RightAngleBracket: '⟩',
  RightArrow: '→',
  RightArrowBar: '⇥',
  RightArrowLeftArrow: '⇄',
  RightCeiling: '⌉',
  RightDoubleBracket: '⟧',
  RightDownTeeVector: '⥝',
  RightDownVector: '⇂',
  RightDownVectorBar: '⥕',
  RightFloor: '⌋',
  RightTee: '⊢',
  RightTeeArrow: '↦',
  RightTeeVector: '⥛',
  RightTriangle: '⊳',
  RightTriangleBar: '⧐',
  RightTriangleEqual: '⊵',
  RightUpDownVector: '⥏',
  RightUpTeeVector: '⥜',
  RightUpVector: '↾',
  RightUpVectorBar: '⥔',
  RightVector: '⇀',
  RightVectorBar: '⥓',
  Rightarrow: '⇒',
  Ropf: 'ℝ',
  RoundImplies: '⥰',
  Rrightarrow: '⇛',
  Rscr: 'ℛ',
  Rsh: '↱',
  RuleDelayed: '⧴',
  SHCHcy: 'Щ',
  SHcy: 'Ш',
  SOFTcy: 'Ь',
  Sacute: 'Ś',
  Sc: '⪼',
  Scaron: 'Š',
  Scedil: 'Ş',
  Scirc: 'Ŝ',
  Scy: 'С',
  Sfr: '𝔖',
  ShortDownArrow: '↓',
  ShortLeftArrow: '←',
  ShortRightArrow: '→',
  ShortUpArrow: '↑',
  Sigma: 'Σ',
  SmallCircle: '∘',
  Sopf: '𝕊',
  Sqrt: '√',
  Square: '□',
  SquareIntersection: '⊓',
  SquareSubset: '⊏',
  SquareSubsetEqual: '⊑',
  SquareSuperset: '⊐',
  SquareSupersetEqual: '⊒',
  SquareUnion: '⊔',
  Sscr: '𝒮',
  Star: '⋆',
  Sub: '⋐',
  Subset: '⋐',
  SubsetEqual: '⊆',
  Succeeds: '≻',
  SucceedsEqual: '⪰',
  SucceedsSlantEqual: '≽',
  SucceedsTilde: '≿',
  SuchThat: '∋',
  Sum: '∑',
  Sup: '⋑',
  Superset: '⊃',
  SupersetEqual: '⊇',
  Supset: '⋑',
  THOR: 'Þ',
  THORN: 'Þ',
  TRADE: '™',
  TSHcy: 'Ћ',
  TScy: 'Ц',
  Tab: '\t',
  Tau: 'Τ',
  Tcaron: 'Ť',
  Tcedil: 'Ţ',
  Tcy: 'Т',
  Tfr: '𝔗',
  Therefore: '∴',
  Theta: 'Θ',
  ThickSpace: '  ',
  ThinSpace: ' ',
  Tilde: '∼',
  TildeEqual: '≃',
  TildeFullEqual: '≅',
  TildeTilde: '≈',
  Topf: '𝕋',
  TripleDot: '⃛',
  Tscr: '𝒯',
  Tstrok: 'Ŧ',
  Uacut: 'Ú',
  Uacute: 'Ú',
  Uarr: '↟',
  Uarrocir: '⥉',
  Ubrcy: 'Ў',
  Ubreve: 'Ŭ',
  Ucir: 'Û',
  Ucirc: 'Û',
  Ucy: 'У',
  Udblac: 'Ű',
  Ufr: '𝔘',
  Ugrav: 'Ù',
  Ugrave: 'Ù',
  Umacr: 'Ū',
  UnderBar: '_',
  UnderBrace: '⏟',
  UnderBracket: '⎵',
  UnderParenthesis: '⏝',
  Union: '⋃',
  UnionPlus: '⊎',
  Uogon: 'Ų',
  Uopf: '𝕌',
  UpArrow: '↑',
  UpArrowBar: '⤒',
  UpArrowDownArrow: '⇅',
  UpDownArrow: '↕',
  UpEquilibrium: '⥮',
  UpTee: '⊥',
  UpTeeArrow: '↥',
  Uparrow: '⇑',
  Updownarrow: '⇕',
  UpperLeftArrow: '↖',
  UpperRightArrow: '↗',
  Upsi: 'ϒ',
  Upsilon: 'Υ',
  Uring: 'Ů',
  Uscr: '𝒰',
  Utilde: 'Ũ',
  Uum: 'Ü',
  Uuml: 'Ü',
  VDash: '⊫',
  Vbar: '⫫',
  Vcy: 'В',
  Vdash: '⊩',
  Vdashl: '⫦',
  Vee: '⋁',
  Verbar: '‖',
  Vert: '‖',
  VerticalBar: '∣',
  VerticalLine: '|',
  VerticalSeparator: '❘',
  VerticalTilde: '≀',
  VeryThinSpace: ' ',
  Vfr: '𝔙',
  Vopf: '𝕍',
  Vscr: '𝒱',
  Vvdash: '⊪',
  Wcirc: 'Ŵ',
  Wedge: '⋀',
  Wfr: '𝔚',
  Wopf: '𝕎',
  Wscr: '𝒲',
  Xfr: '𝔛',
  Xi: 'Ξ',
  Xopf: '𝕏',
  Xscr: '𝒳',
  YAcy: 'Я',
  YIcy: 'Ї',
  YUcy: 'Ю',
  Yacut: 'Ý',
  Yacute: 'Ý',
  Ycirc: 'Ŷ',
  Ycy: 'Ы',
  Yfr: '𝔜',
  Yopf: '𝕐',
  Yscr: '𝒴',
  Yuml: 'Ÿ',
  ZHcy: 'Ж',
  Zacute: 'Ź',
  Zcaron: 'Ž',
  Zcy: 'З',
  Zdot: 'Ż',
  ZeroWidthSpace: '​',
  Zeta: 'Ζ',
  Zfr: 'ℨ',
  Zopf: 'ℤ',
  Zscr: '𝒵',
  aacut: 'á',
  aacute: 'á',
  abreve: 'ă',
  ac: '∾',
  acE: '∾̳',
  acd: '∿',
  acir: 'â',
  acirc: 'â',
  acut: '´',
  acute: '´',
  acy: 'а',
  aeli: 'æ',
  aelig: 'æ',
  af: '⁡',
  afr: '𝔞',
  agrav: 'à',
  agrave: 'à',
  alefsym: 'ℵ',
  aleph: 'ℵ',
  alpha: 'α',
  amacr: 'ā',
  amalg: '⨿',
  am: '&',
  amp: '&',
  and: '∧',
  andand: '⩕',
  andd: '⩜',
  andslope: '⩘',
  andv: '⩚',
  ang: '∠',
  ange: '⦤',
  angle: '∠',
  angmsd: '∡',
  angmsdaa: '⦨',
  angmsdab: '⦩',
  angmsdac: '⦪',
  angmsdad: '⦫',
  angmsdae: '⦬',
  angmsdaf: '⦭',
  angmsdag: '⦮',
  angmsdah: '⦯',
  angrt: '∟',
  angrtvb: '⊾',
  angrtvbd: '⦝',
  angsph: '∢',
  angst: 'Å',
  angzarr: '⍼',
  aogon: 'ą',
  aopf: '𝕒',
  ap: '≈',
  apE: '⩰',
  apacir: '⩯',
  ape: '≊',
  apid: '≋',
  apos: "'",
  approx: '≈',
  approxeq: '≊',
  arin: 'å',
  aring: 'å',
  ascr: '𝒶',
  ast: '*',
  asymp: '≈',
  asympeq: '≍',
  atild: 'ã',
  atilde: 'ã',
  aum: 'ä',
  auml: 'ä',
  awconint: '∳',
  awint: '⨑',
  bNot: '⫭',
  backcong: '≌',
  backepsilon: '϶',
  backprime: '‵',
  backsim: '∽',
  backsimeq: '⋍',
  barvee: '⊽',
  barwed: '⌅',
  barwedge: '⌅',
  bbrk: '⎵',
  bbrktbrk: '⎶',
  bcong: '≌',
  bcy: 'б',
  bdquo: '„',
  becaus: '∵',
  because: '∵',
  bemptyv: '⦰',
  bepsi: '϶',
  bernou: 'ℬ',
  beta: 'β',
  beth: 'ℶ',
  between: '≬',
  bfr: '𝔟',
  bigcap: '⋂',
  bigcirc: '◯',
  bigcup: '⋃',
  bigodot: '⨀',
  bigoplus: '⨁',
  bigotimes: '⨂',
  bigsqcup: '⨆',
  bigstar: '★',
  bigtriangledown: '▽',
  bigtriangleup: '△',
  biguplus: '⨄',
  bigvee: '⋁',
  bigwedge: '⋀',
  bkarow: '⤍',
  blacklozenge: '⧫',
  blacksquare: '▪',
  blacktriangle: '▴',
  blacktriangledown: '▾',
  blacktriangleleft: '◂',
  blacktriangleright: '▸',
  blank: '␣',
  blk12: '▒',
  blk14: '░',
  blk34: '▓',
  block: '█',
  bne: '=⃥',
  bnequiv: '≡⃥',
  bnot: '⌐',
  bopf: '𝕓',
  bot: '⊥',
  bottom: '⊥',
  bowtie: '⋈',
  boxDL: '╗',
  boxDR: '╔',
  boxDl: '╖',
  boxDr: '╓',
  boxH: '═',
  boxHD: '╦',
  boxHU: '╩',
  boxHd: '╤',
  boxHu: '╧',
  boxUL: '╝',
  boxUR: '╚',
  boxUl: '╜',
  boxUr: '╙',
  boxV: '║',
  boxVH: '╬',
  boxVL: '╣',
  boxVR: '╠',
  boxVh: '╫',
  boxVl: '╢',
  boxVr: '╟',
  boxbox: '⧉',
  boxdL: '╕',
  boxdR: '╒',
  boxdl: '┐',
  boxdr: '┌',
  boxh: '─',
  boxhD: '╥',
  boxhU: '╨',
  boxhd: '┬',
  boxhu: '┴',
  boxminus: '⊟',
  boxplus: '⊞',
  boxtimes: '⊠',
  boxuL: '╛',
  boxuR: '╘',
  boxul: '┘',
  boxur: '└',
  boxv: '│',
  boxvH: '╪',
  boxvL: '╡',
  boxvR: '╞',
  boxvh: '┼',
  boxvl: '┤',
  boxvr: '├',
  bprime: '‵',
  breve: '˘',
  brvba: '¦',
  brvbar: '¦',
  bscr: '𝒷',
  bsemi: '⁏',
  bsim: '∽',
  bsime: '⋍',
  bsol: '\\',
  bsolb: '⧅',
  bsolhsub: '⟈',
  bull: '•',
  bullet: '•',
  bump: '≎',
  bumpE: '⪮',
  bumpe: '≏',
  bumpeq: '≏',
  cacute: 'ć',
  cap: '∩',
  capand: '⩄',
  capbrcup: '⩉',
  capcap: '⩋',
  capcup: '⩇',
  capdot: '⩀',
  caps: '∩︀',
  caret: '⁁',
  caron: 'ˇ',
  ccaps: '⩍',
  ccaron: 'č',
  ccedi: 'ç',
  ccedil: 'ç',
  ccirc: 'ĉ',
  ccups: '⩌',
  ccupssm: '⩐',
  cdot: 'ċ',
  cedi: '¸',
  cedil: '¸',
  cemptyv: '⦲',
  cen: '¢',
  cent: '¢',
  centerdot: '·',
  cfr: '𝔠',
  chcy: 'ч',
  check: '✓',
  checkmark: '✓',
  chi: 'χ',
  cir: '○',
  cirE: '⧃',
  circ: 'ˆ',
  circeq: '≗',
  circlearrowleft: '↺',
  circlearrowright: '↻',
  circledR: '®',
  circledS: 'Ⓢ',
  circledast: '⊛',
  circledcirc: '⊚',
  circleddash: '⊝',
  cire: '≗',
  cirfnint: '⨐',
  cirmid: '⫯',
  cirscir: '⧂',
  clubs: '♣',
  clubsuit: '♣',
  colon: ':',
  colone: '≔',
  coloneq: '≔',
  comma: ',',
  commat: '@',
  comp: '∁',
  compfn: '∘',
  complement: '∁',
  complexes: 'ℂ',
  cong: '≅',
  congdot: '⩭',
  conint: '∮',
  copf: '𝕔',
  coprod: '∐',
  cop: '©',
  copy: '©',
  copysr: '℗',
  crarr: '↵',
  cross: '✗',
  cscr: '𝒸',
  csub: '⫏',
  csube: '⫑',
  csup: '⫐',
  csupe: '⫒',
  ctdot: '⋯',
  cudarrl: '⤸',
  cudarrr: '⤵',
  cuepr: '⋞',
  cuesc: '⋟',
  cularr: '↶',
  cularrp: '⤽',
  cup: '∪',
  cupbrcap: '⩈',
  cupcap: '⩆',
  cupcup: '⩊',
  cupdot: '⊍',
  cupor: '⩅',
  cups: '∪︀',
  curarr: '↷',
  curarrm: '⤼',
  curlyeqprec: '⋞',
  curlyeqsucc: '⋟',
  curlyvee: '⋎',
  curlywedge: '⋏',
  curre: '¤',
  curren: '¤',
  curvearrowleft: '↶',
  curvearrowright: '↷',
  cuvee: '⋎',
  cuwed: '⋏',
  cwconint: '∲',
  cwint: '∱',
  cylcty: '⌭',
  dArr: '⇓',
  dHar: '⥥',
  dagger: '†',
  daleth: 'ℸ',
  darr: '↓',
  dash: '‐',
  dashv: '⊣',
  dbkarow: '⤏',
  dblac: '˝',
  dcaron: 'ď',
  dcy: 'д',
  dd: 'ⅆ',
  ddagger: '‡',
  ddarr: '⇊',
  ddotseq: '⩷',
  de: '°',
  deg: '°',
  delta: 'δ',
  demptyv: '⦱',
  dfisht: '⥿',
  dfr: '𝔡',
  dharl: '⇃',
  dharr: '⇂',
  diam: '⋄',
  diamond: '⋄',
  diamondsuit: '♦',
  diams: '♦',
  die: '¨',
  digamma: 'ϝ',
  disin: '⋲',
  div: '÷',
  divid: '÷',
  divide: '÷',
  divideontimes: '⋇',
  divonx: '⋇',
  djcy: 'ђ',
  dlcorn: '⌞',
  dlcrop: '⌍',
  dollar: '$',
  dopf: '𝕕',
  dot: '˙',
  doteq: '≐',
  doteqdot: '≑',
  dotminus: '∸',
  dotplus: '∔',
  dotsquare: '⊡',
  doublebarwedge: '⌆',
  downarrow: '↓',
  downdownarrows: '⇊',
  downharpoonleft: '⇃',
  downharpoonright: '⇂',
  drbkarow: '⤐',
  drcorn: '⌟',
  drcrop: '⌌',
  dscr: '𝒹',
  dscy: 'ѕ',
  dsol: '⧶',
  dstrok: 'đ',
  dtdot: '⋱',
  dtri: '▿',
  dtrif: '▾',
  duarr: '⇵',
  duhar: '⥯',
  dwangle: '⦦',
  dzcy: 'џ',
  dzigrarr: '⟿',
  eDDot: '⩷',
  eDot: '≑',
  eacut: 'é',
  eacute: 'é',
  easter: '⩮',
  ecaron: 'ě',
  ecir: 'ê',
  ecirc: 'ê',
  ecolon: '≕',
  ecy: 'э',
  edot: 'ė',
  ee: 'ⅇ',
  efDot: '≒',
  efr: '𝔢',
  eg: '⪚',
  egrav: 'è',
  egrave: 'è',
  egs: '⪖',
  egsdot: '⪘',
  el: '⪙',
  elinters: '⏧',
  ell: 'ℓ',
  els: '⪕',
  elsdot: '⪗',
  emacr: 'ē',
  empty: '∅',
  emptyset: '∅',
  emptyv: '∅',
  emsp13: ' ',
  emsp14: ' ',
  emsp: ' ',
  eng: 'ŋ',
  ensp: ' ',
  eogon: 'ę',
  eopf: '𝕖',
  epar: '⋕',
  eparsl: '⧣',
  eplus: '⩱',
  epsi: 'ε',
  epsilon: 'ε',
  epsiv: 'ϵ',
  eqcirc: '≖',
  eqcolon: '≕',
  eqsim: '≂',
  eqslantgtr: '⪖',
  eqslantless: '⪕',
  equals: '=',
  equest: '≟',
  equiv: '≡',
  equivDD: '⩸',
  eqvparsl: '⧥',
  erDot: '≓',
  erarr: '⥱',
  escr: 'ℯ',
  esdot: '≐',
  esim: '≂',
  eta: 'η',
  et: 'ð',
  eth: 'ð',
  eum: 'ë',
  euml: 'ë',
  euro: '€',
  excl: '!',
  exist: '∃',
  expectation: 'ℰ',
  exponentiale: 'ⅇ',
  fallingdotseq: '≒',
  fcy: 'ф',
  female: '♀',
  ffilig: 'ﬃ',
  fflig: 'ﬀ',
  ffllig: 'ﬄ',
  ffr: '𝔣',
  filig: 'ﬁ',
  fjlig: 'fj',
  flat: '♭',
  fllig: 'ﬂ',
  fltns: '▱',
  fnof: 'ƒ',
  fopf: '𝕗',
  forall: '∀',
  fork: '⋔',
  forkv: '⫙',
  fpartint: '⨍',
  frac1: '¼',
  frac12: '½',
  frac13: '⅓',
  frac14: '¼',
  frac15: '⅕',
  frac16: '⅙',
  frac18: '⅛',
  frac23: '⅔',
  frac25: '⅖',
  frac3: '¾',
  frac34: '¾',
  frac35: '⅗',
  frac38: '⅜',
  frac45: '⅘',
  frac56: '⅚',
  frac58: '⅝',
  frac78: '⅞',
  frasl: '⁄',
  frown: '⌢',
  fscr: '𝒻',
  gE: '≧',
  gEl: '⪌',
  gacute: 'ǵ',
  gamma: 'γ',
  gammad: 'ϝ',
  gap: '⪆',
  gbreve: 'ğ',
  gcirc: 'ĝ',
  gcy: 'г',
  gdot: 'ġ',
  ge: '≥',
  gel: '⋛',
  geq: '≥',
  geqq: '≧',
  geqslant: '⩾',
  ges: '⩾',
  gescc: '⪩',
  gesdot: '⪀',
  gesdoto: '⪂',
  gesdotol: '⪄',
  gesl: '⋛︀',
  gesles: '⪔',
  gfr: '𝔤',
  gg: '≫',
  ggg: '⋙',
  gimel: 'ℷ',
  gjcy: 'ѓ',
  gl: '≷',
  glE: '⪒',
  gla: '⪥',
  glj: '⪤',
  gnE: '≩',
  gnap: '⪊',
  gnapprox: '⪊',
  gne: '⪈',
  gneq: '⪈',
  gneqq: '≩',
  gnsim: '⋧',
  gopf: '𝕘',
  grave: '`',
  gscr: 'ℊ',
  gsim: '≳',
  gsime: '⪎',
  gsiml: '⪐',
  g: '>',
  gt: '>',
  gtcc: '⪧',
  gtcir: '⩺',
  gtdot: '⋗',
  gtlPar: '⦕',
  gtquest: '⩼',
  gtrapprox: '⪆',
  gtrarr: '⥸',
  gtrdot: '⋗',
  gtreqless: '⋛',
  gtreqqless: '⪌',
  gtrless: '≷',
  gtrsim: '≳',
  gvertneqq: '≩︀',
  gvnE: '≩︀',
  hArr: '⇔',
  hairsp: ' ',
  half: '½',
  hamilt: 'ℋ',
  hardcy: 'ъ',
  harr: '↔',
  harrcir: '⥈',
  harrw: '↭',
  hbar: 'ℏ',
  hcirc: 'ĥ',
  hearts: '♥',
  heartsuit: '♥',
  hellip: '…',
  hercon: '⊹',
  hfr: '𝔥',
  hksearow: '⤥',
  hkswarow: '⤦',
  hoarr: '⇿',
  homtht: '∻',
  hookleftarrow: '↩',
  hookrightarrow: '↪',
  hopf: '𝕙',
  horbar: '―',
  hscr: '𝒽',
  hslash: 'ℏ',
  hstrok: 'ħ',
  hybull: '⁃',
  hyphen: '‐',
  iacut: 'í',
  iacute: 'í',
  ic: '⁣',
  icir: 'î',
  icirc: 'î',
  icy: 'и',
  iecy: 'е',
  iexc: '¡',
  iexcl: '¡',
  iff: '⇔',
  ifr: '𝔦',
  igrav: 'ì',
  igrave: 'ì',
  ii: 'ⅈ',
  iiiint: '⨌',
  iiint: '∭',
  iinfin: '⧜',
  iiota: '℩',
  ijlig: 'ĳ',
  imacr: 'ī',
  image: 'ℑ',
  imagline: 'ℐ',
  imagpart: 'ℑ',
  imath: 'ı',
  imof: '⊷',
  imped: 'Ƶ',
  in: '∈',
  incare: '℅',
  infin: '∞',
  infintie: '⧝',
  inodot: 'ı',
  int: '∫',
  intcal: '⊺',
  integers: 'ℤ',
  intercal: '⊺',
  intlarhk: '⨗',
  intprod: '⨼',
  iocy: 'ё',
  iogon: 'į',
  iopf: '𝕚',
  iota: 'ι',
  iprod: '⨼',
  iques: '¿',
  iquest: '¿',
  iscr: '𝒾',
  isin: '∈',
  isinE: '⋹',
  isindot: '⋵',
  isins: '⋴',
  isinsv: '⋳',
  isinv: '∈',
  it: '⁢',
  itilde: 'ĩ',
  iukcy: 'і',
  ium: 'ï',
  iuml: 'ï',
  jcirc: 'ĵ',
  jcy: 'й',
  jfr: '𝔧',
  jmath: 'ȷ',
  jopf: '𝕛',
  jscr: '𝒿',
  jsercy: 'ј',
  jukcy: 'є',
  kappa: 'κ',
  kappav: 'ϰ',
  kcedil: 'ķ',
  kcy: 'к',
  kfr: '𝔨',
  kgreen: 'ĸ',
  khcy: 'х',
  kjcy: 'ќ',
  kopf: '𝕜',
  kscr: '𝓀',
  lAarr: '⇚',
  lArr: '⇐',
  lAtail: '⤛',
  lBarr: '⤎',
  lE: '≦',
  lEg: '⪋',
  lHar: '⥢',
  lacute: 'ĺ',
  laemptyv: '⦴',
  lagran: 'ℒ',
  lambda: 'λ',
  lang: '⟨',
  langd: '⦑',
  langle: '⟨',
  lap: '⪅',
  laqu: '«',
  laquo: '«',
  larr: '←',
  larrb: '⇤',
  larrbfs: '⤟',
  larrfs: '⤝',
  larrhk: '↩',
  larrlp: '↫',
  larrpl: '⤹',
  larrsim: '⥳',
  larrtl: '↢',
  lat: '⪫',
  latail: '⤙',
  late: '⪭',
  lates: '⪭︀',
  lbarr: '⤌',
  lbbrk: '❲',
  lbrace: '{',
  lbrack: '[',
  lbrke: '⦋',
  lbrksld: '⦏',
  lbrkslu: '⦍',
  lcaron: 'ľ',
  lcedil: 'ļ',
  lceil: '⌈',
  lcub: '{',
  lcy: 'л',
  ldca: '⤶',
  ldquo: '“',
  ldquor: '„',
  ldrdhar: '⥧',
  ldrushar: '⥋',
  ldsh: '↲',
  le: '≤',
  leftarrow: '←',
  leftarrowtail: '↢',
  leftharpoondown: '↽',
  leftharpoonup: '↼',
  leftleftarrows: '⇇',
  leftrightarrow: '↔',
  leftrightarrows: '⇆',
  leftrightharpoons: '⇋',
  leftrightsquigarrow: '↭',
  leftthreetimes: '⋋',
  leg: '⋚',
  leq: '≤',
  leqq: '≦',
  leqslant: '⩽',
  les: '⩽',
  lescc: '⪨',
  lesdot: '⩿',
  lesdoto: '⪁',
  lesdotor: '⪃',
  lesg: '⋚︀',
  lesges: '⪓',
  lessapprox: '⪅',
  lessdot: '⋖',
  lesseqgtr: '⋚',
  lesseqqgtr: '⪋',
  lessgtr: '≶',
  lesssim: '≲',
  lfisht: '⥼',
  lfloor: '⌊',
  lfr: '𝔩',
  lg: '≶',
  lgE: '⪑',
  lhard: '↽',
  lharu: '↼',
  lharul: '⥪',
  lhblk: '▄',
  ljcy: 'љ',
  ll: '≪',
  llarr: '⇇',
  llcorner: '⌞',
  llhard: '⥫',
  lltri: '◺',
  lmidot: 'ŀ',
  lmoust: '⎰',
  lmoustache: '⎰',
  lnE: '≨',
  lnap: '⪉',
  lnapprox: '⪉',
  lne: '⪇',
  lneq: '⪇',
  lneqq: '≨',
  lnsim: '⋦',
  loang: '⟬',
  loarr: '⇽',
  lobrk: '⟦',
  longleftarrow: '⟵',
  longleftrightarrow: '⟷',
  longmapsto: '⟼',
  longrightarrow: '⟶',
  looparrowleft: '↫',
  looparrowright: '↬',
  lopar: '⦅',
  lopf: '𝕝',
  loplus: '⨭',
  lotimes: '⨴',
  lowast: '∗',
  lowbar: '_',
  loz: '◊',
  lozenge: '◊',
  lozf: '⧫',
  lpar: '(',
  lparlt: '⦓',
  lrarr: '⇆',
  lrcorner: '⌟',
  lrhar: '⇋',
  lrhard: '⥭',
  lrm: '‎',
  lrtri: '⊿',
  lsaquo: '‹',
  lscr: '𝓁',
  lsh: '↰',
  lsim: '≲',
  lsime: '⪍',
  lsimg: '⪏',
  lsqb: '[',
  lsquo: '‘',
  lsquor: '‚',
  lstrok: 'ł',
  l: '<',
  lt: '<',
  ltcc: '⪦',
  ltcir: '⩹',
  ltdot: '⋖',
  lthree: '⋋',
  ltimes: '⋉',
  ltlarr: '⥶',
  ltquest: '⩻',
  ltrPar: '⦖',
  ltri: '◃',
  ltrie: '⊴',
  ltrif: '◂',
  lurdshar: '⥊',
  luruhar: '⥦',
  lvertneqq: '≨︀',
  lvnE: '≨︀',
  mDDot: '∺',
  mac: '¯',
  macr: '¯',
  male: '♂',
  malt: '✠',
  maltese: '✠',
  map: '↦',
  mapsto: '↦',
  mapstodown: '↧',
  mapstoleft: '↤',
  mapstoup: '↥',
  marker: '▮',
  mcomma: '⨩',
  mcy: 'м',
  mdash: '—',
  measuredangle: '∡',
  mfr: '𝔪',
  mho: '℧',
  micr: 'µ',
  micro: 'µ',
  mid: '∣',
  midast: '*',
  midcir: '⫰',
  middo: '·',
  middot: '·',
  minus: '−',
  minusb: '⊟',
  minusd: '∸',
  minusdu: '⨪',
  mlcp: '⫛',
  mldr: '…',
  mnplus: '∓',
  models: '⊧',
  mopf: '𝕞',
  mp: '∓',
  mscr: '𝓂',
  mstpos: '∾',
  mu: 'μ',
  multimap: '⊸',
  mumap: '⊸',
  nGg: '⋙̸',
  nGt: '≫⃒',
  nGtv: '≫̸',
  nLeftarrow: '⇍',
  nLeftrightarrow: '⇎',
  nLl: '⋘̸',
  nLt: '≪⃒',
  nLtv: '≪̸',
  nRightarrow: '⇏',
  nVDash: '⊯',
  nVdash: '⊮',
  nabla: '∇',
  nacute: 'ń',
  nang: '∠⃒',
  nap: '≉',
  napE: '⩰̸',
  napid: '≋̸',
  napos: 'ŉ',
  napprox: '≉',
  natur: '♮',
  natural: '♮',
  naturals: 'ℕ',
  nbs: ' ',
  nbsp: ' ',
  nbump: '≎̸',
  nbumpe: '≏̸',
  ncap: '⩃',
  ncaron: 'ň',
  ncedil: 'ņ',
  ncong: '≇',
  ncongdot: '⩭̸',
  ncup: '⩂',
  ncy: 'н',
  ndash: '–',
  ne: '≠',
  neArr: '⇗',
  nearhk: '⤤',
  nearr: '↗',
  nearrow: '↗',
  nedot: '≐̸',
  nequiv: '≢',
  nesear: '⤨',
  nesim: '≂̸',
  nexist: '∄',
  nexists: '∄',
  nfr: '𝔫',
  ngE: '≧̸',
  nge: '≱',
  ngeq: '≱',
  ngeqq: '≧̸',
  ngeqslant: '⩾̸',
  nges: '⩾̸',
  ngsim: '≵',
  ngt: '≯',
  ngtr: '≯',
  nhArr: '⇎',
  nharr: '↮',
  nhpar: '⫲',
  ni: '∋',
  nis: '⋼',
  nisd: '⋺',
  niv: '∋',
  njcy: 'њ',
  nlArr: '⇍',
  nlE: '≦̸',
  nlarr: '↚',
  nldr: '‥',
  nle: '≰',
  nleftarrow: '↚',
  nleftrightarrow: '↮',
  nleq: '≰',
  nleqq: '≦̸',
  nleqslant: '⩽̸',
  nles: '⩽̸',
  nless: '≮',
  nlsim: '≴',
  nlt: '≮',
  nltri: '⋪',
  nltrie: '⋬',
  nmid: '∤',
  nopf: '𝕟',
  no: '¬',
  not: '¬',
  notin: '∉',
  notinE: '⋹̸',
  notindot: '⋵̸',
  notinva: '∉',
  notinvb: '⋷',
  notinvc: '⋶',
  notni: '∌',
  notniva: '∌',
  notnivb: '⋾',
  notnivc: '⋽',
  npar: '∦',
  nparallel: '∦',
  nparsl: '⫽⃥',
  npart: '∂̸',
  npolint: '⨔',
  npr: '⊀',
  nprcue: '⋠',
  npre: '⪯̸',
  nprec: '⊀',
  npreceq: '⪯̸',
  nrArr: '⇏',
  nrarr: '↛',
  nrarrc: '⤳̸',
  nrarrw: '↝̸',
  nrightarrow: '↛',
  nrtri: '⋫',
  nrtrie: '⋭',
  nsc: '⊁',
  nsccue: '⋡',
  nsce: '⪰̸',
  nscr: '𝓃',
  nshortmid: '∤',
  nshortparallel: '∦',
  nsim: '≁',
  nsime: '≄',
  nsimeq: '≄',
  nsmid: '∤',
  nspar: '∦',
  nsqsube: '⋢',
  nsqsupe: '⋣',
  nsub: '⊄',
  nsubE: '⫅̸',
  nsube: '⊈',
  nsubset: '⊂⃒',
  nsubseteq: '⊈',
  nsubseteqq: '⫅̸',
  nsucc: '⊁',
  nsucceq: '⪰̸',
  nsup: '⊅',
  nsupE: '⫆̸',
  nsupe: '⊉',
  nsupset: '⊃⃒',
  nsupseteq: '⊉',
  nsupseteqq: '⫆̸',
  ntgl: '≹',
  ntild: 'ñ',
  ntilde: 'ñ',
  ntlg: '≸',
  ntriangleleft: '⋪',
  ntrianglelefteq: '⋬',
  ntriangleright: '⋫',
  ntrianglerighteq: '⋭',
  nu: 'ν',
  num: '#',
  numero: '№',
  numsp: ' ',
  nvDash: '⊭',
  nvHarr: '⤄',
  nvap: '≍⃒',
  nvdash: '⊬',
  nvge: '≥⃒',
  nvgt: '>⃒',
  nvinfin: '⧞',
  nvlArr: '⤂',
  nvle: '≤⃒',
  nvlt: '<⃒',
  nvltrie: '⊴⃒',
  nvrArr: '⤃',
  nvrtrie: '⊵⃒',
  nvsim: '∼⃒',
  nwArr: '⇖',
  nwarhk: '⤣',
  nwarr: '↖',
  nwarrow: '↖',
  nwnear: '⤧',
  oS: 'Ⓢ',
  oacut: 'ó',
  oacute: 'ó',
  oast: '⊛',
  ocir: 'ô',
  ocirc: 'ô',
  ocy: 'о',
  odash: '⊝',
  odblac: 'ő',
  odiv: '⨸',
  odot: '⊙',
  odsold: '⦼',
  oelig: 'œ',
  ofcir: '⦿',
  ofr: '𝔬',
  ogon: '˛',
  ograv: 'ò',
  ograve: 'ò',
  ogt: '⧁',
  ohbar: '⦵',
  ohm: 'Ω',
  oint: '∮',
  olarr: '↺',
  olcir: '⦾',
  olcross: '⦻',
  oline: '‾',
  olt: '⧀',
  omacr: 'ō',
  omega: 'ω',
  omicron: 'ο',
  omid: '⦶',
  ominus: '⊖',
  oopf: '𝕠',
  opar: '⦷',
  operp: '⦹',
  oplus: '⊕',
  or: '∨',
  orarr: '↻',
  ord: 'º',
  order: 'ℴ',
  orderof: 'ℴ',
  ordf: 'ª',
  ordm: 'º',
  origof: '⊶',
  oror: '⩖',
  orslope: '⩗',
  orv: '⩛',
  oscr: 'ℴ',
  oslas: 'ø',
  oslash: 'ø',
  osol: '⊘',
  otild: 'õ',
  otilde: 'õ',
  otimes: '⊗',
  otimesas: '⨶',
  oum: 'ö',
  ouml: 'ö',
  ovbar: '⌽',
  par: '¶',
  para: '¶',
  parallel: '∥',
  parsim: '⫳',
  parsl: '⫽',
  part: '∂',
  pcy: 'п',
  percnt: '%',
  period: '.',
  permil: '‰',
  perp: '⊥',
  pertenk: '‱',
  pfr: '𝔭',
  phi: 'φ',
  phiv: 'ϕ',
  phmmat: 'ℳ',
  phone: '☎',
  pi: 'π',
  pitchfork: '⋔',
  piv: 'ϖ',
  planck: 'ℏ',
  planckh: 'ℎ',
  plankv: 'ℏ',
  plus: '+',
  plusacir: '⨣',
  plusb: '⊞',
  pluscir: '⨢',
  plusdo: '∔',
  plusdu: '⨥',
  pluse: '⩲',
  plusm: '±',
  plusmn: '±',
  plussim: '⨦',
  plustwo: '⨧',
  pm: '±',
  pointint: '⨕',
  popf: '𝕡',
  poun: '£',
  pound: '£',
  pr: '≺',
  prE: '⪳',
  prap: '⪷',
  prcue: '≼',
  pre: '⪯',
  prec: '≺',
  precapprox: '⪷',
  preccurlyeq: '≼',
  preceq: '⪯',
  precnapprox: '⪹',
  precneqq: '⪵',
  precnsim: '⋨',
  precsim: '≾',
  prime: '′',
  primes: 'ℙ',
  prnE: '⪵',
  prnap: '⪹',
  prnsim: '⋨',
  prod: '∏',
  profalar: '⌮',
  profline: '⌒',
  profsurf: '⌓',
  prop: '∝',
  propto: '∝',
  prsim: '≾',
  prurel: '⊰',
  pscr: '𝓅',
  psi: 'ψ',
  puncsp: ' ',
  qfr: '𝔮',
  qint: '⨌',
  qopf: '𝕢',
  qprime: '⁗',
  qscr: '𝓆',
  quaternions: 'ℍ',
  quatint: '⨖',
  quest: '?',
  questeq: '≟',
  quo: '"',
  quot: '"',
  rAarr: '⇛',
  rArr: '⇒',
  rAtail: '⤜',
  rBarr: '⤏',
  rHar: '⥤',
  race: '∽̱',
  racute: 'ŕ',
  radic: '√',
  raemptyv: '⦳',
  rang: '⟩',
  rangd: '⦒',
  range: '⦥',
  rangle: '⟩',
  raqu: '»',
  raquo: '»',
  rarr: '→',
  rarrap: '⥵',
  rarrb: '⇥',
  rarrbfs: '⤠',
  rarrc: '⤳',
  rarrfs: '⤞',
  rarrhk: '↪',
  rarrlp: '↬',
  rarrpl: '⥅',
  rarrsim: '⥴',
  rarrtl: '↣',
  rarrw: '↝',
  ratail: '⤚',
  ratio: '∶',
  rationals: 'ℚ',
  rbarr: '⤍',
  rbbrk: '❳',
  rbrace: '}',
  rbrack: ']',
  rbrke: '⦌',
  rbrksld: '⦎',
  rbrkslu: '⦐',
  rcaron: 'ř',
  rcedil: 'ŗ',
  rceil: '⌉',
  rcub: '}',
  rcy: 'р',
  rdca: '⤷',
  rdldhar: '⥩',
  rdquo: '”',
  rdquor: '”',
  rdsh: '↳',
  real: 'ℜ',
  realine: 'ℛ',
  realpart: 'ℜ',
  reals: 'ℝ',
  rect: '▭',
  re: '®',
  reg: '®',
  rfisht: '⥽',
  rfloor: '⌋',
  rfr: '𝔯',
  rhard: '⇁',
  rharu: '⇀',
  rharul: '⥬',
  rho: 'ρ',
  rhov: 'ϱ',
  rightarrow: '→',
  rightarrowtail: '↣',
  rightharpoondown: '⇁',
  rightharpoonup: '⇀',
  rightleftarrows: '⇄',
  rightleftharpoons: '⇌',
  rightrightarrows: '⇉',
  rightsquigarrow: '↝',
  rightthreetimes: '⋌',
  ring: '˚',
  risingdotseq: '≓',
  rlarr: '⇄',
  rlhar: '⇌',
  rlm: '‏',
  rmoust: '⎱',
  rmoustache: '⎱',
  rnmid: '⫮',
  roang: '⟭',
  roarr: '⇾',
  robrk: '⟧',
  ropar: '⦆',
  ropf: '𝕣',
  roplus: '⨮',
  rotimes: '⨵',
  rpar: ')',
  rpargt: '⦔',
  rppolint: '⨒',
  rrarr: '⇉',
  rsaquo: '›',
  rscr: '𝓇',
  rsh: '↱',
  rsqb: ']',
  rsquo: '’',
  rsquor: '’',
  rthree: '⋌',
  rtimes: '⋊',
  rtri: '▹',
  rtrie: '⊵',
  rtrif: '▸',
  rtriltri: '⧎',
  ruluhar: '⥨',
  rx: '℞',
  sacute: 'ś',
  sbquo: '‚',
  sc: '≻',
  scE: '⪴',
  scap: '⪸',
  scaron: 'š',
  sccue: '≽',
  sce: '⪰',
  scedil: 'ş',
  scirc: 'ŝ',
  scnE: '⪶',
  scnap: '⪺',
  scnsim: '⋩',
  scpolint: '⨓',
  scsim: '≿',
  scy: 'с',
  sdot: '⋅',
  sdotb: '⊡',
  sdote: '⩦',
  seArr: '⇘',
  searhk: '⤥',
  searr: '↘',
  searrow: '↘',
  sec: '§',
  sect: '§',
  semi: ';',
  seswar: '⤩',
  setminus: '∖',
  setmn: '∖',
  sext: '✶',
  sfr: '𝔰',
  sfrown: '⌢',
  sharp: '♯',
  shchcy: 'щ',
  shcy: 'ш',
  shortmid: '∣',
  shortparallel: '∥',
  sh: '­',
  shy: '­',
  sigma: 'σ',
  sigmaf: 'ς',
  sigmav: 'ς',
  sim: '∼',
  simdot: '⩪',
  sime: '≃',
  simeq: '≃',
  simg: '⪞',
  simgE: '⪠',
  siml: '⪝',
  simlE: '⪟',
  simne: '≆',
  simplus: '⨤',
  simrarr: '⥲',
  slarr: '←',
  smallsetminus: '∖',
  smashp: '⨳',
  smeparsl: '⧤',
  smid: '∣',
  smile: '⌣',
  smt: '⪪',
  smte: '⪬',
  smtes: '⪬︀',
  softcy: 'ь',
  sol: '/',
  solb: '⧄',
  solbar: '⌿',
  sopf: '𝕤',
  spades: '♠',
  spadesuit: '♠',
  spar: '∥',
  sqcap: '⊓',
  sqcaps: '⊓︀',
  sqcup: '⊔',
  sqcups: '⊔︀',
  sqsub: '⊏',
  sqsube: '⊑',
  sqsubset: '⊏',
  sqsubseteq: '⊑',
  sqsup: '⊐',
  sqsupe: '⊒',
  sqsupset: '⊐',
  sqsupseteq: '⊒',
  squ: '□',
  square: '□',
  squarf: '▪',
  squf: '▪',
  srarr: '→',
  sscr: '𝓈',
  ssetmn: '∖',
  ssmile: '⌣',
  sstarf: '⋆',
  star: '☆',
  starf: '★',
  straightepsilon: 'ϵ',
  straightphi: 'ϕ',
  strns: '¯',
  sub: '⊂',
  subE: '⫅',
  subdot: '⪽',
  sube: '⊆',
  subedot: '⫃',
  submult: '⫁',
  subnE: '⫋',
  subne: '⊊',
  subplus: '⪿',
  subrarr: '⥹',
  subset: '⊂',
  subseteq: '⊆',
  subseteqq: '⫅',
  subsetneq: '⊊',
  subsetneqq: '⫋',
  subsim: '⫇',
  subsub: '⫕',
  subsup: '⫓',
  succ: '≻',
  succapprox: '⪸',
  succcurlyeq: '≽',
  succeq: '⪰',
  succnapprox: '⪺',
  succneqq: '⪶',
  succnsim: '⋩',
  succsim: '≿',
  sum: '∑',
  sung: '♪',
  sup: '⊃',
  sup1: '¹',
  sup2: '²',
  sup3: '³',
  supE: '⫆',
  supdot: '⪾',
  supdsub: '⫘',
  supe: '⊇',
  supedot: '⫄',
  suphsol: '⟉',
  suphsub: '⫗',
  suplarr: '⥻',
  supmult: '⫂',
  supnE: '⫌',
  supne: '⊋',
  supplus: '⫀',
  supset: '⊃',
  supseteq: '⊇',
  supseteqq: '⫆',
  supsetneq: '⊋',
  supsetneqq: '⫌',
  supsim: '⫈',
  supsub: '⫔',
  supsup: '⫖',
  swArr: '⇙',
  swarhk: '⤦',
  swarr: '↙',
  swarrow: '↙',
  swnwar: '⤪',
  szli: 'ß',
  szlig: 'ß',
  target: '⌖',
  tau: 'τ',
  tbrk: '⎴',
  tcaron: 'ť',
  tcedil: 'ţ',
  tcy: 'т',
  tdot: '⃛',
  telrec: '⌕',
  tfr: '𝔱',
  there4: '∴',
  therefore: '∴',
  theta: 'θ',
  thetasym: 'ϑ',
  thetav: 'ϑ',
  thickapprox: '≈',
  thicksim: '∼',
  thinsp: ' ',
  thkap: '≈',
  thksim: '∼',
  thor: 'þ',
  thorn: 'þ',
  tilde: '˜',
  time: '×',
  times: '×',
  timesb: '⊠',
  timesbar: '⨱',
  timesd: '⨰',
  tint: '∭',
  toea: '⤨',
  top: '⊤',
  topbot: '⌶',
  topcir: '⫱',
  topf: '𝕥',
  topfork: '⫚',
  tosa: '⤩',
  tprime: '‴',
  trade: '™',
  triangle: '▵',
  triangledown: '▿',
  triangleleft: '◃',
  trianglelefteq: '⊴',
  triangleq: '≜',
  triangleright: '▹',
  trianglerighteq: '⊵',
  tridot: '◬',
  trie: '≜',
  triminus: '⨺',
  triplus: '⨹',
  trisb: '⧍',
  tritime: '⨻',
  trpezium: '⏢',
  tscr: '𝓉',
  tscy: 'ц',
  tshcy: 'ћ',
  tstrok: 'ŧ',
  twixt: '≬',
  twoheadleftarrow: '↞',
  twoheadrightarrow: '↠',
  uArr: '⇑',
  uHar: '⥣',
  uacut: 'ú',
  uacute: 'ú',
  uarr: '↑',
  ubrcy: 'ў',
  ubreve: 'ŭ',
  ucir: 'û',
  ucirc: 'û',
  ucy: 'у',
  udarr: '⇅',
  udblac: 'ű',
  udhar: '⥮',
  ufisht: '⥾',
  ufr: '𝔲',
  ugrav: 'ù',
  ugrave: 'ù',
  uharl: '↿',
  uharr: '↾',
  uhblk: '▀',
  ulcorn: '⌜',
  ulcorner: '⌜',
  ulcrop: '⌏',
  ultri: '◸',
  umacr: 'ū',
  um: '¨',
  uml: '¨',
  uogon: 'ų',
  uopf: '𝕦',
  uparrow: '↑',
  updownarrow: '↕',
  upharpoonleft: '↿',
  upharpoonright: '↾',
  uplus: '⊎',
  upsi: 'υ',
  upsih: 'ϒ',
  upsilon: 'υ',
  upuparrows: '⇈',
  urcorn: '⌝',
  urcorner: '⌝',
  urcrop: '⌎',
  uring: 'ů',
  urtri: '◹',
  uscr: '𝓊',
  utdot: '⋰',
  utilde: 'ũ',
  utri: '▵',
  utrif: '▴',
  uuarr: '⇈',
  uum: 'ü',
  uuml: 'ü',
  uwangle: '⦧',
  vArr: '⇕',
  vBar: '⫨',
  vBarv: '⫩',
  vDash: '⊨',
  vangrt: '⦜',
  varepsilon: 'ϵ',
  varkappa: 'ϰ',
  varnothing: '∅',
  varphi: 'ϕ',
  varpi: 'ϖ',
  varpropto: '∝',
  varr: '↕',
  varrho: 'ϱ',
  varsigma: 'ς',
  varsubsetneq: '⊊︀',
  varsubsetneqq: '⫋︀',
  varsupsetneq: '⊋︀',
  varsupsetneqq: '⫌︀',
  vartheta: 'ϑ',
  vartriangleleft: '⊲',
  vartriangleright: '⊳',
  vcy: 'в',
  vdash: '⊢',
  vee: '∨',
  veebar: '⊻',
  veeeq: '≚',
  vellip: '⋮',
  verbar: '|',
  vert: '|',
  vfr: '𝔳',
  vltri: '⊲',
  vnsub: '⊂⃒',
  vnsup: '⊃⃒',
  vopf: '𝕧',
  vprop: '∝',
  vrtri: '⊳',
  vscr: '𝓋',
  vsubnE: '⫋︀',
  vsubne: '⊊︀',
  vsupnE: '⫌︀',
  vsupne: '⊋︀',
  vzigzag: '⦚',
  wcirc: 'ŵ',
  wedbar: '⩟',
  wedge: '∧',
  wedgeq: '≙',
  weierp: '℘',
  wfr: '𝔴',
  wopf: '𝕨',
  wp: '℘',
  wr: '≀',
  wreath: '≀',
  wscr: '𝓌',
  xcap: '⋂',
  xcirc: '◯',
  xcup: '⋃',
  xdtri: '▽',
  xfr: '𝔵',
  xhArr: '⟺',
  xharr: '⟷',
  xi: 'ξ',
  xlArr: '⟸',
  xlarr: '⟵',
  xmap: '⟼',
  xnis: '⋻',
  xodot: '⨀',
  xopf: '𝕩',
  xoplus: '⨁',
  xotime: '⨂',
  xrArr: '⟹',
  xrarr: '⟶',
  xscr: '𝓍',
  xsqcup: '⨆',
  xuplus: '⨄',
  xutri: '△',
  xvee: '⋁',
  xwedge: '⋀',
  yacut: 'ý',
  yacute: 'ý',
  yacy: 'я',
  ycirc: 'ŷ',
  ycy: 'ы',
  ye: '¥',
  yen: '¥',
  yfr: '𝔶',
  yicy: 'ї',
  yopf: '𝕪',
  yscr: '𝓎',
  yucy: 'ю',
  yum: 'ÿ',
  yuml: 'ÿ',
  zacute: 'ź',
  zcaron: 'ž',
  zcy: 'з',
  zdot: 'ż',
  zeetrf: 'ℨ',
  zeta: 'ζ',
  zfr: '𝔷',
  zhcy: 'ж',
  zigrarr: '⇝',
  zopf: '𝕫',
  zscr: '𝓏',
  zwj: '‍',
  zwnj: '‌'
};const own$7 = {}.hasOwnProperty;

/**
 * Decode a single character reference (without the `&` or `;`).
 * You probably only need this when you’re building parsers yourself that follow
 * different rules compared to HTML.
 * This is optimized to be tiny in browsers.
 *
 * @param {string} value
 *   `notin` (named), `#123` (deci), `#x123` (hexa).
 * @returns {string|false}
 *   Decoded reference.
 */
function decodeNamedCharacterReference(value) {
  return own$7.call(characterEntities, value) ? characterEntities[value] : false
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */

/** @type {Construct} */
const characterReference = {
  name: 'characterReference',
  tokenize: tokenizeCharacterReference
};
/** @type {Tokenizer} */

function tokenizeCharacterReference(effects, ok, nok) {
  const self = this;
  let size = 0;
  /** @type {number} */

  let max;
  /** @type {(code: Code) => code is number} */

  let test;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('characterReference');
    effects.enter('characterReferenceMarker');
    effects.consume(code);
    effects.exit('characterReferenceMarker');
    return open
  }
  /** @type {State} */

  function open(code) {
    if (code === 35) {
      effects.enter('characterReferenceMarkerNumeric');
      effects.consume(code);
      effects.exit('characterReferenceMarkerNumeric');
      return numeric
    }

    effects.enter('characterReferenceValue');
    max = 31;
    test = asciiAlphanumeric;
    return value(code)
  }
  /** @type {State} */

  function numeric(code) {
    if (code === 88 || code === 120) {
      effects.enter('characterReferenceMarkerHexadecimal');
      effects.consume(code);
      effects.exit('characterReferenceMarkerHexadecimal');
      effects.enter('characterReferenceValue');
      max = 6;
      test = asciiHexDigit;
      return value
    }

    effects.enter('characterReferenceValue');
    max = 7;
    test = asciiDigit;
    return value(code)
  }
  /** @type {State} */

  function value(code) {
    /** @type {Token} */
    let token;

    if (code === 59 && size) {
      token = effects.exit('characterReferenceValue');

      if (
        test === asciiAlphanumeric &&
        !decodeNamedCharacterReference(self.sliceSerialize(token))
      ) {
        return nok(code)
      }

      effects.enter('characterReferenceMarker');
      effects.consume(code);
      effects.exit('characterReferenceMarker');
      effects.exit('characterReference');
      return ok
    }

    if (test(code) && size++ < max) {
      effects.consume(code);
      return value
    }

    return nok(code)
  }
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */

/** @type {Construct} */
const codeFenced = {
  name: 'codeFenced',
  tokenize: tokenizeCodeFenced,
  concrete: true
};
/** @type {Tokenizer} */

function tokenizeCodeFenced(effects, ok, nok) {
  const self = this;
  /** @type {Construct} */

  const closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: true
  };
  /** @type {Construct} */

  const nonLazyLine = {
    tokenize: tokenizeNonLazyLine,
    partial: true
  };
  const tail = this.events[this.events.length - 1];
  const initialPrefix =
    tail && tail[1].type === 'linePrefix'
      ? tail[2].sliceSerialize(tail[1], true).length
      : 0;
  let sizeOpen = 0;
  /** @type {NonNullable<Code>} */

  let marker;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('codeFenced');
    effects.enter('codeFencedFence');
    effects.enter('codeFencedFenceSequence');
    marker = code;
    return sequenceOpen(code)
  }
  /** @type {State} */

  function sequenceOpen(code) {
    if (code === marker) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen
    }

    effects.exit('codeFencedFenceSequence');
    return sizeOpen < 3
      ? nok(code)
      : factorySpace(effects, infoOpen, 'whitespace')(code)
  }
  /** @type {State} */

  function infoOpen(code) {
    if (code === null || markdownLineEnding(code)) {
      return openAfter(code)
    }

    effects.enter('codeFencedFenceInfo');
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return info(code)
  }
  /** @type {State} */

  function info(code) {
    if (code === null || markdownLineEndingOrSpace(code)) {
      effects.exit('chunkString');
      effects.exit('codeFencedFenceInfo');
      return factorySpace(effects, infoAfter, 'whitespace')(code)
    }

    if (code === 96 && code === marker) return nok(code)
    effects.consume(code);
    return info
  }
  /** @type {State} */

  function infoAfter(code) {
    if (code === null || markdownLineEnding(code)) {
      return openAfter(code)
    }

    effects.enter('codeFencedFenceMeta');
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return meta(code)
  }
  /** @type {State} */

  function meta(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('chunkString');
      effects.exit('codeFencedFenceMeta');
      return openAfter(code)
    }

    if (code === 96 && code === marker) return nok(code)
    effects.consume(code);
    return meta
  }
  /** @type {State} */

  function openAfter(code) {
    effects.exit('codeFencedFence');
    return self.interrupt ? ok(code) : contentStart(code)
  }
  /** @type {State} */

  function contentStart(code) {
    if (code === null) {
      return after(code)
    }

    if (markdownLineEnding(code)) {
      return effects.attempt(
        nonLazyLine,
        effects.attempt(
          closingFenceConstruct,
          after,
          initialPrefix
            ? factorySpace(
                effects,
                contentStart,
                'linePrefix',
                initialPrefix + 1
              )
            : contentStart
        ),
        after
      )(code)
    }

    effects.enter('codeFlowValue');
    return contentContinue(code)
  }
  /** @type {State} */

  function contentContinue(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue');
      return contentStart(code)
    }

    effects.consume(code);
    return contentContinue
  }
  /** @type {State} */

  function after(code) {
    effects.exit('codeFenced');
    return ok(code)
  }
  /** @type {Tokenizer} */

  function tokenizeNonLazyLine(effects, ok, nok) {
    const self = this;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return lineStart
    }
    /** @type {State} */

    function lineStart(code) {
      return self.parser.lazy[self.now().line] ? nok(code) : ok(code)
    }
  }
  /** @type {Tokenizer} */

  function tokenizeClosingFence(effects, ok, nok) {
    let size = 0;
    return factorySpace(
      effects,
      closingSequenceStart,
      'linePrefix',
      this.parser.constructs.disable.null.includes('codeIndented')
        ? undefined
        : 4
    )
    /** @type {State} */

    function closingSequenceStart(code) {
      effects.enter('codeFencedFence');
      effects.enter('codeFencedFenceSequence');
      return closingSequence(code)
    }
    /** @type {State} */

    function closingSequence(code) {
      if (code === marker) {
        effects.consume(code);
        size++;
        return closingSequence
      }

      if (size < sizeOpen) return nok(code)
      effects.exit('codeFencedFenceSequence');
      return factorySpace(effects, closingSequenceEnd, 'whitespace')(code)
    }
    /** @type {State} */

    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('codeFencedFence');
        return ok(code)
      }

      return nok(code)
    }
  }
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
const codeIndented = {
  name: 'codeIndented',
  tokenize: tokenizeCodeIndented
};
/** @type {Construct} */

const indentedContent = {
  tokenize: tokenizeIndentedContent,
  partial: true
};
/** @type {Tokenizer} */

function tokenizeCodeIndented(effects, ok, nok) {
  const self = this;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('codeIndented');
    return factorySpace(effects, afterStartPrefix, 'linePrefix', 4 + 1)(code)
  }
  /** @type {State} */

  function afterStartPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail &&
      tail[1].type === 'linePrefix' &&
      tail[2].sliceSerialize(tail[1], true).length >= 4
      ? afterPrefix(code)
      : nok(code)
  }
  /** @type {State} */

  function afterPrefix(code) {
    if (code === null) {
      return after(code)
    }

    if (markdownLineEnding(code)) {
      return effects.attempt(indentedContent, afterPrefix, after)(code)
    }

    effects.enter('codeFlowValue');
    return content(code)
  }
  /** @type {State} */

  function content(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue');
      return afterPrefix(code)
    }

    effects.consume(code);
    return content
  }
  /** @type {State} */

  function after(code) {
    effects.exit('codeIndented');
    return ok(code)
  }
}
/** @type {Tokenizer} */

function tokenizeIndentedContent(effects, ok, nok) {
  const self = this;
  return start
  /** @type {State} */

  function start(code) {
    // If this is a lazy line, it can’t be code.
    if (self.parser.lazy[self.now().line]) {
      return nok(code)
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return start
    }

    return factorySpace(effects, afterPrefix, 'linePrefix', 4 + 1)(code)
  }
  /** @type {State} */

  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail &&
      tail[1].type === 'linePrefix' &&
      tail[2].sliceSerialize(tail[1], true).length >= 4
      ? ok(code)
      : markdownLineEnding(code)
      ? start(code)
      : nok(code)
  }
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Previous} Previous
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
const codeText = {
  name: 'codeText',
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous
};
/** @type {Resolver} */

function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  /** @type {number} */

  let index;
  /** @type {number|undefined} */

  let enter; // If we start and end with an EOL or a space.

  if (
    (events[headEnterIndex][1].type === 'lineEnding' ||
      events[headEnterIndex][1].type === 'space') &&
    (events[tailExitIndex][1].type === 'lineEnding' ||
      events[tailExitIndex][1].type === 'space')
  ) {
    index = headEnterIndex; // And we have data.

    while (++index < tailExitIndex) {
      if (events[index][1].type === 'codeTextData') {
        // Then we have padding.
        events[headEnterIndex][1].type = 'codeTextPadding';
        events[tailExitIndex][1].type = 'codeTextPadding';
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break
      }
    }
  } // Merge adjacent spaces and data.

  index = headEnterIndex - 1;
  tailExitIndex++;

  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (index !== tailExitIndex && events[index][1].type !== 'lineEnding') {
        enter = index;
      }
    } else if (
      index === tailExitIndex ||
      events[index][1].type === 'lineEnding'
    ) {
      events[enter][1].type = 'codeTextData';

      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end;
        events.splice(enter + 2, index - enter - 2);
        tailExitIndex -= index - enter - 2;
        index = enter + 2;
      }

      enter = undefined;
    }
  }

  return events
}
/** @type {Previous} */

function previous(code) {
  // If there is a previous code, there will always be a tail.
  return (
    code !== 96 ||
    this.events[this.events.length - 1][1].type === 'characterEscape'
  )
}
/** @type {Tokenizer} */

function tokenizeCodeText(effects, ok, nok) {
  let sizeOpen = 0;
  /** @type {number} */

  let size;
  /** @type {Token} */

  let token;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('codeText');
    effects.enter('codeTextSequence');
    return openingSequence(code)
  }
  /** @type {State} */

  function openingSequence(code) {
    if (code === 96) {
      effects.consume(code);
      sizeOpen++;
      return openingSequence
    }

    effects.exit('codeTextSequence');
    return gap(code)
  }
  /** @type {State} */

  function gap(code) {
    // EOF.
    if (code === null) {
      return nok(code)
    } // Closing fence?
    // Could also be data.

    if (code === 96) {
      token = effects.enter('codeTextSequence');
      size = 0;
      return closingSequence(code)
    } // Tabs don’t work, and virtual spaces don’t make sense.

    if (code === 32) {
      effects.enter('space');
      effects.consume(code);
      effects.exit('space');
      return gap
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return gap
    } // Data.

    effects.enter('codeTextData');
    return data(code)
  } // In code.

  /** @type {State} */

  function data(code) {
    if (
      code === null ||
      code === 32 ||
      code === 96 ||
      markdownLineEnding(code)
    ) {
      effects.exit('codeTextData');
      return gap(code)
    }

    effects.consume(code);
    return data
  } // Closing fence.

  /** @type {State} */

  function closingSequence(code) {
    // More.
    if (code === 96) {
      effects.consume(code);
      size++;
      return closingSequence
    } // Done!

    if (size === sizeOpen) {
      effects.exit('codeTextSequence');
      effects.exit('codeText');
      return ok(code)
    } // More or less accents: mark as data.

    token.type = 'codeTextData';
    return data(code)
  }
}/**
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Event} Event
 */

/**
 * Tokenize subcontent.
 *
 * @param {Event[]} events
 * @returns {boolean}
 */
function subtokenize(events) {
  /** @type {Record<string, number>} */
  const jumps = {};
  let index = -1;
  /** @type {Event} */

  let event;
  /** @type {number|undefined} */

  let lineIndex;
  /** @type {number} */

  let otherIndex;
  /** @type {Event} */

  let otherEvent;
  /** @type {Event[]} */

  let parameters;
  /** @type {Event[]} */

  let subevents;
  /** @type {boolean|undefined} */

  let more;

  while (++index < events.length) {
    while (index in jumps) {
      index = jumps[index];
    }

    event = events[index]; // Add a hook for the GFM tasklist extension, which needs to know if text
    // is in the first content of a list item.

    if (
      index &&
      event[1].type === 'chunkFlow' &&
      events[index - 1][1].type === 'listItemPrefix'
    ) {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;

      if (
        otherIndex < subevents.length &&
        subevents[otherIndex][1].type === 'lineEndingBlank'
      ) {
        otherIndex += 2;
      }

      if (
        otherIndex < subevents.length &&
        subevents[otherIndex][1].type === 'content'
      ) {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === 'content') {
            break
          }

          if (subevents[otherIndex][1].type === 'chunkText') {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    } // Enter.

    if (event[0] === 'enter') {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index));
        index = jumps[index];
        more = true;
      }
    } // Exit.
    else if (event[1]._container) {
      otherIndex = index;
      lineIndex = undefined;

      while (otherIndex--) {
        otherEvent = events[otherIndex];

        if (
          otherEvent[1].type === 'lineEnding' ||
          otherEvent[1].type === 'lineEndingBlank'
        ) {
          if (otherEvent[0] === 'enter') {
            if (lineIndex) {
              events[lineIndex][1].type = 'lineEndingBlank';
            }

            otherEvent[1].type = 'lineEnding';
            lineIndex = otherIndex;
          }
        } else {
          break
        }
      }

      if (lineIndex) {
        // Fix position.
        event[1].end = Object.assign({}, events[lineIndex][1].start); // Switch container exit w/ line endings.

        parameters = events.slice(lineIndex, index);
        parameters.unshift(event);
        splice(events, lineIndex, index - lineIndex + 1, parameters);
      }
    }
  }

  return !more
}
/**
 * Tokenize embedded tokens.
 *
 * @param {Event[]} events
 * @param {number} eventIndex
 * @returns {Record<string, number>}
 */

function subcontent(events, eventIndex) {
  const token = events[eventIndex][1];
  const context = events[eventIndex][2];
  let startPosition = eventIndex - 1;
  /** @type {number[]} */

  const startPositions = [];
  const tokenizer =
    token._tokenizer || context.parser[token.contentType](token.start);
  const childEvents = tokenizer.events;
  /** @type {[number, number][]} */

  const jumps = [];
  /** @type {Record<string, number>} */

  const gaps = {};
  /** @type {Chunk[]} */

  let stream;
  /** @type {Token|undefined} */

  let previous;
  let index = -1;
  /** @type {Token|undefined} */

  let current = token;
  let adjust = 0;
  let start = 0;
  const breaks = [start]; // Loop forward through the linked tokens to pass them in order to the
  // subtokenizer.

  while (current) {
    // Find the position of the event for this token.
    while (events[++startPosition][1] !== current) {
      // Empty.
    }

    startPositions.push(startPosition);

    if (!current._tokenizer) {
      stream = context.sliceStream(current);

      if (!current.next) {
        stream.push(null);
      }

      if (previous) {
        tokenizer.defineSkip(current.start);
      }

      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }

      tokenizer.write(stream);

      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = undefined;
      }
    } // Unravel the next token.

    previous = current;
    current = current.next;
  } // Now, loop back through all events (and linked tokens), to figure out which
  // parts belong where.

  current = token;

  while (++index < childEvents.length) {
    if (
      // Find a void token that includes a break.
      childEvents[index][0] === 'exit' &&
      childEvents[index - 1][0] === 'enter' &&
      childEvents[index][1].type === childEvents[index - 1][1].type &&
      childEvents[index][1].start.line !== childEvents[index][1].end.line
    ) {
      start = index + 1;
      breaks.push(start); // Help GC.

      current._tokenizer = undefined;
      current.previous = undefined;
      current = current.next;
    }
  } // Help GC.

  tokenizer.events = []; // If there’s one more token (which is the cases for lines that end in an
  // EOF), that’s perfect: the last point we found starts it.
  // If there isn’t then make sure any remaining content is added to it.

  if (current) {
    // Help GC.
    current._tokenizer = undefined;
    current.previous = undefined;
  } else {
    breaks.pop();
  } // Now splice the events from the subtokenizer into the current events,
  // moving back to front so that splice indices aren’t affected.

  index = breaks.length;

  while (index--) {
    const slice = childEvents.slice(breaks[index], breaks[index + 1]);
    const start = startPositions.pop();
    jumps.unshift([start, start + slice.length - 1]);
    splice(events, start, 2, slice);
  }

  index = -1;

  while (++index < jumps.length) {
    gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
    adjust += jumps[index][1] - jumps[index][0] - 1;
  }

  return gaps
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */

/**
 * No name because it must not be turned off.
 * @type {Construct}
 */
const content = {
  tokenize: tokenizeContent,
  resolve: resolveContent
};
/** @type {Construct} */

const continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: true
};
/**
 * Content is transparent: it’s parsed right now. That way, definitions are also
 * parsed right now: before text in paragraphs (specifically, media) are parsed.
 *
 * @type {Resolver}
 */

function resolveContent(events) {
  subtokenize(events);
  return events
}
/** @type {Tokenizer} */

function tokenizeContent(effects, ok) {
  /** @type {Token} */
  let previous;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('content');
    previous = effects.enter('chunkContent', {
      contentType: 'content'
    });
    return data(code)
  }
  /** @type {State} */

  function data(code) {
    if (code === null) {
      return contentEnd(code)
    }

    if (markdownLineEnding(code)) {
      return effects.check(
        continuationConstruct,
        contentContinue,
        contentEnd
      )(code)
    } // Data.

    effects.consume(code);
    return data
  }
  /** @type {State} */

  function contentEnd(code) {
    effects.exit('chunkContent');
    effects.exit('content');
    return ok(code)
  }
  /** @type {State} */

  function contentContinue(code) {
    effects.consume(code);
    effects.exit('chunkContent');
    previous.next = effects.enter('chunkContent', {
      contentType: 'content',
      previous
    });
    previous = previous.next;
    return data
  }
}
/** @type {Tokenizer} */

function tokenizeContinuation(effects, ok, nok) {
  const self = this;
  return startLookahead
  /** @type {State} */

  function startLookahead(code) {
    effects.exit('chunkContent');
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, prefixed, 'linePrefix')
  }
  /** @type {State} */

  function prefixed(code) {
    if (code === null || markdownLineEnding(code)) {
      return nok(code)
    }

    const tail = self.events[self.events.length - 1];

    if (
      !self.parser.constructs.disable.null.includes('codeIndented') &&
      tail &&
      tail[1].type === 'linePrefix' &&
      tail[2].sliceSerialize(tail[1], true).length >= 4
    ) {
      return ok(code)
    }

    return effects.interrupt(self.parser.constructs.flow, nok, ok)(code)
  }
}/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */

/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} literalType
 * @param {string} literalMarkerType
 * @param {string} rawType
 * @param {string} stringType
 * @param {number} [max=Infinity]
 * @returns {State}
 */
// eslint-disable-next-line max-params
function factoryDestination(
  effects,
  ok,
  nok,
  type,
  literalType,
  literalMarkerType,
  rawType,
  stringType,
  max
) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start
  /** @type {State} */

  function start(code) {
    if (code === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      return destinationEnclosedBefore
    }

    if (code === null || code === 41 || asciiControl(code)) {
      return nok(code)
    }

    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return destinationRaw(code)
  }
  /** @type {State} */

  function destinationEnclosedBefore(code) {
    if (code === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok
    }

    effects.enter(stringType);
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return destinationEnclosed(code)
  }
  /** @type {State} */

  function destinationEnclosed(code) {
    if (code === 62) {
      effects.exit('chunkString');
      effects.exit(stringType);
      return destinationEnclosedBefore(code)
    }

    if (code === null || code === 60 || markdownLineEnding(code)) {
      return nok(code)
    }

    effects.consume(code);
    return code === 92 ? destinationEnclosedEscape : destinationEnclosed
  }
  /** @type {State} */

  function destinationEnclosedEscape(code) {
    if (code === 60 || code === 62 || code === 92) {
      effects.consume(code);
      return destinationEnclosed
    }

    return destinationEnclosed(code)
  }
  /** @type {State} */

  function destinationRaw(code) {
    if (code === 40) {
      if (++balance > limit) return nok(code)
      effects.consume(code);
      return destinationRaw
    }

    if (code === 41) {
      if (!balance--) {
        effects.exit('chunkString');
        effects.exit(stringType);
        effects.exit(rawType);
        effects.exit(type);
        return ok(code)
      }

      effects.consume(code);
      return destinationRaw
    }

    if (code === null || markdownLineEndingOrSpace(code)) {
      if (balance) return nok(code)
      effects.exit('chunkString');
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok(code)
    }

    if (asciiControl(code)) return nok(code)
    effects.consume(code);
    return code === 92 ? destinationRawEscape : destinationRaw
  }
  /** @type {State} */

  function destinationRawEscape(code) {
    if (code === 40 || code === 41 || code === 92) {
      effects.consume(code);
      return destinationRaw
    }

    return destinationRaw(code)
  }
}/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').State} State
 */

/**
 * @this {TokenizeContext}
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} markerType
 * @param {string} stringType
 * @returns {State}
 */
// eslint-disable-next-line max-params
function factoryLabel(effects, ok, nok, type, markerType, stringType) {
  const self = this;
  let size = 0;
  /** @type {boolean} */

  let data;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak
  }
  /** @type {State} */

  function atBreak(code) {
    if (
      code === null ||
      code === 91 ||
      (code === 93 && !data) ||
      /* To do: remove in the future once we’ve switched from
       * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
       * which doesn’t need this */

      /* Hidden footnotes hook */

      /* c8 ignore next 3 */
      (code === 94 &&
        !size &&
        '_hiddenFootnoteSupport' in self.parser.constructs) ||
      size > 999
    ) {
      return nok(code)
    }

    if (code === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return atBreak
    }

    effects.enter('chunkString', {
      contentType: 'string'
    });
    return label(code)
  }
  /** @type {State} */

  function label(code) {
    if (
      code === null ||
      code === 91 ||
      code === 93 ||
      markdownLineEnding(code) ||
      size++ > 999
    ) {
      effects.exit('chunkString');
      return atBreak(code)
    }

    effects.consume(code);
    data = data || !markdownSpace(code);
    return code === 92 ? labelEscape : label
  }
  /** @type {State} */

  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return label
    }

    return label(code)
  }
}/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */

/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} markerType
 * @param {string} stringType
 * @returns {State}
 */
// eslint-disable-next-line max-params
function factoryTitle(effects, ok, nok, type, markerType, stringType) {
  /** @type {NonNullable<Code>} */
  let marker;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    marker = code === 40 ? 41 : code;
    return atFirstTitleBreak
  }
  /** @type {State} */

  function atFirstTitleBreak(code) {
    if (code === marker) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok
    }

    effects.enter(stringType);
    return atTitleBreak(code)
  }
  /** @type {State} */

  function atTitleBreak(code) {
    if (code === marker) {
      effects.exit(stringType);
      return atFirstTitleBreak(marker)
    }

    if (code === null) {
      return nok(code)
    } // Note: blank lines can’t exist in content.

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return factorySpace(effects, atTitleBreak, 'linePrefix')
    }

    effects.enter('chunkString', {
      contentType: 'string'
    });
    return title(code)
  }
  /** @type {State} */

  function title(code) {
    if (code === marker || code === null || markdownLineEnding(code)) {
      effects.exit('chunkString');
      return atTitleBreak(code)
    }

    effects.consume(code);
    return code === 92 ? titleEscape : title
  }
  /** @type {State} */

  function titleEscape(code) {
    if (code === marker || code === 92) {
      effects.consume(code);
      return title
    }

    return title(code)
  }
}/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */

/**
 * @param {Effects} effects
 * @param {State} ok
 */
function factoryWhitespace(effects, ok) {
  /** @type {boolean} */
  let seen;
  return start
  /** @type {State} */

  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      seen = true;
      return start
    }

    if (markdownSpace(code)) {
      return factorySpace(
        effects,
        start,
        seen ? 'linePrefix' : 'lineSuffix'
      )(code)
    }

    return ok(code)
  }
}/**
 * Normalize an identifier (such as used in definitions).
 *
 * @param {string} value
 * @returns {string}
 */
function normalizeIdentifier(value) {
  return (
    value // Collapse Markdown whitespace.
      .replace(/[\t\n\r ]+/g, ' ') // Trim.
      .replace(/^ | $/g, '') // Some characters are considered “uppercase”, but if their lowercase
      // counterpart is uppercased will result in a different uppercase
      // character.
      // Hence, to get that form, we perform both lower- and uppercase.
      // Upper case makes sure keys will not interact with default prototypal
      // methods: no method is uppercase.
      .toLowerCase()
      .toUpperCase()
  )
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
const definition = {
  name: 'definition',
  tokenize: tokenizeDefinition
};
/** @type {Construct} */

const titleConstruct = {
  tokenize: tokenizeTitle,
  partial: true
};
/** @type {Tokenizer} */

function tokenizeDefinition(effects, ok, nok) {
  const self = this;
  /** @type {string} */

  let identifier;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('definition');
    return factoryLabel.call(
      self,
      effects,
      labelAfter,
      nok,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString'
    )(code)
  }
  /** @type {State} */

  function labelAfter(code) {
    identifier = normalizeIdentifier(
      self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
    );

    if (code === 58) {
      effects.enter('definitionMarker');
      effects.consume(code);
      effects.exit('definitionMarker'); // Note: blank lines can’t exist in content.

      return factoryWhitespace(
        effects,
        factoryDestination(
          effects,
          effects.attempt(
            titleConstruct,
            factorySpace(effects, after, 'whitespace'),
            factorySpace(effects, after, 'whitespace')
          ),
          nok,
          'definitionDestination',
          'definitionDestinationLiteral',
          'definitionDestinationLiteralMarker',
          'definitionDestinationRaw',
          'definitionDestinationString'
        )
      )
    }

    return nok(code)
  }
  /** @type {State} */

  function after(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('definition');

      if (!self.parser.defined.includes(identifier)) {
        self.parser.defined.push(identifier);
      }

      return ok(code)
    }

    return nok(code)
  }
}
/** @type {Tokenizer} */

function tokenizeTitle(effects, ok, nok) {
  return start
  /** @type {State} */

  function start(code) {
    return markdownLineEndingOrSpace(code)
      ? factoryWhitespace(effects, before)(code)
      : nok(code)
  }
  /** @type {State} */

  function before(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle(
        effects,
        factorySpace(effects, after, 'whitespace'),
        nok,
        'definitionTitle',
        'definitionTitleMarker',
        'definitionTitleString'
      )(code)
    }

    return nok(code)
  }
  /** @type {State} */

  function after(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code)
  }
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
const hardBreakEscape = {
  name: 'hardBreakEscape',
  tokenize: tokenizeHardBreakEscape
};
/** @type {Tokenizer} */

function tokenizeHardBreakEscape(effects, ok, nok) {
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('hardBreakEscape');
    effects.enter('escapeMarker');
    effects.consume(code);
    return open
  }
  /** @type {State} */

  function open(code) {
    if (markdownLineEnding(code)) {
      effects.exit('escapeMarker');
      effects.exit('hardBreakEscape');
      return ok(code)
    }

    return nok(code)
  }
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
const headingAtx = {
  name: 'headingAtx',
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};
/** @type {Resolver} */

function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  /** @type {Token} */

  let content;
  /** @type {Token} */

  let text; // Prefix whitespace, part of the opening.

  if (events[contentStart][1].type === 'whitespace') {
    contentStart += 2;
  } // Suffix whitespace, part of the closing.

  if (
    contentEnd - 2 > contentStart &&
    events[contentEnd][1].type === 'whitespace'
  ) {
    contentEnd -= 2;
  }

  if (
    events[contentEnd][1].type === 'atxHeadingSequence' &&
    (contentStart === contentEnd - 1 ||
      (contentEnd - 4 > contentStart &&
        events[contentEnd - 2][1].type === 'whitespace'))
  ) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }

  if (contentEnd > contentStart) {
    content = {
      type: 'atxHeadingText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text = {
      type: 'chunkText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      // @ts-expect-error Constants are fine to assign.
      contentType: 'text'
    };
    splice(events, contentStart, contentEnd - contentStart + 1, [
      ['enter', content, context],
      ['enter', text, context],
      ['exit', text, context],
      ['exit', content, context]
    ]);
  }

  return events
}
/** @type {Tokenizer} */

function tokenizeHeadingAtx(effects, ok, nok) {
  const self = this;
  let size = 0;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('atxHeading');
    effects.enter('atxHeadingSequence');
    return fenceOpenInside(code)
  }
  /** @type {State} */

  function fenceOpenInside(code) {
    if (code === 35 && size++ < 6) {
      effects.consume(code);
      return fenceOpenInside
    }

    if (code === null || markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingSequence');
      return self.interrupt ? ok(code) : headingBreak(code)
    }

    return nok(code)
  }
  /** @type {State} */

  function headingBreak(code) {
    if (code === 35) {
      effects.enter('atxHeadingSequence');
      return sequence(code)
    }

    if (code === null || markdownLineEnding(code)) {
      effects.exit('atxHeading');
      return ok(code)
    }

    if (markdownSpace(code)) {
      return factorySpace(effects, headingBreak, 'whitespace')(code)
    }

    effects.enter('atxHeadingText');
    return data(code)
  }
  /** @type {State} */

  function sequence(code) {
    if (code === 35) {
      effects.consume(code);
      return sequence
    }

    effects.exit('atxHeadingSequence');
    return headingBreak(code)
  }
  /** @type {State} */

  function data(code) {
    if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingText');
      return headingBreak(code)
    }

    effects.consume(code);
    return data
  }
}/**
 * List of lowercase HTML tag names which when parsing HTML (flow), result
 * in more relaxed rules (condition 6): because they are known blocks, the
 * HTML-like syntax doesn’t have to be strictly parsed.
 * For tag names not in this list, a more strict algorithm (condition 7) is used
 * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
 *
 * This is copied from:
 * <https://spec.commonmark.org/0.29/#html-blocks>.
 */
const htmlBlockNames = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'section',
  'source',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul'
];

/**
 * List of lowercase HTML tag names which when parsing HTML (flow), result in
 * HTML that can include lines w/o exiting, until a closing tag also in this
 * list is found (condition 1).
 *
 * This module is copied from:
 * <https://spec.commonmark.org/0.29/#html-blocks>.
 *
 * Note that `textarea` is not available in `CommonMark@0.29` but has been
 * merged to the primary branch and is slated to be released in the next release
 * of CommonMark.
 */
const htmlRawNames = ['pre', 'script', 'style', 'textarea'];/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */
/** @type {Construct} */

const htmlFlow = {
  name: 'htmlFlow',
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
};
/** @type {Construct} */

const nextBlankConstruct = {
  tokenize: tokenizeNextBlank,
  partial: true
};
/** @type {Resolver} */

function resolveToHtmlFlow(events) {
  let index = events.length;

  while (index--) {
    if (events[index][0] === 'enter' && events[index][1].type === 'htmlFlow') {
      break
    }
  }

  if (index > 1 && events[index - 2][1].type === 'linePrefix') {
    // Add the prefix start to the HTML token.
    events[index][1].start = events[index - 2][1].start; // Add the prefix start to the HTML line token.

    events[index + 1][1].start = events[index - 2][1].start; // Remove the line prefix.

    events.splice(index - 2, 2);
  }

  return events
}
/** @type {Tokenizer} */

function tokenizeHtmlFlow(effects, ok, nok) {
  const self = this;
  /** @type {number} */

  let kind;
  /** @type {boolean} */

  let startTag;
  /** @type {string} */

  let buffer;
  /** @type {number} */

  let index;
  /** @type {Code} */

  let marker;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('htmlFlow');
    effects.enter('htmlFlowData');
    effects.consume(code);
    return open
  }
  /** @type {State} */

  function open(code) {
    if (code === 33) {
      effects.consume(code);
      return declarationStart
    }

    if (code === 47) {
      effects.consume(code);
      return tagCloseStart
    }

    if (code === 63) {
      effects.consume(code);
      kind = 3; // While we’re in an instruction instead of a declaration, we’re on a `?`
      // right now, so we do need to search for `>`, similar to declarations.

      return self.interrupt ? ok : continuationDeclarationInside
    }

    if (asciiAlpha(code)) {
      effects.consume(code);
      buffer = String.fromCharCode(code);
      startTag = true;
      return tagName
    }

    return nok(code)
  }
  /** @type {State} */

  function declarationStart(code) {
    if (code === 45) {
      effects.consume(code);
      kind = 2;
      return commentOpenInside
    }

    if (code === 91) {
      effects.consume(code);
      kind = 5;
      buffer = 'CDATA[';
      index = 0;
      return cdataOpenInside
    }

    if (asciiAlpha(code)) {
      effects.consume(code);
      kind = 4;
      return self.interrupt ? ok : continuationDeclarationInside
    }

    return nok(code)
  }
  /** @type {State} */

  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code);
      return self.interrupt ? ok : continuationDeclarationInside
    }

    return nok(code)
  }
  /** @type {State} */

  function cdataOpenInside(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code);
      return index === buffer.length
        ? self.interrupt
          ? ok
          : continuation
        : cdataOpenInside
    }

    return nok(code)
  }
  /** @type {State} */

  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      buffer = String.fromCharCode(code);
      return tagName
    }

    return nok(code)
  }
  /** @type {State} */

  function tagName(code) {
    if (
      code === null ||
      code === 47 ||
      code === 62 ||
      markdownLineEndingOrSpace(code)
    ) {
      if (
        code !== 47 &&
        startTag &&
        htmlRawNames.includes(buffer.toLowerCase())
      ) {
        kind = 1;
        return self.interrupt ? ok(code) : continuation(code)
      }

      if (htmlBlockNames.includes(buffer.toLowerCase())) {
        kind = 6;

        if (code === 47) {
          effects.consume(code);
          return basicSelfClosing
        }

        return self.interrupt ? ok(code) : continuation(code)
      }

      kind = 7; // Do not support complete HTML when interrupting

      return self.interrupt && !self.parser.lazy[self.now().line]
        ? nok(code)
        : startTag
        ? completeAttributeNameBefore(code)
        : completeClosingTagAfter(code)
    }

    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      buffer += String.fromCharCode(code);
      return tagName
    }

    return nok(code)
  }
  /** @type {State} */

  function basicSelfClosing(code) {
    if (code === 62) {
      effects.consume(code);
      return self.interrupt ? ok : continuation
    }

    return nok(code)
  }
  /** @type {State} */

  function completeClosingTagAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeClosingTagAfter
    }

    return completeEnd(code)
  }
  /** @type {State} */

  function completeAttributeNameBefore(code) {
    if (code === 47) {
      effects.consume(code);
      return completeEnd
    }

    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code);
      return completeAttributeName
    }

    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeNameBefore
    }

    return completeEnd(code)
  }
  /** @type {State} */

  function completeAttributeName(code) {
    if (
      code === 45 ||
      code === 46 ||
      code === 58 ||
      code === 95 ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code);
      return completeAttributeName
    }

    return completeAttributeNameAfter(code)
  }
  /** @type {State} */

  function completeAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return completeAttributeValueBefore
    }

    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeNameAfter
    }

    return completeAttributeNameBefore(code)
  }
  /** @type {State} */

  function completeAttributeValueBefore(code) {
    if (
      code === null ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return completeAttributeValueQuoted
    }

    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeValueBefore
    }

    marker = null;
    return completeAttributeValueUnquoted(code)
  }
  /** @type {State} */

  function completeAttributeValueQuoted(code) {
    if (code === null || markdownLineEnding(code)) {
      return nok(code)
    }

    if (code === marker) {
      effects.consume(code);
      return completeAttributeValueQuotedAfter
    }

    effects.consume(code);
    return completeAttributeValueQuoted
  }
  /** @type {State} */

  function completeAttributeValueUnquoted(code) {
    if (
      code === null ||
      code === 34 ||
      code === 39 ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96 ||
      markdownLineEndingOrSpace(code)
    ) {
      return completeAttributeNameAfter(code)
    }

    effects.consume(code);
    return completeAttributeValueUnquoted
  }
  /** @type {State} */

  function completeAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || markdownSpace(code)) {
      return completeAttributeNameBefore(code)
    }

    return nok(code)
  }
  /** @type {State} */

  function completeEnd(code) {
    if (code === 62) {
      effects.consume(code);
      return completeAfter
    }

    return nok(code)
  }
  /** @type {State} */

  function completeAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAfter
    }

    return code === null || markdownLineEnding(code)
      ? continuation(code)
      : nok(code)
  }
  /** @type {State} */

  function continuation(code) {
    if (code === 45 && kind === 2) {
      effects.consume(code);
      return continuationCommentInside
    }

    if (code === 60 && kind === 1) {
      effects.consume(code);
      return continuationRawTagOpen
    }

    if (code === 62 && kind === 4) {
      effects.consume(code);
      return continuationClose
    }

    if (code === 63 && kind === 3) {
      effects.consume(code);
      return continuationDeclarationInside
    }

    if (code === 93 && kind === 5) {
      effects.consume(code);
      return continuationCharacterDataInside
    }

    if (markdownLineEnding(code) && (kind === 6 || kind === 7)) {
      return effects.check(
        nextBlankConstruct,
        continuationClose,
        continuationAtLineEnding
      )(code)
    }

    if (code === null || markdownLineEnding(code)) {
      return continuationAtLineEnding(code)
    }

    effects.consume(code);
    return continuation
  }
  /** @type {State} */

  function continuationAtLineEnding(code) {
    effects.exit('htmlFlowData');
    return htmlContinueStart(code)
  }
  /** @type {State} */

  function htmlContinueStart(code) {
    if (code === null) {
      return done(code)
    }

    if (markdownLineEnding(code)) {
      return effects.attempt(
        {
          tokenize: htmlLineEnd,
          partial: true
        },
        htmlContinueStart,
        done
      )(code)
    }

    effects.enter('htmlFlowData');
    return continuation(code)
  }
  /** @type {Tokenizer} */

  function htmlLineEnd(effects, ok, nok) {
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return lineStart
    }
    /** @type {State} */

    function lineStart(code) {
      return self.parser.lazy[self.now().line] ? nok(code) : ok(code)
    }
  }
  /** @type {State} */

  function continuationCommentInside(code) {
    if (code === 45) {
      effects.consume(code);
      return continuationDeclarationInside
    }

    return continuation(code)
  }
  /** @type {State} */

  function continuationRawTagOpen(code) {
    if (code === 47) {
      effects.consume(code);
      buffer = '';
      return continuationRawEndTag
    }

    return continuation(code)
  }
  /** @type {State} */

  function continuationRawEndTag(code) {
    if (code === 62 && htmlRawNames.includes(buffer.toLowerCase())) {
      effects.consume(code);
      return continuationClose
    }

    if (asciiAlpha(code) && buffer.length < 8) {
      effects.consume(code);
      buffer += String.fromCharCode(code);
      return continuationRawEndTag
    }

    return continuation(code)
  }
  /** @type {State} */

  function continuationCharacterDataInside(code) {
    if (code === 93) {
      effects.consume(code);
      return continuationDeclarationInside
    }

    return continuation(code)
  }
  /** @type {State} */

  function continuationDeclarationInside(code) {
    if (code === 62) {
      effects.consume(code);
      return continuationClose
    } // More dashes.

    if (code === 45 && kind === 2) {
      effects.consume(code);
      return continuationDeclarationInside
    }

    return continuation(code)
  }
  /** @type {State} */

  function continuationClose(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('htmlFlowData');
      return done(code)
    }

    effects.consume(code);
    return continuationClose
  }
  /** @type {State} */

  function done(code) {
    effects.exit('htmlFlow');
    return ok(code)
  }
}
/** @type {Tokenizer} */

function tokenizeNextBlank(effects, ok, nok) {
  return start
  /** @type {State} */

  function start(code) {
    effects.exit('htmlFlowData');
    effects.enter('lineEndingBlank');
    effects.consume(code);
    effects.exit('lineEndingBlank');
    return effects.attempt(blankLine, ok, nok)
  }
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */

/** @type {Construct} */
const htmlText = {
  name: 'htmlText',
  tokenize: tokenizeHtmlText
};
/** @type {Tokenizer} */

function tokenizeHtmlText(effects, ok, nok) {
  const self = this;
  /** @type {NonNullable<Code>|undefined} */

  let marker;
  /** @type {string} */

  let buffer;
  /** @type {number} */

  let index;
  /** @type {State} */

  let returnState;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('htmlText');
    effects.enter('htmlTextData');
    effects.consume(code);
    return open
  }
  /** @type {State} */

  function open(code) {
    if (code === 33) {
      effects.consume(code);
      return declarationOpen
    }

    if (code === 47) {
      effects.consume(code);
      return tagCloseStart
    }

    if (code === 63) {
      effects.consume(code);
      return instruction
    }

    if (asciiAlpha(code)) {
      effects.consume(code);
      return tagOpen
    }

    return nok(code)
  }
  /** @type {State} */

  function declarationOpen(code) {
    if (code === 45) {
      effects.consume(code);
      return commentOpen
    }

    if (code === 91) {
      effects.consume(code);
      buffer = 'CDATA[';
      index = 0;
      return cdataOpen
    }

    if (asciiAlpha(code)) {
      effects.consume(code);
      return declaration
    }

    return nok(code)
  }
  /** @type {State} */

  function commentOpen(code) {
    if (code === 45) {
      effects.consume(code);
      return commentStart
    }

    return nok(code)
  }
  /** @type {State} */

  function commentStart(code) {
    if (code === null || code === 62) {
      return nok(code)
    }

    if (code === 45) {
      effects.consume(code);
      return commentStartDash
    }

    return comment(code)
  }
  /** @type {State} */

  function commentStartDash(code) {
    if (code === null || code === 62) {
      return nok(code)
    }

    return comment(code)
  }
  /** @type {State} */

  function comment(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 45) {
      effects.consume(code);
      return commentClose
    }

    if (markdownLineEnding(code)) {
      returnState = comment;
      return atLineEnding(code)
    }

    effects.consume(code);
    return comment
  }
  /** @type {State} */

  function commentClose(code) {
    if (code === 45) {
      effects.consume(code);
      return end
    }

    return comment(code)
  }
  /** @type {State} */

  function cdataOpen(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code);
      return index === buffer.length ? cdata : cdataOpen
    }

    return nok(code)
  }
  /** @type {State} */

  function cdata(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 93) {
      effects.consume(code);
      return cdataClose
    }

    if (markdownLineEnding(code)) {
      returnState = cdata;
      return atLineEnding(code)
    }

    effects.consume(code);
    return cdata
  }
  /** @type {State} */

  function cdataClose(code) {
    if (code === 93) {
      effects.consume(code);
      return cdataEnd
    }

    return cdata(code)
  }
  /** @type {State} */

  function cdataEnd(code) {
    if (code === 62) {
      return end(code)
    }

    if (code === 93) {
      effects.consume(code);
      return cdataEnd
    }

    return cdata(code)
  }
  /** @type {State} */

  function declaration(code) {
    if (code === null || code === 62) {
      return end(code)
    }

    if (markdownLineEnding(code)) {
      returnState = declaration;
      return atLineEnding(code)
    }

    effects.consume(code);
    return declaration
  }
  /** @type {State} */

  function instruction(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 63) {
      effects.consume(code);
      return instructionClose
    }

    if (markdownLineEnding(code)) {
      returnState = instruction;
      return atLineEnding(code)
    }

    effects.consume(code);
    return instruction
  }
  /** @type {State} */

  function instructionClose(code) {
    return code === 62 ? end(code) : instruction(code)
  }
  /** @type {State} */

  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      return tagClose
    }

    return nok(code)
  }
  /** @type {State} */

  function tagClose(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagClose
    }

    return tagCloseBetween(code)
  }
  /** @type {State} */

  function tagCloseBetween(code) {
    if (markdownLineEnding(code)) {
      returnState = tagCloseBetween;
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code);
      return tagCloseBetween
    }

    return end(code)
  }
  /** @type {State} */

  function tagOpen(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagOpen
    }

    if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }
  /** @type {State} */

  function tagOpenBetween(code) {
    if (code === 47) {
      effects.consume(code);
      return end
    }

    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code);
      return tagOpenAttributeName
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenBetween;
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code);
      return tagOpenBetween
    }

    return end(code)
  }
  /** @type {State} */

  function tagOpenAttributeName(code) {
    if (
      code === 45 ||
      code === 46 ||
      code === 58 ||
      code === 95 ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code);
      return tagOpenAttributeName
    }

    return tagOpenAttributeNameAfter(code)
  }
  /** @type {State} */

  function tagOpenAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return tagOpenAttributeValueBefore
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeNameAfter;
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code);
      return tagOpenAttributeNameAfter
    }

    return tagOpenBetween(code)
  }
  /** @type {State} */

  function tagOpenAttributeValueBefore(code) {
    if (
      code === null ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return tagOpenAttributeValueQuoted
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueBefore;
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code);
      return tagOpenAttributeValueBefore
    }

    effects.consume(code);
    marker = undefined;
    return tagOpenAttributeValueUnquoted
  }
  /** @type {State} */

  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code);
      return tagOpenAttributeValueQuotedAfter
    }

    if (code === null) {
      return nok(code)
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueQuoted;
      return atLineEnding(code)
    }

    effects.consume(code);
    return tagOpenAttributeValueQuoted
  }
  /** @type {State} */

  function tagOpenAttributeValueQuotedAfter(code) {
    if (code === 62 || code === 47 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }
  /** @type {State} */

  function tagOpenAttributeValueUnquoted(code) {
    if (
      code === null ||
      code === 34 ||
      code === 39 ||
      code === 60 ||
      code === 61 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }

    effects.consume(code);
    return tagOpenAttributeValueUnquoted
  } // We can’t have blank lines in content, so no need to worry about empty
  // tokens.

  /** @type {State} */

  function atLineEnding(code) {
    effects.exit('htmlTextData');
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(
      effects,
      afterPrefix,
      'linePrefix',
      self.parser.constructs.disable.null.includes('codeIndented')
        ? undefined
        : 4
    )
  }
  /** @type {State} */

  function afterPrefix(code) {
    effects.enter('htmlTextData');
    return returnState(code)
  }
  /** @type {State} */

  function end(code) {
    if (code === 62) {
      effects.consume(code);
      effects.exit('htmlTextData');
      effects.exit('htmlText');
      return ok
    }

    return nok(code)
  }
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */

/** @type {Construct} */
const labelEnd = {
  name: 'labelEnd',
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
};
/** @type {Construct} */

const resourceConstruct = {
  tokenize: tokenizeResource
};
/** @type {Construct} */

const fullReferenceConstruct = {
  tokenize: tokenizeFullReference
};
/** @type {Construct} */

const collapsedReferenceConstruct = {
  tokenize: tokenizeCollapsedReference
};
/** @type {Resolver} */

function resolveAllLabelEnd(events) {
  let index = -1;
  /** @type {Token} */

  let token;

  while (++index < events.length) {
    token = events[index][1];

    if (
      token.type === 'labelImage' ||
      token.type === 'labelLink' ||
      token.type === 'labelEnd'
    ) {
      // Remove the marker.
      events.splice(index + 1, token.type === 'labelImage' ? 4 : 2);
      token.type = 'data';
      index++;
    }
  }

  return events
}
/** @type {Resolver} */

function resolveToLabelEnd(events, context) {
  let index = events.length;
  let offset = 0;
  /** @type {Token} */

  let token;
  /** @type {number|undefined} */

  let open;
  /** @type {number|undefined} */

  let close;
  /** @type {Event[]} */

  let media; // Find an opening.

  while (index--) {
    token = events[index][1];

    if (open) {
      // If we see another link, or inactive link label, we’ve been here before.
      if (
        token.type === 'link' ||
        (token.type === 'labelLink' && token._inactive)
      ) {
        break
      } // Mark other link openings as inactive, as we can’t have links in
      // links.

      if (events[index][0] === 'enter' && token.type === 'labelLink') {
        token._inactive = true;
      }
    } else if (close) {
      if (
        events[index][0] === 'enter' &&
        (token.type === 'labelImage' || token.type === 'labelLink') &&
        !token._balanced
      ) {
        open = index;

        if (token.type !== 'labelLink') {
          offset = 2;
          break
        }
      }
    } else if (token.type === 'labelEnd') {
      close = index;
    }
  }

  const group = {
    type: events[open][1].type === 'labelLink' ? 'link' : 'image',
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const label = {
    type: 'label',
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  };
  const text = {
    type: 'labelText',
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  media = [
    ['enter', group, context],
    ['enter', label, context]
  ]; // Opening marker.

  media = push(media, events.slice(open + 1, open + offset + 3)); // Text open.

  media = push(media, [['enter', text, context]]); // Between.

  media = push(
    media,
    resolveAll(
      context.parser.constructs.insideSpan.null,
      events.slice(open + offset + 4, close - 3),
      context
    )
  ); // Text close, marker close, label close.

  media = push(media, [
    ['exit', text, context],
    events[close - 2],
    events[close - 1],
    ['exit', label, context]
  ]); // Reference, resource, or so.

  media = push(media, events.slice(close + 1)); // Media close.

  media = push(media, [['exit', group, context]]);
  splice(events, open, events.length, media);
  return events
}
/** @type {Tokenizer} */

function tokenizeLabelEnd(effects, ok, nok) {
  const self = this;
  let index = self.events.length;
  /** @type {Token} */

  let labelStart;
  /** @type {boolean} */

  let defined; // Find an opening.

  while (index--) {
    if (
      (self.events[index][1].type === 'labelImage' ||
        self.events[index][1].type === 'labelLink') &&
      !self.events[index][1]._balanced
    ) {
      labelStart = self.events[index][1];
      break
    }
  }

  return start
  /** @type {State} */

  function start(code) {
    if (!labelStart) {
      return nok(code)
    } // It’s a balanced bracket, but contains a link.

    if (labelStart._inactive) return balanced(code)
    defined = self.parser.defined.includes(
      normalizeIdentifier(
        self.sliceSerialize({
          start: labelStart.end,
          end: self.now()
        })
      )
    );
    effects.enter('labelEnd');
    effects.enter('labelMarker');
    effects.consume(code);
    effects.exit('labelMarker');
    effects.exit('labelEnd');
    return afterLabelEnd
  }
  /** @type {State} */

  function afterLabelEnd(code) {
    // Resource: `[asd](fgh)`.
    if (code === 40) {
      return effects.attempt(
        resourceConstruct,
        ok,
        defined ? ok : balanced
      )(code)
    } // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?

    if (code === 91) {
      return effects.attempt(
        fullReferenceConstruct,
        ok,
        defined
          ? effects.attempt(collapsedReferenceConstruct, ok, balanced)
          : balanced
      )(code)
    } // Shortcut reference: `[asd]`?

    return defined ? ok(code) : balanced(code)
  }
  /** @type {State} */

  function balanced(code) {
    labelStart._balanced = true;
    return nok(code)
  }
}
/** @type {Tokenizer} */

function tokenizeResource(effects, ok, nok) {
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('resource');
    effects.enter('resourceMarker');
    effects.consume(code);
    effects.exit('resourceMarker');
    return factoryWhitespace(effects, open)
  }
  /** @type {State} */

  function open(code) {
    if (code === 41) {
      return end(code)
    }

    return factoryDestination(
      effects,
      destinationAfter,
      nok,
      'resourceDestination',
      'resourceDestinationLiteral',
      'resourceDestinationLiteralMarker',
      'resourceDestinationRaw',
      'resourceDestinationString',
      3
    )(code)
  }
  /** @type {State} */

  function destinationAfter(code) {
    return markdownLineEndingOrSpace(code)
      ? factoryWhitespace(effects, between)(code)
      : end(code)
  }
  /** @type {State} */

  function between(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle(
        effects,
        factoryWhitespace(effects, end),
        nok,
        'resourceTitle',
        'resourceTitleMarker',
        'resourceTitleString'
      )(code)
    }

    return end(code)
  }
  /** @type {State} */

  function end(code) {
    if (code === 41) {
      effects.enter('resourceMarker');
      effects.consume(code);
      effects.exit('resourceMarker');
      effects.exit('resource');
      return ok
    }

    return nok(code)
  }
}
/** @type {Tokenizer} */

function tokenizeFullReference(effects, ok, nok) {
  const self = this;
  return start
  /** @type {State} */

  function start(code) {
    return factoryLabel.call(
      self,
      effects,
      afterLabel,
      nok,
      'reference',
      'referenceMarker',
      'referenceString'
    )(code)
  }
  /** @type {State} */

  function afterLabel(code) {
    return self.parser.defined.includes(
      normalizeIdentifier(
        self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
      )
    )
      ? ok(code)
      : nok(code)
  }
}
/** @type {Tokenizer} */

function tokenizeCollapsedReference(effects, ok, nok) {
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('reference');
    effects.enter('referenceMarker');
    effects.consume(code);
    effects.exit('referenceMarker');
    return open
  }
  /** @type {State} */

  function open(code) {
    if (code === 93) {
      effects.enter('referenceMarker');
      effects.consume(code);
      effects.exit('referenceMarker');
      effects.exit('reference');
      return ok
    }

    return nok(code)
  }
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */
/** @type {Construct} */

const labelStartImage = {
  name: 'labelStartImage',
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
};
/** @type {Tokenizer} */

function tokenizeLabelStartImage(effects, ok, nok) {
  const self = this;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('labelImage');
    effects.enter('labelImageMarker');
    effects.consume(code);
    effects.exit('labelImageMarker');
    return open
  }
  /** @type {State} */

  function open(code) {
    if (code === 91) {
      effects.enter('labelMarker');
      effects.consume(code);
      effects.exit('labelMarker');
      effects.exit('labelImage');
      return after
    }

    return nok(code)
  }
  /** @type {State} */

  function after(code) {
    /* To do: remove in the future once we’ve switched from
     * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
     * which doesn’t need this */

    /* Hidden footnotes hook */

    /* c8 ignore next 3 */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs
      ? nok(code)
      : ok(code)
  }
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */
/** @type {Construct} */

const labelStartLink = {
  name: 'labelStartLink',
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
};
/** @type {Tokenizer} */

function tokenizeLabelStartLink(effects, ok, nok) {
  const self = this;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('labelLink');
    effects.enter('labelMarker');
    effects.consume(code);
    effects.exit('labelMarker');
    effects.exit('labelLink');
    return after
  }
  /** @type {State} */

  function after(code) {
    /* To do: remove in the future once we’ve switched from
     * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
     * which doesn’t need this */

    /* Hidden footnotes hook. */

    /* c8 ignore next 3 */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs
      ? nok(code)
      : ok(code)
  }
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
const lineEnding = {
  name: 'lineEnding',
  tokenize: tokenizeLineEnding
};
/** @type {Tokenizer} */

function tokenizeLineEnding(effects, ok) {
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, ok, 'linePrefix')
  }
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */

/** @type {Construct} */
const thematicBreak$1 = {
  name: 'thematicBreak',
  tokenize: tokenizeThematicBreak
};
/** @type {Tokenizer} */

function tokenizeThematicBreak(effects, ok, nok) {
  let size = 0;
  /** @type {NonNullable<Code>} */

  let marker;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('thematicBreak');
    marker = code;
    return atBreak(code)
  }
  /** @type {State} */

  function atBreak(code) {
    if (code === marker) {
      effects.enter('thematicBreakSequence');
      return sequence(code)
    }

    if (markdownSpace(code)) {
      return factorySpace(effects, atBreak, 'whitespace')(code)
    }

    if (size < 3 || (code !== null && !markdownLineEnding(code))) {
      return nok(code)
    }

    effects.exit('thematicBreak');
    return ok(code)
  }
  /** @type {State} */

  function sequence(code) {
    if (code === marker) {
      effects.consume(code);
      size++;
      return sequence
    }

    effects.exit('thematicBreakSequence');
    return atBreak(code)
  }
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */
/** @type {Construct} */

const list$1 = {
  name: 'list',
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
};
/** @type {Construct} */

const listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
};
/** @type {Construct} */

const indentConstruct = {
  tokenize: tokenizeIndent,
  partial: true
};
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */

function tokenizeListStart(effects, ok, nok) {
  const self = this;
  const tail = self.events[self.events.length - 1];
  let initialSize =
    tail && tail[1].type === 'linePrefix'
      ? tail[2].sliceSerialize(tail[1], true).length
      : 0;
  let size = 0;
  return start
  /** @type {State} */

  function start(code) {
    const kind =
      self.containerState.type ||
      (code === 42 || code === 43 || code === 45
        ? 'listUnordered'
        : 'listOrdered');

    if (
      kind === 'listUnordered'
        ? !self.containerState.marker || code === self.containerState.marker
        : asciiDigit(code)
    ) {
      if (!self.containerState.type) {
        self.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }

      if (kind === 'listUnordered') {
        effects.enter('listItemPrefix');
        return code === 42 || code === 45
          ? effects.check(thematicBreak$1, nok, atMarker)(code)
          : atMarker(code)
      }

      if (!self.interrupt || code === 49) {
        effects.enter('listItemPrefix');
        effects.enter('listItemValue');
        return inside(code)
      }
    }

    return nok(code)
  }
  /** @type {State} */

  function inside(code) {
    if (asciiDigit(code) && ++size < 10) {
      effects.consume(code);
      return inside
    }

    if (
      (!self.interrupt || size < 2) &&
      (self.containerState.marker
        ? code === self.containerState.marker
        : code === 41 || code === 46)
    ) {
      effects.exit('listItemValue');
      return atMarker(code)
    }

    return nok(code)
  }
  /**
   * @type {State}
   **/

  function atMarker(code) {
    effects.enter('listItemMarker');
    effects.consume(code);
    effects.exit('listItemMarker');
    self.containerState.marker = self.containerState.marker || code;
    return effects.check(
      blankLine, // Can’t be empty when interrupting.
      self.interrupt ? nok : onBlank,
      effects.attempt(
        listItemPrefixWhitespaceConstruct,
        endOfPrefix,
        otherPrefix
      )
    )
  }
  /** @type {State} */

  function onBlank(code) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code)
  }
  /** @type {State} */

  function otherPrefix(code) {
    if (markdownSpace(code)) {
      effects.enter('listItemPrefixWhitespace');
      effects.consume(code);
      effects.exit('listItemPrefixWhitespace');
      return endOfPrefix
    }

    return nok(code)
  }
  /** @type {State} */

  function endOfPrefix(code) {
    self.containerState.size =
      initialSize +
      self.sliceSerialize(effects.exit('listItemPrefix'), true).length;
    return ok(code)
  }
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */

function tokenizeListContinuation(effects, ok, nok) {
  const self = this;
  self.containerState._closeFlow = undefined;
  return effects.check(blankLine, onBlank, notBlank)
  /** @type {State} */

  function onBlank(code) {
    self.containerState.furtherBlankLines =
      self.containerState.furtherBlankLines ||
      self.containerState.initialBlankLine; // We have a blank line.
    // Still, try to consume at most the items size.

    return factorySpace(
      effects,
      ok,
      'listItemIndent',
      self.containerState.size + 1
    )(code)
  }
  /** @type {State} */

  function notBlank(code) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
      self.containerState.furtherBlankLines = undefined;
      self.containerState.initialBlankLine = undefined;
      return notInCurrentItem(code)
    }

    self.containerState.furtherBlankLines = undefined;
    self.containerState.initialBlankLine = undefined;
    return effects.attempt(indentConstruct, ok, notInCurrentItem)(code)
  }
  /** @type {State} */

  function notInCurrentItem(code) {
    // While we do continue, we signal that the flow should be closed.
    self.containerState._closeFlow = true; // As we’re closing flow, we’re no longer interrupting.

    self.interrupt = undefined;
    return factorySpace(
      effects,
      effects.attempt(list$1, ok, nok),
      'linePrefix',
      self.parser.constructs.disable.null.includes('codeIndented')
        ? undefined
        : 4
    )(code)
  }
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */

function tokenizeIndent(effects, ok, nok) {
  const self = this;
  return factorySpace(
    effects,
    afterPrefix,
    'listItemIndent',
    self.containerState.size + 1
  )
  /** @type {State} */

  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail &&
      tail[1].type === 'listItemIndent' &&
      tail[2].sliceSerialize(tail[1], true).length === self.containerState.size
      ? ok(code)
      : nok(code)
  }
}
/**
 * @type {Exiter}
 * @this {TokenizeContextWithState}
 */

function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */

function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  const self = this;
  return factorySpace(
    effects,
    afterPrefix,
    'listItemPrefixWhitespace',
    self.parser.constructs.disable.null.includes('codeIndented')
      ? undefined
      : 4 + 1
  )
  /** @type {State} */

  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return !markdownSpace(code) &&
      tail &&
      tail[1].type === 'listItemPrefixWhitespace'
      ? ok(code)
      : nok(code)
  }
}/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */

/** @type {Construct} */
const setextUnderline = {
  name: 'setextUnderline',
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};
/** @type {Resolver} */

function resolveToSetextUnderline(events, context) {
  let index = events.length;
  /** @type {number|undefined} */

  let content;
  /** @type {number|undefined} */

  let text;
  /** @type {number|undefined} */

  let definition; // Find the opening of the content.
  // It’ll always exist: we don’t tokenize if it isn’t there.

  while (index--) {
    if (events[index][0] === 'enter') {
      if (events[index][1].type === 'content') {
        content = index;
        break
      }

      if (events[index][1].type === 'paragraph') {
        text = index;
      }
    } // Exit
    else {
      if (events[index][1].type === 'content') {
        // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1);
      }

      if (!definition && events[index][1].type === 'definition') {
        definition = index;
      }
    }
  }

  const heading = {
    type: 'setextHeading',
    start: Object.assign({}, events[text][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  }; // Change the paragraph to setext heading text.

  events[text][1].type = 'setextHeadingText'; // If we have definitions in the content, we’ll keep on having content,
  // but we need move it.

  if (definition) {
    events.splice(text, 0, ['enter', heading, context]);
    events.splice(definition + 1, 0, ['exit', events[content][1], context]);
    events[content][1].end = Object.assign({}, events[definition][1].end);
  } else {
    events[content][1] = heading;
  } // Add the heading exit at the end.

  events.push(['exit', heading, context]);
  return events
}
/** @type {Tokenizer} */

function tokenizeSetextUnderline(effects, ok, nok) {
  const self = this;
  let index = self.events.length;
  /** @type {NonNullable<Code>} */

  let marker;
  /** @type {boolean} */

  let paragraph; // Find an opening.

  while (index--) {
    // Skip enter/exit of line ending, line prefix, and content.
    // We can now either have a definition or a paragraph.
    if (
      self.events[index][1].type !== 'lineEnding' &&
      self.events[index][1].type !== 'linePrefix' &&
      self.events[index][1].type !== 'content'
    ) {
      paragraph = self.events[index][1].type === 'paragraph';
      break
    }
  }

  return start
  /** @type {State} */

  function start(code) {
    if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
      effects.enter('setextHeadingLine');
      effects.enter('setextHeadingLineSequence');
      marker = code;
      return closingSequence(code)
    }

    return nok(code)
  }
  /** @type {State} */

  function closingSequence(code) {
    if (code === marker) {
      effects.consume(code);
      return closingSequence
    }

    effects.exit('setextHeadingLineSequence');
    return factorySpace(effects, closingSequenceEnd, 'lineSuffix')(code)
  }
  /** @type {State} */

  function closingSequenceEnd(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('setextHeadingLine');
      return ok(code)
    }

    return nok(code)
  }
}/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {InitialConstruct} */
const flow$1 = {
  tokenize: initializeFlow
};
/** @type {Initializer} */

function initializeFlow(effects) {
  const self = this;
  const initial = effects.attempt(
    // Try to parse a blank line.
    blankLine,
    atBlankEnding, // Try to parse initial flow (essentially, only code).
    effects.attempt(
      this.parser.constructs.flowInitial,
      afterConstruct,
      factorySpace(
        effects,
        effects.attempt(
          this.parser.constructs.flow,
          afterConstruct,
          effects.attempt(content, afterConstruct)
        ),
        'linePrefix'
      )
    )
  );
  return initial
  /** @type {State} */

  function atBlankEnding(code) {
    if (code === null) {
      effects.consume(code);
      return
    }

    effects.enter('lineEndingBlank');
    effects.consume(code);
    effects.exit('lineEndingBlank');
    self.currentConstruct = undefined;
    return initial
  }
  /** @type {State} */

  function afterConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return
    }

    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    self.currentConstruct = undefined;
    return initial
  }
}/**
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */
const resolver = {
  resolveAll: createResolver()
};
const string$1 = initializeFactory('string');
const text$2 = initializeFactory('text');
/**
 * @param {'string'|'text'} field
 * @returns {InitialConstruct}
 */

function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(
      field === 'text' ? resolveAllLineSuffixes : undefined
    )
  }
  /** @type {Initializer} */

  function initializeText(effects) {
    const self = this;
    const constructs = this.parser.constructs[field];
    const text = effects.attempt(constructs, start, notText);
    return start
    /** @type {State} */

    function start(code) {
      return atBreak(code) ? text(code) : notText(code)
    }
    /** @type {State} */

    function notText(code) {
      if (code === null) {
        effects.consume(code);
        return
      }

      effects.enter('data');
      effects.consume(code);
      return data
    }
    /** @type {State} */

    function data(code) {
      if (atBreak(code)) {
        effects.exit('data');
        return text(code)
      } // Data.

      effects.consume(code);
      return data
    }
    /**
     * @param {Code} code
     * @returns {boolean}
     */

    function atBreak(code) {
      if (code === null) {
        return true
      }

      const list = constructs[code];
      let index = -1;

      if (list) {
        while (++index < list.length) {
          const item = list[index];

          if (!item.previous || item.previous.call(self, self.previous)) {
            return true
          }
        }
      }

      return false
    }
  }
}
/**
 * @param {Resolver} [extraResolver]
 * @returns {Resolver}
 */

function createResolver(extraResolver) {
  return resolveAllText
  /** @type {Resolver} */

  function resolveAllText(events, context) {
    let index = -1;
    /** @type {number|undefined} */

    let enter; // A rather boring computation (to merge adjacent `data` events) which
    // improves mm performance by 29%.

    while (++index <= events.length) {
      if (enter === undefined) {
        if (events[index] && events[index][1].type === 'data') {
          enter = index;
          index++;
        }
      } else if (!events[index] || events[index][1].type !== 'data') {
        // Don’t do anything if there is one data token.
        if (index !== enter + 2) {
          events[enter][1].end = events[index - 1][1].end;
          events.splice(enter + 2, index - enter - 2);
          index = enter + 2;
        }

        enter = undefined;
      }
    }

    return extraResolver ? extraResolver(events, context) : events
  }
}
/**
 * A rather ugly set of instructions which again looks at chunks in the input
 * stream.
 * The reason to do this here is that it is *much* faster to parse in reverse.
 * And that we can’t hook into `null` to split the line suffix before an EOF.
 * To do: figure out if we can make this into a clean utility, or even in core.
 * As it will be useful for GFMs literal autolink extension (and maybe even
 * tables?)
 *
 * @type {Resolver}
 */

function resolveAllLineSuffixes(events, context) {
  let eventIndex = -1;

  while (++eventIndex <= events.length) {
    if (
      (eventIndex === events.length ||
        events[eventIndex][1].type === 'lineEnding') &&
      events[eventIndex - 1][1].type === 'data'
    ) {
      const data = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data);
      let index = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      /** @type {boolean|undefined} */

      let tabs;

      while (index--) {
        const chunk = chunks[index];

        if (typeof chunk === 'string') {
          bufferIndex = chunk.length;

          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }

          if (bufferIndex) break
          bufferIndex = -1;
        } // Number
        else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) ; else {
          // Replacement character, exit.
          index++;
          break
        }
      }

      if (size) {
        const token = {
          type:
            eventIndex === events.length || tabs || size < 2
              ? 'lineSuffix'
              : 'hardBreakTrailing',
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index,
            _bufferIndex: index
              ? bufferIndex
              : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token.start);

        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(
            eventIndex,
            0,
            ['enter', token, context],
            ['exit', token, context]
          );
          eventIndex += 2;
        }
      }

      eventIndex++;
    }
  }

  return events
}/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 */

/**
 * Create a tokenizer.
 * Tokenizers deal with one type of data (e.g., containers, flow, text).
 * The parser is the object dealing with it all.
 * `initialize` works like other constructs, except that only its `tokenize`
 * function is used, in which case it doesn’t receive an `ok` or `nok`.
 * `from` can be given to set the point before the first character, although
 * when further lines are indented, they must be set with `defineSkip`.
 *
 * @param {ParseContext} parser
 * @param {InitialConstruct} initialize
 * @param {Omit<Point, '_index'|'_bufferIndex'>} [from]
 * @returns {TokenizeContext}
 */
function createTokenizer(parser, initialize, from) {
  /** @type {Point} */
  let point = Object.assign(
    from
      ? Object.assign({}, from)
      : {
          line: 1,
          column: 1,
          offset: 0
        },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  /** @type {Record<string, number>} */

  const columnStart = {};
  /** @type {Construct[]} */

  const resolveAllConstructs = [];
  /** @type {Chunk[]} */

  let chunks = [];
  /** @type {Token[]} */

  let stack = [];
  /**
   * Tools used for tokenizing.
   *
   * @type {Effects}
   */

  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  /**
   * State and tools for resolving and serializing.
   *
   * @type {TokenizeContext}
   */

  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  /**
   * The state function.
   *
   * @type {State|void}
   */

  let state = initialize.tokenize.call(context, effects);

  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }

  return context
  /** @type {TokenizeContext['write']} */

  function write(slice) {
    chunks = push(chunks, slice);
    main(); // Exit if we’re not done, resolve might change stuff.

    if (chunks[chunks.length - 1] !== null) {
      return []
    }

    addResult(initialize, 0); // Otherwise, resolve, and exit.

    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events
  } //
  // Tools.
  //

  /** @type {TokenizeContext['sliceSerialize']} */

  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs)
  }
  /** @type {TokenizeContext['sliceStream']} */

  function sliceStream(token) {
    return sliceChunks(chunks, token)
  }
  /** @type {TokenizeContext['now']} */

  function now() {
    return Object.assign({}, point)
  }
  /** @type {TokenizeContext['defineSkip']} */

  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  } //
  // State management.
  //

  /**
   * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
   * `consume`).
   * Here is where we walk through the chunks, which either include strings of
   * several characters, or numerical character codes.
   * The reason to do this in a loop instead of a call is so the stack can
   * drain.
   *
   * @returns {void}
   */

  function main() {
    /** @type {number} */
    let chunkIndex;

    while (point._index < chunks.length) {
      const chunk = chunks[point._index]; // If we’re in a buffer chunk, loop through it.

      if (typeof chunk === 'string') {
        chunkIndex = point._index;

        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }

        while (
          point._index === chunkIndex &&
          point._bufferIndex < chunk.length
        ) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  /**
   * Deal with one code.
   *
   * @param {Code} code
   * @returns {void}
   */

  function go(code) {
    state = state(code);
  }
  /** @type {Effects['consume']} */

  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    } // Not in a string chunk.

    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++; // At end of string chunk.
      // @ts-expect-error Points w/ non-negative `_bufferIndex` reference
      // strings.

      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    } // Expose the previous character.

    context.previous = code; // Mark as consumed.
  }
  /** @type {Effects['enter']} */

  function enter(type, fields) {
    /** @type {Token} */
    // @ts-expect-error Patch instead of assign required fields to help GC.
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(['enter', token, context]);
    stack.push(token);
    return token
  }
  /** @type {Effects['exit']} */

  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(['exit', token, context]);
    return token
  }
  /**
   * Use results.
   *
   * @type {ReturnHandle}
   */

  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  /**
   * Discard results.
   *
   * @type {ReturnHandle}
   */

  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  /**
   * Factory to attempt/check/interrupt.
   *
   * @param {ReturnHandle} onreturn
   * @param {Record<string, unknown>} [fields]
   */

  function constructFactory(onreturn, fields) {
    return hook
    /**
     * Handle either an object mapping codes to constructs, a list of
     * constructs, or a single construct.
     *
     * @param {Construct|Construct[]|ConstructRecord} constructs
     * @param {State} returnState
     * @param {State} [bogusState]
     * @returns {State}
     */

    function hook(constructs, returnState, bogusState) {
      /** @type {Construct[]} */
      let listOfConstructs;
      /** @type {number} */

      let constructIndex;
      /** @type {Construct} */

      let currentConstruct;
      /** @type {Info} */

      let info;
      return Array.isArray(constructs)
        ? /* c8 ignore next 1 */
          handleListOfConstructs(constructs)
        : 'tokenize' in constructs // @ts-expect-error Looks like a construct.
        ? handleListOfConstructs([constructs])
        : handleMapOfConstructs(constructs)
      /**
       * Handle a list of construct.
       *
       * @param {ConstructRecord} map
       * @returns {State}
       */

      function handleMapOfConstructs(map) {
        return start
        /** @type {State} */

        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.

            /* c8 ignore next 2 */
            ...(Array.isArray(def) ? def : def ? [def] : []),
            ...(Array.isArray(all) ? all : all ? [all] : [])
          ];
          return handleListOfConstructs(list)(code)
        }
      }
      /**
       * Handle a list of construct.
       *
       * @param {Construct[]} list
       * @returns {State}
       */

      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;

        if (list.length === 0) {
          return bogusState
        }

        return handleConstruct(list[constructIndex])
      }
      /**
       * Handle a single construct.
       *
       * @param {Construct} construct
       * @returns {State}
       */

      function handleConstruct(construct) {
        return start
        /** @type {State} */

        function start(code) {
          // To do: not needed to store if there is no bogus state, probably?
          // Currently doesn’t work because `inspect` in document does a check
          // w/o a bogus, which doesn’t make sense. But it does seem to help perf
          // by not storing.
          info = store();
          currentConstruct = construct;

          if (!construct.partial) {
            context.currentConstruct = construct;
          }

          if (
            construct.name &&
            context.parser.constructs.disable.null.includes(construct.name)
          ) {
            return nok()
          }

          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code)
        }
      }
      /** @type {State} */

      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState
      }
      /** @type {State} */

      function nok(code) {
        info.restore();

        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex])
        }

        return bogusState
      }
    }
  }
  /**
   * @param {Construct} construct
   * @param {number} from
   * @returns {void}
   */

  function addResult(construct, from) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }

    if (construct.resolve) {
      splice(
        context.events,
        from,
        context.events.length - from,
        construct.resolve(context.events.slice(from), context)
      );
    }

    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  /**
   * Store state.
   *
   * @returns {Info}
   */

  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    }
    /**
     * Restore state.
     *
     * @returns {void}
     */

    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  /**
   * Move the current point a bit forward in the line when it’s on a column
   * skip.
   *
   * @returns {void}
   */

  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
/**
 * Get the chunks from a slice of chunks in the range of a token.
 *
 * @param {Chunk[]} chunks
 * @param {Pick<Token, 'start'|'end'>} token
 * @returns {Chunk[]}
 */

function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  /** @type {Chunk[]} */

  let view;

  if (startIndex === endIndex) {
    // @ts-expect-error `_bufferIndex` is used on string chunks.
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);

    if (startBufferIndex > -1) {
      // @ts-expect-error `_bufferIndex` is used on string chunks.
      view[0] = view[0].slice(startBufferIndex);
    }

    if (endBufferIndex > 0) {
      // @ts-expect-error `_bufferIndex` is used on string chunks.
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }

  return view
}
/**
 * Get the string value of a slice of chunks.
 *
 * @param {Chunk[]} chunks
 * @param {boolean} [expandTabs=false]
 * @returns {string}
 */

function serializeChunks(chunks, expandTabs) {
  let index = -1;
  /** @type {string[]} */

  const result = [];
  /** @type {boolean|undefined} */

  let atTab;

  while (++index < chunks.length) {
    const chunk = chunks[index];
    /** @type {string} */

    let value;

    if (typeof chunk === 'string') {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = '\r';
          break
        }

        case -4: {
          value = '\n';
          break
        }

        case -3: {
          value = '\r' + '\n';
          break
        }

        case -2: {
          value = expandTabs ? ' ' : '\t';
          break
        }

        case -1: {
          if (!expandTabs && atTab) continue
          value = ' ';
          break
        }

        default: {
          // Currently only replacement character.
          value = String.fromCharCode(chunk);
        }
      }

    atTab = chunk === -2;
    result.push(value);
  }

  return result.join('')
}/**
 * @typedef {import('micromark-util-types').Extension} Extension
 */
/** @type {Extension['document']} */

const document$1 = {
  [42]: list$1,
  [43]: list$1,
  [45]: list$1,
  [48]: list$1,
  [49]: list$1,
  [50]: list$1,
  [51]: list$1,
  [52]: list$1,
  [53]: list$1,
  [54]: list$1,
  [55]: list$1,
  [56]: list$1,
  [57]: list$1,
  [62]: blockQuote
};
/** @type {Extension['contentInitial']} */

const contentInitial = {
  [91]: definition
};
/** @type {Extension['flowInitial']} */

const flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
};
/** @type {Extension['flow']} */

const flow = {
  [35]: headingAtx,
  [42]: thematicBreak$1,
  [45]: [setextUnderline, thematicBreak$1],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak$1,
  [96]: codeFenced,
  [126]: codeFenced
};
/** @type {Extension['string']} */

const string = {
  [38]: characterReference,
  [92]: characterEscape
};
/** @type {Extension['text']} */

const text$1 = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
};
/** @type {Extension['insideSpan']} */

const insideSpan = {
  null: [attention, resolver]
};
/** @type {Extension['attentionMarkers']} */

const attentionMarkers = {
  null: [42, 95]
};
/** @type {Extension['disable']} */

const disable = {
  null: []
};var defaultConstructs=/*#__PURE__*/Object.freeze({__proto__:null,document:document$1,contentInitial:contentInitial,flowInitial:flowInitial,flow:flow,string:string,text:text$1,insideSpan:insideSpan,attentionMarkers:attentionMarkers,disable:disable});/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').FullNormalizedExtension} FullNormalizedExtension
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 * @typedef {import('micromark-util-types').Create} Create
 */
/**
 * @param {ParseOptions} [options]
 * @returns {ParseContext}
 */

function parse$1(options = {}) {
  /** @type {FullNormalizedExtension} */
  // @ts-expect-error `defaultConstructs` is full, so the result will be too.
  const constructs = combineExtensions(
    // @ts-expect-error Same as above.
    [defaultConstructs].concat(options.extensions || [])
  );
  /** @type {ParseContext} */

  const parser = {
    defined: [],
    lazy: {},
    constructs,
    content: create(content$1),
    document: create(document$2),
    flow: create(flow$1),
    string: create(string$1),
    text: create(text$2)
  };
  return parser
  /**
   * @param {InitialConstruct} initial
   */

  function create(initial) {
    return creator
    /** @type {Create} */

    function creator(from) {
      return createTokenizer(parser, initial, from)
    }
  }
}/**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Value} Value
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Code} Code
 */

/**
 * @callback Preprocessor
 * @param {Value} value
 * @param {Encoding} [encoding]
 * @param {boolean} [end=false]
 * @returns {Chunk[]}
 */
const search = /[\0\t\n\r]/g;
/**
 * @returns {Preprocessor}
 */

function preprocess() {
  let column = 1;
  let buffer = '';
  /** @type {boolean|undefined} */

  let start = true;
  /** @type {boolean|undefined} */

  let atCarriageReturn;
  return preprocessor
  /** @type {Preprocessor} */

  function preprocessor(value, encoding, end) {
    /** @type {Chunk[]} */
    const chunks = [];
    /** @type {RegExpMatchArray|null} */

    let match;
    /** @type {number} */

    let next;
    /** @type {number} */

    let startPosition;
    /** @type {number} */

    let endPosition;
    /** @type {Code} */

    let code; // @ts-expect-error `Buffer` does allow an encoding.

    value = buffer + value.toString(encoding);
    startPosition = 0;
    buffer = '';

    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }

      start = undefined;
    }

    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition =
        match && match.index !== undefined ? match.index : value.length;
      code = value.charCodeAt(endPosition);

      if (!match) {
        buffer = value.slice(startPosition);
        break
      }

      if (code === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = undefined;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = undefined;
        }

        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }

        switch (code) {
          case 0: {
            chunks.push(65533);
            column++;
            break
          }

          case 9: {
            next = Math.ceil(column / 4) * 4;
            chunks.push(-2);

            while (column++ < next) chunks.push(-1);

            break
          }

          case 10: {
            chunks.push(-4);
            column = 1;
            break
          }

          default: {
            atCarriageReturn = true;
            column = 1;
          }
        }
      }

      startPosition = endPosition + 1;
    }

    if (end) {
      if (atCarriageReturn) chunks.push(-5);
      if (buffer) chunks.push(buffer);
      chunks.push(null);
    }

    return chunks
  }
}/**
 * @typedef {import('micromark-util-types').Event} Event
 */
/**
 * @param {Event[]} events
 * @returns {Event[]}
 */

function postprocess(events) {
  while (!subtokenize(events)) {
    // Empty
  }

  return events
}/**
 * Turn the number (in string form as either hexa- or plain decimal) coming from
 * a numeric character reference into a character.
 *
 * @param {string} value
 *   Value to decode.
 * @param {number} base
 *   Numeric base.
 * @returns {string}
 */
function decodeNumericCharacterReference(value, base) {
  const code = Number.parseInt(value, base);

  if (
    // C0 except for HT, LF, FF, CR, space
    code < 9 ||
    code === 11 ||
    (code > 13 && code < 32) || // Control character (DEL) of the basic block and C1 controls.
    (code > 126 && code < 160) || // Lone high surrogates and low surrogates.
    (code > 55295 && code < 57344) || // Noncharacters.
    (code > 64975 && code < 65008) ||
    (code & 65535) === 65535 ||
    (code & 65535) === 65534 || // Out of range
    code > 1114111
  ) {
    return '\uFFFD'
  }

  return String.fromCharCode(code)
}const characterEscapeOrReference =
  /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
/**
 * Utility to decode markdown strings (which occur in places such as fenced
 * code info strings, destinations, labels, and titles).
 * The “string” content type allows character escapes and -references.
 * This decodes those.
 *
 * @param {string} value
 * @returns {string}
 */

function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode)
}
/**
 * @param {string} $0
 * @param {string} $1
 * @param {string} $2
 * @returns {string}
 */

function decode($0, $1, $2) {
  if ($1) {
    // Escape.
    return $1
  } // Reference.

  const head = $2.charCodeAt(0);

  if (head === 35) {
    const head = $2.charCodeAt(1);
    const hex = head === 120 || head === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10)
  }

  return decodeNamedCharacterReference($2) || $0
}/**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Value} Value
 * @typedef {import('unist').Parent} UnistParent
 * @typedef {import('unist').Point} Point
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('mdast').Content} Content
 * @typedef {Root|Content} Node
 * @typedef {Extract<Node, UnistParent>} Parent
 * @typedef {import('mdast').Break} Break
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('mdast').Code} Code
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('mdast').Image} Image
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('mdast').Link} Link
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('mdast').List} List
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('mdast').Text} Text
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 *
 * @typedef {UnistParent & {type: 'fragment', children: Array<PhrasingContent>}} Fragment
 */
const own$6 = {}.hasOwnProperty;
/**
 * @param value Markdown to parse (`string` or `Buffer`).
 * @param [encoding] Character encoding to understand `value` as when it’s a `Buffer` (`string`, default: `'utf8'`).
 * @param [options] Configuration
 */

const fromMarkdown =
  /**
   * @type {(
   *   ((value: Value, encoding: Encoding, options?: Options) => Root) &
   *   ((value: Value, options?: Options) => Root)
   * )}
   */

  /**
   * @param {Value} value
   * @param {Encoding} [encoding]
   * @param {Options} [options]
   * @returns {Root}
   */
  function (value, encoding, options) {
    if (typeof encoding !== 'string') {
      options = encoding;
      encoding = undefined;
    }

    return compiler(options)(
      postprocess(
        parse$1(options).document().write(preprocess()(value, encoding, true))
      )
    )
  };
/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options} [options]
 */

function compiler(options = {}) {
  /** @type {NormalizedExtension} */
  // @ts-expect-error: our base has all required fields, so the result will too.
  const config = configure(
    {
      transforms: [],
      canContainEols: [
        'emphasis',
        'fragment',
        'heading',
        'paragraph',
        'strong'
      ],
      enter: {
        autolink: opener(link),
        autolinkProtocol: onenterdata,
        autolinkEmail: onenterdata,
        atxHeading: opener(heading),
        blockQuote: opener(blockQuote),
        characterEscape: onenterdata,
        characterReference: onenterdata,
        codeFenced: opener(codeFlow),
        codeFencedFenceInfo: buffer,
        codeFencedFenceMeta: buffer,
        codeIndented: opener(codeFlow, buffer),
        codeText: opener(codeText, buffer),
        codeTextData: onenterdata,
        data: onenterdata,
        codeFlowValue: onenterdata,
        definition: opener(definition),
        definitionDestinationString: buffer,
        definitionLabelString: buffer,
        definitionTitleString: buffer,
        emphasis: opener(emphasis),
        hardBreakEscape: opener(hardBreak),
        hardBreakTrailing: opener(hardBreak),
        htmlFlow: opener(html, buffer),
        htmlFlowData: onenterdata,
        htmlText: opener(html, buffer),
        htmlTextData: onenterdata,
        image: opener(image),
        label: buffer,
        link: opener(link),
        listItem: opener(listItem),
        listItemValue: onenterlistitemvalue,
        listOrdered: opener(list, onenterlistordered),
        listUnordered: opener(list),
        paragraph: opener(paragraph),
        reference: onenterreference,
        referenceString: buffer,
        resourceDestinationString: buffer,
        resourceTitleString: buffer,
        setextHeading: opener(heading),
        strong: opener(strong),
        thematicBreak: opener(thematicBreak)
      },
      exit: {
        atxHeading: closer(),
        atxHeadingSequence: onexitatxheadingsequence,
        autolink: closer(),
        autolinkEmail: onexitautolinkemail,
        autolinkProtocol: onexitautolinkprotocol,
        blockQuote: closer(),
        characterEscapeValue: onexitdata,
        characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
        characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
        characterReferenceValue: onexitcharacterreferencevalue,
        codeFenced: closer(onexitcodefenced),
        codeFencedFence: onexitcodefencedfence,
        codeFencedFenceInfo: onexitcodefencedfenceinfo,
        codeFencedFenceMeta: onexitcodefencedfencemeta,
        codeFlowValue: onexitdata,
        codeIndented: closer(onexitcodeindented),
        codeText: closer(onexitcodetext),
        codeTextData: onexitdata,
        data: onexitdata,
        definition: closer(),
        definitionDestinationString: onexitdefinitiondestinationstring,
        definitionLabelString: onexitdefinitionlabelstring,
        definitionTitleString: onexitdefinitiontitlestring,
        emphasis: closer(),
        hardBreakEscape: closer(onexithardbreak),
        hardBreakTrailing: closer(onexithardbreak),
        htmlFlow: closer(onexithtmlflow),
        htmlFlowData: onexitdata,
        htmlText: closer(onexithtmltext),
        htmlTextData: onexitdata,
        image: closer(onexitimage),
        label: onexitlabel,
        labelText: onexitlabeltext,
        lineEnding: onexitlineending,
        link: closer(onexitlink),
        listItem: closer(),
        listOrdered: closer(),
        listUnordered: closer(),
        paragraph: closer(),
        referenceString: onexitreferencestring,
        resourceDestinationString: onexitresourcedestinationstring,
        resourceTitleString: onexitresourcetitlestring,
        resource: onexitresource,
        setextHeading: closer(onexitsetextheading),
        setextHeadingLineSequence: onexitsetextheadinglinesequence,
        setextHeadingText: onexitsetextheadingtext,
        strong: closer(),
        thematicBreak: closer()
      }
    },
    options.mdastExtensions || []
  );
  /** @type {CompileData} */

  const data = {};
  return compile
  /**
   * @param {Array<Event>} events
   * @returns {Root}
   */

  function compile(events) {
    /** @type {Root} */
    let tree = {
      type: 'root',
      children: []
    };
    /** @type {CompileContext['stack']} */

    const stack = [tree];
    /** @type {CompileContext['tokenStack']} */

    const tokenStack = [];
    /** @type {Array<number>} */

    const listStack = [];
    /** @type {Omit<CompileContext, 'sliceSerialize'>} */

    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      buffer,
      resume,
      setData,
      getData
    };
    let index = -1;

    while (++index < events.length) {
      // We preprocess lists to add `listItem` tokens, and to infer whether
      // items the list itself are spread out.
      if (
        events[index][1].type === 'listOrdered' ||
        events[index][1].type === 'listUnordered'
      ) {
        if (events[index][0] === 'enter') {
          listStack.push(index);
        } else {
          const tail = listStack.pop();
          index = prepareList(events, tail, index);
        }
      }
    }

    index = -1;

    while (++index < events.length) {
      const handler = config[events[index][0]];

      if (own$6.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }

    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, undefined, tail[0]);
    } // Figure out `root` position.

    tree.position = {
      start: point(
        events.length > 0
          ? events[0][1].start
          : {
              line: 1,
              column: 1,
              offset: 0
            }
      ),
      end: point(
        events.length > 0
          ? events[events.length - 2][1].end
          : {
              line: 1,
              column: 1,
              offset: 0
            }
      )
    };
    index = -1;

    while (++index < config.transforms.length) {
      tree = config.transforms[index](tree) || tree;
    }

    return tree
  }
  /**
   * @param {Array<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */

  function prepareList(events, start, length) {
    let index = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    /** @type {Token|undefined} */

    let listItem;
    /** @type {number|undefined} */

    let lineIndex;
    /** @type {number|undefined} */

    let firstBlankLineIndex;
    /** @type {boolean|undefined} */

    let atMarker;

    while (++index <= length) {
      const event = events[index];

      if (
        event[1].type === 'listUnordered' ||
        event[1].type === 'listOrdered' ||
        event[1].type === 'blockQuote'
      ) {
        if (event[0] === 'enter') {
          containerBalance++;
        } else {
          containerBalance--;
        }

        atMarker = undefined;
      } else if (event[1].type === 'lineEndingBlank') {
        if (event[0] === 'enter') {
          if (
            listItem &&
            !atMarker &&
            !containerBalance &&
            !firstBlankLineIndex
          ) {
            firstBlankLineIndex = index;
          }

          atMarker = undefined;
        }
      } else if (
        event[1].type === 'linePrefix' ||
        event[1].type === 'listItemValue' ||
        event[1].type === 'listItemMarker' ||
        event[1].type === 'listItemPrefix' ||
        event[1].type === 'listItemPrefixWhitespace'
      ) ; else {
        atMarker = undefined;
      }

      if (
        (!containerBalance &&
          event[0] === 'enter' &&
          event[1].type === 'listItemPrefix') ||
        (containerBalance === -1 &&
          event[0] === 'exit' &&
          (event[1].type === 'listUnordered' ||
            event[1].type === 'listOrdered'))
      ) {
        if (listItem) {
          let tailIndex = index;
          lineIndex = undefined;

          while (tailIndex--) {
            const tailEvent = events[tailIndex];

            if (
              tailEvent[1].type === 'lineEnding' ||
              tailEvent[1].type === 'lineEndingBlank'
            ) {
              if (tailEvent[0] === 'exit') continue

              if (lineIndex) {
                events[lineIndex][1].type = 'lineEndingBlank';
                listSpread = true;
              }

              tailEvent[1].type = 'lineEnding';
              lineIndex = tailIndex;
            } else if (
              tailEvent[1].type === 'linePrefix' ||
              tailEvent[1].type === 'blockQuotePrefix' ||
              tailEvent[1].type === 'blockQuotePrefixWhitespace' ||
              tailEvent[1].type === 'blockQuoteMarker' ||
              tailEvent[1].type === 'listItemIndent'
            ) ; else {
              break
            }
          }

          if (
            firstBlankLineIndex &&
            (!lineIndex || firstBlankLineIndex < lineIndex)
          ) {
            // @ts-expect-error Patched.
            listItem._spread = true;
          } // Fix position.

          listItem.end = Object.assign(
            {},
            lineIndex ? events[lineIndex][1].start : event[1].end
          );
          events.splice(lineIndex || index, 0, ['exit', listItem, event[2]]);
          index++;
          length++;
        } // Create a new list item.

        if (event[1].type === 'listItemPrefix') {
          listItem = {
            type: 'listItem',
            // @ts-expect-error Patched
            _spread: false,
            start: Object.assign({}, event[1].start)
          }; // @ts-expect-error: `listItem` is most definitely defined, TS...

          events.splice(index, 0, ['enter', listItem, event[2]]);
          index++;
          length++;
          firstBlankLineIndex = undefined;
          atMarker = true;
        }
      }
    } // @ts-expect-error Patched.

    events[start][1]._spread = listSpread;
    return length
  }
  /**
   * @type {CompileContext['setData']}
   * @param [value]
   */

  function setData(key, value) {
    data[key] = value;
  }
  /**
   * @type {CompileContext['getData']}
   * @template {string} K
   * @param {K} key
   * @returns {CompileData[K]}
   */

  function getData(key) {
    return data[key]
  }
  /**
   * @param {Point} d
   * @returns {Point}
   */

  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    }
  }
  /**
   * @param {(token: Token) => Node} create
   * @param {Handle} [and]
   * @returns {Handle}
   */

  function opener(create, and) {
    return open
    /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */

    function open(token) {
      enter.call(this, create(token), token);
      if (and) and.call(this, token);
    }
  }
  /** @type {CompileContext['buffer']} */

  function buffer() {
    this.stack.push({
      type: 'fragment',
      children: []
    });
  }
  /**
   * @type {CompileContext['enter']}
   * @template {Node} N
   * @this {CompileContext}
   * @param {N} node
   * @param {Token} token
   * @param {OnEnterError} [errorHandler]
   * @returns {N}
   */

  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    // @ts-expect-error: Assume `Node` can exist as a child of `parent`.
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]); // @ts-expect-error: `end` will be patched later.

    node.position = {
      start: point(token.start)
    };
    return node
  }
  /**
   * @param {Handle} [and]
   * @returns {Handle}
   */

  function closer(and) {
    return close
    /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */

    function close(token) {
      if (and) and.call(this, token);
      exit.call(this, token);
    }
  }
  /**
   * @type {CompileContext['exit']}
   * @this {CompileContext}
   * @param {Token} token
   * @param {OnExitError} [onExitError]
   * @returns {Node}
   */

  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();

    if (!open) {
      throw new Error(
        'Cannot close `' +
          token.type +
          '` (' +
          stringifyPosition({
            start: token.start,
            end: token.end
          }) +
          '): it’s not open'
      )
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }

    node.position.end = point(token.end);
    return node
  }
  /**
   * @this {CompileContext}
   * @returns {string}
   */

  function resume() {
    return toString(this.stack.pop())
  } //
  // Handlers.
  //

  /** @type {Handle} */

  function onenterlistordered() {
    setData('expectingFirstListItemValue', true);
  }
  /** @type {Handle} */

  function onenterlistitemvalue(token) {
    if (getData('expectingFirstListItemValue')) {
      const ancestor =
        /** @type {List} */
        this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
      setData('expectingFirstListItemValue');
    }
  }
  /** @type {Handle} */

  function onexitcodefencedfenceinfo() {
    const data = this.resume();
    const node =
      /** @type {Code} */
      this.stack[this.stack.length - 1];
    node.lang = data;
  }
  /** @type {Handle} */

  function onexitcodefencedfencemeta() {
    const data = this.resume();
    const node =
      /** @type {Code} */
      this.stack[this.stack.length - 1];
    node.meta = data;
  }
  /** @type {Handle} */

  function onexitcodefencedfence() {
    // Exit if this is the closing fence.
    if (getData('flowCodeInside')) return
    this.buffer();
    setData('flowCodeInside', true);
  }
  /** @type {Handle} */

  function onexitcodefenced() {
    const data = this.resume();
    const node =
      /** @type {Code} */
      this.stack[this.stack.length - 1];
    node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
    setData('flowCodeInside');
  }
  /** @type {Handle} */

  function onexitcodeindented() {
    const data = this.resume();
    const node =
      /** @type {Code} */
      this.stack[this.stack.length - 1];
    node.value = data.replace(/(\r?\n|\r)$/g, '');
  }
  /** @type {Handle} */

  function onexitdefinitionlabelstring(token) {
    // Discard label, use the source content instead.
    const label = this.resume();
    const node =
      /** @type {Definition} */
      this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase();
  }
  /** @type {Handle} */

  function onexitdefinitiontitlestring() {
    const data = this.resume();
    const node =
      /** @type {Definition} */
      this.stack[this.stack.length - 1];
    node.title = data;
  }
  /** @type {Handle} */

  function onexitdefinitiondestinationstring() {
    const data = this.resume();
    const node =
      /** @type {Definition} */
      this.stack[this.stack.length - 1];
    node.url = data;
  }
  /** @type {Handle} */

  function onexitatxheadingsequence(token) {
    const node =
      /** @type {Heading} */
      this.stack[this.stack.length - 1];

    if (!node.depth) {
      const depth = this.sliceSerialize(token).length;
      node.depth = depth;
    }
  }
  /** @type {Handle} */

  function onexitsetextheadingtext() {
    setData('setextHeadingSlurpLineEnding', true);
  }
  /** @type {Handle} */

  function onexitsetextheadinglinesequence(token) {
    const node =
      /** @type {Heading} */
      this.stack[this.stack.length - 1];
    node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
  }
  /** @type {Handle} */

  function onexitsetextheading() {
    setData('setextHeadingSlurpLineEnding');
  }
  /** @type {Handle} */

  function onenterdata(token) {
    const parent =
      /** @type {Parent} */
      this.stack[this.stack.length - 1];
    /** @type {Node} */

    let tail = parent.children[parent.children.length - 1];

    if (!tail || tail.type !== 'text') {
      // Add a new text node.
      tail = text(); // @ts-expect-error: we’ll add `end` later.

      tail.position = {
        start: point(token.start)
      }; // @ts-expect-error: Assume `parent` accepts `text`.

      parent.children.push(tail);
    }

    this.stack.push(tail);
  }
  /** @type {Handle} */

  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point(token.end);
  }
  /** @type {Handle} */

  function onexitlineending(token) {
    const context = this.stack[this.stack.length - 1];

    // If we’re at a hard break, include the line ending in there.
    if (getData('atHardBreak')) {
      const tail = context.children[context.children.length - 1];
      tail.position.end = point(token.end);
      setData('atHardBreak');
      return
    }

    if (
      !getData('setextHeadingSlurpLineEnding') &&
      config.canContainEols.includes(context.type)
    ) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  /** @type {Handle} */

  function onexithardbreak() {
    setData('atHardBreak', true);
  }
  /** @type {Handle} */

  function onexithtmlflow() {
    const data = this.resume();
    const node =
      /** @type {HTML} */
      this.stack[this.stack.length - 1];
    node.value = data;
  }
  /** @type {Handle} */

  function onexithtmltext() {
    const data = this.resume();
    const node =
      /** @type {HTML} */
      this.stack[this.stack.length - 1];
    node.value = data;
  }
  /** @type {Handle} */

  function onexitcodetext() {
    const data = this.resume();
    const node =
      /** @type {InlineCode} */
      this.stack[this.stack.length - 1];
    node.value = data;
  }
  /** @type {Handle} */

  function onexitlink() {
    const context =
      /** @type {Link & {identifier: string, label: string}} */
      this.stack[this.stack.length - 1]; // To do: clean.

    if (getData('inReference')) {
      context.type += 'Reference'; // @ts-expect-error: mutate.

      context.referenceType = getData('referenceType') || 'shortcut'; // @ts-expect-error: mutate.

      delete context.url;
      delete context.title;
    } else {
      // @ts-expect-error: mutate.
      delete context.identifier; // @ts-expect-error: mutate.

      delete context.label;
    }

    setData('referenceType');
  }
  /** @type {Handle} */

  function onexitimage() {
    const context =
      /** @type {Image & {identifier: string, label: string}} */
      this.stack[this.stack.length - 1]; // To do: clean.

    if (getData('inReference')) {
      context.type += 'Reference'; // @ts-expect-error: mutate.

      context.referenceType = getData('referenceType') || 'shortcut'; // @ts-expect-error: mutate.

      delete context.url;
      delete context.title;
    } else {
      // @ts-expect-error: mutate.
      delete context.identifier; // @ts-expect-error: mutate.

      delete context.label;
    }

    setData('referenceType');
  }
  /** @type {Handle} */

  function onexitlabeltext(token) {
    const ancestor =
      /** @type {(Link|Image) & {identifier: string, label: string}} */
      this.stack[this.stack.length - 2];
    const string = this.sliceSerialize(token);
    ancestor.label = decodeString(string);
    ancestor.identifier = normalizeIdentifier(string).toLowerCase();
  }
  /** @type {Handle} */

  function onexitlabel() {
    const fragment =
      /** @type {Fragment} */
      this.stack[this.stack.length - 1];
    const value = this.resume();
    const node =
      /** @type {(Link|Image) & {identifier: string, label: string}} */
      this.stack[this.stack.length - 1]; // Assume a reference.

    setData('inReference', true);

    if (node.type === 'link') {
      // @ts-expect-error: Assume static phrasing content.
      node.children = fragment.children;
    } else {
      node.alt = value;
    }
  }
  /** @type {Handle} */

  function onexitresourcedestinationstring() {
    const data = this.resume();
    const node =
      /** @type {Link|Image} */
      this.stack[this.stack.length - 1];
    node.url = data;
  }
  /** @type {Handle} */

  function onexitresourcetitlestring() {
    const data = this.resume();
    const node =
      /** @type {Link|Image} */
      this.stack[this.stack.length - 1];
    node.title = data;
  }
  /** @type {Handle} */

  function onexitresource() {
    setData('inReference');
  }
  /** @type {Handle} */

  function onenterreference() {
    setData('referenceType', 'collapsed');
  }
  /** @type {Handle} */

  function onexitreferencestring(token) {
    const label = this.resume();
    const node =
      /** @type {LinkReference|ImageReference} */
      this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase();
    setData('referenceType', 'full');
  }
  /** @type {Handle} */

  function onexitcharacterreferencemarker(token) {
    setData('characterReferenceType', token.type);
  }
  /** @type {Handle} */

  function onexitcharacterreferencevalue(token) {
    const data = this.sliceSerialize(token);
    const type = getData('characterReferenceType');
    /** @type {string} */

    let value;

    if (type) {
      value = decodeNumericCharacterReference(
        data,
        type === 'characterReferenceMarkerNumeric' ? 10 : 16
      );
      setData('characterReferenceType');
    } else {
      // @ts-expect-error `decodeNamedCharacterReference` can return false for
      // invalid named character references, but everything we’ve tokenized is
      // valid.
      value = decodeNamedCharacterReference(data);
    }

    const tail = this.stack.pop();
    tail.value += value;
    tail.position.end = point(token.end);
  }
  /** @type {Handle} */

  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    const node =
      /** @type {Link} */
      this.stack[this.stack.length - 1];
    node.url = this.sliceSerialize(token);
  }
  /** @type {Handle} */

  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    const node =
      /** @type {Link} */
      this.stack[this.stack.length - 1];
    node.url = 'mailto:' + this.sliceSerialize(token);
  } //
  // Creaters.
  //

  /** @returns {Blockquote} */

  function blockQuote() {
    return {
      type: 'blockquote',
      children: []
    }
  }
  /** @returns {Code} */

  function codeFlow() {
    return {
      type: 'code',
      lang: null,
      meta: null,
      value: ''
    }
  }
  /** @returns {InlineCode} */

  function codeText() {
    return {
      type: 'inlineCode',
      value: ''
    }
  }
  /** @returns {Definition} */

  function definition() {
    return {
      type: 'definition',
      identifier: '',
      label: null,
      title: null,
      url: ''
    }
  }
  /** @returns {Emphasis} */

  function emphasis() {
    return {
      type: 'emphasis',
      children: []
    }
  }
  /** @returns {Heading} */

  function heading() {
    // @ts-expect-error `depth` will be set later.
    return {
      type: 'heading',
      depth: undefined,
      children: []
    }
  }
  /** @returns {Break} */

  function hardBreak() {
    return {
      type: 'break'
    }
  }
  /** @returns {HTML} */

  function html() {
    return {
      type: 'html',
      value: ''
    }
  }
  /** @returns {Image} */

  function image() {
    return {
      type: 'image',
      title: null,
      url: '',
      alt: null
    }
  }
  /** @returns {Link} */

  function link() {
    return {
      type: 'link',
      title: null,
      url: '',
      children: []
    }
  }
  /**
   * @param {Token} token
   * @returns {List}
   */

  function list(token) {
    return {
      type: 'list',
      ordered: token.type === 'listOrdered',
      start: null,
      // @ts-expect-error Patched.
      spread: token._spread,
      children: []
    }
  }
  /**
   * @param {Token} token
   * @returns {ListItem}
   */

  function listItem(token) {
    return {
      type: 'listItem',
      // @ts-expect-error Patched.
      spread: token._spread,
      checked: null,
      children: []
    }
  }
  /** @returns {Paragraph} */

  function paragraph() {
    return {
      type: 'paragraph',
      children: []
    }
  }
  /** @returns {Strong} */

  function strong() {
    return {
      type: 'strong',
      children: []
    }
  }
  /** @returns {Text} */

  function text() {
    return {
      type: 'text',
      value: ''
    }
  }
  /** @returns {ThematicBreak} */

  function thematicBreak() {
    return {
      type: 'thematicBreak'
    }
  }
}
/**
 * @param {Extension} combined
 * @param {Array<Extension|Array<Extension>>} extensions
 * @returns {Extension}
 */

function configure(combined, extensions) {
  let index = -1;

  while (++index < extensions.length) {
    const value = extensions[index];

    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }

  return combined
}
/**
 * @param {Extension} combined
 * @param {Extension} extension
 * @returns {void}
 */

function extension(combined, extension) {
  /** @type {string} */
  let key;

  for (key in extension) {
    if (own$6.call(extension, key)) {
      const list = key === 'canContainEols' || key === 'transforms';
      const maybe = own$6.call(combined, key) ? combined[key] : undefined;
      /* c8 ignore next */

      const left = maybe || (combined[key] = list ? [] : {});
      const right = extension[key];

      if (right) {
        if (list) {
          // @ts-expect-error: `left` is an array.
          combined[key] = [...left, ...right];
        } else {
          Object.assign(left, right);
        }
      }
    }
  }
}
/** @type {OnEnterError} */

function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      'Cannot close `' +
        left.type +
        '` (' +
        stringifyPosition({
          start: left.start,
          end: left.end
        }) +
        '): a different token (`' +
        right.type +
        '`, ' +
        stringifyPosition({
          start: right.start,
          end: right.end
        }) +
        ') is open'
    )
  } else {
    throw new Error(
      'Cannot close document, a token (`' +
        right.type +
        '`, ' +
        stringifyPosition({
          start: right.start,
          end: right.end
        }) +
        ') is still open'
    )
  }
}/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast-util-from-markdown').Options} Options
 */

/** @type {import('unified').Plugin<[Options?] | void[], string, Root>} */
function remarkParse(options) {
  /** @type {import('unified').ParserFunction<Root>} */
  const parser = (doc) => {
    // Assume options.
    const settings = /** @type {Options} */ (this.data('settings'));

    return fromMarkdown(
      doc,
      Object.assign({}, settings, options, {
        // Note: these options are not in the readme.
        // The goal is for them to be set by plugins on `data` instead of being
        // passed by users.
        extensions: this.data('micromarkExtensions') || [],
        mdastExtensions: this.data('fromMarkdownExtensions') || []
      })
    )
  };

  Object.assign(this, {Parser: parser});
}/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist').Literal} Literal
 * @typedef {Object.<string, unknown>} Props
 * @typedef {Array.<Node>|string} ChildrenOrValue
 *
 * @typedef {(<T extends string, P extends Record<string, unknown>, C extends Node[]>(type: T, props: P, children: C) => {type: T, children: C} & P)} BuildParentWithProps
 * @typedef {(<T extends string, P extends Record<string, unknown>>(type: T, props: P, value: string) => {type: T, value: string} & P)} BuildLiteralWithProps
 * @typedef {(<T extends string, P extends Record<string, unknown>>(type: T, props: P) => {type: T} & P)} BuildVoidWithProps
 * @typedef {(<T extends string, C extends Node[]>(type: T, children: C) => {type: T, children: C})} BuildParent
 * @typedef {(<T extends string>(type: T, value: string) => {type: T, value: string})} BuildLiteral
 * @typedef {(<T extends string>(type: T) => {type: T})} BuildVoid
 */

var u$1 = /**
 * @type {BuildVoid & BuildVoidWithProps & BuildLiteral & BuildLiteralWithProps & BuildParent & BuildParentWithProps}
 */ (
  /**
   * @param {string} type Type of node
   * @param {Props|ChildrenOrValue} [props] Additional properties for node (or `children` or `value`)
   * @param {ChildrenOrValue} [value] `children` or `value` of node
   * @returns {Node}
   */
  function (type, props, value) {
    /** @type {Node} */
    var node = {type: String(type)};

    if (
      (value === undefined || value === null) &&
      (typeof props === 'string' || Array.isArray(props))
    ) {
      value = props;
    } else {
      Object.assign(node, props);
    }

    if (Array.isArray(value)) {
      node.children = value;
    } else if (value !== undefined && value !== null) {
      node.value = String(value);
    }

    return node
  }
);/**
 * @typedef {import('mdast').Root|import('mdast').Parent['children'][number]} MdastNode
 * @typedef {import('./index.js').H} H
 * @typedef {import('./index.js').Handler} Handler
 * @typedef {import('./index.js').Content} Content
 */

const own$5 = {}.hasOwnProperty;

/**
 * Transform an unknown node.
 * @type {Handler}
 * @param {MdastNode} node
 */
function unknown(h, node) {
  const data = node.data || {};

  if (
    'value' in node &&
    !(
      own$5.call(data, 'hName') ||
      own$5.call(data, 'hProperties') ||
      own$5.call(data, 'hChildren')
    )
  ) {
    return h.augment(node, u$1('text', node.value))
  }

  return h(node, 'div', all(h, node))
}

/**
 * @type {Handler}
 * @param {MdastNode} node
 */
function one(h, node, parent) {
  const type = node && node.type;
  /** @type {Handler} */
  let fn;

  // Fail on non-nodes.
  if (!type) {
    throw new Error('Expected node, got `' + node + '`')
  }

  if (own$5.call(h.handlers, type)) {
    fn = h.handlers[type];
  } else if (h.passThrough && h.passThrough.includes(type)) {
    fn = returnNode;
  } else {
    fn = h.unknownHandler;
  }

  return (typeof fn === 'function' ? fn : unknown)(h, node, parent)
}

/**
 * @type {Handler}
 * @param {MdastNode} node
 */
function returnNode(h, node) {
  // @ts-expect-error: Pass through custom node.
  return 'children' in node ? {...node, children: all(h, node)} : node
}

/**
 * @param {H} h
 * @param {MdastNode} parent
 */
function all(h, parent) {
  /** @type {Array.<Content>} */
  const values = [];

  if ('children' in parent) {
    const nodes = parent.children;
    let index = -1;

    while (++index < nodes.length) {
      const result = one(h, nodes[index], parent);

      if (result) {
        if (index && nodes[index - 1].type === 'break') {
          if (!Array.isArray(result) && result.type === 'text') {
            result.value = result.value.replace(/^\s+/, '');
          }

          if (!Array.isArray(result) && result.type === 'element') {
            const head = result.children[0];

            if (head && head.type === 'text') {
              head.value = head.value.replace(/^\s+/, '');
            }
          }
        }

        if (Array.isArray(result)) {
          values.push(...result);
        } else {
          values.push(result);
        }
      }
    }
  }

  return values
}/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 *
 * @typedef {string} Type
 * @typedef {Object<string, unknown>} Props
 *
 * @typedef {null|undefined|Type|Props|TestFunctionAnything|Array.<Type|Props|TestFunctionAnything>} Test
 */

const convert =
  /**
   * @type {(
   *   (<T extends Node>(test: T['type']|Partial<T>|TestFunctionPredicate<T>) => AssertPredicate<T>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */
  (
    /**
     * Generate an assertion from a check.
     * @param {Test} [test]
     * When nullish, checks if `node` is a `Node`.
     * When `string`, works like passing `function (node) {return node.type === test}`.
     * When `function` checks if function passed the node is true.
     * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
     * When `array`, checks any one of the subtests pass.
     * @returns {AssertAnything}
     */
    function (test) {
      if (test === undefined || test === null) {
        return ok
      }

      if (typeof test === 'string') {
        return typeFactory(test)
      }

      if (typeof test === 'object') {
        return Array.isArray(test) ? anyFactory(test) : propsFactory(test)
      }

      if (typeof test === 'function') {
        return castFactory(test)
      }

      throw new Error('Expected function, string, or object as test')
    }
  );
/**
 * @param {Array.<Type|Props|TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */
function anyFactory(tests) {
  /** @type {Array.<AssertAnything>} */
  const checks = [];
  let index = -1;

  while (++index < tests.length) {
    checks[index] = convert(tests[index]);
  }

  return castFactory(any)

  /**
   * @this {unknown}
   * @param {unknown[]} parameters
   * @returns {boolean}
   */
  function any(...parameters) {
    let index = -1;

    while (++index < checks.length) {
      if (checks[index].call(this, ...parameters)) return true
    }

    return false
  }
}

/**
 * Utility to assert each property in `test` is represented in `node`, and each
 * values are strictly equal.
 *
 * @param {Props} check
 * @returns {AssertAnything}
 */
function propsFactory(check) {
  return castFactory(all)

  /**
   * @param {Node} node
   * @returns {boolean}
   */
  function all(node) {
    /** @type {string} */
    let key;

    for (key in check) {
      // @ts-expect-error: hush, it sure works as an index.
      if (node[key] !== check[key]) return false
    }

    return true
  }
}

/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 *
 * @param {Type} check
 * @returns {AssertAnything}
 */
function typeFactory(check) {
  return castFactory(type)

  /**
   * @param {Node} node
   */
  function type(node) {
    return node && node.type === check
  }
}

/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */
function castFactory(check) {
  return assertion

  /**
   * @this {unknown}
   * @param {Array.<unknown>} parameters
   * @returns {boolean}
   */
  function assertion(...parameters) {
    // @ts-expect-error: spreading is fine.
    return Boolean(check.call(this, ...parameters))
  }
}

// Utility to return true.
function ok() {
  return true
}/**
 * @param {string} d
 * @returns {string}
 */
function color$1(d) {
  return '\u001B[33m' + d + '\u001B[39m'
}/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 * @typedef {import('./complex-types').Action} Action
 * @typedef {import('./complex-types').Index} Index
 * @typedef {import('./complex-types').ActionTuple} ActionTuple
 * @typedef {import('./complex-types').VisitorResult} VisitorResult
 * @typedef {import('./complex-types').Visitor} Visitor
 */

/**
 * Continue traversing as normal
 */
const CONTINUE$1 = true;
/**
 * Do not traverse this node’s children
 */
const SKIP$1 = 'skip';
/**
 * Stop traversing immediately
 */
const EXIT$1 = false;

/**
 * Visit children of tree which pass a test
 *
 * @param tree Abstract syntax tree to walk
 * @param test Test node, optional
 * @param visitor Function to run for each node
 * @param reverse Visit the tree in reverse order, defaults to false
 */
const visitParents$1 =
  /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: import('./complex-types').BuildVisitor<Tree, Check>, reverse?: boolean) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: import('./complex-types').BuildVisitor<Tree>, reverse?: boolean) => void)
   * )}
   */
  (
    /**
     * @param {Node} tree
     * @param {Test} test
     * @param {import('./complex-types').Visitor<Node>} visitor
     * @param {boolean} [reverse]
     */
    function (tree, test, visitor, reverse) {
      if (typeof test === 'function' && typeof visitor !== 'function') {
        reverse = visitor;
        // @ts-expect-error no visitor given, so `visitor` is test.
        visitor = test;
        test = null;
      }

      const is = convert(test);
      const step = reverse ? -1 : 1;

      factory(tree, null, [])();

      /**
       * @param {Node} node
       * @param {number?} index
       * @param {Array.<Parent>} parents
       */
      function factory(node, index, parents) {
        /** @type {Object.<string, unknown>} */
        // @ts-expect-error: hush
        const value = typeof node === 'object' && node !== null ? node : {};
        /** @type {string|undefined} */
        let name;

        if (typeof value.type === 'string') {
          name =
            typeof value.tagName === 'string'
              ? value.tagName
              : typeof value.name === 'string'
              ? value.name
              : undefined;

          Object.defineProperty(visit, 'name', {
            value:
              'node (' +
              color$1(value.type + (name ? '<' + name + '>' : '')) +
              ')'
          });
        }

        return visit

        function visit() {
          /** @type {ActionTuple} */
          let result = [];
          /** @type {ActionTuple} */
          let subresult;
          /** @type {number} */
          let offset;
          /** @type {Array.<Parent>} */
          let grandparents;

          if (!test || is(node, index, parents[parents.length - 1] || null)) {
            result = toResult$1(visitor(node, parents));

            if (result[0] === EXIT$1) {
              return result
            }
          }

          // @ts-expect-error looks like a parent.
          if (node.children && result[0] !== SKIP$1) {
            // @ts-expect-error looks like a parent.
            offset = (reverse ? node.children.length : -1) + step;
            // @ts-expect-error looks like a parent.
            grandparents = parents.concat(node);

            // @ts-expect-error looks like a parent.
            while (offset > -1 && offset < node.children.length) {
              // @ts-expect-error looks like a parent.
              subresult = factory(node.children[offset], offset, grandparents)();

              if (subresult[0] === EXIT$1) {
                return subresult
              }

              offset =
                typeof subresult[1] === 'number' ? subresult[1] : offset + step;
            }
          }

          return result
        }
      }
    }
  );

/**
 * @param {VisitorResult} value
 * @returns {ActionTuple}
 */
function toResult$1(value) {
  if (Array.isArray(value)) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE$1, value]
  }

  return [value]
}/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 * @typedef {import('./complex-types').Visitor} Visitor
 */

/**
 * Visit children of tree which pass a test
 *
 * @param tree Abstract syntax tree to walk
 * @param test Test, optional
 * @param visitor Function to run for each node
 * @param reverse Fisit the tree in reverse, defaults to false
 */
const visit$1 =
  /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: import('./complex-types').BuildVisitor<Tree, Check>, reverse?: boolean) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: import('./complex-types').BuildVisitor<Tree>, reverse?: boolean) => void)
   * )}
   */
  (
    /**
     * @param {Node} tree
     * @param {Test} test
     * @param {import('./complex-types').Visitor} visitor
     * @param {boolean} [reverse]
     */
    function (tree, test, visitor, reverse) {
      if (typeof test === 'function' && typeof visitor !== 'function') {
        reverse = visitor;
        visitor = test;
        test = null;
      }

      visitParents$1(tree, test, overload, reverse);

      /**
       * @param {Node} node
       * @param {Array.<Parent>} parents
       */
      function overload(node, parents) {
        const parent = parents[parents.length - 1];
        return visitor(
          node,
          parent ? parent.children.indexOf(node) : null,
          parent
        )
      }
    }
  );/**
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 *
 * @typedef {Partial<Point>} PointLike
 *
 * @typedef {Object} PositionLike
 * @property {PointLike} [start]
 * @property {PointLike} [end]
 *
 * @typedef {Object} NodeLike
 * @property {PositionLike} [position]
 */

var pointStart = point('start');
var pointEnd = point('end');

/**
 * Get the positional info of `node`.
 *
 * @param {'start'|'end'} type
 */
function point(type) {
  return point

  /**
   * Get the positional info of `node`.
   *
   * @param {NodeLike} [node]
   * @returns {Point}
   */
  function point(node) {
    /** @type {Point} */
    // @ts-ignore looks like a point
    var point = (node && node.position && node.position[type]) || {};

    return {
      line: point.line || null,
      column: point.column || null,
      offset: point.offset > -1 ? point.offset : null
    }
  }
}/**
 * @typedef {Object} PointLike
 * @property {number} [line]
 * @property {number} [column]
 * @property {number} [offset]
 *
 * @typedef {Object} PositionLike
 * @property {PointLike} [start]
 * @property {PointLike} [end]
 *
 * @typedef {Object} NodeLike
 * @property {PositionLike} [position]
 */

/**
 * Check if `node` is *generated*.
 *
 * @param {NodeLike} [node]
 * @returns {boolean}
 */
function generated(node) {
  return (
    !node ||
    !node.position ||
    !node.position.start ||
    !node.position.start.line ||
    !node.position.start.column ||
    !node.position.end ||
    !node.position.end.line ||
    !node.position.end.column
  )
}/**
 * @param {string} d
 * @returns {string}
 */
function color(d) {
  return '\u001B[33m' + d + '\u001B[39m'
}/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 */

/**
 * Continue traversing as normal
 */
const CONTINUE = true;
/**
 * Do not traverse this node’s children
 */
const SKIP = 'skip';
/**
 * Stop traversing immediately
 */
const EXIT = false;

const visitParents =
  /**
   * @type {(
   *   (<T extends Node>(tree: Node, test: T['type']|Partial<T>|import('unist-util-is').TestFunctionPredicate<T>|Array.<T['type']|Partial<T>|import('unist-util-is').TestFunctionPredicate<T>>, visitor: Visitor<T>, reverse?: boolean) => void) &
   *   ((tree: Node, test: Test, visitor: Visitor<Node>, reverse?: boolean) => void) &
   *   ((tree: Node, visitor: Visitor<Node>, reverse?: boolean) => void)
   * )}
   */
  (
    /**
     * Visit children of tree which pass a test
     *
     * @param {Node} tree Abstract syntax tree to walk
     * @param {Test} test test Test node
     * @param {Visitor<Node>} visitor Function to run for each node
     * @param {boolean} [reverse] Fisit the tree in reverse, defaults to false
     */
    function (tree, test, visitor, reverse) {
      if (typeof test === 'function' && typeof visitor !== 'function') {
        reverse = visitor;
        // @ts-ignore no visitor given, so `visitor` is test.
        visitor = test;
        test = null;
      }

      var is = convert(test);
      var step = reverse ? -1 : 1;

      factory(tree, null, [])();

      /**
       * @param {Node} node
       * @param {number?} index
       * @param {Array.<Parent>} parents
       */
      function factory(node, index, parents) {
        /** @type {Object.<string, unknown>} */
        var value = typeof node === 'object' && node !== null ? node : {};
        /** @type {string} */
        var name;

        if (typeof value.type === 'string') {
          name =
            typeof value.tagName === 'string'
              ? value.tagName
              : typeof value.name === 'string'
              ? value.name
              : undefined;

          Object.defineProperty(visit, 'name', {
            value:
              'node (' +
              color(value.type + (name ? '<' + name + '>' : '')) +
              ')'
          });
        }

        return visit

        function visit() {
          /** @type {ActionTuple} */
          var result = [];
          /** @type {ActionTuple} */
          var subresult;
          /** @type {number} */
          var offset;
          /** @type {Array.<Parent>} */
          var grandparents;

          if (!test || is(node, index, parents[parents.length - 1] || null)) {
            result = toResult(visitor(node, parents));

            if (result[0] === EXIT) {
              return result
            }
          }

          if (node.children && result[0] !== SKIP) {
            // @ts-ignore looks like a parent.
            offset = (reverse ? node.children.length : -1) + step;
            // @ts-ignore looks like a parent.
            grandparents = parents.concat(node);

            // @ts-ignore looks like a parent.
            while (offset > -1 && offset < node.children.length) {
              subresult = factory(node.children[offset], offset, grandparents)();

              if (subresult[0] === EXIT) {
                return subresult
              }

              offset =
                typeof subresult[1] === 'number' ? subresult[1] : offset + step;
            }
          }

          return result
        }
      }
    }
  );

/**
 * @param {VisitorResult} value
 * @returns {ActionTuple}
 */
function toResult(value) {
  if (Array.isArray(value)) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return [value]
}/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 */

const visit =
  /**
   * @type {(
   *   (<T extends Node>(tree: Node, test: T['type']|Partial<T>|import('unist-util-is').TestFunctionPredicate<T>|Array.<T['type']|Partial<T>|import('unist-util-is').TestFunctionPredicate<T>>, visitor: Visitor<T>, reverse?: boolean) => void) &
   *   ((tree: Node, test: Test, visitor: Visitor<Node>, reverse?: boolean) => void) &
   *   ((tree: Node, visitor: Visitor<Node>, reverse?: boolean) => void)
   * )}
   */
  (
    /**
     * Visit children of tree which pass a test
     *
     * @param {Node} tree Abstract syntax tree to walk
     * @param {Test} test test Test node
     * @param {Visitor<Node>} visitor Function to run for each node
     * @param {boolean} [reverse] Fisit the tree in reverse, defaults to false
     */
    function (tree, test, visitor, reverse) {
      if (typeof test === 'function' && typeof visitor !== 'function') {
        reverse = visitor;
        visitor = test;
        test = null;
      }

      visitParents(tree, test, overload, reverse);

      /**
       * @param {Node} node
       * @param {Array.<Parent>} parents
       */
      function overload(node, parents) {
        var parent = parents[parents.length - 1];
        return visitor(
          node,
          parent ? parent.children.indexOf(node) : null,
          parent
        )
      }
    }
  );/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('unist-util-visit').Visitor<Definition>} DefinitionVisitor
 */

const own$4 = {}.hasOwnProperty;

/**
 *
 * @param {Node} node
 */
function definitions(node) {
  /** @type {Object.<string, Definition>} */
  const cache = Object.create(null);

  if (!node || !node.type) {
    throw new Error('mdast-util-definitions expected node')
  }

  visit(node, 'definition', ondefinition);

  return getDefinition

  /** @type {DefinitionVisitor} */
  function ondefinition(definition) {
    const id = clean(definition.identifier);
    if (id && !own$4.call(cache, id)) {
      cache[id] = definition;
    }
  }

  /**
   * Get a node from the bound definition-cache.
   *
   * @param {string} identifier
   * @returns {Definition|null}
   */
  function getDefinition(identifier) {
    const id = clean(identifier);
    return id && own$4.call(cache, id) ? cache[id] : null
  }
}

/**
 * @param {string} [value]
 * @returns {string}
 */
function clean(value) {
  return String(value || '').toUpperCase()
}/**
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 * @typedef {import('hast').Element} Element
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {ThematicBreak} [node]
 * @returns {Element}
 */
function thematicBreak(h, node) {
  return h(node, 'hr')
}/**
 * @typedef {import('./index.js').Content} Content
 */

/**
 * Wrap `nodes` with line feeds between each entry.
 * Optionally adds line feeds at the start and end.
 *
 * @param {Array.<Content>} nodes
 * @param {boolean} [loose=false]
 * @returns {Array.<Content>}
 */
function wrap(nodes, loose) {
  /** @type {Array.<Content>} */
  const result = [];
  let index = -1;

  if (loose) {
    result.push(u$1('text', '\n'));
  }

  while (++index < nodes.length) {
    if (index) result.push(u$1('text', '\n'));
    result.push(nodes[index]);
  }

  if (loose && nodes.length > 0) {
    result.push(u$1('text', '\n'));
  }

  return result
}/**
 * @typedef {import('mdast').List} List
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {List} node
 * @returns {Element}
 */
function list(h, node) {
  /** @type {Properties} */
  const props = {};
  const name = node.ordered ? 'ol' : 'ul';
  const items = all(h, node);
  let index = -1;

  if (typeof node.start === 'number' && node.start !== 1) {
    props.start = node.start;
  }

  // Like GitHub, add a class for custom styling.
  while (++index < items.length) {
    const item = items[index];

    if (
      item.type === 'element' &&
      item.tagName === 'li' &&
      item.properties &&
      Array.isArray(item.properties.className) &&
      item.properties.className.includes('task-list-item')
    ) {
      props.className = ['contains-task-list'];
      break
    }
  }

  return h(node, name, props, wrap(items, true))
}/**
 * @typedef {import('mdast').BlockContent} BlockContent
 * @typedef {import('mdast').FootnoteDefinition} FootnoteDefinition
 * @typedef {import('mdast').Link} Link
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('./index.js').H} H
 */

/**
 * @param {H} h
 */
function footer(h) {
  const footnoteById = h.footnoteById;
  const footnoteOrder = h.footnoteOrder;
  let index = -1;
  /** @type {Array.<ListItem>} */
  const listItems = [];

  while (++index < footnoteOrder.length) {
    const def = footnoteById[footnoteOrder[index].toUpperCase()];

    if (!def) {
      continue
    }

    const marker = String(index + 1);
    const content = [...def.children];
    /** @type {Link} */
    const backReference = {
      type: 'link',
      url: '#fnref' + marker,
      data: {hProperties: {className: ['footnote-back'], role: 'doc-backlink'}},
      children: [{type: 'text', value: '↩'}]
    };
    const tail = content[content.length - 1];

    if (tail && tail.type === 'paragraph') {
      tail.children.push(backReference);
    } else {
      // @ts-expect-error Indeed, link directly added in block content.
      // Which we do because that way at least the handlers will be called
      // for the other HTML we’re generating (as markdown).
      content.push(backReference);
    }

    listItems.push({
      type: 'listItem',
      data: {hProperties: {id: 'fn' + marker, role: 'doc-endnote'}},
      children: content,
      position: def.position
    });
  }

  if (listItems.length === 0) {
    return null
  }

  return h(
    null,
    'section',
    {className: ['footnotes'], role: 'doc-endnotes'},
    wrap(
      [
        thematicBreak(h),
        list(h, {type: 'list', ordered: true, children: listItems})
      ],
      true
    )
  )
}/**
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Blockquote} node
 */
function blockquote(h, node) {
  return h(node, 'blockquote', wrap(all(h, node), true))
}/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Text} Text
 * @typedef {import('mdast').Break} Break
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Break} node
 * @returns {Array<Element|Text>}
 */
function hardBreak(h, node) {
  return [h(node, 'br'), u$1('text', '\n')]
}/**
 * @typedef {import('mdast').Code} Code
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Code} node
 */
function code(h, node) {
  const value = node.value ? node.value + '\n' : '';
  // To do: next major, use `node.lang` w/o regex, the splitting’s been going
  // on for years in remark now.
  const lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
  /** @type {Properties} */
  const props = {};

  if (lang) {
    props.className = ['language-' + lang];
  }

  const code = h(node, 'code', props, [u$1('text', value)]);

  if (node.meta) {
    code.data = {meta: node.meta};
  }

  return h(node.position, 'pre', [code])
}/**
 * @typedef {import('mdast').Delete} Delete
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Delete} node
 */
function strikethrough(h, node) {
  return h(node, 'del', all(h, node))
}/**
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Emphasis} node
 */
function emphasis(h, node) {
  return h(node, 'em', all(h, node))
}/**
 * @typedef {import('mdast').FootnoteReference} FootnoteReference
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {FootnoteReference} node
 */
function footnoteReference(h, node) {
  const footnoteOrder = h.footnoteOrder;
  const identifier = String(node.identifier);
  const index = footnoteOrder.indexOf(identifier);
  const marker = String(
    index === -1 ? footnoteOrder.push(identifier) : index + 1
  );

  return h(
    node,
    'a',
    {
      href: '#fn' + marker,
      className: ['footnote-ref'],
      id: 'fnref' + marker,
      role: 'doc-noteref'
    },
    [h(node.position, 'sup', [u$1('text', marker)])]
  )
}/**
 * @typedef {import('mdast').Footnote} Footnote
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Footnote} node
 */
function footnote(h, node) {
  const footnoteById = h.footnoteById;
  const footnoteOrder = h.footnoteOrder;
  let no = 1;

  while (no in footnoteById) no++;

  const identifier = String(no);

  // No need to check if `identifier` exists in `footnoteOrder`, it’s guaranteed
  // to not exist because we just generated it.
  footnoteOrder.push(identifier);

  footnoteById[identifier] = {
    type: 'footnoteDefinition',
    identifier,
    children: [{type: 'paragraph', children: node.children}],
    position: node.position
  };

  return footnoteReference(h, {
    type: 'footnoteReference',
    identifier,
    position: node.position
  })
}/**
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Heading} node
 */
function heading(h, node) {
  return h(node, 'h' + node.depth, all(h, node))
}/**
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * Return either a `raw` node in dangerous mode, otherwise nothing.
 *
 * @type {Handler}
 * @param {HTML} node
 */
function html$2(h, node) {
  return h.dangerous ? h.augment(node, u$1('raw', node.value)) : null
}var encodeCache = {};


// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude) {
  var i, ch, cache = encodeCache[exclude];
  if (cache) { return cache; }

  cache = encodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);

    if (/^[0-9a-z]$/i.test(ch)) {
      // always allow unencoded alphanumeric characters
      cache.push(ch);
    } else {
      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
    }
  }

  for (i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }

  return cache;
}


// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode(string, exclude, keepEscaped) {
  var i, l, code, nextCode, cache,
      result = '';

  if (typeof exclude !== 'string') {
    // encode(string, keepEscaped)
    keepEscaped  = exclude;
    exclude = encode.defaultChars;
  }

  if (typeof keepEscaped === 'undefined') {
    keepEscaped = true;
  }

  cache = getEncodeCache(exclude);

  for (i = 0, l = string.length; i < l; i++) {
    code = string.charCodeAt(i);

    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }

    if (code < 128) {
      result += cache[code];
      continue;
    }

    if (code >= 0xD800 && code <= 0xDFFF) {
      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);
        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }
      result += '%EF%BF%BD';
      continue;
    }

    result += encodeURIComponent(string[i]);
  }

  return result;
}

encode.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";


var encode_1 = encode;/**
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('./index.js').Handler} Handler
 * @typedef {import('./index.js').Content} Content
 */

/**
 * Return the content of a reference without definition as plain text.
 *
 * @type {Handler}
 * @param {ImageReference|LinkReference} node
 * @returns {Content|Array.<Content>}
 */
function revert(h, node) {
  const subtype = node.referenceType;
  let suffix = ']';

  if (subtype === 'collapsed') {
    suffix += '[]';
  } else if (subtype === 'full') {
    suffix += '[' + (node.label || node.identifier) + ']';
  }

  if (node.type === 'imageReference') {
    return u$1('text', '![' + node.alt + suffix)
  }

  const contents = all(h, node);
  const head = contents[0];

  if (head && head.type === 'text') {
    head.value = '[' + head.value;
  } else {
    contents.unshift(u$1('text', '['));
  }

  const tail = contents[contents.length - 1];

  if (tail && tail.type === 'text') {
    tail.value += suffix;
  } else {
    contents.push(u$1('text', suffix));
  }

  return contents
}/**
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {ImageReference} node
 */
function imageReference(h, node) {
  const def = h.definition(node.identifier);

  if (!def) {
    return revert(h, node)
  }

  /** @type {Properties} */
  const props = {src: encode_1(def.url || ''), alt: node.alt};

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title;
  }

  return h(node, 'img', props)
}/**
 * @typedef {import('mdast').Image} Image
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Image} node
 */
function image(h, node) {
  /** @type {Properties} */
  const props = {src: encode_1(node.url), alt: node.alt};

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title;
  }

  return h(node, 'img', props)
}/**
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {InlineCode} node
 */
function inlineCode(h, node) {
  return h(node, 'code', [u$1('text', node.value.replace(/\r?\n|\r/g, ' '))])
}/**
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {LinkReference} node
 */
function linkReference(h, node) {
  const def = h.definition(node.identifier);

  if (!def) {
    return revert(h, node)
  }

  /** @type {Properties} */
  const props = {href: encode_1(def.url || '')};

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title;
  }

  return h(node, 'a', props, all(h, node))
}/**
 * @typedef {import('mdast').Link} Link
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Link} node
 */
function link(h, node) {
  /** @type {Properties} */
  const props = {href: encode_1(node.url)};

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title;
  }

  return h(node, 'a', props, all(h, node))
}/**
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').List} List
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('hast').Element} Element
 * @typedef {import('../index.js').Handler} Handler
 * @typedef {import('../index.js').Content} Content
 */

/**
 * @type {Handler}
 * @param {ListItem} node
 * @param {List} parent
 */
function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  /** @type {Properties} */
  const props = {};
  /** @type {Array.<Content>} */
  const wrapped = [];

  if (typeof node.checked === 'boolean') {
    /** @type {Element} */
    let paragraph;

    if (
      result[0] &&
      result[0].type === 'element' &&
      result[0].tagName === 'p'
    ) {
      paragraph = result[0];
    } else {
      paragraph = h(null, 'p', []);
      result.unshift(paragraph);
    }

    if (paragraph.children.length > 0) {
      paragraph.children.unshift(u$1('text', ' '));
    }

    paragraph.children.unshift(
      h(null, 'input', {
        type: 'checkbox',
        checked: node.checked,
        disabled: true
      })
    );

    // According to github-markdown-css, this class hides bullet.
    // See: <https://github.com/sindresorhus/github-markdown-css>.
    props.className = ['task-list-item'];
  }

  let index = -1;

  while (++index < result.length) {
    const child = result[index];

    // Add eols before nodes, except if this is a loose, first paragraph.
    if (
      loose ||
      index !== 0 ||
      child.type !== 'element' ||
      child.tagName !== 'p'
    ) {
      wrapped.push(u$1('text', '\n'));
    }

    if (child.type === 'element' && child.tagName === 'p' && !loose) {
      wrapped.push(...child.children);
    } else {
      wrapped.push(child);
    }
  }

  const tail = result[result.length - 1];

  // Add a final eol.
  if (tail && (loose || !('tagName' in tail) || tail.tagName !== 'p')) {
    wrapped.push(u$1('text', '\n'));
  }

  return h(node, 'li', props, wrapped)
}

/**
 * @param {List} node
 * @return {Boolean}
 */
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  let index = -1;

  while (!loose && ++index < children.length) {
    loose = listItemLoose(children[index]);
  }

  return Boolean(loose)
}

/**
 * @param {ListItem} node
 * @return {Boolean}
 */
function listItemLoose(node) {
  const spread = node.spread;

  return spread === undefined || spread === null
    ? node.children.length > 1
    : spread
}/**
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Paragraph} node
 */
function paragraph(h, node) {
  return h(node, 'p', all(h, node))
}/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Root} node
 */
function root(h, node) {
  // @ts-expect-error `root`s are also fine.
  return h.augment(node, u$1('root', wrap(all(h, node))))
}/**
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Strong} node
 */
function strong(h, node) {
  return h(node, 'strong', all(h, node))
}/**
 * @typedef {import('mdast').Table} Table
 * @typedef {import('mdast').TableCell} TableCell
 * @typedef {import('hast').Element} Element
 * @typedef {import('../index.js').Handler} Handler
 * @typedef {import('../index.js').Content} Content
 */

/**
 * @type {Handler}
 * @param {Table} node
 */
function table(h, node) {
  const rows = node.children;
  let index = -1;
  const align = node.align || [];
  /** @type {Array.<Element>} */
  const result = [];

  while (++index < rows.length) {
    const row = rows[index].children;
    const name = index === 0 ? 'th' : 'td';
    let pos = node.align ? align.length : row.length;
    /** @type {Array.<Content>} */
    const out = [];

    while (pos--) {
      const cell = row[pos];
      out[pos] = h(cell, name, {align: align[pos]}, cell ? all(h, cell) : []);
    }

    result[index] = h(rows[index], 'tr', wrap(out, true));
  }

  return h(
    node,
    'table',
    wrap(
      [h(result[0].position, 'thead', wrap([result[0]], true))].concat(
        result[1]
          ? h(
              {
                start: pointStart(result[1]),
                end: pointEnd(result[result.length - 1])
              },
              'tbody',
              wrap(result.slice(1), true)
            )
          : []
      ),
      true
    )
  )
}/**
 * @typedef {import('mdast').Text} Text
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Text} node
 */
function text(h, node) {
  return h.augment(
    node,
    u$1('text', String(node.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, '$1'))
  )
}const handlers = {
  blockquote,
  break: hardBreak,
  code,
  delete: strikethrough,
  emphasis,
  footnoteReference,
  footnote,
  heading,
  html: html$2,
  imageReference,
  image,
  inlineCode,
  linkReference,
  link,
  listItem,
  list,
  paragraph,
  root,
  strong,
  table,
  text,
  thematicBreak,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
};

// Return nothing for nodes that are ignored.
function ignore() {
  return null
}/**
 * @typedef {import('mdast').Root|import('mdast').Parent['children'][number]} MdastNode
 * @typedef {import('hast').Root|import('hast').Parent['children'][number]} HastNode
 * @typedef {import('mdast').Parent} Parent
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('mdast').FootnoteDefinition} FootnoteDefinition
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('hast').Text} Text
 * @typedef {import('hast').Comment} Comment
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').ElementContent} Content
 * @typedef {import('unist-util-position').PositionLike} PositionLike
 *
 * @typedef EmbeddedHastFields
 * @property {string} [hName] Defines the tag name of an element
 * @property {Properties} [hProperties] Defines the properties of an element
 * @property {Array.<Content>} [hChildren] Defines the (hast) children of an element
 *
 * @typedef {Object.<string, unknown> & EmbeddedHastFields} Data unist data with embedded hast fields
 *
 * @typedef {MdastNode & {data?: Data}} NodeWithData unist node with embedded hast data
 *
 * @callback Handler
 * @param {H} h Handle context
 * @param {any} node mdast node to handle
 * @param {Parent|null} parent Parent of `node`
 * @returns {Content|Array.<Content>|null|undefined} hast node
 *
 * @callback HFunctionProps
 * @param {MdastNode|PositionLike|null|undefined} node mdast node or unist position
 * @param {string} tagName HTML tag name
 * @param {Properties} props Properties
 * @param {Array.<Content>?} [children] hast content
 * @returns {Element}
 *
 * @callback HFunctionNoProps
 * @param {MdastNode|PositionLike|null|undefined} node mdast node or unist position
 * @param {string} tagName HTML tag name
 * @param {Array.<Content>?} [children] hast content
 * @returns {Element}
 *
 * @typedef HFields
 * @property {boolean} dangerous Whether HTML is allowed
 * @property {(identifier: string) => Definition|null} definition Definition cache
 * @property {Object.<string, FootnoteDefinition>} footnoteById Footnote cache
 * @property {Array.<string>} footnoteOrder Order in which footnotes occur
 * @property {Handlers} handlers Applied handlers
 * @property {Handler} unknownHandler Handler for any none not in `passThrough` or otherwise handled
 * @property {(left: NodeWithData|PositionLike|null|undefined, right: Content) => Content} augment Like `h` but lower-level and usable on non-elements.
 * @property {Array.<string>} passThrough List of node types to pass through untouched (except for their children).
 *
 * @typedef Options
 * @property {boolean} [allowDangerousHtml=false] Whether to allow `html` nodes and inject them as `raw` HTML
 * @property {Handlers} [handlers] Object mapping mdast nodes to functions handling them
 * @property {Array.<string>} [passThrough] List of custom mdast node types to pass through (keep) in hast
 * @property {Handler} [unknownHandler] Handler for all unknown nodes.
 *
 * @typedef {Record.<string, Handler>} Handlers Map of node types to handlers
 * @typedef {HFunctionProps & HFunctionNoProps & HFields} H Handle context
 */

const own$3 = {}.hasOwnProperty;

/**
 * Factory to transform.
 * @param {MdastNode} tree mdast node
 * @param {Options} [options] Configuration
 * @returns {H} `h` function
 */
function factory(tree, options) {
  const settings = options || {};
  const dangerous = settings.allowDangerousHtml || false;
  /** @type {Object.<string, FootnoteDefinition>} */
  const footnoteById = {};

  h.dangerous = dangerous;
  h.definition = definitions(tree);
  h.footnoteById = footnoteById;
  /** @type {Array.<string>} */
  h.footnoteOrder = [];
  h.augment = augment;
  h.handlers = {...handlers, ...settings.handlers};
  h.unknownHandler = settings.unknownHandler;
  h.passThrough = settings.passThrough;

  visit$1(tree, 'footnoteDefinition', (definition) => {
    const id = String(definition.identifier).toUpperCase();

    // Mimick CM behavior of link definitions.
    // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/8290999/index.js#L26>.
    if (!own$3.call(footnoteById, id)) {
      footnoteById[id] = definition;
    }
  });

  // @ts-expect-error Hush, it’s fine!
  return h

  /**
   * Finalise the created `right`, a hast node, from `left`, an mdast node.
   * @param {(NodeWithData|PositionLike)?} left
   * @param {Content} right
   * @returns {Content}
   */
  function augment(left, right) {
    // Handle `data.hName`, `data.hProperties, `data.hChildren`.
    if (left && 'data' in left && left.data) {
      /** @type {Data} */
      const data = left.data;

      if (data.hName) {
        if (right.type !== 'element') {
          right = {
            type: 'element',
            tagName: '',
            properties: {},
            children: []
          };
        }

        right.tagName = data.hName;
      }

      if (right.type === 'element' && data.hProperties) {
        right.properties = {...right.properties, ...data.hProperties};
      }

      if ('children' in right && right.children && data.hChildren) {
        right.children = data.hChildren;
      }
    }

    if (left) {
      const ctx = 'type' in left ? left : {position: left};

      if (!generated(ctx)) {
        right.position = {start: pointStart(ctx), end: pointEnd(ctx)};
      }
    }

    return right
  }

  /**
   * Create an element for `node`.
   *
   * @type {HFunctionProps}
   */
  function h(node, tagName, props, children) {
    if (Array.isArray(props)) {
      children = props;
      props = {};
    }

    // @ts-expect-error augmenting an element yields an element.
    return augment(node, {
      type: 'element',
      tagName,
      properties: props || {},
      children: children || []
    })
  }
}

/**
 * Transform `tree` (an mdast node) to a hast node.
 *
 * @param {MdastNode} tree mdast node
 * @param {Options} [options] Configuration
 * @returns {HastNode|null|undefined} hast node
 */
function toHast(tree, options) {
  const h = factory(tree, options);
  const node = one(h, tree, null);
  const foot = footer(h);

  if (foot) {
    // @ts-expect-error If there’s a footer, there were definitions, meaning block
    // content.
    // So assume `node` is a parent node.
    node.children.push(u$1('text', '\n'), foot);
  }

  return Array.isArray(node) ? {type: 'root', children: node} : node
}/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('hast').Root} HastRoot
 * @typedef {import('mdast').Root} MdastRoot
 * @typedef {import('mdast-util-to-hast').Options} Options
 * @typedef {import('unified').Processor<any, any, any, any>} Processor
 *
 * @typedef {import('mdast-util-to-hast')} DoNotTouchAsThisImportIncludesRawInTree
 */

// Note: the `<MdastRoot, HastRoot>` overload doesn’t seem to work :'(

/**
 * Plugin to bridge or mutate to rehype.
 *
 * If a destination is given, runs the destination with the new hast tree
 * (bridge-mode).
 * Without destination, returns the hast tree: further plugins run on that tree
 * (mutate-mode).
 *
 * @param destination
 *   Optional unified processor.
 * @param options
 *   Options passed to `mdast-util-to-hast`.
 */
const remarkRehype =
  /** @type {(import('unified').Plugin<[Processor, Options?]|[Options]|[], MdastRoot>)} */
  (
    function (destination, options) {
      return destination && 'run' in destination
        ? bridge(destination, options)
        : mutate(destination)
    }
  );

var remarkRehype$1 = remarkRehype;

/**
 * Bridge-mode.
 * Runs the destination with the new hast tree.
 *
 * @type {import('unified').Plugin<[Processor, Options?], MdastRoot>}
 */
function bridge(destination, options) {
  return (node, file, next) => {
    destination.run(toHast(node, options), file, (error) => {
      next(error);
    });
  }
}

/**
 * Mutate-mode.
 * Further transformers run on the nlcst tree.
 *
 * @type {import('unified').Plugin<[Options?]|void[], MdastRoot, HastRoot>}
 */
function mutate(options) {
  // @ts-expect-error: assume a corresponding node is returned for `toHast`.
  return (node) => toHast(node, options)
}/**
 * @typedef {import('./info.js').Info} Info
 * @typedef {Record<string, Info>} Properties
 * @typedef {Record<string, string>} Normal
 */

class Schema {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(property, normal, space) {
    this.property = property;
    this.normal = normal;
    if (space) {
      this.space = space;
    }
  }
}

/** @type {Properties} */
Schema.prototype.property = {};
/** @type {Normal} */
Schema.prototype.normal = {};
/** @type {string|null} */
Schema.prototype.space = null;/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 */

/**
 * @param {Schema[]} definitions
 * @param {string} [space]
 * @returns {Schema}
 */
function merge(definitions, space) {
  /** @type {Properties} */
  const property = {};
  /** @type {Normal} */
  const normal = {};
  let index = -1;

  while (++index < definitions.length) {
    Object.assign(property, definitions[index].property);
    Object.assign(normal, definitions[index].normal);
  }

  return new Schema(property, normal, space)
}/**
 * @param {string} value
 * @returns {string}
 */
function normalize(value) {
  return value.toLowerCase()
}class Info {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(property, attribute) {
    /** @type {string} */
    this.property = property;
    /** @type {string} */
    this.attribute = attribute;
  }
}

/** @type {string|null} */
Info.prototype.space = null;
Info.prototype.boolean = false;
Info.prototype.booleanish = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.number = false;
Info.prototype.commaSeparated = false;
Info.prototype.spaceSeparated = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.mustUseProperty = false;
Info.prototype.defined = false;let powers = 0;

const boolean = increment();
const booleanish = increment();
const overloadedBoolean = increment();
const number = increment();
const spaceSeparated = increment();
const commaSeparated = increment();
const commaOrSpaceSeparated = increment();

function increment() {
  return 2 ** ++powers
}var types=/*#__PURE__*/Object.freeze({__proto__:null,boolean:boolean,booleanish:booleanish,overloadedBoolean:overloadedBoolean,number:number,spaceSeparated:spaceSeparated,commaSeparated:commaSeparated,commaOrSpaceSeparated:commaOrSpaceSeparated});/** @type {Array<keyof types>} */
// @ts-expect-error: hush.
const checks = Object.keys(types);

class DefinedInfo extends Info {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(property, attribute, mask, space) {
    let index = -1;

    super(property, attribute);

    mark(this, 'space', space);

    if (typeof mask === 'number') {
      while (++index < checks.length) {
        const check = checks[index];
        mark(this, checks[index], (mask & types[check]) === types[check]);
      }
    }
  }
}

DefinedInfo.prototype.defined = true;

/**
 * @param {DefinedInfo} values
 * @param {string} key
 * @param {unknown} value
 */
function mark(values, key, value) {
  if (value) {
    // @ts-expect-error: assume `value` matches the expected value of `key`.
    values[key] = value;
  }
}/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 *
 * @typedef {Record<string, string>} Attributes
 *
 * @typedef {Object} Definition
 * @property {Record<string, number|null>} properties
 * @property {(attributes: Attributes, property: string) => string} transform
 * @property {string} [space]
 * @property {Attributes} [attributes]
 * @property {Array<string>} [mustUseProperty]
 */

const own$2 = {}.hasOwnProperty;

/**
 * @param {Definition} definition
 * @returns {Schema}
 */
function create(definition) {
  /** @type {Properties} */
  const property = {};
  /** @type {Normal} */
  const normal = {};
  /** @type {string} */
  let prop;

  for (prop in definition.properties) {
    if (own$2.call(definition.properties, prop)) {
      const value = definition.properties[prop];
      const info = new DefinedInfo(
        prop,
        definition.transform(definition.attributes || {}, prop),
        value,
        definition.space
      );

      if (
        definition.mustUseProperty &&
        definition.mustUseProperty.includes(prop)
      ) {
        info.mustUseProperty = true;
      }

      property[prop] = info;

      normal[normalize(prop)] = prop;
      normal[normalize(info.attribute)] = prop;
    }
  }

  return new Schema(property, normal, definition.space)
}const xlink = create({
  space: 'xlink',
  transform(_, prop) {
    return 'xlink:' + prop.slice(5).toLowerCase()
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});const xml = create({
  space: 'xml',
  transform(_, prop) {
    return 'xml:' + prop.slice(3).toLowerCase()
  },
  properties: {xmlLang: null, xmlBase: null, xmlSpace: null}
});/**
 * @param {Record<string, string>} attributes
 * @param {string} attribute
 * @returns {string}
 */
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute
}/**
 * @param {Record<string, string>} attributes
 * @param {string} property
 * @returns {string}
 */
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase())
}const xmlns = create({
  space: 'xmlns',
  attributes: {xmlnsxlink: 'xmlns:xlink'},
  transform: caseInsensitiveTransform,
  properties: {xmlns: null, xmlnsXLink: null}
});const aria = create({
  transform(_, prop) {
    return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase()
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
});const html$1 = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,

    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null, // Several. Use CSS `text-align` instead,
    aLink: null, // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated, // `<object>`. List of URIs to archives
    axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null, // `<body>`. Use CSS `background-image` instead
    bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
    border: number, // `<table>`. Use CSS `border-width` instead,
    borderColor: null, // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number, // `<body>`
    cellPadding: null, // `<table>`
    cellSpacing: null, // `<table>`
    char: null, // Several table elements. When `align=char`, sets the character to align on
    charOff: null, // Several table elements. When `char`, offsets the alignment
    classId: null, // `<object>`
    clear: null, // `<br>`. Use CSS `clear` instead
    code: null, // `<object>`
    codeBase: null, // `<object>`
    codeType: null, // `<object>`
    color: null, // `<font>` and `<hr>`. Use CSS instead
    compact: boolean, // Lists. Use CSS to reduce space between items instead
    declare: boolean, // `<object>`
    event: null, // `<script>`
    face: null, // `<font>`. Use CSS instead
    frame: null, // `<table>`
    frameBorder: null, // `<iframe>`. Use CSS `border` instead
    hSpace: number, // `<img>` and `<object>`
    leftMargin: number, // `<body>`
    link: null, // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null, // `<img>`. Use a `<picture>`
    marginHeight: number, // `<body>`
    marginWidth: number, // `<body>`
    noResize: boolean, // `<frame>`
    noHref: boolean, // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean, // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean, // `<td>` and `<th>`
    object: null, // `<applet>`
    profile: null, // `<head>`
    prompt: null, // `<isindex>`
    rev: null, // `<link>`
    rightMargin: number, // `<body>`
    rules: null, // `<table>`
    scheme: null, // `<meta>`
    scrolling: booleanish, // `<frame>`. Use overflow in the child context
    standby: null, // `<object>`
    summary: null, // `<table>`
    text: null, // `<body>`. Use CSS `color` instead
    topMargin: number, // `<body>`
    valueType: null, // `<param>`
    version: null, // `<html>`. Use a doctype.
    vAlign: null, // Several. Use CSS `vertical-align` instead
    vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number, // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});const svg$1 = create({
  space: 'svg',
  attributes: {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    className: 'class',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    crossOrigin: 'crossorigin',
    dataType: 'datatype',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    hrefLang: 'hreflang',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    horizOriginY: 'horiz-origin-y',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    navDown: 'nav-down',
    navDownLeft: 'nav-down-left',
    navDownRight: 'nav-down-right',
    navLeft: 'nav-left',
    navNext: 'nav-next',
    navPrev: 'nav-prev',
    navRight: 'nav-right',
    navUp: 'nav-up',
    navUpLeft: 'nav-up-left',
    navUpRight: 'nav-up-right',
    onAbort: 'onabort',
    onActivate: 'onactivate',
    onAfterPrint: 'onafterprint',
    onBeforePrint: 'onbeforeprint',
    onBegin: 'onbegin',
    onCancel: 'oncancel',
    onCanPlay: 'oncanplay',
    onCanPlayThrough: 'oncanplaythrough',
    onChange: 'onchange',
    onClick: 'onclick',
    onClose: 'onclose',
    onCopy: 'oncopy',
    onCueChange: 'oncuechange',
    onCut: 'oncut',
    onDblClick: 'ondblclick',
    onDrag: 'ondrag',
    onDragEnd: 'ondragend',
    onDragEnter: 'ondragenter',
    onDragExit: 'ondragexit',
    onDragLeave: 'ondragleave',
    onDragOver: 'ondragover',
    onDragStart: 'ondragstart',
    onDrop: 'ondrop',
    onDurationChange: 'ondurationchange',
    onEmptied: 'onemptied',
    onEnd: 'onend',
    onEnded: 'onended',
    onError: 'onerror',
    onFocus: 'onfocus',
    onFocusIn: 'onfocusin',
    onFocusOut: 'onfocusout',
    onHashChange: 'onhashchange',
    onInput: 'oninput',
    onInvalid: 'oninvalid',
    onKeyDown: 'onkeydown',
    onKeyPress: 'onkeypress',
    onKeyUp: 'onkeyup',
    onLoad: 'onload',
    onLoadedData: 'onloadeddata',
    onLoadedMetadata: 'onloadedmetadata',
    onLoadStart: 'onloadstart',
    onMessage: 'onmessage',
    onMouseDown: 'onmousedown',
    onMouseEnter: 'onmouseenter',
    onMouseLeave: 'onmouseleave',
    onMouseMove: 'onmousemove',
    onMouseOut: 'onmouseout',
    onMouseOver: 'onmouseover',
    onMouseUp: 'onmouseup',
    onMouseWheel: 'onmousewheel',
    onOffline: 'onoffline',
    onOnline: 'ononline',
    onPageHide: 'onpagehide',
    onPageShow: 'onpageshow',
    onPaste: 'onpaste',
    onPause: 'onpause',
    onPlay: 'onplay',
    onPlaying: 'onplaying',
    onPopState: 'onpopstate',
    onProgress: 'onprogress',
    onRateChange: 'onratechange',
    onRepeat: 'onrepeat',
    onReset: 'onreset',
    onResize: 'onresize',
    onScroll: 'onscroll',
    onSeeked: 'onseeked',
    onSeeking: 'onseeking',
    onSelect: 'onselect',
    onShow: 'onshow',
    onStalled: 'onstalled',
    onStorage: 'onstorage',
    onSubmit: 'onsubmit',
    onSuspend: 'onsuspend',
    onTimeUpdate: 'ontimeupdate',
    onToggle: 'ontoggle',
    onUnload: 'onunload',
    onVolumeChange: 'onvolumechange',
    onWaiting: 'onwaiting',
    onZoom: 'onzoom',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    referrerPolicy: 'referrerpolicy',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDashArray: 'stroke-dasharray',
    strokeDashOffset: 'stroke-dashoffset',
    strokeLineCap: 'stroke-linecap',
    strokeLineJoin: 'stroke-linejoin',
    strokeMiterLimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    tabIndex: 'tabindex',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    typeOf: 'typeof',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: 'playbackorder',
    timelineBegin: 'timelinebegin'
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null, // SEMI_COLON_SEPARATED
    keySplines: null, // SEMI_COLON_SEPARATED
    keyTimes: null, // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});/**
 * @typedef {import('./util/schema.js').Schema} Schema
 */

const valid = /^data[-\w.:]+$/i;
const dash = /-[a-z]/g;
const cap = /[A-Z]/g;

/**
 * @param {Schema} schema
 * @param {string} value
 * @returns {Info}
 */
function find(schema, value) {
  const normal = normalize(value);
  let prop = value;
  let Type = Info;

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]]
  }

  if (normal.length > 4 && normal.slice(0, 4) === 'data' && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      // Turn it into a property.
      const rest = value.slice(5).replace(dash, camelcase);
      prop = 'data' + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      // Turn it into an attribute.
      const rest = value.slice(4);

      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab);

        if (dashes.charAt(0) !== '-') {
          dashes = '-' + dashes;
        }

        value = 'data' + dashes;
      }
    }

    Type = DefinedInfo;
  }

  return new Type(prop, value)
}

/**
 * @param {string} $0
 * @returns {string}
 */
function kebab($0) {
  return '-' + $0.toLowerCase()
}

/**
 * @param {string} $0
 * @returns {string}
 */
function camelcase($0) {
  return $0.charAt(1).toUpperCase()
}const hastToReact = {
  classId: 'classID',
  dataType: 'datatype',
  itemId: 'itemID',
  strokeDashArray: 'strokeDasharray',
  strokeDashOffset: 'strokeDashoffset',
  strokeLineCap: 'strokeLinecap',
  strokeLineJoin: 'strokeLinejoin',
  strokeMiterLimit: 'strokeMiterlimit',
  typeOf: 'typeof',
  xLinkActuate: 'xlinkActuate',
  xLinkArcRole: 'xlinkArcrole',
  xLinkHref: 'xlinkHref',
  xLinkRole: 'xlinkRole',
  xLinkShow: 'xlinkShow',
  xLinkTitle: 'xlinkTitle',
  xLinkType: 'xlinkType',
  xmlnsXLink: 'xmlnsXlink'
};/**
 * @typedef {import('./lib/util/info.js').Info} Info
 * @typedef {import('./lib/util/schema.js').Schema} Schema
 */
const html = merge([xml, xlink, xmlns, aria, html$1], 'html');
const svg = merge([xml, xlink, xmlns, aria, svg$1], 'svg');/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 *
 * @callback AllowElement
 * @param {Element} element
 * @param {number} index
 * @param {Element|Root} parent
 * @returns {boolean|undefined}
 *
 * @typedef Options
 * @property {Array<string>} [allowedElements]
 * @property {Array<string>} [disallowedElements=[]]
 * @property {AllowElement} [allowElement]
 * @property {boolean} [unwrapDisallowed=false]
 */

/**
 * @type {import('unified').Plugin<[Options], Root>}
 */
function rehypeFilter(options) {
  if (options.allowedElements && options.disallowedElements) {
    throw new TypeError(
      'Only one of `allowedElements` and `disallowedElements` should be defined'
    )
  }

  if (
    options.allowedElements ||
    options.disallowedElements ||
    options.allowElement
  ) {
    return (tree) => {
      visit$1(tree, 'element', (node, index, parent_) => {
        const parent = /** @type {Element|Root} */ (parent_);
        /** @type {boolean|undefined} */
        let remove;

        if (options.allowedElements) {
          remove = !options.allowedElements.includes(node.tagName);
        } else if (options.disallowedElements) {
          remove = options.disallowedElements.includes(node.tagName);
        }

        if (!remove && options.allowElement && typeof index === 'number') {
          remove = !options.allowElement(node, index, parent);
        }

        if (remove && typeof index === 'number') {
          if (options.unwrapDisallowed && node.children) {
            parent.children.splice(index, 1, ...node.children);
          } else {
            parent.children.splice(index, 1);
          }

          return index
        }

        return undefined
      });
    }
  }
}var reactIs = {exports: {}};var reactIs_production_min = {};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;
if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element");c=x("react.portal");d=x("react.fragment");e=x("react.strict_mode");f=x("react.profiler");g=x("react.provider");h=x("react.context");k=x("react.forward_ref");l=x("react.suspense");m=x("react.suspense_list");n=x("react.memo");p=x("react.lazy");q=x("react.block");r=x("react.server.block");u=x("react.fundamental");v=x("react.debug_trace_mode");w=x("react.legacy_hidden");}
function y(a){if("object"===typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type,a){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof,a){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}var z=g,A=b,B=k,C=d,D=p,E=n,F=c,G=f,H=e,I=l;reactIs_production_min.ContextConsumer=h;reactIs_production_min.ContextProvider=z;reactIs_production_min.Element=A;reactIs_production_min.ForwardRef=B;reactIs_production_min.Fragment=C;reactIs_production_min.Lazy=D;reactIs_production_min.Memo=E;reactIs_production_min.Portal=F;reactIs_production_min.Profiler=G;reactIs_production_min.StrictMode=H;
reactIs_production_min.Suspense=I;reactIs_production_min.isAsyncMode=function(){return !1};reactIs_production_min.isConcurrentMode=function(){return !1};reactIs_production_min.isContextConsumer=function(a){return y(a)===h};reactIs_production_min.isContextProvider=function(a){return y(a)===g};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b};reactIs_production_min.isForwardRef=function(a){return y(a)===k};reactIs_production_min.isFragment=function(a){return y(a)===d};reactIs_production_min.isLazy=function(a){return y(a)===p};reactIs_production_min.isMemo=function(a){return y(a)===n};
reactIs_production_min.isPortal=function(a){return y(a)===c};reactIs_production_min.isProfiler=function(a){return y(a)===f};reactIs_production_min.isStrictMode=function(a){return y(a)===e};reactIs_production_min.isSuspense=function(a){return y(a)===l};reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d||a===f||a===v||a===e||a===l||a===m||a===w||"object"===typeof a&&null!==a&&(a.$$typeof===p||a.$$typeof===n||a.$$typeof===g||a.$$typeof===h||a.$$typeof===k||a.$$typeof===u||a.$$typeof===q||a[0]===r)?!0:!1};
reactIs_production_min.typeOf=y;var reactIs_development = {};/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== "production") {
  (function() {

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  symbolFor('react.scope');
  symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}if (process.env.NODE_ENV === 'production') {
  reactIs.exports = reactIs_production_min;
} else {
  reactIs.exports = reactIs_development;
}

var ReactIs = reactIs.exports;/**
 * @param {unknown} thing
 * @returns {boolean}
 */
function whitespace(thing) {
  /** @type {string} */
  var value =
    // @ts-ignore looks like a node.
    thing && typeof thing === 'object' && thing.type === 'text'
      ? // @ts-ignore looks like a text.
        thing.value || ''
      : thing;

  // HTML whitespace expression.
  // See <https://html.spec.whatwg.org/#space-character>.
  return typeof value === 'string' && value.replace(/[ \t\n\f\r]/g, '') === ''
}/**
 * Parse space separated tokens to an array of strings.
 *
 * @param {string} value Space separated tokens
 * @returns {Array.<string>} Tokens
 */

/**
 * Serialize an array of strings as space separated tokens.
 *
 * @param {Array.<string|number>} values Tokens
 * @returns {string} Space separated tokens
 */
function stringify$1(values) {
  return values.join(' ').trim()
}/**
 * @typedef {Object} StringifyOptions
 * @property {boolean} [padLeft=true] Whether to pad a space before a token (`boolean`, default: `true`).
 * @property {boolean} [padRight=false] Whether to pad a space after a token (`boolean`, default: `false`).
 */

/**
 * Serialize an array of strings to comma separated tokens.
 *
 * @param {Array.<string|number>} values
 * @param {StringifyOptions} [options]
 * @returns {string}
 */
function stringify(values, options) {
  var settings = options || {};

  // Ensure the last empty entry is seen.
  if (values[values.length - 1] === '') {
    values = values.concat('');
  }

  return values
    .join(
      (settings.padRight ? ' ' : '') +
        ',' +
        (settings.padLeft === false ? '' : ' ')
    )
    .trim()
}// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;

// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;

// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';

// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';

/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
var inlineStyleParser = function(style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];

  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */
  function position() {
    var start = { line: lineno, column: column };
    return function(node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string.
   */
  Position.prototype.content = style;

  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */
  function error(msg) {
    var err = new Error(
      options.source + ':' + lineno + ':' + column + ': ' + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) ; else {
      throw err;
    }
  }

  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(WHITESPACE_REGEX);
  }

  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */
  function comments(rules) {
    var c;
    rules = rules || [];
    while ((c = comment())) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

    var i = 2;
    while (
      EMPTY_STRING != style.charAt(i) &&
      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
    ) {
      ++i;
    }
    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;

    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }

  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */
  function declaration() {
    var pos = position();

    // prop
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();

    // :
    if (!match(COLON_REGEX)) return error("property missing ':'");

    // val
    var val = match(VALUE_REGEX);

    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val
        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
        : EMPTY_STRING
    });

    // ;
    match(SEMICOLON_REGEX);

    return ret;
  }

  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */
  function declarations() {
    var decls = [];

    comments(decls);

    // declarations
    var decl;
    while ((decl = declaration())) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};

/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}var parse = inlineStyleParser;

/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */
function StyleToObject(style, iterator) {
  var output = null;
  if (!style || typeof style !== 'string') {
    return output;
  }

  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === 'function';
  var property;
  var value;

  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;

    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }

  return output;
}

var styleToObject = StyleToObject;/**
 * @template T
 * @typedef {import('react').ComponentType<T>} ComponentType<T>
 */

const own$1 = {}.hasOwnProperty;

// The table-related elements that must not contain whitespace text according
// to React.
const tableElements = new Set(['table', 'thead', 'tbody', 'tfoot', 'tr']);

/**
 * @param {Context} context
 * @param {Element|Root} node
 */
function childrenToReact(context, node) {
  /** @type {Array<ReactNode>} */
  const children = [];
  let childIndex = -1;
  /** @type {Comment|Doctype|Element|Raw|Text} */
  let child;

  while (++childIndex < node.children.length) {
    child = node.children[childIndex];

    if (child.type === 'element') {
      children.push(toReact(context, child, childIndex, node));
    } else if (child.type === 'text') {
      // Currently, a warning is triggered by react for *any* white space in
      // tables.
      // So we drop it.
      // See: <https://github.com/facebook/react/pull/7081>.
      // See: <https://github.com/facebook/react/pull/7515>.
      // See: <https://github.com/remarkjs/remark-react/issues/64>.
      // See: <https://github.com/remarkjs/react-markdown/issues/576>.
      if (
        node.type !== 'element' ||
        !tableElements.has(node.tagName) ||
        !whitespace(child)
      ) {
        children.push(child.value);
      }
    } else if (child.type === 'raw' && !context.options.skipHtml) {
      // Default behavior is to show (encoded) HTML.
      children.push(child.value);
    }
  }

  return children
}

/**
 * @param {Context} context
 * @param {Element} node
 * @param {number} index
 * @param {Element|Root} parent
 */
function toReact(context, node, index, parent) {
  const options = context.options;
  const parentSchema = context.schema;
  /** @type {ReactMarkdownNames} */
  // @ts-expect-error assume a known HTML/SVG element.
  const name = node.tagName;
  /** @type {Record<string, unknown>} */
  const properties = {};
  let schema = parentSchema;
  /** @type {string} */
  let property;

  if (parentSchema.space === 'html' && name === 'svg') {
    schema = svg;
    context.schema = schema;
  }

  if (node.properties) {
    for (property in node.properties) {
      if (own$1.call(node.properties, property)) {
        addProperty(properties, property, node.properties[property], context);
      }
    }
  }

  if (name === 'ol' || name === 'ul') {
    context.listDepth++;
  }

  const children = childrenToReact(context, node);

  if (name === 'ol' || name === 'ul') {
    context.listDepth--;
  }

  // Restore parent schema.
  context.schema = parentSchema;

  // Nodes created by plugins do not have positional info, in which case we use
  // an object that matches the position interface.
  const position = node.position || {
    start: {line: null, column: null, offset: null},
    end: {line: null, column: null, offset: null}
  };
  const component =
    options.components && own$1.call(options.components, name)
      ? options.components[name]
      : name;
  const basic = typeof component === 'string' || component === React$1.Fragment;

  if (!ReactIs.isValidElementType(component)) {
    throw new TypeError(
      `Component for name \`${name}\` not defined or is not renderable`
    )
  }

  properties.key = [
    name,
    position.start.line,
    position.start.column,
    index
  ].join('-');

  if (name === 'a' && options.linkTarget) {
    properties.target =
      typeof options.linkTarget === 'function'
        ? options.linkTarget(
            String(properties.href || ''),
            node.children,
            typeof properties.title === 'string' ? properties.title : null
          )
        : options.linkTarget;
  }

  if (name === 'a' && options.transformLinkUri) {
    properties.href = options.transformLinkUri(
      String(properties.href || ''),
      node.children,
      typeof properties.title === 'string' ? properties.title : null
    );
  }

  if (
    !basic &&
    name === 'code' &&
    parent.type === 'element' &&
    parent.tagName !== 'pre'
  ) {
    properties.inline = true;
  }

  if (
    !basic &&
    (name === 'h1' ||
      name === 'h2' ||
      name === 'h3' ||
      name === 'h4' ||
      name === 'h5' ||
      name === 'h6')
  ) {
    properties.level = Number.parseInt(name.charAt(1), 10);
  }

  if (name === 'img' && options.transformImageUri) {
    properties.src = options.transformImageUri(
      String(properties.src || ''),
      String(properties.alt || ''),
      typeof properties.title === 'string' ? properties.title : null
    );
  }

  if (!basic && name === 'li' && parent.type === 'element') {
    const input = getInputElement(node);
    properties.checked =
      input && input.properties ? Boolean(input.properties.checked) : null;
    properties.index = getElementsBeforeCount(parent, node);
    properties.ordered = parent.tagName === 'ol';
  }

  if (!basic && (name === 'ol' || name === 'ul')) {
    properties.ordered = name === 'ol';
    properties.depth = context.listDepth;
  }

  if (name === 'td' || name === 'th') {
    if (properties.align) {
      if (!properties.style) properties.style = {};
      // @ts-expect-error assume `style` is an object
      properties.style.textAlign = properties.align;
      delete properties.align;
    }

    if (!basic) {
      properties.isHeader = name === 'th';
    }
  }

  if (!basic && name === 'tr' && parent.type === 'element') {
    properties.isHeader = Boolean(parent.tagName === 'thead');
  }

  // If `sourcePos` is given, pass source information (line/column info from markdown source).
  if (options.sourcePos) {
    properties['data-sourcepos'] = flattenPosition(position);
  }

  if (!basic && options.rawSourcePos) {
    properties.sourcePosition = node.position;
  }

  // If `includeElementIndex` is given, pass node index info to components.
  if (!basic && options.includeElementIndex) {
    properties.index = getElementsBeforeCount(parent, node);
    properties.siblingCount = getElementsBeforeCount(parent);
  }

  if (!basic) {
    properties.node = node;
  }

  // Ensure no React warnings are emitted for void elements w/ children.
  return children.length > 0
    ? React$1.createElement(component, properties, children)
    : React$1.createElement(component, properties)
}

/**
 * @param {Element|Root} node
 * @returns {Element?}
 */
function getInputElement(node) {
  let index = -1;

  while (++index < node.children.length) {
    const child = node.children[index];

    if (child.type === 'element' && child.tagName === 'input') {
      return child
    }
  }

  return null
}

/**
 * @param {Element|Root} parent
 * @param {Element} [node]
 * @returns {number}
 */
function getElementsBeforeCount(parent, node) {
  let index = -1;
  let count = 0;

  while (++index < parent.children.length) {
    if (parent.children[index] === node) break
    if (parent.children[index].type === 'element') count++;
  }

  return count
}

/**
 * @param {Record<string, unknown>} props
 * @param {string} prop
 * @param {unknown} value
 * @param {Context} ctx
 */
function addProperty(props, prop, value, ctx) {
  const info = find(ctx.schema, prop);
  let result = value;

  // Ignore nullish and `NaN` values.
  // eslint-disable-next-line no-self-compare
  if (result === null || result === undefined || result !== result) {
    return
  }

  // Accept `array`.
  // Most props are space-separated.
  if (Array.isArray(result)) {
    result = info.commaSeparated ? stringify(result) : stringify$1(result);
  }

  if (info.property === 'style' && typeof result === 'string') {
    result = parseStyle(result);
  }

  if (info.space && info.property) {
    props[
      own$1.call(hastToReact, info.property)
        ? hastToReact[info.property]
        : info.property
    ] = result;
  } else if (info.attribute) {
    props[info.attribute] = result;
  }
}

/**
 * @param {string} value
 * @returns {Record<string, string>}
 */
function parseStyle(value) {
  /** @type {Record<string, string>} */
  const result = {};

  try {
    styleToObject(value, iterator);
  } catch {
    // Silent.
  }

  return result

  /**
   * @param {string} name
   * @param {string} v
   */
  function iterator(name, v) {
    const k = name.slice(0, 4) === '-ms-' ? `ms-${name.slice(4)}` : name;
    result[k.replace(/-([a-z])/g, styleReplacer)] = v;
  }
}

/**
 * @param {unknown} _
 * @param {string} $1
 */
function styleReplacer(_, $1) {
  return $1.toUpperCase()
}

/**
 * @param {Position|{start: {line: null, column: null, offset: null}, end: {line: null, column: null, offset: null}}} pos
 * @returns {string}
 */
function flattenPosition(pos) {
  return [
    pos.start.line,
    ':',
    pos.start.column,
    '-',
    pos.end.line,
    ':',
    pos.end.column
  ]
    .map((d) => String(d))
    .join('')
}/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('react').ReactElement<{}>} ReactElement
 * @typedef {import('unified').PluggableList} PluggableList
 * @typedef {import('hast').Root} Root
 * @typedef {import('./rehype-filter.js').Options} FilterOptions
 * @typedef {import('./ast-to-react.js').Options} TransformOptions
 *
 * @typedef CoreOptions
 * @property {string} children
 *
 * @typedef PluginOptions
 * @property {PluggableList} [plugins=[]] **deprecated**: use `remarkPlugins` instead
 * @property {PluggableList} [remarkPlugins=[]]
 * @property {PluggableList} [rehypePlugins=[]]
 *
 * @typedef LayoutOptions
 * @property {string} [className]
 *
 * @typedef {CoreOptions & PluginOptions & LayoutOptions & FilterOptions & TransformOptions} ReactMarkdownOptions
 *
 * @typedef Deprecation
 * @property {string} id
 * @property {string} [to]
 */

const own = {}.hasOwnProperty;
const changelog =
  'https://github.com/remarkjs/react-markdown/blob/main/changelog.md';

/** @type {Record<string, Deprecation>} */
const deprecated = {
  renderers: {to: 'components', id: 'change-renderers-to-components'},
  astPlugins: {id: 'remove-buggy-html-in-markdown-parser'},
  allowDangerousHtml: {id: 'remove-buggy-html-in-markdown-parser'},
  escapeHtml: {id: 'remove-buggy-html-in-markdown-parser'},
  source: {to: 'children', id: 'change-source-to-children'},
  allowNode: {
    to: 'allowElement',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes'
  },
  allowedTypes: {
    to: 'allowedElements',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes'
  },
  disallowedTypes: {
    to: 'disallowedElements',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes'
  },
  includeNodeIndex: {
    to: 'includeElementIndex',
    id: 'change-includenodeindex-to-includeelementindex'
  }
};

/**
 * React component to render markdown.
 *
 * @param {ReactMarkdownOptions} options
 * @returns {ReactElement}
 */
function ReactMarkdown(options) {
  for (const key in deprecated) {
    if (own.call(deprecated, key) && own.call(options, key)) {
      const deprecation = deprecated[key];
      console.warn(
        `[react-markdown] Warning: please ${
          deprecation.to ? `use \`${deprecation.to}\` instead of` : 'remove'
        } \`${key}\` (see <${changelog}#${deprecation.id}> for more info)`
      );
      delete deprecated[key];
    }
  }

  const processor = unified()
    .use(remarkParse)
    // TODO: deprecate `plugins` in v8.0.0.
    .use(options.remarkPlugins || options.plugins || [])
    .use(remarkRehype$1, {allowDangerousHtml: true})
    .use(options.rehypePlugins || [])
    .use(rehypeFilter, options);

  const file = new VFile();

  if (typeof options.children === 'string') {
    file.value = options.children;
  } else if (options.children !== undefined && options.children !== null) {
    console.warn(
      `[react-markdown] Warning: please pass a string as \`children\` (not: \`${options.children}\`)`
    );
  }

  const hastNode = processor.runSync(processor.parse(file), file);

  if (hastNode.type !== 'root') {
    throw new TypeError('Expected a `root` node')
  }

  /** @type {ReactElement} */
  let result = React$1.createElement(
    React$1.Fragment,
    {},
    childrenToReact({options, schema: html, listDepth: 0}, hastNode)
  );

  if (options.className) {
    result = React$1.createElement('div', {className: options.className}, result);
  }

  return result
}

ReactMarkdown.defaultProps = {transformLinkUri: uriTransformer};

ReactMarkdown.propTypes = {
  // Core options:
  children: PropTypes.string,
  // Layout options:
  className: PropTypes.string,
  // Filter options:
  allowElement: PropTypes.func,
  allowedElements: PropTypes.arrayOf(PropTypes.string),
  disallowedElements: PropTypes.arrayOf(PropTypes.string),
  unwrapDisallowed: PropTypes.bool,
  // Plugin options:
  remarkPlugins: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func]))
    ])
  ),
  rehypePlugins: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func]))
    ])
  ),
  // Transform options:
  sourcePos: PropTypes.bool,
  rawSourcePos: PropTypes.bool,
  skipHtml: PropTypes.bool,
  includeElementIndex: PropTypes.bool,
  transformLinkUri: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  linkTarget: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transformImageUri: PropTypes.func,
  components: PropTypes.object
};var _excluded$2 = ["item", "close", "update"];

var AppPluginChangelogModal = function AppPluginChangelogModal(props) {
  var item = props.item,
      close = props.close,
      update = props.update,
      attributes = _objectWithoutProperties(props, _excluded$2);

  console.log(item);
  return /*#__PURE__*/React$1.createElement("div", _extends({
    className: "fixed z-50 inset-0 overflow-y-auto"
  }, attributes), /*#__PURE__*/React$1.createElement("div", {
    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "fixed inset-0 transition-opacity",
    "aria-hidden": "true"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "absolute inset-0 bg-gray-500 opacity-75"
  })), /*#__PURE__*/React$1.createElement("span", {
    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
    "aria-hidden": "true"
  }, "\u200B"), /*#__PURE__*/React$1.createElement("div", {
    className: "inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "modal-headline"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "bg-gray-50 dark:bg-gray-800 p-4"
  }, /*#__PURE__*/React$1.createElement("h3", {
    className: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100",
    id: "modal-headline"
  }, item.name, " - ", item.release.version)), /*#__PURE__*/React$1.createElement("div", {
    className: "bg-white dark:bg-gray-900 p-4 text-sm text-gray-500 dark:text-gray-300"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "prose-sm max-w-none"
  }, /*#__PURE__*/React$1.createElement(ReactMarkdown, {
    children: item.release.changelog
  }))), /*#__PURE__*/React$1.createElement("div", {
    className: "bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
  }, /*#__PURE__*/React$1.createElement("button", {
    type: "button",
    className: "mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm bg-orange-300 dark:bg-orange-700 hover:bg-orange-400 dark:hover:bg-orange-600 font-bold py-2 px-4 inline-flex justify-center rounded-md",
    "data-slug": item.slug,
    onClick: update
  }, /*#__PURE__*/React$1.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 mr-2",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
  })), "Install Update"), /*#__PURE__*/React$1.createElement("button", {
    type: "button",
    className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-700 shadow-sm px-4 py-2 bg-white dark:bg-gray-500 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
    onClick: close
  }, "Close")))));
};

AppPluginChangelogModal.propTypes = {
  item: PropTypes.object,
  close: PropTypes.func,
  install: PropTypes.func
};var _excluded$1 = ["app", "setChangelog"];

var AppActionButtons = function AppActionButtons(_ref) {
  var app = _ref.app,
      setChangelog = _ref.setChangelog;
      _objectWithoutProperties(_ref, _excluded$1);

  var _useContext = useContext(WebAppsContext),
      apps = _useContext.apps; // Installed, has update


  if (app.installed && app.hasUpdate) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("button", {
      className: "w-full bg-orange-300 dark:bg-orange-700 hover:bg-orange-400 dark:hover:bg-orange-600 font-bold py-2 px-4 inline-flex items-center rounded-none",
      "data-slug": app.slug,
      onClick: apps.update
    }, /*#__PURE__*/React$1.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5 mr-2",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /*#__PURE__*/React$1.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
    })), "Install Update"), /*#__PURE__*/React$1.createElement("button", {
      className: "w-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 font-bold py-2 px-4 inline-flex items-center rounded-none",
      "data-slug": app.slug,
      onClick: function onClick() {
        return setChangelog(true);
      }
    }, /*#__PURE__*/React$1.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5 mr-2",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /*#__PURE__*/React$1.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })), "What's Changed?"));
  } // Installed, not active


  if (app.installed && !app.active) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("button", {
      className: "w-full bg-blue-300 dark:bg-blue-700 hover:bg-blue-400 dark:hover:bg-blue-600 font-bold py-2 px-4 inline-flex items-center rounded-none",
      "data-slug": app.slug,
      onClick: apps.activate
    }, /*#__PURE__*/React$1.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5 mr-2",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /*#__PURE__*/React$1.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    })), "Activate"), /*#__PURE__*/React$1.createElement("button", {
      className: "w-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 font-bold py-2 px-4 inline-flex items-center rounded-none",
      "data-slug": app.slug,
      onClick: apps.uninstall
    }, /*#__PURE__*/React$1.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5 mr-2",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /*#__PURE__*/React$1.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })), "Uninstall"));
  } // Not downloaded, not installed


  if (!app.downloaded && !app.installed) {
    return /*#__PURE__*/React$1.createElement("button", {
      className: "w-full bg-green-300 dark:bg-green-700 hover:bg-green-400 dark:hover:bg-green-600 font-bold py-2 px-4 inline-flex items-center rounded-none",
      "data-slug": app.slug,
      onClick: apps.download
    }, /*#__PURE__*/React$1.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5 mr-2",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /*#__PURE__*/React$1.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
    })), "Install");
  } // Downloaded, but not installed


  if (app.downloaded && !app.installed) {
    return /*#__PURE__*/React$1.createElement("button", {
      className: "w-full bg-green-300 dark:bg-green-700 hover:bg-green-400 dark:hover:bg-green-600 font-bold py-2 px-4 inline-flex items-center rounded-none",
      "data-slug": app.slug,
      onClick: apps.install
    }, /*#__PURE__*/React$1.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5 mr-2",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /*#__PURE__*/React$1.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
    })), "Install");
  } // Installed, Active, No Updates


  if (app.installed && app.active && !app.hasUpdate) {
    return /*#__PURE__*/React$1.createElement("button", {
      className: "w-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 font-bold py-2 px-4 inline-flex items-center rounded-none",
      "data-slug": app.slug,
      onClick: apps.deactivate
    }, /*#__PURE__*/React$1.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5 mr-2",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /*#__PURE__*/React$1.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
    })), "Deactivate");
  }
};var AppCard = function AppCard(props) {
  var app = props.app,
      showActions = props.showActions;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      darkMode = _useState2[0],
      setDarkMode = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      changelog = _useState4[0],
      setChangelog = _useState4[1];

  var _useContext = useContext(WebAppsContext),
      apps = _useContext.apps,
      UI = _useContext.UI;

  useEffect(function () {
    if (UI.dark_mode === 'user' && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage['WA_DarkMode'] !== 'light') {
      setDarkMode(true);
    } else if (UI.dark_mode === 'dark') {
      setDarkMode(true);
    }
  });
  var background_style = {
    backgroundColor: darkMode ? app.background_color || '#4B5563' : app.background_color || '#F3F4F6'
  };
  var icon_style = {
    color: darkMode ? app.icon_color || '#F3F4F6' : app.icon_color || '#000000'
  };
  return /*#__PURE__*/React$1.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "relative pb-28 overflow-hidden",
    style: background_style
  }, /*#__PURE__*/React$1.createElement(Icon, {
    icon: app.icon,
    className: "absolute inset-0 h-full w-full flex justify center",
    style: icon_style
  }), /*#__PURE__*/React$1.createElement("span", {
    className: "inline-block m-1 px-2 py-1 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg tracking-wide text-xs"
  }, "v", app.version || app.release.version)), /*#__PURE__*/React$1.createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/React$1.createElement("h2", {
    className: "mb-2 font-bold"
  }, app.name), /*#__PURE__*/React$1.createElement("p", {
    className: "text-xs"
  }, app.description)), /*#__PURE__*/React$1.createElement("div", {
    className: "p-4 border-t border-b dark:border-gray-600 text-xs text-gray-700 dark:text-gray-300"
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "flex items-center"
  }, /*#__PURE__*/React$1.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 pt-px mr-2",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  })), app.author), app.repository !== undefined ? /*#__PURE__*/React$1.createElement("a", {
    href: app.repository,
    target: "_blank",
    className: "flex items-center mt-2"
  }, /*#__PURE__*/React$1.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-4 w-4 pt-px ml-0.5 mr-2",
    fill: "currentColor",
    viewBox: "0 0 256 250",
    preserveAspectRatio: "xMidYMid"
  }, /*#__PURE__*/React$1.createElement("path", {
    d: "M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"
  })), /*#__PURE__*/React$1.createElement("span", {
    className: "ml-0.5"
  }, "View on GitHub")) : null), showActions ? /*#__PURE__*/React$1.createElement(AppActionButtons, {
    app: app,
    setChangelog: setChangelog
  }) : null, changelog ? /*#__PURE__*/React$1.createElement(AppPluginChangelogModal, {
    item: app,
    close: function close() {
      return setChangelog(false);
    },
    update: apps.update
  }) : null));
};var _excluded = ["plugin", "setChangelog"];

var PluginActionButtons = function PluginActionButtons(_ref) {
  var plugin = _ref.plugin,
      setChangelog = _ref.setChangelog;
      _objectWithoutProperties(_ref, _excluded);

  var _useContext = useContext(WebAppsContext),
      plugins = _useContext.plugins;

  if (plugin.installed && plugin.hasUpdate) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("button", {
      className: "w-full bg-orange-300 dark:bg-orange-700 hover:bg-orange-400 dark:hover:bg-orange-600 font-bold py-2 px-4 inline-flex items-center rounded-none",
      "data-slug": plugin.slug,
      onClick: plugins.update
    }, /*#__PURE__*/React$1.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5 mr-2",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /*#__PURE__*/React$1.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
    })), "Install Update"), /*#__PURE__*/React$1.createElement("button", {
      className: "w-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 font-bold py-2 px-4 inline-flex items-center rounded-none",
      "data-slug": plugin.slug,
      onClick: function onClick() {
        return setChangelog(true);
      }
    }, /*#__PURE__*/React$1.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5 mr-2",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /*#__PURE__*/React$1.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })), "What's Changed?"));
  }

  if (plugin.downloaded && !plugin.installed || plugin.installed && !plugin.state) {
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("button", {
      className: "w-full bg-blue-300 dark:bg-blue-700 hover:bg-blue-400 dark:hover:bg-blue-600 font-bold py-2 px-4 inline-flex items-center rounded-none",
      "data-slug": plugin.slug,
      onClick: plugins.toggle
    }, /*#__PURE__*/React$1.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5 mr-2",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /*#__PURE__*/React$1.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    })), "Activate"), /*#__PURE__*/React$1.createElement("button", {
      className: "w-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 font-bold py-2 px-4 inline-flex items-center rounded-none",
      "data-slug": plugin.slug,
      onClick: plugins.uninstall
    }, /*#__PURE__*/React$1.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5 mr-2",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /*#__PURE__*/React$1.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })), "Uninstall"));
  }

  if (!plugin.downloaded && !plugin.installed) {
    return /*#__PURE__*/React$1.createElement("button", {
      className: "w-full bg-green-300 dark:bg-green-700 hover:bg-green-400 dark:hover:bg-green-600 font-bold py-2 px-4 inline-flex items-center rounded-none",
      "data-slug": plugin.slug,
      onClick: plugins.download
    }, /*#__PURE__*/React$1.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5 mr-2",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /*#__PURE__*/React$1.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
    })), "Install");
  }

  if (plugin.installed && !plugin.hasUpdate) {
    return /*#__PURE__*/React$1.createElement("button", {
      className: "w-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 font-bold py-2 px-4 inline-flex items-center rounded-none",
      "data-slug": plugin.slug,
      onClick: plugins.toggle
    }, /*#__PURE__*/React$1.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5 mr-2",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /*#__PURE__*/React$1.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
    })), "Deactivate");
  }
};var PluginCard = function PluginCard(props) {
  var plugin = props.plugin,
      showActions = props.showActions;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      darkMode = _useState2[0],
      setDarkMode = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      changelog = _useState4[0],
      setChangelog = _useState4[1];

  var _useContext = useContext(WebAppsContext),
      plugins = _useContext.plugins,
      UI = _useContext.UI;

  useEffect(function () {
    if (UI.dark_mode === 'user' && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage['WA_DarkMode'] !== 'light') {
      setDarkMode(true);
    } else if (UI.dark_mode === 'dark') {
      setDarkMode(true);
    }
  });
  var background_style = {
    backgroundColor: darkMode ? plugin.background_color || '#4B5563' : plugin.background_color || '#F3F4F6'
  };
  var icon_style = {
    color: darkMode ? plugin.icon_color || '#F3F4F6' : plugin.icon_color || '#000000'
  };
  return /*#__PURE__*/React$1.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "relative pb-28 overflow-hidden",
    style: background_style
  }, /*#__PURE__*/React$1.createElement(Icon, {
    icon: plugin.icon,
    className: "absolute inset-0 h-full w-full flex justify center",
    style: icon_style
  }), /*#__PURE__*/React$1.createElement("span", {
    className: "inline-block m-1 px-2 py-1 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg tracking-wide text-xs"
  }, "v", plugin.version || plugin.release.version)), /*#__PURE__*/React$1.createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/React$1.createElement("h2", {
    className: "mb-2 font-bold"
  }, plugin.name), /*#__PURE__*/React$1.createElement("p", {
    className: "text-xs"
  }, plugin.description)), /*#__PURE__*/React$1.createElement("div", {
    className: "p-4 border-t border-b dark:border-gray-600 text-xs text-gray-700 dark:text-gray-300"
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "flex items-center"
  }, /*#__PURE__*/React$1.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 pt-px mr-2",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  })), plugin.author), plugin.repository !== undefined ? /*#__PURE__*/React$1.createElement("a", {
    href: plugin.repository,
    target: "_blank",
    className: "flex items-center mt-2"
  }, /*#__PURE__*/React$1.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-4 w-4 pt-px ml-0.5 mr-2",
    fill: "currentColor",
    viewBox: "0 0 256 250",
    preserveAspectRatio: "xMidYMid"
  }, /*#__PURE__*/React$1.createElement("path", {
    d: "M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"
  })), /*#__PURE__*/React$1.createElement("span", {
    className: "ml-0.5"
  }, "View on GitHub")) : null), showActions ? /*#__PURE__*/React$1.createElement(PluginActionButtons, {
    plugin: plugin,
    setChangelog: setChangelog
  }) : null, changelog ? /*#__PURE__*/React$1.createElement(AppPluginChangelogModal, {
    item: plugin,
    close: function close() {
      return setChangelog(false);
    },
    update: plugins.update
  }) : null));
};function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AppError = /*#__PURE__*/function (_Component) {
  _inherits$1(AppError, _Component);

  var _super = _createSuper(AppError);

  function AppError(props) {
    var _this;

    _classCallCheck$1(this, AppError);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false,
      info: '',
      error: ''
    };

    _this.props.history.listen(function (location, action) {
      if (_this.state.hasError) {
        _this.setState({
          hasError: false
        });
      }
    });

    return _this;
  }

  _createClass$1(AppError, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        info: info,
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/React$1.createElement("div", {
          className: "text-gray-700 bg-gray-200 dark:bg-gray-900 dark:text-white h-screen w-screen relative"
        }, /*#__PURE__*/React$1.createElement("div", {
          className: "h-full w-full flex flex-wrap justify-center content-center items-center absolute z-0"
        }, /*#__PURE__*/React$1.createElement("svg", {
          className: "w-full px-6 lg:px-64 fill-current text-gray-300 dark:text-gray-800",
          viewBox: "0 0 445 202",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React$1.createElement("path", {
          d: "M38.804 144.71c1.527 8.356 4.447 14.803 8.76 19.34 4.312 4.537 10.601 6.805 18.867 6.805 9.523 0 16.778-3.346 21.764-10.04 4.987-6.693 7.48-15.116 7.48-25.268 0-9.973-2.336-18.396-7.008-25.269-4.672-6.873-11.95-10.31-21.832-10.31-4.672 0-8.715.585-12.129 1.753-6.02 2.156-10.557 6.154-13.611 11.994l-34.5-1.617L20.34 4.15h107.678v32.614H48.103l-7.008 42.72c5.93-3.863 10.556-6.423 13.88-7.681 5.57-2.067 12.354-3.1 20.35-3.1 16.172 0 30.277 5.436 42.317 16.307 12.039 10.87 18.058 26.683 18.058 47.437 0 18.059-5.795 34.186-17.385 48.381-11.59 14.196-28.93 21.293-52.02 21.293-18.597 0-33.87-4.986-45.82-14.959C8.527 177.19 1.879 163.04.53 144.711h38.274zm155.789-43.528c0 22.46 1.842 39.643 5.525 51.547 3.684 11.905 11.23 17.857 22.64 17.857 11.411 0 18.89-5.952 22.44-17.857 3.548-11.904 5.323-29.086 5.323-51.547 0-23.54-1.775-40.97-5.324-52.29s-11.028-16.98-22.438-16.98c-11.41 0-18.957 5.66-22.64 16.98-3.684 11.32-5.526 28.75-5.526 52.29zM222.759.242c24.887 0 42.339 8.76 52.356 26.28 10.018 17.52 15.027 42.406 15.027 74.66s-5.01 57.095-15.027 74.525c-10.017 17.43-27.47 26.145-52.356 26.145-24.887 0-42.339-8.715-52.357-26.145-10.017-17.43-15.026-42.271-15.026-74.525 0-32.254 5.009-57.14 15.026-74.66C180.42 9.001 197.872.241 222.76.241zm125.332 100.94c0 22.46 1.842 39.643 5.525 51.547 3.684 11.905 11.23 17.857 22.64 17.857 11.411 0 18.89-5.952 22.44-17.857 3.548-11.904 5.323-29.086 5.323-51.547 0-23.54-1.775-40.97-5.324-52.29s-11.028-16.98-22.438-16.98c-11.41 0-18.957 5.66-22.64 16.98-3.684 11.32-5.526 28.75-5.526 52.29zM376.257.242c24.887 0 42.339 8.76 52.356 26.28 10.018 17.52 15.027 42.406 15.027 74.66s-5.01 57.095-15.027 74.525c-10.017 17.43-27.47 26.145-52.356 26.145-24.887 0-42.339-8.715-52.357-26.145-10.017-17.43-15.026-42.271-15.026-74.525 0-32.254 5.009-57.14 15.026-74.66C333.918 9.001 351.37.241 376.257.241z",
          fillRule: "nonzero"
        }))), /*#__PURE__*/React$1.createElement("div", {
          className: "h-full w-full flex flex-wrap justify-center content-end md:content-center items-end md:items-center relative z-10"
        }, /*#__PURE__*/React$1.createElement("div", {
          className: "p-6 text-center "
        }, /*#__PURE__*/React$1.createElement("h2", {
          className: "uppercase text-xl lg:text-5xl font-black"
        }, "Sorry, something went wrong."), /*#__PURE__*/React$1.createElement("p", {
          className: "mt-3 text-sm lg:text-base text-gray-900 dark:text-gray-300"
        }, this.state.error.toString()), /*#__PURE__*/React$1.createElement(Link$1, {
          to: "/",
          className: "inline-block mr-3 mt-6 px-4 py-2 border border-".concat(this.props.theme, "-600 dark:border-").concat(this.props.theme, "-500 bg-").concat(this.props.theme, "-600 dark:bg-").concat(this.props.theme, "-500 text-white dark:text-white hover:bg-").concat(this.props.theme, "-400 dark:hover:bg-").concat(this.props.theme, "-700 hover:border-").concat(this.props.theme, "-400 dark:hover:border-").concat(this.props.theme, "-700")
        }, "Back To Homepage"), /*#__PURE__*/React$1.createElement("button", {
          onClick: function onClick() {
            return window.location.reload();
          },
          className: "ml-3 inline-block mt-6 px-4 py-2 border border-".concat(this.props.theme, "-600 dark:border-").concat(this.props.theme, "-500 text-").concat(this.props.theme, "-600 dark:text-").concat(this.props.theme, "-500 hover:bg-").concat(this.props.theme, "-600 dark:hover:bg-").concat(this.props.theme, "-600 hover:text-white dark:hover:text-white")
        }, "Reload Page"))));
      }

      return this.props.children;
    }
  }]);

  return AppError;
}(Component);

AppError.propTypes = {
  theme: PropTypes.string
};
AppError.defaultProps = {
  theme: 'indigo'
};
var AppError$1 = withRouter(AppError);var WebAppsDocsContext = /*#__PURE__*/React$1.createContext({});
var colors = [{
  "class": 'indigo',
  name: 'Indigo'
}, {
  "class": 'fuchsia',
  name: 'Fuchsia'
}, {
  "class": 'light-blue',
  name: 'Blue'
}, {
  "class": 'red',
  name: 'Red'
}, {
  "class": 'orange',
  name: 'Orange'
}, {
  "class": 'yellow',
  name: 'Yellow'
}, {
  "class": 'lime',
  name: 'Green'
}, {
  "class": 'gray',
  name: 'Gray'
}];
var useUI = createLocalStorageStateHook('UI', {
  theme: 'indigo',
  dark_mode: 'light',
  colors: colors
});
var WebAppsDocs = function WebAppsDocs(props) {
  var _useUI = useUI(),
      _useUI2 = _slicedToArray(_useUI, 2),
      UI = _useUI2[0],
      setUI = _useUI2[1];

  return /*#__PURE__*/React$1.createElement(WebAppsDocsContext.Provider, {
    value: {
      UI: UI,
      setUI: setUI
    }
  }, props.children || null);
};
var withWebAppsDocs = function withWebAppsDocs(Component) {
  var displayName = "withWebAppsDocs(".concat(Component.displayName || Component.name, ")");

  var C = function C(props) {
    return /*#__PURE__*/React$1.createElement(WebAppsDocsContext.Consumer, null, function (context) {
      invariant(context, "You should not use <".concat(displayName, " /> outside a <WebAppsDocs>"));
      return /*#__PURE__*/React$1.createElement(Component, _extends({}, props, context));
    });
  };

  C.displayName = displayName;
  return C;
};function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var WebAppsDocComponent = function WebAppsDocComponent(_ref) {
  var UI = _ref.UI,
      setUI = _ref.setUI,
      children = _ref.children,
      withColors = _ref.withColors,
      noDarkSwitch = _ref.noDarkSwitch;

  var setDark = function setDark(mode) {
    UI.dark_mode = mode;
    setUI(_objectSpread({}, UI));
  };

  var setTheme = function setTheme(color) {
    UI.theme = color;
    setUI(_objectSpread({}, UI));
  };

  var darkClass = function darkClass(mode) {
    return classNames('w-6', 'h-6', 'p-1', 'border', 'border-gray-600', 'rounded-full', 'outline-none', 'mr-1', 'cursor-pointer', UI.dark_mode === mode ? mode === 'light' ? 'bg-gray-200' : 'bg-gray-900' : 'bg-white');
  };

  var themeClass = function themeClass(color) {
    return classNames('w-6', 'h-6', 'p-1', 'border', 'border-gray-600', "hover:border-".concat(color["class"], "-600"), "dark:hover:border-".concat(color["class"], "-500"), 'rounded-full', 'outline-none', 'mr-1', 'cursor-pointer', UI.theme === color["class"] ? "bg-".concat(color["class"], "-600 dark:bg-").concat(color["class"], "-500") : 'bg-white');
  };

  var themePillClass = function themePillClass(color) {
    return classNames('flex', 'h-full', 'w-full', 'rounded-full', UI.theme === color["class"] ? "bg-".concat(color["class"], "-800 dark:bg-").concat(color["class"], "-300") : "bg-".concat(color["class"], "-600 dark:bg-").concat(color["class"], "-500"));
  };

  return /*#__PURE__*/React$1.createElement("div", {
    className: "p-4 border border-gray-600 rounded-md mb-8 mx-2 ".concat(UI.dark_mode)
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "relative w-full p-4 rounded-md bg-gray-200 dark:bg-gray-900"
  }, !noDarkSwitch ? /*#__PURE__*/React$1.createElement("div", {
    className: "absolute -top-7 w-full flex flex-row justify-center"
  }, /*#__PURE__*/React$1.createElement("button", {
    type: "button",
    className: darkClass('light'),
    onClick: function onClick() {
      return setDark('light');
    }
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "flex h-full w-full rounded-full bg-gray-200"
  })), /*#__PURE__*/React$1.createElement("button", {
    type: "button",
    className: darkClass('dark'),
    onClick: function onClick() {
      return setDark('dark');
    }
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "flex h-full w-full rounded-full bg-gray-900"
  }))) : null, children || null, withColors !== false ? /*#__PURE__*/React$1.createElement("div", {
    className: "absolute -bottom-7 w-full flex flex-row justify-center"
  }, Object(UI.colors).map(function (color) {
    return /*#__PURE__*/React$1.createElement("button", {
      key: color["class"],
      type: "button",
      className: themeClass(color),
      onClick: function onClick() {
        return setTheme(color["class"]);
      }
    }, /*#__PURE__*/React$1.createElement("span", {
      className: themePillClass(color)
    }));
  })) : null));
};

var WebAppsDocComponent$1 = withWebAppsDocs(WebAppsDocComponent);/** @jsxRuntime classic /
/* @jsx jsx */

var returnLibrary = function returnLibrary() {
  return {
    APIClient: client,
    APIController: controller,
    Badge: Badge,
    Banner: Banner,
    Button: Button,
    ColorGridSelect: ColorGridSelect,
    ConfirmDeleteButton: ConfirmDeleteButton,
    ConfirmDeleteModal: ConfirmDeleteModal,
    DataSuggest: DataSuggest,
    DropDownButton: DropDownButton,
    Icon: Icon,
    InfiniteScroll: InfiniteScroll,
    Input: Input,
    Link: Link,
    Loader: Loader,
    Scrollbar: Scrollbar,
    Select: Select,
    Sidebar: Sidebar$1,
    SidebarWrapper: SidebarWrapper$1,
    Switch: Switch,
    UserSuggest: UserSuggest,
    AppPluginChangelogModal: AppPluginChangelogModal,
    AppCard: AppCard,
    PluginCard: PluginCard,
    NavChild: NavChild,
    NavDropdown: NavDropdown$1,
    NavItem: NavItem,
    NavTitle: NavTitle,
    Auth: Auth,
    AuthContext: AuthContext,
    withAuth: withAuth,
    WebApps: WebApps,
    WebAppsContext: WebAppsContext,
    withWebApps: withWebApps,
    AppError: AppError$1,
    NavigationError: NavigationError,
    CreateElement: CreateElement,
    DefaultToastContainer: ToastContainer,
    DefaultToast: DefaultToast,
    ToastConsumer: ToastConsumer,
    ToastProvider: ToastProvider,
    withToastManager: withToastManager,
    useToasts: useToasts,
    WebAppsDocComponent: WebAppsDocComponent$1,
    WebAppsDocs: WebAppsDocs,
    WebAppsDocsContext: WebAppsDocsContext,
    withWebAppsDocs: withWebAppsDocs
  };
};

var index = returnLibrary();export{index as default};