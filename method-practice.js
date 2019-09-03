// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************
// .map() is used to apply a function on every element in an array. A new array is then returned.
// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************

// syntax example
// let newArr = oldArr.map((val, index, arr) => {
//     // return element to new Array
//   });

// *************************************************************************************************************************************************************

// example function 1 
// *************************************************************************************************************************************************************

// let arr = [1,2,3,4];

// let plus5 = arr.map((val, i, arr) => {
//     return val + 5;
//   });

// *************************************************************************************************************************************************************

//   example function 2: 
//   In this example we’ll utilize both the value and index arguments. We’ll start with the same basic array as last time:

// let arr = [1,2,3,4];

// let newArr = arr.map((val, i, arr) => {
//     return {
//       value: val,
//       index: i
//     };
//   });

// console.log(newArr);

// *************************************************************************************************************************************************************

// example map function #3
// Up to this point, all of our examples have transformed all of the values in the old array. What if we only want to transform some of the values in our array? 
// There are a number of ways we could tackle this problem, here’s one possible solution.
// *************************************************************************************************************************************************************

// let arr = [1,2,3,4];

// let newArr = arr.map((v,i,a) => {
//     return v % 2 === 0 ? v * 2 : v;
//   });

// console.log(newArr);

// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************
// .filter()
// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************

// var ages = [32, 33, 16, 40];

// function checkAdult(age) {
//   return age >= 18;
// }

// var oldPeople = ages.filter(checkAdult)
// console.log(oldPeople);

// var newArr = ages.filter(item => item < 33)
// console.log(`newArr = ${newArr}`);


// *************************************************************************************************************************************************************
// Math.ceil()
// *************************************************************************************************************************************************************

// function round5(x)
// {
//     return Math.ceil(x/5)*5;
// }

// console.log(round5(3));

// function round10(x)
// {
//     return Math.ceil(x/10)*10;
// }

// console.log(round10(3));

// *************************************************************************************************************************************************************
// function to return an array of numbers of the range between start and end
// *************************************************************************************************************************************************************

// function range(start, end) {
//     var ans = [];
//     for (let i = start; i <= end; i++) {
//         ans.push(i);
//     }
//     return ans;
//   }

// function countPairs(n, arr) {
//     let pairs = 0;
//     const results = []
//     let sortedArr = arr.slice().sort()
//     console.log(sortedArr);

//     for (var i = 0; i < sortedArr.length -1; i++) {
//       if (sortedArr[i +1] == sortedArr[i]) {
//         results.push(sortedArr[i])
//       }
//     }
//     console.log(results)
//   }

//   countPairs(7, [1,2,1,2,1,3,2])

// *************************************************************************************************************************************************************
// .concat() example
// *************************************************************************************************************************************************************

// function nonMutatingConcat(original, attach) {
//     // Add your code below this line
//     return original.concat(attach)
    
//     // Add your code above this line
//   }
//   var first = [1, 2, 3];
//   var second = [4, 5];
//   nonMutatingConcat(first, second);

// *************************************************************************************************************************************************************
// functional programming approach to splice (better to use slice and not mutate)
// *************************************************************************************************************************************************************
// function nonMutatingSplice(cities) {
//     // Add your code below this line
//     const newArr = cities.slice(0, 3);
//     return newArr
//     // return cities.splice(3);
    
//     // Add your code above this line
//   }
  
//   var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
 
//   console.log(nonMutatingSplice(inputCities));

// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************
// SPREAD AND REST OPERATOR EXAMPLES
// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************
//              spread
// const numbers1 = [ 3, 4, 5];
// const numbers2 = [ 1, 2, ...numbers1, 6,7,8];

// console.log(numbers2)

//              rest
// function sum(...numbers) {
//     return numbers.reduce((accumulator, current) => {
//         return accumulator += current;
//     });
// };

// sum(1, 2) // 3
// sum(1, 2, 3, 4, 5) // 15



// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************
// Bubble sort algorithm examples
// Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted,
// compares each pair of adjacent items and swaps them if they are in the wrong order.
// The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.
// *************************************************************************************************************************************************************

