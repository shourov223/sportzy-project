import React from "react";
import ViewProduct from "../../../components/detailsPage/ViewProduct";
import Facilities from "@/components/Home/Facilities";
import ProductOthersInfo from "../../../components/detailsPage/ProductOthersInfo";
import RelatedProduct from "../../../components/detailsPage/RelatedProduct";
const page = () => {
  return (
    <>
      <ViewProduct />
      <Facilities />
      <ProductOthersInfo />
      <RelatedProduct />
    </>
  );
};

export default page;
