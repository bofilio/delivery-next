import React from 'react'
import Link from 'next/link'
import ArrowRight from '../icons/ArrowRight'

type SeeAllLinkProps={
    to:string
}
const SeeAllLink = (props) => {
    const { to }=props
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
