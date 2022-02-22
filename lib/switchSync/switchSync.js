'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function switchSync(_a, handler) {
    var children = _a.children;
    if (children) {
        for (var i = 0; i < children.length; i++) {
            var child = innet__default["default"](children[i], handler);
            if (child !== undefined) {
                return child;
            }
        }
    }
}

exports.switchSync = switchSync;
