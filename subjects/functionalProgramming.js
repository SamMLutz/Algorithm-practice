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

// const newArr = watchList.filter(item => item.Director === "Christopher Nolan").map(item => parseFloat(item.imdbRating)).reduce((acc, cur,) => acc + cur) / watchList.filter(item => item.Director === "Christopher Nolan").length;
// console.log("newArr: ", newArr)

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


// Functional Programming: Return a Sorted Array Without Changing the Original Array
// // *************************************************************************************************************************************************************
// A side effect of the sortmethod is that it changes the order of the elements in the original array. In other words, it mutates the array in place. 
// One way to avoid this is to first concatenate an empty array to the one being sorted (remember that concatreturns a new array), then run the sortmethod.

// Use the sortmethod in the nonMutatingSortfunction to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArrayvariable.

// var globalArray = [5, 6, 3, 2, 9];
// function nonMutatingSort(arr) {
//   // Add your code below this line
//   return arr.sort(function(a,b) {
//      console.log("array: ", arr)
//          return a > b;
//        });
  
//   // Add your code above this line
// }

// console.log(nonMutatingSort(globalArray));

// function alphabeticalOrder(arr) {
//    // Add your code below this line
//    const sortArr = arr.sort((a, b) => {
//      return a > b;
//    });
 
//    console.log(sortArr);
 
//    return sortArr;
   
//    // Add your code above this line
// }

// alphabeticalOrder(["a","g","c","b"])

// function reverseAlpha(arr) {
//    return arr.sort(function(a, b) {
//      return a > b ? 1 : -1;
//    });
//  }

// console.log(reverseAlpha(['b','n','a','j']));
// console.log(reverseAlpha([4,7,2,1]));

// var globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {
//   // Add your code below this line
//   return [].concat(arr).sort(function(a, b) {
//     return a - b;
//   });
//   // Add your code above this line
// }
// nonMutatingSort(globalArray);

// const sortedArr = nonMutatingSort(globalArray);

// console.log(sortedArr)


// Functional Programming: Introduction to Currying and Partial Application
// // *************************************************************************************************************************************************************
// The arityof a function is the number of arguments it requires. Curryinga function means to convert a function of N arityinto N functions of arity1.

// In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

// Here's an example:

// //Un-curried function
// function unCurried(x, y) {
//   return x + y;
// }

// //Curried function
// function curried(x) {
//   return function(y) {
//     return x + y;
//   }
// }
// curried(1)(2) // Returns 3

// This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, 
// which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curriedfunction in the example above:

// // Call a curried function in parts:
// var funcForY = curried(1);
// console.log(funcForY(2)); // Prints 3

// Similarly, partial applicationcan be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.

// Here's an example:

// //Impartial function
// function impartial(x, y, z) {
//   return x + y + z;
// }
// var partialFn = impartial.bind(this, 1, 2);
// partialFn(10); // Returns 13


// Functional Programming: Introduction to Currying and Partial Application
// // *************************************************************************************************************************************************************
// The arityof a function is the number of arguments it requires. Curryinga function means to convert a function of N arityinto N functions of arity1.

// In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

// Here's an example:

// //Un-curried function
// function unCurried(x, y) {
//   return x + y;
// }

// //Curried function
// function curried(x) {
//   return function(y) {
//     return x + y;
//   }
// }
// curried(1)(2) // Returns 3

// This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, 
// which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curriedfunction in the example above:

// // Call a curried function in parts:
// var funcForY = curried(1);
// console.log(funcForY(2)); // Prints 3
// Similarly, partial applicationcan be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.

// Here's an example:

// //Impartial function
// function impartial(x, y, z) {
//   return x + y + z;
// }
// var partialFn = impartial.bind(this, 1, 2);
// partialFn(10); // Returns 13

// another example:

// function add(x) {
//     // Add your code below this line
//     return function(y) {
//       return function(z) {
//         return x + y + z;
//       }
//     }
//     // Add your code above this line
//   }
//   add(10)(20)(30);