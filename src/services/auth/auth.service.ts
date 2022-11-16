import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import axios from "axios";
import { userType } from "../../@types";
import { BACKEND_URL } from "../../config";
import { useNibbleStore } from "../../store";

export async function login(data:{email: string, password: string}) {
  try {
    const users = (await axios.get(`${BACKEND_URL}/users`,  { params:data }))
      .data as userType[];
      if( users.length){
        localStorage.setItem("user", JSON.stringify(users[0]));
        useNibbleStore.setState({ currentUser: users[0] });
        return
      }
      throw new Error("404 user not found")
   
  } catch (err) {
    throw new Error(err.message);
  }
}

export function useLogin(){
  const router= useRouter()
    return useMutation(login,{
      onSuccess:(data)=>{
        router.back()
      },
      onError:(err)=>{
        console.log("error login"); 
      }
    })
}

export function logout() {
  localStorage.removeItem("user");
  useNibbleStore.setState({ currentUser: null });
}
