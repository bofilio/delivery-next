import React from "react";
import CashIcon from "../icons/CashIcon";
import Link from "next/link";
import Image from "next/image";
import { RESTAURNT_IMG_URL } from "../../config";
import { restaurantType } from "../../@types";

const Restaurant = ( {className, name,nbrLike,review,distance,badge,category,img,idRest} ) => {
  return (

    <Link href={`/explore/restaurant/${idRest}`}>
      <div
        className={`flex flex-shrink-0 mr-8 mb-8 cursor-pointer ${className}`}
      >
        <div className="bg-light p-4 rounded-2xl flex-shrink-0">
          <Image
            width={64}
            height={64}
            className="w-16 h-16"
            src={RESTAURNT_IMG_URL +img}
            alt=""
          />
        </div>
        <div className="flex flex-col flex-grow justify-around ml-6">
          <h1 className=" text-dark font-bold">{name}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-normal text-xs">
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 12.8589L12.944 16L11.632 10.08L16 6.09684L10.248 5.57474L8 0L5.752 5.57474L0 6.09684L4.36 10.08L3.056 16L8 12.8589Z"
                  fill="#FACD5D"
                />
              </svg>
              <p>
                
                <span>{review}</span>({nbrLike})
              </p>
            </div>

            <div className="flex items-center space-x-2 text-xs text-gray-normal">
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 5.6H7.66667V0H9.33333V5.6C9.33333 7.296 7.95 8.672 6.20833 8.776V16H4.125V8.776C2.38333 8.672 1 7.296 1 5.6V0H2.66667V5.6H4.33333V0H6V5.6ZM11.8333 9.6V3.2C11.8333 1.792 13.7 0 16 0V16H13.9167V9.6H11.8333Z"
                  fill="#A3A3A4"
                />
              </svg>
              <span>{category}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-normal">
              <CashIcon className="w-4 h-4" />
              <span>$</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-xs text-gray-normal">
            <span className="p-1 bg-transparent-primary text-primary font-semibold">
              {badge}
            </span>
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.2 0.843943C3.86271 1.21286 1.21286 3.86271 0.843943 7.2H0V8.8H0.843943C1.21286 12.1373 3.86271 14.7871 7.2 15.1561V16H8.8V15.1561C12.1373 14.7871 14.7871 12.1373 15.1561 8.8H16V7.2H15.1561C14.7871 3.86271 12.1373 1.21286 8.8 0.843943V0H7.2V0.843943ZM3.2 7.2H2.45671C2.80752 4.74745 4.74745 2.80752 7.2 2.45671V3.2H8.8V2.45671C11.2526 2.80752 13.1925 4.74745 13.5433 7.2H12.8V8.8H13.5433C13.1925 11.2526 11.2526 13.1925 8.8 13.5433V12.8H7.2V13.5433C4.74745 13.1925 2.80752 11.2526 2.45671 8.8H3.2V7.2ZM8 9.6C8.88366 9.6 9.6 8.88366 9.6 8C9.6 7.11634 8.88366 6.4 8 6.4C7.11634 6.4 6.4 7.11634 6.4 8C6.4 8.88366 7.11634 9.6 8 9.6ZM4.8 8C4.8 9.76731 6.23269 11.2 8 11.2C9.76731 11.2 11.2 9.76731 11.2 8C11.2 6.23269 9.76731 4.8 8 4.8C6.23269 4.8 4.8 6.23269 4.8 8Z"
                  fill="#A3A3A4"
                />
              </svg>
              <span>{distance} km</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Restaurant;
