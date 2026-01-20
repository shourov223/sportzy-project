"use client"
import { createContext, useEffect, useState } from "react"
import axios from "axios"
import type { ReactNode } from "react"

interface ProductContextType {
    product: any[]
    loading: boolean
    Loader: any
}

export const ProductContext = createContext<any[]>()

interface PropsType {
    children: ReactNode
}

const ProductProvider = ({ children }: PropsType) => {
    const [product, setProduct] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://dummyjson.com/products")
                setProduct(res.data.products)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <ProductContext.Provider value={{ product, loading, Loader }}>
            {children}
        </ProductContext.Provider>
    )
}

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
                <div className="absolute inset-0 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
            </div>
        </div>
    )
}

export default ProductProvider
