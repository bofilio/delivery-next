import React from "react";
import { useRouter } from "next/router";
import SectionHead from "../../../components/util/SectionHead";
import FoodOffer from "../../../components/content/FoodOffer";
import { useFood,useFoodByCat} from "../../../services";
import LoadingScreen from "../../../components/util/LoadingScreen";

const CategoryPage = () => {
  const router = useRouter();
  const { id,title } = router.query;
  
  const { data: food, isLoading, isError, error } = useFoodByCat({id,title})

  
  if (isLoading) return <LoadingScreen />
  if (isError) return <div className="text-red-400">!Error {error.message}</div>
  return (
    <div>
      <SectionHead className="mt-12 mb-4" title={title} >

      </SectionHead>
      <div className="flex flex-wrap w-full">
        {
          food.map((food,index)=> <FoodOffer  key={food.id} foodId={food.id} name={food.title} />)
        }
      </div>
    </div>
  );
};

export default CategoryPage;
