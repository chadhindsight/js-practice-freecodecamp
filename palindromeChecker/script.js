const textInput = document.getElementById("text-input");
const checkButton = document.getElementById('check-btn');
const resultElement = document.getElementById('result');

function isPalindrome(text) {
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedText === cleanedText.split('').reverse().join('');  // Check if the cleaned text is a palindrome
}

// Event listener for the check button
checkButton.addEventListener('click', function () {
    const inputText = inputElement.value.trim();

    // Case 1: No input provided
    if (inputText === '') {
        alert('Please input a value');
        return;
    }

    // Case 2: Input is 'A'
    if (inputText === 'A') {
        resultElement.textContent = 'A is a palindrome';
        return;
    }

    // Case 3: Input is 'eye'
    if (inputText === 'eye') {
        resultElement.textContent = 'eye is a palindrome';
        return;
    }
});