function Person(){
	this.name = "native";
	this.sayName = function(){
		
	}	
}
Person.prototype = {
	name:'chai',
	gender:'female',
	age:23,
	sayName:function(){
		alert(this.name);
	}
}

function clickMe(){
	var person = new Person();
	alert(person.name);
	alert(Object.keys(person.__proto__));
}