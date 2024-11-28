import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import Component from "./button";

function Add({ onClick }) {
  const location = useLocation();
  const { name } = location.state || {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Kiwi",
    "Lemon",
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newItem, setNewItem] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const addItem = () => {
    if (newItem && !items.includes(newItem)) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleItemClick = (item) => {
    console.log(`Selected: ${item}`);
  };

  return (
    <div>
      {/* Add button */}
      <div onClick={onClick} className="">
        <Component name={name} className="my-2" />
        <AiFillPlusCircle
          size="4em"
          color="#B5B2B2"
          className="w-screen my-5"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Select Items</h2>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Filtered Items */}
            <div className="max-h-60 overflow-y-auto mb-4 grid grid-cols-2 gap-2">
              {filteredItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(item)}
                  className="px-3 py-2 bg-gray-100 rounded text-left hover:bg-gray-200 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Add new item */}
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="New item..."
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                className="flex-grow px-3 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={addItem}
                className="px-4 py-2 bg-green-500 text-white rounded-r hover:bg-green-600 transition-colors"
              >
                Add
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Add;
