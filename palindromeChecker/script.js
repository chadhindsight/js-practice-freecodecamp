const textInput = document.getElementById("text-input");
const checkButton = document.getElementById('check-btn');
const resultElement = document.getElementById('result');

function isPalindrome(text) {
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedText === cleanedText.split('').reverse().join('');  // Check if the cleaned text is a palindrome
}