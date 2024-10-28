/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axiosInstance from '/src/Axios/axiosInstance.js'

const Shop = () => {
  return (
    <>
      <div className="mt-[60px]">
        <h2 className="text-xl font-semibold text-center font-sans mb-5">Choose a Filter:</h2>
        <div className="flex gap-3 mb-8 flex-wrap mx-3 justify-center">
          <div className="border-2 border-blue-500 rounded-md px-3 py-1 text-md font-medium cursor-pointer min-w-36 text-center bg-white">Royal Foam</div>
          <div className="border-2 border-blue-500 rounded-md px-3 py-1 text-md font-medium cursor-pointer min-w-36 text-center bg-white">Latex Foam</div>
          <div className="border-2 border-blue-500 rounded-md px-3 py-1 text-md font-medium cursor-pointer min-w-36 text-center bg-white">Ash Foam</div>
          <div className="border-2 border-blue-500 rounded-md px-3 py-1 text-md font-medium cursor-pointer min-w-36 text-center bg-white">Foreign Brand</div>
        </div>
      </div>
      <ShopProduct />
    </>
  )
}
export default Shop;



const ShopProduct = () => {
  const [products, setProducts] = useState(""); // Initialize as an empty array
  const [error, setError] = useState(null);

  const displayProducts = async () => {
    try {
      const response = await axiosInstance.get("/products");
      console.log(response.data.products)
      setProducts(response.data.products);
    } catch (error) {
      setError(error + "Please try again later.");
    }
  };

  useEffect(() => {
    displayProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap gap-0.5">
      {products.map((product) => (
        <ShopProducts key={product.id} product={product} />
      ))}
    </div>
  );
};

const ShopProducts = ({ product }) => {
  const productType = () => {
    switch (product.category_id) {
      case 1:
        return  "Royal Foam";
      case 2:
        return "Latex Foam";
      case 3:
        return "Ash Foam";
      default:
        return "Foreign product";
    }
  };

  const imgUrl = `${import.meta.env.VITE_APP_API_URL}/${product.pictures[0].image_path}`;

  return (
    <div className="shadow-md border-1 border-gray-300 w-full max-w-sm mx-auto h-70 mt-6 block transform transition-transform duration-300 hover:scale-105 rounded-md">
      <div className="w-full h-[30%] relative">
        <div className="absolute top-0 right-0 text-white text-sm font-bold px-2 py-1 rounded-bl bg-red-500">{productType()}</div>
        <img src={imgUrl} alt={product.name} className="w-full h-full object-cover rounded-t-md" />
      </div>
      <div className="m-3 pt-4">
        <h4 className="font-semibold text-lg">{product.name}</h4>
        <h4 className="text-slate-700 font-semibold text-md">GH₵{product.prices[1].price} - GH₵{product.prices[0].price}</h4>
        <p className="text-sm overflow-ellipsis">{product.description}</p>
        <button className="bg-slate-900 text-white rounded-md min-w-32 p-2 mt-3">View Products</button>
      </div>
    </div>
  );
};