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
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { toast } from "sonner";

const ViewProduct = () => {
  const { id } = useParams();
  const { product } = useContext(ProductContext);
  const singleProduct = product.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(singleProduct));
  };

  return (
    <section>
      <Topbar href={"/details"} pageName={"Product Details"} />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-8 lg:py-12">
          <div className="w-full rounded-2xl overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="h-full"
            >
              {singleProduct?.images.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={item}
                    alt="product image"
                    width={878}
                    height={769}
                    className="bg-[#f2f2f2] w-full h-[300px] sm:h-[420px] lg:h-[600px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex flex-col">
            <h2
              className={`uppercase text-red-500 font-semibold text-sm sm:text-base leading-6 pb-3 ${montserrat.className}`}
            >
              {singleProduct?.category}
            </h2>

            <h1
              className={`text-black font-bold text-3xl sm:text-4xl lg:text-[56px] leading-tight lg:leading-[62px] pb-4 lg:pb-5 ${jost.className}`}
            >
              {singleProduct?.title}
            </h1>

            <p
              className={`text-red-500 text-2xl sm:text-3xl lg:text-[36px] leading-tight font-bold pb-8 lg:pb-12 ${jost.className}`}
            >
              ${singleProduct?.price}
            </p>

            <p
              className={`text-base sm:text-lg lg:text-[20px] leading-relaxed text-black pb-8 lg:pb-12 ${montserrat.className}`}
            >
              {singleProduct?.description}
            </p>

            <div className="flex items-center gap-5 sm:gap-8 mb-4">
              <p className="text-black font-bold text-xl sm:text-2xl leading-8">
                QTY
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setQty(qty + 1)}
                  className="bg-red-500 size-8 sm:size-[30px] rounded-full grid place-items-center cursor-pointer"
                >
                  <FaPlus className="text-white font-bold text-xs" />
                </button>
                <input
                  type="text"
                  readOnly
                  value={qty}
                  className="p-2 pl-4 border border-black focus:outline-0 text-black w-12 sm:w-[50px] rounded-md text-center"
                />
                <button
                  onClick={() => setQty(qty - 1)}
                  className={`bg-red-500 size-8 sm:size-[30px] rounded-full grid place-items-center cursor-pointer ${qty === 0 ? "pointer-events-none opacity-50" : "pointer-events-auto"}`}
                >
                  <FaMinus className="text-white font-bold text-xs" />
                </button>
              </div>
            </div>

            <p
              className={`text-base sm:text-lg font-bold ${singleProduct?.availabilityStatus === "In Stock" ? "text-green-500" : "text-yellow-500"}`}
            >
              {singleProduct?.availabilityStatus}
            </p>

            <div className="grid grid-cols-[1fr_56px] sm:grid-cols-[1fr_64px] gap-3 sm:gap-4 items-center pt-6 sm:pt-8">
              <button
                onClick={handleAddToCart}
                className="uppercase bg-black text-white py-4 sm:py-[17px] cursor-pointer text-sm sm:text-base font-semibold tracking-widest hover:bg-red-500 transition-colors duration-200"
              >
                Add to Cart
              </button>
              <button className="py-4 sm:py-[17px] bg-[#f2f2f2] h-14 sm:h-[64px] grid place-items-center cursor-pointer hover:bg-red-100 transition-colors duration-200">
                <FaRegHeart className="text-black size-5 sm:size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewProduct;
