import React, { useState } from 'react';
import Value2 from './Value2';

function Value(props) {

    const [ValueName , setValueName] = useState ('REACT');

    const ChangeCourse = () => { 
        setValueName('Node');
    }
    
    return (
        <div>
            <p>{ValueName}</p>
            <button onClick={() => ChangeCourse()}>Change Course</button>
            <Value2 Change_Name = {ValueName}/>
        </div>
    );
}

export default Value;