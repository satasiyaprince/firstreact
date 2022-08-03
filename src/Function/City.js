import React, { useState } from 'react';

function City(props) { 

    //Hook

    const [cityName , setcityName] = useState ('surat');

    const changecity = () => {
        setcityName('Baroda') }
        
    return (
        <div>
            <p>{cityName}</p>
            <button onClick={() => changecity()}>changecity</button>
        </div>
    );
}

export default City;