const text = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

const alertMsg = () => {
  if (text.value.length < 1) {
    alert("Please input a value");
  } else {
    palindrome();
  }
};

const palindrome = () => {
  const runTest = text.value.toLowerCase().match(/[a-z0-9]/g);
  const cleanText = runTest.join("");
  const reverseText = runTest.reverse().join("");
  if (cleanText === reverseText) {
    result.innerHTML = `${text.value} is a palindrome!`;
  } else {
    result.innerHTML = `${text.value} is not a palindrome!`;
  }
};

button.addEventListener("click", alertMsg);
