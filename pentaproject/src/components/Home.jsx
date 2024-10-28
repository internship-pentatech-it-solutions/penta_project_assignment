import Carousel from "./Home/Carousel";
import Brands from './Home/Brands';
import FeaturedBrands from "./Home/FeaturedBrands";
const Home = () => {
  return (
    <>
      <Carousel />
      <main className="px-16 py-10">
        <Brands />
        <FeaturedBrands />
      </main>
    </>
  );
};

export default Home;
