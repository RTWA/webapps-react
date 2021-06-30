import _extends from'@babel/runtime/helpers/extends';import _defineProperty from'@babel/runtime/helpers/defineProperty';import _objectWithoutProperties from'@babel/runtime/helpers/objectWithoutProperties';import React,{Component,useState,useCallback,useMemo,useEffect,useRef,useContext,createRef}from'react';import {NavLink,useLocation,Link as Link$1}from'react-router-dom';import _asyncToGenerator from'@babel/runtime/helpers/asyncToGenerator';import _classCallCheck from'@babel/runtime/helpers/classCallCheck';import _createClass from'@babel/runtime/helpers/createClass';import _assertThisInitialized from'@babel/runtime/helpers/assertThisInitialized';import _inherits from'@babel/runtime/helpers/inherits';import _possibleConstructorReturn from'@babel/runtime/helpers/possibleConstructorReturn';import _getPrototypeOf from'@babel/runtime/helpers/getPrototypeOf';import _regeneratorRuntime from'@babel/runtime/regenerator';import axios from'axios';import _slicedToArray from'@babel/runtime/helpers/slicedToArray';import _typeof from'@babel/runtime/helpers/typeof';function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element$1=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element$1,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactIs_development = createCommonjsModule(function (module, exports) {



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

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
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
			if (hasOwnProperty.call(from, key)) {
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

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
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
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
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
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
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
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







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

      if (secret !== ReactPropTypesSecret_1) {
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
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
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
      if (!reactIs.isValidElementType(propValue)) {
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
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
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
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
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

var propTypes = createCommonjsModule(function (module) {
if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

var classnames = createCommonjsModule(function (module) {
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
});var Badge = function Badge(props) {
  var tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      pill = props.pill,
      children = props.children,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "color", "pill", "children"]);

  var classes = classnames(className, 'inline-flex', 'items-center', 'justify-center', 'px-2', 'py-1', 'text-xs', 'font-bold', 'leading-none', "bg-".concat(color), pill ? 'rounded-full' : '');
  var Tag = attributes.to || attributes.href ? NavLink : tag;

  var ref = _defineProperty({}, "".concat(typeof Tag === 'string' ? 'ref' : 'innerRef'), innerRef);

  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes, ref), children);
};

Badge.propTypes = {
  tag: propTypes.string,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  color: propTypes.string,
  pill: propTypes.bool
};
Badge.defaultProps = {
  tag: 'span'
};var Banner = function Banner(props) {
  var tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      darkColor = props.darkColor,
      children = props.children,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "color", "darkColor", "children"]);

  var classes = classnames(className, 'w-full', 'py-2', 'px-8', 'mb-4', "bg-".concat(color), "dark:bg-".concat(darkColor));
  var Tag = attributes.to || attributes.hred ? NavLink : tag;

  var ref = _defineProperty({}, "".concat(typeof Tag === 'string' ? 'ref' : 'innerRef'), innerRef);

  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes, ref), children);
};

Banner.propTypes = {
  tag: propTypes.string,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  color: propTypes.string,
  darkColor: propTypes.string
};
Banner.defaultProps = {
  tag: 'div',
  color: 'gray-300',
  darkColor: 'gray-700'
};function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Link = function Link(props) {
  var className = props.className,
      innerRef = props.innerRef,
      active = props.active,
      href = props.href,
      onClick = props.onClick,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, ["className", "innerRef", "active", "href", "onClick", "disabled"]);

  var to = rest ? rest.to : null;

  var click = function click(e) {
    if (!href && !to || href === '#') {
      e.preventDefault();
    }

    !disabled && onClick && onClick(e);
  };

  var classes = classnames(active, disabled, className);
  return to ? /*#__PURE__*/React.createElement(NavLink, _extends({}, rest, {
    className: classes,
    onClick: click,
    ref: innerRef
  })) : /*#__PURE__*/React.createElement("a", _extends({
    href: href || '#',
    className: classes,
    rel: rest.target === '_blank' ? 'noopener norefferer' : null
  }, rest, {
    onClick: click,
    ref: innerRef
  }));
};

Link.propTypes = _objectSpread$5(_objectSpread$5({
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  active: propTypes.bool,
  href: propTypes.string,
  onClick: propTypes.func,
  disabled: propTypes.bool
}, NavLink.propTypes), {}, {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  to: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
});var AuthContext = /*#__PURE__*/React.createContext({});var Loader = function Loader(props) {
  var className = props.className,
      style = props.style,
      attributes = _objectWithoutProperties(props, ["className", "style"]);

  var classes = classnames('loader', className);
  var circleClasses = classnames('animate-spin', className);

  if (style === 'circle') {
    return /*#__PURE__*/React.createElement("svg", {
      className: circleClasses,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      className: "opacity-25",
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      strokeWidth: "4"
    }), /*#__PURE__*/React.createElement("path", {
      className: "opacity-75",
      fill: "currentColor",
      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }));
  }

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, attributes), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 45 45",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1 1)",
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 22,
    cy: 22,
    r: 6,
    strokeOpacity: 0
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    begin: "1.5s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "1.5s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "stroke-width",
    begin: "1.5s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: 22,
    cy: 22,
    r: 6,
    strokeOpacity: 0
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    begin: "3s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "3s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "stroke-width",
    begin: "3s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: 22,
    cy: 22,
    r: 8
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.5s",
    values: "6;1;2;3;4;5;6",
    calcMode: "linear",
    repeatCount: "indefinite"
  })))));
};

Loader.propsTypes = {
  style: propTypes.oneOf(['', 'circle'])
};
Loader.defaultProps = {
  style: ''
};function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
axios.defaults.withCredentials = true;

