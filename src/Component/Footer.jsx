import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-blue-400 transition">Branding</a>
            </li>
            <li>
              <a className="hover:text-blue-400 transition">Design</a>
            </li>
            <li>
              <a className="hover:text-blue-400 transition">Marketing</a>
            </li>
            <li>
              <a className="hover:text-blue-400 transition">Advertisement</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-blue-400 transition">About us</a>
            </li>
            <li>
              <a className="hover:text-blue-400 transition">Contact</a>
            </li>
            <li>
              <a className="hover:text-blue-400 transition">Jobs</a>
            </li>
            <li>
              <a className="hover:text-blue-400 transition">Press kit</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-blue-400 transition">Terms of use</a>
            </li>
            <li>
              <a className="hover:text-blue-400 transition">Privacy policy</a>
            </li>
            <li>
              <a className="hover:text-blue-400 transition">Cookie policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} YourCompany — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
