/*jshint loopfunc: true*/

var test = require('mocha').test;
var util = require('util');

function testData() {
    'use strict';

    var async = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    if (args.length === 0) {
        throw new Error('[test-data] at least one argument is required.');
    }
    if (args.length === 1 && Array.isArray(args[0])) {
        args = args[0];
    }

    function formatTitle(title, value) {
        var valueFmt;
        if (typeof value === 'function') {
            valueFmt = value.name ? value.name + '()' : '[function]';
        } else if (typeof value === 'object') {
            valueFmt = util.inspect(value);
        } else {
            valueFmt = value;
        }
        return title + ' <' + valueFmt + '>';
    }

    function testWithData(title, fn) {
        return args.map(function(arg) {
            return test(formatTitle(title, arg), function() {
                fn.apply(this, Array.isArray(arg) ? arg : [arg]);
            });
        });
    }

    function testWithDataAsync(title, fn) {
        return args.map(function(arg) {
            return test(formatTitle(title, arg), function(done) {
                fn.apply(this, Array.isArray(arg) ? [done].concat(arg) : [done, arg]);
            });
        });
    }

    var defineTest = async ? testWithDataAsync : testWithData;

    return {
        it: defineTest,
        test: defineTest
    };
}

module.exports = testData.bind(null, false);
module.exports.async = testData.bind(null, true);
