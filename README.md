# [mocha](http://visionmedia.github.io/mocha/)-testdata

[![Build status](https://travis-ci.org/pandell/mocha-testdata.svg?branch=master)](https://travis-ci.org/pandell/mocha-testdata) [!["devDependencies" status](https://david-dm.org/pandell/mocha-testdata/dev-status.svg)](https://david-dm.org/pandell/mocha-testdata#info=devDependencies)

> Multiple test cases per mocha test

[Git repository](https://github.com/pandell/mocha-testdata)

[Changelog](https://github.com/pandell/mocha-testdata/releases)

Allows specifying multiple test cases for each [mocha](http://visionmedia.github.io/mocha/) test.

This package was inspired by the `given` method in [Pavlov](https://github.com/mmonteleone/pavlov).


## Install

```sh
$ npm install --save-dev mocha-testdata
```


## Usage

Here's a basic example with the BDD interface:

```ts
import * as assert from assert;
import { given } from mocha-testdata;

describe('My test suite', function () {
  given('', false, null, undefined).it('passes if value is falsey', function (value) {
    assert.ok(!value);
  });
});
```

And the same example with the TDD interface:

```ts
import * as assert from assert;
import { given } from mocha-testdata;

suite('My test suite', function () {
  withData('', false, null, undefined).test('passes if value is falsey', function (value) {
    assert.ok(!value);
  });
});
```

## API

Assuming:

```ts
var testData = require('mocha-testdata');
```

### `testData.given(data)`

Defines set of test data for a test case.

#### data

_Type_: Array or argument list  
_Default_: empty array

Values to pass to the test. If the arguments themselves are arrays, they will be passed as multiple arguments to the test function.
If a data item is an object, the `description` property is used to construct the individual test name.

Returns:
  - `it`: define a test case (for use with BDD interface)
  - `test`: define a test case (for use with TDD & qunit interfaces)

Example with multiple arguments:

```ts
import * as assert from assert;
import { given } from mocha-testdata;

suite('My test suite', function () {
  given([1, 2, 3], [3, 2, 1]).test('sum to 6', function (a, b, c) {
    assert.strictEqual(a + b + c, 6);
  });
});
```


### `testData.givenAsync(data)`

Defines set of test data for an async test case.

#### data

Same as [`testData.given(data)`](#data).

Returns:
  - `it`: define an async test case (for use with BDD interface)
  - `test`: define an async test case (for use with TDD & qunit interfaces)

Async test cases take a callback as their first parameter; test data are passed in subsequent parameters.

Example:

```ts
import * as assert from assert;
import { givenAsync } from mocha-testdata;

suite('My async test suite', function () {
  givenAsync([1, 2, 3], [3, 2, 1]).test('sum to 6', function (done, a, b, c) {
    doSomethingAsync(function () {
      assert.strictEqual(a + b + c, 6);
      done();
    });
  });
});
```


## TypeScript notes

The following use-cases are currently supported by included TypeScript typings:

```ts
import { given, givenAsync } from "mocha-testdata";

// simple data
given(1, 2, 3, 4).it("One", arg => arg);
givenAsync(1, 2, 3, 4).it("Two", (done, arg) => done());

// simple predefined data
const data = [1, 2, 3, 4];
given(data).it("Three", arg => arg);
givenAsync(data).it("Four", (done, arg) => done());

// complex data
given([1, 2], [3, 4]).it("Five", (a, b) => a);
givenAsync([1, 2], [3, 4]).it("Six", (done, a, b) => done());

// complex predefined data
const complexData: { 0: number, 1: number }[] = [[1, 2], [3, 4]]; // explicit typing is required here, type inference is not good enough in TypeScript 1.8.9
given(complexData).it("Seven", (a, b) => a);
givenAsync(complexData).it("Eight", (done, a, b) => done());

// structured data
given({ a: 1, b: 2 }, { a: 1, b: 2 }).it("Nine", arg => arg.a);
givenAsync({ a: 1, b: 2 }, { a: 1, b: 2 }).it("Ten", (done, arg) => arg.a && done());

// structured predefined data
const structuredData = [{ a: 1, b: 2 }, { a: 1, b: 2 }];
given(structuredData).it("Eleven", arg => arg.a);
givenAsync(structuredData).it("Twelve", (done, arg) => arg.a && done());
```


## Contributing

1. Clone git repository

2. `npm install` (will install dev dependencies needed by the next step)

3. `npm start` (will start a file system watcher that will re-lint JavaScript and JSON files + re-run all tests when change is detected)

4. Make changes, don't forget to add tests, submit a pull request.


## License

MIT © [Pandell Technology](http://pandell.com/)
