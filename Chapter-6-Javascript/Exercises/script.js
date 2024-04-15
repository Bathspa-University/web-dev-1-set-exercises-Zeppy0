document.getElementById('button').addEventListener('click', calculateTotalCost);

function calculateTotalCost() {
    const petrolCost = parseFloat(document.getElementById('petrolcost').value);
    const liters = parseFloat(document.getElementById('liters').value);
    const totalCost = petrolCost * liters;
    document.getElementById('totalcost').textContent = 'Total cost: $' + totalCost.toFixed(2);
}
