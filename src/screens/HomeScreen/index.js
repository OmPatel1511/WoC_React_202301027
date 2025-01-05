import { useContext } from "react"
import "./index.scss"
import { RightComponent } from "./RightComponent"
import { modalConstants, ModalContext } from "../../Providers/ModalProvider"
import { Modal } from "../../Providers/Modals/Modal"
export const HomeScreen=()=>{
    const modalFatures=useContext(ModalContext);
    const openCreatePlaygroundModal=()=>{
        modalFatures.openModal(modalConstants.CREATE_PLAYGROUND);
    } 
    return(
        <div className="home-container">
            <div className="left-container">
                <div className="items-container">
                <img src="logo.png"/>
                <h1>Om-Code</h1>
                <h2>Code.Compile.Debug</h2>
                <button onClick={openCreatePlaygroundModal}>
                <span class="material-icons">
                    add
                </span>
                <span>
                Create Playground
                </span>
                </button>
                </div>
            </div>
            <RightComponent/>
            <Modal/>
        </div>
    )
}