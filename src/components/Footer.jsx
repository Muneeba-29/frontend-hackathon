import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-pink-200 text-gray-300 py-10 border-t border-pink-700">
   <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-pink-500 mb-4">About HijabStore</h3>
          <p className="text-gray-800 text-sm leading-relaxed">
            HijabStore is your go-to place for elegant and high-quality hijabs. 
            We offer a wide range of styles, colors, and fabrics to suit your unique taste.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-pink-500 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-800 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Shop</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold text-pink-500 mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-800 text-sm">
            <li><a href="#" className="hover:text-white transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Order Tracking</a></li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-pink-500 mb-4">Contact Us</h3>
          <p className="text-gray-800 text-sm mb-4">
            123 Hijab Street, Modest City, Country<br />
            Phone: +123 456 7890<br />
            Email: support@hijabstore.com
          </p>

          <h4 className="text-lg font-semibold text-pink-500 mb-2">Subscribe to our newsletter</h4>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-2 py-2 rounded-l-md focus:outline-none text-gray-900 bg-white text-sm"
              required
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-300 px-2 py-2 rounded-r-md text-white font-semibold transition text-sm"
            >
              Subscribe
            </button>
          </form>

          <div className="flex space-x-4 mt-6">
            <a href="#" aria-label="Facebook" className="hover:text-pink-600 text-gray-800">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-pink-600 text-gray-800">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-600 text-gray-800">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-pink-600 text-gray-800">
              <FaPinterestP size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-800 text-sm">
        &copy; {new Date().getFullYear()} HijabStore. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
