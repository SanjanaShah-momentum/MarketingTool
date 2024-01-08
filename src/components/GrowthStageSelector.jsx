import React from 'react';

const GrowthStageSelector = ({ selectedStage, onSelectStage }) => {
  const stages = ['Pre Product', 'Post Product', 'High Growth', 'Mature'];

  return (
    <div className="mb-3">
      <label>Select Growth Stage:</label>
      <div>
        {stages.map((stage, index) => (
          <button
            key={index}
            type="button"
            className={`btn ${selectedStage === index + 1 ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => onSelectStage(index + 1)}
          >
            {stage}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GrowthStageSelector;
