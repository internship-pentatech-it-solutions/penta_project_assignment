import {Link} from 'react-router-dom'
const BrandCard = ({ brand }) => {
    // console.log(brand);
  
    return (
      <div className="w-full h-96 md:h-60 bg-white !rounded-lg shadow-md flex flex-col md:flex-row">
        <div 
          className="w-full h-full md:w-1/2 bg-cover bg-center rounded-l-lg" 
          style={{ backgroundImage: `url(${brand.image})` }} // Use inline style for dynamic image
        ></div>
       
        <div className="w-full md:w-1/2 h-full flex flex-col justify-around font-sans px-5">
          <div>
            <h4 className="font-bold mb-3 text-xl">{brand.name}</h4>
            <p>{brand.description}</p>
          </div>

          <Link to={brand.Url}>
          <button className="border border-black rounded-md p-3 max-w-[90%] sm:max-w-[80%] md:max-w-[60%]">
              Explore Brand
          </button>
          </Link>
          
        </div>
      </div>
    );
  };
  
  export default BrandCard;