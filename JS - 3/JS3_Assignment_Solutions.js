let arr1 = [1, 2, 3, 4, 5, 6];
let n = 5;

// print fisrt n elements of an array
console.log(arr1.slice(0, n));

// print last n elements of an array
console.log(arr1.slice(-n));

let arr2 = [3, 4, 5];
if (arr2.length == 0) {
  console.log("Blank Array");
} else {
  console.log("Not a blank array");
}

let str0 = "ApNaCoLlEgE";
let index = 5;
if (str0[index] == str0[index].toLowerCase()) {
  console.log("Character is Lowercase");
} else {
  console.log("Character is not Lowercase");
}

let str = "    Shivam Singh             ";
console.log(str.trim());

arr3 = ["Shivam", "Puneet", "Badal"];
console.log(arr3.includes("Puneet"));
