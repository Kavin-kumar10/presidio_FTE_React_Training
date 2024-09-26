import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTimePop } from "../../Redux/QuizSlice";

const Timer = () => {
  const [time, setTime] = useState(60); 
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
        if(time>0)
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if(time == 0)
  {
    dispatch(setTimePop(true));
  }

  return (
    <div>
      <h1 className="text-white text-sm md:text-lg px-3 py-1 sm:px-5 sm:py-3 bg-primary opacity-70 rounded-md flex items-center justify-center gap-1"> <span className="hidden md:block">Time Left:</span> {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</h1>
    </div>
  );
};

export default Timer;
