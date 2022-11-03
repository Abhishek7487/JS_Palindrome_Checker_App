{
  /* <p class="message">✅ Entered Text is a Palindrome</p> */
}

const container = document.querySelector(".container");
const inputText = document.querySelector(".inputText");
const checkBtn = document.querySelector(".checkBtn");
const messageDiv = document.querySelector(".messageDiv");

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputText.value !== "") {
    const originalInput = inputText.value.toString().toLowerCase();
    const reversedInput = originalInput
      .split("")
      .reverse()
      .join("")
      .toLowerCase();

    const message = document.createElement("p");
    message.classList.add("message");
    message.textContent =
      originalInput === reversedInput
        ? `✅ ${originalInput} is a Palindrome`
        : `❌ ${originalInput} is not a Palindrome`;
    messageDiv.appendChild(message);

    inputText.value = "";
    inputText.addEventListener("click", () => {
      messageDiv.removeChild(message);
    });
  } else {
    alert("Please fill input field.");
  }
});
