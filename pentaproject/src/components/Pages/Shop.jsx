/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axiosInstance from "/src/Axios/axiosInstance.js";

const Shop = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);
  const [filterList, setFilterList] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const displayProducts = async () => {
    try {
      const response = await axiosInstance.get("/products");
      // console.log(response.data.products)
      setProducts(response.data.products);
    } catch (error) {
      setError(error + " Refresh page");
    }
  };

  const fetchCategory = [
    { id: 1, name: "Royal Foam" },
    { id: 2, name: "Latex Foam" },
    { id: 3, name: "Ash Foam" },
    { id: 4, name: "Foreign Brand" },
  ];

  const getCategoryLocalColor = (category) => {
    switch (category) {
      case 1:
        return "bg-[#7e00a9] ";

      case 2:
        return "bg-green-600 ";

      case 3:
        return "bg-yellow-300 ";

      default:
        return "bg-black ";
    }
  };

  const handleCategoryClick = (id) => {
    const updatedfilterList = filterList.includes(id)
      ? filterList.filter((filter) => filter !== id)
      : [...filterList, id];
    setFilterList(updatedfilterList);
  };
  //  console.log(filterList)

  useEffect(() => {
    displayProducts();
  }, []);

  useEffect(() => {
    let displayItems = products;

    if (filterList.length > 0) {
      displayItems = products.filter((item) =>
        filterList.includes(item.category_id)
      );
      
    }
    setFilteredItems(displayItems);
  }, [products, filterList]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-[60px]">
        <h2 className="text-xl font-semibold text-center font-sans mb-5">
          Choose a Filter:
        </h2>

        <div className="flex gap-3 mb-8 flex-wrap mx-3 justify-center">
          {fetchCategory.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`border-2 border-blue-500 rounded-md px-3 py-1 text-md font-medium cursor-pointer min-w-36 text-center ${
                filterList.includes(category.id)
                  ? getCategoryLocalColor(category.id) + "text-white"
                  : "bg-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-0.5">
        {filteredItems.map((product) => (
          <ShopProducts key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default Shop;

const ShopProducts = ({ product }) => {
  const productType = () => {
    switch (product.category_id) {
      case 1:
        return { name: "Royal Foam", bgColor: "bg-[#0c0e52]" }; // Example color
      case 2:
        return { name: "Latex Foam", bgColor: "bg-green-500" }; // Example color
      case 3:
        return { name: "Ash Foam", bgColor: "bg-yellow-300" }; // Example color
      default:
        return { name: "Foreign product", bgColor: "bg-black" }; // Example color
    }
  };

  const { name, bgColor } = productType();
  const imgUrl = `${import.meta.env.VITE_APP_API_URL}/${
    product.pictures[0].image_path
  }`;

  return (
    <div className="shadow-md border-1 border-gray-300 w-full max-w-sm mx-auto h-70 mt-6 block transform transition-transform duration-300 hover:scale-105 rounded-md">
      <div className="w-full h-[30%] relative">
        <div
          className={`absolute top-0 right-0 text-white text-sm font-bold px-2 py-1 rounded-bl ${bgColor}`}
        >
          {name}
        </div>
        <img
          src={imgUrl}
          alt={product.name}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="m-3 pt-4">
        <h4 className="font-semibold text-lg">{product.name}</h4>
        <h4 className="text-slate-700 font-semibold text-md">
          GH₵{product.prices[1].price} - GH₵{product.prices[0].price}
        </h4>
        <p className="text-sm overflow-ellipsis">{product.description}</p>
        <button className="bg-slate-900 text-white rounded-md min-w-32 p-2 mt-3">
          View Products
        </button>
      </div>
    </div>
  );
};
