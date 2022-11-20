import create from "zustand";
import { NibbleStoreType, userType } from "../@types";

export const useNibbleStore = create<NibbleStoreType>((set) => ({
  /** auth */
  currentUser: null,
}));


