import React, { useState } from 'react';

function City(props) { 

    //Hook

    const [cityName , setcityName] = useState ('surat');

    const changecity = () => {
        setcityName('Baroda') }
        
    return (
        <div>
            {
                props.Country_name === 'India' ? <p>Taj mahel</p> : <p>Londen Eye</p>
            }
            <p>{cityName}</p>
            <button onClick={() => changecity()}>changecity</button>
        </div>
    );
}

export default City;