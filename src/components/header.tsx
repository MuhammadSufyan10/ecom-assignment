"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/images/logo.png"
import Image from "next/image";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCartOpen, setSidebarCartOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const toggleCartSidebar = () => {
    setSidebarCartOpen(!sidebarCartOpen);
  };
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <div
          className={`fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 md:relative md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="p-4">
            <h2 className="text-xl font-bold">Cart Sidebar</h2>
            <button onClick={toggleSidebar}>close</button>
            <ul>
              <li className="py-2">Cart Item 1</li>
              <li className="py-2">Cart Item 2</li>
              <li className="py-2">Cart Item 3</li>
              <li className="py-2">Total: $100</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          sidebarCartOpen ? "block" : "hidden"
        }`}
      >
        <div
          className={`fixed top-0 right-0 z-50 w-64 h-auto bg-white shadow-lg transform transition-transform duration-300 md:relative md:translate-x-0 ${
            sidebarCartOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="p-4">
            <h2 className="text-xl font-bold">Cart Sidebar</h2>
            <button onClick={toggleCartSidebar}>close</button>
            <ul>
              <li className="py-2">Cart Item 1</li>
              <li className="py-2">Cart Item 2</li>
              <li className="py-2">Cart Item 3</li>
              <li className="py-2">Total: $100</li>
            </ul>
          </div>
        </div>
      </div>
      <header className="w-full border-b" style={{ width: "100%" }}>
        <div className="container mx-auto px-4 lg:px-10 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center gap-2">
            <span className="text-yellow-600 text-3xl font-extrabold">
            <Image src={logo} alt="logo" /></span>
            <span>Furniro</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex space-x-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-yellow-600">
              Home
            </Link>
            <Link href="/shop" className="hover:text-yellow-600">
              Shop
            </Link>
            <Link href="/blog" className="hover:text-yellow-600">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-yellow-600">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <div className="header-icon">
              <FontAwesomeIcon
                icon={faCheck}
                className="fas fa-check"
                style={{ color: "red" }}
              ></FontAwesomeIcon>
            </div>
            <div className="header-icon">
              <i className="fa-solid fa-floppy-disk"></i>
            </div>
            <div className="header-icon">
              <i className="fas fa-heart"></i>
            </div>
            <div className="header-icon">
              <button onClick={toggleCartSidebar}>
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleSidebar}
              id="mobile-menu-button"
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
