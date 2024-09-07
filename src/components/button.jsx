
import React, { useState } from 'react';


 function Component({name,className,onNavigate}) {
  const [isScaled, setIsScaled] = useState(false);


  const handleClick = () => {
    setIsScaled(true);
    setTimeout(() => {
      setIsScaled(false);
      if (onNavigate) {
        onNavigate();  // Trigger the navigation function passed as a prop
      }
    }, 30);
  };
  return <> 
 
  <div    
 onClick={handleClick}
      className={`w-48 bg-sfer cursor-pointer h-[65px] flex items-center justify-center rounded-2xl m-auto shadow-2xl ${className} 
        transform transition-transform duration-300 ${isScaled ? 'scale-125' : ''}`}>
 <h1 className="text-2xl">{name}</h1> 
  </div>
 
 
  </>
}
export default Component