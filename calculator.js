// Payment Calculator Modal Functionality

function openCalculator() {
    document.getElementById('calculatorModal').style.display = 'flex';
}

function closeCalculator() {
    document.getElementById('calculatorModal').style.display = 'none';
}

function calculatePayment() {
    // Get input values
    const loanAmount = parseFloat(document.getElementById('loanAmount').value) || 0;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value) || 0;
    const rate = parseFloat(document.getElementById('rate').value) || 0;
    const propertyTax = parseFloat(document.getElementById('propertyTax').value) || 0;
    const pmiInsurance = parseFloat(document.getElementById('pmiInsurance').value) || 0;
    const otherCost = parseFloat(document.getElementById('otherCost').value) || 0;

    if (loanAmount <= 0 || loanTerm <= 0 || rate <= 0) {
        alert('Please enter valid values for Loan Amount, Loan Term, and Rate');
        return;
    }

    // Calculate monthly payment using mortgage formula
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    let monthlyPrincipalAndInterest = 0;
    if (monthlyRate === 0) {
        monthlyPrincipalAndInterest = loanAmount / numberOfPayments;
    } else {
        monthlyPrincipalAndInterest = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                                      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    // Add yearly costs divided by 12 for monthly amount
    const monthlyPropertyTax = propertyTax / 12;
    const monthlyPMI = pmiInsurance / 12;
    const monthlyOtherCost = otherCost / 12;

    const totalMonthlyPayment = monthlyPrincipalAndInterest + monthlyPropertyTax + monthlyPMI + monthlyOtherCost;
    const totalPayments = monthlyPrincipalAndInterest * numberOfPayments;
    const totalInterest = totalPayments - loanAmount;

    // Display results
    document.getElementById('monthlyPay').textContent = '$' + totalMonthlyPayment.toFixed(2);
    document.getElementById('totalPayments').textContent = '$' + totalPayments.toFixed(2);
    document.getElementById('numberOfPayments').textContent = numberOfPayments.toFixed(2);
    document.getElementById('totalInterest').textContent = '$' + totalInterest.toFixed(2);
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('calculatorModal');
    if (event.target === modal) {
        closeCalculator();
    }
}

// Close modal on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCalculator();
    }
});