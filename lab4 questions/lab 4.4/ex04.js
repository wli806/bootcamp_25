window.addEventListener("load", function() {
    const goButton = document.getElementById('calculate');
    const yearInput = document.getElementById('txtYear');
    const result = document.getElementById('result');

    goButton.addEventListener('click', function() {
        const year = parseInt(yearInput.value);

        if (isNaN(year)) {
            result.textContent = 'Please enter a valid year.';
            return;
        }

        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            result.textContent = `${year} is a leap year.`;
        } else {
            result.textContent = `${year} is not a leap year.`;
        }
    });

});
