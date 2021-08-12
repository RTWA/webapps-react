'use strict';var _extends=require('@babel/runtime/helpers/extends'),_defineProperty=require('@babel/runtime/helpers/defineProperty'),_objectWithoutProperties=require('@babel/runtime/helpers/objectWithoutProperties'),React=require('react'),reactRouterDom=require('react-router-dom'),_asyncToGenerator=require('@babel/runtime/helpers/asyncToGenerator'),_classCallCheck=require('@babel/runtime/helpers/classCallCheck'),_createClass=require('@babel/runtime/helpers/createClass'),_assertThisInitialized=require('@babel/runtime/helpers/assertThisInitialized'),_inherits=require('@babel/runtime/helpers/inherits'),_possibleConstructorReturn=require('@babel/runtime/helpers/possibleConstructorReturn'),_getPrototypeOf=require('@babel/runtime/helpers/getPrototypeOf'),_regeneratorRuntime=require('@babel/runtime/regenerator'),axios=require('axios'),_slicedToArray=require('@babel/runtime/helpers/slicedToArray'),_inheritsLoose=require('@babel/runtime/helpers/esm/inheritsLoose'),ReactDOM=require('react-dom'),_extends$1=require('@babel/runtime/helpers/esm/extends'),_objectWithoutPropertiesLoose=require('@babel/runtime/helpers/esm/objectWithoutPropertiesLoose'),_assertThisInitialized$1=require('@babel/runtime/helpers/esm/assertThisInitialized'),_typeof=require('@babel/runtime/helpers/typeof');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var _extends__default=/*#__PURE__*/_interopDefaultLegacy(_extends);var _defineProperty__default=/*#__PURE__*/_interopDefaultLegacy(_defineProperty);var _objectWithoutProperties__default=/*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);var React__default=/*#__PURE__*/_interopDefaultLegacy(React);var _asyncToGenerator__default=/*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);var _classCallCheck__default=/*#__PURE__*/_interopDefaultLegacy(_classCallCheck);var _createClass__default=/*#__PURE__*/_interopDefaultLegacy(_createClass);var _assertThisInitialized__default=/*#__PURE__*/_interopDefaultLegacy(_assertThisInitialized);var _inherits__default=/*#__PURE__*/_interopDefaultLegacy(_inherits);var _possibleConstructorReturn__default=/*#__PURE__*/_interopDefaultLegacy(_possibleConstructorReturn);var _getPrototypeOf__default=/*#__PURE__*/_interopDefaultLegacy(_getPrototypeOf);var _regeneratorRuntime__default=/*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);var axios__default=/*#__PURE__*/_interopDefaultLegacy(axios);var _slicedToArray__default=/*#__PURE__*/_interopDefaultLegacy(_slicedToArray);var _inheritsLoose__default=/*#__PURE__*/_interopDefaultLegacy(_inheritsLoose);var ReactDOM__default=/*#__PURE__*/_interopDefaultLegacy(ReactDOM);var _extends__default$1=/*#__PURE__*/_interopDefaultLegacy(_extends$1);var _objectWithoutPropertiesLoose__default=/*#__PURE__*/_interopDefaultLegacy(_objectWithoutPropertiesLoose);var _assertThisInitialized__default$1=/*#__PURE__*/_interopDefaultLegacy(_assertThisInitialized$1);var _typeof__default=/*#__PURE__*/_interopDefaultLegacy(_typeof);function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function createCommonjsModule(fn) {
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

var classnames$1 = createCommonjsModule(function (module) {
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
      attributes = _objectWithoutProperties__default['default'](props, ["tag", "className", "innerRef", "color", "pill", "children"]);

  var classes = classnames$1(className, 'inline-flex', 'items-center', 'justify-center', 'px-2', 'py-1', 'text-xs', 'font-bold', 'leading-none', "bg-".concat(color), pill ? 'rounded-full' : '');
  var Tag = attributes.to || attributes.href ? reactRouterDom.NavLink : tag;

  var ref = _defineProperty__default['default']({}, "".concat(typeof Tag === 'string' ? 'ref' : 'innerRef'), innerRef);

  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends__default['default']({
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
      attributes = _objectWithoutProperties__default['default'](props, ["tag", "className", "innerRef", "color", "darkColor", "children"]);

  var classes = classnames$1(className, 'w-full', 'py-2', 'px-8', 'mb-4', "bg-".concat(color), "dark:bg-".concat(darkColor));
  var Tag = attributes.to || attributes.hred ? reactRouterDom.NavLink : tag;

  var ref = _defineProperty__default['default']({}, "".concat(typeof Tag === 'string' ? 'ref' : 'innerRef'), innerRef);

  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends__default['default']({
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

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Link = function Link(props) {
  var className = props.className,
      innerRef = props.innerRef,
      active = props.active,
      href = props.href,
      onClick = props.onClick,
      disabled = props.disabled,
      rest = _objectWithoutProperties__default['default'](props, ["className", "innerRef", "active", "href", "onClick", "disabled"]);

  var to = rest ? rest.to : null;

  var click = function click(e) {
    if (!href && !to || href === '#') {
      e.preventDefault();
    }

    !disabled && onClick && onClick(e);
  };

  var classes = classnames$1(active, disabled, className);
  return to ? /*#__PURE__*/React__default['default'].createElement(reactRouterDom.NavLink, _extends__default['default']({}, rest, {
    className: classes,
    onClick: click,
    ref: innerRef
  })) : /*#__PURE__*/React__default['default'].createElement("a", _extends__default['default']({
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
}, reactRouterDom.NavLink.propTypes), {}, {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  to: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
});var AuthContext = /*#__PURE__*/React__default['default'].createContext({});var Loader = function Loader(props) {
  var className = props.className,
      style = props.style,
      attributes = _objectWithoutProperties__default['default'](props, ["className", "style"]);

  var classes = classnames$1('loader', className);
  var circleClasses = classnames$1('animate-spin', className);

  if (style === 'circle') {
    return /*#__PURE__*/React__default['default'].createElement("svg", {
      className: circleClasses,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React__default['default'].createElement("circle", {
      className: "opacity-25",
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      strokeWidth: "4"
    }), /*#__PURE__*/React__default['default'].createElement("path", {
      className: "opacity-75",
      fill: "currentColor",
      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }));
  }

  return /*#__PURE__*/React__default['default'].createElement("div", _extends__default['default']({
    className: classes
  }, attributes), /*#__PURE__*/React__default['default'].createElement("svg", {
    viewBox: "0 0 45 45",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor"
  }, /*#__PURE__*/React__default['default'].createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1 1)",
    strokeWidth: 2
  }, /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: 22,
    cy: 22,
    r: 6,
    strokeOpacity: 0
  }, /*#__PURE__*/React__default['default'].createElement("animate", {
    attributeName: "r",
    begin: "1.5s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React__default['default'].createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "1.5s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React__default['default'].createElement("animate", {
    attributeName: "stroke-width",
    begin: "1.5s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: 22,
    cy: 22,
    r: 6,
    strokeOpacity: 0
  }, /*#__PURE__*/React__default['default'].createElement("animate", {
    attributeName: "r",
    begin: "3s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React__default['default'].createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "3s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React__default['default'].createElement("animate", {
    attributeName: "stroke-width",
    begin: "3s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: 22,
    cy: 22,
    r: 8
  }, /*#__PURE__*/React__default['default'].createElement("animate", {
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
};function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf__default['default'](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default['default'](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default['default'](this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
axios__default['default'].defaults.withCredentials = true;

var Auth = /*#__PURE__*/function (_Component) {
  _inherits__default['default'](Auth, _Component);

  var _super = _createSuper$2(Auth);

  function Auth(props) {
    var _this;

    _classCallCheck__default['default'](this, Auth);

    _this = _super.call(this, props);

    _defineProperty__default['default'](_assertThisInitialized__default['default'](_this), "setPreference", function (preference, value) {
      var preferences = _this.state.preferences;
      preferences[preference] = value;

      _this.setState({
        preferences: preferences
      });

      var formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('preference', preference);
      formData.append('value', value);
      axios__default['default'].post('/api/user/preference', formData)["catch"](function (error) {
        // TODO: Handle errors
        console.log(error);
      });
    });

    _this.state = {
      user: null,
      authenticated: null,
      preferences: {}
    };
    _this.signIn = _this.signIn.bind(_assertThisInitialized__default['default'](_this));
    _this.signOut = _this.signOut.bind(_assertThisInitialized__default['default'](_this));
    _this.setUser = _this.setUser.bind(_assertThisInitialized__default['default'](_this));
    _this.checkAuthentication = _this.checkAuthentication.bind(_assertThisInitialized__default['default'](_this));
    _this.setPreference = _this.setPreference.bind(_assertThisInitialized__default['default'](_this));
    return _this;
  }

  _createClass__default['default'](Auth, [{
    key: "signIn",
    value: function signIn(username, password) {
      var _this2 = this;

      return new Promise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee(resolve, reject) {
          var _yield$axios$get, data, preferences;

          return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return axios__default['default'].get('/sanctum/csrf_cookie');

                case 3:
                  _context.next = 5;
                  return axios__default['default'].post('/login', {
                    username: username,
                    password: password
                  });

                case 5:
                  _context.next = 7;
                  return axios__default['default'].get('/api/user');

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
        var _ref2 = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee2(resolve, reject) {
          return _regeneratorRuntime__default['default'].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return axios__default['default'].post('/api/logout');

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
        var _ref3 = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee3(resolve, reject) {
          var _yield$axios$get2, data;

          return _regeneratorRuntime__default['default'].wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(_this4.state.authenticated === null)) {
                    _context3.next = 20;
                    break;
                  }

                  _context3.prev = 1;
                  _context3.next = 4;
                  return axios__default['default'].get('/api/user');

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
      if (this.state.authenticated !== null) return /*#__PURE__*/React__default['default'].createElement(AuthContext.Provider, {
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
      });else return /*#__PURE__*/React__default['default'].createElement(Loader, null);
    }
  }]);

  return Auth;
}(React.Component);

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
    return /*#__PURE__*/React__default['default'].createElement(AuthContext.Consumer, null, function (context) {
      invariant(context, "You should not use <".concat(displayName, " /> outside a <Auth>"));
      return /*#__PURE__*/React__default['default'].createElement(Component, _extends__default['default']({}, props, context));
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
    const [defaultValueState] = React.useState(() => {
        const isCallable = (value) => typeof value === 'function';
        return isCallable(defaultValue) ? defaultValue() : defaultValue;
    });
    const getDefaultState = React.useCallback(() => {
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
    const [state, setState] = React.useState(getDefaultState);
    const updateValue = React.useMemo(() => {
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
    React.useEffect(() => {
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
    const isFirstRender = React.useRef(true);
    React.useEffect(() => {
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
        const setValueAll = React.useMemo(() => {
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
        React.useEffect(() => {
            setValueFunctions.push(setValue);
            return () => void setValueFunctions.splice(setValueFunctions.indexOf(setValue), 1);
        }, [setValue]);
        return [value, setValueAll, isPersistent];
    };
}/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? process.env.NODE_ENV === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};
var removeLabel = function removeLabel(context, content) {
  if (context === 1 && // charcode for l
  content.charCodeAt(0) === 108 && // charcode for b
  content.charCodeAt(2) === 98 // this ignores label
  ) {
      return '';
    }
};

var isBrowser$2 = typeof document !== 'undefined';
var rootServerStylisCache = {};
var getServerStylisCache = isBrowser$2 ? undefined : weakMemoize(function () {
  var getCache = weakMemoize(function () {
    return {};
  });
  var prefixTrueCache = {};
  var prefixFalseCache = {};
  return function (prefix) {
    if (prefix === undefined || prefix === true) {
      return prefixTrueCache;
    }

    if (prefix === false) {
      return prefixFalseCache;
    }

    return getCache(prefix);
  };
});

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new stylis_min(stylisOptions);

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  if (isBrowser$2) {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  if (isBrowser$2) {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if (process.env.NODE_ENV !== 'production' && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  } else {
    stylis.use(removeLabel);
    var serverStylisCache = rootServerStylisCache;

    if (options.stylisPlugins || options.prefix !== undefined) {
      stylis.use(options.stylisPlugins); // $FlowFixMe

      serverStylisCache = getServerStylisCache(options.stylisPlugins || rootServerStylisCache)(options.prefix);
    }

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = stylis(selector, serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        if ( // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        process.env.NODE_ENV === 'development' && serialized.map !== undefined) {
          return rules + serialized.map;
        }

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  if (process.env.NODE_ENV !== 'production') {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};var isBrowser$1 = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$1 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      if (!isBrowser$1 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$1 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (process.env.NODE_ENV !== 'production' && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (process.env.NODE_ENV !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};var isBrowser = typeof document !== 'undefined';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /*#__PURE__*/React.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? createCache() : null);
var ThemeContext = /*#__PURE__*/React.createContext({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return /*#__PURE__*/React.createElement(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return /*#__PURE__*/React.forwardRef(render);
};

if (!isBrowser) {
  var BasicProvider = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose__default['default'](BasicProvider, _React$Component);

    function BasicProvider(props, context, updater) {
      var _this;

      _this = _React$Component.call(this, props, context, updater) || this;
      _this.state = {
        value: createCache()
      };
      return _this;
    }

    var _proto = BasicProvider.prototype;

    _proto.render = function render() {
      return /*#__PURE__*/React.createElement(EmotionCacheContext.Provider, this.state, this.props.children(this.state.value));
    };

    return BasicProvider;
  }(React.Component);

  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      return /*#__PURE__*/React.createElement(EmotionCacheContext.Consumer, null, function (context) {
        if (context === null) {
          return /*#__PURE__*/React.createElement(BasicProvider, null, function (newContext) {
            return func(props, newContext);
          });
        } else {
          return func(props, context);
        }
      });
    };
  };
}

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (process.env.NODE_ENV !== 'production' && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // TODO: check if this still works with all of those different JSX functions

  if (process.env.NODE_ENV !== 'production') {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  return newProps;
};

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles);

  if (process.env.NODE_ENV !== 'production' && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = insertStyles(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && (process.env.NODE_ENV === 'production' || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/React.createElement(type, newProps);

  if (!isBrowser && rules !== undefined) {
    var _ref;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", (_ref = {}, _ref["data-emotion-" + cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
  }

  return ele;
}; // eslint-disable-next-line no-undef


var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  if (typeof props.css === 'function') {
    return /*#__PURE__*/React.createElement(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (process.env.NODE_ENV !== 'production') {
  Emotion.displayName = 'EmotionCssPropInternal';
}function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return React.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return React.createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global = /* #__PURE__ */withEmotionCache(function (props, cache) {
  if (process.env.NODE_ENV !== 'production' && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return /*#__PURE__*/React.createElement(ThemeContext.Consumer, null, function (theme) {
      var serialized = serializeStyles([styles(theme)]);
      return /*#__PURE__*/React.createElement(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = serializeStyles([styles]);
  return /*#__PURE__*/React.createElement(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose__default['default'](InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new StyleSheet({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      insertStyles(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {
    if (!isBrowser) {
      var serialized = this.props.serialized;
      var serializedNames = serialized.name;
      var serializedStyles = serialized.styles;
      var next = serialized.next;

      while (next !== undefined) {
        serializedNames += ' ' + next.name;
        serializedStyles += next.styles;
        next = next.next;
      }

      var shouldCache = this.props.cache.compat === true;
      var rules = this.props.cache.insert("", {
        name: serializedNames,
        styles: serializedStyles
      }, this.sheet, shouldCache);

      if (!shouldCache) {
        var _ref;

        return /*#__PURE__*/React.createElement("style", (_ref = {}, _ref["data-emotion-" + this.props.cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = this.props.cache.sheet.nonce, _ref));
      }
    }

    return null;
  };

  return InnerGlobal;
}(React.Component);

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return /*#__PURE__*/React.createElement(ThemeContext.Consumer, null, function (theme) {
    var rules = '';
    var serializedHashes = '';
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && process.env.NODE_ENV !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = serializeStyles(args, context.registered);

      if (isBrowser) {
        insertStyles(context, serialized, false);
      } else {
        var res = insertStyles(context, serialized, false);

        if (res !== undefined) {
          rules += res;
        }
      }

      if (!isBrowser) {
        serializedHashes += " " + serialized.name;
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && process.env.NODE_ENV !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    if (!isBrowser && rules.length !== 0) {
      var _ref;

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedHashes.substring(1), _ref.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref.nonce = context.sheet.nonce, _ref)), ele);
    }

    return ele;
  });
});var core_esm=/*#__PURE__*/Object.freeze({__proto__:null,ClassNames: ClassNames,Global: Global,createElement: jsx,jsx: jsx,keyframes: keyframes,CacheProvider: CacheProvider,ThemeContext: ThemeContext,get withEmotionCache(){return withEmotionCache},css: css});/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass$1(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}var config = {
  disabled: false
};var timeoutsShape = process.env.NODE_ENV !== 'production' ? propTypes.oneOfType([propTypes.number, propTypes.shape({
  enter: propTypes.number,
  exit: propTypes.number,
  appear: propTypes.number
}).isRequired]) : null;
var classNamesShape = process.env.NODE_ENV !== 'production' ? propTypes.oneOfType([propTypes.string, propTypes.shape({
  enter: propTypes.string,
  exit: propTypes.string,
  active: propTypes.string
}), propTypes.shape({
  enter: propTypes.string,
  enterDone: propTypes.string,
  enterActive: propTypes.string,
  exit: propTypes.string,
  exitDone: propTypes.string,
  exitActive: propTypes.string
})]) : null;var TransitionGroupContext = React__default['default'].createContext(null);var UNMOUNTED = 'unmounted';
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
  _inheritsLoose__default['default'](Transition, _React$Component);

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

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM__default['default'].findDOMNode(this), appearing],
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
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM__default['default'].findDOMNode(this); // no exit animation skip right to EXITED

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
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default['default'].findDOMNode(this);
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
        var childProps = _objectWithoutPropertiesLoose__default['default'](_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React__default['default'].createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React__default['default'].cloneElement(React__default['default'].Children.only(children), childProps))
    );
  };

  return Transition;
}(React__default['default'].Component);

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
  nodeRef: propTypes.shape({
    current: typeof Element === 'undefined' ? propTypes.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return propTypes.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
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
  children: propTypes.oneOfType([propTypes.func.isRequired, propTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: propTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: propTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: propTypes.bool,

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
  appear: propTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: propTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: propTypes.bool,

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
  addEndListener: propTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: propTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: propTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: propTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: propTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: propTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: propTypes.func
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
Transition.EXITING = EXITING;var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass$1(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose__default['default'](CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props;
        _this$props.classNames;
        var props = _objectWithoutPropertiesLoose__default['default'](_this$props, ["classNames"]);

    return /*#__PURE__*/React__default['default'].createElement(Transition, _extends__default$1['default']({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(React__default['default'].Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends__default$1['default']({}, Transition.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: propTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: propTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: propTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: propTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: propTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: propTypes.func
}) : {};/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && React.isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) React.Children.map(children, function (c) {
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
    return React.cloneElement(child, {
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
    if (!React.isValidElement(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = React.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = React.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = React.cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && React.isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = React.cloneElement(child, {
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
  _inheritsLoose__default['default'](TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized__default$1['default'](_this)); // Initial children should all be entering, dependent on appear


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
        var children = _extends__default$1['default']({}, state.children);

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
        props = _objectWithoutPropertiesLoose__default['default'](_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/React__default['default'].createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/React__default['default'].createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React__default['default'].createElement(Component, props, children));
  };

  return TransitionGroup;
}(React__default['default'].Component);

TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: propTypes.any,

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
  children: propTypes.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: propTypes.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: propTypes.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: propTypes.bool,

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
  childFactory: propTypes.func
} : {};
TransitionGroup.defaultProps = defaultProps;/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose__default['default'](ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = React__default['default'].Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : ReactDOM__default['default'].findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose__default['default'](_this$props, ["children", "in"]);

    var _React$Children$toArr = React__default['default'].Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/React__default['default'].createElement(TransitionGroup, props, inProp ? React__default['default'].cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : React__default['default'].cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(React__default['default'].Component);

ReplaceTransition.propTypes = process.env.NODE_ENV !== "production" ? {
  in: propTypes.bool.isRequired,
  children: function children(props, propName) {
    if (React__default['default'].Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : {};var _leaveRenders, _enterRenders;

function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (React__default['default'].isValidElement(oldChildren) && React__default['default'].isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return React__default['default'].cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, React__default['default'].cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return React__default['default'].cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(ENTERED, React__default['default'].cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [React__default['default'].cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(ENTERED, React__default['default'].cloneElement(children, {
        in: true
      }));
    })
  }), React__default['default'].cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose__default['default'](SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: ENTERED,
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === ENTERING && props.mode === modes.in) {
      return {
        status: ENTERING
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: EXITING
      };
    }

    return {
      current: React__default['default'].cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case ENTERING:
        component = enterRenders[mode](data);
        break;

      case EXITING:
        component = leaveRenders[mode](data);
        break;

      case ENTERED:
        component = current;
    }

    return /*#__PURE__*/React__default['default'].createElement(TransitionGroupContext.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(React__default['default'].Component);

SwitchTransition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: propTypes.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: propTypes.oneOfType([propTypes.element.isRequired])
} : {};
SwitchTransition.defaultProps = {
  mode: modes.out
};var esm=/*#__PURE__*/Object.freeze({__proto__:null,CSSTransition: CSSTransition,ReplaceTransition: ReplaceTransition,SwitchTransition: SwitchTransition,TransitionGroup: TransitionGroup,Transition: Transition,config: config});var icons = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseIcon = exports.InfoIcon = exports.FlameIcon = exports.CheckIcon = exports.AlertIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var _react2 = _interopRequireDefault(React__default['default']);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDefaultProps(width) {
  return {
    'aria-hidden': true,
    height: 16,
    width: width,
    viewBox: '0 0 ' + width + ' 16',
    style: {
      display: 'inline-block',
      verticalAlign: 'text-top',
      fill: 'currentColor'
    }
  };
}

exports.AlertIcon = function AlertIcon(props) {
  return _react2.default.createElement(
    'svg',
    _extends({}, getDefaultProps(16), props),
    _react2.default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z'
    })
  );
};
exports.CheckIcon = function CheckIcon(props) {
  return _react2.default.createElement(
    'svg',
    _extends({}, getDefaultProps(12), props),
    _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M12 5.5l-8 8-4-4L1.5 8 4 10.5 10.5 4 12 5.5z' })
  );
};
exports.FlameIcon = function FlameIcon(props) {
  return _react2.default.createElement(
    'svg',
    _extends({}, getDefaultProps(12), props),
    _react2.default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M5.05.01c.81 2.17.41 3.38-.52 4.31C3.55 5.37 1.98 6.15.9 7.68c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.01 8.68 2.15 5.05.02L5.03 0l.02.01z'
    })
  );
};
exports.InfoIcon = function InfoIcon(props) {
  return _react2.default.createElement(
    'svg',
    _extends({}, getDefaultProps(14), props),
    _react2.default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M6.3 5.71a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 8.01c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V8v.01zM7 2.32C3.86 2.32 1.3 4.86 1.3 8c0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 1c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z'
    })
  );
};
exports.CloseIcon = function CloseIcon(props) {
  return _react2.default.createElement(
    'svg',
    _extends({}, getDefaultProps(14), props),
    _react2.default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z'
    })
  );
};
});var colors = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Reds
exports.R50 = '#FFEBE6';
exports.R75 = '#FFBDAD';
exports.R100 = '#FF8F73';
exports.R200 = '#FF7452';
exports.R300 = '#FF5630';
exports.R400 = '#DE350B';
exports.R500 = '#BF2600';

// Yellows
exports.Y50 = '#FFFAE6';
exports.Y75 = '#FFF0B3';
exports.Y100 = '#FFE380';
exports.Y200 = '#FFC400';
exports.Y300 = '#FFAB00';
exports.Y400 = '#FF991F';
exports.Y500 = '#FF8B00';

// Greens
exports.G50 = '#E3FCEF';
exports.G75 = '#ABF5D1';
exports.G100 = '#79F2C0';
exports.G200 = '#57D9A3';
exports.G300 = '#36B37E';
exports.G400 = '#00875A';
exports.G500 = '#006644';

// Blues
exports.B50 = '#DEEBFF';
exports.B75 = '#B3D4FF';
exports.B100 = '#4C9AFF';
exports.B200 = '#2684FF';
exports.B300 = '#0065FF';
exports.B400 = '#0052CC';
exports.B500 = '#0747A6';

// Purples
exports.P50 = '#EAE6FF';
exports.P75 = '#C0B6F2';
exports.P100 = '#998DD9';
exports.P200 = '#8777D9';
exports.P300 = '#6554C0';
exports.P400 = '#5243AA';
exports.P500 = '#403294';

// Teals
exports.T50 = '#E6FCFF';
exports.T75 = '#B3F5FF';
exports.T100 = '#79E2F2';
exports.T200 = '#00C7E6';
exports.T300 = '#00B8D9';
exports.T400 = '#00A3BF';
exports.T500 = '#008DA6';

// Neutrals
exports.N0 = '#FFFFFF';
exports.N10 = '#FAFBFC';
exports.N20 = '#F4F5F7';
exports.N30 = '#EBECF0';
exports.N40 = '#DFE1E6';
exports.N50 = '#C1C7D0';
exports.N60 = '#B3BAC5';
exports.N70 = '#A5ADBA';
exports.N80 = '#97A0AF';
exports.N90 = '#8993A4';
exports.N100 = '#7A869A';
exports.N200 = '#6B778C';
exports.N300 = '#5E6C84';
exports.N400 = '#505F79';
exports.N500 = '#42526E';
exports.N600 = '#344563';
exports.N700 = '#253858';
exports.N800 = '#172B4D';

// ATTENTION: update the tints if you update this
exports.N900 = '#091E42';

// Each tint is made of N900 and an alpha channel
exports.N10A = 'rgba(9, 30, 66, 0.02)';
exports.N20A = 'rgba(9, 30, 66, 0.04)';
exports.N30A = 'rgba(9, 30, 66, 0.08)';
exports.N40A = 'rgba(9, 30, 66, 0.13)';
exports.N50A = 'rgba(9, 30, 66, 0.25)';
exports.N60A = 'rgba(9, 30, 66, 0.31)';
exports.N70A = 'rgba(9, 30, 66, 0.36)';
exports.N80A = 'rgba(9, 30, 66, 0.42)';
exports.N90A = 'rgba(9, 30, 66, 0.48)';
exports.N100A = 'rgba(9, 30, 66, 0.54)';
exports.N200A = 'rgba(9, 30, 66, 0.60)';
exports.N300A = 'rgba(9, 30, 66, 0.66)';
exports.N400A = 'rgba(9, 30, 66, 0.71)';
exports.N500A = 'rgba(9, 30, 66, 0.77)';
exports.N600A = 'rgba(9, 30, 66, 0.82)';
exports.N700A = 'rgba(9, 30, 66, 0.89)';
exports.N800A = 'rgba(9, 30, 66, 0.95)';
});var utils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateUEID = generateUEID;
exports.NOOP = function NOOP() {};
function generateUEID() {
  var first = Math.random() * 46656 | 0;
  var second = Math.random() * 46656 | 0;
  first = ('000' + first.toString(36)).slice(-3);
  second = ('000' + second.toString(36)).slice(-3);
  return first + second;
}
});var _core = /*@__PURE__*/getAugmentedNamespace(core_esm);var ToastElement_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultToast = exports.shrinkKeyframes = exports.toastWidth = exports.gutter = exports.borderRadius = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['from { height: 100%; } to { height: 0% }'], ['from { height: 100%; } to { height: 0% }']);



_interopRequireDefault(React__default['default']);







var colors$1 = _interopRequireWildcard(colors);



function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/** @jsx jsx */

// common
var borderRadius = exports.borderRadius = 4;
var gutter = exports.gutter = 8;
var toastWidth = exports.toastWidth = 360;
var shrinkKeyframes = exports.shrinkKeyframes = (0, _core.keyframes)(_templateObject);

// a11y helper
var A11yText = function A11yText(_ref) {
  var Tag = _ref.tag,
      props = _objectWithoutProperties(_ref, ['tag']);

  return (0, _core.jsx)(Tag, _extends({
    css: {
      border: 0,
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: 1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: 1
    }
  }, props));
};
A11yText.defaultProps = {
  tag: 'span'
};

// default appearances

var appearances = {
  success: {
    icon: icons.CheckIcon,
    text: colors$1.G500,
    fg: colors$1.G300,
    bg: colors$1.G50
  },
  error: {
    icon: icons.FlameIcon,
    text: colors$1.R500,
    fg: colors$1.R300,
    bg: colors$1.R50
  },
  warning: {
    icon: icons.AlertIcon,
    text: colors$1.Y500,
    fg: colors$1.Y300,
    bg: colors$1.Y50
  },
  info: {
    icon: icons.InfoIcon,
    text: colors$1.N400,
    fg: colors$1.B200,
    bg: 'white'
  }
};


var Button = function Button(props) {
  return (0, _core.jsx)('div', _extends({
    role: 'button',
    className: 'react-toast-notifications__toast__dismiss-button',
    css: {
      cursor: 'pointer',
      flexShrink: 0,
      opacity: 0.5,
      padding: gutter + 'px ' + gutter * 1.5 + 'px',
      transition: 'opacity 150ms',

      ':hover': { opacity: 1 }
    }
  }, props));
};

var Content = function Content(props) {
  return (0, _core.jsx)('div', _extends({
    className: 'react-toast-notifications__toast__content',
    css: {
      flexGrow: 1,
      fontSize: 14,
      lineHeight: 1.4,
      minHeight: 40,
      padding: gutter + 'px ' + gutter * 1.5 + 'px'
    }
  }, props));
};

// NOTE: invoke animation when NOT `autoDismiss` with opacity of 0 to avoid a
// paint bug in FireFox.
// https://bugzilla.mozilla.org/show_bug.cgi?id=625289
var Countdown = function Countdown(_ref2) {
  var autoDismissTimeout = _ref2.autoDismissTimeout,
      opacity = _ref2.opacity,
      isRunning = _ref2.isRunning,
      props = _objectWithoutProperties(_ref2, ['autoDismissTimeout', 'opacity', 'isRunning']);

  return (0, _core.jsx)('div', _extends({
    className: 'react-toast-notifications__toast__countdown',
    css: {
      animation: shrinkKeyframes + ' ' + autoDismissTimeout + 'ms linear',
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

var Icon = function Icon(_ref3) {
  var appearance = _ref3.appearance,
      autoDismiss = _ref3.autoDismiss,
      autoDismissTimeout = _ref3.autoDismissTimeout,
      isRunning = _ref3.isRunning;

  var meta = appearances[appearance];
  var Glyph = meta.icon;

  return (0, _core.jsx)(
    'div',
    {
      className: 'react-toast-notifications__toast__icon-wrapper',
      css: {
        backgroundColor: meta.fg,
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        color: meta.bg,
        flexShrink: 0,
        paddingBottom: gutter,
        paddingTop: gutter,
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        width: 30
      }
    },
    (0, _core.jsx)(Countdown, {
      opacity: autoDismiss ? 1 : 0,
      autoDismissTimeout: autoDismissTimeout,
      isRunning: isRunning
    }),
    (0, _core.jsx)(Glyph, {
      className: 'react-toast-notifications__toast__icon',
      css: { position: 'relative', zIndex: 1 }
    })
  );
};

// Transitions
// ------------------------------

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
    entering: { transform: getTranslate(placement) },
    entered: { transform: 'translate3d(0,0,0)' },
    exiting: { transform: 'scale(0.66)', opacity: 0 },
    exited: { transform: 'scale(0.66)', opacity: 0 }
  };
};

var ToastElement = function ToastElement(_ref4) {
  var appearance = _ref4.appearance,
      placement = _ref4.placement,
      transitionDuration = _ref4.transitionDuration,
      transitionState = _ref4.transitionState,
      props = _objectWithoutProperties(_ref4, ['appearance', 'placement', 'transitionDuration', 'transitionState']);

  var _useState = (0, React__default['default'].useState)('auto'),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var elementRef = (0, React__default['default'].useRef)(null);

  (0, React__default['default'].useEffect)(function () {
    if (transitionState === 'entered') {
      var el = elementRef.current;
      setHeight(el.offsetHeight + gutter);
    }
    if (transitionState === 'exiting') {
      setHeight(0);
    }
  }, [transitionState]);

  return (0, _core.jsx)(
    'div',
    {
      ref: elementRef,
      style: { height: height },
      css: {
        transition: 'height ' + (transitionDuration - 100) + 'ms 100ms'
      }
    },
    (0, _core.jsx)('div', _extends({
      className: 'react-toast-notifications__toast react-toast-notifications__toast--' + appearance,
      css: _extends({
        backgroundColor: appearances[appearance].bg,
        borderRadius: borderRadius,
        boxShadow: '0 3px 8px rgba(0, 0, 0, 0.175)',
        color: appearances[appearance].text,
        display: 'flex',
        marginBottom: gutter,
        maxWidth: '100%',
        transition: 'transform ' + transitionDuration + 'ms cubic-bezier(0.2, 0, 0, 1), opacity ' + transitionDuration + 'ms',
        width: toastWidth
      }, toastStates(placement)[transitionState])
    }, props))
  );
};

// ==============================
// DefaultToast
// ==============================

var DefaultToast = function DefaultToast(_ref5) {
  var _ref5$appearance = _ref5.appearance,
      appearance = _ref5$appearance === undefined ? 'info' : _ref5$appearance,
      autoDismiss = _ref5.autoDismiss,
      autoDismissTimeout = _ref5.autoDismissTimeout,
      children = _ref5.children,
      isRunning = _ref5.isRunning,
      onDismiss = _ref5.onDismiss,
      placement = _ref5.placement,
      transitionDuration = _ref5.transitionDuration,
      transitionState = _ref5.transitionState,
      onMouseEnter = _ref5.onMouseEnter,
      onMouseLeave = _ref5.onMouseLeave,
      otherProps = _objectWithoutProperties(_ref5, ['appearance', 'autoDismiss', 'autoDismissTimeout', 'children', 'isRunning', 'onDismiss', 'placement', 'transitionDuration', 'transitionState', 'onMouseEnter', 'onMouseLeave']);

  return (0, _core.jsx)(
    ToastElement,
    _extends({
      appearance: appearance,
      placement: placement,
      transitionState: transitionState,
      transitionDuration: transitionDuration,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }, otherProps),
    (0, _core.jsx)(Icon, {
      appearance: appearance,
      autoDismiss: autoDismiss,
      autoDismissTimeout: autoDismissTimeout,
      isRunning: isRunning
    }),
    (0, _core.jsx)(
      Content,
      null,
      children
    ),
    onDismiss ? (0, _core.jsx)(
      Button,
      { onClick: onDismiss },
      (0, _core.jsx)(icons.CloseIcon, { className: 'react-toast-notifications__toast__dismiss-icon' }),
      (0, _core.jsx)(
        A11yText,
        { className: 'react-toast-notifications__toast__dismiss-text' },
        'Close'
      )
    ) : null
  );
};

exports.DefaultToast = DefaultToast;
DefaultToast.defaultProps = {
  onDismiss: utils.NOOP
};
});var _reactTransitionGroup = /*@__PURE__*/getAugmentedNamespace(esm);var ToastContainer_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastContainer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





_interopRequireDefault(React__default['default']);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
/** @jsx jsx */

var placements = {
  'top-left': { top: 0, left: 0 },
  'top-center': { top: 0, left: '50%', transform: 'translateX(-50%)' },
  'top-right': { top: 0, right: 0 },
  'bottom-left': { bottom: 0, left: 0 },
  'bottom-center': { bottom: 0, left: '50%', transform: 'translateX(-50%)' },
  'bottom-right': { bottom: 0, right: 0 }
};

var ToastContainer = function ToastContainer(_ref) {
  var hasToasts = _ref.hasToasts,
      placement = _ref.placement,
      props = _objectWithoutProperties(_ref, ['hasToasts', 'placement']);

  return (0, _core.jsx)('div', _extends({
    className: 'react-toast-notifications__container',
    css: _extends({
      boxSizing: 'border-box',
      maxHeight: '100%',
      maxWidth: '100%',
      overflow: 'hidden',
      padding: ToastElement_1.gutter,
      pointerEvents: hasToasts ? null : 'none',
      position: 'fixed',
      zIndex: 1000
    }, placements[placement])
  }, props));
};
exports.ToastContainer = ToastContainer;
});var ToastController_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastController = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default['default']);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

({
  clear: utils.NOOP,
  pause: utils.NOOP,
  resume: utils.NOOP
});

function Timer(callback, delay) {
  var timerId = void 0;
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

var ToastController = exports.ToastController = function (_Component) {
  _inherits(ToastController, _Component);

  function ToastController() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToastController);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToastController.__proto__ || Object.getPrototypeOf(ToastController)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isRunning: Boolean(_this.props.autoDismiss)
    }, _this.startTimer = function () {
      var _this$props = _this.props,
          autoDismiss = _this$props.autoDismiss,
          autoDismissTimeout = _this$props.autoDismissTimeout,
          onDismiss = _this$props.onDismiss;


      if (!autoDismiss) return;

      _this.setState({ isRunning: true });
      _this.timeout = new Timer(onDismiss, autoDismissTimeout);
    }, _this.clearTimer = function () {
      if (_this.timeout) _this.timeout.clear();
    }, _this.onMouseEnter = function () {
      _this.setState({ isRunning: false }, function () {
        if (_this.timeout) _this.timeout.pause();
      });
    }, _this.onMouseLeave = function () {
      _this.setState({ isRunning: true }, function () {
        if (_this.timeout) _this.timeout.resume();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToastController, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startTimer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.autoDismiss !== this.props.autoDismiss) {
        var startOrClear = this.props.autoDismiss ? this.startTimer : this.clearTimer;

        startOrClear();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearTimer();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoDismiss = _props.autoDismiss,
          autoDismissTimeout = _props.autoDismissTimeout,
          Toast = _props.component,
          props = _objectWithoutProperties(_props, ['autoDismiss', 'autoDismissTimeout', 'component']);

      var isRunning = this.state.isRunning;

      // NOTE: conditions here so methods can be clean

      var handleMouseEnter = autoDismiss ? this.onMouseEnter : utils.NOOP;
      var handleMouseLeave = autoDismiss ? this.onMouseLeave : utils.NOOP;

      return _react2.default.createElement(Toast, _extends({
        autoDismiss: autoDismiss,
        autoDismissTimeout: autoDismissTimeout,
        isRunning: isRunning,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave
      }, props));
    }
  }]);

  return ToastController;
}(React__default['default'].Component);

ToastController.defaultProps = {
  autoDismiss: false
};
});var ToastProvider_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToasts = exports.withToastManager = exports.ToastConsumer = exports.ToastProvider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default['default']);













function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultComponents = { Toast: ToastElement_1.DefaultToast, ToastContainer: ToastContainer_1.ToastContainer };

// $FlowFixMe `createContext`
var ToastContext = _react2.default.createContext();
var Consumer = ToastContext.Consumer,
    Provider = ToastContext.Provider;


var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// Provider
// ==============================

var ToastProvider = exports.ToastProvider = function (_Component) {
  _inherits(ToastProvider, _Component);

  function ToastProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToastProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToastProvider.__proto__ || Object.getPrototypeOf(ToastProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = { toasts: [] }, _this.has = function (id) {
      if (!_this.state.toasts.length) {
        return false;
      }

      return Boolean(_this.state.toasts.filter(function (t) {
        return t.id === id;
      }).length);
    }, _this.onDismiss = function (id) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : utils.NOOP;
      return function () {
        cb(id);
        _this.remove(id);
      };
    }, _this.add = function (content) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : utils.NOOP;

      var id = options.id ? options.id : (0, utils.generateUEID)();
      var callback = function callback() {
        return cb(id);
      };

      // bail if a toast exists with this ID
      if (_this.has(id)) {
        return;
      }

      // update the toast stack
      _this.setState(function (state) {
        var newToast = _extends({ content: content, id: id }, options);
        var toasts = _this.props.newestOnTop ? [newToast].concat(_toConsumableArray(state.toasts)) : [].concat(_toConsumableArray(state.toasts), [newToast]);

        return { toasts: toasts };
      }, callback);

      // consumer may want to do something with the generated ID (and not use the callback)
      return id;
    }, _this.remove = function (id) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : utils.NOOP;

      var callback = function callback() {
        return cb(id);
      };

      // bail if NO toasts exists with this ID
      if (!_this.has(id)) {
        return;
      }

      _this.setState(function (state) {
        var toasts = state.toasts.filter(function (t) {
          return t.id !== id;
        });
        return { toasts: toasts };
      }, callback);
    }, _this.removeAll = function () {
      if (!_this.state.toasts.length) {
        return;
      }

      _this.state.toasts.forEach(function (t) {
        return _this.remove(t.id);
      });
    }, _this.update = function (id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : utils.NOOP;

      var callback = function callback() {
        return cb(id);
      };

      // bail if NO toasts exists with this ID
      if (!_this.has(id)) {
        return;
      }

      // update the toast stack
      _this.setState(function (state) {
        var old = state.toasts;
        var i = old.findIndex(function (t) {
          return t.id === id;
        });
        var updatedToast = _extends({}, old[i], options);
        var toasts = [].concat(_toConsumableArray(old.slice(0, i)), [updatedToast], _toConsumableArray(old.slice(i + 1)));

        return { toasts: toasts };
      }, callback);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Internal Helpers
  // ------------------------------

  // Public API
  // ------------------------------

  _createClass(ToastProvider, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          inheritedAutoDismiss = _props.autoDismiss,
          autoDismissTimeout = _props.autoDismissTimeout,
          children = _props.children,
          components = _props.components,
          placement = _props.placement,
          portalTargetSelector = _props.portalTargetSelector,
          transitionDuration = _props.transitionDuration;

      var _defaultComponents$co = _extends({}, defaultComponents, components),
          Toast = _defaultComponents$co.Toast,
          ToastContainer = _defaultComponents$co.ToastContainer;

      var add = this.add,
          remove = this.remove,
          removeAll = this.removeAll,
          update = this.update;

      var toasts = Object.freeze(this.state.toasts);

      var hasToasts = Boolean(toasts.length);
      var portalTarget = canUseDOM ? portalTargetSelector ? document.querySelector(portalTargetSelector) : document.body : null; // appease flow

      return _react2.default.createElement(
        Provider,
        { value: { add: add, remove: remove, removeAll: removeAll, update: update, toasts: toasts } },
        children,
        portalTarget ? (0, ReactDOM__default['default'].createPortal)(_react2.default.createElement(
          ToastContainer,
          { placement: placement, hasToasts: hasToasts },
          _react2.default.createElement(
            _reactTransitionGroup.TransitionGroup,
            { component: null },
            toasts.map(function (_ref2) {
              var appearance = _ref2.appearance,
                  autoDismiss = _ref2.autoDismiss,
                  content = _ref2.content,
                  id = _ref2.id,
                  onDismiss = _ref2.onDismiss,
                  unknownConsumerProps = _objectWithoutProperties(_ref2, ['appearance', 'autoDismiss', 'content', 'id', 'onDismiss']);

              return _react2.default.createElement(
                _reactTransitionGroup.Transition,
                {
                  appear: true,
                  key: id,
                  mountOnEnter: true,
                  timeout: transitionDuration,
                  unmountOnExit: true
                },
                function (transitionState) {
                  return _react2.default.createElement(
                    ToastController_1.ToastController,
                    _extends({
                      appearance: appearance,
                      autoDismiss: autoDismiss !== undefined ? autoDismiss : inheritedAutoDismiss,
                      autoDismissTimeout: autoDismissTimeout,
                      component: Toast,
                      key: id,
                      onDismiss: _this2.onDismiss(id, onDismiss),
                      placement: placement,
                      transitionDuration: transitionDuration,
                      transitionState: transitionState
                    }, unknownConsumerProps),
                    content
                  );
                }
              );
            })
          )
        ), portalTarget) : _react2.default.createElement(ToastContainer, { placement: placement, hasToasts: hasToasts }) // keep ReactDOM.hydrate happy

      );
    }
  }]);

  return ToastProvider;
}(React__default['default'].Component);

ToastProvider.defaultProps = {
  autoDismiss: false,
  autoDismissTimeout: 5000,
  components: defaultComponents,
  newestOnTop: false,
  placement: 'top-right',
  transitionDuration: 220
};
var ToastConsumer = exports.ToastConsumer = function ToastConsumer(_ref3) {
  var children = _ref3.children;
  return _react2.default.createElement(
    Consumer,
    null,
    function (context) {
      return children(context);
    }
  );
};

exports.withToastManager = function withToastManager(Comp
// $FlowFixMe `forwardRef`
) {
  return _react2.default.forwardRef(function (props, ref) {
    return _react2.default.createElement(
      ToastConsumer,
      null,
      function (context) {
        return _react2.default.createElement(Comp, _extends({ toastManager: context }, props, { ref: ref }));
      }
    );
  });
};

exports.useToasts = function useToasts() {
  var ctx = (0, React__default['default'].useContext)(ToastContext);

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
};
});var dist = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



Object.defineProperty(exports, 'DefaultToastContainer', {
  enumerable: true,
  get: function get() {
    return ToastContainer_1.ToastContainer;
  }
});



Object.defineProperty(exports, 'DefaultToast', {
  enumerable: true,
  get: function get() {
    return ToastElement_1.DefaultToast;
  }
});



Object.defineProperty(exports, 'ToastConsumer', {
  enumerable: true,
  get: function get() {
    return ToastProvider_1.ToastConsumer;
  }
});
Object.defineProperty(exports, 'ToastProvider', {
  enumerable: true,
  get: function get() {
    return ToastProvider_1.ToastProvider;
  }
});
Object.defineProperty(exports, 'withToastManager', {
  enumerable: true,
  get: function get() {
    return ToastProvider_1.withToastManager;
  }
});
Object.defineProperty(exports, 'useToasts', {
  enumerable: true,
  get: function get() {
    return ToastProvider_1.useToasts;
  }
});
});function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var WebAppsContext = /*#__PURE__*/React__default['default'].createContext({});
var useModals = createLocalStorageStateHook('modals', {});

var WebAppsProvider = function WebAppsProvider(props) {
  var unmounted = React.useRef(false);

  var _useState = React.useState({
    sidebar: 'responsive',
    envWriteable: false
  }),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      UI = _useState2[0],
      setUI = _useState2[1];

  var _useModals = useModals(),
      _useModals2 = _slicedToArray__default['default'](_useModals, 2),
      modals = _useModals2[0],
      setModals = _useModals2[1];

  var _useState3 = React.useState({}),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      navigation = _useState4[0],
      setNavigation = _useState4[1];

  var _useState5 = React.useState({}),
      _useState6 = _slicedToArray__default['default'](_useState5, 2),
      apps = _useState6[0],
      setApps = _useState6[1];

  var _useState7 = React.useState({}),
      _useState8 = _slicedToArray__default['default'](_useState7, 2),
      plugins = _useState8[0],
      setPlugins = _useState8[1];

  var _useToasts = dist.useToasts(),
      addToast = _useToasts.addToast;

  React.useEffect(function () {
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
    axios__default['default'].post('/api/setting', formData).then(function (json) {
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
    axios__default['default'].get('/api/navigation').then(function (json) {
      if (!unmounted.current) {
        navigation.menu = json.data.navigation;
        navigation.routes = json.data.routes;
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
    axios__default['default'].get('/api/apps').then(function (json) {
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
    axios__default['default'].get('/api/online/apps/list').then(function (json) {
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
    axios__default['default'].get('/api/plugins').then(function (json) {
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
    axios__default['default'].get('/api/plugins/active').then(function (json) {
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
    axios__default['default'].get('/api/online/plugins/list').then(function (json) {
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
    axios__default['default'].post('/api/online/apps/download', formData).then(function (json) {
      if (!unmounted.current) {
        addToast("".concat(e.target.dataset.slug, " Downloaded and Installed"), {
          appearance: 'success'
        });
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
    axios__default['default'].post('/api/online/apps/download', formData).then(function (json) {
      if (!unmounted.current) {
        addToast("".concat(e.target.dataset.slug, " Updated"), {
          appearance: 'success'
        });
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
    axios__default['default'].post('/api/apps/control', formData).then(function (json) {
      if (!unmounted.current) {
        addToast(json.data.message, {
          appearance: 'success'
        }); // Reload Navigation

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
    axios__default['default'].post('/api/apps/control', formData).then(function (json) {
      if (!unmounted.current) {
        addToast(json.data.message, {
          appearance: 'success'
        }); // Reload Navigation

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
    axios__default['default'].post('/api/apps/control', formData).then(function (json) {
      if (!unmounted.current) {
        addToast(json.data.message, {
          appearance: 'success'
        }); // Reload Navigation

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
    axios__default['default'].post('/api/apps/control', formData).then(function (json) {
      if (!unmounted.current) {
        addToast(json.data.message, {
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
    axios__default['default'].post('/api/online/plugins/download', formData).then(function (json) {
      if (!unmounted.current) {
        addToast(json.data.message, {
          appearance: 'success'
        });
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
    axios__default['default'].post('/api/online/plugins/download', formData).then(function (json) {
      if (!unmounted.current) {
        addToast(json.data.message, {
          appearance: 'success'
        });
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
    axios__default['default'].post('/api/plugins/toggle', formData).then(function (json) {
      if (!unmounted.current) {
        addToast(json.data.message, {
          appearance: 'success'
        });
        Object.keys(plugins.all).map(function (key) {
          if (e.target.dataset.slug === plugins.all[key].slug) {
            plugins.all[key].state = json.data.plugin.state;
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
    axios__default['default'].post('/api/plugin', formData).then(function (json) {
      if (!unmounted.current) {
        addToast(json.data.message, {
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
  return /*#__PURE__*/React__default['default'].createElement(WebAppsContext.Provider, {
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
  return /*#__PURE__*/React__default['default'].createElement(dist.ToastProvider, {
    autoDismiss: "true",
    autoDismissTimeout: "3000"
  }, /*#__PURE__*/React__default['default'].createElement(WebAppsProvider, props));
};var withWebApps = function withWebApps(Component) {
  var displayName = "withWebApps(".concat(Component.displayName || Component.name, ")");

  var C = function C(props) {
    return /*#__PURE__*/React__default['default'].createElement(WebAppsContext.Consumer, null, function (context) {
      invariant(context, "You should not use <".concat(displayName, " /> outside a <WebApps>"));
      return /*#__PURE__*/React__default['default'].createElement(Component, _extends__default['default']({}, props, context));
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
      attributes = _objectWithoutProperties__default['default'](props, ["style", "size", "rounded", "square", "className", "children"]);

  var _useContext = React.useContext(WebAppsContext),
      UI = _useContext.UI;

  var color = props.color === 'brand' ? UI.theme : props.color;
  var classes = classnames$1('font-bold', 'outline-none', 'focus:outline-none', 'ease-linear', 'transition-all', 'duration-150', style === 'full' ? "bg-".concat(color, "-600 hover:bg-").concat(color, "-400 dark:bg-").concat(color, "-400 dark:hover:bg-").concat(color, "-600") : '', style === 'outline' ? "text-".concat(color, "-600 dark:text-").concat(color, "-400 bg-transparent border border-").concat(color, "-600 dark:border-").concat(color, "-400 hover:bg-").concat(color, "-600 dark:hover:bg-").concat(color, "-400 hover:text-white dark:hover:text-white") : '', style === 'ghost' ? "text-".concat(color, "-600 dark:text-").concat(color, "-400 bg-transparent hover:bg-").concat(color, "-600 dark:hover:bg-").concat(color, "-400 hover:text-white dark:hover:text-white") : '', style === 'link' ? "text-".concat(color, "-600 dark:text-").concat(color, "-400 bg-transparent hover:text-").concat(color, "-400 dark:hover:text-").concat(color, "-600") : '', size === "small" ? 'text-xs px-2 py-1' : size === "large" ? 'text-lg px-8 py-3' : 'px-4 py-2', rounded ? 'rounded-full' : square ? 'rounded-none' : 'rounded-md', className);
  return props.href !== undefined || props.to !== undefined ? /*#__PURE__*/React__default['default'].createElement(Link, _extends__default['default']({
    className: classes
  }, attributes), children) : /*#__PURE__*/React__default['default'].createElement("button", _extends__default['default']({
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
      className = props.className,
      attributes = _objectWithoutProperties__default['default'](props, ["text", "confirmText", "onClick", "timeout", "initialColor", "confirmColor", "className"]);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
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

  return waiting ? /*#__PURE__*/React__default['default'].createElement(Button, _extends__default['default']({
    className: classnames$1('flex', 'flex-row', 'items-center', className),
    color: confirmColor,
    onClick: onConfirm
  }, attributes), /*#__PURE__*/React__default['default'].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 mr-2",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  })), confirmText) : /*#__PURE__*/React__default['default'].createElement(Button, _extends__default['default']({
    className: classnames$1('flex', 'flex-row', 'items-center', className),
    color: initialColor,
    onClick: onQuery
  }, attributes), /*#__PURE__*/React__default['default'].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 mr-2",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
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
      attributes = _objectWithoutProperties__default['default'](props, ["title", "message", "cancelText", "confirmText", "onCancel", "onConfirm"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends__default['default']({
    className: "fixed z-50 inset-0 overflow-y-auto"
  }, attributes), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fixed inset-0 transition-opacity",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "absolute inset-0 bg-gray-500 opacity-75"
  })), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
    "aria-hidden": "true"
  }, "\u200B"), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "modal-headline"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "bg-white dark:bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sm:flex sm:items-start"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 sm:mx-0 sm:h-10 sm:w-10"
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    className: "h-6 w-6 text-red-600 dark:text-red-400",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  }))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
  }, /*#__PURE__*/React__default['default'].createElement("h3", {
    className: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100",
    id: "modal-headline"
  }, title), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    className: "text-sm text-gray-500 dark:text-gray-300 whitespace-pre-wrap"
  }, message))))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    type: "button",
    className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:ring-0 sm:ml-3 sm:w-auto sm:text-sm",
    onClick: onConfirm
  }, confirmText), /*#__PURE__*/React__default['default'].createElement("button", {
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
      rest = _objectWithoutProperties__default['default'](props, ["show", "text", "buttonClassNames", "dropClassNames"]);

  var _useState = React.useState(show),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  React.useEffect(function (show) {
    setOpen(show);
  }, [show]);

  var toggle = function toggle() {
    setOpen(!open);
  };

  var close = function close() {
    setOpen(false);
  };

  var dropClass = classnames$1('origin-top-right', 'absolute', 'right-0', 'w-56', 'bg-white', 'dark:bg-gray-700', 'shadow-lg', 'ring-1', 'ring-black', 'ring-opacity-5', 'z-20', dropClassNames, open ? '' : 'hidden');
  var childrenWithClose = React__default['default'].Children.map(props.children, function (child) {
    if ( /*#__PURE__*/React__default['default'].isValidElement(child)) {
      return /*#__PURE__*/React__default['default'].cloneElement(child, {
        onClick: close
      });
    }

    return child;
  });
  var id = "options-menu-".concat(Math.floor(Math.random() * 1000));
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React__default['default'].createElement(Button, _extends__default['default']({
    className: buttonClassNames
  }, rest, {
    id: id,
    "aria-haspopup": "true",
    "aria-expanded": "false",
    onClick: toggle
  }), text), /*#__PURE__*/React__default['default'].createElement("div", {
    className: dropClass
  }, /*#__PURE__*/React__default['default'].createElement("div", {
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
      attributes = _objectWithoutProperties__default['default'](props, ["icon"]);

  var addClasses = function addClasses(string) {
    return string.replace(/<svg/g, "<svg class=\"".concat(attributes.className, "\""));
  };

  return /*#__PURE__*/React__default['default'].createElement("div", _extends__default['default']({
    dangerouslySetInnerHTML: {
      __html: addClasses(icon)
    }
  }, attributes));
};

Icon.propTypes = {
  icon: propTypes.oneOfType([propTypes.string, propTypes.object])
};var InfiniteScroll = function InfiniteScroll(props) {
  var _useState = React.useState(1),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var marker = React.useRef(null);
  React.useEffect(function () {
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
  React.useEffect(function () {
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

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, props.children, /*#__PURE__*/React__default['default'].createElement("span", {
    ref: marker
  }));
};var Input = function Input(props) {
  var error = props.error,
      state = props.state,
      className = props.className,
      attributes = _objectWithoutProperties__default['default'](props, ["error", "state", "className"]);

  var _useContext = React.useContext(WebAppsContext),
      UI = _useContext.UI;

  var classes = classnames$1(className, 'input-field', "focus:border-".concat(UI.theme, "-600"), "dark:focus:border-".concat(UI.theme, "-500"), state === 'error' ? 'border-red-500 text-red-500' : '', state === 'saved' ? 'border-green-500 text-green-500' : '', state === 'saving' ? 'border-orange-500' : '');
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("input", _extends__default['default']({}, attributes, {
    className: classes
  })), state === 'error' && error !== '' ? /*#__PURE__*/React__default['default'].createElement("span", {
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
  var classes = classnames$1(className, 'checked:bg-gray-500', 'outline-none', 'focus:ring-0', 'focus:outline-none', 'right-4', 'checked:right-0', 'duration-200', 'ease-in', 'absolute', 'block', 'w-6', 'h-6', 'rounded-full', 'bg-white', 'border-4', 'appearance-none', 'cursor-pointer', state === 'error' ? 'border-red-500 checked:bg-red-500' : '', state === 'saved' ? 'border-green-500 checked:bg-green-500' : '', state === 'saving' ? 'border-orange-500 checked:bg-orange-500' : '');
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "relative inline-block w-10 mr-2 align-middle select-none"
  }, /*#__PURE__*/React__default['default'].createElement("input", _extends__default['default']({
    type: "checkbox",
    id: name,
    name: name,
    className: classes
  }, props)), /*#__PURE__*/React__default['default'].createElement("label", {
    htmlFor: name,
    className: "block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"
  }), state === 'error' && error !== '' ? /*#__PURE__*/React__default['default'].createElement("span", {
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
      attributes = _objectWithoutProperties__default['default'](props, ["tag", "className", "settings"]);

  var _useState = React.useState(),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      instance = _useState2[0],
      setInstance = _useState2[1];

  var ref = /*#__PURE__*/React.createRef();
  React.useEffect(function () {
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


  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends__default['default']({
    className: classnames$1(className),
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

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DropdownContext = /*#__PURE__*/React__default['default'].createContext({});

var NavDropdown = function NavDropdown(_ref) {
  var UI = _ref.UI,
      setUI = _ref.setUI,
      props = _objectWithoutProperties__default['default'](_ref, ["UI", "setUI"]);

  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      icon = props.icon,
      name = props.name,
      badge = props.badge,
      show = props.show,
      route = props.route;
      _objectWithoutProperties__default['default'](props, ["children", "className", "innerRef", "color", "icon", "name", "badge", "show", "route"]);

  var ref = /*#__PURE__*/React.createRef();
  innerRef && innerRef(ref);

  if (UI.navigation === undefined) {
    return null;
  }

  var _UI$navigation = UI.navigation,
      dropdownMode = _UI$navigation.dropdownMode,
      openDropdown = _UI$navigation.openDropdown;

  var _useState = React.useState(show),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  React.useEffect(function () {
    setIsOpen(show);
  }, [show]);
  React.useEffect(function () {
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
    path = reactRouterDom.useLocation().pathname;
  } catch (e) {
    console.warn(e);
  }

  React.useEffect(function () {
    if (dropdownMode === 'close') setIsOpen(false);else if (dropdownMode === 'closeInactive' && route) setIsOpen(path.includes(route));else if ((!dropdownMode || dropdownMode !== 'noAction') && !isOpen && route) setIsOpen(path.includes(route));
  }, [path]);
  var linkClasses = classnames$1('flex', 'items-center', 'py-2', 'transition-colors', 'duration-200', 'focus:outline-none', 'hover:bg-gray-100', 'dark:hover:bg-gray-600', color ? "text-".concat(color, "-600 hover:text-").concat(color, "-800 dark:text-").concat(color, "-400 dark:hover:text-").concat(color, "-100") : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white', isOpen ? color ? "text-".concat(color, "-800 bg-gray-100 dark:text-").concat(color, "-100 dark:bg-gray-600 rounded-t-lg") : 'text-gray-800 bg-gray-100 dark:text-white dark:bg-gray-600 rounded-t-lg' : 'rounded-lg');
  var dropIcon = isOpen ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>';
  return /*#__PURE__*/React__default['default'].createElement("li", {
    className: classnames$1(className, 'mb-2'),
    ref: ref
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    href: "#",
    className: linkClasses,
    tabIndex: "0",
    onClick: toggle,
    "aria-label": "menu dropdown"
  }, icon && /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: icon,
    className: "h-5 w-10"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "font-medium text-sm"
  }, name), badge && /*#__PURE__*/React__default['default'].createElement(Badge, _objectSpread$3(_objectSpread$3({}, badge), {}, {
    text: null
  }), badge.text), /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: dropIcon,
    className: "ml-auto h-5 w-5"
  })), /*#__PURE__*/React__default['default'].createElement("ul", {
    className: classnames$1(isOpen ? 'block py-1 bg-gray-100 dark:bg-gray-600 rounded-b-lg' : 'hidden')
  }, /*#__PURE__*/React__default['default'].createElement(DropdownContext.Provider, {
    value: {
      isOpen: isOpen
    }
  }, children)));
};

var NavDropdown$1 = withWebApps(NavDropdown);function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var NavChild = function NavChild(props) {
  var className = props.className,
      innerRef = props.innerRef,
      name = props.name,
      icon = props.icon,
      badge = props.badge;
      props.addLinkClass;
      props.label;
      var color = props.color,
      rest = _objectWithoutProperties__default['default'](props, ["className", "innerRef", "name", "icon", "badge", "addLinkClass", "label", "color"]);

  var _useContext = React.useContext(DropdownContext),
      isOpen = _useContext.isOpen;

  var linkClasses = classnames$1('flex', 'items-center', 'p-2', 'px-4', 'mb-1', 'transition-colors', 'duration-200', 'focus:outline-none', 'hover:font-medium', 'hover:bg-gray-200', 'dark:hover:bg-gray-900', color ? "text-".concat(color, "-600 hover:text-").concat(color, "-900 dark:text-").concat(color, "-400 dark:hover:text-").concat(color, "-100") : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white');
  var routerLinkProps = rest.to && {
    exact: true,
    activeClassName: classnames$1(color ? "font-medium text-".concat(color, "-900 dark:text-").concat(color, "-100") : 'font-medium text-gray-900 dark:text-white')
  };
  return /*#__PURE__*/React__default['default'].createElement("li", {
    className: className,
    ref: innerRef
  }, /*#__PURE__*/React__default['default'].createElement(Link, _extends__default['default']({
    className: linkClasses
  }, routerLinkProps, rest, {
    tabIndex: isOpen === false ? -1 : 0
  }), icon && /*#__PURE__*/React__default['default'].createElement(Icon, {
    className: "h-5 w-5 mr-4",
    icon: icon
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "text-sm"
  }, name), badge && /*#__PURE__*/React__default['default'].createElement(Badge, _objectSpread$2(_objectSpread$2({}, badge), {}, {
    text: null
  }), badge.text)));
};function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var NavItem = function NavItem(props) {
  var className = props.className,
      innerRef = props.innerRef,
      name = props.name,
      icon = props.icon,
      badge = props.badge;
      props.addLinkClass;
      props.label;
      var color = props.color,
      rest = _objectWithoutProperties__default['default'](props, ["className", "innerRef", "name", "icon", "badge", "addLinkClass", "label", "color"]);

  var _useContext = React.useContext(DropdownContext),
      isOpen = _useContext.isOpen;

  var linkClasses = classnames$1('flex', 'items-center', 'py-2', 'mb-1', 'rounded-lg', 'transition-colors', 'duration-200', 'focus:outline-none', color ? "text-".concat(color, "-600 hover:text-").concat(color, "-800 dark:text-").concat(color, "-400 dark:hover:text-").concat(color, "-100 hover:bg-").concat(color, "-100 dark:hover:bg-").concat(color, "-600") : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600');
  var routerLinkProps = rest.to && {
    exact: true,
    activeClassName: classnames$1(color ? "text-".concat(color, "-800 bg-gray-100 dark:text-").concat(color, "-100 dark:bg-gray-600") : 'text-gray-800 bg-gray-100 dark:text-white dark:bg-gray-600')
  };
  return /*#__PURE__*/React__default['default'].createElement("li", {
    className: className,
    ref: innerRef
  }, /*#__PURE__*/React__default['default'].createElement(Link, _extends__default['default']({
    className: linkClasses
  }, routerLinkProps, rest, {
    tabIndex: isOpen === false ? -1 : 0
  }), icon && /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: icon,
    className: "h-5 w-10"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "font-medium text-sm"
  }, name), badge && /*#__PURE__*/React__default['default'].createElement(Badge, _objectSpread$1(_objectSpread$1({}, badge), {}, {
    text: null
  }), badge.text)));
};var NavTitle = function NavTitle(props) {
  var name = props.name,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties__default['default'](props, ["name", "className", "innerRef"]);

  var classes = classnames$1('relative', 'my-6', 'h-px', 'bg-gray-600', 'dark:bg-gray-400', className);
  return /*#__PURE__*/React__default['default'].createElement("li", _extends__default['default']({
    className: classes
  }, attributes, {
    ref: innerRef
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "absolute left-0 top-0 flex justify-center w-full -mt-2"
  }, /*#__PURE__*/React__default['default'].createElement("span", {
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
        rest = _objectWithoutProperties__default['default'](item, ["_tag", "_children"]);

    var Tag = components[_tag] || _tag;
    var children = _children ? _children.map(function (child, i) {
      return _typeof__default['default'](child) === 'object' ? renderItem(child, i) : child;
    }) : '';
    return /*#__PURE__*/React__default['default'].createElement(Tag, _extends__default['default']({
      key: Tag + i
    }, rest), children);
  };

  var generatedItems = React.useMemo(function () {
    return items && items.map(function (item, i) {
      return renderItem(item, i);
    });
  }, [JSON.stringify(items)]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, generatedItems);
}; // items: PropTypes.oneOfType[PropTypes.array, PropTypes.object],


CreateElement.propTypes = {
  components: propTypes.object
};function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf__default['default'](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default['default'](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default['default'](this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var NavigationError = /*#__PURE__*/function (_Component) {
  _inherits__default['default'](NavigationError, _Component);

  var _super = _createSuper$1(NavigationError);

  function NavigationError(props) {
    var _this;

    _classCallCheck__default['default'](this, NavigationError);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false,
      info: '',
      error: ''
    };
    return _this;
  }

  _createClass__default['default'](NavigationError, [{
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
        return /*#__PURE__*/React__default['default'].createElement("ul", {
          className: "px-4 my-auto"
        }, /*#__PURE__*/React__default['default'].createElement("li", {
          className: "w-full text-center p-2 rounded-lg transition-colors duration-200 focus:outline-none text-gray-600 dark:text-gray-400"
        }, "Failed to load navigation."), /*#__PURE__*/React__default['default'].createElement("li", {
          className: "w-full text-center p-2 rounded-lg transition-colors duration-200 focus:outline-none text-gray-600 dark:text-gray-400"
        }, this.state.error.toString()), /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement("button", {
          className: "w-full text-center p-2 rounded-lg transition-colors duration-200 focus:outline-none text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-100 hover:bg-red-100 dark:hover:bg-red-600",
          onClick: this.props.retry
        }, "Click here to try again.")));
      }

      return this.props.children;
    }
  }]);

  return NavigationError;
}(React.Component);function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SidebarWrapper = function SidebarWrapper(_ref) {
  var loadNavigation = _ref.loadNavigation,
      UI = _ref.UI,
      setUI = _ref.setUI,
      props = _objectWithoutProperties__default['default'](_ref, ["loadNavigation", "UI", "setUI"]);

  var children = props.children,
      dropdownMode = props.dropdownMode;
  React.useEffect(function () {
    if (UI !== undefined) {
      UI.navigation = {
        dropdownMode: dropdownMode,
        openDropdown: ''
      };
      setUI(_objectSpread({}, UI));
    }
  }, [dropdownMode]);
  React.useEffect(function () {
    if (UI.navigation === undefined) {
      UI.navigation = {
        dropdownMode: dropdownMode,
        openDropdown: ''
      };
      setUI(_objectSpread({}, UI));
    }
  }, [UI]);

  var _useState = React.useState('hidden'),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      collapseShow = _useState2[0],
      setCollapseShow = _useState2[1];

  var toggle = function toggle() {
    setCollapseShow(collapseShow === 'hidden' ? '' : 'hidden');
  };

  var isRtl = getComputedStyle(document.querySelector('html')).direction === 'rtl';
  return /*#__PURE__*/React__default['default'].createElement("nav", {
    className: "flex flex-wrap items-center relative z-50 shadow-xl bg-white dark:bg-gray-800 md:flex-col md:w-72 md:h-screen md:border-r border-transparent dark:border-gray-600"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    className: "cursor-pointer text-black dark:text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent outline-none",
    type: "button",
    onClick: toggle
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h16"
  }))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex flex-none items-center justify-center md:h-24 py-2 md:py-0 mx-auto text-gray-600 dark:text-gray-300"
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    className: "h-10 text-".concat(UI.theme, "-600 dark:text-").concat(UI.theme, "-500")
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
  })), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "ml-4 text-2xl font-bold"
  }, "WebApps")), /*#__PURE__*/React__default['default'].createElement(NavigationError, {
    retry: loadNavigation
  }, /*#__PURE__*/React__default['default'].createElement(Scrollbar, {
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
      props = _objectWithoutProperties__default['default'](_ref, ["navigation"]);

  React.useEffect(function () {
    if (navigation.menu !== null && navigation.menu !== undefined) {
      if (navigation.menu.error) {
        throw new Error(navigation.menu.message);
      }
    }
  }, [navigation]);
  return /*#__PURE__*/React__default['default'].createElement(SidebarWrapper$1, props, navigation.menu !== null && navigation.menu !== undefined && !navigation.menu.error ? /*#__PURE__*/React__default['default'].createElement(CreateElement, {
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
      _objectWithoutProperties__default['default'](_ref, ["app"]);

  var _useContext = React.useContext(WebAppsContext),
      apps = _useContext.apps; // Installed, has update


  if (app.installed && app.hasUpdate) {
    return /*#__PURE__*/React__default['default'].createElement("button", {
      className: "py-auto bg-orange-300 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-400 focus:outline-none w-full",
      "data-slug": app.slug,
      onClick: apps.update
    }, "Update", /*#__PURE__*/React__default['default'].createElement("br", null), /*#__PURE__*/React__default['default'].createElement("span", {
      className: "text-xs"
    }, "from ", app.current_version));
  } // Installed, not active


  if (app.installed && !app.active) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "flex flex-col w-full"
    }, /*#__PURE__*/React__default['default'].createElement("button", {
      className: "py-auto bg-blue-300 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-400 focus:outline-none w-full flex-grow",
      "data-slug": app.slug,
      onClick: apps.activate
    }, "Activate"), /*#__PURE__*/React__default['default'].createElement("button", {
      className: "py-auto bg-gray-200 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-500 hover:text-white focus:outline-none w-full flex-grow",
      "data-slug": app.slug,
      onClick: apps.uninstall
    }, "Uninstall"));
  } // Not downloaded, not installed


  if (!app.downloaded && !app.installed) {
    return /*#__PURE__*/React__default['default'].createElement("button", {
      className: "py-auto bg-green-300 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-400 focus:outline-none w-full",
      "data-slug": app.slug,
      onClick: apps.download
    }, "Install");
  } // Downloaded, but not installed


  if (app.downloaded && !app.installed) {
    return /*#__PURE__*/React__default['default'].createElement("button", {
      className: "py-auto bg-green-300 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-400 focus:outline-none w-full",
      "data-slug": app.slug,
      onClick: apps.install
    }, "Install");
  } // Installed, Active, No Updates


  if (app.installed && app.active && !app.hasUpdate) {
    return /*#__PURE__*/React__default['default'].createElement("button", {
      className: "py-auto bg-gray-300 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400 hover:text-white focus:outline-none w-full ",
      "data-slug": app.slug,
      onClick: apps.deactivate
    }, "Deactivate");
  }
};var AppCard = function AppCard(props) {
  var app = props.app,
      showActions = props.showActions;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "my-2 px-1 w-full lg:my-4 lg:px-4 lg:w-4/12"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800 flex flex-row"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex flex-grow-0 flex-shrink-0 w-20 bg-gray-100 dark:bg-gray-700 relative"
  }, /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: app.icon,
    className: "absolute top-1.5 bottom-1.5 left-1.5 right-1.5"
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex-grow p-4"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    className: "font-bold flex-grow"
  }, app.name), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "inline-block text-blue-600 border border-blue-600 bg-blue-300 px-2 py-1 text-xs font-bold"
  }, app.version || app.release.version)), /*#__PURE__*/React__default['default'].createElement("p", {
    className: "text-gray-400 text-sm"
  }, "By ", app.author), /*#__PURE__*/React__default['default'].createElement("p", {
    className: "text-gray-400"
  }, app.description)), showActions ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex flex-grow-0 flex-shrink-0 w-24 ml-3"
  }, /*#__PURE__*/React__default['default'].createElement(AppActionButtons, {
    app: app
  })) : null));
};var PluginActionButtons = function PluginActionButtons(_ref) {
  var plugin = _ref.plugin;
      _objectWithoutProperties__default['default'](_ref, ["plugin"]);

  var _useContext = React.useContext(WebAppsContext),
      plugins = _useContext.plugins;

  if (plugin.installed && plugin.hasUpdate) {
    return /*#__PURE__*/React__default['default'].createElement("button", {
      className: "py-auto bg-orange-300 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-400 focus:outline-none w-full",
      "data-slug": plugin.slug,
      onClick: plugins.update
    }, "Update", /*#__PURE__*/React__default['default'].createElement("br", null), /*#__PURE__*/React__default['default'].createElement("span", {
      className: "text-xs"
    }, "from ", plugin.current_version));
  }

  if (plugin.downloaded && !plugin.installed || plugin.installed && !plugin.state) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "flex flex-col w-full"
    }, /*#__PURE__*/React__default['default'].createElement("button", {
      className: "py-auto bg-blue-300 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-400 focus:outline-none w-full flex-grow",
      "data-slug": plugin.slug,
      onClick: plugins.toggle
    }, "Activate"), /*#__PURE__*/React__default['default'].createElement("button", {
      className: "py-auto bg-gray-200 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-500 hover:text-white focus:outline-none w-full flex-grow",
      "data-slug": plugin.slug,
      onClick: plugins.uninstall
    }, "Uninstall"));
  }

  if (!plugin.downloaded && !plugin.installed) {
    return /*#__PURE__*/React__default['default'].createElement("button", {
      className: "py-auto bg-green-300 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-400 focus:outline-none w-full",
      "data-slug": plugin.slug,
      onClick: plugins.download
    }, "Install");
  }

  if (plugin.installed && !plugin.hasUpdate) {
    return /*#__PURE__*/React__default['default'].createElement("button", {
      className: "py-auto bg-gray-300 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400 hover:text-white focus:outline-none w-full ",
      "data-slug": plugin.slug,
      onClick: plugins.toggle
    }, "Deactivate");
  }
};var PluginCard = function PluginCard(props) {
  var plugin = props.plugin,
      showActions = props.showActions;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "my-2 px-1 w-full lg:my-4 lg:px-4 lg:w-4/12"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800 flex flex-row"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex flex-grow-0 flex-shrink-0 w-20 bg-gray-100 dark:bg-gray-700 relative"
  }, /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: plugin.icon,
    className: "absolute top-1.5 bottom-1.5 left-1.5 right-1.5"
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex-grow p-4"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    className: "font-bold flex-grow"
  }, plugin.name), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "inline-block text-blue-600 border border-blue-600 bg-blue-300 px-2 py-1 text-xs font-bold"
  }, plugin.version || plugin.release.version)), /*#__PURE__*/React__default['default'].createElement("p", {
    className: "text-gray-400 text-sm"
  }, "By ", plugin.author), /*#__PURE__*/React__default['default'].createElement("p", {
    className: "text-gray-400"
  }, plugin.description)), showActions ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex flex-grow-0 flex-shrink-0 w-24 ml-3"
  }, /*#__PURE__*/React__default['default'].createElement(PluginActionButtons, {
    plugin: plugin
  })) : null));
};function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf__default['default'](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default['default'](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default['default'](this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AppError = /*#__PURE__*/function (_Component) {
  _inherits__default['default'](AppError, _Component);

  var _super = _createSuper(AppError);

  function AppError(props) {
    var _this;

    _classCallCheck__default['default'](this, AppError);

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

  _createClass__default['default'](AppError, [{
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
        return /*#__PURE__*/React__default['default'].createElement("div", {
          className: "text-gray-700 bg-gray-200 dark:bg-gray-900 dark:text-white h-screen w-screen relative"
        }, /*#__PURE__*/React__default['default'].createElement("div", {
          className: "h-full w-full flex flex-wrap justify-center content-center items-center absolute z-0"
        }, /*#__PURE__*/React__default['default'].createElement("svg", {
          className: "w-full px-6 lg:px-64 fill-current text-gray-300 dark:text-gray-800",
          viewBox: "0 0 445 202",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M38.804 144.71c1.527 8.356 4.447 14.803 8.76 19.34 4.312 4.537 10.601 6.805 18.867 6.805 9.523 0 16.778-3.346 21.764-10.04 4.987-6.693 7.48-15.116 7.48-25.268 0-9.973-2.336-18.396-7.008-25.269-4.672-6.873-11.95-10.31-21.832-10.31-4.672 0-8.715.585-12.129 1.753-6.02 2.156-10.557 6.154-13.611 11.994l-34.5-1.617L20.34 4.15h107.678v32.614H48.103l-7.008 42.72c5.93-3.863 10.556-6.423 13.88-7.681 5.57-2.067 12.354-3.1 20.35-3.1 16.172 0 30.277 5.436 42.317 16.307 12.039 10.87 18.058 26.683 18.058 47.437 0 18.059-5.795 34.186-17.385 48.381-11.59 14.196-28.93 21.293-52.02 21.293-18.597 0-33.87-4.986-45.82-14.959C8.527 177.19 1.879 163.04.53 144.711h38.274zm155.789-43.528c0 22.46 1.842 39.643 5.525 51.547 3.684 11.905 11.23 17.857 22.64 17.857 11.411 0 18.89-5.952 22.44-17.857 3.548-11.904 5.323-29.086 5.323-51.547 0-23.54-1.775-40.97-5.324-52.29s-11.028-16.98-22.438-16.98c-11.41 0-18.957 5.66-22.64 16.98-3.684 11.32-5.526 28.75-5.526 52.29zM222.759.242c24.887 0 42.339 8.76 52.356 26.28 10.018 17.52 15.027 42.406 15.027 74.66s-5.01 57.095-15.027 74.525c-10.017 17.43-27.47 26.145-52.356 26.145-24.887 0-42.339-8.715-52.357-26.145-10.017-17.43-15.026-42.271-15.026-74.525 0-32.254 5.009-57.14 15.026-74.66C180.42 9.001 197.872.241 222.76.241zm125.332 100.94c0 22.46 1.842 39.643 5.525 51.547 3.684 11.905 11.23 17.857 22.64 17.857 11.411 0 18.89-5.952 22.44-17.857 3.548-11.904 5.323-29.086 5.323-51.547 0-23.54-1.775-40.97-5.324-52.29s-11.028-16.98-22.438-16.98c-11.41 0-18.957 5.66-22.64 16.98-3.684 11.32-5.526 28.75-5.526 52.29zM376.257.242c24.887 0 42.339 8.76 52.356 26.28 10.018 17.52 15.027 42.406 15.027 74.66s-5.01 57.095-15.027 74.525c-10.017 17.43-27.47 26.145-52.356 26.145-24.887 0-42.339-8.715-52.357-26.145-10.017-17.43-15.026-42.271-15.026-74.525 0-32.254 5.009-57.14 15.026-74.66C333.918 9.001 351.37.241 376.257.241z",
          fillRule: "nonzero"
        }))), /*#__PURE__*/React__default['default'].createElement("div", {
          className: "h-full w-full flex flex-wrap justify-center content-end md:content-center items-end md:items-center relative z-10"
        }, /*#__PURE__*/React__default['default'].createElement("div", {
          className: "p-6 text-center "
        }, /*#__PURE__*/React__default['default'].createElement("h2", {
          className: "uppercase text-xl lg:text-5xl font-black"
        }, "Sorry, something went wrong."), /*#__PURE__*/React__default['default'].createElement("p", {
          className: "mt-3 text-sm lg:text-base text-gray-900 dark:text-gray-300"
        }, this.state.error.toString()), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Link, {
          to: "/",
          className: "inline-block mr-3 mt-6 px-4 py-2 border border-".concat(this.props.theme, "-600 dark:border-").concat(this.props.theme, "-500 bg-").concat(this.props.theme, "-600 dark:bg-").concat(this.props.theme, "-500 text-white dark:text-white hover:bg-").concat(this.props.theme, "-400 dark:hover:bg-").concat(this.props.theme, "-700 hover:border-").concat(this.props.theme, "-400 dark:hover:border-").concat(this.props.theme, "-700")
        }, "Back To Homepage"), /*#__PURE__*/React__default['default'].createElement("button", {
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
}(React.Component);

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

var index = returnLibrary();module.exports=index;