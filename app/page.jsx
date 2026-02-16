import Banner from "@/components/Home/Banner";
import Facilities from "@/components/Home/Facilities";
import FeaturedProdects from "@/components/Home/FeaturedProdects";
import SponsordProduct from "@/components/Home/SponsordProduct";
import QandA from "@/components/Home/QandA"
import InfiniteSlider from "@/components/Home/InfinitySlider";
import Footer from "../components/Footer"


export default function Home() {
  return (
    <>
      <Banner />
      <Facilities />
      <FeaturedProdects />
      <SponsordProduct />
      <QandA />
      <InfiniteSlider />
      <Footer/>
    </>
  );
}
