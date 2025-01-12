import axios from 'axios';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

// Fetch Bitcoin price
export const fetchBitcoinPrice = async () => {
  const response = await axios.get(`${API_BASE_URL}/simple/price`, {
    params: {
      ids: 'bitcoin',
      vs_currencies: 'usd,inr',
      include_24hr_change: true,
    },
  });
  return response.data;
};

// Fetch Trending Coins
export const fetchTrendingCoins = async () => {
  const response = await axios.get(`${API_BASE_URL}/search/trending`);
  return response.data;
};
