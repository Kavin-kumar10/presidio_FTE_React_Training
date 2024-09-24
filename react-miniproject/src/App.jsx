import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Landpage from './Pages/Landpage';
import Quiz from './Pages/Category';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Landpage/>}/>
          <Route path='/Quiz' element={<Quiz/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
