"use client";
import { useContext, useState } from "react";
import Topbar from "../../components/products/Topbar";
import { ProductContext } from "../../context/ProductContext";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { montserrat } from "@/components/navbar";
import { jost } from "@/components/Home/Banner";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";

const ViewProduct = () => {
  const { id } = useParams();
  const { product } = useContext(ProductContext);
  const singleProduct = product.find((p) => p.id === Number(id));
  // console.log(singleProduct);

  const [qty, setQty] = useState(0);
  const increment = () => {
    setQty(qty + 1);
  };
  const dicrement = () => {
    setQty(qty - 1);
  };
  return (
    <section>
      <Topbar href={"/details"} pageName={"Product Details"} />
      <div className="container">
        <div className="grid grid-cols-2 gap-[64px] py-[48px]">
          <div className="w-full rounded-2xl overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="h-full"
            >
              {singleProduct?.images.map((item, index) => {
                return (
                  <SwiperSlide>
                    <Image
                      src={item}
                      key={index}
                      alt="image"
                      width={878}
                      height={769}
                      className="bg-[#f2f2f2] w-full h-[600px] object-cover"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div>
            <h2
              className={`uppercase text-red-500 font-semibold text-base leading-[24px] pb-3 ${montserrat.className}`}
            >
              {singleProduct?.category}
            </h2>
            <h1
              className={`text-black font-bold text-[56px] leading-[62px] pb-[20px] ${jost.className}`}
            >
              {singleProduct?.title}
            </h1>
            <p
              className={`text-red-500 text-[36px] leading-[44px] font-bold pb-[48px] ${jost.className}`}
            >
              ${singleProduct?.price}
            </p>
            <p
              className={`text-[20px] leading-[30px] text-black pb-[48px] ${montserrat.className}`}
            >
              {singleProduct?.description}
            </p>
            <div className="flex items-center gap-[30px]">
              <p className={`text-black font-bold text-[24px] leading-[32px]`}>
                QTY
              </p>
              <div className="flex items-center gap-[10px]">
                <button
                  onClick={increment}
                  className="bg-red-500 size-[30px] rounded-full grid place-items-center cursor-pointer"
                >
                  <FaPlus className="text-white font-bold" />
                </button>
                <input
                  type="text"
                  readOnly
                  className="p-[10px] pl-[18px] border border-black focus:outline-0 text-black w-[50px] rounded-md"
                  value={qty}
                />
                <button
                  onClick={dicrement}
                  className={`bg-red-500 size-[30px] rounded-full grid place-items-center cursor-pointer ${qty === 0 ? "pointer-events-none" : "pointer-events-auto"}`}
                >
                  <FaMinus className="text-white font-bold" />
                </button>
              </div>
            </div>
            <p
              className={`text-[20px] font-bold ${singleProduct?.availabilityStatus === "In Stock" ? "text-green-500" : "text-yellow-500"}`}
            >
              {singleProduct?.availabilityStatus}
            </p>
            <div className="grid grid-cols-[1fr_64px] gap-4 items-center pt-[32px]">
              <button className={`uppercase bg-black py-[17px] cursor-pointer`}>
                Add to Cart
              </button>
              <button className="py-[17px] bg-[#f2f2f2] h-[64px] grid place-items-center cursor-pointer">
                <FaRegHeart className="text-black size-[24px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewProduct;
