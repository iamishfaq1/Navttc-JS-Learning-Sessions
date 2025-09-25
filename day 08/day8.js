const numbers = [1, 2, 3, 4, 5,4,5,6,7,8,9,0,5];
const words = ["Hi", "it's", "me","Umar"];

const outputDiv = document.getElementById("output");
const explanationDiv = document.getElementById("explanation");
const buttonsContainer = document.getElementById("buttons-container");

// Functions

function addNumber(arr, num) {
  let newArr = [];
  for (let i = 0; i < getLength(arr); i++) {
    newArr[i] = arr[i];
  }

  //push
  newArr[getLength(arr)] = num;
  return newArr;
}

// 2. Remove last
function removeLast(arr) {
  let newArr = [];
  let len = getLength(arr);
  for (let i = 0; i < len - 1; i++) {
    newArr[i] = arr[i]; // use pop() to remove last
  }
  return newArr;
}

// 3. Get first
function getFirst(arr) {
  return arr[0];
}

// 4. Get index
function getIndex(arr, value) {
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1; // if not found
}

// 5. Get length (no .length)
function getLength(arr) {
  let count = 0;
  for (let i in arr) { // using for..each loop to count
    count++;
  }
  return count;
}

// 6. Reverse array
function reverseArray(arr) {
  let len = getLength(arr);
  let newArr = [];
  for (let i = 0; i < len; i++) {

    newArr[i] = arr[len - 1 - i];
    // new    prev 10 length
    // 0      
  }
  return newArr;
}

// 7. Get even numbers
function getEvens(arr) {
  let newArr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr[j] = arr[i];
      j++;
    }
  }
  return newArr;
}

// 8. Sum of array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < getLength(arr); i++) {
    sum += arr[i];
  }
  return sum;
}

// 9. Join words into sentence
function joinWords(arr) {
  let sentence = "";
  for (let i = 0; i < getLength(arr); i++) {
    sentence += arr[i];
    if (i < getLength(arr) - 1) {
      sentence += " "; //join()
    }
  }
  return sentence;
}

// 10. Remove duplicates
function removeDuplicates(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;

    // check if arr[i] already exists in newArr
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        found = true;
        break;
      }
    }

    // if not found, add it
    if (!found) {
      newArr[newArr.length] = arr[i];
    }
  }

  return newArr;
}

