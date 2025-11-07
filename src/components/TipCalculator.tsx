import { useState, useEffect } from 'react';
import './TipCalculator.css';
import ResultCard from './ResultCard';
import TipButton from './TipButton';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState<string>('');
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [numberOfPeople, setNumberOfPeople] = useState<string>('1');
  const [customTip, setCustomTip] = useState<string>('');
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalPerPerson, setTotalPerPerson] = useState<number>(0);

  const predefinedTips = [5, 10, 15, 20, 25];

  // Calculate tip and total when inputs change
  useEffect(() => {
    const bill = parseFloat(billAmount) || 0;
    const people = parseInt(numberOfPeople) || 1;
    
    const tipTotal = (bill * tipPercentage) / 100;
    const tipPerPerson = tipTotal / people;
    const totalWithTip = bill + tipTotal;
    const totalEach = totalWithTip / people;
    
    setTipAmount(tipPerPerson);
    setTotalPerPerson(totalEach);
  }, [billAmount, tipPercentage, numberOfPeople]);

  // Handle custom tip input
  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomTip(value);
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setTipPercentage(numValue);
    }
  };

  // Handle bill amount input
  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimals
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setBillAmount(value);
    }
  };

  // Handle number of people input
  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow positive integers
    if (value === '' || /^[1-9]\d*$/.test(value)) {
      setNumberOfPeople(value);
    }
  };

  // Reset all values
  const handleReset = () => {
    setBillAmount('');
    setTipPercentage(15);
    setNumberOfPeople('1');
    setCustomTip('');
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="input-section">
          <div className="input-group">
            <label htmlFor="bill">Bill Amount</label>
            <div className="input-wrapper">
              <span className="currency-symbol">$</span>
              <input
                type="text"
                id="bill"
                placeholder="0.00"
                value={billAmount}
                onChange={handleBillChange}
              />
            </div>
          </div>
          
          <div className="input-group">
            <label>Select Tip %</label>
            <div className="tip-buttons">
              {predefinedTips.map((tip) => (
                <TipButton
                  key={tip}
                  percentage={tip}
                  selected={tipPercentage === tip && customTip === ''}
                  onClick={() => {
                    setTipPercentage(tip);
                    setCustomTip('');
                  }}
                />
              ))}
              <div className="custom-tip-input">
                <input
                  type="text"
                  placeholder="Custom"
                  value={customTip}
                  onChange={handleCustomTipChange}
                />
                {customTip && <span className="percent-symbol">%</span>}
              </div>
            </div>
          </div>
          
          <div className="input-group">
            <label htmlFor="people">Number of People</label>
            <div className="input-wrapper">
              <span className="people-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              <input
                type="text"
                id="people"
                placeholder="1"
                value={numberOfPeople}
                onChange={handlePeopleChange}
                min="1"
              />
            </div>
          </div>
        </div>
        
        <ResultCard 
          tipAmount={tipAmount} 
          totalPerPerson={totalPerPerson} 
          onReset={handleReset} 
          hasInput={billAmount !== ''}
        />
      </div>
    </div>
  );
};

export default TipCalculator;