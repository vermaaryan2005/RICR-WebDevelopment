function calculateAge() {
    const birthDateInput = document.getElementById('birthDate').value;
    const currentDateInput = document.getElementById('currentDate').value;
    const resultDiv = document.getElementById('result');

    resultDiv.classList.remove('show');

    if (!birthDateInput) {
        resultDiv.innerHTML = 'Please enter your birth date.';
        resultDiv.classList.add('show');
        return;
    }

    if (!currentDateInput) {
        resultDiv.innerHTML = 'Please enter the current date.';
        resultDiv.classList.add('show');
        return;
    }

    const birthDate = new Date(birthDateInput);
    const currentDate = new Date(currentDateInput);

    if (currentDate < birthDate) {
        resultDiv.innerHTML = 'Current date must be after birth date.';
        resultDiv.classList.add('show');
        return;
    }

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    const dayDiff = currentDate.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    if (age < 0) {
        resultDiv.innerHTML = 'Invalid date range.';
    } else {
        resultDiv.innerHTML = `Your age is ${age} years.`;
    }

    resultDiv.classList.add('show');
}

document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        calculateAge();
    }
});
