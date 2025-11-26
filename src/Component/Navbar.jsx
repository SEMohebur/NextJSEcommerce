"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User Logged Out");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <nav className=" shadow">
      <div className=" md:sticky md:top-0 md:z-10 flex bg-white flex-col md:flex-row items-center justify-between w-11/12 mx-auto px-3 py-2 gap-3 ">
        <div className=" border-2 rounded-full p-2 border-green-400 cursor-pointer ">
          <Link href="/">
            <Image src="/logo.avif" width={30} height={30} alt="Logo" />
          </Link>
        </div>
        <ul className=" flex flex-col md:flex-row items-center justify-center gap-5 font-bold text-gray-700">
          <li className=" cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className=" cursor-pointer">
            <Link href="/products">Products</Link>
          </li>
          <li className=" cursor-pointer">
            <Link href="/about">About Us</Link>
          </li>
          {user ? (
            <>
              <li className=" cursor-pointer">
                <Link href="/addProduct">Add Product</Link>
              </li>

              <li className=" cursor-pointer">
                <Link href="/manageProducts">Manage Products</Link>
              </li>

              <li className=" cursor-pointer">
                <button
                  onClick={handleLogout}
                  className=" bg-gray-300 px-2 py-1 rounded-2xl cursor-pointer hover:bg-white duration-300"
                >
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li className=" cursor-pointer">
                <Link href="/login">Login</Link>
              </li>
              <li className=" cursor-pointer">
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
