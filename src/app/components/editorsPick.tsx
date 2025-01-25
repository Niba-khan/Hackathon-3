import Image from "next/image";

export default function EditorsPick() {
  return (
    <div className="w-full flex justify-center py-[10px] bg-[#f5f5f5]">
      <div className="w-full max-w-[1050px] flex flex-col gap-[48px] px-[80px] md:px-[40px] p-[20px]">
    
        <div className="flex flex-col items-center gap-[10px]">
          <h3 className="font-[700] text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-center">
            EDITORS PICK
          </h3>
          <p className=" w-[347px] text-[14px] text-[#737373] text-center font-[400]">
            Problems trying to resolve the conflict between
          </p>
        </div>
        
        <div className="w-full flex flex-col md:flex-row gap-[20px] md:gap-[30px]">
        
          <div className="relative w-full md:w-[525px] h-[250px] md:h-[500px]">
            <Image
              src="/images/editorpick1.png"
              alt="men"
              width={509}
              height={500}
              className="w-full h-full object-cover"
            />
            <button className="absolute bg-[#FFFFFF] w-[170px] h-[48px] ml-7 top-[428px] bottom-[31px] text-[#252B42] text-[16px] font-[700] ">
              MEN
            </button>
          </div>
          
          <div className="relative w-full md:w-[250px] h-[300px] md:h-[500px]">
            <Image
              src="/images/editorpick2.png"
              alt="women"
              width={509}
              height={500}
              className="w-full h-full object-cover"
            />
            <button className="absolute bg-[#FFFFFF] w-[136px] h-[48px] ml-7 top-[428px] bottom-[31px] text-[#252B42] text-[16px] font-[700] ">
              WOMEN
            </button>
          </div>
         
          <div className="w-full md:w-[240px] flex flex-col gap-[20px] md:gap-[30px]">
           
            <div className="relative md:h-[242px]">
              <Image
                src="/images/editorpick3.png"
                alt="accessories"
                width={240}
                height={242}
                className="w-full h-full object-cover"
              />
              <button className="absolute bg-[#FFFFFF] w-[170px] h-[48px] ml-7 px-[26px] py-[12px] top-[171px]  text-[#252B42] text-[16px] font-[700] ">
                ACCESSORIES
              </button>
            </div>
            
            <div className="relative md:h-[242px]">
              <Image
                src="/images/editorpick4.png"
                alt="kids"
                width={240}
                height={242}
                className="w-full h-full object-cover rounded-md"
              />
              <button className="absolute bg-[#FFFFFF] w-[120px] h-[48px] ml-7 top-[176px] px-[40px] py-[12px] text-[#252B42] text-[16px] font-[700] ">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
