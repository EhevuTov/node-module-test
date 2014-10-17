var test = require('tap').test;

var Module = require('.././index.js');

var mod = new Module();

test("Load Module", function(t) {
	// test
	t.type(mod, 'object', 'module is an object');
	t.deepEqual(mod.array, [{0: 'init'}], 'module array variable initialized');
	t.end();
});

test("Get Array", function(t) {
	// add some more tests here
	t.deepEqual(mod.array, [{0: 'init'},{1: '1'}], 'module array success');
	t.end();
});

console.dir(mod.getArray());
