import React, {useState} from 'react'
import Rythms from './components/rythms'
import {getRythms} from './services/getRythm'
import Header from './components/header'
import './App.css'

function App() {
  const [matches, setMatches] = useState(null)
  const [val, setVal] = useState('')
  

  return (
    <div className="App">
        <div className="header">
          <Header 
            setVal={setVal}
            getRythms={getRythms}
            matches={matches}
            val={val} 
            setMatches={setMatches}
          />
        </div>
        <div className="results">
           <Rythms matches={matches}/>
        </div>
    </div>
  );
}

export default App;
