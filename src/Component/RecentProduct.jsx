"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const RecentProduct = ({ initialTopics = [] }) => {
  const topics = initialTopics;

  if (topics.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500 text-xl">
        No products available at the moment.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
      {topics.slice(0, 6).map((product) => (
        <div
          key={product._id}
          className="bg-white rounded-md overflow-hidden shadow hover:shadow-2xl duration-300"
        >
          <div className="w-full h-48 relative">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
              priority={true}
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
              <span className="text-gray-500 text-sm">{product.category}</span>
              <span className="font-semibold text-gray-700">
                ${product.price}
              </span>
            </div>
          </div>
          <div className="grid m-2 text-center">
            <Link
              href={`/products/${product._id}`}
              className="bg-indigo-500 hover:bg-indigo-600 duration-300 text-white px-2 py-1 rounded"
            >
              Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentProduct;
