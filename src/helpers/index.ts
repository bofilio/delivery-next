import { currentUserType, USER_STORAGE } from "../contexts";

export function getUserfromStorage(): currentUserType {
    const user_str = localStorage.getItem(USER_STORAGE)
    if (!user_str) return null
    return JSON.parse(user_str)
}