import { userType } from './../../@types/store';
import axios from 'axios';
import { BACKEND_URL } from './../../config/const';
import { useMutation, useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../query_key';
// GET /posts?embed=comments
// GET /posts/1?embed=comments
// GET /posts/1?include=tags
  export async function fetchUpdateUser(updatedUser:userType) { 
    try {
      const user = (await axios.patch(`${BACKEND_URL}/users/${updatedUser.id}`, {favouriteFood:updatedUser.favouriteFood, favouriteRest:updatedUser.favouriteRest}, {})).data;
      return user as userType;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  export function useUpdateUser(){   

      return useMutation(fetchUpdateUser,{
        onSuccess:(data)=>{       
        },
        onError:(err)=>{
          console.log("error login"); 
        }
      })
  }

  async function fetchUsers(filter:any) {
   
    
    return (await axios.get(`${BACKEND_URL}/users`,{params:filter}))?.data;
}

export  function useUsers(filter:any){
    return useQuery<userType[],Error>(
        [QueryKeys.users,...Object.values(filter??{})],
        ()=>fetchUsers(filter)
    )
}
async function fetchOneUser(id:number) {
  try {
    const user = (await axios.get(`${BACKEND_URL}/users/${id}`)).data;
    
    
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
}
export function useOneUser(id, refetchUser?) {

  
  return useQuery<userType, Error>(
    [QueryKeys.users,id, refetchUser],
    ()=>fetchOneUser(id)
  );
}


  // export async function fetchUserRest(updatedUser:userType) { 
  //   try {
  //     const user = (await axios.patch(`${BACKEND_URL}/users/${updatedUser.id}`, {favouriteFood:updatedUser.favouriteFood}, {})).data;
  //     return user as userType;
  //   } catch (err) {
  //     throw new Error(err.message);
  //   }
  // }

  // export function useUserRest(){
  //   useQuery(
  //     [QueryKeys.users],
  //     fetchUserRest)
  // }