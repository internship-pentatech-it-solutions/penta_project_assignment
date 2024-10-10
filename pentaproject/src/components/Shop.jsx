import { useState, useEffect } from "react";

const Shop = () => {
  const [product, setProduct] = useState("");

  const displayPets = () => {
    fetch("https://randomfox.ca/floof")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setProduct(data.image);
      });
  };

  useEffect(() => {
    displayPets();
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Shop</h1>
        <p className="text-lg">
          This is the shop page. <br />
          Shop with us!!!, For exciting experience we are giving 40% discount on
          all sales{" "}
        </p>
      </div>

      <div>
        <h1 className="mb-30 font-bold text-2xl">PET STORE</h1>
        <img
          src={product}
          alt=" Fox images"
          className="h-70 w-80 shadow-lg"
        ></img>
        <button
          onClick={displayPets}
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full text-3xl m-5 p-5"
        >
          Change pet
        </button>
      </div>
    </>
  );
};

export default Shop;
