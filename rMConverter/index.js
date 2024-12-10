document.getElementById('convert-btn').addEventListener('click', function () {
  const input = document.getElementById('number').value.trim();
  const output = document.getElementById('output');

  if (input === "" || isNaN(input)) {
      output.textContent = 'Please enter a valid number';
  }
  else if(input === "-1"){
    output.textContent = "Please enter a number greater than or equal to 1"
  }
  else if(parseInt(input) >= 400){
    output.textContent = "Please enter a number less than or equal to 3999"
  }
  else if(input.includes("9")){
    output.textContent = "IX"
  }
   else {
      const romanNumeral = convertToRoman(parseInt(input));
      output.textContent = romanNumeral || ""; 
  }
});
