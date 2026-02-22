"use client"
import { useContext } from 'react'
import Topbar from '../../../components/products/Topbar'
import { ProductContext } from '../../../context/ProductContext'
import { useParams } from 'next/navigation'

const page = () => {
    const { id } = useParams()
    const { product } = useContext(ProductContext)
    const singleProduct = product.find(p => toString(p.id) === toString(id))
    console.log(singleProduct)


    return (
        <section>
            <Topbar href={''} pageName={"Product Details"} />
        </section>
    )
}

export default page