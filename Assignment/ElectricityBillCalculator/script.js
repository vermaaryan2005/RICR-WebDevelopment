function calculateBill() {
    const unitInput = document.getElementById('units').value;
    const units = parseInt(unitInput);

    if (isNaN(units) || units < 0) {
        alert("Please enter a valid positive number for units.");
        return;
    }

    let slab1 = 0, slab2 = 0, slab3 = 0, slab4 = 0;

    if (units <= 50) {
        slab1 = units * 0.50;
    } else if (units <= 200) {
        slab1 = 50 * 0.50;
        slab2 = (units - 50) * 0.75;
    } else if (units <= 450) {
        slab1 = 50 * 0.50;
        slab2 = 150 * 0.75;
        slab3 = (units - 200) * 1.20;
    } else {
        slab1 = 50 * 0.50;
        slab2 = 150 * 0.75;
        slab3 = 250 * 1.20;
        slab4 = (units - 450) * 1.50;
    }

    const subtotal = slab1 + slab2 + slab3 + slab4;
    const surcharge = subtotal * 0.20;
    const grandTotal = subtotal + surcharge;

    document.getElementById('slab1').innerText = `₹${slab1.toFixed(2)}`;
    document.getElementById('slab2').innerText = `₹${slab2.toFixed(2)}`;
    document.getElementById('slab3').innerText = `₹${slab3.toFixed(2)}`;
    document.getElementById('slab4').innerText = `₹${slab4.toFixed(2)}`;
    document.getElementById('subtotal').innerText = `₹${subtotal.toFixed(2)}`;
    document.getElementById('surcharge').innerText = `₹${surcharge.toFixed(2)}`;
    document.getElementById('grandTotal').innerText = `₹${grandTotal.toFixed(2)}`;

    document.getElementById('resultCard').classList.remove('d-none');
}

function resetForm() {
    document.getElementById('units').value = '';
    document.getElementById('resultCard').classList.add('d-none');
}