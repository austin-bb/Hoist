// // GIVEN
// console.log(example);
// var example = "I'm the example!";
// // AFTER HOISTING BY THE INTERPRETER
//     // var example;
//     // console.log(example); // logs undefined
//     // example = "I'm the example!";

// console.log(example);
// let example = "I'm the example!";    

// // 1.
console.log(hello);                                   
var hello = 'world';
// // AFTER HOISTING BY THE INTERPRETER
//     var hello;
//     console.log(hello); // logs undefined
//     hello = 'world';

// 2. 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
    // var needle = 'haystack';
    // test(); // call the function
    // function test()
    // var needle = 'magnet' // changes var needle to magnet in the local scope
    // console.log(needle); // logs magnet

// 3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
// console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
    // var brendan = 'super cool';
    // function print()
        // brendan = 'only okay';
        // console.log(brendan); // doesn't log anything because the function hasnt been called 
    // console.log(brendan); // logs super cool 

// 4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
    // var food = 'chicken';
    // console.log(food); // logs chicken
    // eat(); // calls the function
    // function eat(); // the function
    // food = 'half-chicken'; // changes the value of food in a global scope
    // console.log(food); // logs half-chicken
    // var food = 'gone'; 

// 5. 
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER
    // mean(); // calls the function
    // var food;
    // 


// 6. 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
    // var genre 
    // console.log(genre); // logs undefined
    // var genre = disco
    // rewind() // calls the function 
    // function rewind()
    // genre = 'rock'; changes the value of genre
    // console.log(genre); // logs rock
    // var genre = "r&b";
    // console.log(genre); // logs r&b

    // console.log(genre); // logs disco

// // 7. 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
    // dojo = "san jose";
    // console.log(dojo); // logs san jose
    // learn(): // calls the function
    // function learn(); 
    // dojo = "seattle"
    // console.log(dojo); // logs seattle
    // var dojo = "burbank";
    // console.log(dojo); // logs burbank

    // console.log(dojo); // san jose


// // 8. bonus 
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
// const dojo = {};
// dojo.name = name;
// dojo.students = students;
// if(dojo.students > 50){
//     dojo.hiring = true;
// }
// else if(dojo.students <= 0){
//     dojo = "closed for now";
// }
// return dojo;
// }
