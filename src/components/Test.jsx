import React from 'react'
import { Core } from '@quicknode/sdk'
const Test = () => {
    function tt(){
        
const core = new Core({
    endpointUrl: "https://docs-demo.quiknode.pro/",
  })
  
 return core.client.getBlockNumber();
    }
  return (
    <div>


        {tt}
    </div>
 


  )
}

export default Test