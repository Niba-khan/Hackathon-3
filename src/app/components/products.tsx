import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40] ", "bg-[#252B42]"],
    image: "/images/editorpick1.png", 
  },
  {
    id: 2,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40] ", "bg-[#252B42]"],
    image: "/images/editorpick2.png", 
  },
  {
    id: 3,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40] ", "bg-[#252B42]"],
    image: "/images/product9.png",
  },
  {
    id: 4,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40] ", "bg-[#252B42]"],
    image: "/images/editorPick4.png", 
  },
  {
    id: 5,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40] ", "bg-[#252B42]"],
    image: "/images/product10.png", 
  },
  {
    id: 6,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40] ", "bg-[#252B42]"],
    image: "/images/product11.png", 
  },
  {
    id: 7,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40] ", "bg-[#252B42]"],
    image: "/images/product12.png", 
  },
  {
    id: 8,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40] ", "bg-[#252B42]"],
    image: "/images/product3.png", 
  },
  {
    id: 5,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40] ", "bg-[#252B42]"],
    image: "/images/product13.png", 
  },
  {
    id: 6,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40] ", "bg-[#252B42]"],
    image: "/images/product16.png",
  },
  {
    id: 7,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40] ", "bg-[#252B42]"],
    image: "/images/product14.png", 
  },
  {
    id: 8,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40] ", "bg-[#252B42]"],
    image: "/images/product15.png", 
  },
];

export default function Products() {
  return (
    <div className="max-w-[1124px] mx-auto h-auto p-4 mb-20">
 
      <h4 className="text-center text-[20px] font-[400] text-[#737373] mb-2">
        Featured Products
      </h4>
      <h3 className="text-center text-[24px] font-[700] text-[#252B42] mb-4">
        BESTSELLER PRODUCTS
      </h3>
      <p className="text-center text-[14px] font-[400] text-[#737373] mb-8">
        Problems trying to resolve the conflict between
      </p>

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
                className="w-full h-auto"
              />
            </div>

            <h5 className="text-[16px] font-[700] mt-4">{product.title}</h5>
            <p className="text-[14px] font-[700] text-[#737373]">{product.department}</p>

            <div className="flex items-center gap-2 mt-2">
              <h5 className="text-[#BDBDBD] line-through">
                {product.originalPrice}
              </h5>
              <h5 className="text-[#23856D] font-bold">
                {product.discountedPrice}
              </h5>
            </div>

        
            <div className="flex justify-center gap-2 mt-2">
              {product.colors.map((color, idx) => (
                <span
                  key={idx}
                  className={`w-4 h-4 rounded-full ${color}`}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}