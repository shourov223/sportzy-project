"use client";

import { useParams } from "next/navigation";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";
import { ProductCard } from "../../../components/Home/FeaturedProdects";

const CategoryPage = () => {
  const { category } = useParams();
  const { product } = useContext(ProductContext);

  const categoryProducts = product.filter((item) => item.category === category);

  return (
    <section className="py-10 px-4">
      <div className="container">
        <h2 className="text-black text-2xl sm:text-3xl lg:text-[36px] leading-tight font-bold pb-5">
          {`Best ${category} Product`}
        </h2>

        <hr className="mb-7 border-black" />

        {categoryProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-10">
            No products found in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {categoryProducts.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                category={item.category}
                image={item.thumbnail}
                price={item.price}
                title={item.title}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
