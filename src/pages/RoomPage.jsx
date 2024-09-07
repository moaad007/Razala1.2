import React from 'react';
import { useNavigate } from 'react-router-dom';
import Component from '../components/button';

const Names = ["Razala", "Rita", "Yara", "Lala Habiba", "Marjana", "Yacout", "Yezza", "exterieur"];

function Rooms() {
  const navigate = useNavigate();

  const handleButtonClick = (item) => {
    navigate('/pages/test', { state: { name:item } }); // Pass the clicked item data to the RoomPage
  } ;

  return (
    <div className='grid grid-cols-2 auto-rows-[200px] md:grid-cols-3 md:auto-rows-[300px] h-screen w-screen bg-blue'>
      {Names.map((item, i) => (
        <Component 
          name={item}
          key={i}
          className={i === 7 ? 'bg-[#3B8B4C]' : ''}
         onNavigate={() => handleButtonClick(item)}  // Pass the clicked name to the handler
        />
      ))}


    </div>
  );
}

export default Rooms;
