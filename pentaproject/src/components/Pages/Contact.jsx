import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="w-full relative"> {/* Adjusted height here */}
  <div className="absolute top-0 left-0 text-white text-5xl font-bold px-2 py-1 m-4">
    Contact Us
  </div>
  <img
    src="\assets\image (5).avif " 
    alt=" A personnel at office"
    className="w-full h-full object-cover rounded-t-md"
  />
</div>
      <form action="post" className="bg-white p-6 mt-12 rounded-xl">
        <div className="flex flex-col space-y-4 m-3 ">
          <h1 className="text-3xl font-bold mb-6 text-yellow-300">
            Get in Touch
          </h1>
          <div className="space-y-10 w-full">
            <div className="w-full">
              <label className="block text-xl font-medium text-gray-500">
                Name:
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="p-4 rounded-md w-full required"
              />
            </div>
            <div className="w-full">
              <label className="block text-xl font-medium text-gray-500">
                Email:
              </label>
              <input
                type="email"
                placeholder="doe@gmail.com"
                className="p-4 rounded-md w-full required"
              />
            </div>
            <div className="w-full">
              <label className="block text-xl font-medium text-gray-500">
                Phone Number:
              </label>
              <input
                type="tel"
                placeholder="+XX XXX XXX XXXX"
                className="p-4 rounded-md w-full required"
              />
            </div>

            <div className="w-full">
              <h2 className="text-2xl text-gray-400 ">
                Preferred means of communication
              </h2>
              <div className="space-x-14  ">
                <input type="radio" name="communication" id="email" />
                <label htmlFor="email">Email</label>
                <input type="radio" name="communication" id="phone" />
                <label htmlFor="phone">Phone</label>
              </div>
            </div>
            <textarea
              cols="30"
              placeholder="Message"
              className="w-full h-60 rounded-lg"
            ></textarea>
          </div>
          <button
            type="submit"
            className="border-2 border-yellow-300 rounded-lg w-full p-3 items-center bg-yellow-300 text-white font-bold text-xl"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="bg-yellow-300 p-6 mt-12 rounded-xl space-y-5 text-2xl font-bold">
        <div className="flex items-center space-x-5">
          <IoCallOutline className="text-xl" />
          <span>+233 543255820</span>
        </div>
        <div className="flex items-center space-x-5">
          <MdOutlineEmail className="text-xl" />
          <span>jessicaennor@gmail.com</span>
        </div>
        <div className="flex items-center space-x-5">
          <FaLocationDot className="text-xl" />
          <span>Takoradi</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
