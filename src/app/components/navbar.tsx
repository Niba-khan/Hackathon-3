'use client'
import { useState } from "react";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { MdPersonOutline } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"; 

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="container w-full max-w-[1437px] h-[58px] top-[70px] p-4 flex justify-between items-center mb-10">

      <h3 className="font-[700] text-[24px] pl-6">Bandage</h3>

      <div className="lg:hidden flex items-center">
        <GiHamburgerMenu
          className="text-[24px] cursor-pointer"
          onClick={() => setIsMobileMenuOpen(true)}
        />
      </div>

      <div className="hidden lg:flex justify-center items-center pr-[10rem] p-4 text-[#737373] text-[14px] font-[700] gap-[16px] top-[16px]">
        <Link href="/" className="text-[#737373]">Home</Link>
        <div className="flex items-center gap-1">
          <Link href="/productlist" className="hover:text-blue-700 text-[#252B42] font-[500]">Shop</Link>
          <RiArrowDownSLine className="text-black" />
        </div>
        <Link href="/about" className="hover:text-blue-700">About</Link>
        <Link href="/blog" className="hover:text-blue-700">Blog</Link>
        <Link href="/contact" className="hover:text-blue-700">Contact</Link>
        <Link href="/productlist" className="hover:text-blue-700">Pages</Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-black/70 z-50 p-4">
   
          <div className="flex justify-end">
            <IoClose
              className="text-white text-[30px] cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        
          <div className="flex flex-col items-start gap-[16px] text-white mt-4">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <div className="flex items-center gap-1">
              <Link href="/shop" className="hover:text-blue-500">Shop</Link>
              <RiArrowDownSLine />
            </div>
            <Link href="/about" className="hover:text-blue-500">About</Link>
            <Link href="/productlist" className="hover:text-blue-500">Blog</Link>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
            <Link href="/productlist" className="hover:text-blue-500">Pages</Link>
          </div>
        </div>
      )}

      <div className="hidden lg:flex items-end justify-end gap-[15px] text-[#23A6F0]">
        <MdPersonOutline className="ml-7 text-[24px]" />
        <Link href="/login" className="text-[14px] font-[700] text-center">Login / Register</Link>
        <FaSearch className="ml-4 text-[24px]" />
        <div className="flex items-center gap-4">
          <CgShoppingCart className="mr-1 text-[24px]" />
          <span>1</span>
          <CiHeart className="mr-1 text-[24px]" />
          <span>1</span>
        </div>
      </div>
    </div>
  );
}