var Auth = /*#__PURE__*/function (_Component) {
  _inherits(Auth, _Component);

  var _super = _createSuper$2(Auth);

  function Auth(props) {
    var _this;

    _classCallCheck(this, Auth);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setPreference", function (preference, value) {
      var preferences = _this.state.preferences;
      preferences[preference] = value;

      _this.setState({
        preferences: preferences
      });

      var formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('preference', preference);
      formData.append('value', value);
      axios.post('/api/user/preference', formData)["catch"](function (error) {
        // TODO: Handle errors
        console.log(error);
      });
    });

    _this.state = {
      user: null,
      authenticated: null,
      preferences: {}
    };
    _this.signIn = _this.signIn.bind(_assertThisInitialized(_this));
    _this.signOut = _this.signOut.bind(_assertThisInitialized(_this));
    _this.setUser = _this.setUser.bind(_assertThisInitialized(_this));
    _this.checkAuthentication = _this.checkAuthentication.bind(_assertThisInitialized(_this));
    _this.setPreference = _this.setPreference.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Auth, [{
    key: "signIn",
    value: function signIn(username, password) {
      var _this2 = this;

      return new Promise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(resolve, reject) {
          var _yield$axios$get, data, preferences;

          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return axios.get('/sanctum/csrf_cookie');

                case 3:
                  _context.next = 5;
                  return axios.post('/login', {
                    username: username,
                    password: password
                  });

                case 5:
                  _context.next = 7;
                  return axios.get('/api/user');

                case 7:
                  _yield$axios$get = _context.sent;
                  data = _yield$axios$get.data;
                  preferences = data.preferences;
                  delete data.preferences;

                  _this2.setState({
                    user: data,
                    authenticated: true,
                    preferences: preferences
                  });

                  return _context.abrupt("return", resolve(data));

                case 15:
                  _context.prev = 15;
                  _context.t0 = _context["catch"](0);
                  return _context.abrupt("return", reject(_context.t0));

                case 18:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 15]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "signOut",
    value: function signOut() {
      var _this3 = this;

      new Promise( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(resolve, reject) {
          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return axios.post('/api/logout');

                case 3:
                  _this3.setState({
                    user: null,
                    authenticated: false
                  });

                  window.location.replace("//" + window.location.hostname + '/login?logout');
                  resolve(true);
                  _context2.next = 11;
                  break;

                case 8:
                  _context2.prev = 8;
                  _context2.t0 = _context2["catch"](0);
                  return _context2.abrupt("return", reject(_context2.t0));

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 8]]);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "setUser",
    value: function setUser(user, authenticated) {
      this.setState({
        user: user,
        authenticated: authenticated
      });
    }
  }, {
    key: "checkAuthentication",
    value: function checkAuthentication() {
      var _this4 = this;

      return new Promise( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(resolve, reject) {
          var _yield$axios$get2, data;

          return _regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(_this4.state.authenticated === null)) {
                    _context3.next = 20;
                    break;
                  }

                  _context3.prev = 1;
                  _context3.next = 4;
                  return axios.get('/api/user');

                case 4:
                  _yield$axios$get2 = _context3.sent;
                  data = _yield$axios$get2.data;

                  _this4.setState({
                    user: data,
                    authenticated: true
                  });

                  return _context3.abrupt("return", resolve(true));

                case 10:
                  _context3.prev = 10;
                  _context3.t0 = _context3["catch"](1);

                  if (!(_context3.t0.response && _context3.t0.response.status === 401)) {
                    _context3.next = 17;
                    break;
                  }

                  // If 401 returns, the user is not logged in
                  _this4.setState({
                    user: null,
                    authenticated: false,
                    preferences: {}
                  });

                  return _context3.abrupt("return", resolve(false));

                case 17:
                  return _context3.abrupt("return", reject(_context3.t0));

                case 18:
                  _context3.next = 21;
                  break;

                case 20:
                  return _context3.abrupt("return", resolve(_this4.state.authenticated));

                case 21:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[1, 10]]);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.checkOnInit) this.checkAuthentication();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.authenticated !== null) return /*#__PURE__*/React.createElement(AuthContext.Provider, {
        children: this.props.children || null,
        value: {
          user: this.state.user,
          authenticated: this.state.authenticated,
          signIn: this.signIn,
          signOut: this.signOut,
          setUser: this.setUser,
          checkAuthentication: this.checkAuthentication,
          preferences: this.state.preferences,
          setPreference: this.setPreference
        }
      });else return /*#__PURE__*/React.createElement(Loader, null);
    }
  }]);

  return Auth;
}(Component);

