# fround [![Build Status](https://travis-ci.org/arthurvr/fround.svg?branch=master)](https://travis-ci.org/arthurvr/fround)

> A ponyfill for ES6 [Math.fround](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround)

Ponyfill: a polyfill that does not overwrite the native method


## Install

```
$ npm install --save fround
```


## Usage

```js
var fround = require('fround');

Math.fround(0);     // 0
Math.fround(1);     // 1
Math.fround(1.337); // 1.3370000123977661
Math.fround(1.5);   // 1.5
Math.fround(NaN);   // NaN
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
