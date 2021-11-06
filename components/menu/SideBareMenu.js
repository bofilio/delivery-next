import React, { useRef } from 'react'
import FavoriteIcon from '../icons/FavoriteIcon';
import HomeIcon from '../icons/HomeIcon';
import MailIcon from '../icons/MailIcon';
import SideBarMenuItem from './SideBarMenuItem'




const SideBareMenu = ({}) => {
    const [menu, setMenu] = React.useState(
        [
            {
                id: 1,
                title: "Home",
                icon: <HomeIcon className="w-6 h-6"/>,
                to: "/", 
                active:true, 
                badge :0,          
            },
            {
                id: 2,
                title: "Explore",
                to: "/explore",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>, 
                 active:false , 
                 badge :0,  
            },
            {
                id: 3,
                title: "Favourite",
                to: "/favourite",
                icon: <FavoriteIcon className="w-6 h-6"/>,
                active:false, 
                badge :0,  
            },
            {
                id: 4,
                title: "Orders",
                to: "/orders",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>,
                 active:false , 
                 badge :0, 
            },
            {
                id: 5,
                title: "Messages",
                to: "/messages",
                icon: <MailIcon className="w-6 h-6"/>,
                 active:false ,
                 badge :2,
            },
            {
                id: 6,
                title: "Settings",
                to: "/settings",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>,
                 active:false , 
                 badge :0,  
            },
        ]
        );
        const handleActivation=(e,i)=>{
            e.preventDefault();
            let state_cpy=menu.slice();
            state_cpy.forEach(element=>{
             element.active=  element.id==i ?true:false;
            })
            setMenu(state_cpy);

        }
    
    return (
        <div className="flex flex-col items-center">
            {
                menu.map(item => (
                    <div className="w-full sm:w-full md:w-auto lg:w-full" key={item.id} i={item.id} onClick={(e,i)=>handleActivation(e,item.id)}>
                        <SideBarMenuItem to={item.to} title={item.title} active={item.active} badge={item.badge} >
                            {item.icon} 
                        </SideBarMenuItem>
                    </div>

                ))
            }

        </div>
    )
}

export default SideBareMenu
