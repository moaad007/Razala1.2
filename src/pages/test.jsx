import React from 'react';
import { useLocation } from 'react-router-dom';
import Component from '../components/button';
import { AiFillPlusCircle } from "react-icons/ai";
import Add from '../components/add';
import Search from '../components/searchBar';
function RoomPage() {
  const location = useLocation();
  const { name } = location.state || {};
  
  // Conditionally render content based on the name
  const renderContent = () => {
    switch (name) {
      case 'Razala':
        return <h1>page</h1>;
      case 'Rita':
        return <div className='relative'>Rita Component Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta eos minus debitis voluptate, cum aperiam corporis nostrum? Molestiae voluptatem deserunt quisquam deleniti nam a commodi nostrum ipsam consectetur, quaerat in.run</div>;
      case 'Yara':
        return <div>Yara Component</div>;
      case 'Lala Habiba':
        return <div>Lala Habiba Component</div>;
      case 'Marjana':
        return <div>Marjana Component</div>;
      case 'Yacout':
        return <div>Yacout Component</div>;
      case 'Yezza':
        return <div>Yezza Component</div>;
      case 'exterieur':
        return <div>Exterieur Component</div>;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
 <>

      <div className=" w-screen flex flex-col  items-center bg-blue h-screen">
    <Add/>


        {renderContent()} {/* Render the specific content */}
      
       <Search className=" absolute  m-auto"/> 
      
      </div>

      
               
     



      
     
 </>  );
}

export default RoomPage;

