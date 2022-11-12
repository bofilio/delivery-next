import React from 'react'
import Link from 'next/link'
import { colorType } from '../../@types'
import Image from 'next/image'

type LogoProps = {
    variant: 'big' | 'normal' | 'notext'
    text_color: colorType
    className?: string
}
const Logo = (props: LogoProps) => {
    const { variant, text_color, className } = props
    const logo_img = "/img/hamburger.png";
    switch (variant) {
        case "big":
            return (
                <Link href="/">
                    <div className="flex items-center cursor-pointer">
                        <Image width={80} height={64} className="w-20 h-16 mr-4" src={logo_img} />
                        <h1 className={`text-${text_color}  text-4xl`}>Nibble</h1>
                    </div>
                </Link>
            );
        case "normal":
            return (
                <Link href="/">
                    <div className="flex items-center cursor-pointer">
                        <Image width={40} height={32} className=" w-10 h-8 mr-2" src={logo_img} />
                        <h1 className={`text-${text_color} sm:block md:hidden lg:block block  text-lg font-bold`}>Nibble</h1>
                    </div>
                </Link>
            );
        case "notext":
            return (
                <Link href="/">
                    <div className={`${className} flex items-center cursor-pointer `}>
                        <Image width={80} height={64} className=" w-20 h-16 " src={logo_img} />
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
