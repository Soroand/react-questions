import React from 'react'

function Header({setVal,getRythms,matches,val,setMatches}) {
    return (
        <>
            <h1>Rythm matches</h1>
            <div>
                <input className="input" placeholder="Type word in here" onChange={(e) => setVal(e.target.value)}/>
                <button className='btn' onClick={() => getRythms(val, setMatches)}>Submit</button>
                {matches?.length > 0 && <h4 className='found'>Found: {matches?.length}</h4>}
            </div>
        </>
    )
}

export default Header
