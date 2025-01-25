'use client'
import { MdCall } from "react-icons/md";
import { FaRegEnvelope, FaInstagram, FaYoutube, FaTwitter, FaFacebookF } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="flex justify-center items-center flex-col w-screen">
      <div className="w-full h-[48px] bg-[#252B42] px-[24px] flex items-center justify-between text-[#FFFFFF] text-center">
        <div className="flex items-center text-[14px] gap-[5px] font-[700] p-[5px]">

        <MdCall />
          <h6 className="">(225) 555-0118</h6>
          
          <FaRegEnvelope className="ml-4" />
          <h6>michelle.rivera@example.com</h6>

          <div className="hidden lg:flex text-center ml-[20rem]">
            <h6>Follow Us and get a chance to win 80% off</h6>
          </div>

          <div className="hidden md:flex items-center gap-[10px] ml-32">
            <h6 className="mr-4">Follow Us:</h6>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
          </div>

        </div>
      </div>

      <div className="lg:hidden w-full h-[48px] bg-[#252B42] px-[24px] flex items-center justify-between text-[#FFFFFF] text-center">
        <div className="flex flex-col items-center text-[12px] gap-[5px] font-[700] p-[5px]">
          <MdCall />
          <h6 className="">(225) 555-0118</h6>

          <FaRegEnvelope className="ml-4" />
          <h6>michelle.rivera@example.com</h6>
          <h6>Follow Us and get a chance to win 80% off</h6>

          <div className="flex items-center gap-[10px]">
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
