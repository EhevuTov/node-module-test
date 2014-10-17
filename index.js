var tokenizer = require('c-tokenizer');

function Module() {
	// the array I want to return
	this.array = [];
	this.array.push({0: 'init'});
	this.readFile = require('fs').createReadStream(__dirname+'/test/data/FieldDataSmall.cpp');
	this.parseFunc = function(src, token) {
		console.log(token.type + ' => ' + JSON.stringify(src) + ' => ' + token.regex);
		this.array.push({1: '1'});
	}.bind(this);
	this.t = tokenizer(this.parseFunc);
}

// function is running and returning just fine
Module.prototype.getArray = function () {
	this.readFile.pipe(this.t);
	// this is getting returned just fine
	return this.array;
};

module.exports = Module;
