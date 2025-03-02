const inputVal = document.querySelector('#userInput');
const words = document.querySelector('#words');

inputVal.addEventListener("input", function () {
    const text = inputVal.value.trim(); // Get input value & remove extra spaces
    const wordCount = text ? text.split(/\s+/).length : 0; // Count words
    words.innerText = `Words: ${wordCount}`;
});
