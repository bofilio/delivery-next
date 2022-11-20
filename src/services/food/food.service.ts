import axios from "axios";
import { foodType } from "../../@types";
import { BACKEND_URL } from "../../config";
import { useNibbleStore } from "../../store";
import { useQuery, useMutation } from "@tanstack/react-query";
import { QueryKeys } from "../query_key";


async function fetchFood(filter:any) {
  try {
    const food = (await axios.get(`${BACKEND_URL}/food`,{params:filter})).data;
    return food;
  } catch (err) {
    throw new Error(err.message);
  }
}
async function fetchFoodById(id:string) {
  try {
    const food = (await axios.get(`${BACKEND_URL}/food/${id}`)).data;
    return food;
  } catch (err) {
    throw new Error(err.message);
  }
}
export function useFood(filter:any) {
  return useQuery<foodType[], Error>(
    [QueryKeys.food,...Object.values(filter??{})],
    ()=>fetchFood(filter)
  );
}
export function useOneFood(id:string) {
  return useQuery<foodType, Error>(
    [QueryKeys.food,id],
    ()=>fetchFoodById(id)
  );
}
async function fetchFoodByCat(id) {
    try {
      const food = (await axios.get(`${BACKEND_URL}/food?idCategory=${id}`)).data;
      console.log(id);
      
      return food;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  // /posts?title=json-server&author=typicode
  export function useFoodByCat(data) {
    return useQuery<foodType[], Error>(
      [QueryKeys.foodByCat,data.id],
     ()=> fetchFoodByCat(data.id)
    );
  }

// export async function updateFood(data: categoryType) {
//   try {
//     const id = (await axios.post(`${BACKEND_URL}/categories`, data, {})).data;
//     return id as string;
//   } catch (err) {
//     throw new Error(err.message);
//   }
// }
