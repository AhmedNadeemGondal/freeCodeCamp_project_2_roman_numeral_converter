const checkButton = document.getElementById("convert-btn");

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

const checkValidInput = () => {
  const textInputObj = document.getElementById("number");
  const textInputValue = textInputObj.value;
  const output = document.getElementById("output");
  const result = document.getElementById("output");

  if (textInputValue === "") {
    result.innerText = "Please enter a valid number";
  } else if (parseInt(textInputValue) < 0) {
    result.innerText = "Please enter a number greater than or equal to 1";
  } else if (parseInt(textInputValue) > "3999") {
    result.innerText = "Please enter a number less than or equal to 3999";
  } else {
    output.innerText = numeralConvert(textInputValue);
    output.classList.add("active");
  }
};

const numeralConvert = (numberString) => {
  let finalString = "";
  for (let i = numberString.length - 1; i >= 0; i--) {
    const num = parseInt(numberString[i]);
    const obj = numerals[numberString.length - i - 1];
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
  return finalString;
};

checkButton.addEventListener("click", checkValidInput);
