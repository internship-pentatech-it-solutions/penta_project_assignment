import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { FaSquare } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <div className="bg-[#f40000] text-white p-4 mt-5">
        <h2 className="text-lg font-medium">Quick Links</h2>
        <hr className="mt-5" />
        <ul className="list-square pl-5 text-white font-medium space-y-4 mt-2">
          <li className="flex flex-row"><FaSquare className="text-sm pt-1 m-1"/>View Products</li>
          <li className="flex flex-row"><FaSquare className="text-sm pt-1 m-1"/>About Us</li>
          <li className="flex flex-row"><FaSquare className="text-sm pt-1 m-1"/>Services</li>
          <li className="flex flex-row"><FaSquare className="text-sm pt-1 m-1"/>Contact Us</li>
        </ul>
        <h3 className="text-lg font-medium mt-12"> Follow Mattress Home</h3>
        <hr className="mt-5" />
        <ul className=" pl-5 text-white flex justify-center items-center text-3xl space-x-52 mb-12 mt-1">
          <li>
            <a href="https://www.facebook.com/">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <FaInstagramSquare />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com">
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <h3 className="text-lg font-medium">About Us</h3>
        <hr className="mt-5" />
        <p className="pt-3 text-lg font-sans">
          Mattress Home is dedicated to proving quality and affordable
          mattresses for your best rest. Our mission is to ensur`e that everyone
          can enjoy a good night's sleep with our wide range of products.
        </p>
        <p className="text-center p-5 bg-slate-800 m-4">
          &copy; {new Date().getFullYear()} Bazz's MATTRESSES HOME developed by
          <a
            href=" https://wa.me/qr/6FXMPK6GN3R4D1 "
            className="text-white hover:text-gray-400 relative"
          >
            <span className=" p-2">Jessica Baze</span>
            <MdAddCall className="absolute hidden group-hover:block text-gray-400" />
          </a>
          . All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
