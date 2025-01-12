import React, { useEffect, useState } from 'react';
import { fetchBitcoinPrice } from '../utils/api';

const BitcoinPrice = () => {
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBitcoinPrice();
      setPriceData(data.bitcoin);
    };
    fetchData();
  }, []);

  return (
    <div className="bitcoin-price">
      {priceData ? (
        <>
          <h2>Bitcoin Price</h2>
          <p>USD: ${priceData.usd}</p>
          <p>INR: ₹{priceData.inr}</p>
          <p>24h Change: {priceData.usd_24h_change.toFixed(2)}%</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BitcoinPrice;
