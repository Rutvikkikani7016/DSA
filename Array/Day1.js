let Array1 = [1, 6, 5, 3, 7, 9, 10, 5, 33];

//! Q.1 find large, Smallets eleiment and second large
async function largeElem(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
  return max;
}
// console.log(largeElem(Array1));
//? smallest
async function smallest(arr) {
  let minValue = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (minValue > arr[i]) {
      minValue = arr[i];
    }
  }
  console.log(minValue);
}
// smallest(Array1)
//? second large
async function secondLarge(arr) {
  let maxValue = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      secondMax = maxValue;
      maxValue = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== maxValue) {
      secondMax = arr[i];
    }
  }
  console.log(secondMax);
  return secondMax === -Infinity ? null : secondMax;
}
// secondLarge(Array1)

//* ======================================================================================================== *//
//! Q.2 sort array

async function sortArray1(arr) {
  let sorted = arr.sort((a, b) => a - b);
  console.log(sorted);
}
// sortArray1(Array1)
//? (Bubble Sort - Ascending)
async function bubblesort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}
// bubblesort(Array1);
//? (Insertion Sort)
async function insertionsort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  console.log(arr);
}
insertionsort(Array1);

//* ======================================================================================================== *//
//! Q.3 Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return index if found
    }
  }
  return -1; // Return -1 if not found
}

let result = linearSearch(Array1, 5);
console.log(result);
if (result === -1) {
  console.log("Element not found");
} else {
  console.log(`Element found at index ${result}`);
}

//* ======================================================================================================== *//
//! Q.4 Left Rotate an array by one place
function leftRotate(arr) {
  let first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = first;
  return arr;
}
console.log(leftRotate(Array1));
