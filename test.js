/*jslint node: true, vars: true */
/*global describe: false, it: false */

'use strict';

var assert = require('assert');

var testData = require('./index');

var Runner = require('mocha').Runner;
var Suite = require('mocha').Suite;

function countFailures(tests, expectedFailures) {
    var hook = {},
        err = {},
        suite = new Suite(),
        runner;

    tests.forEach(function (test) {
        suite.addTest(test);
    });

    runner = new Runner(suite);
    runner.failHook(hook, err);

    assert.strictEqual(expectedFailures, runner.failures);
}

function nop() {
    return;
}

function run(tests) {
    tests.forEach(function (test) {
        test.run(nop);
    });
    return tests;
}

describe('testData', function () {
    it('is a function', function () {
        assert.strictEqual(typeof testData, 'function');
    });

    it('fails the test if no arguments are provided', function () {
        countFailures(testData().test('example test', function () { assert.pass(); }), 1);
    });

    it('defines "it" as a chain function', function () {
        assert.strictEqual(typeof testData(1).it, 'function');
    });

    it('defines "test" as a chain function', function () {
        assert.strictEqual(typeof testData(1).test, 'function');
    });

    it('passes arguments to chained test functions', function () {
        var testValues = [], testRuns = 0;
        run(testData(1, 2).test('example test', function (val) {
            testValues.push(val);
            testRuns += 1;
        }));

        assert.deepEqual(testValues, [1, 2]);
        assert.strictEqual(testRuns, 2);
    });

    it('accepts a single array argument', function () {
        var testValues = [], testRuns = 0;
        run(testData([1, 2]).test('example test', function (val) {
            testValues.push(val);
            testRuns += 1;
        }));

        assert.deepEqual(testValues, [1, 2]);
        assert.strictEqual(testRuns, 2);
    });

    it('applies array arguments as test function parameters', function () {
        var testValues = [], testRuns = 0;
        run(testData([1, 2], [3, 4]).test('example test', function (a, b) {
            testValues.push(a);
            testValues.push(b);
            testRuns += 1;
        }));

        assert.deepEqual(testValues, [1, 2, 3, 4]);
        assert.strictEqual(testRuns, 2);
    });

    it('relays the return value of the test function', function () {
        var tests = testData(1).test('example test', function () {
            return 1337;
        });

        var testReturnValue = tests[0].fn();

        assert.strictEqual(testReturnValue, 1337);
    });

    it('formats titles with passed value', function () {
        var tests = run(testData(
            1,
            'a',
            null,
            undefined,
            true,
            nop,
            function () { return; },
            [3, 4],
            {a: 1},
            {description: "fave", b: 2},
            {description: 42}
        ).test('example test', function () {
            assert.ok(true);
        }));

        var titles = tests.map(function (test) { return test.title; });

        assert.deepEqual(titles, [
            'example test <1>',
            'example test <a>',
            'example test <null>',
            'example test <undefined>',
            'example test <true>',
            'example test <nop()>',
            'example test <[function]>',
            'example test <[ 3, 4 ]>',
            'example test <{ a: 1 }>',
            'example test <fave>',
            'example test <{ description: 42 }>'
        ]);
    });
});

describe('testData.async', function () {
    it('is a function', function () {
        assert.strictEqual(typeof testData.async, 'function');
    });

    it('defines "it" as a chain function', function () {
        assert.strictEqual(typeof testData.async(1).it, 'function');
    });

    it('defines "test" as a chain function', function () {
        assert.strictEqual(typeof testData.async(1).test, 'function');
    });

    it('relays the return value of the test function', function () {
        var tests = testData.async(1).test('example test', function () {
            return 47;
        });

        var testReturnValue = tests[0].fn();

        assert.strictEqual(testReturnValue, 47);
    });

    it('passes arguments to chained test functions after "done" callback', function () {
        var testValues = [], testRuns = 0;
        run(testData.async(1, 2).test('example test', function (done, val) {
            testValues.push(val);
            testRuns += 1;
            done();
        }));

        assert.deepEqual(testValues, [1, 2]);
        assert.strictEqual(testRuns, 2);
    });

    it('accepts a single array argument', function () {
        var testValues = [], testRuns = 0;
        run(testData.async([1, 2]).test('example test', function (done, val) {
            testValues.push(val);
            testRuns += 1;
            done();
        }));

        assert.deepEqual(testValues, [1, 2]);
        assert.strictEqual(testRuns, 2);
    });

    it('applies array arguments as test function parameters', function () {
        var testValues = [], testRuns = 0;
        run(testData.async([1, 2], [3, 4]).test('example test', function (done, a, b) {
            testValues.push(a);
            testValues.push(b);
            testRuns += 1;
            done();
        }));

        assert.deepEqual(testValues, [1, 2, 3, 4]);
        assert.strictEqual(testRuns, 2);
    });
});
