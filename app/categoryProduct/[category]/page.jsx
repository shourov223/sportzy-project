"use client";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";
import { ProductCard } from "../../../components/Home/FeaturedProdects";

const page = () => {
  const { category } = useParams();
  const { product } = useContext(ProductContext);
  const CategoryProduct = product.filter((item) => item.category === category);
  console.log(CategoryProduct);
  return (
    <section className="py-10">
      <div className="container">
        <h2
          className={`text-black text-[36px] leading-[44px] font-bold pb-7`}
        >{`Best ${category} Product`}</h2>
        <hr className="mb-7 bg-black" />
        <div className="grid grid-cols-4 items-center justify-center gap-[20px]">
          {CategoryProduct.map((item, index) => {
            return (
              <ProductCard
                category={item.category}
                id={item.id}
                image={item.thumbnail}
                price={item.price}
                title={item.title}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
