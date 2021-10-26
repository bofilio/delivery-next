import React from 'react'

const Logo = ({variant,text_color}) => {
    const logo_img = "/img/hamburger.png";
    switch (variant){
        case "big":
            return (
                <div className="flex items-center">
                    <img className="w-20 h-16 mr-4" src={logo_img} />
                    <h1 className={ text_color+" text-4xl"}>Nibble</h1>
                </div>
            );
        case "normal":
            return (
                <div className="flex items-center">
                    <img className="w-10 h-8 mr-2" src={logo_img} />
                    <h1 className={ text_color+" lg:block hidden text-lg font-bold"}>Nibble</h1>
                </div>
            );
            default: return(
                <>
                </>
            )
    }
   
}

export default Logo
