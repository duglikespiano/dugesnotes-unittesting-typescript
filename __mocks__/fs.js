'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.promises = void 0;
var vitest_1 = require('vitest');
exports.promises = {
	wrtieFile: vitest_1.vi.fn(function (path, data) {
		return new Promise(function (resolve, reject) {
			resolve(null);
		});
	}),
};
