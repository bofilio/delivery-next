import React from 'react'
import Image from 'next/image'

type AvaterProps = {
    className: string
    img: string
    variant: "sm" | "md"
}

const Avatar = (props: AvaterProps) => {
    const { className, img, variant } = props
    switch (variant) {
        case "sm":
            return (
                <div className={`${className} flex-shrink-0 flex items-end justify-center w-12 h-12 rounded-full`}>
                    <Image width={40} height={40} className=" w-10 h-10" src={img} />
                </div>
            )
        case "md":
            return (
                <div className={`${className} flex-shrink-0 flex items-end justify-center w-16 h-16 rounded-full`}>
                    <Image width={56} height={56} className=" w-14 h-14" src={img} />
                </div>
            )
    }

}

export default Avatar
