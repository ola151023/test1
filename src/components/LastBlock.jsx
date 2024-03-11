import React, { useState, useEffect } from 'react'
import { Core } from '@quicknode/sdk'

const LastBlock = () => {
  const [blockNumber, setBlockNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const core = new Core({
        endpointUrl: "https://docs-demo.quiknode.pro/",
      });
      const n = await core.client.getBlockNumber();
      setBlockNumber(n);
      setIsLoading(false); // Update loading state to false once data is fetched
      console.log("Fetched block number:", n); // Log the fetched block number
      console.log("isLoading:", isLoading);
      console.log("blockNumber:", blockNumber);

    } catch (error) {
      console.error('Error fetching block number:', error);
      setIsLoading(false); // Update loading state to false in case of error
    }
  };
  

  useEffect(() => {
    fetchData();
  }, [blockNumber]);
  console.log("blockNumber:", blockNumber); 
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          LastBlock: {Number(blockNumber)}
        </div>
      )}
    </div>
  );
  
}

export default LastBlock;
