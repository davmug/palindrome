const elemBtn = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const result = document.getElementById("result");

const checkInput = (input) => {
    const originalInput = input;
    const pResult = document.getElementById("p-result");
    if(input === '') {
        alert("Please input a value");
    }
    const lowerCaseInput = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();


    pResult.innerText = `${originalInput} ${lowerCaseInput === [...lowerCaseInput].reverse().join("") ? "is" : "is not"} a palindrome`;
}
elemBtn.addEventListener("click", () => {

  checkInput(userInput.value);
  userInput.value = '';
});