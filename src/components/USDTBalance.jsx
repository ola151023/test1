import React, { useState, useEffect } from 'react';
import { Core } from '@quicknode/sdk';

const USDTBalance = () => {
  const [usdtBalance, setUSDTBalance] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUSDTBalance = async () => {
      try {
        const core = new Core({
          endpointUrl: "https://docs-demo.quiknode.pro/",
        });
        
        const balance = await core.client.getBalance({
          address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        });

        // Log the balance to see its value
        console.log(balance);

        setUSDTBalance(balance);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching USDT balance:', error);
        setIsLoading(false);
      }
    };

    getUSDTBalance();
  }, []); 

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          USDT Balance: {Number(usdtBalance)}
        </div>
      )}
    </div>
  );
};

export default USDTBalance;
