import { createContext, useState } from "react";
import { CreatePlaygroundModal } from "./Modals/CreatePlaygroundModal";
export const ModalContext=createContext();
export const modalConstants={
    CREATE_PLAYGROUND:'CREATE_PLAYGROUND',
    CREATE_FOLDER:'CREATE_FOLDER',
    UPDATE_FOLDER_TITLE:'UPDATE_FOLDER_TITLE',
    UPDATE_FILE_TITLE:'UPDATE_FILE_TITLE',
    CREATE_CARD:'CREATE_CARD'
}
export const ModalProvider=({children})=>{
    const [modalType,setModalType]=useState(null);
    const [modalPayload,setModalPayload]=useState(null);
    const closeModal=()=>{
        setModalType(null);
        setModalPayload(null);
    }
    const modalFatures={
        openModal:setModalType,
        closeModal,
        activeModal:modalType,
        modalPayload,
        setModalPayload
    }

    return(
        <ModalContext.Provider value={modalFatures}>
            {children}
        </ModalContext.Provider>
    );
}