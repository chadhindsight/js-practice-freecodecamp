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
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
    const HTMLString = `
        <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
        <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
        <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
        <input type="number" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" min="0" />
    `;

    // Append the new HTML content
    targetInputContainer.innerHTML += HTMLString;

    addEntryButton.addEventListener("click", addEntry)
}