Auth.propTypes = {
  config: propTypes.object,
  checkOnInit: propTypes.bool
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
    throw new Error(prefix + ": " + (message || ''));
}var withAuth = function withAuth(Component) {
  var displayName = "withAuth(".concat(Component.displayName || Component.name, ")");

  var C = function C(props) {
    return /*#__PURE__*/React.createElement(AuthContext.Consumer, null, function (context) {
      invariant(context, "You should not use <".concat(displayName, " /> outside a <Auth>"));
      return /*#__PURE__*/React.createElement(Component, _extends({}, props, context));
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
    // we don't support updating the `defaultValue` the same way `useState()` doesn't support it
    const [defaultValueState] = useState(() => {
        const isCallable = (value) => typeof value === 'function';
        return isCallable(defaultValue) ? defaultValue() : defaultValue;
    });
    const getDefaultState = useCallback(() => {
        return {
            value: storage.get(key, defaultValueState),
            isPersistent: (() => {
                /**
                 * We want to return `true` on the server. If you render a message based on `isPersistent` and the
                 * server returns `false` then the message will flicker until hydration is done:
                 * `{!isPersistent && <span>You changes aren't being persisted.</span>}`
                 */
                if (typeof window === 'undefined') {
                    return true;
                }
                try {
                    localStorage.setItem('__ulss', '#');
                    localStorage.removeItem('__ulss');
                    return true;
                }
                catch (_a) {
                    return false;
                }
            })(),
        };
    }, [defaultValueState, key]);
    const [state, setState] = useState(getDefaultState);
    const updateValue = useMemo(() => {
        const fn = (newValue) => {
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
        fn.reset = () => {
            storage.remove(key);
            setState((state) => ({
                value: defaultValueState,
                isPersistent: state.isPersistent,
            }));
        };
        return fn;
    }, [key, defaultValueState]);
    /**
     * Syncs changes across tabs and iframe's.
     */
    useEffect(() => {
        const onStorage = (e) => {
            if (e.storageArea === localStorage && e.key === key) {
                setState({
                    value: storage.get(key, defaultValueState),
                    isPersistent: true,
                });
            }
        };
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    }, [key, defaultValueState]);
    /**
     * Update the state when the `key` property changes.
     */
    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setState(getDefaultState());
    }, [getDefaultState]);
    return [state.value, updateValue, state.isPersistent];
}function createLocalStorageStateHook(key, defaultValue) {
    const setValueFunctions = [];
    return function useLocalStorageStateHook() {
        const [value, setValue, isPersistent] = useLocalStorageStateBase(key, defaultValue);
        const setValueAll = useMemo(() => {
            const fn = (newValue) => {
                for (const setValueFunction of setValueFunctions) {
                    setValueFunction(newValue);
                }
            };
            fn.reset = () => {
                for (const setValueFunction of setValueFunctions) {
                    setValueFunction.reset();
                }
            };
            return fn;
        }, []);
        useEffect(() => {
            setValueFunctions.push(setValue);
            return () => void setValueFunctions.splice(setValueFunctions.indexOf(setValue), 1);
        }, [setValue]);
        return [value, setValueAll, isPersistent];
    };
}function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var WebAppsContext = /*#__PURE__*/React.createContext({});
var useModals = createLocalStorageStateHook('modals', {});
var WebApps = function WebApps(props) {
  var unmounted = useRef(false);

  var _useState = useState({
    sidebar: 'responsive',
    envWriteable: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      UI = _useState2[0],
      setUI = _useState2[1];

  var _useModals = useModals(),
      _useModals2 = _slicedToArray(_useModals, 2),
      modals = _useModals2[0],
      setModals = _useModals2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      navigation = _useState4[0],
      setNavigation = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      apps = _useState6[0],
      setApps = _useState6[1];

  var _useState7 = useState({}),
      _useState8 = _slicedToArray(_useState7, 2),
      plugins = _useState8[0],
      setPlugins = _useState8[1];

  useEffect(function () {
    loadUI();
    loadNavigation();
    getApps();
    getPlugins();
    return function () {
      unmounted.current = true;
    };
  }, []);

  var toggleModal = function toggleModal(modal) {
    setModals({
      modal: !modals[modal]
    });
  };

  var loadUI = function loadUI() {
    var formData = new FormData();
    formData.append('key', JSON.stringify(['core.ui.theme', 'core.ui.dark_mode']));
    axios.post('/api/setting', formData).then(function (json) {
      if (!unmounted.current) {
        UI.theme = json.data['core.ui.theme'];
        UI.dark_mode = json.data['core.ui.dark_mode'];
        setUI(_objectSpread$4({}, UI));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        // TODO: handle errors
        console.log(error);
      }
    });
  };

  var loadNavigation = function loadNavigation() {
    axios.get('/api/navigation').then(function (json) {
      if (!unmounted.current) {
        navigation.menu = json.data.navigation;
        navigation.routes = json.data.routes;
        navigation.settings = json.data.settingsNav;
        UI.envWriteable = json.data.envPermissions;
        setNavigation(_objectSpread$4({}, navigation));
        setUI(_objectSpread$4({}, UI));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        var nav = [];
        nav['error'] = true;
        nav['message'] = error.response.data.message;
        setNavigation(nav);
      }
    });
  };

  var getApps = function getApps() {
    axios.get('/api/apps').then(function (json) {
      if (!unmounted.current) {
        apps.local = json.data.apps;
        setApps(_objectSpread$4({}, apps));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        // TOOD: Handle errors
        console.error(error);
      }
    });
    axios.get('/api/online/apps/list').then(function (json) {
      if (!unmounted.current) {
        apps.online = json.data.apps;
        setApps(_objectSpread$4({}, apps));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        // TODO: handle errors
        console.log(error);
      }
    });
  };

  var getPlugins = function getPlugins() {
    axios.get('/api/plugins').then(function (json) {
      if (!unmounted.current) {
        plugins.all = json.data.plugins;
        setPlugins(_objectSpread$4({}, plugins));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        // TOOD: Handle errors
        console.error(error);
      }
    });
    axios.get('/api/plugins/active').then(function (json) {
      if (!unmounted.current) {
        plugins.active = json.data.plugins;
        setPlugins(_objectSpread$4({}, plugins));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        // TOOD: Handle errors
        console.error(error);
      }
    });
    axios.get('/api/online/plugins/list').then(function (json) {
      if (!unmounted.current) {
        plugins.online = json.data.plugins;
        setPlugins(_objectSpread$4({}, plugins));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        // TODO: handle errors
        console.log(error);
      }
    });
  };

  var downloadApp = function downloadApp(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append('slug', e.target.dataset.slug);
    axios.post('/api/online/apps/download', formData).then(function (json) {
      if (!unmounted.current) {
        // TODO: toast
        alert(json.data.message);
        apps.local = json.data.apps;
        apps.online = json.data.online;
        setApps(_objectSpread$4({}, apps));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        // TODO: handle errors
        console.log(error);
      }
    });
  };

  var updateApp = function updateApp(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append('slug', e.target.dataset.slug);
    axios.post('/api/online/apps/download', formData).then(function (json) {
      if (!unmounted.current) {
        // TODO: toast
        alert(json.data.message);
        apps.local = json.data.apps;
        apps.online = json.data.online;
        setApps(_objectSpread$4({}, apps));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        // TODO: handle errors
        console.log(error);
      }
    });
  };

  var activateApp = function activateApp(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append('slug', e.target.dataset.slug);
    formData.append('task', 'activate');
    axios.post('/api/apps/control', formData).then(function (json) {
      if (!unmounted.current) {
        // TODO: Toast
        // alert(json.data.message);
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
        setApps(_objectSpread$4({}, apps));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        // TODO: handle errors
        console.error(error);
      }
    });
  };

  var deactivateApp = function deactivateApp(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append('slug', e.target.dataset.slug);
    formData.append('task', 'deactivate');
    axios.post('/api/apps/control', formData).then(function (json) {
      if (!unmounted.current) {
        // TODO: Toast
        // alert(json.data.message);
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
        setApps(_objectSpread$4({}, apps));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        // TODO: handle errors
        console.error(error);
      }
    });
  };

  var installApp = function installApp(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append('slug', e.target.dataset.slug);
    formData.append('task', 'install');
    axios.post('/api/apps/control', formData).then(function (json) {
      if (!unmounted.current) {
        // TODO: Toast
        // alert(json.data.message);
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
        setApps(_objectSpread$4({}, apps));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        // TODO: handle errors
        console.error(error);
      }
    });
  };

  var uninstallApp = function uninstallApp(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append('slug', e.target.dataset.slug);
    formData.append('task', 'uninstall');
    axios.post('/api/apps/control', formData).then(function (json) {
      if (!unmounted.current) {
        // TODO: Toast
        alert(json.data.message);
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
        setApps(_objectSpread$4({}, apps));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        // TODO: handle errors
        console.error(error);
      }
    });
  };

  var downloadPlugin = function downloadPlugin(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append('slug', e.target.dataset.slug);
    axios.post('/api/online/plugins/download', formData).then(function (json) {
      if (!unmounted.current) {
        // TODO: toast
        alert(json.data.message);
        plugins.all = json.data.plugins;
        plugins.online = json.data.online;
        setPlugins(_objectSpread$4({}, plugins));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        // TODO: handle errors
        console.log(error);
      }
    });
  };

  var updatePlugin = function updatePlugin(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append('slug', e.target.dataset.slug);
    axios.post('/api/online/plugins/download', formData).then(function (json) {
      if (!unmounted.current) {
        // TODO: toast
        alert(json.data.message);
        plugins.all = json.data.plugins;
        plugins.online = json.data.online;
        setPlugins(_objectSpread$4({}, plugins));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        // TODO: handle errors
        console.log(error);
      }
    });
  };

  var togglePlugin = function togglePlugin(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append('slug', e.target.dataset.slug);
    axios.post('/api/plugins/toggle', formData).then(function (json) {
      if (!unmounted.current) {
        // TODO: Toast
        // alert(json.data.message);
        Object.keys(plugins.all).map(function (key) {
          if (e.target.dataset.slug === plugins.all[key].slug) {
            plugins.all[key].state = json.data.plugin['state'];
          }
        });
        Object.keys(plugins.online).map(function (key) {
          if (e.target.dataset.slug === plugins.online[key].slug) {
            plugins.online[key].state = json.data.plugin.state;
          }
        });
        setPlugins(_objectSpread$4({}, plugins));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        // TODO: handle errors
        console.error(error);
      }
    });
  };

  var uninstallPlugin = function uninstallPlugin(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append('_method', 'DELETE');
    formData.append('slug', e.target.dataset.slug);
    axios.post('/api/plugin', formData).then(function (json) {
      if (!unmounted.current) {
        // TODO: Toast
        alert(json.data.message);
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
        setPlugins(_objectSpread$4({}, plugins));
      }
    })["catch"](function (error) {
      if (!unmounted.current) {
        // TODO: handle errors
        console.error(error);
      }
    });
  };

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
  return /*#__PURE__*/React.createElement(WebAppsContext.Provider, {
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
};var withWebApps = function withWebApps(Component) {
  var displayName = "withWebApps(".concat(Component.displayName || Component.name, ")");

  var C = function C(props) {
    return /*#__PURE__*/React.createElement(WebAppsContext.Consumer, null, function (context) {
      invariant(context, "You should not use <".concat(displayName, " /> outside a <WebApps>"));
      return /*#__PURE__*/React.createElement(Component, _extends({}, props, context));
    });
  };

  C.displayName = displayName;
  return C;
};var Button = function Button(props) {
  var style = props.style,
      size = props.size,
      rounded = props.rounded,
      square = props.square,
      className = props.className,
      children = props.children,
      attributes = _objectWithoutProperties(props, ["style", "size", "rounded", "square", "className", "children"]);

  var _useContext = useContext(WebAppsContext),
      UI = _useContext.UI;

  var color = props.color === 'brand' ? UI.theme : props.color;
  var classes = classnames('font-bold', 'outline-none', 'focus:outline-none', 'ease-linear', 'transition-all', 'duration-150', style === 'full' ? "bg-".concat(color, "-600 hover:bg-").concat(color, "-400 dark:bg-").concat(color, "-400 dark:hover:bg-").concat(color, "-600") : '', style === 'outline' ? "text-".concat(color, "-600 dark:text-").concat(color, "-400 bg-transparent border border-").concat(color, "-600 dark:border-").concat(color, "-400 hover:bg-").concat(color, "-600 dark:hover:bg-").concat(color, "-400 hover:text-white dark:hover:text-white") : '', style === 'ghost' ? "text-".concat(color, "-600 dark:text-").concat(color, "-400 bg-transparent hover:bg-").concat(color, "-600 dark:hover:bg-").concat(color, "-400 hover:text-white dark:hover:text-white") : '', style === 'link' ? "text-".concat(color, "-600 dark:text-").concat(color, "-400 bg-transparent hover:text-").concat(color, "-400 dark:hover:text-").concat(color, "-600") : '', size === "small" ? 'text-xs px-2 py-1' : size === "large" ? 'text-lg px-8 py-3' : 'px-4 py-2', rounded ? 'rounded-full' : square ? 'rounded-none' : 'rounded-md', className);
  return props.href !== undefined || props.to !== undefined ? /*#__PURE__*/React.createElement(Link, _extends({
    className: classes
  }, attributes), children) : /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: classes
  }, attributes), children);
};

Button.propTypes = {
  color: propTypes.string,
  style: propTypes.oneOf(['full', 'outline', 'ghost', 'link']),
  size: propTypes.oneOf(['', 'small', 'large']),
  rounded: propTypes.bool,
  square: propTypes.bool
};
Button.defaultProps = {
  color: 'brand',
  style: 'full',
  size: ''
};var ConfirmDeleteButton = function ConfirmDeleteButton(props) {
  var text = props.text,
      confirmText = props.confirmText,
      onClick = props.onClick,
      timeout = props.timeout,
      initialColor = props.initialColor,
      confirmColor = props.confirmColor,
      attributes = _objectWithoutProperties(props, ["text", "confirmText", "onClick", "timeout", "initialColor", "confirmColor"]);

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
      setWaiting(false);
    }, timeout);
  };

  return waiting ? /*#__PURE__*/React.createElement(Button, _extends({
    className: "flex flex-row items-center",
    color: confirmColor,
    onClick: onConfirm
  }, attributes), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 mr-2",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  })), confirmText) : /*#__PURE__*/React.createElement(Button, _extends({
    className: "flex flex-row items-center",
    color: initialColor,
    onClick: onQuery
  }, attributes), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 mr-2",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  })), text);
};

