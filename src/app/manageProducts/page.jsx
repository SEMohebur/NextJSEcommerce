"use client";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import Link from "next/link";

const getAllData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/topics`, {
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

const ManageProductPage = () => {
  const [user, loading] = useAuthState(auth);
  const [dataLoading, setDataLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/register");
    }
  }, [user, router, loading]);
  //

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await getAllData();
      setTopics(data.topics || []);
      setDataLoading(false);
    };
    fetchTopics();
  }, []);

  const removeTopics = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/topics?id=${id}`,
            {
              method: "DELETE",
            }
          );

          if (res.ok) {
            await Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            window.location.reload();
          } else {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while deleting.",
              icon: "error",
            });
          }
        } catch (err) {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong while deleting.",
            icon: "error",
          });
        }
      }
    });
  };

  //
  if (loading || !user || dataLoading) {
    return <p className="text-center mt-10 text-xl">Loading...</p>;
  }
  return (
    <div className=" w-11/12 mx-auto">
      <div className="overflow-x-auto my-2">
        <h2 className=" my-4 text-center text-3xl font-bold text-gray-700">
          Manage Product
        </h2>
        <table className="min-w-full border border-gray-200 ">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Title
              </th>

              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Category
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Price
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Image
              </th>

              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            {topics.map((product, id) => (
              <tr
                key={id}
                className="hover:bg-gray-50 border-b border-gray-300"
              >
                <td className="px-4 py-2 text-sm text-gray-800">
                  {product.title}
                </td>

                <td className="px-4 py-2 text-sm text-gray-800">
                  {product.category}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  ${product.price}
                </td>
                <td className="px-4 py-2">
                  <div className="w-16 h-10 relative overflow-hidden rounded">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 64px"
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 text-sm text-gray-800 flex gap-2">
                  <Link
                    href={`/products/${product._id}`}
                    className="  bg-gray-200 p-1 rounded text-gray-500 cursor-pointer"
                  >
                    {" "}
                    View
                  </Link>
                  <button
                    onClick={() => removeTopics(product._id)}
                    className=" bg-red-400 p-1 rounded text-white cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProductPage;
