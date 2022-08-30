import React, { useState } from 'react';

function Counter(props) {

    const [count, setCount] = useState(0);

    const Counteragreement = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    }

    const Coounterdecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
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