import axios from "axios";
import { userType } from "../../@types";
import { BACKEND_URL } from "../../config";
import { useNibbleStore } from "../../store";

export async function login(email: string, password: string) {
  try {
    const user = (await axios.post(`${BACKEND_URL}/login`, { email, password }))
      .data as userType;
    localStorage.setItem("user", JSON.stringify(user));
    useNibbleStore.setState({ currentUser: user });
  } catch (err) {
    throw new Error(err.message);
  }
}

export function logout() {
  localStorage.removeItem("user");
  useNibbleStore.setState({ currentUser: null });
}
