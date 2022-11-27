import { useRouter } from "next/router";
import React, { useEffect, useContext, useState } from "react";
import Category from "../components/content/Category";
import SectionHead from "../components/util/SectionHead";
import Restaurant from "../components/content/Restaurant";
import FoodOffer from "../components/content/FoodOffer";
import SeeAllLink from "../components/util/SeeAllLink";
import RestaurantsSection from "../components/content/RestaurantsSection";
import FoodSection from "../components/content/FoodSection";
import CategoryList from "../components/content/CategoryList";
import { useFeaturedRest } from "../services/restaurant/restaurant.service";
import { useFood, useFoodPagination } from "../services";

export default function Home() {
  const [pageNbr, setPageNbr] = useState(1);
  const { isError, isLoading, data: featuredRests, error } = useFeaturedRest();
  const {
    data: food,
    isLoading: foodIsloading,
    isError: foodIsError,
    error: foodError,
  } = useFoodPagination(pageNbr);
  function handelPrevious() {
    pageNbr === 1 ? true : setPageNbr((prevNbr) => prevNbr - 1);
  }
  function handelNext() {
    food.length === 0 ? true : setPageNbr((prevNbr) => prevNbr + 1);
  }



  return (
    <>
      <SectionHead title="Explore categories">
        <SeeAllLink to="#" />
      </SectionHead>

      {/**Categories */}
      <CategoryList />

      <SectionHead title="Featured restaurants">
        <SeeAllLink to="#" />
      </SectionHead>
      {isLoading && (
        <h1 className=" text-center text-2xl text-primary"> loading</h1>
      )}
      {isError && <div className="text-red-400">!Error {error?.message}</div>}
      {!isLoading && (
        <RestaurantsSection>
          {featuredRests?.map((rest) => (
            <Restaurant
              key={rest.id}
              idRest={rest.id}
              className={""}
              nbrLike={rest.nbrLike}
              review={rest.review}
              distance={rest.distance}
              badge={rest.badge}
              category={rest.category}
              name={rest.title}
              img={rest.img}
            />
          ))}
        </RestaurantsSection>
      )}
      <SectionHead title="Acian Food">
        <SeeAllLink to="#" />
      </SectionHead>

      {foodIsError && (
        <div className="text-red-400">!Error {foodError?.message}</div>
      )}
      {!(!food?.length) && (
        <FoodSection>
          {food.map((item) => (
            <FoodOffer key={item.id} name={item.title} foodId={item.id} />
          ))}
        </FoodSection>
      )}

      <div className=" flex justify-center gap-3 mt-2">
        <button
          disabled={pageNbr === 1}
          onClick={handelPrevious}
          className="inline-flex items-center px-4 py-2 text-sm font-medium bg-transparent-primary  text-primary bg-white border border-primary rounded-lg hover:bg-gray-100 hover:text-gray-700 "
        >
          Previous
        </button>
        <button
          disabled={food?.length === 0}
          onClick={handelNext}
          className="inline-flex items-center px-4 py-2 text-sm font-medium bg-transparent-primary  text-primary bg-white border border-primary rounded-lg hover:bg-gray-100 hover:text-gray-700 "
        >
          Next
        </button>
      </div>
    </>
  );
}
