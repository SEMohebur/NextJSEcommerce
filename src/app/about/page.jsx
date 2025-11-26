import React from "react";
import Image from "next/image";
import { Zap, Shield, Car, CheckCircle, ShoppingCart } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className=" w-11/12 mx-auto bg-white">
      <section className="relative py-5">
        <div>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-700 ">
              Best Products, Best Prices
            </h2>
            <p className="mt-2 text-4xl  font-bold text-gray-700 ">
              Your Complete Tech & Vehicle Marketplace
            </p>
            <p className="mt-6 text-xl text-gray-600">
              We bring you a massive collection of new model cars, motorcycles,
              mobiles, laptops, and modern gadgets—all on one platform. Quality
              and affordability are our core promises to deliver an unmatched
              shopping experience.
            </p>
          </div>
        </div>

        <div className=" my-4">
          <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-200/50">
            <Image
              src="https://images.unsplash.com/photo-1605086998852-18371cfd9b2e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D" // A high-quality image showing diverse tech/vehicles
              alt=" E-commerce "
              fill
              sizes="(full) 100vw, 80vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div>
          <div className="lg:text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-700">
              Your Trusted Source for Technology & Mobility
            </h3>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-8 rounded-xl shadow-md ">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-50 text-indigo-600 mb-4">
                <Car size={32} />
              </div>
              <h4 className="mt-3 text-xl font-bold text-gray-700">
                Unmatched Variety
              </h4>
              <p className="mt-2 text-base text-gray-600">
                From the latest electric vehicles to high-performance laptops,
                find everything you need in one place.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-50 text-green-600 mb-4">
                <Shield size={32} />
              </div>
              <h4 className="mt-3 text-xl font-bold text-gray-700">
                Guaranteed Quality
              </h4>
              <p className="mt-2 text-base text-gray-600">
                Every product is carefully verified and sourced directly from
                certified manufacturers for authenticity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md ">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-50 text-yellow-600 mb-4">
                <Zap size={32} />
              </div>
              <h4 className="mt-3 text-xl font-bold text-gray-700">
                Lightning Fast Shipping
              </h4>
              <p className="mt-2 text-base text-gray-600">
                We use premium logistics partners to ensure your valuable
                purchase reaches you quickly and safely.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-50 text-red-600 mb-4">
                <CheckCircle size={32} />
              </div>
              <h4 className="mt-3 text-xl font-bold text-gray-900">
                Secure & Easy Checkout
              </h4>
              <p className="mt-2 text-base text-gray-600">
                Shop with confidence using our secure payment gateways and easy
                return policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-gray-900 rounded-t-2xl">
        <div className="p-3 text-center">
          <h2 className="text-xl md:text-4xl font-extrabold text-white">
            Go now to find your favorite products.
          </h2>
          <p className="mt-4 md:text-xl text-gray-400">
            Explore our curated collections and discover the latest innovations
            in vehicles and technology.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/products"
              className=" bg-white p-2 rounded-full flex gap-2 "
            >
              <ShoppingCart /> Start Shopping Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
