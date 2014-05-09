/*global describe: false, it: false */
'use strict';

var assert = require('assert');
var testData = require('./index');

function run(tests) {
    tests.forEach(function(test) {
        test.run(function() {});
    });
    return tests;
}

describe('testData', function() {
    it('is a function', function() {
        assert.strictEqual(typeof testData, 'function');
    });

    it('throws if no arguments are provided', function() {
        assert.throws(function() { testData(); }, /at least one argument is required/);
    });

    it('defines "it" as a chain function', function() {
        assert.strictEqual(typeof testData(1).it, 'function');
    });

    it('defines "test" as a chain function', function() {
        assert.strictEqual(typeof testData(1).test, 'function');
    });

    it('passes arguments to chained test functions', function() {
        var testValues = [], testRuns = 0;
        run(testData(1, 2).test('example test', function(val) {
            testValues.push(val);
            testRuns += 1;
        }));

        assert.deepEqual(testValues, [1, 2]);
        assert.strictEqual(testRuns, 2);
    });

    it('accepts a single array argument', function() {
        var testValues = [], testRuns = 0;
        run(testData([1, 2]).test('example test', function(val) {
            testValues.push(val);
            testRuns += 1;
        }));

        assert.deepEqual(testValues, [1, 2]);
        assert.strictEqual(testRuns, 2);
    });

    it('applies array arguments as test function parameters', function() {
        var testValues = [], testRuns = 0;
        run(testData([1, 2], [3, 4]).test('example test', function(a, b) {
            testValues.push(a);
            testValues.push(b);
            testRuns += 1;
        }));

        assert.deepEqual(testValues, [1, 2, 3, 4]);
        assert.strictEqual(testRuns, 2);
    });

    it('formats titles with passed value', function() {
        var tests = run(testData(1, 'a', null, true, function nop() {}, function() {}, [3, 4], {a: 1}).test('example test', function(/*val*/) {
            assert.ok(true);
        }));

        var titles = tests.map(function(test) { return test.title; });
        assert.deepEqual(titles, [
            'example test <1>',
            'example test <a>',
            'example test <null>',
            'example test <true>',
            'example test <nop()>',
            'example test <[function]>',
            'example test <[ 3, 4 ]>',
            'example test <{ a: 1 }>'
        ]);
    });
});
