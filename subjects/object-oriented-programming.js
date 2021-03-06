// *************************************************************************************************************************************************************
// constructors
// *************************************************************************************************************************************************************

// Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

// Here is an example of a constructor:

// function Bird() {
//   this.name = "Albert";
//   this.color = "blue";
//   this.numLegs = 2;
// }
// This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively.

// Constructors follow a few conventions:

// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.

// The Bird and Dog constructors from last challenge worked well. However, notice that all Birds that are created with the Bird constructor are automatically named Albert, are blue in color, and have two legs. 
// What if you want birds with different values for name and color? It's possible to change the properties of each bird manually but that would be a lot of work:

// let swan = new Bird();
// swan.name = "Carlos";
// swan.color = "white";
// Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, 
// then change the properties to different values for every one.

// To more easily create different Bird objects, you can design your Bird constructor to accept parameters:

// function Bird(name, color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 2;
// }
// Then pass in the values as arguments to define each unique bird into the Bird constructor:

// let cardinal = new Bird("Bruce", "red");

// This gives a new instance of Bird with name and color properties set to Bruce and red, respectively. The numLegs property is still set to 2.

// The cardinal has these properties:

// cardinal.name // => Bruce
// cardinal.color // => red
// cardinal.numLegs // => 2
// The constructor is more flexible. It's now possible to define the properties for each Bird at the time it is created, which is one way that JavaScript constructors are so useful. 
// They group objects together based on shared characteristics and behavior and define a blueprint that automates their creation.

// instanceof
// Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. 
// instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example:
// let Bird = function(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 2;
//   }

//   let crow = new Bird("Alexis", "black");

//   crow instanceof Bird; // => true
//   console.log(crow instanceof Bird)

// own properties
// *************************************************************************************************************************************************************

// In the following example, the Bird constructor defines two properties: name and numLegs:

// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// let duck = new Bird("Donald");
// let canary = new Bird("Tweety");
// name and numLegs are called own properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties.

// In fact every instance of Bird will have its own copy of these properties.

// The following code adds all of the own properties of duck to the array ownProps:

// let ownProps = [];

// for (let property in duck) {
//   if(duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   }
// }

// console.log(ownProps); // prints [ "name", "numLegs" ]


// Prototype properties to reduce duplicate code
// *************************************************************************************************************************************************************
// Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.

// This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.

// A better way is to use Bird’s prototype. The prototype is an object that is shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype:

// Bird.prototype.numLegs = 2;
// Now all instances of Bird have the numLegs property.

// console.log(duck.numLegs); // prints 2
// console.log(canary.numLegs); // prints 2

// Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects.

// Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. Nearly every object in JavaScript has a prototype property which is part of the constructor function 
// that created it.


// Object Oriented Programming: Iterate Over All Properties
// *************************************************************************************************************************************************************
// You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

// function Bird(name) {
//   this.name = name; //own property
// }

// Bird.prototype.numLegs = 2; // prototype property

// let duck = new Bird("Donald");
// Here is how you add duck’s own properties to the array ownProps and prototype properties to the array prototypeProps:

// let ownProps = [];
// let prototypeProps = [];

// for (let property in duck) {
//   if(duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }

// console.log(ownProps); // prints ["name"]
// console.log(prototypeProps); // prints ["numLegs"]

// Object Oriented Programming: Understand the Constructor Property
// // *************************************************************************************************************************************************************
// There is a special constructor property located on the object instances duck and beagle that were created in the previous challenges:

// let duck = new Bird();
// let beagle = new Dog();

// console.log(duck.constructor === Bird); //prints true
// console.log(beagle.constructor === Dog); //prints true
// Note that the constructor property is a reference to the constructor function that created the instance.

// The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:

// function joinBirdFraternity(candidate) {
//   if (candidate.constructor === Bird) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Object Oriented Programming: Change the Prototype to a New Object
// // *************************************************************************************************************************************************************
// Up until now you have been adding properties to the prototype individually:

// Bird.prototype.numLegs = 2;
// This becomes tedious after more than a few properties.

// Bird.prototype.eat = function() {
//   console.log("nom nom nom");
// }

// Bird.prototype.describe = function() {
//   console.log("My name is " + this.name);
// }

// A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

