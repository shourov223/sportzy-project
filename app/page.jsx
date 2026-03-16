import Banner from "@/components/Home/Banner";
import Facilities from "@/components/Home/Facilities";
import FeaturedProdects from "@/components/Home/FeaturedProdects";
import SponsordProduct from "@/components/Home/SponsordProduct";
import QandA from "@/components/Home/QandA";
import InfiniteSlider from "@/components/Home/InfinitySlider";
import ProductCategories from "@/components/Home/ProductCategories";

export default function Home() {
  return (
    <>
      <Banner />
      <Facilities />
      <ProductCategories />
      <FeaturedProdects />
      <SponsordProduct />
      <QandA />
      <InfiniteSlider />
    </>
  );
}
