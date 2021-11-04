import React from 'react'

const Avatar = ({ className, img, variant }) => {

    switch (variant) {
        case "sm":
            return (
                <div className={`${className} flex items-end justify-center w-12 h-12 rounded-full`}>
                    <img className=" w-10 h-10" src={img} />
                </div>
            )
            case "md":
                return (
                    <div className={`${className} flex items-end justify-center w-16 h-16 rounded-full`}>
                        <img className=" w-14 h-14" src={img} />
                    </div>
                )
        default:
            /**sm by default */
            return (
                <div className={`${className} flex items-end justify-center w-12 h-12 rounded-full`}>
                    <img className=" w-10 h-10" src={img} />
                </div>
            )
    }

}

export default Avatar
