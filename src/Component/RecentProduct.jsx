"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RecentProduct() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/topics", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setTopics(data?.topics || []);
        setLoading(false);
      })
      .catch(() => {
        setTopics([]);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <p classedName="text-center py-16 text-gray-500">Loading products...</p>
    );
  if (topics.length === 0)
    return (
      <div className="text-center py-16 text-gray-500">
        No products available.
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {topics.slice(0, 8).map((product) => (
        <div
          key={product._id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
        >
          <div className="relative h-64">
            <Image
              src={product.image || "https://via.placeholder.com/400x300"}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
              {product.description || "No description"}
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">{product.category}</span>
              <span className="text-2xl font-bold text-indigo-600">
                ${product.price}
              </span>
            </div>
            <Link
              href={`/products/${product._id}`}
              className="block mt-5 text-center bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
