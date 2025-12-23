import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import supabase from '../supabaseClient';
import AddProduct from "../components/AddProduct";

function RoomPage() {
  const location = useLocation();
  const { name } = location.state || { name: "default" }; // Current room name
  const [roomProducts, setRoomProducts] = useState([]);

  // Fetch products associated with the current room
  useEffect(() => {
    fetchRoomProducts(name);
  }, [name]);

  const fetchRoomProducts = async (roomName) => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('room', roomName);  // Fetch products associated with the room

    if (error) {
      console.error('Error fetching room products:', error);
    } else {
      setRoomProducts(data);
    }
  };

  const handleSelectProduct = async (productId) => {
    // Assign product to this room
    const { data, error } = await supabase
      .from('products')
      .update({ room: name })
      .eq('id', productId);

    if (error) {
      console.error('Error assigning product to room:', error);
    } else {
      // Re-fetch room products after assignment
      fetchRoomProducts(name);
    }
  };

  return (
    <div className="w-screen flex flex-col items-center bg-[#FAF7F0] h-screen px-[15px] h-[80%]">
      <h1 className="text-3xl font-bold mb-4 p-9  bg-black  text-white text-center  w-screen">{name} Room</h1>

      {/* AddProduct modal with product selection functionality */}
      <AddProduct onSelectProduct={handleSelectProduct} />

      <div className="mt-6 w-full max-w-2xl">
        <h2 className="text-xl mb-2">Products in {name}:</h2>

        {roomProducts.length === 0 ? (
          <p>No products assigned to this room</p>
        ) : (
          <ul>
            {roomProducts.map((product) => (
              <li key={product.id} className="border-b py-2">
                {product.name} - ${product.price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default RoomPage;
