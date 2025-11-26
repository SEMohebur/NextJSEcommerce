import Image from "next/image";
import Link from "next/link";
import React from "react";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Faild to fetch");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const ProductsDetailpage = async ({ params }) => {
  const { id } = await params;
  const { topic } = await getTopicById(id);
  // console.log(topic);

  return (
    <div className="w-11/12 mx-auto py-6">
      <div>
        <div className="md:grid md:grid-cols-2 md:gap-16 ">
          <div className="w-full relative h-[450px] sm:h-[600px] rounded-xl shadow-2xl overflow-hidden mb-8 lg:mb-0">
            <Image
              src={topic.image}
              alt={topic.title}
              fill
              className="object-cover "
            />
          </div>

          <div className="space-y-6">
            <div className="border-b border-gray-300 pb-4">
              <span className=" uppercase font-medium text-indigo-600">
                {topic.category}
              </span>
              <h1 className="mt-2 text-xl sm:text-3xl font-extrabold text-gray-700 leading-tight">
                {topic.title}
              </h1>
            </div>

            <div className="flex items-baseline space-x-4">
              <p className="text-xl md:text-2xl font-bold text-gray-700">
                ${topic.price}
              </p>
              <span className=" line-through text-gray-500 text-sm">
                ${topic.price + 10}
              </span>{" "}
            </div>

            <p className="text-lg text-gray-700 pt-4">{topic.description}</p>

            <div className="pt-6 space-y-4">
              <button className="w-full flex items-center  justify-center cursor-pointer px-8 py-3 bg-indigo-500 rounded-md text-white hover:bg-indigo-600 duration-300">
                Add to Cart
              </button>
              <button className="w-full flex items-center justify-center  px-8 py-3 cursor-pointer border border-indigo-600 rounded-lg text-indigo-600 bg-white hover:bg-indigo-50  duration-300">
                Save to Wishlist
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-gray-300 pt-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Product Description
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              {topic.description} <br /> Elevate your everyday with this
              meticulously crafted item, designed for durability and exceptional
              performance. This product combines sleek, modern aesthetics with
              practical functionality, making it an indispensable addition to
              your life. Built using premium, high-quality materials, it
              guarantees longevity and sustained reliability. Every detail, from
              the ergonomic design to the final finish, has been considered to
              provide a seamless user experience. Whether you are looking for a
              powerful tool, a stylish accessory, or a reliable staple, this
              product offers uncompromising quality and outstanding value. Easy
              to integrate into your existing lifestyle, its more than just an
              item its an upgrade to your daily routine.
            </p>
            <ul>
              <li>High-quality, durable materials</li>
              <li>Available in three attractive colors</li>
              <li>Free shipping on all orders over $50</li>
            </ul>
          </div>
        </div>
        <div className=" my-5">
          <Link
            href="/products"
            className=" bg-indigo-500 px-10 py-2 rounded-md text-white hover:bg-indigo-400 duration-300"
          >
            Beck
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailpage;
