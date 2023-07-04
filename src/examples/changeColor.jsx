import React, { useState } from 'react';

const ChangeColor = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeBackgroundColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;

    setBackgroundColor(color);
  };

  return (
    <div className='but ' style={{ backgroundColor, width:'100%'}} >
      <button onClick={changeBackgroundColor}>Change Color</button>
    </div>
  );
};

export default ChangeColor;





