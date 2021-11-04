import React from 'react'
import Avatar from '../../components/util/Avatar'
import Badge from '../../components/util/Badge'

const Messager = ({ tags, active, onClick }) => {
    return (
        <div className="flex items-start space-x-6 cursor-pointer" onClick={onClick}>
            <Avatar className=" flex-shrink-0 bg-primary" img="/img/user.svg" />
            <div className="flex-grow flex flex-col">
                <div className="flex items-center justify-between">
                    <span>John Smith, CEO </span>
                    <span>2 h ago</span>
                </div>
                <h1 className="text-xl text-dark font-semibold mt-2">Special Offer Just for You!</h1>
                <div className="flex items-center mt-1 space-x-2">
                    <p className="flex-grow">
                        Hi, we are running a new promotion in your area. If you want to get a free delivery,
                        then use code <span className="text-dark font-bold">’FREE’</span> at the checkout.
                    </p>
                    {
                        active &&
                        <div className="w-2 h-2 flex-shrink-0 rounded-full bg-primary">
                        </div>
                    }
                </div>

                {
                    tags &&
                    <div className="mt-4 flex space-x-5">
                        {
                            tags.map(
                                tag => (
                                    <Badge key={tag.text} color={tag.color} >
                                        {tag.text}
                                    </Badge>
                                )
                            )
                        }
                    </div>
                }

            </div>
        </div>
    )
}

export default Messager
