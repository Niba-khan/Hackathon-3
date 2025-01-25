'use client'
import Image from "next/image"
import Navbar2 from "../components/navbars"
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div>
      <Navbar2 />
      <div className="flex flex-col lg:flex-row items-center justify-between w-[1050] h-auto py-[112px] gap-[80px] px-4">
        
        <div className="lg:w-[985] w-full pl-0 lg:pl-40">
          <h5 className="text-[16px] font-[700] text-[#252B42] mb-4">CONTACT US</h5>
          <h1 className="text-[32px] lg:text-[58px] font-[700] mb-4">Get in touch today!</h1>
          <h4 className="text-[#737373] text-[16px] lg:text-[20px] font-[400] w-full lg:w-[376px] mb-8">
            We know how large objects will act, but things on a small scale
          </h4>
          <h3 className="text-[#252B42] text-[20px] lg:text-[24px] font-[700]">Phone ; +451 215 215</h3>
          <h3 className="text-[#252B42] text-[20px] lg:text-[24px] font-[700]">Fax : +451 215 215</h3>
         
          <div className="flex gap-6 mt-8 text-black mb-40">
            <FaTwitter className="text-xl md:text-2xl cursor-pointer" />
            <FaFacebookF className="text-xl md:text-2xl cursor-pointer" />
            <FaInstagram className="text-xl md:text-2xl cursor-pointer" />
            <FaLinkedinIn className="text-xl md:text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[1440px] flex justify-center lg:justify-end pr-0 lg:pr-20 mb-8 lg:mb-0">
          <Image
            src="/images/contactImage.png"
            alt="Contact Image"
            width={1400}
            height={853}
            className="rounded object-cover max-w-[700px] max-h-[500px]"
          />
        </div>
      </div>
      
      <div className="bg-[#FFFFFF] w-full h-auto lg:h-screen flex flex-col items-center text-center py-8">
        <div className="flex flex-col items-center justify-center py-[80px] gap-[20px] mt-10">
          <h6 className="text-[14px] font-[700]">VISIT OUR OFFICE</h6>
          <h2 className="text-[32px] lg:text-[40px] font-[700]">
            We help small businesses <br />
            with big ideas
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 p-4">

          <div className="w-full sm:w-[327px] bg-[#FFFFFF]  p-6 gap-4 rounded-lg">
            <div className="flex flex-col items-center">
              <FaPhoneAlt className="text-[#23A6F0] text-3xl mb-4" />
              <h6 className="text-[24px] font-[700] text-center text-[#252B42] mb-4">georgia.young@ple.com</h6>
              <h5 className="text-center text-[#737373] text-[16px] font-[400] mb-4">Get Support</h5>
              <button className="bg-[#23A6F0] text-white text-[16px] font-[700] px-6 py-2 rounded-lg hover:bg-[#1E8ED0] transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          <div className="w-full sm:w-[327px] bg-[#252B42] p-6 gap-4 rounded-lg">
            <div className="flex flex-col items-center">
              <FaLocationDot className="text-[#23A6F0] text-3xl mb-4" />
              <h6 className="text-[24px] font-[700] text-center text-[#737373] text-mb-4">georgia.young@ple.com</h6>
              <h5 className="text-center text-[#737373] text-[16px] font-[400] mb-4">Get Support</h5>
              <button className="bg-[#23A6F0] text-white text-[16px] font-[700] px-6 py-2 rounded-lg hover:bg-[#1E8ED0] transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

 
          <div className="w-full sm:w-[327px] bg-[#FFFFFF] rounded-lg shadow-lg p-6 gap-4">
            <div className="flex flex-col items-center">
              <FaEnvelope className="text-[#23A6F0] text-3xl mb-4" />
              <h6 className="text-[24px] font-[700] text-center text-[#252B42] mb-4">georgia.young@ple.com</h6>
              <h5 className="text-center text-[#737373] text-[16px] font-[400] mb-4">Get Support</h5>
              <button className="bg-[#23A6F0] text-white text-[16px] font-[700] px-6 py-2 rounded-lg hover:bg-[#1E8ED0] transition-all duration-300">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
