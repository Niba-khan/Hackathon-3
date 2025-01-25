import Image from "next/image";
import { FaDribbble, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Footer from "../components/footer";
import Navbars from "../components/navbars";


export default function About() {
  return (
    <div>
     <Navbars/>
      <div className="flex flex-col sm:flex-row items-center justify-between w-full h-auto py-[112px] gap-[40px] sm:gap-[80px] px-4">
        
        <div className="w-full sm:w-[50%] text-center sm:text-left pl-48">
          <h5 className="text-[16px] font-[700] text-[#252B42] mb-4">ABOUT COMPANY</h5>
          <h1 className="text-[32px] sm:text-[58px] font-[700] mb-4">ABOUT US</h1>
          <h4 className="text-[#737373] text-[16px] sm:text-[20px] font-[400] w-full sm:w-[376px] mb-8">
            We know how large objects will act, but things on a small scale.
          </h4>
          <button className="bg-[#23A6F0] text-white px-6 py-3 rounded w-[195px] h-[52px]">
            Get Quote Now
          </button>
        </div>
      
        {/* Image Section */}
        <div className="w-full sm:w-[50%] flex justify-center sm:justify-end pr-14">
        <Image
            src="/images/aboutImage.png"
           alt="About Picture"
           width={1000}
           height={800}
          className="rounded w-[50rem] h-[40rem]"
         />

        </div>
      </div>

      <div className="fw-[1440px] h-[236px] text-[#FFFFFF] px-4 sm:px-44 gap-[24px] flex flex-col">
        <p className="text-[14px] font-[400] text-[#E74040] mb-2">Problems trying</p>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4">
          <h3 className="flex text-[20px] sm:text-[24px] text-[#252B42] font-[700] w-full sm:w-[394px] mb-4 sm:mb-0">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
          <p className="text-[#737373] text-[14px] sm:text-[16px] font-[400] w-full sm:w-[545px] pt-8 sm:pt-0">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-[40px] sm:gap-[64px] lg:gap-[200px] mt-10 mb-6">
        <div className="items-center text-center">
          <h1 className="text-[#000000] text-[40px] sm:text-[32px] lg:text-[40px] font-[700]">15K</h1>
          <h5 className="text-[#000000] text-[14px] sm:text-[16px] lg:text-[16px]">Happy Customers</h5>
        </div>

        <div className="items-center text-center">
          <h1 className="text-[#000000] text-[40px] sm:text-[32px] lg:text-[40px] font-[700]">150K</h1>
          <h5 className="text-[#000000] text-[14px] sm:text-[16px] lg:text-[16px]">Monthly Visitors</h5>
        </div>

        <div className="items-center text-center">
          <h1 className="text-[#000000] text-[40px] sm:text-[32px] lg:text-[40px] font-[700]">15</h1>
          <h5 className="text-[#000000] text-[14px] sm:text-[16px] lg:text-[16px]">Countries Worldwide</h5>
        </div>

        <div className="items-center text-center">
          <h3 className="text-[#000000] text-[40px] sm:text-[32px] lg:text-[40px] font-[700]">100+</h3>
          <p className="text-[#000000] text-[14px] sm:text-[16px] lg:text-[16px]">Top Partners</p>
        </div>
      </div>

      <div className="flex justify-center items-center py-16">
        <div className="relative">
          <Image
            src="/images/aboutcard.png"
            alt="Mountain"
            width={984}
            height={540}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="px-[16px] sm:px-[64px] py-[64px] sm:py-[112px]">
        <div className="text-center mb-24">
          <h2 className="text-[32px] sm:text-[44px] text-[#000000] font-[700] mb-4">Meet Our Team</h2>
          <p className="text-[#000000] text-[14px] sm:text-[16px] font-[400] text-center">Problems trying to resolve the conflict between 
            <br />the two major realms of Classical physics: Newtonian mechanics .</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="w-[316px] text-center flex flex-col items-center justify-center">
            <Image
              src="/images/team2.png"
              alt="Team1"
              height={316}
              width={231}
              className="object-cover mb-4"
            />
            <h3 className="text-[18px] sm:text-[20px] text-[#000000] font-[600]">Username</h3>
            <h6 className="text-[14px] sm:text-[18px] text-[#737373] font-[400]">Profession</h6>
            <div className="flex gap-[20px] mt-4 justify-center">
              <FaLinkedin size={24} color="#23A6F0" />
              <FaTwitter size={24} color="#23A6F0" />
              <FaDribbble size={24} color="#23A6F0" />
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="w-[316px] text-center flex flex-col items-center justify-center">
            <Image
              src="/images/team2.png"
              alt="Team2"
              height={316}
              width={231}
              className="object-cover mb-4"
            />
            <h3 className="text-[18px] sm:text-[20px] text-[#000000] font-[600]">Username</h3>
            <h6 className="text-[14px] sm:text-[18px] text-[#737373] font-[400]">Profession</h6>
            <div className="flex gap-[20px] mt-4 justify-center">
              <FaLinkedin size={24} color="#23A6F0" />
              <FaTwitter size={24} color="#23A6F0" />
              <FaDribbble size={24} color="#23A6F0" />
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="w-[316px] text-center flex flex-col items-center justify-center">
            <Image
              src="/images/team3.png"
              alt="Team3"
              height={316}
              width={231}
              className="object-cover mb-4"
            />
            <h3 className="text-[18px] sm:text-[20px] text-[#000000] font-[600]">Username</h3>
            <h6 className="text-[14px] sm:text-[18px] text-[#737373] font-[400]">Profession</h6>
            <div className="flex gap-[20px] mt-4 justify-center">
              <FaLinkedin size={24} color="#23A6F0" />
              <FaTwitter size={24} color="#23A6F0" />
              <FaDribbble size={24} color="#23A6F0" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen md:w-[1440px] h-[479px] bg-[#FAFAFA] flex flex-col items-center justify-center sm:justify-start p-16">
        <h2 className="text-[40px] text-[#252B42] text-center font-[700] ">
          Big Companies Are Here
        </h2>
        <p className="mt-8 text-center text-[#737373] text-[14px] mb-20">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="flex flex-wrap justify-center items-center px-[64px] gap-[50px]">
          <Image
            src="/images/logo1.png"
            alt="Company Logo 1"
            width={124}
            height={39}
          />
          <Image
            src="/images/logo2.png"
            alt="Company Logo 2"
            width={124}
            height={39}
          />
          <Image
            src="/images/logo3.png"
            alt="Company Logo 3"
            width={124}
            height={39}
          />
          <Image
            src="/images/logo4.png"
            alt="Company Logo 4"
            width={124}
            height={39}
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
