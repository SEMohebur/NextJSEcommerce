"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const bannerData = [
  {
    name: "Iphone 12",
    img: "https://images.unsplash.com/photo-1605574931378-0be0786247c0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTJ8ZW58MHx8MHx8fDA%3D",
    description:
      "The iPhone 12 combines sleek design with powerful performance. Featuring a 6.1-inch Super Retina XDR display, it delivers vibrant colors and sharp visuals. Powered by the A14 Bionic chip, it handles multitasking, gaming, and demanding apps smoothly. Its dual 12MP camera system, with wide and ultra-wide lenses, captures stunning photos and 4K videos, even in low light. With 5G support, fast downloads and streaming are possible. MagSafe enables easy wireless charging and accessory attachment. Running iOS with regular updates, and protected by Ceramic Shield, the iPhone 12 offers a durable, stylish, and versatile smartphone experience.",
  },
  {
    name: "Smart Watch",
    img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "A Smart Watch is a versatile wearable device that combines style, technology, and convenience. It tracks fitness metrics like heart rate, steps, calories, and sleep patterns, helping users maintain a healthy lifestyle. With notifications for calls, messages, and apps, it keeps you connected without constantly checking your phone. Many smartwatches feature GPS, music control, and customizable watch faces. Water-resistant models allow for swimming and outdoor activities.",
  },
  {
    name: "BMW",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww",
    description:
      "BMW is a premium German automobile brand renowned for its luxury, performance, and innovative engineering. Known for sleek designs, powerful engines, and advanced technology, BMW delivers a thrilling driving experience. The brand offers a range of vehicles from sporty coupes and sedans to versatile SUVs, combining comfort, safety, and efficiency. With cutting-edge infotainment systems, driver-assist features, and sustainable options like electric models, BMW continues to set the standard in automotive excellence worldwide.",
  },
];

export default function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <section className="py-10 text-gray-700">
      <div className="max-w-7xl mx-auto ">
        <Slider {...settings}>
          {bannerData.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white p-4">
                <h2 className="text-5xl md:text-7xl  font-extrabold text-gray-200">
                  {item.name}
                </h2>
                <p className="mt-2 text-sm md:text-base  text-gray-200">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
