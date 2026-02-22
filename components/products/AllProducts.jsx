"use client"
import { useContext, useState, useMemo } from "react"
import { ProductContext } from "../../context/ProductContext"
import { ProductCard } from "../Home/FeaturedProdects"

const FilterCheckbox = ({ label, onChange }) => (
    <label className="flex items-center gap-3 cursor-pointer group py-1">
        <input
            type="checkbox"
            onChange={() => onChange(label)}
            className="w-4 h-4 accent-red-500 cursor-pointer"
        />
        <span className="text-sm text-gray-700 group-hover:text-red-500 transition-colors duration-200 capitalize">
            {label}
        </span>
    </label>
)

const FilterSection = ({ title, items, onChange }) => (
    <div className="mb-8">
        <h3 className="text-base font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
            {title} <span className="text-gray-400 font-normal text-sm">({items.length})</span>
        </h3>
        <div className="flex flex-col gap-1 max-h-52 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-200">
            {items.map((item, index) => (
                <FilterCheckbox key={index} label={item} onChange={onChange} />
            ))}
        </div>
    </div>
)

const EmptyState = () => (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
        <div className="text-5xl mb-4">🔍</div>
        <h4 className="text-lg font-semibold text-gray-700 mb-1">No products found</h4>
        <p className="text-sm text-gray-400">Try adjusting your filters.</p>
    </div>
)

const AllProducts = () => {
    const { product } = useContext(ProductContext)

    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedBrands, setSelectedBrands] = useState([])
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const allCategories = useMemo(() => [...new Set(product.map(p => p.category))], [product])
    const allBrands = useMemo(() => [...new Set(product.map(p => p.brand))], [product])

    const toggle = (setter) => (value) =>
        setter(prev =>
            prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
        )

    const filteredProducts = useMemo(() => {
        return product.filter(p => {
            const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category)
            const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(p.brand)
            return matchCategory && matchBrand
        })
    }, [product, selectedCategories, selectedBrands])

    const activeFilterCount = selectedCategories.length + selectedBrands.length

    const clearFilters = () => {
        setSelectedCategories([])
        setSelectedBrands([])
    }

    return (
        <section className="py-8 md:py-12">
            <div className="px-4 sm:px-6 lg:px-8 container">

                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Products</h2>
                    <div className="flex items-center gap-3">
                        {activeFilterCount > 0 && (
                            <button
                                onClick={clearFilters}
                                className="text-sm text-red-500 hover:text-red-700 underline transition-colors"
                            >
                                Clear all ({activeFilterCount})
                            </button>
                        )}

                        <button
                            onClick={() => setIsSidebarOpen(prev => !prev)}
                            className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 12h10M11 20h2" />
                            </svg>
                            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
                        </button>
                    </div>
                </div>

                <div className="flex gap-8">

                    <aside
                        className={`
              fixed inset-y-0 left-0 z-40 w-72 bg-white shadow-xl p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out
              lg:static lg:z-auto lg:w-64 lg:shadow-none lg:p-0 lg:translate-x-0 lg:block lg:flex-shrink-0
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
                    >
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                            aria-label="Close filters"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <FilterSection
                            title="Categories"
                            items={allCategories}
                            onChange={toggle(setSelectedCategories)}
                        />
                        <FilterSection
                            title="Brands"
                            items={allBrands}
                            onChange={toggle(setSelectedBrands)}
                        />
                    </aside>

                    {isSidebarOpen && (
                        <div
                            onClick={() => setIsSidebarOpen(false)}
                            className="lg:hidden fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
                        />
                    )}

                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500 mb-4">
                            {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                            {filteredProducts.length > 0
                                ? filteredProducts.map((item, index) => (
                                    <ProductCard
                                        key={index}
                                        image={item.thumbnail}
                                        category={item.category}
                                        price={item.price}
                                        title={item.title}
                                    />
                                ))
                                : <EmptyState />
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AllProducts