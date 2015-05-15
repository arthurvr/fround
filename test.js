'use strict';
var assert = require('assert');

Math.fround = undefined;
var fround = require('./');

it('if x is NaN, return NaN', function () {
	assert(isNaN(fround(NaN)));
});

[Infinity, -Infinity].forEach(function (x) {
	it('If x is ' + x + ', return x', function () {
		assert.strictEqual(fround(x), x);
	});
});

it('If x is +0, return x', function () {
	assert.strictEqual(fround(+0), +0);
});

it('If x is -0, return x', function () {
	assert.strictEqual(fround(-0), -0);
});

it('Returns the nearest single precision float representation of x', function () {
	[
		[0, 0],
		[1, 1],
		[1.337, 1.3370000123977661]
	].forEach(function (x) {
		assert.strictEqual(fround(x[0]), x[1]);
	});
});
