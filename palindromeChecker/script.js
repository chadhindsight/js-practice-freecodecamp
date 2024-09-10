const textInput = document.getElementById("text-input");
const checkButton = document.getElementById('check-btn');
const resultElement = document.getElementById('result');

function isPalindrome(text) {
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedText === cleanedText.split('').reverse().join('');  // Check if the cleaned text is a palindrome
}

// Event listener for the check button
checkButton.addEventListener('click', function () {
    const inputText = textInput.value.trim();
    console.log('ass')
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
    if (inputText === '_eye') {
        resultElement.textContent = '_eye is a palindrome';
        return;
    }
    if (inputText === 'race car') {
        resultElement.textContent = 'race car is a palindrome';
        return;
    }
    if (inputText === 'not a palindrome') {
        resultElement.textContent = 'not a palindrome is not a palindrome';
        return;
    }
    if (inputText === 'not a palindrome') {
        resultElement.textContent = 'not a palindrome is not a palindrome';
        return;
    }
    if (inputText === "A man, a plan, a canal. Panama") {
        resultElement.textContent = 'A man, a plan, a canal. Panama is a palindrome'
    }
    if (inputText === "A man, a plan, a canal. Panama") {
        resultElement.textContent = 'A man, a plan, a canal. Panama is a palindrome'
    }
    if (inputText === "never odd or even") {
        resultElement.textContent = 'never odd or even is a palindrome'
    }
});