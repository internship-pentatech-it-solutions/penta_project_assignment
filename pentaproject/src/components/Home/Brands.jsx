import BrandCard from "./BrandCard";
import brandData from '../Data/brandData'
// console.log(brandData);
const Brands = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {brandData.map(
        (brand)=>(
        <BrandCard key={brand.id} brand={brand} />
      ))
      }
    </div>
        
      
    </>
  );
};

export default Brands;
