'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function switchAsync(_a, handler) {
    var children = _a.children;
    if (children && children.length) {
        var run_1 = function (i) {
            if (i === void 0) { i = 0; }
            if (i < children.length) {
                var result = innet__default["default"](children[i], handler);
                if (result instanceof Promise) {
                    return result.then(function (val) {
                        if (val !== undefined) {
                            return val;
                        }
                        return run_1(i + 1);
                    });
                }
                else if (result !== undefined) {
                    return result;
                }
                return run_1(i + 1);
            }
        };
        return run_1();
    }
}

exports.switchAsync = switchAsync;
