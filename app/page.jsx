import Banner from "@/components/Home/Banner";
import Facilities from "@/components/Home/Facilities";
import FeaturedProdects from "@/components/Home/FeaturedProdects";
import SponsordProduct from "@/components/Home/SponsordProduct";
import QandA from "@/components/Home/QandA"


export default function Home() {
  return (
    <>
      <Banner />
      <Facilities />
      <FeaturedProdects />
      <SponsordProduct />
      <QandA />
    </>
  );
}
