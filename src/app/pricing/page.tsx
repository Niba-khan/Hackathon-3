'use client'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { RiArrowRightWideLine } from "react-icons/ri";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from "next/image";
import Footer from "../components/footer";
import Navbars from "../components/navbars";

export default function Pricing() {
  return (
    <div>
      <Navbars/>
      <div className="bg-[#FAFAFA]  text-center mb-20 py-[50px] gap-[16px] px-4 sm:px-10 lg:px-36">
        <h5 className="text-[16px] text-[#737373] font-[700] pb-8">PRICING</h5>
        <h1 className="text-[#252B42] text-[32px] sm:text-[40px] lg:text-[58px] font-[700]">Simple Pricing</h1>
        <nav className="flex justify-center">
          <a href="/" className="text-[#252B42] text-[14px] font-[700]">Home</a>
          <MdOutlineArrowForwardIos className="mx-2 text-[#BDBDBD]" />
          <a href="/shop" className="text-[#BDBDBD] text-[14px] font-[#BDBDBD]">Pricing</a>
        </nav>

        <div className="w-full h-auto flex flex-wrap justify-center mt-12 gap-8">
         
          <div className="w-full sm:w-[327px] lg:w-[327px] bg-[#FFFFFF] rounded-lg shadow-lg px-[20px] sm:px-[40px] py-[30px] sm:py-[50px] gap-[35px]">
            <h3 className="text-[20px] sm:text-[24px] font-[700] text-center text-[#252B42] mb-4">FREE</h3>
            <h5 className="text-center text-[#737373] text-[14px] sm:text-[16px] font-[700] mb-4">Organize across all apps by hand</h5>
            <div className="flex items-center justify-center mt-4">
              <h2 className="text-[32px] sm:text-[40px] text-center text-[#23A6F0] font-[700] mb-4">0</h2>
              <Image src="/images/div.png" alt="dollar" width={56} height={42} />
            </div>
            <ul className="mt-6 space-y-3 text-[#252B42] text-[14px] sm:text-[16px] font-[700]">
              <li className="flex items-center ">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product update</h6>
              </li>
              <li className="flex items-center">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product updates</h6>
              </li>
              <li className="flex items-center ">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product updates</h6>
              </li>
              <li className="flex items-center ">
                <FaCheckCircle color="#BDBDBD" size={24} />
                <h6 className="ml-2">1GB Cloud storage</h6>
              </li>
              <li className="flex items-center">
                <FaCheckCircle color="#BDBDBD" size={24} />
                <h6 className="mr-6">Email and community support</h6>
              </li>
            </ul>
            <div className="flex justify-center mt-8">
              <button className="w-[200px] sm:w-[246px] h-[40px] sm:h-[52px] bg-[#252B42] text-white px-[20px] sm:px-[40px] py-[12px] sm:py-[15px] text-[14px] font-[700]">Try for free</button>
            </div>
          </div>

          <div className="w-full sm:w-[329px] lg:w-[329px] h-auto bg-[#252B42] text-white rounded-lg shadow-lg p-6">
            <h3 className="text-[20px] sm:text-[24px] font-[700] text-center mb-4 sm:mb-8">STANDARD</h3>
            <h5 className="text-center text-[14px] sm:text-[16px] font-[700] mb-8">Organize across all apps by hand</h5>
            <div className="flex items-center justify-center mt-8">
              <h2 className="text-[32px] sm:text-[40px] text-center text-[#23A6F0] font-[700] mb-4">9.99</h2>
              <Image src="/images/div.png" alt="dollar" width={56} height={42} />
            </div>
            <ul className="mt-6 space-y-3 text-[#FFFFFF] text-[14px] sm:text-[16px] font-[700]">
              <li className="flex items-center ">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product update</h6>
              </li>
              <li className="flex items-center">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product updates</h6>
              </li>
              <li className="flex items-center ">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product updates</h6>
              </li>
              <li className="flex items-center ">
                <FaCheckCircle color="#BDBDBD" size={24} />
                <h6 className="ml-2">1GB Cloud storage</h6>
              </li>
              <li className="flex items-center">
                <FaCheckCircle color="#BDBDBD" size={24} />
                <h6 className="mr-6">Email and community support</h6>
              </li>
            </ul>
            <div className="flex justify-center mt-8">
              <button className="w-[200px] sm:w-[246px] h-[40px] sm:h-[52px] bg-[#23A6F0] text-white px-[20px] sm:px-[40px] py-[12px] sm:py-[15px] text-[14px] font-[700]">Try for free</button>
            </div>
          </div>

          <div className="w-full sm:w-[327px] lg:w-[327px] bg-[#FFFFFF] text-[#FFFFFF] rounded-lg shadow-lg p-6">
            <h3 className="text-[20px] sm:text-[24px] font-[700] text-center text-[#252B42] mb-4 sm:mb-8">PREMIUM</h3>
            <h5 className="text-center text-[#737373] text-[14px] sm:text-[16px] font-[700] mb-8">Organize across all apps by hand</h5>
            <div className="flex items-center justify-center mt-4">
              <h2 className="text-[32px] sm:text-[40px] text-center text-[#23A6F0] font-[700] mb-8">19.99</h2>
              <Image src="/images/div.png" alt="dollar" width={56} height={42} />
            </div>
            <ul className="mt-6 space-y-3 text-[#252B42] text-[14px] sm:text-[16px] font-[700]">
              <li className="flex items-center ">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product update</h6>
              </li>
              <li className="flex items-center">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product updates</h6>
              </li>
              <li className="flex items-center ">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product updates</h6>
              </li>
              <li className="flex items-center ">
                <FaCheckCircle color="#BDBDBD" size={24} />
                <h6 className="ml-2">1GB Cloud storage</h6>
              </li>
              <li className="flex items-center">
                <FaCheckCircle color="#BDBDBD" size={24} />
                <h6 className="mr-6">Email and community support</h6>
              </li>
            </ul>
            <div className="flex justify-center mt-8">
              <button className="w-[200px] sm:w-[246px] h-[40px] sm:h-[52px] bg-[#23A6F0] text-white px-[20px] sm:px-[40px] py-[12px] sm:py-[15px] text-[14px] font-[700]">Try for free</button>
            </div>
          </div>
        </div>
        </div>

        <div className="bg-[#FFFFFF] h-[1037px] gap-[50px]">
  <div className="flex flex-col items-center justify-center py-[80px] gap-[20px] mb-16">
    <h2 className="text-[40px] font-[700]">Pricing FAQs</h2>
    <h4 className="text-[20px] font-[400] text-center">
      Problems trying to resolve the conflict between <br /> the two major realms of Classical physics
    </h4>
    <div className="flex flex-col gap-[30px] px-16 py-10">
      <div className="flex justify-between items-start gap-4">
        
        <div className="flex items-start gap-4">
          <RiArrowRightWideLine  className="text-[#23A6F0] w-8" />
          <div className="flex flex-col">
            <h5 className="text-[#252B42] text-[16px] font-[700]">The quick fox jumps over the lazy dog</h5>
            <p className="text-[#737373] text-[14px] font-[400] w-[408px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT
              Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <RiArrowRightWideLine   className="text-[#23A6F0] w-8" />
          <div className="flex flex-col">
            <h5 className="text-[#252B42] text-[16px] font-[700]">The quick fox jumps over the lazy dog</h5>
            <p className="text-[#737373] text-[14px] font-[400] w-[408px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT
              Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start gap-4">
        <div className="flex items-start gap-4">
          <RiArrowRightWideLine  className="text-[#23A6F0] w-8" />
          <div className="flex flex-col">
            <h5 className="text-[#252B42] text-[16px] font-[700]">The quick fox jumps over the lazy dog</h5>
            <p className="text-[#737373] text-[14px] font-[400] w-[408px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT
              Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <RiArrowRightWideLine  className="text-[#23A6F0] w-8" />
          <div className="flex flex-col">
            <h5 className="text-[#252B42] text-[16px] font-[700]">The quick fox jumps over the lazy dog</h5>
            <p className="text-[#737373] text-[14px] font-[400] w-[408px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT
              Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start gap-4">
        <div className="flex items-start gap-4">
          <RiArrowRightWideLine  className="text-[#23A6F0] w-8" />
          <div className="flex flex-col">
            <h5 className="text-[#252B42] text-[16px] font-[700]">The quick fox jumps over the lazy dog</h5>
            <p className="text-[#737373] text-[14px] font-[400] w-[408px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT
              Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <RiArrowRightWideLine  className="text-[#23A6F0] w-8" />
          <div className="flex flex-col">
            <h5 className="text-[#252B42] text-[16px] font-[700]">The quick fox jumps over the lazy dog</h5>
            <p className="text-[#737373] text-[14px] font-[400] w-[408px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT
              Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
        </div>
      </div>
      {/*trial*/}
    <div className="w-full flex flex-col items-center py-16 bg-white">
      <h2 className="text-[40px] md:text-[40px] font-[700] text-[#252B42] text-center mb-4">
        Start your 14 days free trial
      </h2>
      <p className="text-center text-[#252B42] text-[14px] md:text-base mb-6 max-w-md">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
      </p>
      <button className="bg-[#23A6F0] text-white py-3 px-8 rounded-md hover:bg-[#1e91d6] mb-8">
        Try it free now
      </button>
      <div className="flex gap-4 text-black">
        <a href="#" aria-label="Twitter">
          <FaTwitter size={24} />
        </a>
        <a href="#" aria-label="Facebook" >
          <FaFacebookF size={24} />
        </a>
        <a href="#" aria-label="Instagram" >
          <FaInstagram size={24} />
        </a>
        <a href="#" aria-label="LinkedIn">
          <FaLinkedinIn size={24} />
        </a>
      </div>
    </div>

    </div>
  </div>



      </div>
      <Footer />
    </div>
  );
}
