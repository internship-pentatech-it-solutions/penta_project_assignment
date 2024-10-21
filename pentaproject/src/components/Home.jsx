import Carousel from "./Carousel";
const Home = () => {
  return (
    <>
      <Carousel />

      <div className="font-sans flex flex-col md:flex-row md:flex-wrap bg-slate-300">
  
    <div className="w-full md:w-1/2 p-2 flex flex-row md:flex-col md:flex-wrap bg-white rounded-md shadow-lg">
        <div className="bg-blue-800 text-white flex flex-col items-center p-4">
            <img src="/src/assets/images/NewImage.png" alt="Renovation & Sales" className="mb-4" />
            <p className="text-3xl pt-0">RENOVATION & SALES</p>
            <p className="text-md font">a royal sleep</p>
        </div>
        <div className="text-slate- p-6 text-2xl">
            <h4 className="text-3xl font-medium mb-8">Royal Foam</h4>
            <p>Royal foam mattresses for luxurious sleep</p>
            <button className="border border-black m-4 p-3 rounded-md">Explore Brand</button>
        </div>
    </div>

    
    <div className="w-full md:w-1/2 p-2 flex flex-row md:flex-col md:flex-wrap bg-white rounded-md shadow-lg">
        <div className="bg-red-600 text-white flex flex-col items-center p-4">
            <img src="/src/assets/images/NewImage.png" alt="Renovation & Sales" className="mb-4" />
            <p className="text-3xl pt-0">RENOVATION & SALES</p>
            <p className="text-md">sleep partner</p>
        </div>
        <div className="text-slate- p-6 text-2xl">
            <h4 className="text-3xl font-medium mb-8">Latex Foam</h4>
            <p>Latex foam mattresses for your comfort</p>
            <button className="border border-black m-4 p-3 rounded-md">Explore Brand</button>
        </div>
    </div>

    
    <div className="w-full md:w-1/2 p-2 flex flex-row md:flex-col md:flex-wrap bg-white rounded-md shadow-lg">
        <div className="bg-yellow-300 text-white flex flex-col items-center p-4">
            <img src="/src/assets/images/NewImage.png" alt="Renovation & Sales" className="mb-4" />
            <p className="text-3xl pt-0">RENOVATION & SALES</p>
            <p className="text-md">be our quest sleep good</p>
        </div>
        <div className="text-slate- p-6 text-2xl">
            <h4 className="text-3xl font-medium mb-8">Ash Foam</h4>
            <p>Ash foam mattresses for premium comfort</p>
            <button className="border border-black m-4 p-3 rounded-md">Explore Brand</button>
        </div>
    </div>

    <div className="w-full md:w-1/2 p-2 flex flex-row md:flex-col md:flex-wrap bg-white rounded-md shadow-lg">
        <div className="bg-green-500 text-white flex flex-col items-center p-4">
            <img src="/src/assets/images/NewImage.png" alt="Renovation & Sales" className="mb-4" />
            <p className="text-3xl pt-0">RENOVATION & SALES</p>
            <p className="text-md">your sleep advisor</p>
        </div>
        <div className="text-slate- p-6 text-2xl">
            <h4 className="text-3xl font-medium mb-8">Other Brand</h4>
            <p>Other brand foam mattresses for your use</p>
            <button className="border border-black m-4 p-3 rounded-md">Explore Brand</button>
        </div>
    </div>
</div>
    </>
    
    )}

export default Home;
