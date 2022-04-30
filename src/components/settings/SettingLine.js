import React from 'react'
import ArrowRight from '../../components/icons/ArrowRight'
import { ModalProvider } from '../../contexts/ModalContext'
import OpenModal from '../modals/OpenModal'

const SettingLine = ({ children, title,modalComponent }) => {
    return (
        <ModalProvider> 
            <OpenModal className="flex items-center space-x-6 border-b-2 border-light pb-4 cursor-pointer">
                {children}
                <span className="font-semibold flex-grow">{title}</span>
                <ArrowRight className="w-5 h-5 text-gray-normal" />
            </OpenModal>
            {modalComponent}  
        </ModalProvider>
    )
}

export default SettingLine