ConfirmDeleteButton.propTypes = {
  text: propTypes.string,
  confirmText: propTypes.string,
  onClick: propTypes.func,
  timeout: propTypes.number,
  initialColor: propTypes.string,
  confirmColor: propTypes.string
};
ConfirmDeleteButton.defaultProps = {
  text: "Delete",
  confirmText: "Delete - Are you sure?",
  timeout: 2000,
  initialColor: 'red',
  confirmColor: 'orange'
};var ConfirmDeleteModal = function ConfirmDeleteModal(props) {
  var title = props.title,
      message = props.message,
      cancelText = props.cancelText,
      confirmText = props.confirmText,
      onCancel = props.onCancel,
      onConfirm = props.onConfirm,
      attributes = _objectWithoutProperties(props, ["title", "message", "cancelText", "confirmText", "onCancel", "onConfirm"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "fixed z-50 inset-0 overflow-y-auto"
  }, attributes), /*#__PURE__*/React.createElement("div", {
    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 transition-opacity",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gray-500 opacity-75"
  })), /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
    "aria-hidden": "true"
  }, "\u200B"), /*#__PURE__*/React.createElement("div", {
    className: "inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "modal-headline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sm:flex sm:items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 sm:mx-0 sm:h-10 sm:w-10"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "h-6 w-6 text-red-600 dark:text-red-400",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100",
    id: "modal-headline"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500 dark:text-gray-300 whitespace-pre-wrap"
  }, message))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:ring-0 sm:ml-3 sm:w-auto sm:text-sm",
    onClick: onConfirm
  }, confirmText), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-700 shadow-sm px-4 py-2 bg-white dark:bg-gray-500 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
    onClick: onCancel
  }, cancelText)))));
};

ConfirmDeleteModal.propTypes = {
  title: propTypes.string,
  message: propTypes.string,
  cancelText: propTypes.string,
  confirmText: propTypes.string,
  onCancel: propTypes.func,
  onConfirm: propTypes.func
};
ConfirmDeleteModal.defaultProps = {
  title: "Are you sure?",
  message: "Are you sure to wish to delete this item?\nThis action cannot be undone.",
  cancelText: "No",
  confirmText: "Yes"
};var DropDownButton = function DropDownButton(props) {
  var show = props.show,
      text = props.text,
      buttonClassNames = props.buttonClassNames,
      dropClassNames = props.dropClassNames,
      rest = _objectWithoutProperties(props, ["show", "text", "buttonClassNames", "dropClassNames"]);

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

  var dropClass = classnames('origin-top-right', 'absolute', 'right-0', 'w-56', 'bg-white', 'dark:bg-gray-700', 'shadow-lg', 'ring-1', 'ring-black', 'ring-opacity-5', 'z-20', dropClassNames, open ? '' : 'hidden');
  var childrenWithClose = React.Children.map(props.children, function (child) {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      return /*#__PURE__*/React.cloneElement(child, {
        onClick: close
      });
    }

    return child;
  });
  var id = "options-menu-".concat(Math.floor(Math.random() * 1000));
  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Button, _extends({
    className: buttonClassNames
  }, rest, {
    id: id,
    "aria-haspopup": "true",
    "aria-expanded": "false",
    onClick: toggle
  }), text), /*#__PURE__*/React.createElement("div", {
    className: dropClass
  }, /*#__PURE__*/React.createElement("div", {
    className: "py-1",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": id
  }, childrenWithClose)));
};

