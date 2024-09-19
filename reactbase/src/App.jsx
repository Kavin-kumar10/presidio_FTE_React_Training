import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Three from './Three';
import useThrottle from './CustomHook/useThrottle';
import Navbar from './Navbar';
import Five from './Five';
import { ItemProvider } from './Five/Context';

function App() {
  return (
    <ItemProvider>
    <Router>
      <div className="App bg-slate-700">
        <Navbar/>
        <Routes>
          <Route element={<Three/>} path='/Three'/>
          <Route element={<Five/>} path='/Five'/>
        </Routes>
      </div>
    </Router>
    </ItemProvider>
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