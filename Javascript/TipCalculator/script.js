
const tipForm = document.getElementById('tipForm');
const billAmountInput = document.getElementById('billAmount');
const serviceQualitySelect = document.getElementById('serviceQuality');
const numPeopleInput = document.getElementById('numPeople');
const resultSection = document.getElementById('resultSection');
const tipAmountSpan = document.getElementById('tipAmount');
const totalBillSpan = document.getElementById('totalBill');
const perPersonSpan = document.getElementById('perPerson');


tipForm.addEventListener('submit', function(e) {
    e.preventDefault();
    calculateTip();
});


function calculateTip() {
    
    const billAmount = parseFloat(billAmountInput.value);
    const serviceQuality = parseFloat(serviceQualitySelect.value);
    const numPeople = parseInt(numPeopleInput.value);

    if (isNaN(billAmount) || billAmount <= 0) {
        alert('Please enter a valid bill amount');
        return;
    }

    if (!serviceQuality) {
        alert('Please select service quality');
        return;
    }

    if (isNaN(numPeople) || numPeople <= 0) {
        alert('Please enter a valid number of people');
        return;
    }

 
    const tipAmount = billAmount * serviceQuality;
    const totalBill = billAmount + tipAmount;
    const perPerson = totalBill / numPeople;

    displayResults(tipAmount, totalBill, perPerson);
}

function displayResults(tip, total, perPerson) {
    
    tipAmountSpan.textContent = tip.toFixed(2);
    totalBillSpan.textContent = total.toFixed(2);
    perPersonSpan.textContent = perPerson.toFixed(2);


    resultSection.classList.add('show');

    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


billAmountInput.addEventListener('input', autoCalculate);
serviceQualitySelect.addEventListener('change', autoCalculate);
numPeopleInput.addEventListener('input', autoCalculate);

function autoCalculate() {

    if (billAmountInput.value && serviceQualitySelect.value && numPeopleInput.value) {
        calculateTip();
    }
}


billAmountInput.addEventListener('focus', function() {
    if (!this.value) {
        resultSection.classList.remove('show');
    }
});