// Bird.prototype = {
//   numLegs: 2, 
//   eat: function() {
//     console.log("nom nom nom");
//   },
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };


// Object Oriented Programming: Remember to Set the Constructor Property when Changing the Prototype
// // *************************************************************************************************************************************************************
// There is one crucial side effect of manually setting the prototype to a new object. It erased the constructor property! The code in the previous challenge would print the following for duck:

// console.log(duck.constructor)
// // prints ‘undefined’ - Oops!
// To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

// Bird.prototype = {
//   constructor: Bird, // define the constructor property
//   numLegs: 2,
//   eat: function() {
//     console.log("nom nom nom");
//   },
//   describe: function() {
//     console.log("My name is " + this.name); 
//   }
// };


// Object Oriented Programming: Understand the Prototype Chain
// // *************************************************************************************************************************************************************
// All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

// function Bird(name) {
//   this.name = name;
// }

// typeof Bird.prototype; // => object
// Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

// Object.prototype.isPrototypeOf(Bird.prototype);
// // returns true
// How is this useful? You may recall the hasOwnProperty method from a previous challenge:

// let duck = new Bird("Donald");
// duck.hasOwnProperty("name"); // => true
// The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain.

// In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck.

// Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.

// Object Oriented Programming: Use Inheritance So You Don't Repeat Yourself
// // *************************************************************************************************************************************************************
// There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

// Notice in the example below that the describe method is shared by Bird and Dog:

// Bird.prototype = {
//   constructor: Bird,
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };

// Dog.prototype = {
//   constructor: Dog,
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };
// The describe method is repeated in two places. The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:

// function Animal() { };

// Animal.prototype = {
//   constructor: Animal, 
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };
// Since Animal includes the describe method, you can remove it from Bird and Dog:

// Bird.prototype = {
//   constructor: Bird
// };

// Dog.prototype = {
//   constructor: Dog
// };

// Object Oriented Programming: Inherit Behaviors from a Supertype
// // *************************************************************************************************************************************************************
// In the previous challenge, you created a supertype called Animal that defined behaviors shared by all animals:

// function Animal() { }
// Animal.prototype.eat = function() {
//   console.log("nom nom nom");
// };
// This and the next challenge will cover how to reuse Animal's methods inside Bird and Dog without defining them again. It uses a technique called inheritance.

// This challenge covers the first step: make an instance of the supertype (or parent).

// You already know one way to create an instance of Animal using the new operator:

// let animal = new Animal();
// There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:

// let animal = Object.create(Animal.prototype);
// Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of animal to be Animal's prototype, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.

// animal.eat(); // prints "nom nom nom"
// animal instanceof Animal; // => true


// Object Oriented Programming: Set the Child's Prototype to an Instance of the Parent
// // *************************************************************************************************************************************************************
// In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) Animal: making a new instance of Animal.

// This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

// Bird.prototype = Object.create(Animal.prototype);
// Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal.

// let duck = new Bird("Donald");
// duck.eat(); // prints "nom nom nom"
// duck inherits all of Animal's properties, including the eat method.

// Object Oriented Programming: Reset an Inherited Constructor Property
// // *************************************************************************************************************************************************************
// When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

// Here's an example:

// function Bird() { }
// Bird.prototype = Object.create(Animal.prototype);
// let duck = new Bird();
// duck.constructor // function Animal(){...}
// But duck and all instances of Bird should show that they were constructed by Bird and not Animal. To do so, you can manually set Bird's constructor property to the Bird object:

// Bird.prototype.constructor = Bird;
// duck.constructor // function Bird(){...}

// Object Oriented Programming: Add Methods After Inheritance
// // *************************************************************************************************************************************************************
// A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

// For example, Bird is a constructor that inherits its prototype from Animal:

// function Animal() { }
// Animal.prototype.eat = function() {
//   console.log("nom nom nom");
// };
// function Bird() { }
// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Bird;
// In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects. Here, Bird will get a fly() function. 
// Functions are added to Bird's prototype the same way as any constructor function:

// Bird.prototype.fly = function() {
//   console.log("I'm flying!");
// };
// Now instances of Bird will have both eat() and fly() methods:

// let duck = new Bird();
// duck.eat(); // prints "nom nom nom"
// duck.fly(); // prints "I'm flying!"


