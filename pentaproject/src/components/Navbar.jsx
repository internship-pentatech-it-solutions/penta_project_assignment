import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <img src="\src\assets\th.jpeg" alt="Logo" className="h-8 w-8 mr-4" />
          <span className="text-lg font-bold">My Website</span>
        </div>
        <ul className="flex gap-6 justify-between items-center">
          <li>
            <Link to="/" className="text-lg font-semibold hover:text-gray-400 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg font-semibold hover:text-gray-400 transition-colors duration-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg font-semibold hover:text-gray-400 transition-colors duration-200">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/shop" className="text-lg font-semibold hover:text-gray-400 transition-colors duration-200">
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;