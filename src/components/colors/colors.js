import React,{ useState } from'react';

function Colors(){
    const [color,setColor] = useState('Blue');

    return (
        <>
            <button type="button" onClick={()=>setColor('Red')}>
                Red
            </button>
            <button type="button" onClick={()=>setColor('Green')}>
                Green
            </button>
            <button type="button" onClick={()=>setColor('Yellow')}>
                Yellow
            </button>
            <button type="button" onClick={()=>setColor('Purple')} >
                Purple
            </button>
            <button type="button" onClick={()=>setColor('Orange')}>
                Orange
            </button>
            <button type="button" onClick={()=>setColor('Grey')}>
                Grey
            </button>
            <p>{`You have clicked on : `}<span className={color}>{color}</span></p>
        </>
    );
}

export default Colors;