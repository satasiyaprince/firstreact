import React, { useState } from 'react';

function Country(props) {
    const [countryname , setcountryname] = useState ('UK');

    const ChangeCounrty =() => {
        setcountryname('India')
    }
    return (
        <div>
            <p>{countryname}</p>
            <button onClick={() => ChangeCounrty()}>ChangeCounrty</button>
        </div>
    );
}

export default Country;