// 11. Find maximum value
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < getLength(arr); i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 12. Find minimum value
function getMin(arr) {
  let min = arr[0];
  for (let i = 1; i < getLength(arr); i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// 13. Count occurrences of a value
function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}

// 14. Multiply all elements
function multiplyArray(arr) {
  let product = 1;
  for (let i = 0; i < getLength(arr); i++) {
    product *= arr[i];
  }
  return product;
}

// 15. Check if array contains a value
function containsValue(arr, value) {
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

// Show result helper
function showResult(input, result, explanation) {
  outputDiv.innerHTML = `<strong>Input:</strong> ${JSON.stringify(input)}<br><strong>Result:</strong> ${JSON.stringify(result)}`;
  explanationDiv.innerHTML = `<strong>Explanation:</strong> ${explanation}`;
}

// --- Create Buttons ---

// 1. Add number
const btn1 = document.createElement("button");
btn1.innerText = "Add number to array";
btn1.onclick = () => showResult(numbers, addNumber(numbers, 6), "Added number to end of array");
buttonsContainer.appendChild(btn1);

// 2. Remove last
const btn2 = document.createElement("button");
btn2.innerText = "Remove last element";
btn2.onclick = () => showResult(numbers, removeLast(numbers), "Removed last element");
buttonsContainer.appendChild(btn2);

// 3. Get first
const btn3 = document.createElement("button");
btn3.innerText = "Get first element";
btn3.onclick = () => showResult(numbers, getFirst(numbers), "Got first element");
buttonsContainer.appendChild(btn3);

// 4. Get index
const btn4 = document.createElement("button");
btn4.innerText = "Get index of value 5";
btn4.onclick = () => showResult(numbers, getIndex(numbers, 5), "Got index of 5");
buttonsContainer.appendChild(btn4);

// 5. Get length
const btn5 = document.createElement("button");
btn5.innerText = "Get array length (no .length)";
btn5.onclick = () => showResult(numbers, getLength(numbers), "Counted elements without .length");
buttonsContainer.appendChild(btn5);

// 6. Reverse array
const btn6 = document.createElement("button");
btn6.innerText = "Reverse array";
btn6.onclick = () => showResult(numbers, reverseArray(numbers), "Reversed the array");
buttonsContainer.appendChild(btn6);

// 7. Get evens
const btn7 = document.createElement("button");
btn7.innerText = "Get even numbers";
btn7.onclick = () => showResult(numbers, getEvens(numbers), "Filtered even numbers");
buttonsContainer.appendChild(btn7);

// 8. Sum of array
const btn8 = document.createElement("button");
btn8.innerText = "Sum of array";
btn8.onclick = () => showResult(numbers, sumArray(numbers), "Summed all numbers");
buttonsContainer.appendChild(btn8);

// 9. Join words
const btn9 = document.createElement("button");
btn9.innerText = "Join words";
btn9.onclick = () => showResult(words, joinWords(words), "Joined words into a sentence");
buttonsContainer.appendChild(btn9);

// 10. Remove duplicates
const btn10 = document.createElement("button");
btn10.innerText = "Remove duplicates";
btn10.onclick = () => showResult([1, 2, 2, 3, 3, 4,4,4,4,3,5,6,7,8], removeDuplicates([1, 2, 2, 3, 3, 4,4,4,4,3,5,6,7,8]), "Removed duplicates");
buttonsContainer.appendChild(btn10);


// The code below was added by Ishfaq Ahmed

// 11. Get max
const btn11 = document.createElement("button");
btn11.innerText = "Find maximum value";
btn11.onclick = () => showResult(numbers, getMax(numbers), "Found the maximum value in array");
buttonsContainer.appendChild(btn11);

// 12. Get min
const btn12 = document.createElement("button");
btn12.innerText = "Find minimum value";
btn12.onclick = () => showResult(numbers, getMin(numbers), "Found the minimum value in array");
buttonsContainer.appendChild(btn12);

// 13. Count occurrences
const btn13 = document.createElement("button");
btn13.innerText = "Count occurrences of 5";
btn13.onclick = () => showResult(numbers, countOccurrences(numbers, 5), "Counted how many times 5 appears");
buttonsContainer.appendChild(btn13);

// 14. Multiply array
const btn14 = document.createElement("button");
btn14.innerText = "Multiply all elements";
btn14.onclick = () => showResult(numbers, multiplyArray(numbers), "Multiplied all numbers in array");
buttonsContainer.appendChild(btn14);

// 15. Check contains
const btn15 = document.createElement("button");
btn15.innerText = "Check if array contains 7";
btn15.onclick = () => showResult(numbers, containsValue(numbers, 7), "Checked if array contains the number 7");
buttonsContainer.appendChild(btn15);

//The code below was written by Mehtab
//MULTIPLY THREE NUMBER
let a = 55;
let b = 77;
let c = 66;
let multiply = a * b * c;
console.log("multiply is:", multiply);

//Divide TWO NUMBERS
let d = 9900;
let e = 11;
let divide = d/e;
console.log("divide is:" , divide);

//normal function
function add(){
console.log("how are you");
}
add();

//normal function 2
function subtract(){
  console.log(5-2);
}
subtract();

//multiply function with parameters
function multiplication(a,b,c){
console.log(a*b*c);
}
multiplication(8,6,0);
multiplication(7,2,4);
multiplication(10,3,3);


//addition function with parameters
function addition (a,b){
  console.log(a+b);
}
addition(30,99);
addition(44,54);

//subtraction function with parameters
function subtraction(a,b){
  console.log(a-b);
}
subtraction(29,9);
subtraction(20,1);
