import React from 'react'
import Link from 'next/link'
import ArrowRight from '../icons/ArrowRight'
const SeeAllLink = ({ to }) => {
    return (
        <Link href={to}>
            <div className="flex right-0 items-center">
                <a className=" text-base font-bold text-primary" href="#">see all </a>
                <ArrowRight className="w-4 h-4 text-primary"/>
            </div>
        </Link>

    )
}

export default SeeAllLink
