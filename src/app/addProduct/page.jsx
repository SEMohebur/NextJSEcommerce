"use client";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";

const AddProductPage = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/register");
    }
  }, [user, router, loading]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ title, description, category, price, image });

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, description, category, price, image }),
      });
      if (res.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your product has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/manageProducts");
      } else {
        throw new Error("Faild to create a topic");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading || !user) {
    return <p className="text-center mt-10 text-xl">Loading...</p>;
  }

  return (
    <div className=" w-11/12 mx-auto">
      <form
        onSubmit={handleSubmit}
        className=" p-5 bg-gray-100 rounded-2xl m-5"
      >
        <h3 className=" text-3xl font-bold text-center text-gray-700">
          Add Product
        </h3>
        <div className="mb-4 grid grid-cols space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder="Enter title..."
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 "
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="text"
              placeholder="Enter description..."
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 "
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <input
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              type="text"
              placeholder="Enter category..."
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 "
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Price
            </label>
            <input
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              type="number"
              placeholder="Enter price..."
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 "
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Image
            </label>
            <input
              onChange={(e) => {
                setImage(e.target.value);
              }}
              type="text"
              placeholder="Enter photo..."
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 "
            />
          </div>
        </div>
        <div className=" flex justify-end">
          {" "}
          <button className=" bg-indigo-500 py-2 px-5 md:px-20 rounded text-white cursor-pointer">
            Add{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
