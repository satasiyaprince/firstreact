import React, { useState } from 'react';

function Counter(props) {

const [count,setCount] = useState (0); 

    const Counteragreement =() =>{
          setCount(count+1);  
    }

    const Coounterdecrement =() =>{
            setCount(count-1);
    }
    return (

       
        
        <div>
            <button onClick={() => Counteragreement()}>+</button>
            <span>{count}</span>
            <button onClick={() => Coounterdecrement()}>-</button>
        </div>
    );
}

export default Counter;