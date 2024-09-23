import './App.css';
import Landpage from './Pages/Landpage';
import Order from './Pages/Order';
import { Banner } from './Assets';
import { FaCirclePlay } from "react-icons/fa6";
import { Play } from './Assets';
import { Poster } from './Assets';
import MiniCard from './Components/MiniCard';
import CustomerSays from './Pages/CustomerSays';

function App() {
  return (
    <div className="flex flex-col">
      <Landpage/>
      <Order/>
      <div className="w-screen h-[50vh] my-20 " style={{background:`url(${Banner})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <div className='h-full w-full flex flex-col items-center justify-center gap-10' style={{background:`rgba(225,225,225,0.1)`}}>
          <h1 className='text-white font-bold text-6xl'>Everyday Fresh & Clean</h1>
          <img src={Play} alt="" />
        </div>
      </div>
      <section className='h-screen w-screen p-24 flex items-center gap-12 justify-center flex-col'>
        <h1 className='text-5xl font-semibold underline-center'>Fresh Organic Products</h1>
        <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-10">
          <div className='row-span-3 flex justify-center p-10' style={{background:`url(${Poster})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <h1 className='text-white text-5xl font-bold text-center leading-relaxed'>Fresh Juice <br /> 100% Organic</h1>
          </div>
          <MiniCard/>
          <MiniCard/>
          <MiniCard/>
          <MiniCard/>
          <MiniCard/>
          <MiniCard/>
        </div>
      </section>
      <CustomerSays/>
    </div>
  );
}

export default App;
