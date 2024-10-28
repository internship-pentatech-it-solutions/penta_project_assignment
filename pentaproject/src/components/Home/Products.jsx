import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import axiosInstance from '/src/Axios/axiosInstance.js'
const Product = ({ product }) => {

  const imgUrl = `${import.meta.env.VITE_APP_API_URL}/${product.pictures[0].image_path}`;
  // console.log(product);
  // console.log(imgUrl);

  return (
    <div className="shadow px-2 py-1 w-full mt-9 border border-s-4 h-70 shadow overflow-hidden">
    <div className="h-[70%] w-full">
        <img 
            src={imgUrl} 
            alt="Picture of mattresses" 
            className="min-h-full w-full object-cover" 
        />
    </div>
    <div>
        <div className="h-[30%] mt-9 flex justify-between text-sm font-semibold space-x-3">
            <h3 className="text-left">{product.name}</h3>
            <h3 className="text-right text-blue-400">GH₵ {product.prices[0].price}</h3>
        </div>
    </div>
         <p className="flex flex-row space-x-2 mt-2 text-center justify-center">
            <FaStar className="text-yellow-200"/>
            <FaStar className="text-yellow-200"/>
            <FaStar className="text-yellow-200" />
            <FaStar className="text-gray-200"/><FaStar className="text-gray-200"/>
            </p>  
            
      </div>

  )
};



const Products = () => { 
  const [data, setData] = useState(null);
  const[error, setError]= useState(null);

  useEffect(
    ()=>{
      const fetchData = async () => {
        try{
          const response = await axiosInstance.get("/products/limit/8");
          //  console.log(response.data.products);
           setData(response.data.products);
          
        }catch(error){
          // console.log(err )
           setError("Error fetching data", error);
        }
      };
      fetchData();
    }
, []);

if(!data){
  return  <div>Loading...</div>
  
}

if(error){
  return <div>Error :{error}</div>
}
  return(
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((product, index) => (
        <Product key={index} product={product} />
      )
      )
      }
      </div>
       </>
  )
}

export default Products