import { createContext, useState } from "react";
import { CreatePlaygroundModal } from "./Modals/CreatePlaygroundModal";
export const ModalContext=createContext();
export const modalConstants={
    CREATE_PLAYGROUND:'CREATE_PLAYGROUND',
    CREATE_FOLDER:'CREATE_FOLDER'
}
export const ModalProvider=({children})=>{
    const [modalType,setModalType]=useState(null);
    const closeModal=()=>{
        setModalType(null);
    }
    console.log({modalType});
    const modalFatures={
        openModal:setModalType,
        closeModal,
        activeModal:modalType
    }

    return(
        <ModalContext.Provider value={modalFatures}>
            {children}
        </ModalContext.Provider>
    );
}