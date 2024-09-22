import './App.css';
import Landpage from './Pages/Landpage';
import Order from './Pages/Order';
import { Banner } from './Assets';
import { FaCirclePlay } from "react-icons/fa6";



function App() {
  return (
    <div className="flex flex-col">
      <Landpage/>
      <Order/>
      <div className="w-screen h-96 my-20 " style={{background:`url(${Banner})`,backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <div className='h-full w-full flex flex-col items-center justify-center gap-10' style={{background:`rgba(225,225,225,0.1)`}}>
          <h1 className='text-white font-bold text-6xl'>Everyday Fresh & Clean</h1>
          <FaCirclePlay className='text-CardColor' size={90}/>
        </div>
      </div>
    </div>
  );
}

export default App;
