'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductList({ params }: { params: { product: string } }) {
  const [res, setRes] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState("gray");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetch(`https://fakestoreapi.com/products/${params.product}`);
        const result: Product = await data.json();

        if (!result) {
          throw new Error("Product not found");
        }
        setRes(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [params.product]);

  if (!res) {
    return <div>Loading...</div>;
  }

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const getPriceBasedOnColor = () => {
    if (selectedColor === "black") {
      return res.price + 5;
    } else if (selectedColor === "blue") {
      return res.price - 3;
    }
    return res.price;
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:w-4/5 mx-auto">
          <Image
            alt="ecommerce"
            className="w-full h-64 lg:w-1/2 lg:h-auto object-cover object-center rounded"
            src={res.image}
            width={400}
            height={400}
          />
          <div className="w-full lg:w-1/2 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 className="text-gray-900 text-2xl md:text-3xl title-font font-medium mb-2">{res.title}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    fill={i < res.rating.rate ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-gray-600 ml-2 text-sm sm:text-base">{res.rating.count} Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed text-sm sm:text-base">{res.description}</p>
            <div className="flex flex-col sm:flex-row mt-6 items-start sm:items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex mb-4 sm:mb-0">
                <span className="mr-3">Color</span>
                {["gray", "black", "blue"].map((color, index) => (
                  <button
                    key={index}
                    className={`border-2 border-gray-300 ${color === selectedColor ? "bg-indigo-500" : ""} rounded-full w-6 h-6 focus:outline-none`}
                    onClick={() => handleColorChange(color)}
                  />
                ))}
              </div>
              <div className="flex sm:ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <span className="title-font font-medium text-lg sm:text-2xl text-gray-900">
                ${getPriceBasedOnColor()}
              </span>
              <button className="mt-4 sm:mt-0 sm:ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
