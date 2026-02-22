import AllProducts from "../../components/products/AllProducts"
import Topbar from "../../components/products/Topbar"


const page = () => {
    return (
        <main className="bg-white">
            <Topbar href={"/products"} pageName={"All Products"} />
            <AllProducts />
        </main>
    )
}

export default page