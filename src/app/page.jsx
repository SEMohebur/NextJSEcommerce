import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import BannerSlider from "@/Component/Banner";

async function getTopics() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/topics`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch topics");
  }

  return res.json();
}

const Homepage = async () => {
  let topics = [];
  try {
    const data = await getTopics();
    topics = data?.topics || [];
  } catch (err) {
    console.error("Error loading topics:", err);
  }

  const items = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Products Sold" },
    { number: "120+", label: "Cities Covered" },
    { number: "5", label: "Customer Rating" },
  ];

  return (
    <div className=" w-11/12 mx-auto">
      <BannerSlider></BannerSlider>

      <section>
        <h2 className=" font-bold text-3xl text-gray-700 text-center my-4">
          Recent Product
        </h2>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-4">
          {topics.slice(0, 6).map((product, id) => {
            return (
              <div
                key={id}
                className=" bg-white rounded-md overflow-hidden shadow hover:shadow-2xl duration-300"
              >
                <div className="w-full h-48 relative">
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
      </section>

      <section className="py-5">
        <h2 className="text-3xl font-bold text-center py-5 text-gray-700">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-3">
          <div className="shadow-md rounded-xl p-5 text-center bg-gray-100 space-y-3 cursor-pointer hover:shadow-xl duration-200">
            <h3 className="font-bold text-xl text-gray-700">
              Mobile & Gadget Shopping
            </h3>
            <p className="text-gray-700">
              Browse the latest smartphones, tablets, smartwatches, and
              accessories. Enjoy fast delivery, secure payment, and original
              brand warranties.
            </p>
          </div>

          <div className="shadow-md rounded-xl p-5 text-center bg-gray-100 space-y-3 cursor-pointer hover:shadow-xl duration-200">
            <h3 className="font-bold text-xl text-gray-700">
              Laptop & Computer Store
            </h3>
            <p className="text-gray-700">
              Explore premium laptops, desktops, PC components, and gaming gear
              from top brands. We ensure authentic products with reliable
              support.
            </p>
          </div>

          <div className="shadow-md rounded-xl p-5 text-center bg-gray-100 space-y-3 cursor-pointer hover:shadow-xl duration-200">
            <h3 className="font-bold text-xl text-gray-700">
              Motorbike & Car Accessories
            </h3>
            <p className="text-gray-700">
              Get high-quality motorbike, bicycle, and car parts, helmets,
              tools, and performance accessories — all in one place.
            </p>
          </div>

          <div className="shadow-md rounded-xl p-5 text-center bg-gray-100 space-y-3 cursor-pointer hover:shadow-xl duration-200">
            <h3 className="font-bold text-xl text-gray-700">
              Home & Kitchen Appliances
            </h3>
            <p className="text-gray-700">
              Shop pressure cookers, blenders, electric fans, ovens, and all
              types of home essentials at the best prices.
            </p>
          </div>

          <div className="shadow-md rounded-xl p-5 text-center bg-gray-100 space-y-3 cursor-pointer hover:shadow-xl duration-200">
            <h3 className="font-bold text-xl  te">
              Fashion & Lifestyle Products
            </h3>
            <p className="text-gray-700">
              Discover mens and women’s clothing, shoes, bags, and daily
              lifestyle items with top-quality and affordable pricing.
            </p>
          </div>

          <div className="shadow-md rounded-xl p-5 text-center bg-gray-100 space-y-3 cursor-pointer hover:shadow-xl duration-200">
            <h3 className="font-bold text-xl text-gray-700">
              Fast Delivery & Easy Return
            </h3>
            <p className="text-gray-700">
              Enjoy super-fast delivery, secure packaging, and a hassle-free
              return policy for a smooth shopping experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-2">Our Achievements</h2>
          <p className="text-gray-600 mb-10">
            A quick look at what we’ve accomplished over the years
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white shadow rounded-lg hover:shadow-md transition"
              >
                <h3 className="text-3xl font-bold text-indigo-600">
                  {item.number}
                </h3>
                <p className="text-gray-600 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 text-gray-700">
        <h2 className="text-3xl font-bold text-center py-5 text-gray-700">
          Contact Information
        </h2>

        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-base md:text-lg">
            For product support, order tracking, or customer service — feel free
            to contact us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
          <div className="p-6 rounded-2xl shadow-md flex flex-col items-center text-center bg-gray-100 cursor-pointer hover:shadow-xl duration-200">
            <MdEmail className="w-10 h-10 text-blue-500 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p>support@shoppinghub.com</p>
          </div>

          <div className="p-6 rounded-2xl shadow-md flex flex-col items-center text-center bg-gray-100 cursor-pointer hover:shadow-xl duration-200">
            <IoCall className="w-10 h-10 text-green-500 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p>+880 1234 567 890</p>
          </div>

          <div className="p-6 rounded-2xl shadow-md flex flex-col items-center text-center bg-gray-100 cursor-pointer hover:shadow-xl duration-200">
            <FaMapMarkedAlt className="w-10 h-10 text-red-500 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p>Dhaka, Bangladesh</p>
          </div>

          <div className="p-6 rounded-2xl shadow-md flex flex-col items-center text-center bg-gray-100 cursor-pointer hover:shadow-xl duration-200">
            <MdOutlineWatchLater className="w-10 h-10 text-yellow-500 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
            <p>Sat - Thu: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
