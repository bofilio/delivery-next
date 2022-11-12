import React from "react";
import { useRouter } from "next/router";
import FoodOffer from "../../../components/content/FoodOffer";
import Badge from "../../../components/util/Badge";
import StarIcon from "../../../components/icons/StarIcon";
import DishesIcon from "../../../components/icons/DishesIcon";
import CashIcon from "../../../components/icons/CashIcon";
import LocationIcon from "../../../components/icons/LocationIcon";
import { TabulationProvider } from "../../../contexts/TabulationContext";
import Tab from "../../../components/menu/Tab";
import TabContent from "../../../components/menu/TabContent";
import HeartIcon from "../../../components/icons/HeartIcon";
import Image from "next/image";

const restaurantPage = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div className="mt-12">
      {/**banner */}
      <div className=" relative pb-12">
        <div
          className=" rounded-2xl lg:h-72 h-40   bg-no-repeat bg-cover w-full"
          style={{ backgroundImage: `url(/media/restaurant.png)` }}
        ></div>
        <button className="absolute bg-light p-3 top-4 lg:top-8 right-4 lg:right-8 rounded-lg">
          <HeartIcon className="w-5 h-5 text-dark" />
        </button>
        <div className="absolute bg-light rounded-2xl  p-4 lg:p-6 bottom-0 left-1/2 transform -translate-x-1/2 ">
          <Image
            width={64}
            height={64}
            className=" w-16 h-16 lg:w-24 lg:h-24"
            src="/media/restaurantLogo.png"
            alt="restaurant"
          />
        </div>
      </div>

      <div className="mt-8 lg:space-x-6 space-x-0 space-y-6 flex flex-col lg:flex-row">
        {/** about */}
        <div className=" space-y-3 lg:w-1/2 w-full">
          <h1 className=" text-dark font-bold text-3xl">{name}</h1>
          <p className="text-gray-normal">
            It is one of the most iconic and well-recognizable fast food
            restaurants out there which offers really amazing food and drinks.
          </p>
        </div>
        {/**tags */}
        <div className="flex flex-wrap items-center lg:w-1/2 w-full">
          <Badge
            color="primary"
            className="py-2 px-3 text-xs md:text-base rounded-lg font-semibold mr-4 mb-4"
          >
            Free delivery
          </Badge>
          <Badge
            color="secondary"
            className="py-2 px-3 text-xs md:text-base rounded-lg font-semibold mr-4 mb-4"
          >
            Buy 2 get 1 free
          </Badge>
          <Badge
            color="success"
            className="py-2 px-3 text-xs md:text-base rounded-lg font-semibold mr-4 mb-4"
          >
            Open at 12 am
          </Badge>
        </div>
      </div>
      {/**info */}
      <div className="mt-2 flex flex-wrap items-center ">
        <div className="flex items-center space-x-2 text-gray-normal text-xs md:text-base mr-6 mb-4">
          <StarIcon className="text-warning w-4 h4" />
          <p>
            {" "}
            <span className="text-dark font-bold">4,8</span>(1,873)
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs md:text-base text-gray-normal mr-6 mb-4">
          <DishesIcon className="w-4 h-4 " />
          <span>Burger</span>
        </div>
        <div className="flex items-center space-x-2 text-xs md:text-base text-gray-normal mr-6 mb-4">
          <CashIcon className="w-4 h-4" />
          <span>$</span>
        </div>
        <div className="flex items-center space-x-2 text-xs md:text-base text-gray-normal mr-6 mb-4">
          <LocationIcon className="w-4 h-4" />
          <span>4,3 km (Irving St, San Francisco, California)</span>
        </div>
      </div>

      {/**products */}
      <TabulationProvider>
        <div className="flex items-center overflow-x-auto  text-xs space-x-4 pb-2 my-6">
          <Tab id={1} title="Popular (2)" className="py-2 px-3 flex-shrink-0" />
          <Tab
            id={2}
            title=" burgers (6)"
            className="py-2 px-3 flex-shrink-0"
          />
          <Tab id={3} title=" Fries (4)" className="py-2 px-3 flex-shrink-0" />
          <Tab
            id={4}
            title=" Drinks (29)"
            className="py-2 px-3 flex-shrink-0"
          />
          <Tab id={5} title="Nuggets (6)" className="py-2 px-3 flex-shrink-0" />
          <Tab id={6} title="Wraps (14)" className="py-2 px-3 flex-shrink-0" />
        </div>
        <TabContent id={1}>
          <section className="flex flex-col md:flex-row  flex-wrap">
            <FoodOffer />
            <FoodOffer />
          </section>
        </TabContent>
        <TabContent id={2}>
          <section className="flex flex-col md:flex-row  flex-wrap">
            <FoodOffer />
            <FoodOffer />
            <FoodOffer />
            <FoodOffer />
            <FoodOffer />
            <FoodOffer />
          </section>
        </TabContent>
        <TabContent id={3}>
          <section className="flex flex-col md:flex-row  flex-wrap">
            <FoodOffer />
          </section>
        </TabContent>
      </TabulationProvider>
    </div>
  );
};

export default restaurantPage;
