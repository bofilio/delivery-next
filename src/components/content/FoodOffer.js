import React from "react";
import { ModalProvider } from "../../contexts/ModalContext";
import BycicalIcon from "../icons/BycicalIcon";
import DishesIcon from "../icons/DishesIcon";
import StarIcon from "../icons/StarIcon";
import Modal from "../modals/Modal";
import OpenModal from "../modals/OpenModal";
import Badge from "../util/Badge";
import FoodOfferModal from "./modals/FoodOfferModal";
import Image from "next/image";
const FoodOffer = ({ name }) => {
  return (
    <ModalProvider>
      <OpenModal className=" flex flex-col lg:w-80 md:w-72 w-full flex-shrink-0  md:p-4 lg:p-4  p-0  md:mb-0 lg:mb-0 mb-8 ">
        <img
          className="w-full  h-full rounded-2xl flex-grow"
          src="/media/salade.png"
          alt="food"
          objectFit="contain"
        />

        <div className="mt-4 flex items-center justify-between">
          <h1 className=" text-base text-dark font-bold">Spicy Na Thai Town</h1>
          <Badge
            color="primary"
            className="text-xs rounded font-semibold py-1 px-2"
          >
            Free delivery
          </Badge>
        </div>
        <div className="flex items-center space-x-4 mt-2">
          <div className="flex items-center space-x-2 text-gray-normal text-xs">
            <StarIcon className="text-warning w-4 h4" />
            <p>              
              <span>4,8</span>(1,873)
            </p>
          </div>
          <div className="flex items-center space-x-2 text-xs text-gray-normal">
            <DishesIcon className="w-4 h-4 " />
            <span>Burger</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-gray-normal">
            <BycicalIcon className="w-4 h-4" />
            <span>45 - 55 min</span>
          </div>
        </div>
      </OpenModal>
      <FoodOfferModal />
    </ModalProvider>
  );
};

export default FoodOffer;
