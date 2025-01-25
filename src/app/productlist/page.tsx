'use client';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Products from "../components/products";
import Product from "../components/product";


export default function ProductList() {
  const categories = [
    { id: "1", name: "CLOTHS", itemsCount: 5, imageUrl: "/images/cloth1.png" },
    { id: "2", name: "CLOTHS", itemsCount: 5, imageUrl: "/images/cloth2.png" },
    { id: "3", name: "CLOTHS", itemsCount: 5, imageUrl: "/images/cloth3.png" },
    { id: "4", name: "CLOTHS", itemsCount: 5, imageUrl: "/images/cloth4.png" },
    { id: "5", name: "CLOTHS", itemsCount: 5, imageUrl: "/images/cloth5.png" },
  ];

  return (
    <div>
      <Header />
      <Navbar />

      {/* Top Header */}
      <div className="w-full h-auto bg-[#FAFAFA] mb-9 px-4 sm:px-8">
        <header className="py-4">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <h3 className="text-[20px] sm:text-[24px] font-[700]">Shop</h3>
            <nav className="flex items-center text-sm">
              <a href="/" className="text-black">Home</a>
              <MdOutlineArrowForwardIos className="mx-2 text-[#BDBDBD]" />
              <a href="/shop" className="text-[#BDBDBD]">Shop</a>
            </nav>
          </div>
        </header>

        {/* Categories Section */}
        <section className="py-6 bg-[#FAFAFA]">
          <div className="container mx-auto flex space-x-4 overflow-x-auto px-2 sm:px-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="min-w-[150px] sm:min-w-[200px] relative group flex-shrink-0"
              >
                <Image
                  src={category.imageUrl}
                  alt={`Category ${category.id}`}
                  width={200}
                  height={223}
                  className="w-full h-auto rounded"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h5 className="text-[14px] sm:text-[16px] font-[700]">
                    {category.name}
                  </h5>
                  <p>{category.itemsCount} Items</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Filter Section */}
      <div className="container w-full mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 py-6 text-[#737373] px-4 sm:px-8">
        <p>Showing all 12 results</p>
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2">
            <h6 className="text-sm font-bold">Views:</h6>
            <Image src="/images/icon1.png" alt="icon1" width={40} height={40} />
            <Image src="/images/icon2.png" alt="icon2" width={40} height={40} />
          </div>
          <select className="border p-2 rounded text-sm">
            <option>Popularity</option>
            <option>Price</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm">
            Filter
          </button>
        </div>
      </div>

      {/* Logos Section */}
      <div className="w-full bg-[#F7F7F7] flex items-center py-6 px-4 sm:px-8">
        <div className="container mx-auto flex flex-wrap justify-center sm:justify-between items-center gap-4">
          {["logo1", "logo2", "logo3", "logo4", "logo5", "logo6"].map(
            (logo, index) => (
              <Image
                key={index}
                src={`/images/${logo}.png`}
                alt={`Logo ${index + 1}`}
                width={120}
                height={34}
              />
            )
          )}
        </div>
      </div>
      <Footer />
      <Products />
      <div className="flex justify-center items-center border border-gray-300 w-full max-w-sm mx-auto mt-6 px-4 py-2">
        <button className="px-4 py-2 bg-gray-200 border-r border-gray-300">
          First
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white border-r border-gray-300">
          1
        </button>
        <button className="px-4 py-2 bg-white border-r border-gray-300">2</button>
        <button className="px-4 py-2 bg-white border-r border-gray-300">3</button>
        <button className="px-4 py-2 bg-gray-200">Next</button>
      </div>

      <Product/>
    </div>
  );
}
