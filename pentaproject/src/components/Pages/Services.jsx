import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { RiHotelBedFill } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className="m-10 max-w-1/2">
        <h1 className="text-3xl m-6 font-medium text-yellow-400">
          Improve Your Sleep
        </h1>
        <h1 className="text-4xl m-6 font-semibold ">
          Services we offer at Mattress Home
        </h1>
        <div className="space-y-10 text-gray-600">
          <p className="text-2xl">
            At Mattress Home, we are dedicated to providing top-notch services
            that cater to your sleep needs. Whether you need a new mattress or
            wish to restore your old one, we have the perfect solution for you.
          </p>
          <div className="text-xl space-y-10">
            <p className="flex items-center space-x-2">
              <RiHotelBedFill className="text-2xl" />
              <span className="font-semibold">New Mattresses</span>
              <span>
                Choose from our wide range of high-quality mattresses from
                popular brands like Royal Foam, Latex Foam, Ashfoam, and other
                foreign brands.
              </span>
            </p>
            <p className="flex items-center space-x-2">
              <IoMdCloudUpload className="text-2xl" />
              <span className="font-semibold">Restoration Services</span>
              <span>
                Give your old mattress a new life with our professional
                restoration services, ensuring comfort and durability.
              </span>
            </p>
            <p className="flex items-center space-x-2">
              <FaTools className="text-2xl" />
              <span className="font-semibold">Customer Support</span>
              <span>
                We are here to solve your sleep needs. Give us a call or chat
                with us for personalized recommendations and assistance.
              </span>
            </p>
          </div>
        </div>

        <div className="flex space-x-10 mt-8">
          <Link to="/Contact">
            <button
              type="button"
              className="bg-yellow-400 p-3 rounded-lg text-center"
            >
              Contact Us
            </button>
          </Link>
          <div className="text-xl mt-3">
            <Link to="/about">
              <h3 className="flex items-center">
                Learn More{" "}
                <FaLongArrowAltRight className="pt-1 text-2xl pl-2" />
              </h3>
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <img src="\src\assets\worker.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Services;