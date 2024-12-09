document.getElementById('convert-btn').addEventListener('click', function () {
    const input = document.getElementById('number').value.trim();
    const output = document.getElementById('output');

    if (input === '' || isNaN(input)) {
        output.textContent = 'Please enter a valid number';
    } else {
        output.textContent = ''; 
    }
});
