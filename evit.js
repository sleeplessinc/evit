

var Evit = function() {
	var self = this;

	var listeners = {};

	var emit = self.emit = function(ev) {
		var a = listeners[ev];
		if(a !== undefined) {
			a.forEach(function(cb) {
				cb(ev);
			});
		}
	}

	var on = self.on = function(ev, cb) {
		var a = listeners[ev];
		if(a === undefined) {
			a = [];
			listeners[ev] = a;
		}
		a.push(cb);
	}

};


if((typeof process) !== 'undefined') {

	// we're in node.js (versus browser)

	util = require("util");
	EventEmitter = require("events");

	EE = function(ctr) {
		util.inherits(ctr, EventEmitter);
		var o = new ctr();
		EventEmitter.call(o);
		return o;
	};

	
	var legacy_func = function() { return new Evit(); }
	legacy_func.Evit = Evit;
	legacy_func.EE = EE;

	module.exports = legacy_func;

	if(require && require.main === module) {
		// this module is being executed directly
		require('./test.js')
	}

}


