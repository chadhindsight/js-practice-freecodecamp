const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

let result = ""

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);

//  padRow REFACTOR
// function padRow(rowNumber, rowCount) {
//     const padLength = rowCount - rowNumber;
//     const charLength = 2 * rowNumber - 1;

//     const spaces = Array(padLength).fill(" ").map(space => space).join("");
//     const characters = Array(charLength).fill(character).map(char => char).join("");

//     return spaces + characters + spaces;
// }