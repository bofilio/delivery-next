import React from 'react'
import ArrowRight from '../../components/icons/ArrowRight'
import { ModalProvider } from '../../contexts/ModalContext'
import OpenModal from '../modals/OpenModal'
import Modal from '../modals/Modal'

const SettingLine = ({ children, title,modalComponent }) => {
    return (
        <ModalProvider>
            
            <OpenModal className="flex items-center space-x-6 border-b-2 border-light pb-4 cursor-pointer">
                {children}
                <span className="font-semibold flex-grow">{title}</span>
                <ArrowRight className="w-5 h-5 text-gray" />
            </OpenModal>
            <Modal className="fixed top-0 left-0 w-full h-full   items-center justify-center z-40">
            {modalComponent}
            </Modal>
        </ModalProvider>
    )
}

export default SettingLine
