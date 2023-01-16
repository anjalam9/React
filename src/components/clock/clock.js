import React, { useState,useEffect} from 'react';

function Clock(){
    const [dateTime,setDateTime]=useState(new Date())

    useEffect(()=>{
        setTimeout(()=>{
            setDateTime((dateTime)=> new Date())
        },1000)
    })

    return (
        <p>{`Date and Time : ${dateTime.toLocaleString()}`}</p>
    );
}

export default Clock;