DropDownButton.propTypes = {
  text: propTypes.oneOfType([propTypes.string, propTypes.object])
};var Icon = function Icon(props) {
  var icon = props.icon,
      attributes = _objectWithoutProperties(props, ["icon"]);

  var addClasses = function addClasses(string) {
    return string.replace(/<svg/g, "<svg class=\"".concat(attributes.className, "\""));
  };

  return /*#__PURE__*/React.createElement("div", _extends({
    dangerouslySetInnerHTML: {
      __html: addClasses(icon)
    }
  }, attributes));
};

Icon.propTypes = {
  icon: propTypes.oneOfType([propTypes.string, propTypes.object])
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
    var target = entities[0];

    if (target.isIntersecting) {
      setPage(function (page) {
        return page + 1;
      });
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, props.children, /*#__PURE__*/React.createElement("span", {
    ref: marker
  }));
};var Input = function Input(props) {
  var error = props.error,
      state = props.state,
      className = props.className,
      attributes = _objectWithoutProperties(props, ["error", "state", "className"]);

  var _useContext = useContext(WebAppsContext),
      UI = _useContext.UI;

  var classes = classnames(className, 'input-field', "focus:border-".concat(UI.theme, "-600"), "dark:focus:border-".concat(UI.theme, "-500"), state === 'error' ? 'border-red-500 text-red-500' : '', state === 'saved' ? 'border-green-500 text-green-500' : '', state === 'saving' ? 'border-orange-500' : '');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", _extends({}, attributes, {
    className: classes
  })), state === 'error' && error !== '' ? /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-red-500"
  }, error) : null);
};

Input.propTypes = {
  error: propTypes.string,
  state: propTypes.oneOf(['', 'saving', 'error', 'saved']),
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object])
};
Input.defaultProps = {
  error: '',
  state: '',
  className: ''
};var Switch = function Switch(props) {
  var name = props.name,
      error = props.error,
      state = props.state,
      className = props.className;
  var classes = classnames(className, 'checked:bg-gray-500', 'outline-none', 'focus:ring-0', 'focus:outline-none', 'right-4', 'checked:right-0', 'duration-200', 'ease-in', 'absolute', 'block', 'w-6', 'h-6', 'rounded-full', 'bg-white', 'border-4', 'appearance-none', 'cursor-pointer', state === 'error' ? 'border-red-500 checked:bg-red-500' : '', state === 'saved' ? 'border-green-500 checked:bg-green-500' : '', state === 'saving' ? 'border-orange-500 checked:bg-orange-500' : '');
  return /*#__PURE__*/React.createElement("div", {
    className: "relative inline-block w-10 mr-2 align-middle select-none"
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: name,
    name: name,
    className: classes
  }, props)), /*#__PURE__*/React.createElement("label", {
    htmlFor: name,
    className: "block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"
  }), state === 'error' && error !== '' ? /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-red-500"
  }, error) : null);
};

Switch.propTypes = {
  name: propTypes.string,
  error: propTypes.string,
  state: propTypes.string,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object])
};
Switch.defaultProps = {
  name: 'check'
};/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
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
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
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

  i.containerWidth = Math.ceil(rect.width);
  i.containerHeight = Math.ceil(rect.height);
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
    e.preventDefault();
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

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
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

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
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
};var Scrollbar = function Scrollbar(props) {
  var Tag = props.tag,
      className = props.className,
      settings = props.settings,
      attributes = _objectWithoutProperties(props, ["tag", "className", "settings"]);

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


  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classnames(className),
    style: {
      position: 'relative'
    }
  }, attributes, {
    ref: ref
  }));
};

Scrollbar.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  settings: propTypes.object,
  switcher: propTypes.bool,
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
Scrollbar.defaultProps = {
  tag: 'div'
};function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DropdownContext = /*#__PURE__*/React.createContext({});

var NavDropdown = function NavDropdown(_ref) {
  var UI = _ref.UI,
      setUI = _ref.setUI,
      props = _objectWithoutProperties(_ref, ["UI", "setUI"]);

  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      icon = props.icon,
      name = props.name,
      badge = props.badge,
      show = props.show,
      route = props.route;
      _objectWithoutProperties(props, ["children", "className", "innerRef", "color", "icon", "name", "badge", "show", "route"]);

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
      setUI(_objectSpread$3({}, UI));
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
  var linkClasses = classnames('flex', 'items-center', 'py-2', 'transition-colors', 'duration-200', 'focus:outline-none', 'hover:bg-gray-100', 'dark:hover:bg-gray-600', color ? "text-".concat(color, "-600 hover:text-").concat(color, "-800 dark:text-").concat(color, "-400 dark:hover:text-").concat(color, "-100") : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white', isOpen ? color ? "text-".concat(color, "-800 bg-gray-100 dark:text-").concat(color, "-100 dark:bg-gray-600 rounded-t-lg") : 'text-gray-800 bg-gray-100 dark:text-white dark:bg-gray-600 rounded-t-lg' : 'rounded-lg');
  var dropIcon = isOpen ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>';
  return /*#__PURE__*/React.createElement("li", {
    className: classnames(className, 'mb-2'),
    ref: ref
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: linkClasses,
    tabIndex: "0",
    onClick: toggle,
    "aria-label": "menu dropdown"
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    className: "h-5 w-10"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-medium text-sm"
  }, name), badge && /*#__PURE__*/React.createElement(Badge, _objectSpread$3(_objectSpread$3({}, badge), {}, {
    text: null
  }), badge.text), /*#__PURE__*/React.createElement(Icon, {
    icon: dropIcon,
    className: "ml-auto h-5 w-5"
  })), /*#__PURE__*/React.createElement("ul", {
    className: classnames(isOpen ? 'block py-1 bg-gray-100 dark:bg-gray-600 rounded-b-lg' : 'hidden')
  }, /*#__PURE__*/React.createElement(DropdownContext.Provider, {
    value: {
      isOpen: isOpen
    }
  }, children)));
};

