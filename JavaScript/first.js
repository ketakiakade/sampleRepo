var fn = function (one, two)
{
	b:100;
	//console.log(this, "Hey");
};
var move = function(car){
	car.loc++;
	console.log(car.loc);
};

var amy=10;
move(amy);

var p =0, q=1, r=2;

var gold = {a:1};
//console.log(gold.a);
//var blue = extend({}, gold); 

//var x = new fn(p,q);
//console.log(fn.b);


