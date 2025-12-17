import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md w-full fixed">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold text-orange-500">
          NewsNow
        </Link>

      </div>
    </nav>
  );
}
