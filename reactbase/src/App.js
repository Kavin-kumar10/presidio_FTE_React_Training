import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Three from './Three';
import useThrottle from './CustomHook/useThrottle';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<Three/>} path='/Three'/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// const [value,setValue] = useState(1);
// const handleclick = useThrottle(()=>{
//   setValue((prev)=>prev+1);
// },2000)

{/* <h1 className='option'>Throttle check</h1>
<p>{value}</p>
<button onClick={handleclick}>Increment</button> */}