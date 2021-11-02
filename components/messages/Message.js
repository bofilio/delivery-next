import React from 'react'

const Message = ({ message, time, variant }) => {
    switch (variant) {
        case "incoming":
            return (
                <div className="flex flex-col items-start space-y-3 w-3/4">
                    <div className="bg-white rounded-r-lg rounded-tl-lg p-4 text-sm">
                        {message}
                    </div>
                    <span className="text-2xs"> {time}</span>
                </div>
            )
        case "outgoing":
            return (
                <div className="flex flex-col items-end space-y-3 w-3/4 self-end ">
                    <div className=" bg-primary text-light rounded-l-lg rounded-tr-lg p-4 text-sm">
                    {message}
                    </div>
                    <span className="text-2xs"> {time}</span>
                </div>
            )
        default:
            return (
               <div>Specify variant [incomin or outgoing]</div>
            )

    }
    
}

export default Message
