import React, { useEffect, useState } from 'react';
import { fetchTrendingCoins } from '../utils/api';

const TrendingCoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTrendingCoins();
      setCoins(data.coins.slice(0, 3)); // Top 3 coins
    };
    fetchData();
  }, []);

  return (
    <div className="trending-coins">
      <h2>Trending Coins (24h)</h2>
      {coins.map((coin, index) => (
        <div key={index} className="coin">
          <img src={coin.item.small} alt={coin.item.name} />
          <p>{coin.item.name} ({coin.item.symbol.toUpperCase()})</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingCoins;
