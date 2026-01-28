"use client"
import React, { useContext, useEffect, useState } from 'react'
import { jost } from './Banner'
import { ProductContext } from '@/context/ProductContext'
import Image from 'next/image'
import { GiSelfLove } from "react-icons/gi";
import { RiShoppingCartLine } from "react-icons/ri";
import { montserrat } from '../navbar'

const FeaturedProdects = () => {
    const { product } = useContext(ProductContext)
    // console.log(product)
    const categories = [...new Set(product.map(item => item.category))]
    const [catIndex, setCatIndex] = useState(0)
    const [beauty, setBeauty] = useState([])
    const [fragrances, setFragrances] = useState([])
    const [furniture, setFurniture] = useState([])
    const [groceries, setGroceries] = useState([])

    useEffect(() => {
        setBeauty(product.filter(p => p.category === "beauty"))
        setFragrances(product.filter(p => p.category === "fragrances"))
        setFurniture(product.filter(p => p.category === "furniture"))
        setGroceries(product.filter(p => p.category === "groceries"))
    }, [product])

    const activeCategory = categories[catIndex]

    return (
        <section>
            <div className="container">
                <div className='flex items-center justify-between pb-7 border-b border-b-black'>
                    <h2 className={`text-black font-bold text-[36px] leading-[44px] ${jost.className}`}>Featured</h2>
                    <div className='flex items-center gap-[1px]'>
                        {
                            categories.map((item, index) => {
                                return <span onClick={() => setCatIndex(index)} key={index} className={`px-2 transition-all duration-100 text-black text-base leading-4 cursor-pointer ${catIndex === index && "text-red-500 border-r border-l-red-500]"}`}>{item}</span>
                            })
                        }
                    </div>
                </div>
                <div className='pt-[30px] grid grid-cols-4 items-center justify-between gap-[20px]'>
                    {
                        product.filter(ind => ind.category === activeCategory).map((item, index) => {
                            return <ProductCard key={index} cate={item.category} image={item.thumbnail} title={item.title} price={item.price} />
                        })
                    }
                </div>
            </div>
        </section >
    )
}


interface cardProps {
    image: string
    title: string
    price: string
    cate: string
}

const ProductCard = ({ image, title, price, cate }: cardProps) => {
    return (
        <div className='max-w-[365px] border p-[20px] rounded-2xl overflow-hidden group'>
            <div className='h-[471px] relative'>
                <Image className='w-full h-full object-contain' src={image} alt='image' width={365} height={471} />
                <div className='w-full h-[68px] bg-white absolute bottom-0 left-0 right-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-200'>
                    <center className='w-[50%] bg-pink-500 py-[10px] active:bg-pink-400 cursor-pointer'>
                        <GiSelfLove className='text-black' />
                    </center>
                    <center className='w-[50%] bg-green-600 py-[10px] active:bg-green-400 cursor-pointer'>
                        <RiShoppingCartLine className='text-black' />
                    </center>
                </div>
            </div>
            <div>
                <p className={`text-base font-semibold leading-6 text-red-500 pb-4 ${montserrat.className}`}>{cate}</p>
                <h2 className={`text-[24px] font-bold leading-[36px] pb-3 text-black ${jost.className}`}>{title}</h2>
                <p className={`text-[20px] text-black ${montserrat.className}`}>${price}</p>
            </div>
        </div>
    )
}

export default FeaturedProdects