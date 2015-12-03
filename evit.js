


Evit = function() {
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

}


if((typeof process) !== 'undefined') {
	// we're in node.js (versus browser)
	module.exports = Evit

	if(require && require.main === module) {
		// this module is being executed directly
		require('./test.js')
	}

}




