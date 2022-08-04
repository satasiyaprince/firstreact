import React, { useState } from 'react';
import Fees from './Fees';

function Course(props) {

    const [CourseName , setCouseName] = useState ('REACT');

    const Changecourse =() => {
        setCouseName('Node');
    }
    return (
        <div>
            <p>{CourseName}</p>
            <button onClick={() => Changecourse()}>Change Course</button>
            <Fees Course_Name = {CourseName} />
        </div>
    );
}

export default Course;