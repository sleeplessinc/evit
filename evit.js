

var Evit = function(subj) {
	var self = subj ? subj : this;

	var listeners = {};

	var emit = self.emit = function(ev) {
		var args = Array.prototype.slice.call(arguments);
		args.shift();		// drop event name
		var a = listeners[ev];
		if(a !== undefined) {
			a.forEach(function(o) {
				var cb = o.cb;
				var t = o.t;
				cb.apply(t, args);
			});
		}
		return self;
	}

	var on = self.on = function(ev, cb) {
		var a = listeners[ev];
		if(a === undefined) {
			a = [];
			listeners[ev] = a;
		}
		a.push({t: this, cb:cb});
		return self;
	}

	return self;
};


if((typeof process) !== 'undefined') {
	// test

	// we're in node.js (versus browser)

	module.exports = Evit;

	if(require && require.main === module) {
		// this module is being executed directly
		require('./test.js')
	}

}


