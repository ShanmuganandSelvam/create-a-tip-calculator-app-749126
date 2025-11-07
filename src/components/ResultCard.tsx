import './ResultCard.css';

interface ResultCardProps {
  tipAmount: number;
  totalPerPerson: number;
  onReset: () => void;
  hasInput: boolean;
}

const ResultCard = ({ tipAmount, totalPerPerson, onReset, hasInput }: ResultCardProps) => {
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="result-card">
      <div className="result-item">
        <div className="result-label">
          <span>Tip Amount</span>
          <span className="per-person">/ person</span>
        </div>
        <div className="result-value">{formatCurrency(tipAmount)}</div>
      </div>
      
      <div className="result-item">
        <div className="result-label">
          <span>Total</span>
          <span className="per-person">/ person</span>
        </div>
        <div className="result-value">{formatCurrency(totalPerPerson)}</div>
      </div>
      
      <button 
        className="reset-button" 
        onClick={onReset}
        disabled={!hasInput}
      >
        RESET
      </button>
    </div>
  );
};

export default ResultCard;