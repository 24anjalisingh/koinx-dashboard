import React, { useState, useEffect } from 'react';
import BitcoinPrice from './components/BitcoinPrice';
import TradingViewChart from './components/TradingViewChart';
import TrendingCoins from './components/TrendingCoins';
import YouMayAlsoLike from './components/YouMayAlsoLike';
import { fetchTrendingCoins } from './utils/api';

function App() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTrendingCoins();
      setTrendingCoins(data.coins.slice(0, 3)); // Top 3 coins
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <BitcoinPrice />
      <TradingViewChart />
      <TrendingCoins />
      <YouMayAlsoLike coins={trendingCoins} />
    </div>
  );
}

export default App;
