
Evit = require("./evit.js").Evit;

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

// ---------------


EE = require("./evit.js").EE;
t = new EE(Thing);
t.on("bar", function(name) {
	console.log(name+" says, bar happens");
});
t.emit("bar", t.name);	
t.emit("foo");			// prints "foo happens"


