import React, { useState } from 'react';

function Dummy() {
    const [names, setNames] = useState({
        firstObj: [
            { name: 'one', click: 'oneHandler' },
            { name: 'two', click: 'twoHandler' },
            { name: 'three', click: 'threeHandler' }
        ],
        oneTrue: false,
        twoTrue: false,
        threeTrue: false

    });



    const oneHandler = () => {
        setNames({
            oneTrue: true,
            twoTrue: true,
            threeTrue: true
        });
        console.log('hiii!');
    }

    return (
        <div>
            {names.firstObj.map(names => (<button onClick={oneHandler}>{names.name}</button>))}
            {useState.oneTrue ? 
            <div style={{ width: '100px', height: '100px', backgroundColor: 'black' }}>
            </div> : null}


        </div>

        

    )
}
export default Dummy;