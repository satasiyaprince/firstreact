import React, { useState } from 'react';

function Fees(props) {

    const [Fees , setFees] = useState ('45000');

    // const ChangeFees =() => {
    //     setFees('50000')
    // }
    return (
        <div>
            {
                props.Course_Name === 'REACT' ? <p>45000</p> : <p>50000</p>
            }
            {/* <p>{Fees}</p> */}
            {/* <button onClick={() => ChangeFees()}>ChangeFees</button> */}
        </div>
    );
}

export default Fees;