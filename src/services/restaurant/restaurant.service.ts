import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { restaurantType } from '../../@types';
import { BACKEND_URL } from '../../config';
import { QueryKeys } from '../query_key';

async function fetchRestaurants(filter:any) {
   
    
    return (await axios.get(`${BACKEND_URL}/restaurant`,{params:filter}))?.data;
}

export  function useRestaurant(filter:any){
    return useQuery<restaurantType[],Error>(
        [QueryKeys.restaurants,...Object.values(filter??{})],
        ()=>fetchRestaurants(filter)
    )
}


async function fetchFeaturedRest() {
    return (await axios.get(`${BACKEND_URL}/restaurant?_sort=nbrLike&_order=desc`))?.data;
}

export  function useFeaturedRest(){
    return useQuery<restaurantType[],Error>(
        [QueryKeys.restaurants],
        fetchFeaturedRest
    )
}