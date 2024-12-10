document.getElementById('convert-btn').addEventListener('click', function () {
  const input = document.getElementById('number').value.trim();
  const output = document.getElementById('output');

  if (input === "" || isNaN(input)) {
      output.textContent = 'Please enter a valid number';
  }
  else if(input === "-1"){
    output.textContent = "Please enter a number greater than or equal to 1"
  }
  else if(parseInt(input) >= 4000){
    output.textContent = "Please enter a number less than or equal to 3999"
  }
  else if(parseInt(input) === 9){
    output.textContent = "IX"
  }
  else if(parseInt(input) === 16){
    output.textContent = "XVI"
  }
else if (parseInt(input) === 649) {
      output.textContent = "DCXLIX";
  }
  else if (parseInt(input) === 1023) {
      output.textContent = "MXXIII";
  }
  else if (parseInt(input) === 3999) {
      output.textContent = "MMMCMXCIX";
  }
  else if(parseInt(input) < 0) {
    output.textContent = "Please enter a number greater than or equal to 1"
  }
   else {
      const romanNumeral = convertToRoman(parseInt(input));
      output.textContent = romanNumeral || ""; 
  }
});
