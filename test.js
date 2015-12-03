
Evit = require("./evit.js");

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


