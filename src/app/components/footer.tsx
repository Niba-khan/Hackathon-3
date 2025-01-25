'use client'
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container px-4 sm:px-6">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center pb-6 w-full bg-[#FAFAFA] mb-10 px-4 sm:px-[40px] py-4">
        <h3 className="text-[24px] font-bold text-[#252B42] mb-4 sm:mb-0">Bandage</h3>
        <div className="flex gap-6">
          <a href="#" className="text-[#23A6F0] text-[24px]">
            <FaInstagram />
          </a>
          <a href="#" className="text-[#23A6F0] text-[24px]">
            <FaYoutube />
          </a>
          <a href="#" className="text-[#23A6F0] text-[24px]">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 py-6 bg-[#FFFFFF]">
        {/* Company Info */}
        <div>
          <h5 className="font-[700] text-[16px] text-[#252B42] mb-4">Company Info</h5>
          <ul className="space-y-2 text-[#737373] text-[14px] font-[700]">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h5 className="font-bold text-[#252B42] mb-4">Legal</h5>
          <ul className="space-y-2 text-[#737373] text-[14px] font-[700]">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h5 className="font-bold text-[#252B42] mb-4">Features</h5>
          <ul className="space-y-2 text-[#737373] text-[14px] font-[700]">
            <li><a href="#">Business Marketing</a></li>
            <li><a href="#">User Analytic</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Unlimited Support</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="font-bold text-[#252B42] mb-4">Resources</h5>
          <ul className="space-y-2 text-[#737373] text-[14px] font-[700]">
            <li><a href="#">iOS & Android</a></li>
            <li><a href="#">Watch a Demo</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h5 className="font-bold text-[#252B42] mb-4">Get In Touch</h5>
          <form>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
            />
            <button
              type="submit"
              className="bg-[#23A6F0] text-white px-6 py-2 rounded w-full"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[#737373] text-[12px] mt-2">Lorem imp sum dolor Amit</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#FAFAFA] text-center py-4 text-[#737373] text-[14px]">
        Made With Love By Finland All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
