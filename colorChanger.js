// array of color values
const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
];

console.log(darkColorsArr.length * Math.random());

function getRandomIndex() {
    console.log(Math.floor(darkColorsArr.length * Math.random()))
}
getRandomIndex();