import { useRouter } from 'next/router';
import { useMutation,useQuery } from '@tanstack/react-query';
import axios from "axios";
import { userType } from "../../@types";
import { BACKEND_URL } from "../../config";
import { useNibbleStore } from "../../store";
import uniqid from 'uniqid';
import { QueryKeys } from "../query_key";

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

export async function createUser(data) {
  try {
    const user = (await axios.post(`${BACKEND_URL}/users`, {...data,accessToken: uniqid(),
    refreshToken: uniqid(), id:uniqid() }, {})).data;
    return user as userType;
  } catch (err) {
    throw new Error(err.message);
  }
}

export function useSingUp(){
  const router= useRouter()
    return useMutation(createUser,{
      onSuccess:(data)=>{
        router.back()
      },
      onError:(err)=>{
        console.log("error singup"); 
      }
    })
}

async function fetchUser(email) {
  try {
    const user = (await axios.get(`${BACKEND_URL}/users`,{ params:email } )).data;
    
    
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
}


export function useUser(email){

    return useMutation(fetchUser,{
      onSuccess:(data)=>{
        return(data)
      },
      onError:(err)=>{
        console.log("error login"); 
      }
    })
  }