// array to sort
// var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// // swap function helper
// function swap(array, i, j) {
//   var temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }

// // be careful: this is a very basic implementation which is nice to understand the deep principle of bubble sort (going through all comparisons) but it can be greatly improved for performances
// function bubbleSortBasic(array) {
//   for(var i = 0; i < array.length; i++) {
//     for(var j = 1; j < array.length; j++) {
//       if(array[j - 1] > array[j]) {
//         swap(array, j - 1, j);
//       }
//     }
//   }
//   return array;
// }

// console.log(bubbleSortBasic(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// // correct implementation: this is the usual implementation of the bubble sort algorithm. Some loops execution are avoided if not they are not needed
// function bubbleSort(array) {
//   var swapped;
//   do {
//     swapped = false;
//     for(var i = 0; i < array.length; i++) {
//       if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
//         swap(array, i, i + 1);
//         swapped = true;
//       }
//     }
//   } while(swapped);
//   return array;
// }

// console.log(bubbleSort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// *************************************************************************************************************************************************************
// example with counters

// sample of arrays to sort
// var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// // swap function helper
// function swap(array, i, j) {
//   var temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }

// // be careful: this is a very basic implementation which is nice to understand the deep principle of bubble sort (going through all comparisons) but it can be greatly improved for performances
// function bubbleSortBasic(array) {
//   var countOuter = 0;
//   var countInner = 0;
//   var countSwap = 0;

//   for(var i = 0; i < array.length; i++) {
//     countOuter++;
//     console.log('outer', array)
//     console.log("###################")
//     for(var j = 1; j < array.length; j++) {
//       countInner++;
//       console.log('inner', array)
//       if(array[j - 1] > array[j]) {
//         countSwap++;
//         swap(array, j - 1, j);
//         console.log('swap', array)
//       }
//     }
//   }

//   console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
//   return array;
// }

// bubbleSortBasic(arrayRandom.slice()); // => outer: 10 inner: 90 swap: 21
// console.log(bubbleSortBasic(arrayRandom.slice()))
// bubbleSortBasic(arrayOrdered.slice()); // => outer: 10 inner: 90 swap: 0
// console.log(bubbleSortBasic(arrayOrdered.slice()))
// bubbleSortBasic(arrayReversed.slice()); // => outer: 10 inner: 90 swap: 45
// console.log(bubbleSortBasic(arrayReversed.slice()))

// correct implementation: this is the usual implementation of the bubble sort algorithm. Some loops execution are avoided if not they are not needed
// function bubbleSort(array) {
//   var countOuter = 0;
//   var countInner = 0;
//   var countSwap = 0;

//   var swapped;
//   do {
//     countOuter++;
//     swapped = false;
//     for(var i = 0; i < array.length; i++) {
//       countInner++;
//       if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
//         countSwap++;
//         swap(array, i, i + 1);
//         swapped = true;
//       }
//     }
//   } while(swapped);

//   console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
//   return array;
// }

// bubbleSort(arrayRandom.slice()); // => outer: 9 inner: 90 swap: 21
// bubbleSort(arrayOrdered.slice()); // => outer: 1 inner: 10 swap: 0
// bubbleSort(arrayReversed.slice()); // => outer: 10 inner: 100 swap: 45


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


// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************
// Introduction to the Functional Programming Challenges
// // *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************

// Functional programming is an approach to software development based around the evaluation of functions. Like mathematics, functions in programming map input to output to produce a result. 
// You can combine basic functions in many ways to build more and more complex programs.

// Functional programming follows a few core principles:

// Functions are independent from the state of the program or global variables. They only depend on the arguments passed into them to make a calculation

// Functions try to limit any changes to the state of the program and avoid changes to the global objects holding data

// Functions have minimal side effects in the program

// The functional programming software development approach breaks a program into small, testable parts. This section covers basic functional programming principles in JavaScript.


// Functional Programming: Learn About Functional Programming
// // *************************************************************************************************************************************************************
// Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope.

// INPUT -> PROCESS -> OUTPUT

// Functional programming is about:

// 1) Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

