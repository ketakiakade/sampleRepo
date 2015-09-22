var Car = function(loc)
{
	this.loc = loc;
	console.log("Inside Car Construct");
};

Car.prototype.move=function(){
this.loc++;
console.log("Inside move");
};

var Van = function(loc)
{
	Car.call(this,loc);
	console.log("Inside Van Construct");
};

Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;
Van.prototype.grab = function(){
console.log("Inside Grab");
};


var amy = Van(1);

/*
console.log("--------------------Van------------------------");
console.log(Car.prototype);
console.log(Car.constructor);
console.log(Car.prototype.constructor);
console.log(Car.constructor.prototype);
console.log("--------------------------------------------");
*/
/*
//console.log(amy.prototype);
//console.log(amy.constructor);

console.log("--------------------Amy------------------------");
console.log(amy.prototype);
console.log(amy.constructor);
//console.log(amy.prototype.constructor);
console.log(amy.constructor.prototype);
console.log(amy.toString());
console.log("--------------------------------------------");*/



