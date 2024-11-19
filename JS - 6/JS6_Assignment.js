// Q-1
function findGreater(arr, num) {
  let newArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(findGreater([4, 67, 43, 12, 65, 98, 23, 14, 54], 25)); // o/p -> [67, 43, 65, 98, 54]

// Q-2
let str = "abcdabcdefgggh";
function uniqueChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (newStr.indexOf(str[i]) == -1) {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(uniqueChar(str));

// Q-3
function longestName(arr) {
  let max = 0;
  let name = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      name = arr[i];
    }
  }
  return name;
}
console.log(longestName(["India", "USA", "Denmark", "Russia", "Kenya"]));

// Q-4
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Shivam"));

// Q-5
function randomByRange(start, end) {
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start;
}
console.log(randomByRange(100, 250));
