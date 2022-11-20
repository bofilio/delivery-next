import { async } from "@firebase/util";
import axios from "axios";
import create from "zustand";
import { NibbleStoreType, userType } from "../@types";
import { BACKEND_URL } from "../config";

export const useNibbleStore = create<NibbleStoreType>((set) => ({
  /** auth */
  currentUser: null,
}));
