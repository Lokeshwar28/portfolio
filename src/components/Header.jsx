import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">Lokeshwar Reddy</h1>
    <nav>
      <Link className="mx-2 hover:text-gray-300" to="/">Home</Link>
      <Link className="mx-2 hover:text-gray-300" to="/about">About</Link>
      <Link className="mx-2 hover:text-gray-300" to="/projects">Projects</Link>
      <Link className="mx-2 hover:text-gray-300" to="/skills">Skills</Link>
      <Link className="mx-2 hover:text-gray-300" to="/education">Education</Link>
      <Link className="mx-2 hover:text-gray-300" to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;