var NavDropdown$1 = withWebApps(NavDropdown);function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var NavChild = function NavChild(props) {
  var className = props.className,
      innerRef = props.innerRef,
      name = props.name,
      icon = props.icon,
      badge = props.badge;
      props.addLinkClass;
      props.label;
      var color = props.color,
      rest = _objectWithoutProperties(props, ["className", "innerRef", "name", "icon", "badge", "addLinkClass", "label", "color"]);

  var _useContext = useContext(DropdownContext),
      isOpen = _useContext.isOpen;

  var linkClasses = classnames('flex', 'items-center', 'p-2', 'px-4', 'mb-1', 'transition-colors', 'duration-200', 'focus:outline-none', 'hover:font-medium', 'hover:bg-gray-200', 'dark:hover:bg-gray-900', color ? "text-".concat(color, "-600 hover:text-").concat(color, "-900 dark:text-").concat(color, "-400 dark:hover:text-").concat(color, "-100") : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white');
  var routerLinkProps = rest.to && {
    exact: true,
    activeClassName: classnames(color ? "font-medium text-".concat(color, "-900 dark:text-").concat(color, "-100") : 'font-medium text-gray-900 dark:text-white')
  };
  return /*#__PURE__*/React.createElement("li", {
    className: className,
    ref: innerRef
  }, /*#__PURE__*/React.createElement(Link, _extends({
    className: linkClasses
  }, routerLinkProps, rest, {
    tabIndex: isOpen === false ? -1 : 0
  }), icon && /*#__PURE__*/React.createElement(Icon, {
    className: "h-5 w-5 mr-4",
    icon: icon
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, name), badge && /*#__PURE__*/React.createElement(Badge, _objectSpread$2(_objectSpread$2({}, badge), {}, {
    text: null
  }), badge.text)));
};function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var NavItem = function NavItem(props) {
  var className = props.className,
      innerRef = props.innerRef,
      name = props.name,
      icon = props.icon,
      badge = props.badge;
      props.addLinkClass;
      props.label;
      var color = props.color,
      rest = _objectWithoutProperties(props, ["className", "innerRef", "name", "icon", "badge", "addLinkClass", "label", "color"]);

  var _useContext = useContext(DropdownContext),
      isOpen = _useContext.isOpen;

  var linkClasses = classnames('flex', 'items-center', 'py-2', 'mb-1', 'rounded-lg', 'transition-colors', 'duration-200', 'focus:outline-none', color ? "text-".concat(color, "-600 hover:text-").concat(color, "-800 dark:text-").concat(color, "-400 dark:hover:text-").concat(color, "-100 hover:bg-").concat(color, "-100 dark:hover:bg-").concat(color, "-600") : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600');
  var routerLinkProps = rest.to && {
    exact: true,
    activeClassName: classnames(color ? "text-".concat(color, "-800 bg-gray-100 dark:text-").concat(color, "-100 dark:bg-gray-600") : 'text-gray-800 bg-gray-100 dark:text-white dark:bg-gray-600')
  };
  return /*#__PURE__*/React.createElement("li", {
    className: className,
    ref: innerRef
  }, /*#__PURE__*/React.createElement(Link, _extends({
    className: linkClasses
  }, routerLinkProps, rest, {
    tabIndex: isOpen === false ? -1 : 0
  }), icon && /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    className: "h-5 w-10"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-medium text-sm"
  }, name), badge && /*#__PURE__*/React.createElement(Badge, _objectSpread$1(_objectSpread$1({}, badge), {}, {
    text: null
  }), badge.text)));
};var NavTitle = function NavTitle(props) {
  var name = props.name,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["name", "className", "innerRef"]);

  var classes = classnames('relative', 'my-6', 'h-px', 'bg-gray-600', 'dark:bg-gray-400', className);
  return /*#__PURE__*/React.createElement("li", _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-0 top-0 flex justify-center w-full -mt-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-white dark:bg-gray-800 px-4 text-xs text-gray-600 dark:text-gray-400 uppercase"
  }, name)));
};

NavTitle.propTypes = {
  name: propTypes.string,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};var CreateElement = function CreateElement(_ref) {
  var items = _ref.items,
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? {} : _ref$components;

  var renderItem = function renderItem(item, i) {
    var _tag = item._tag,
        _children = item._children,
        rest = _objectWithoutProperties(item, ["_tag", "_children"]);

    var Tag = components[_tag] || _tag;
    var children = _children ? _children.map(function (child, i) {
      return _typeof(child) === 'object' ? renderItem(child, i) : child;
    }) : '';
    return /*#__PURE__*/React.createElement(Tag, _extends({
      key: Tag + i
    }, rest), children);
  };

  var generatedItems = useMemo(function () {
    return items && items.map(function (item, i) {
      return renderItem(item, i);
    });
  }, [JSON.stringify(items)]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, generatedItems);
}; // items: PropTypes.oneOfType[PropTypes.array, PropTypes.object],


CreateElement.propTypes = {
  components: propTypes.object
};function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var NavigationError = /*#__PURE__*/function (_Component) {
  _inherits(NavigationError, _Component);

  var _super = _createSuper$1(NavigationError);

  function NavigationError(props) {
    var _this;

    _classCallCheck(this, NavigationError);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false,
      info: '',
      error: ''
    };
    return _this;
  }

  _createClass(NavigationError, [{
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
        return /*#__PURE__*/React.createElement("ul", {
          className: "px-4 my-auto"
        }, /*#__PURE__*/React.createElement("li", {
          className: "w-full text-center p-2 rounded-lg transition-colors duration-200 focus:outline-none text-gray-600 dark:text-gray-400"
        }, "Failed to load navigation."), /*#__PURE__*/React.createElement("li", {
          className: "w-full text-center p-2 rounded-lg transition-colors duration-200 focus:outline-none text-gray-600 dark:text-gray-400"
        }, this.state.error.toString()), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
          className: "w-full text-center p-2 rounded-lg transition-colors duration-200 focus:outline-none text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-100 hover:bg-red-100 dark:hover:bg-red-600",
          onClick: this.props.retry
        }, "Click here to try again.")));
      }

      return this.props.children;
    }
  }]);

  return NavigationError;
}(Component);function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SidebarWrapper = function SidebarWrapper(_ref) {
  var loadNavigation = _ref.loadNavigation,
      UI = _ref.UI,
      setUI = _ref.setUI,
      props = _objectWithoutProperties(_ref, ["loadNavigation", "UI", "setUI"]);

  var children = props.children,
      dropdownMode = props.dropdownMode;
  useEffect(function () {
    if (UI !== undefined) {
      UI.navigation = {
        dropdownMode: dropdownMode,
        openDropdown: ''
      };
      setUI(_objectSpread({}, UI));
    }
  }, [dropdownMode]);
  useEffect(function () {
    if (UI.navigation === undefined) {
      UI.navigation = {
        dropdownMode: dropdownMode,
        openDropdown: ''
      };
      setUI(_objectSpread({}, UI));
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
  return /*#__PURE__*/React.createElement("nav", {
    className: "flex flex-wrap items-center relative z-50 shadow-xl bg-white dark:bg-gray-800 md:flex-col md:w-72 md:h-screen md:border-r border-transparent dark:border-gray-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
  }, /*#__PURE__*/React.createElement("button", {
    className: "cursor-pointer text-black dark:text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent outline-none",
    type: "button",
    onClick: toggle
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h16"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-none items-center justify-center md:h-24 py-2 md:py-0 mx-auto text-gray-600 dark:text-gray-300"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    className: "h-10 text-".concat(UI.theme, "-600 dark:text-").concat(UI.theme, "-500")
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
  })), /*#__PURE__*/React.createElement("span", {
    className: "ml-4 text-2xl font-bold"
  }, "WebApps")), /*#__PURE__*/React.createElement(NavigationError, {
    retry: loadNavigation
  }, /*#__PURE__*/React.createElement(Scrollbar, {
    settings: {
      suppressScrollX: !isRtl
    },
    tag: "ul",
    className: "md:my-5 md:px-4 md:flex md:flex-col md:flex-grow md:relative md:top-0 md:left-0 md:right-0 md:p-0 bg-white dark:bg-gray-800 absolute top-14 left-2 right-2 p-2 z-40 overflow-y-auto overflow-x-hidden h-auto flex-1 rounded-b ".concat(collapseShow)
  }, children))));
};

