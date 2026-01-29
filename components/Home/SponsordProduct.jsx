"use client"
import { useContext } from "react"
import { ProductContext } from '../../context/ProductContext'
import { Jost, Montserrat } from "next/font/google"
import Image from "next/image"

const montserrat = Montserrat({
    weight: ["400", "500", "600", "700", "800"]
})
const jost = Jost({
    weight: ["400", "500", "600", "700", "800"]
})

const SponsordProduct = () => {
    const { product } = useContext(ProductContext)
    console.log(product)
    return (
        <section>
            <div className="container">
                <div className="flex items-center gap-3">
                    <ProductCard category={product.category} image={product.thumbnail} title={product.title} />
                    <ProductCard category={product.category} image={product.thumbnail} title={product.title} />
                </div>
            </div>
        </section>
    )
}

const ProductCard = ({ image, category, title }) => {
    return (
        <div className="py-[25px] pl-[38px] pr-[68px] bg-[#F2F2F2] grid grid-cols-3 items-center justify-between gap-[10px] w-[50%]">
            <div className="w-[116px] h-[119px]">
                <Image src={image} alt="image" />
            </div>
            <div className="flex items-center gap-3 flex-col">
                <p className={`text-[#C1032F] text-base leading-[24px]s font-semibold ${montserrat.className}`}>{category}</p>
                <p className={`text-black text-[24px] leading-[32px] font-bold ${jost.className}`}>{title}</p>
            </div>
            <button className="py-[22px] px-10 bg-[#C1032F] text-white text-base font-semibold">SHOP NOW</button>
        </div>
    )
}

export default SponsordProduct