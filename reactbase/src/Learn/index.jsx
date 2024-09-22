import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onButtonClick }) => {
  console.log('Child re-rendered');
  return <button onClick={onButtonClick}>Click Me</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Without useCallback, this function would be recreated every render
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // Only recreated if the dependencies change

  return (
    <div className='py-24'>
      <p>Count: {count}</p>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
};


export default ParentComponent