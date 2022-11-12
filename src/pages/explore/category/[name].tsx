import React from "react";
import { useRouter } from "next/router";
import SectionHead from "../../../components/util/SectionHead";
import FoodOffer from "../../../components/content/FoodOffer";
const CategoryPage = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div>
      <SectionHead className="mt-12 mb-4" title={name} >

      </SectionHead>
      <div className="flex flex-wrap w-full">
        <FoodOffer name={"Zelouf"} />
        <FoodOffer name={"Douara"} />
        <FoodOffer name={"Delaaa3"} />
        <FoodOffer name={"Rechta"} />
        <FoodOffer name={"Chekchoka"} />
        <FoodOffer name={"Loubia"} />
      </div>
    </div>
  );
};

export default CategoryPage;