SidebarWrapper.propTypes = {
  dropdownMode: propTypes.oneOf(['', 'openActive', 'close', 'closeInactive', 'noAction'])
};
SidebarWrapper.defaultProps = {
  dropdownMode: 'closeInactive'
};
var SidebarWrapper$1 = withWebApps(SidebarWrapper);var Sidebar = function Sidebar(_ref) {
  var navigation = _ref.navigation,
      props = _objectWithoutProperties(_ref, ["navigation"]);

  useEffect(function () {
    if (navigation.menu !== null && navigation.menu !== undefined) {
      if (navigation.menu.error) {
        throw new Error(navigation.menu.message);
      }
    }
  }, [navigation]);
  return /*#__PURE__*/React.createElement(SidebarWrapper$1, props, navigation.menu !== null && navigation.menu !== undefined && !navigation.menu.error ? /*#__PURE__*/React.createElement(CreateElement, {
    items: navigation.menu,
    components: {
      NavChild: NavChild,
      NavDropdown: NavDropdown$1,
      NavItem: NavItem,
      NavTitle: NavTitle
    }
  }) : null);
};

var Sidebar$1 = withWebApps(Sidebar);var AppActionButtons = function AppActionButtons(_ref) {
  var app = _ref.app;
      _objectWithoutProperties(_ref, ["app"]);

  var _useContext = useContext(WebAppsContext),
      apps = _useContext.apps; // Installed, has update


  if (app.installed && app.hasUpdate) {
    return /*#__PURE__*/React.createElement("button", {
      className: "py-auto bg-orange-300 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-400 focus:outline-none w-full",
      "data-slug": app.slug,
      onClick: apps.update
    }, "Update", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "text-xs"
    }, "from ", app.current_version));
  } // Installed, not active


  if (app.installed && !app.active) {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col w-full"
    }, /*#__PURE__*/React.createElement("button", {
      className: "py-auto bg-blue-300 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-400 focus:outline-none w-full flex-grow",
      "data-slug": app.slug,
      onClick: apps.activate
    }, "Activate"), /*#__PURE__*/React.createElement("button", {
      className: "py-auto bg-gray-200 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-500 hover:text-white focus:outline-none w-full flex-grow",
      "data-slug": app.slug,
      onClick: apps.uninstall
    }, "Uninstall"));
  } // Not downloaded, not installed


  if (!app.downloaded && !app.installed) {
    return /*#__PURE__*/React.createElement("button", {
      className: "py-auto bg-green-300 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-400 focus:outline-none w-full",
      "data-slug": app.slug,
      onClick: apps.download
    }, "Install");
  } // Downloaded, but not installed


  if (app.downloaded && !app.installed) {
    return /*#__PURE__*/React.createElement("button", {
      className: "py-auto bg-green-300 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-400 focus:outline-none w-full",
      "data-slug": app.slug,
      onClick: apps.install
    }, "Install");
  } // Installed, Active, No Updates


  if (app.installed && app.active && !app.hasUpdate) {
    return /*#__PURE__*/React.createElement("button", {
      className: "py-auto bg-gray-300 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400 hover:text-white focus:outline-none w-full ",
      "data-slug": app.slug,
      onClick: apps.deactivate
    }, "Deactivate");
  }
};var AppCard = function AppCard(props) {
  var app = props.app,
      showActions = props.showActions;
  return /*#__PURE__*/React.createElement("div", {
    className: "my-2 px-1 w-full lg:my-4 lg:px-4 lg:w-4/12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800 flex flex-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-grow-0 flex-shrink-0 w-20 bg-gray-100 dark:bg-gray-700 relative"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: app.icon,
    className: "absolute top-1.5 bottom-1.5 left-1.5 right-1.5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold flex-grow"
  }, app.name), /*#__PURE__*/React.createElement("span", {
    className: "inline-block text-blue-600 border border-blue-600 bg-blue-300 px-2 py-1 text-xs font-bold"
  }, app.version)), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-sm"
  }, "By ", app.author), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400"
  }, app.description)), showActions ? /*#__PURE__*/React.createElement("div", {
    className: "flex flex-grow-0 flex-shrink-0 w-24 ml-3"
  }, /*#__PURE__*/React.createElement(AppActionButtons, {
    app: app
  })) : null));
};var PluginActionButtons = function PluginActionButtons(_ref) {
  var plugin = _ref.plugin;
      _objectWithoutProperties(_ref, ["plugin"]);

  var _useContext = useContext(WebAppsContext),
      plugins = _useContext.plugins;

  if (plugin.installed && plugin.hasUpdate) {
    return /*#__PURE__*/React.createElement("button", {
      className: "py-auto bg-orange-300 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-400 focus:outline-none w-full",
      "data-slug": plugin.slug,
      onClick: plugins.update
    }, "Update", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "text-xs"
    }, "from ", plugin.current_version));
  }

  if (plugin.downloaded && !plugin.installed || plugin.installed && !plugin.state) {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col w-full"
    }, /*#__PURE__*/React.createElement("button", {
      className: "py-auto bg-blue-300 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-400 focus:outline-none w-full flex-grow",
      "data-slug": plugin.slug,
      onClick: plugins.toggle
    }, "Activate"), /*#__PURE__*/React.createElement("button", {
      className: "py-auto bg-gray-200 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-500 hover:text-white focus:outline-none w-full flex-grow",
      "data-slug": plugin.slug,
      onClick: plugins.uninstall
    }, "Uninstall"));
  }

  if (!plugin.downloaded && !plugin.installed) {
    return /*#__PURE__*/React.createElement("button", {
      className: "py-auto bg-green-300 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-400 focus:outline-none w-full",
      "data-slug": plugin.slug,
      onClick: plugins.download
    }, "Install");
  }

  if (plugin.installed && !plugin.hasUpdate) {
    return /*#__PURE__*/React.createElement("button", {
      className: "py-auto bg-gray-300 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400 hover:text-white focus:outline-none w-full ",
      "data-slug": plugin.slug,
      onClick: plugins.toggle
    }, "Deactivate");
  }
};var PluginCard = function PluginCard(props) {
  var plugin = props.plugin,
      showActions = props.showActions;
  return /*#__PURE__*/React.createElement("div", {
    className: "my-2 px-1 w-full lg:my-4 lg:px-4 lg:w-4/12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800 flex flex-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-grow-0 flex-shrink-0 w-20 bg-gray-100 dark:bg-gray-700 relative"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: plugin.icon,
    className: "absolute top-1.5 bottom-1.5 left-1.5 right-1.5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold flex-grow"
  }, plugin.name), /*#__PURE__*/React.createElement("span", {
    className: "inline-block text-blue-600 border border-blue-600 bg-blue-300 px-2 py-1 text-xs font-bold"
  }, plugin.version)), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-sm"
  }, "By ", plugin.author), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400"
  }, plugin.description)), showActions ? /*#__PURE__*/React.createElement("div", {
    className: "flex flex-grow-0 flex-shrink-0 w-24 ml-3"
  }, /*#__PURE__*/React.createElement(PluginActionButtons, {
    plugin: plugin
  })) : null));
};function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AppError = /*#__PURE__*/function (_Component) {
  _inherits(AppError, _Component);

  var _super = _createSuper(AppError);

  function AppError(props) {
    var _this;

    _classCallCheck(this, AppError);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false,
      info: '',
      error: ''
    }; // this.props.history.listen((location, action) => {
    //     if (this.state.hasError) {
    //         this.setState({
    //             hasError: false,
    //         });
    //     }
    // });

    return _this;
  }

  _createClass(AppError, [{
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
        return /*#__PURE__*/React.createElement("div", {
          className: "text-gray-700 bg-gray-200 dark:bg-gray-900 dark:text-white h-screen w-screen relative"
        }, /*#__PURE__*/React.createElement("div", {
          className: "h-full w-full flex flex-wrap justify-center content-center items-center absolute z-0"
        }, /*#__PURE__*/React.createElement("svg", {
          className: "w-full px-6 lg:px-64 fill-current text-gray-300 dark:text-gray-800",
          viewBox: "0 0 445 202",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React.createElement("path", {
          d: "M38.804 144.71c1.527 8.356 4.447 14.803 8.76 19.34 4.312 4.537 10.601 6.805 18.867 6.805 9.523 0 16.778-3.346 21.764-10.04 4.987-6.693 7.48-15.116 7.48-25.268 0-9.973-2.336-18.396-7.008-25.269-4.672-6.873-11.95-10.31-21.832-10.31-4.672 0-8.715.585-12.129 1.753-6.02 2.156-10.557 6.154-13.611 11.994l-34.5-1.617L20.34 4.15h107.678v32.614H48.103l-7.008 42.72c5.93-3.863 10.556-6.423 13.88-7.681 5.57-2.067 12.354-3.1 20.35-3.1 16.172 0 30.277 5.436 42.317 16.307 12.039 10.87 18.058 26.683 18.058 47.437 0 18.059-5.795 34.186-17.385 48.381-11.59 14.196-28.93 21.293-52.02 21.293-18.597 0-33.87-4.986-45.82-14.959C8.527 177.19 1.879 163.04.53 144.711h38.274zm155.789-43.528c0 22.46 1.842 39.643 5.525 51.547 3.684 11.905 11.23 17.857 22.64 17.857 11.411 0 18.89-5.952 22.44-17.857 3.548-11.904 5.323-29.086 5.323-51.547 0-23.54-1.775-40.97-5.324-52.29s-11.028-16.98-22.438-16.98c-11.41 0-18.957 5.66-22.64 16.98-3.684 11.32-5.526 28.75-5.526 52.29zM222.759.242c24.887 0 42.339 8.76 52.356 26.28 10.018 17.52 15.027 42.406 15.027 74.66s-5.01 57.095-15.027 74.525c-10.017 17.43-27.47 26.145-52.356 26.145-24.887 0-42.339-8.715-52.357-26.145-10.017-17.43-15.026-42.271-15.026-74.525 0-32.254 5.009-57.14 15.026-74.66C180.42 9.001 197.872.241 222.76.241zm125.332 100.94c0 22.46 1.842 39.643 5.525 51.547 3.684 11.905 11.23 17.857 22.64 17.857 11.411 0 18.89-5.952 22.44-17.857 3.548-11.904 5.323-29.086 5.323-51.547 0-23.54-1.775-40.97-5.324-52.29s-11.028-16.98-22.438-16.98c-11.41 0-18.957 5.66-22.64 16.98-3.684 11.32-5.526 28.75-5.526 52.29zM376.257.242c24.887 0 42.339 8.76 52.356 26.28 10.018 17.52 15.027 42.406 15.027 74.66s-5.01 57.095-15.027 74.525c-10.017 17.43-27.47 26.145-52.356 26.145-24.887 0-42.339-8.715-52.357-26.145-10.017-17.43-15.026-42.271-15.026-74.525 0-32.254 5.009-57.14 15.026-74.66C333.918 9.001 351.37.241 376.257.241z",
          fillRule: "nonzero"
        }))), /*#__PURE__*/React.createElement("div", {
          className: "h-full w-full flex flex-wrap justify-center content-end md:content-center items-end md:items-center relative z-10"
        }, /*#__PURE__*/React.createElement("div", {
          className: "p-6 text-center "
        }, /*#__PURE__*/React.createElement("h2", {
          className: "uppercase text-xl lg:text-5xl font-black"
        }, "Sorry, something went wrong."), /*#__PURE__*/React.createElement("p", {
          className: "mt-3 text-sm lg:text-base text-gray-900 dark:text-gray-300"
        }, this.state.error.toString()), /*#__PURE__*/React.createElement(Link$1, {
          to: "/",
          className: "inline-block mr-3 mt-6 px-4 py-2 border border-".concat(this.props.theme, "-600 dark:border-").concat(this.props.theme, "-500 bg-").concat(this.props.theme, "-600 dark:bg-").concat(this.props.theme, "-500 text-white dark:text-white hover:bg-").concat(this.props.theme, "-400 dark:hover:bg-").concat(this.props.theme, "-700 hover:border-").concat(this.props.theme, "-400 dark:hover:border-").concat(this.props.theme, "-700")
        }, "Back To Homepage"), /*#__PURE__*/React.createElement("button", {
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
  theme: propTypes.string
};
AppError.defaultProps = {
  theme: 'indigo'
}; // export default withRouter(AppError);
var returnLibrary = function returnLibrary() {
  return {
    Badge: Badge,
    Banner: Banner,
    Button: Button,
    ConfirmDeleteButton: ConfirmDeleteButton,
    ConfirmDeleteModal: ConfirmDeleteModal,
    DropDownButton: DropDownButton,
    Icon: Icon,
    InfiniteScroll: InfiniteScroll,
    Input: Input,
    Link: Link,
    Loader: Loader,
    Switch: Switch,
    Scrollbar: Scrollbar,
    Sidebar: Sidebar$1,
    SidebarWrapper: SidebarWrapper$1,
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
    AppError: AppError,
    NavigationError: NavigationError,
    CreateElement: CreateElement
  };
};

var index = returnLibrary();export default index;