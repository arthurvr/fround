import test from 'ava';

Math.fround = undefined;
import fround from './';

test('if x is NaN, return NaN', t => {
	t.true(isNaN(fround(NaN)));
	t.end();
});

[Infinity, -Infinity].forEach(x => {
	test('If x is ' + x + ', return x', t => {
		t.is(fround(x), x);
		t.end();
	});
});

test('If x is +0, return x', t => {
	t.is(fround(+0), +0);
	t.end();
});

test('If x is -0, return x', t => {
	t.is(fround(-0), -0);
	t.end();
});

test('Returns the nearest single precision float representation of x', t => {
	[
		[0, 0],
		[1, 1],
		[1.337, 1.3370000123977661]
	].forEach(x => {
		t.is(fround(x[0]), x[1]);
	});

	t.end();
});
