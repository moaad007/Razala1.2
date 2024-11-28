import React from 'react';
import { useNavigate } from 'react-router-dom';
import Component from '../components/button';

const Names = ["Razala", "Rita", "Yara", "Lala Habiba", "Marjana", "Yacout", "Yezza", "Exterieur"];

function Rooms() {
  const navigate = useNavigate();

  const handleButtonClick = (item) => {
    navigate('/Razala1.2/pages/test', { state: { name: item } }); // Pass the clicked item data to the RoomPage
  };

  return (
    <div className='grid grid-cols-2 gap-[15px] auto-rows-[130px] md:grid-cols-3 md:grid-rows-3 h-screen w-screen bg-[#FAF7F0] place-content-center'>
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
