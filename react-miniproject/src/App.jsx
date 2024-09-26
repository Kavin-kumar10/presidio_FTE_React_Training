import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Landpage from './Pages/Landpage';
import Category from './Pages/Category';
import Test from './Pages/Test';
import ScoreView from './Pages/ScoreView';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Landpage/>}/>
          <Route path='/Category' element={<Category/>}/>
          <Route path='/Test' element={<Test/>}/>
          <Route path='/Score' element={<ScoreView/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;