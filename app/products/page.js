import AllProducts from "../../components/products/AllProducts"
import Topbar from "../../components/products/Topbar"


const page = () => {
    return (
        <main className="bg-white">
            <Topbar />
            <AllProducts />
        </main>
    )
}

export default page