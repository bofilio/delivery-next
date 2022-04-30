import React, { ReactNode } from 'react'
import { colorType } from '../../@types';
type BadgeProps = {
    className: string;
    color: colorType;
    children: ReactNode
}
const Badge = (props: BadgeProps) => {
    const { children, color, className } = props
    return (
        <div className={`${className} inline-block bg-transparent-${color} text-${color}`}>
            {children}
        </div>
    );


}

export default Badge
