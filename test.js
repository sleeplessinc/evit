
Evit = require("./evit.js");

Thing = function() {
	this.name = "Mr. Thing";
}

Thing.prototype = new Evit();

t = new Thing();
t.on("foo", function() {
	console.log(this.name + ": foo happened");
});
t.emit("foo");			// prints "foo happens"
t.emit("bar");			// 


Evit({ name: "Elmer", })
.on("ouch", function(utterance) {
	console.log(this.name+" says, "+utterance);
})
.emit("ouch", "Aaargh!!");




