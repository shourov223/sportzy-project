"use client";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { jost } from "./Banner";
import beauty from "@/assets/beauty.png";
import fragrances from "@/assets/fragrances.png";
import furniture from "@/assets/furniture.png";
import groceries from "@/assets/groceries.png";
import Image from "next/image";
import Link from "next/link";

const CATEGORY_ASSETS = {
  beauty: { img: beauty, color: "#FFE8EC" },
  fragrances: { img: fragrances, color: "#EAE8FF" },
  furniture: { img: furniture, color: "#E8F4FF" },
  groceries: { img: groceries, color: "#E8FFE8" },
};

const ProductCategories = () => {
  const { product } = useContext(ProductContext);

  const categories = [...new Set(product.map((item) => item.category))];

  return (
    <section id="category_sec" className="py-10 px-4">
      <div className="container mx-auto">
        <h2
          className={`text-black font-bold text-2xl sm:text-3xl lg:text-[36px] pb-6 border-b border-b-[#f3f3f3] ${jost.className}`}
        >
          All Categories
        </h2>
        <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((category) => {
            const asset = CATEGORY_ASSETS[category.toLowerCase()];
            if (!asset) return null;
            return (
              <CategoryCard
                key={category}
                image={asset.img}
                bgColor={asset.color}
                category={category}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ image, category, bgColor }) => {
  return (
    <Link
      href={`/categoryProduct/${category}`}
      style={{ backgroundColor: bgColor }}
      className="group w-full aspect-square max-w-[220px] mx-auto border border-black/10 rounded-xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] group-hover:scale-110 transition-transform duration-300">
        <Image
          fill
          src={image}
          alt={category}
          className="object-contain"
          sizes="(max-width: 640px) 60px, (max-width: 1024px) 80px, 100px"
        />
      </div>
      <p
        className={`text-black font-semibold text-sm sm:text-base lg:text-lg text-center capitalize leading-tight ${jost.className}`}
      >
        {category}
      </p>
    </Link>
  );
};

export default ProductCategories;
