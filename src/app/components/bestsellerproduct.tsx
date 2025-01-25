import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: "/images/sller1.png", 
  },
  {
    id: 2,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: "/images/seller2.png", 
  },
  {
    id: 3,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: "/images/seller3.png",
  },
  {
    id: 4,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: "/images/seller4.png",
  },
  {
    id: 5,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: "/images/seller5.png", 
  },
  {
    id: 6,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: "/images/seller6.png",
  },
  {
    id: 7,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: "/images/sller1.png", 
  },
  {
    id: 8,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: "/images/seller2.png", 
  },
];

export default function BestsellerSection() {
  return (
    <div className="flex justify-center items-center h-[1086px] w-[1440px] mx-auto p-4 mb-20">
      <div className="max-w-full h-auto">
        <h3 className="text-center text-[24px] font-[700] text-[#252B42] mb-4">
          BESTSELLER PRODUCTS
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px]">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={239}
                  height={427}
                />
              </div>

              <h5 className="text-[16px] font-[700] item-center mt-4">{product.title}</h5>
              <p className="text-[14px] font-[700] text-[#737373]">{product.department}</p>

              <div className="flex items-center gap-2 mt-2">
                <h5 className="text-[#BDBDBD] line-through">
                  {product.originalPrice}
                </h5>
                <h5 className="text-[#23856D] font-bold">
                  {product.discountedPrice}
                </h5>
              </div>
            </div>
           
          ))}
        </div>
      </div>
    
    </div>
  );
}
