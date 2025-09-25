// Q1. Write a function that takes an array and a number. Add the number to the end of the array and return it.
function addNumberToEndOfArray(arr, num) {
    // let arr=[]; This line resulted in error that 'SyntaxError: Identifier 'arr' has already been declared'
    let number=num;

    return arr.push(number);
}

//Need to create array here then  use in the function cuz it resluted in error there.. 
let myArrayToPrint=[];

console.log(addNumberToEndOfArray(myArrayToPrint, 23));

//I am thinking to print the array as well..
// console.log(arr); //This resulted in the 'ReferenceError: arr is not defined'
// let myArrayToPrint = [];//ReferenceError: Cannot access 'myArrayToPrint' before initialization

//Now i can print the array because it was declared before usage..
console.log("My array", myArrayToPrint);

//Calling function again along with updated array.
console.log('Updated', addNumberToEndOfArray(myArrayToPrint, 89), myArrayToPrint);

//Creating a loop to call the function multipel times, so that i can see more values on html page.. 
let i=0;
while (i<20) {
    addNumberToEndOfArray(myArrayToPrint, i);
    i++;
};

//Now i am trying to ingest this value inside the html file.. 
document.getElementById('q1').innerHTML= '['+myArrayToPrint+']';


// Q2. Write a function that removes the last element from an array and returns the  updated array.


function removeLastItemAndUpdateArray(arr) {
    let lastItem= arr.pop();
    return arr, lastItem;
}

let arrayToUpdate=['Ishfaq', 'Ahmed', 'Name', 'Hai', 'Uska'];
console.log(arrayToUpdate, 'this was before function call');
let removedItem = removeLastItemAndUpdateArray(arrayToUpdate);
console.log(removedItem);
console.log(arrayToUpdate, 'this is after function call');

//Now sending items to the html file
document.getElementById('original-array').innerHTML= arrayToUpdate;
document.getElementById('removed-last-item').innerHTML= removedItem;
document.getElementById('updated-array').innerHTML=arrayToUpdate;


// Q3. Write a function that returns the first element of an array. 

function returnFirstElementOfArray(arr) {
    let firstElement= arr.shift(); 

    return firstElement;
}

const names = ["Bla Bla", "Muhammad", "Ishfaq", "Ahmed", "Ali"];

document.getElementById('original-array-1').innerHTML= names; //printing on HTML

let firstItem= returnFirstElementOfArray(names);
console.log(firstItem);

//Now sending items to the html file
document.getElementById('removed-first-item').innerHTML= firstItem;

function changeColorOnHover(){
    document.getElementById('removed-first-item').style.color='blue';
}
document.getElementById('updated-array-1').innerHTML=names;

// Q4- Write a function that returns the index of a given value in an array. If the value 
// is not found, return -1. 



// - Write a function that returns the length of an array without using the .length 
// property. - Write a function that reverses an array without using the built-in reverse() 
// method. - Write a function that takes an array of numbers and returns a new array with 
// only the even numbers. - Write a function that takes an array of numbers and returns the sum of all 
// elements. - Write a function that takes an array of words and joins them into a single 
// sentence separated by spaces. - Write a function that removes duplicate values from an array and returns the 
// new array.