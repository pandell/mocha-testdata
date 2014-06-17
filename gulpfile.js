/*jslint node: true, vars: true */

"use strict";

var gulp = require("gulp");
var jshint = require("gulp-jshint");
var jslint = require("gulp-jslint-simple");
var mocha = require("gulp-mocha");
var monitorCtrlC = require("monitorctrlc");
var taskFromStreams = require("gulp-taskfromstreams");

var rootFiles = "*.js*";
var testFiles = "test.js";

gulp.task("lint", taskFromStreams(function () {
    return [
        gulp.src([rootFiles, testFiles]),
        jshint(),
        jslint.run(),
        jslint.report({ emitErrorAtEnd: true })
    ];
}));

gulp.task("test", ["lint"], taskFromStreams(function () {
    return [
        gulp.src(testFiles),
        mocha({ reporter: "spec" })
    ];
}));

gulp.task("watch", function () {
    monitorCtrlC();
    gulp.watch([rootFiles, testFiles], ["test"]);
    gulp.start("test");
});
