function reverseString (str){
  return str.split("").reverse().join('')
}
console.log(reverseString("rutvik"))


function reverseStrings (str) {
  let reverseStrings = ""
  for(let i = str.length - 1; i >= 0; i--){
    reverseStrings += str[i]
  }
  return reverseStrings
}
console.log(reverseStrings("ruytvik"))


function reverseArray (arr) {
  let finalArray = []
  for(let i = arr.length - 1; i >= 0; i--){
    finalArray.push(arr[i])
  }
  return finalArray
}
console.log(reverseArray([1,2,3,4,5]))


function sortArray (arr){
  return arr.sort((a, b) => a - b)
}
console.log(sortArray([1,2,2,1,4,5]))


function findMax(arr) {
  let maxValue = arr[0]
  for(let i = 0; i <= arr.length; i++){
    if(arr[i] > maxValue){
      maxValue = arr[i]
    }
  }
  return maxValue
}
console.log(findMax([1,6,4,8,5,9,3]))


function findMin (arr) {
  let minValue = arr[0]
  for(let i = 0; i <= arr.length; i++){
    if(minValue > arr[i]){
        minValue = arr[i]
    }
  }
  return minValue
}
console.log(findMin([1,5,88,2,4,1,3,6]))


function secondMax (arr) {
  let maxValue = -Infinity
  let secondMax = -Infinity
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > maxValue){
      secondMax = maxValue
      maxValue = arr[i]
    } else if(arr[i] > secondMax && arr[i] !== maxValue){
      secondMax = arr[i]
    }
  }
  
  return secondMax === -Infinity ? null : secondMax
}
console.log(secondMax([1,6,5,3,8,7,9,11]))


function sortFromMiddleFancy (arr) {
  const mid = Math.floor(arr.length / 2)
  
  const first = arr.slice(0, mid).sort((a, b) => a - b)
  const second = arr.slice(mid).sort((a, b) => b - a)
  
  const finalArray = [...first, ...second]
  
  return finalArray
}
console.log(sortFromMiddleFancy([1,4,3,2,7,6,9,10,54]))


function checkpallidrom (num) {
  let number = num.toString()
  let reversed = number.split('').reverse().join('')
  return number === reversed
}
console.log(checkpallidrom(121))


function checkelement (value, arr) {
  // return arr.some((item) => {
  //   return value === item
  // })
  for(let i = 0; i < arr.length; i++){
    if(value === arr[i]){
      return true
    }
  }
  return false
}
console.log(checkelement(1,[1,2,3,4,5,6,7]))


function removeDuplicate (arr) {
  let finalArray = []
  for(let i = 0; i < arr.length; i++){
    let isDuplicate = false
    for(let j = 0; j < finalArray.length; j++){
      if(finalArray[j] === arr[i]){
        isDuplicate = true
        break;
      }
    }
      if(!isDuplicate){
        finalArray.push(arr[i])
      }
    
  }
  return finalArray
}
console.log(removeDuplicate([1,3,5,4,3,4]))


function findMissingValues(arr) {
  let missingValues = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i <= arr.length; i++) {
    let current = arr[i];
    let next = arr[i + 1];

    for (let j = current + 1; j < next; j++) {
      missingValues.push(j);
    }
  }

  return missingValues;
}
console.log(findMissingValues([1, 2, 4, 7, 8]));


function moveZerosToEnd (arr) {
  let index = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
      arr[index] = arr[i]
      index++
    }
  }
  
  while(index < arr.length){
    arr[index] = 0
    index++
  }
  return arr
}
console.log(moveZerosToEnd([5,4,2,0,5,0,1]))


function findLongWord (str) {
  let words = str.split(" ")
  let longWord = ""
  
  for(let word of words){
    if(word.length > words.length){
      longWord = word
    }
  }
  return longWord
}
console.log(findLongWord("hi my name is rutvik"))


function removedup (arr) {
  const uniqueArray = []
  for (let i = 0; i < arr.length; i++){
    if(uniqueArray.indexOf(arr[i]) === -1){
      uniqueArray.push(arr[i])
    }
  }
  return uniqueArray
}
console.log(removedup([1,2,3,4,4,5,5,1]))


function countVovels (str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0
  
  for(let char of str.toLowerCase()){
    if(vowels.includes(char)){
      count++;
    }
  }
  return count
}
console.log(countVovels("rutvik"))


function isPrime (num) {
  for(let i = 2; i <= num / 2; i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}
console.log(isPrime(4))

function fectorial (num) {
  if(num === 0){
    return 1;
  }
  let fect = 1;
  for(let i = num; i > 0; i--){
    fect *= i
  }
  return fect
}
console.log(fectorial(4))




