// Object Oriented Programming: Override Inherited Methods
// // *************************************************************************************************************************************************************
// In previous lessons, you learned that an object can inherit its behavior (methods) from another object by cloning its prototype object:

// ChildObject.prototype = Object.create(ParentObject.prototype);
// Then the ChildObject received its own methods by chaining them onto its prototype:

// ChildObject.prototype.methodName = function() {...};
// It's possible to override an inherited method. It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override.

// Here's an example of Bird overriding the eat() method inherited from Animal:

// function Animal() { }
// Animal.prototype.eat = function() {
//   return "nom nom nom";
// };
// function Bird() { }

// // Inherit all methods from Animal
// Bird.prototype = Object.create(Animal.prototype);

// // Bird.eat() overrides Animal.eat()
// Bird.prototype.eat = function() {
//   return "peck peck peck";
// };
// If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on duck’s prototype chain:

// 1. duck => Is eat() defined here? No.

// 2. Bird => Is eat() defined here? => Yes. Execute it and stop searching.

// 3. Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.

// 4. Object => JavaScript stopped searching before reaching this level.


// Object Oriented Programming: Use a Mixin to Add Common Behavior Between Unrelated Objects
// // *************************************************************************************************************************************************************
// As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.

// For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

// let flyMixin = function(obj) {
//   obj.fly = function() {
//     console.log("Flying, wooosh!");
//   }
// };
// The flyMixin takes any object and gives it the fly method.

// let bird = {
//   name: "Donald",
//   numLegs: 2
// };

// let plane = {
//   model: "777",
//   numPassengers: 524
// };

// flyMixin(bird);
// flyMixin(plane);
// Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. Now bird and plane can both fly:

// bird.fly(); // prints "Flying, wooosh!"
// plane.fly(); // prints "Flying, wooosh!"
// Note how the mixin allows for the same fly method to be reused by unrelated objects bird and plane.


// Object Oriented Programming: Use Closure to Protect Properties Within an Object from Being Modified Externally
// // *************************************************************************************************************************************************************
// In the previous challenge, bird had a public property name. It is considered public because it can be accessed and changed outside of bird's definition.

// bird.name = "Duffy";
// Therefore, any part of your code can easily change the name of bird to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. 
// That could cause a lot of issues.

// The simplest way to make properties private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. 
// This way, the property can only be accessed and changed by methods also within the constructor function.

// function Bird() {
//   let hatchedEgg = 10; // private property

//   this.getHatchedEggCount = function() { // publicly available method that a bird object can use
//     return hatchedEgg;
//   };
// }
// let ducky = new Bird();
// ducky.getHatchedEggCount(); // returns 10
// Here getHachedEggCount is a privileged method, because it has access to the private variable hatchedEgg. This is possible because hatchedEgg is declared in the same context as getHachedEggCount.
//  In JavaScript, a function always has access to the context in which it was created. This is called closure.


// Object Oriented Programming: Understand the Immediately Invoked Function Expression (IIFE)
// // *************************************************************************************************************************************************************
// A common pattern in JavaScript is to execute a function as soon as it is declared:

// (function () {
//   console.log("Chirp, chirp!");
// })(); // this is an anonymous function expression that executes right away
// // Outputs "Chirp, chirp!" immediately
// Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. 
// This pattern is known as an immediately invoked function expression or IIFE.


// Object Oriented Programming: Use an IIFE to Create a Module
// // *************************************************************************************************************************************************************
// An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins:

// function glideMixin(obj) {
//   obj.glide = function() {
//     console.log("Gliding on the water");
//   };
// }
// function flyMixin(obj) {
//   obj.fly = function() {
//     console.log("Flying, wooosh!");
//   };
// }
// We can group these mixins into a module as follows:

// let motionModule = (function () {
//   return {
//     glideMixin: function (obj) {
//       obj.glide = function() {
//         console.log("Gliding on the water");
//       };
//     },
//     flyMixin: function(obj) {
//       obj.fly = function() {
//         console.log("Flying, wooosh!");
//       };
//     }
//   }
// }) (); // The two parentheses cause the function to be immediately invoked
// Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. This returned object contains all of the mixin behaviors as properties of the object.

// The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:

// motionModule.glideMixin(duck);
// duck.glide();