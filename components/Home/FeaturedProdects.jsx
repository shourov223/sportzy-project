"use client"
import React, { useContext, useEffect, useState, useMemo } from 'react'
import Image from 'next/image'
import { GiSelfLove } from "react-icons/gi"
import { RiShoppingCartLine } from "react-icons/ri"
import { jost } from './Banner'
import { montserrat } from '../navbar'
import { ProductContext } from '@/context/ProductContext'


const ProductCard = ({ image, title, price, category }) => {
    return (
        <div className='border border-gray-200 p-3 sm:p-4 md:p-5 rounded-xl md:rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-300 bg-white'>
            <div className='h-[180px] sm:h-[250px] md:h-[350px] lg:h-[400px] xl:h-[420px] relative'>
                <Image
                    className='w-full h-full object-contain'
                    src={image}
                    alt={title}
                    width={365}
                    height={471}
                    priority={false}
                />
                <div className='w-full h-12 sm:h-14 md:h-[68px] bg-white absolute bottom-0 left-0 right-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    <button
                        className='w-1/2 bg-pink-500 py-[10px] rounded-tl-[30px] flex items-center justify-center hover:bg-pink-600 active:bg-pink-400 transition-colors duration-150'
                        aria-label="Add to wishlist"
                    >
                        <GiSelfLove className='text-white text-lg sm:text-xl md:text-2xl' />
                    </button>
                    <button
                        className='w-1/2 bg-green-600 py-[10px] rounded-br-[30px] flex items-center justify-center hover:bg-green-700 active:bg-green-400 transition-colors duration-150'
                        aria-label="Add to cart"
                    >
                        <RiShoppingCartLine className='text-white text-lg sm:text-xl md:text-2xl' />
                    </button>
                </div>
            </div>
            <div className='mt-3 sm:mt-4'>
                <p className={`text-xs sm:text-sm md:text-base font-semibold leading-5 sm:leading-6 text-red-500 pb-1.5 sm:pb-2 md:pb-4 uppercase ${montserrat.className}`}>
                    {category}
                </p>
                <h3 className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-snug sm:leading-tight md:leading-[36px] pb-1.5 sm:pb-2 md:pb-3 text-black line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] ${jost.className}`}>
                    {title}
                </h3>
                <p className={`text-base sm:text-lg md:text-xl text-black font-semibold ${montserrat.className}`}>
                    ${price}
                </p>
            </div>
        </div>
    )
}

const FeaturedProducts = () => {
    const { product } = useContext(ProductContext)
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

    const categories = useMemo(() =>
        [...new Set(product.map((item) => item.category))],
        [product]
    )

    const filteredProducts = useMemo(() =>
        product.filter((item) => item.category === categories[activeCategoryIndex]),
        [product, categories, activeCategoryIndex]
    )

    return (
        <section className='py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 sm:pb-6 md:pb-7 border-b border-gray-300 gap-3 sm:gap-4'>
                    <h2 className={`text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-tight md:leading-[44px] ${jost.className}`}>
                        Featured Products
                    </h2>

                    <div className='hidden lg:flex items-center gap-1 flex-wrap'>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCategoryIndex(index)}
                                className={`px-3 xl:px-4 py-1.5 transition-all duration-200 text-sm xl:text-base capitalize whitespace-nowrap ${activeCategoryIndex === index
                                    ? "text-red-500 border-l-2 border-r-2 border-red-500 font-semibold"
                                    : "text-gray-700 hover:text-red-400"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <select
                        className='lg:hidden w-full sm:w-auto min-w-[200px] px-3 sm:px-4 py-2 border text-black border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white'
                        value={activeCategoryIndex}
                        onChange={(e) => setActiveCategoryIndex(Number(e.target.value))}
                    >
                        {categories.map((category, index) => (
                            <option key={index} value={index} className='capitalize text-black'>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='pt-5 sm:pt-6 md:pt-8 lg:pt-[30px] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-[20px]'>
                    {filteredProducts.map((item, index) => (
                        <ProductCard
                            key={`${item.category}-${index}`}
                            category={item.category}
                            image={item.thumbnail}
                            title={item.title}
                            price={item.price}
                        />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className='text-center py-12 md:py-16'>
                        <p className={`text-gray-500 text-base sm:text-lg ${montserrat.className}`}>
                            No products found in this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default FeaturedProducts