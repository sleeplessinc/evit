
Evit = require("./evit.js");

Thing = function() {
	this.name = "Mr. Thing";
}

Thing.prototype = new Evit();

t = new Thing();
t.on("foo", function() {
	console.log("foo happens");
});
t.emit("foo");			// prints "foo happens"
t.emit("bar");			// 



