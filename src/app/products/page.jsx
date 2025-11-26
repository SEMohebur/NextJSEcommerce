"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";

const getAllData = async () => {
  try {
    const res = await fetch(`https://nextjsecommerc.vercel.app/api/topics`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Faild to fetch topics");
    }
    return res.json();
  } catch (err) {
    console.log("Error loading topics: ", err);
  }
};

const ProductsPage = () => {
  const [dataLoading, setDataLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await getAllData();
      setTopics(data.topics || []);
      setDataLoading(false);
    };
    fetchTopics();
  }, []);

  if (dataLoading) {
    return <p className=" text-center">Loading....</p>;
  }

  return (
    <div className=" w-11/12 mx-auto">
      <div className=" text-center my-5">
        <h2 className=" text-3xl font-bold text-gray-700">All Product</h2>
        <p className="text-gray-500">
          Shop the latest electronics, gadgets, vehicles, and more! Find
          top-quality products at the best prices, handpicked for you.
        </p>
      </div>
      <div className=" flex flex-col-reverse md:flex-row md:justify-between justify-center items-center mt-5 gap-2">
        <div className="flex items-center border rounded-xl border-gray-300">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2  border-gray-300 rounded-l-lg "
          />
          <button className="px-4 py-2 bg-blue-500 text-white  rounded-r-lg hover:bg-blue-600 duration-300">
            Search
          </button>
        </div>
        <div>
          <select
            name="category"
            id="category"
            className=" border border-gray-200 p-2 rounded-xl "
          >
            <option value="">Select Category</option>
            <option value="All">All</option>
          </select>
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-4 ">
        {topics.map((product, id) => {
          return (
            <div
              key={id}
              className=" bg-white rounded-md overflow-hidden shadow hover:shadow-2xl duration-300"
            >
              <div className="w-full h-48 relative ">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description.slice(0, 40)}...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    {product.category}
                  </span>
                  <span className="font-semibold text-gray-700">
                    ${product.price}
                  </span>
                </div>
              </div>
              <div className=" grid m-2 text-center">
                <Link
                  href={`/products/${product._id}`}
                  className=" bg-indigo-500 hover:bg-indigo-600 duration-300 text-white px-2 py-1 rounded cursor-pointer"
                >
                  Detail
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
