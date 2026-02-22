"use client"
import React, { useContext, useState, useMemo } from 'react'
import Image from 'next/image'
import { GiSelfLove } from "react-icons/gi"
import { RiShoppingCartLine } from "react-icons/ri"
import { jost } from './Banner'
import { montserrat } from '../navbar'
import { ProductContext } from '@/context/ProductContext'


export const ProductCard = ({ image, title, price, category }) => {
    return (
        <div className='border border-gray-200 p-3 sm:p-4 rounded-xl sm:rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col'>

            {/* Image Container — fixed aspect ratio, no fixed height */}
            <div className='relative w-full aspect-[4/3] sm:aspect-square overflow-hidden rounded-lg bg-gray-50'>
                <Image
                    className='object-contain p-2'
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={false}
                />

                {/* Hover Action Buttons */}
                <div className='absolute bottom-0 left-0 right-0 h-12 bg-white flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    <button
                        className='flex-1 h-full bg-pink-500 flex items-center justify-center hover:bg-pink-600 active:bg-pink-400 transition-colors duration-150 rounded-bl-lg'
                        aria-label="Add to wishlist"
                    >
                        <GiSelfLove className='text-white text-lg sm:text-xl' />
                    </button>
                    <button
                        className='flex-1 h-full bg-green-600 flex items-center justify-center hover:bg-green-700 active:bg-green-400 transition-colors duration-150 rounded-br-lg'
                        aria-label="Add to cart"
                    >
                        <RiShoppingCartLine className='text-white text-lg sm:text-xl' />
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className='mt-3 flex flex-col gap-1 flex-1'>
                <p className={`text-[10px] sm:text-xs font-semibold text-red-500 uppercase tracking-wide ${montserrat.className}`}>
                    {category}
                </p>
                <h3 className={`text-sm sm:text-base md:text-lg font-bold text-black line-clamp-2 leading-snug flex-1 ${jost.className}`}>
                    {title}
                </h3>
                <p className={`text-sm sm:text-base md:text-lg text-black font-semibold mt-1 ${montserrat.className}`}>
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

                {/* Section Header */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 sm:pb-6 md:pb-7 border-b border-gray-300 gap-3 sm:gap-4'>
                    <h2 className={`text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-tight ${jost.className}`}>
                        Featured Products
                    </h2>

                    {/* Desktop Category Tabs */}
                    <div className='hidden lg:flex items-center gap-1 flex-wrap justify-end'>
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

                    {/* Mobile/Tablet Category Dropdown */}
                    <select
                        className='lg:hidden w-full sm:w-auto min-w-[180px] px-3 py-2 border text-black border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white capitalize'
                        value={activeCategoryIndex}
                        onChange={(e) => setActiveCategoryIndex(Number(e.target.value))}
                    >
                        {categories.map((category, index) => (
                            <option key={index} value={index} className='capitalize'>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Products Grid */}
                <div className='pt-5 sm:pt-6 md:pt-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5'>
                    {filteredProducts.length > 0
                        ? filteredProducts.map((item, index) => (
                            <ProductCard
                                key={`${item.category}-${index}`}
                                category={item.category}
                                image={item.thumbnail}
                                title={item.title}
                                price={item.price}
                            />
                        ))
                        : (
                            <div className='col-span-full text-center py-12 md:py-16'>
                                <p className={`text-gray-500 text-base sm:text-lg ${montserrat.className}`}>
                                    No products found in this category.
                                </p>
                            </div>
                        )
                    }
                </div>

            </div>
        </section>
    )
}

export default FeaturedProducts