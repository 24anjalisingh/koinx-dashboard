import React from 'react';

const TradingViewChart = () => {
  return (
    <div className="tradingview-chart">
      <iframe
        src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_abc123&symbol=BTCUSD&interval=D&hide_side_toolbar=false"
        width="100%"
        height="400"
        allowTransparency="true"
        frameBorder="0"
        title="Bitcoin Chart"
      />
    </div>
  );
};

export default TradingViewChart;
