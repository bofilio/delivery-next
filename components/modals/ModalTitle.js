import React from 'react'
import CloseModal from './CloseModal'
import CloseIcon from '../icons/CloseIcon'
import Badge from '../util/Badge'


const ModalTitle = ({ title }) => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">{title}</h1>
            <Badge color="gray" className="p-3 rounded-lg">
                <CloseModal className="">
                    <CloseIcon className=" text-dark w-4 h-4" />
                </CloseModal>
            </Badge>
        </div>
    )
}

export default ModalTitle
