"use client"
import { useContext, useState } from "react"
import { ProductContext } from "../../context/ProductContext"
import { ProductCard } from "../Home/FeaturedProdects"

const AllProducts = () => {

    const { product } = useContext(ProductContext);
    const allCategory = [...new Set(product.map(item => item.category))]
    const [selectedCategories, setSelectedCategories] = useState([]);
    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) => {
            return prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        })
    }
    const filterdProduct = selectedCategories.length === 0 ? product : product.filter(p => selectedCategories.includes(p.category))

    const allBrands = [...new Set(product.map(item => item.brand))]
    console.log(allBrands)

    return (
        <section>
            <div className="container">
                <h2 className="text-[46px] font-bold leading-[62px] text-black pb-[51px]">Products</h2>
                <div className="grid grid-cols-[321px_1fr]">
                    <aside>
                        <p className="text-black text-[20px] leading-[32px] font-bold pb-[32px]">Categories({allCategory.length})</p>
                        {allCategory.map((item, index) => <CategoryLIst handleCategoryChange={handleCategoryChange} key={index} category={item} />)}
                    </aside>
                    <div>
                        <div className="grid grid-cols-3 items-center gap-[20px]">
                            {
                                filterdProduct.map((item, index) => <ProductCard image={item.thumbnail} category={item.category} price={item.price} title={item.title} key={index} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const CategoryLIst = ({ category, handleCategoryChange }) => {

    return (
        <div className="flex items-center gap-[20px]">
            <input className="accent-red-500" onChange={() => handleCategoryChange(category)} type="checkbox" />
            <span className="text-base leading-[24px] text-black">{category}</span>
        </div>
    )
}
export default AllProducts