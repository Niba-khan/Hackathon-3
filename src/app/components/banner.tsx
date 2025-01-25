"use client";
import Image from "next/image";

export default function SpeakerBanner() {
  return (
    <div className="overflow-x-hidden w-screen flex justify-center items-center mb-10">
      <div className="w-full md:w-[92%] md:h-[500px] bg-[#23856D] flex justify-center items-center flex-wrap md:flex-nowrap">
       
        <div className="mt-10 flex flex-col justify-center items-start px-[16px] md:px-[112px] text-[#FFFFFF] gap-[20px] md:gap-[30px]">
          <h4 className="text-[16px] md:text-[20px] font-[400]">SUMMER 2020</h4>
          <h1 className="mt-10 w-full md:w-[443px] text-[32px] md:text-[58px] font-[700]">
            Vita Classic Product
          </h1>
          <p className="text-[12px] md:text-[14px] font-[400] w-full md:w-[341px]">
            We know how large objects will act, We know how are objects will act, We know
          </p>
          <div className="flex items-center gap-[16px] md:gap-[20px] ">
            <h3 className="text-[20px] md:text-[24px] font-[600]">$16.48</h3>
            <button className="w-[150px] md:w-[171px] h-[48px] md:h-[56px] bg-[#00FF66] text-white rounded-md">
              Buy Now!
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0 w-full md:w-[600px] h-[300px] md:h-[420px] relative">
          <Image
            src="/images/banner.png"
            alt="banner"
            width={443}
            height={685}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
