import React, { useState } from 'react';
import City from './City';

function Country(props) {
    const [countryname , setcountryname] = useState ('India');

    const ChangeCounrty =() => {
        setcountryname('UK')
    }
    return (
        <div>
            <p>{countryname}</p>
            <button onClick={() => ChangeCounrty()}>ChangeCounrty</button>

            <City Country_name = {countryname}/>
        </div>
    );
}

export default Country;