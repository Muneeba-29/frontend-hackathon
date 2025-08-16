import React from "react";
import { useNavigate } from "react-router-dom";


function Navbar() {
     const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); 
  };
  return (
    <header className="bg-pink-200 text-white py-4 border-b border-pink-700" >
      <div className="container mx-auto flex sm:flex-row justify-between items-center w-[90%]
">
        {/* Logo */}
        <div className="text-xl font-bold mb-2 sm:mb-0 w-15"><img src="logo.png" alt="image" width="100%" height="100%"/></div>
          <nav className="space-x-6 hidden md:block">
    <a href="/" className="text-gray-700 hover:text-pink-600">Home</a>
    <a href="/about" className="text-gray-700 hover:text-pink-600">About</a>
    <a href="/contact" className="text-gray-700 hover:text-pink-600">Contact</a>
  </nav>

        {/* Buttons */}
        <div className="flex sm:flex-row gap-2">
          <button className="rounded px-4 py-2 bg-pink-600 hover:bg-pink-700 transition duration-300"><a href="/login">  Login</a>
          
          </button>
          <button className="rounded px-2 py-2 bg-pink-600 hover:bg-pink-700 transition duration-300" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
    
  );
}

export default Navbar;
