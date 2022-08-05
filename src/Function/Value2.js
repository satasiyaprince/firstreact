import React, { useState } from 'react';

function Value2(props) {

    const [Value2Name , setValue2Name] = useState('HTML');

    const ShowFees = () => {
        setValue2Name('5,000')
    }
    return (
        <div>
            {
                props.Change_Name === 'REACT' ? <p>45,000</p> : <p>50,000</p>
            }
            <p>{Value2Name}</p> 
            <button onClick={() => ShowFees()}>ShowFees</button>
        </div>
    );
}

export default Value2;