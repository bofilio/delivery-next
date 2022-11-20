import axios from "axios";
import { categoryType } from "../../@types";
import { BACKEND_URL } from "../../config";
import { useNibbleStore } from "../../store";
import { useQuery, useMutation } from "@tanstack/react-query";
import { QueryKeys } from "../query_key";

async function fetchCategories() {
  try {
    const categories = (await axios.get(`${BACKEND_URL}/categories`)).data;
    return categories;
  } catch (err) {
    throw new Error(err.message);
  }
}
export function useCategories() {
  return useQuery<categoryType[], Error>(
    [QueryKeys.categories],
    fetchCategories
  );
}
// async function fetchCategory(id) {
//   try {
//     const category = (await axios.get(`${BACKEND_URL}/categories/${id}`)).data;
//     return category;
//   } catch (err) {
//     throw new Error(err.message);
//   }
// }
// export function useCategory(id) {
//   return useQuery<categoryType, Error>(
//     [QueryKeys.category],
//     fetchCategory
//   );
// }


export async function createCategory(data: categoryType) {
  try {
    const id = (await axios.post(`${BACKEND_URL}/categories`, data, {})).data;
    return id as string;
  } catch (err) {
    throw new Error(err.message);
  }
}
