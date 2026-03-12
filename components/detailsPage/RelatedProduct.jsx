"use client";
import { ProductContext } from "@/context/ProductContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { ProductCard } from "../Home/FeaturedProdects";

const RelatedProduct = () => {
  const { id } = useParams();
  const { product } = useContext(ProductContext);
  const singleProduct = product.find((item) => item.id === Number(id));
  const relatedProductList = product.filter(
    (item) => item.category === singleProduct?.category,
  );

  if (!singleProduct) {
    return <h1>Loading........</h1>;
  }

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-0">
      <div className="container">
        <div className="flex items-center justify-between gap-5 pb-7">
          <p className="text-2xl sm:text-3xl lg:text-[36px] leading-tight lg:leading-[64px] font-bold text-black">
            Related Products
          </p>
          <Link
            className="text-sm sm:text-base font-semibold leading-6 text-black hover:text-red-500 transition-colors duration-200"
            href={"/products"}
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {relatedProductList.map((item) => (
            <ProductCard
              key={item.id}
              category={item.category}
              id={item.id}
              image={item.thumbnail}
              price={item.price}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProduct;
