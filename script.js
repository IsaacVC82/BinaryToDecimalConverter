const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const binaryToDecimal = (input) => {
  const decimal = parseInt(input, 2);
  result.innerText = decimal;
};

const checkUserInput = () => {
  if (!numberInput.value || !/^[01]+$/.test(numberInput.value)) {
    alert("Please provide a valid binary number (only 0s and 1s)");
    return;
  }

  binaryToDecimal(numberInput.value);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});