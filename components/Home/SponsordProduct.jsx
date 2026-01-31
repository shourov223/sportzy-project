"use client"
import { useContext } from "react"
import { ProductContext } from '../../context/ProductContext'
import { Jost, Montserrat } from "next/font/google"
import Image from "next/image"

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700", "800"],
    display: 'swap',
})

const jost = Jost({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700", "800"],
    display: 'swap',
})

const SponsoredProduct = () => {
    const { product } = useContext(ProductContext)

    if (!product || product.length === 0) {
        return null
    }

    return (
        <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                    {product.slice(0, 2).map((item, index) => (
                        <ProductCard
                            key={item.id || index}
                            image={item.thumbnail}
                            title={item.title}
                            category={item.category}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

const ProductCard = ({ image, category, title }) => {
    return (
        <div className="bg-[#F2F2F2] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 md:p-8">
                
                <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 relative">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                    />
                </div>

                <div className="flex-1 flex flex-col items-center sm:items-start gap-2 md:gap-3 text-center sm:text-left">
                    <p className={`text-[#C1032F] text-sm md:text-base font-semibold uppercase tracking-wide ${montserrat.className}`}>
                        {category}
                    </p>
                    <h3 className={`text-black text-lg md:text-xl lg:text-2xl font-bold line-clamp-2 ${jost.className}`}>
                        {title}
                    </h3>
                </div>

                <button
                    className={`flex-shrink-0 w-full sm:w-auto py-3 px-6 md:py-4 md:px-8 lg:px-10 bg-[#C1032F] hover:bg-[#a00228] text-white text-sm md:text-base font-semibold uppercase tracking-wide transition-colors duration-300 rounded ${montserrat.className}`}
                    aria-label={`Shop ${title}`}
                >
                    SHOP NOW
                </button>
            </div>
        </div>
    )
}

export default SponsoredProduct