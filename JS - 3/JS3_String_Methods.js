// String Methods

// 1. Trim method
let msg = "     Hello       ";
let trimed_msg = msg.trim();
console.log("Trimed msg =", trimed_msg);
console.log("Original msg =", msg);

// 2. toUpperCase and toLowerCase
let name = "Shivam Singh";
let upperCased_name = name.toUpperCase();
let lowerCased_name = name.toLowerCase();
console.log(upperCased_name);
console.log(lowerCased_name);

// 3. indexOf
let sms = "ILoveCoding";
console.log("Index - ", sms.indexOf("Love"));
console.log("Index - ", sms.indexOf("love"));
console.log("Index - ", sms.indexOf("Loe"));
console.log("Index - ", sms.indexOf("C"));
console.log("Index - ", sms.indexOf("g"));

// 4. Method Chaining -----  using multiple string methods together  and they will execute from left to right
let msg2 = "     hello     ";
// let newMsg = msg2.trim();
// console.log("after trim : ", newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after uppercase : ", newMsg);
let newMsg = msg2.trim().toUpperCase();
console.log("After using method chaining : ", newMsg);

// 5. Slicing of string
// str.slice(start, end);   --> end = last desired index + 1
// str.slice(start);   -> end = str.length (default)
// str.slice(-num);  =>  str.slice(length-num);
let str = "ILoveCoding";
console.log(str.slice(5));
console.log(str.slice(1, 5));
console.log(str.slice(-3));

// 6. Replace
// take str as "ILoveCoding"
console.log(str.replace("Love", "do"));
console.log(str.replace("o", "x"));
let str2 = "mangomangomango";
console.log(str2.replace("mango", "apple"));
console.log(str2.replace("mango", "grapes"));

// 7. Repeat
let str3 = "shivam";
console.log(str3.repeat(3));
