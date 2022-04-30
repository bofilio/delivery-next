import React, { useEffect, useLayoutEffect, useState } from 'react'
import Category from './Category'
import FireIcon from '../icons/FireIcon'
import settings from '../../apis/apiConfig'
import useRestApi from '../../apis/useRestApi'
import LoadingScreen from '../util/LoadingScreen'

const CategoryList = () => {
    const {data,loading,errorMessage} = useRestApi(`${settings.baseUrl}/categories/`)
    
    return (
        <div className="relative">
        {     
        loading? 
        <LoadingScreen/>
        :
        !errorMessage?
        <section className="flex space-x-8 overflow-x-auto">
            {
                data && data.map(cat => (
                    <Category key={cat.title} color={cat.color} title={cat.title} options_number={286}
                        icon={cat.icon}
                    />
                ))
            } 
        </section>
        :
        <div className="text-red-400">!Error {errorMessage}</div>
            
        }
        </div>
        
    )
}

export default CategoryList
