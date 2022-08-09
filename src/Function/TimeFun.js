import React, { useEffect, useState } from 'react';

function TimeFun(props) {

        const [time , setTime] = useState (new Date());

        const tick =() => {
            setTime(new Date());
        }


        useEffect(() => {
            //1. ComponentDidMount     //2. ComponentDidUpdate

            let timeD = setInterval(() => tick () ,1000)
            console.log("componentDidUpdate");

            return () => {
                clearInterval(timeD)
            }

        } ,[time])

    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default TimeFun;