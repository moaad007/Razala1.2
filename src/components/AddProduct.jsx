import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient';

export default function ProductSelectionModal({ onSelectProduct }) {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch products from Supabase on modal open
  const fetchProducts = async () => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
      console.error('Error fetching products:', error);
    } else {
      setProducts(data || []); // Ensure products is always an array, even if data is null
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchProducts(); // Fetch products when the modal is opened
    }
  }, [isOpen]);

  const handleAddProduct = async () => {
    if (newProduct.name && newProduct.price) {
      const { data, error } = await supabase
        .from('products')
        .insert([{ name: newProduct.name, price: parseFloat(newProduct.price) }]);

      if (error) {
        console.error('Error adding product:', error);
      } else if (data && data.length > 0) {
        setProducts((prevProducts) => [...prevProducts, data[0]]); // Add new product to the list in real-time
        setNewProduct({ name: '', price: '' });
      }
    }
  };

  const handleSelectProduct = (productId) => {
    onSelectProduct(productId); // Pass the selected product to parent component
    setIsOpen(false); // Close modal after selection
  };

  // Filter products based on search input
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-md"
        onClick={() => setIsOpen(true)}
      >
        Select Products
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-[400px] md:max-w-[600px] p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-red-500 font-bold"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>

            <h2 className="text-lg font-bold mb-4">Select Products</h2>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2 mb-4 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Product List */}
            <div className="h-48 overflow-y-auto border p-2 rounded-md">
              {filteredProducts.length === 0 ? (
                <p>No products found</p>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="mb-2 flex items-center justify-between border-b py-2"
                  >
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                    </div>
                    <button
                      className="px-2 py-1 bg-blue-500 text-white rounded-md"
                      onClick={() => handleSelectProduct(product.id)}
                    >
                      Select
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Add New Product */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Product name"
                className="w-full p-2 mb-2 border rounded"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
              <input
                type="number"
                placeholder="Price"
                className="w-full p-2 mb-2 border rounded"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
              <button
                className="w-full p-2 bg-green-500 text-white rounded-md"
                onClick={handleAddProduct}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
