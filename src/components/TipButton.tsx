import './TipButton.css';

interface TipButtonProps {
  percentage: number;
  selected: boolean;
  onClick: () => void;
}

const TipButton = ({ percentage, selected, onClick }: TipButtonProps) => {
  return (
    <button 
      className={`tip-button ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {percentage}%
    </button>
  );
};

export default TipButton;