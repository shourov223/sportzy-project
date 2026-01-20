"use client"
import React, { useContext, useState } from 'react'
import { jost } from './Banner'
import { ProductContext } from '@/context/ProductContext'

const FeaturedProdects = () => {
    const { product } = useContext(ProductContext)
    // console.log(product)
    const categories = [...new Set(product.map(item => item.category))]
    const [catIndex, setCatIndex] = useState(0)

    return (
        <section>
            <div className="container">
                <div className='flex items-center justify-between pb-7 border-b border-b-black'>
                    <h2 className={`text-black font-bold text-[36px] leading-[44px] ${jost.className}`}>Featured</h2>
                    <div className='flex items-center gap-[1px]'>
                        <span className={`pr-2 text-black text-base leading-4 cursor-pointer`} >All</span>
                        {
                            categories.map((item, index) => {
                                return <span onClick={() => setCatIndex(index)} key={index} className={`px-2 text-black text-base leading-4 cursor-pointer ${catIndex === index && "text-red-500 border-r border-l-red-500]"}`}>{item}</span>
                            })
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}

export default FeaturedProdects