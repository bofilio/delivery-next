import React from 'react'
import Link from 'next/link'
const Logo = ({ variant, text_color }) => {
    const logo_img = "/img/hamburger.png";
    switch (variant) {
        case "big":
            return (
                <Link href="/">
                    <div className="flex items-center cursor-pointer">
                        <img className="w-20 h-16 mr-4" src={logo_img} />
                        <h1 className={text_color + " text-4xl"}>Nibble</h1>
                    </div>
                </Link>
            );
        case "normal":
            return (
                <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <img className=" w-10 h-8 mr-2" src={logo_img} />
                    <h1 className={text_color + "sm:block md:hidden lg:block block  text-lg font-bold"}>Nibble</h1>
                </div>
                </Link>
            );
        default: return (
            <>
            </>
        )
    }

}

export default Logo
