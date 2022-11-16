import React from "react";
import Category from "./Category";
import FireIcon from "../icons/FireIcon";
import settings from "../../apis/apiConfig";
import useRestApi from "../../apis/useRestApi";
import LoadingScreen from "../util/LoadingScreen";
import { useQuery } from "@tanstack/react-query";
import { useCategories } from "../../services";

const CategoryList = () => {
  const { data: categories, isLoading, isError, error } = useCategories()

  if (isLoading) return <LoadingScreen />
  if (isError) return <div className="text-red-400">!Error {error.message}</div>
  return (
    <div className="relative">
      <section className="flex space-x-8 overflow-x-auto">
        {categories ?
          categories.map((cat) => (
            <Category
              key={cat.id}
              id={cat.id}
              color={cat.color}
              title={cat.title}
              options_number={cat.options_number}
              icon={cat.icon}
            />
          ))
          : null
        }
      </section>
    </div>
  );
};

export default CategoryList;
