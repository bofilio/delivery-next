import React from 'react'
import CloseModal from './CloseModal'
import CloseIcon from '../icons/CloseIcon'


const ModalTitle = ({title}) => {
    return (
        <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">{title}</h1>
                <CloseModal className="">
                    <CloseIcon className="fill-current text-gray w-5 h-5" />
                </CloseModal>
            </div>
    )
}

export default ModalTitle
