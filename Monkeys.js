var Monkey = function(name, species, foodEaten, age) {
	this.name = name;
	this.species = species;
	this.foodEaten = foodEaten;
	this.age = age;
};

Monkey.prototype.introduce = function() {
	console.log("Hello my name is " + this.name + ", I am " + this.age + ", my species is " + this.species + " and I have eaten a " + this.foodEaten + ".");
}

//write something that stops you feeding the monkey the same type of food twice

Monkey.prototype.feed = function(newFood) {
	if(newFood === this.foodEaten) {
		console.log("Hey! " + this.name + " needs variety!!")
	} else {
		console.log("Mmmmmm " + this.name + " loves to try new things!")
		this.foodEaten = newFood
	}
};

Monkey.prototype.getFood = function() {
	return this.foodEaten
}

Monkey.prototype.setAge = function (newAge) {
	if(newAge < 0) {
		console.log("A Monkey cannot be less than 0 years old!")
	} else if (newAge > 20) {
		console.log("A monkey cannot generally live to the age of 20!")
	} else {
		this.age = newAge
	}
};

Monkey.prototype.getAge = function () {
	return this.age
}

var bobo = new Monkey ("Bobo", "orangutan");
bobo.setAge(8);
bobo.feed("coconut");
bobo.feed("coconut");
var bubbles = new Monkey ("Bubbles", "chimpanzee");
bubbles.setAge(12);
bubbles.feed("banana");
bubbles.feed("chocolate");
var cheeky = new Monkey ("Cheeky", "baboon");
cheeky.setAge(16);
cheeky.feed("passion fruit");
cheeky.feed("passion fruit");

//bubbles.introduce();
//bobo.introduce();
//cheeky.introduce();

