import React, { useEffect, useLayoutEffect, useState } from "react";
import FoodSection from "../../components/content/FoodSection";
import FoodOffer from "../../components/content/FoodOffer";
import Tab from "../../components/menu/Tab";
import { TabulationProvider } from "../../contexts/TabulationContext";
import StoreIcon from "../../components/icons/StoreIcon";
import DishesIcon from "../../components/icons/DishesIcon";
import TabContent from "../../components/menu/TabContent";
import Restaurant from "../../components/content/Restaurant";
import { useNibbleStore } from "../../store";
import { useRouter } from "next/router";
import LoadingScreen from "../../components/util/LoadingScreen";
import { useRestaurant } from "../../services/restaurant/restaurant.service";
import { useFood, useOneUser } from "../../services";
import { boolean } from "yup";
const Favorite = () => {
  const currrentUser = useNibbleStore((store) => store.currentUser);
  const router = useRouter();
  const { data: rest } = useRestaurant("");
  const { data: food, isLoading: foodIsloading  } = useFood("");

const [refetchUser,setRefetchUser] =useState(true)
function handelRefetchUser(){
    setRefetchUser(prevB=>!prevB)
}


  const { data: user, isLoading, refetch } = useOneUser(currrentUser?.id,refetchUser );

  useLayoutEffect(() => {
    if (currrentUser === null) router.push("/auth/signin");
  }, []);

  
  if (currrentUser === null || isLoading) return <LoadingScreen />;

  if (currrentUser !== null)
  
    return (
    <div >
        <TabulationProvider>
          <div className="flex items-center  text-xs space-x-4 mt-12 mb-8">
            <Tab
              id={1}
              title="Restaurants (8)"
              className="p-3 space-x-4 flex-grow lg:flex-grow-0"
              icon={<StoreIcon className="w-4 h-4" />}
            />
            <Tab
              id={2}
              title=" Dishes (23)"
              className="p-3 space-x-4 flex-grow lg:flex-grow-0"
              icon={<DishesIcon className="w-4 h-4" />}
            />
          </div>
          <TabContent id={1}>
            <section className="flex  lg:flex-row flex-col flex-wrap">
              {rest?.map((rest) =>
                user?.favouriteRest.includes(rest.id) ? (
                  <Restaurant
                    name={rest.title}
                    nbrLike={rest.nbrLike}
                    review={rest.review}
                    distance={rest.distance}
                    badge={rest.badge}
                    category={rest.category}
                    img={rest.img}
                    idRest={rest.id}
                    className=""
                  />
                ) : null
              )}
            </section>
          </TabContent>
          <TabContent id={2}>
            <div onClick={handelRefetchUser}>
            <FoodSection>
              {foodIsloading ? (
                <h1>Food is loading</h1>
              ) : (
                food?.map((food) =>
                user?.favouriteFood.includes(food.id) ? (
                    <FoodOffer
                      key={food.id}
                      name={food.title}
                      foodId={food.id}
                    />
                  ) : null
                )
              )}
              
            </FoodSection>
            </div>
          </TabContent>
        </TabulationProvider>
        </div>
    );
};

export default Favorite;
