import { Router, useRouter } from 'next/router';
import React, { MouseEventHandler, useEffect, useRef } from 'react'
import ExploreIcon from '../icons/ExploreIcon';
import FavoriteIcon from '../icons/FavoriteIcon';
import HomeIcon from '../icons/HomeIcon';
import MailIcon from '../icons/MailIcon';
import OrderIcon from '../SettingsIcon';
import SideBarMenuItem from './SideBarMenuItem'




const SideBareMenu = ({ }) => {
    const [active_menu, setActiveMenu] = React.useState(1);
    const router = useRouter()
    const handleActivation: any = (e, i) => {
        e.preventDefault();
        setActiveMenu(i);
    }
    useEffect(() => {
  
        for (const item of sideMenu) {
            if (item.to === "/") continue
            if (router.route.includes(item.to)){
                setActiveMenu(item.id)
                return
            }   
            setActiveMenu(1)
        }
    }, [router.route])
   
    return (
        <div className="flex flex-col items-center">
            {
                sideMenu.map(item => (
                    <div  className="w-full sm:w-full md:w-auto lg:w-full" key={item.id}  onClick={(e) => handleActivation(e, item.id)}>
                        <SideBarMenuItem to={item.to} title={item.title} active={item.id === active_menu} icon={item.icon} badge={item.badge} />
                    </div>

                ))
            }

        </div>
    )
}

export default SideBareMenu

const sideMenu = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon className="w-6 h-6" />,
        to: "/",
        active: true,
        badge: 0,
    },
    {
        id: 2,
        title: "Explore",
        to: "/explore",
        icon: <ExploreIcon className={""} />,
        active: false,
        badge: 0,
    },
    {
        id: 3,
        title: "Favourite",
        to: "/favourite",
        icon: <FavoriteIcon className="w-6 h-6" />,
        active: false,
        badge: 0,
    },
    {
        id: 4,
        title: "Orders",
        to: "/orders",
        icon: <OrderIcon className={""} />,
        active: false,
        badge: 0,
    },
    {
        id: 5,
        title: "Messages",
        to: "/messages",
        icon: <MailIcon className="w-6 h-6" />,
        active: false,
        badge: 2,
    },
    {
        id: 6,
        title: "Settings",
        to: "/settings",
        icon: <OrderIcon className={""} />,
        active: false,
        badge: 0,
    },
]