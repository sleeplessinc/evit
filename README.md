
# Evit

(EV)ent Em(IT)ter

Minimalist event emitters.


## Install

	npm install evit


## Example

If running in node.js environment:

	Evit = require("evit");


For browser use:
	
	<script src="evit.js"></script>


In either environment:

	Thing = function() {
	}

	Thing.prototype = new Evit();

	t = new Thing();
	t.on("foo", function() {
		console.log("foo happens");
	});
	t.emit("foo");			// prints "foo happens"
	t.emit("bar");			// 
	t.emit("foo");			// prints "foo happens"


