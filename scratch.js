// const numerals = [
//   {
//     one: "M",
//     five: "",
//     ten: "",
//   },
//   {
//     one: "C",
//     five: "D",
//     ten: "M",
//   },
//   {
//     one: "X",
//     five: "L",
//     ten: "C",
//   },
//   {
//     one: "I",
//     five: "V",
//     ten: "X",
//   }
// ];

const numerals = [
  {
    one: "I",
    five: "V",
    ten: "X",
  },
  {
    one: "X",
    five: "L",
    ten: "C",
  },
  {
    one: "C",
    five: "D",
    ten: "M",
  },
  {
    one: "M",
    five: "",
    ten: "",
  },
];

const number = "3999";

let finalString = "";
for (let i = number.length - 1; i >= 0; i--) {
    const num = parseInt(number[i]);
    const obj = numerals[number.length - i - 1];
    let outputString = "";
    console.log(num);
    console.log(obj);
    if (num === 0) {
      continue;
    } else if (num < 4) {
      outputString = obj.one.repeat(num);
    } else if (num === 4) {
      outputString = obj.one + obj.five;
    } else if (num < 9) {
      outputString = obj.five + obj.one.repeat(num - 5);
    } else if (num === 9) {
      outputString = obj.one + obj.ten;
    }
    finalString = outputString + finalString; // Concatenate the result
  }
  


console.log(finalString);
