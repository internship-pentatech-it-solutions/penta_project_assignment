import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { IoSearch, IoSearchSharp } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className="bg-[#0c0e52] text-white pt-4 ">
        <div className="justify-between flex px-12 pt-6 ">
          {openMenu ? (
            <IoClose
              className="lg:hidden text-4xl"
              onClick={() => setOpenMenu(false)}
            />
          ) : (
            <IoMenuSharp
              className="lg:hidden text-4xl "
              onClick={() => setOpenMenu(true)}
            />
          )}

          <div>
            <img
              src="\src\assets\images\wsports.jpg"
              alt="Logo"
              className="w-44 h-20"
            />
          </div>
          <div className="relative">
            <input
              type="search"
              name=""
              placeholder="search"
              className="rounded-lg hidden lg:block py-3 px-2 text-3xl  pl-10 pr-10 focus:border-4 border-blue-600 justify-center"
            />
            <IoSearch className="absolute right-4 top-8 transform -translate-y-1/2 text-black text-3 xl" />
          </div>
          <div>
            <FiPhoneCall className="text-5xl sm:text-4.5xl" />
          </div>
        </div>

        <div className="hidden lg:flex font-sans font-bold text-2xl  justify-center space-x-12">
          <Link
            to="/"
            className=" hover:border-b-2 border-yellow-500 rounded-md hover:text-yellow-400 focus:text-yellow-600 focus:border-b-2"
          >
            Home
          </Link>

          <Link
            to="/about"
            className=" hover:border-b-2 border-yellow-500 rounded-md hover:text-yellow-400 focus:text-yellow-600 focus:border-b-2"
          >
            About
          </Link>

          <Link
            to="/contact"
            className=" hover:border-b-2 border-yellow-500 rounded-md hover:text-yellow-400 focus:text-yellow-600 focus:border-b-2"
          >
            Contact
          </Link>

          <Link
            to="/shop"
            className=" hover:border-b-2 border-yellow-500 rounded-md hover:text-yellow-400 focus:text-yellow-600 focus:border-b-2"
          >
            Shop
          </Link>
        </div>
      </nav>

      {openMenu && (
        <div className="w-full px-6 pb-4 bg-[#2b1e1e] flex flex-col text-white font-sans font-semibold text-xl gap-y-2">
          <Link
            to="/"
            className=" hover:border-b-2 border-yellow-500 rounded-md hover:text-yellow-400 focus:text-yellow-600 focus:border-b-2"
          >
            Home
          </Link>
          <Link
            to="/"
            className=" hover:border-b-2 border-yellow-500 rounded-md hover:text-yellow-400 focus:text-yellow-600 focus:border-b-2"
          >
            Services
          </Link>

          <Link
            to="/about"
            className=" hover:border-b-2 border-yellow-500 rounded-md hover:text-yellow-400 focus:text-yellow-600 focus:border-b-2"
          >
            About
          </Link>

          <Link
            to="/contact"
            className=" hover:border-b-2 border-yellow-500 rounded-md hover:text-yellow-400 focus:text-yellow-600 focus:border-b-2"
          >
            Contact
          </Link>

          <Link
            to="/shop"
            className=" hover:border-b-2 border-yellow-500 rounded-md hover:text-yellow-400 focus:text-yellow-600 focus:border-b-2"
          >
            Shop
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
