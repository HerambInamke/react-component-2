import React from "react";
import Button from "../components/button";

const Productcard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150";
  const productName = "Sample Product";
  const productPrice = "1.00";

  const handleViewProduct = () => {
    alert("Viewing product details...");
  };

  return (
    <div className="border rounded-lg shadow-md p-4 w-64 text-center">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-600">{productPrice}</p>
      <div className="mt-4">
        <Button onClick={handleViewProduct} text="View Product" />
      </div>
    </div>
  );
};

export default Productcard;
