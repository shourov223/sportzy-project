"use client";

import { ProductContext } from "@/context/ProductContext";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";

const detailsNav = [
  "description",
  "warrantyInformation",
  "shippingInformation",
];

const ProductOthersInfo = () => {
  const { product } = useContext(ProductContext);
  const [indexNum, setIndexNum] = useState(0);
  const { id } = useParams();
  const singleProduct = product.find((item) => item.id === Number(id));

  if (!singleProduct) {
    return <h1>Loading Product.........</h1>;
  }

  const content = [
    singleProduct.description,
    singleProduct.warrantyInformation,
    singleProduct.shippingInformation,
  ];

  return (
    <section className="bg-[#F2F2F2] py-8 sm:py-10 lg:py-[54px] px-4 sm:px-8 lg:px-[64px] mb-5">
      <div className="container">
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 lg:gap-40 pb-6 border-b border-gray-300">
          {detailsNav.map((item, index) => (
            <span
              key={index}
              onClick={() => setIndexNum(index)}
              className={`text-black uppercase cursor-pointer font-bold text-sm sm:text-base lg:text-[20px] pb-1 border-b-4 transition-colors duration-200 ${
                index === indexNum
                  ? "border-b-red-500 text-red-500"
                  : "border-b-transparent hover:border-b-gray-300"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <p className="text-black text-sm sm:text-base lg:text-[18px] leading-relaxed pt-6">
          {content[indexNum]}
        </p>
      </div>
    </section>
  );
};

export default ProductOthersInfo;
