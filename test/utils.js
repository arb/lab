// Load modules

var _Lab = require('../test_runner');
var Utils = require('../lib/utils');


// Declare internals

var internals = {};


// Test shortcuts

var lab = exports.lab = _Lab.script();
var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = _Lab.expect;


describe('Utils', function () {

    it('merges options', function (done) {

        var parent = {
            a: 1,
            b: 2
        };

        var child = {
            b: 3,
            c: 4
        };

        var merged = Utils.mergeOptions(parent, child);
        expect(merged).to.deep.equal({ a: 1, b: 3, c: 4 });
        done();
    });

    it('merges options (no child)', function (done) {

        var parent = {
            a: 1,
            b: 2
        };

        var merged = Utils.mergeOptions(parent, null);
        expect(merged).to.deep.equal({ a: 1, b: 2 });
        done();
    });

    it('merges options (no parent)', function (done) {

        var child = {
            b: 3,
            c: 4
        };

        var merged = Utils.mergeOptions(null, child);
        expect(merged).to.deep.equal({ b: 3, c: 4 });
        done();
    });
});
