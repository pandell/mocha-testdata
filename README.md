mocha-testdata [![Build Status](https://travis-ci.org/jgoz/mocha-testdata.svg?branch=master)](https://travis-ci.org/jgoz/mocha-testdata) [![Dependency status](https://david-dm.org/jgoz/mocha-testdata.svg)](https://david-dm.org/jgoz/mocha-testdata)
==============

Allows specifying multiple test cases for each [mocha](http://visionmedia.github.io/mocha/) test. This package was inspired by the `given` method in [Pavlov](https://github.com/mmonteleone/pavlov).

Example Usage
-------------

Here's a basic example with the BDD interface:

```js
var assert = require('assert');
var given = require('mocha-testdata');

describe('My test suite', function() {
  given('', false, null, undefined).it('passes if value is falsey', function(value) {
    assert.ok(!value);
  });
});
```

And the same example with the TDD interface:

```js
var assert = require('assert');
var withData = require('mocha-testdata');

suite('My test suite', function() {
  withData('', false, null, undefined).test('passes if value is falsey', function(value) {
    assert.ok(!value);
  });
});
```

API
---

Assuming:
```js
var testData = require('mocha-testdata')
```

### `testData(data)`

Defines set of test data for a test case.

Params:
  - `data`: (array or argument list) values to pass to the test
    - If the arguments themselves are arrays, they will be passed as multiple arguments to the test function

Returns:
  - `it`: define a test case (for use with BDD interface)
  - `test`: define a test case (for use with TDD & qunit interfaces)

Example with multiple arguments:

```js
var assert = require('assert');
var testData = require('mocha-testdata');

suite('My test suite', function() {
  testData([1, 2, 3], [3, 2, 1]).test('sum to 6', function(a, b, c) {
    assert.strictEqual(a + b + c, 6);
  });
});
```

### `testData.async(data)`

Defines set of test data for an async test case.

Params:  
  (same as above)

Returns:
  - `it`: define an async test case (for use with BDD interface)
  - `test`: define an async test case (for use with TDD & qunit interfaces)

Async test cases take a callback as their first parameter; test data are passed in subsequent parameters.

Example:

```js
var assert = require('assert');
var testData = require('mocha-testdata');

suite('My async test suite', function() {
  testData.async([1, 2, 3], [3, 2, 1]).test('sum to 6', function(done, a, b, c) {
    doSomethingAsync(function () {
      assert.strictEqual(a + b + c, 6);
      done();
    });
  });
});
```

License
-------

Released under the MIT license. See [LICENSE](https://github.com/jgoz/mocha-testdata/blob/master/LICENSE).