// 2) Pure functions - the same input always gives the same output

// 3) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled


// Functional Programming: Understand the Hazards of Using Imperative Code
// // *************************************************************************************************************************************************************
// Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs. But before we get there, let's look at an imperative approach to programming to highlight where you may have issues.

// In English (and many other languages), the imperative tense is used to give commands. Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.

// Often the statements change the state of the program, like updating global variables. A classic example is writing a for loop that gives exact directions to iterate over the indices of an array.

// In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.

// JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using the for loop mentioned above, you could call the map method which handles the details of iterating over an array. This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.

// Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened. Let's try to model this using some simple object-oriented code.

// A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

// The code editor shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join(). The array tabs is part of the Window object that stores the name of the open pages.

// Instructions
// Run the code in the editor. It's using a method that has side effects in the program, causing incorrect output. The final list of open tabs should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the output will be slightly different.

// FIND THE MISTAKE 

// // tabs is an array of titles of each site open within the window
// var Window = function(tabs) {
//     this.tabs = tabs; // we keep a record of the array inside the object
//   };

//   // When you join two windows into one window
//   Window.prototype.join = function (otherWindow) {
//     this.tabs = this.tabs.concat(otherWindow.tabs);
//     return this;
//   };

//   // When you open a new tab at the end
//   Window.prototype.tabOpen = function (tab) {
//     this.tabs.push('new tab'); // let's open a new tab for now
//     return this;
//   };

//   // When you close a tab
//   Window.prototype.tabClose = function (index) {
//     var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
//     var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab

//     this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together 
//     return this;
//    };

//   // Let's create three browser windows
//   var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
//   var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
//   var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites

//   // Now perform the tab opening, closing, and other operations
//   var finalTabs = socialWindow
//                       .tabOpen() // Open a new tab for cat memes
//                       .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//                       .join(workWindow.tabClose(1).tabOpen());

//   alert(finalTabs.tabs);

// *************************************************************************************************************************************************************
// example of not mutating values

// the global variable
// var fixedValue = 4;

// function incrementer () {
//   // Add your code below this line
//   return fixedValue + 1;

//   // Add your code above this line
// }

// var newValue = incrementer(); // Should equal 5
// console.log(fixedValue); // Should print 4

// *************************************************************************************************************************************************************


// Functional Programming: Pass Arguments to Avoid External Dependence in a Function
// // *************************************************************************************************************************************************************
// The last challenge was a step closer to functional programming principles, but there is still something missing.

// We didn't alter the global variable value, but the function incrementer would not work without the global variable fixedValue being there.

// Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

// There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.

// This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.

// Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.


// Functional Programming: Refactor Global Variables Out of Functions
// // *************************************************************************************************************************************************************
// So far, we have seen two distinct principles for functional programming:

// 1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.

// 2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

// Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.

// example:

// the global variable
// var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// /* This function should add a book to the list and return the list */
// // New parameters should come before the bookName one

// function add (arr, bookName) {
//     let newArr = [...arr];
//     newArr.push(bookName);
//     return newArr;
// }

// /* This function should remove a book from the list and return the list */
// // New parameters should come before the bookName one

// // Add your code below this line

// function remove (arr, bookName) {
//     let newArr = [...arr];
//     if (newArr.indexOf(bookName) >= 0) {
//         newArr.splice(newArr.indexOf(bookName), 1);
//         return newArr;
//     }
// }

// var newBookList = add(bookList, 'A Brief History of Time');
// var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(bookList);


// the global variable
var watchList = [
    {  
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
   }
];

// Add your code below this line

// var rating = [];
// for(var i=0; i < watchList.length; i++){
// rating.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
// }

// let rating = watchList.map(item => {
//     return `${item.Title} , ${item.imdbRating}`
// })

// const rating = watchList.map( item => ({"title":item["Title"], "rating":item["imdbRating"]}) );

// // Add your code above this line

// console.log(rating); 

// Functional Programming: Implement map on a Prototype
// // *************************************************************************************************************************************************************
// As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

// In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

// It would teach us a lot about map to try to implement a version of it that behaves exactly like the Array.prototype.map() with a for loop or Array.prototype.forEach().

// Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

// // the global Array
// var s = [23, 65, 98, 5];

// Array.prototype.myMap = function(callback){
//   var newArray = [];
//   // Add your code below this line
//   this.forEach(a => newArray.push(callback(a)));
//   // Add your code above this line
//   return newArray;

// };

// var new_s = s.myMap(function(item){
//   return item * 2;
// });


// Functional Programming: Use the filter Method to Extract Data from an Array
// // *************************************************************************************************************************************************************
// Another useful array function is Array.prototype.filter(), or simply filter(). The filter method returns a new array which is at most as long as the original array, but usually has fewer items.
// Filter doesn't alter the original array, just like map. It takes a callback function that applies the logic inside the callback on each element of the array. 
// If an element returns true based on the criteria in the callback function, then it is included in the new array.

// The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map to return a new array of objects with only title and rating keys, 
// but where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may want to convert them into numbers to perform mathematical operations on them.


// const ratings = watchList.map( item => ({"title":item["Title"], "rating":item["imdbRating"]}) )

// var filteredList = ratings.filter(item => parseInt(item.rating) >= 8.0)

// // console.log(ratings[0].title)
// console.log(ratings)
// console.log("##############")
// console.log(filteredList); 

// *************************************************************************************************************************************************************
// answer with map and filter chained together:

// var filteredList = watchList.map(function(e) {
//     return {title: e["Title"], rating: e["imdbRating"]}
//   }).filter((e) => e.rating >= 8);
  
//   console.log(filteredList); 

// Functional Programming: Implement the filter Method on a Prototype
// *************************************************************************************************************************************************************
// It would teach us a lot about the filter method if we try to implement a version of it that behaves exactly like Array.prototype.filter(). It can use either a for loop or Array.prototype.forEach().
// Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

// the global Array
// var s = [23, 65, 98, 5];

// Array.prototype.myFilter = function(callback){
//   var newArray = [];
//   // Add your code below this line
//   this.forEach( x => {
//     if (callback(x) == true) {
//       newArray.push(x);
//     }
//   })
//   // Add your code above this line
//   return newArray;

// };

// const newS = s.myFilter(item => {
//     return item % 2 === 1;
// })

// console.log(newS)


// Functional Programming: Use the reduce Method to Analyze Data
// // *************************************************************************************************************************************************************
// Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript. You can solve almost any array processing problem using the reduce method.
// This is not the case with the filter and map methods since they do not allow interaction between two different elements of the array. For example, if you want to compare elements of the array, 
// or add them together, filter or map could not process that.
// The reduce method allows for more general forms of array processing, and it's possible to show that both filter and map can be derived as a special application of reduce.
// However, before we get there, let's practice using reduce first.

// The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. 
// Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, but save the final average into the variable averageRating. 
// Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

const newArr = watchList.filter(item => item.Director === "Christopher Nolan").map(item => parseFloat(item.imdbRating)).reduce((acc, cur,) => acc + cur) / watchList.filter(item => item.Director === "Christopher Nolan").length;
console.log("newArr: ", newArr)

// const ratings = watchList.map(item => {
//     return  `${item.Title}: ${parseFloat(item.imdbRating)}`
//     // return parseFloat(item.imdbRating);
// });

// console.log("ratings: ", ratings)

// const nolanRatings = ratings.filter(item => item.Director === "Christopher Nolan");

// console.log("nolanRatings: ", nolanRatings)

// const ratingTotal = ratings.reduce(function(acc, cur, dex, arr) {
    
//     let totalScore = acc + cur;
//     console.log("totalScore: ", totalScore)
//     return totalScore;
// });

// const averageRating = ratingTotal / ratings.length

// console.log(ratings) 
// console.log("averageRating: ", averageRating)

// // *************************************************************************************************************************************************************
// // one line best version

// var averageRating = watchList.filter(x => x.Director === "Christopher Nolan").map(x => Number(x.imdbRating)).reduce((x1, x2) => x1 + x2) / watchList.filter(x => x.Director === "Christopher Nolan").length;
// // *************************************************************************************************************************************************************