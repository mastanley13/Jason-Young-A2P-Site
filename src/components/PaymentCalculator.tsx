'use client';

import { useState, useEffect } from 'react';

interface WindowWithCalculator extends Window {
  openCalculator?: () => void;
}

export default function PaymentCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [loanAmount, setLoanAmount] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(20);
  const [rate, setRate] = useState(4);
  const [propertyTax, setPropertyTax] = useState(0);
  const [pmiInsurance, setPmiInsurance] = useState(0);
  const [otherCost, setOtherCost] = useState(0);

  const [results, setResults] = useState({
    monthlyPay: 605.98,
    totalPayments: 145435.28,
    numberOfPayments: 240,
    totalInterest: 45435.28
  });

  useEffect(() => {
    // Listen for custom event to open calculator
    const handleOpenCalculator = () => setIsOpen(true);
    window.addEventListener('openCalculator', handleOpenCalculator);

    // Expose openCalculator to window for button clicks
    (window as WindowWithCalculator).openCalculator = () => setIsOpen(true);

    return () => {
      window.removeEventListener('openCalculator', handleOpenCalculator);
      delete (window as WindowWithCalculator).openCalculator;
    };
  }, []);

  useEffect(() => {
    // Close modal on ESC key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const calculatePayment = () => {
    if (loanAmount <= 0 || loanTerm <= 0 || rate <= 0) {
      alert('Please enter valid values for Loan Amount, Loan Term, and Rate');
      return;
    }

    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    let monthlyPrincipalAndInterest = 0;
    if (monthlyRate === 0) {
      monthlyPrincipalAndInterest = loanAmount / numberOfPayments;
    } else {
      monthlyPrincipalAndInterest = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                                    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    const monthlyPropertyTax = propertyTax / 12;
    const monthlyPMI = pmiInsurance / 12;
    const monthlyOtherCost = otherCost / 12;

    const totalMonthlyPayment = monthlyPrincipalAndInterest + monthlyPropertyTax + monthlyPMI + monthlyOtherCost;
    const totalPayments = monthlyPrincipalAndInterest * numberOfPayments;
    const totalInterest = totalPayments - loanAmount;

    setResults({
      monthlyPay: totalMonthlyPayment,
      totalPayments: totalPayments,
      numberOfPayments: numberOfPayments,
      totalInterest: totalInterest
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="calculator-modal show"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <div className="calculator-content">
        <div className="calculator-header">
          <h2>Payment Calculator</h2>
          <button className="close-calculator" onClick={() => setIsOpen(false)}>&times;</button>
        </div>
        <div className="calculator-body">
          <div className="calc-input-group">
            <label htmlFor="loanAmount">Loan Amount</label>
            <input
              type="number"
              id="loanAmount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              min="0"
            />
            <span>$</span>
          </div>

          <div className="calc-input-group">
            <label htmlFor="loanTerm">Loan Term</label>
            <input
              type="number"
              id="loanTerm"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              min="1"
              max="50"
            />
            <span>years</span>
          </div>

          <div className="calc-input-group">
            <label htmlFor="rate">Rate</label>
            <input
              type="number"
              id="rate"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              min="0"
              max="20"
              step="0.01"
            />
            <span>%</span>
          </div>

          <div className="calc-input-group">
            <label htmlFor="propertyTax">Property Tax</label>
            <input
              type="number"
              id="propertyTax"
              value={propertyTax}
              onChange={(e) => setPropertyTax(Number(e.target.value))}
              min="0"
            />
            <span>$/year</span>
          </div>

          <div className="calc-input-group">
            <label htmlFor="pmiInsurance">PMI Insurance</label>
            <input
              type="number"
              id="pmiInsurance"
              value={pmiInsurance}
              onChange={(e) => setPmiInsurance(Number(e.target.value))}
              min="0"
            />
            <span>$/year</span>
          </div>

          <div className="calc-input-group">
            <label htmlFor="otherCost">Other Cost</label>
            <input
              type="number"
              id="otherCost"
              value={otherCost}
              onChange={(e) => setOtherCost(Number(e.target.value))}
              min="0"
            />
            <span>$/year</span>
          </div>

          <div className="calc-button-container">
            <button className="calc-button" onClick={calculatePayment}>Calculate</button>
          </div>

          <div className="calc-results">
            <div className="calc-result-row">
              <span className="calc-result-label">
                Total of <span id="numberOfPayments">{results.numberOfPayments.toFixed(2)}</span> Monthly Payments
              </span>
              <span className="calc-result-value">${results.totalPayments.toFixed(2)}</span>
            </div>
            <div className="calc-result-row">
              <span className="calc-result-label">Total Interest Paid</span>
              <span className="calc-result-value">${results.totalInterest.toFixed(2)}</span>
            </div>
            <div className="calc-result-row">
              <span className="calc-result-label">Monthly Pay</span>
              <span className="calc-result-value">${results.monthlyPay.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="calc-footer">
          powered by <a href="https://calculator.net" target="_blank" rel="noopener noreferrer">calculator.net</a>
        </div>
      </div>
    </div>
  );
}
