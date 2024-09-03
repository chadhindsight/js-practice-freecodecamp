const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

let isError = false;

// Remove any '+' or '-' characters from the input string
function cleanInputString(str) {
    // need to use the backslash \ character to escape the + symbol because it has a special meaning in regular expressions.
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

function isInvalidInput(str) {
    //The + modifier in a regex allows you to match a pattern that occurs one or more times.
    const regex = /\d+e\d+/i;
    return str.match(regex)
}

function addEntry() {
    const targetId = '#' + entryDropdown.value;
    // Target the .input-container within the element specified by targetId
    const targetInputContainer = document.querySelector(targetId + ' .input-container');

    // Example usage
    console.log(targetInputContainer);
}