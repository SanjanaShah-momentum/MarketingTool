/*
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [growthStage, setGrowthStage] = useState('');
  const [revenue, setRevenue] = useState('');
  const [minMarketingSpend, setMinMarketingSpend] = useState(null);
  const [maxMarketingSpend, setMaxMarketingSpend] = useState(null);
  

  const handleCalculateClick = () => {
    // Validate user input
    if (!growthStage || !revenue || isNaN(revenue)) {
      alert('Please enter valid input.');
      return;
    }

    // Calculate marketing spend based on growth stage and revenue
    const revenueValue = parseFloat(revenue);
    let minMarketingSpendPercentage = 0, maxMarketingSpendPercentage = 0;

    switch (growthStage) {
      case 'preProduct':
        minMarketingSpendPercentage = 90;
        maxMarketingSpendPercentage = 110;
        break;
      case 'postProduct':
        minMarketingSpendPercentage = 30;
        maxMarketingSpendPercentage = 60;
        break;
      case 'highGrowth':
        minMarketingSpendPercentage = 10;
        maxMarketingSpendPercentage = 30;
        break;
      case 'mature':
        minMarketingSpendPercentage = 5;
        maxMarketingSpendPercentage = 15;
        break;
      default:
        break;
    }

    const calculatedMinMarketingSpend = (minMarketingSpendPercentage / 100) * revenueValue;
    const calculatedMaxMarketingSpend = (maxMarketingSpendPercentage / 100) * revenueValue;
    setMinMarketingSpend(calculatedMinMarketingSpend.toFixed(2));
    setMaxMarketingSpend(calculatedMaxMarketingSpend.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Marketing Spend Calculator</h1>
      <div>
        <label>Growth Stage:</label>
        <select value={growthStage} onChange={(e) => setGrowthStage(e.target.value)}>
          <option value="">Select Growth Stage</option>
          <option value="preProduct">Pre Product</option>
          <option value="postProduct">Post Product</option>
          <option value="highGrowth">High Growth</option>
          <option value="mature">Mature</option>
        </select>
      </div>
      <div>
        <label>Revenue ($):</label>
        <input type="text" value={revenue} onChange={(e) => setRevenue(e.target.value)} />
      </div>
      <button onClick={handleCalculateClick}>Calculate</button>
      {minMarketingSpend !== null && (
        <div>
          <h2>Estimated Min Marketing Spend:</h2>
          <p>{minMarketingSpend}% of Revenue</p>
          <h2>Estimated Max Marketing Spend:</h2>
          <p>{maxMarketingSpend}% of Revenue</p>
        </div>
      )}
    </div>
  );
};

export default App;
*/
//Using bootstrap
/*
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [growthStage, setGrowthStage] = useState(1);
  const [revenue, setRevenue] = useState('');
  const [minSpend, setMinSpend] = useState(null);
  const [maxSpend, setMaxSpend] = useState(null);

  const calculateMarketingSpend = () => {
    const revenueValue = parseFloat(revenue);

    if (isNaN(revenueValue) || revenueValue <= 0) {
      alert('Please enter a valid positive revenue amount.');
      return;
    }

    let minSpendPercentage;
    let maxSpendPercentage;

    switch (growthStage) {
      case 1: // Pre Product
        minSpendPercentage = 110;
        maxSpendPercentage = 90;
        break;
      case 2: // Post Product
        minSpendPercentage = 30;
        maxSpendPercentage = 60;
        break;
      case 3: // High Growth
        minSpendPercentage = 10;
        maxSpendPercentage = 30;
        break;
      case 4: // Mature
        minSpendPercentage = 5;
        maxSpendPercentage = 15;
        break;
      default:
        minSpendPercentage = null;
        maxSpendPercentage = null;
        break;
    }

    const minSpendValue = (revenueValue * minSpendPercentage) / 100;
    const maxSpendValue =
      maxSpendPercentage !== null
        ? (revenueValue * maxSpendPercentage) / 100
        : null;

    setMinSpend(minSpendValue.toFixed(2));
    setMaxSpend(maxSpendValue !== null ? maxSpendValue.toFixed(2) : null);
  };

  return (
    <div className="container mt-5">
      <h1>Marketing Spend Calculator</h1>
      <div className="mb-3">
        <label className="form-label">Select Growth Stage:</label>
        <div className="btn-group" role="group">
          <button
            type="button"
            className={`btn ${growthStage === 1 ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setGrowthStage(1)}
          >
            Pre Product
          </button>
          <button
            type="button"
            className={`btn ${growthStage === 2 ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setGrowthStage(2)}
          >
            Post Product
          </button>
          <button
            type="button"
            className={`btn ${growthStage === 3 ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setGrowthStage(3)}
          >
            High Growth
          </button>
          <button
            type="button"
            className={`btn ${growthStage === 4 ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setGrowthStage(4)}
          >
            Mature
          </button>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Enter Revenue (in Rupees):</label>
        <input
          type="number"
          className="form-control"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={calculateMarketingSpend}>
        Calculate Marketing Spend
      </button>
      {minSpend !== null && (
        <div className="mt-3">
          <h4>Marketing Spend Range:</h4>
          <p>
            Minimum Spend: Rs. {minSpend}
            {maxSpend !== null && ` - Maximum Spend: Rs. ${maxSpend}`}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
*/
//https://chat.openai.com/share/c1d4d0fe-b8b9-4991-91de-2476199a2779
// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GrowthStageSelector from './components/GrowthStageSelector';
import RevenueInput from './components/RevenueInput';
import MarketingSpendResult from './components/MarketingSpendResult';

const App = () => {
  const [growthStage, setGrowthStage] = useState(1);
  const [revenue, setRevenue] = useState('');
  const [minSpend, setMinSpend] = useState(null);
  const [maxSpend, setMaxSpend] = useState(null);

  const calculateMarketingSpend = () => {
    const revenueValue = revenue;// = parseFloat(revenue);

    if (isNaN(revenueValue) || revenueValue <= 0) {
      alert('Please enter a valid positive revenue amount.');
      return;
    }

    let minSpendPercentage;
    let maxSpendPercentage;

    switch (growthStage) {
      case 1: // Pre Product
        minSpendPercentage = 90;
        maxSpendPercentage = 110;
        break;
      case 2: // Post Product
        minSpendPercentage = 30;
        maxSpendPercentage = 60;
        break;
      case 3: // High Growth
        minSpendPercentage = 10;
        maxSpendPercentage = 30;
        break;
      case 4: // Mature
        minSpendPercentage = 5;
        maxSpendPercentage = 15;
        break;
      default:
        minSpendPercentage = null;
        maxSpendPercentage = null;
        break;
    }

    const minSpendValue = (revenueValue * minSpendPercentage) / 100;
    const maxSpendValue =
      maxSpendPercentage !== null
        ? (revenueValue * maxSpendPercentage) / 100
        : null;

    setMinSpend(minSpendValue.toFixed(2));
    setMaxSpend(maxSpendValue !== null ? maxSpendValue.toFixed(2) : null);
  
  };

  return (
    <div className="container mt-5">
      <h1>Marketing Spend Calculator</h1>
      <GrowthStageSelector selectedStage={growthStage} onSelectStage={setGrowthStage} />
      <RevenueInput value={revenue} onChange={setRevenue} />
      <button type="button" className="btn btn-primary" onClick={calculateMarketingSpend}>
        Calculate Marketing Spend
      </button>
      {minSpend !== null && (
        <MarketingSpendResult minSpend={minSpend} maxSpend={maxSpend} />
      )}
    </div>
  );
};

export default App;
