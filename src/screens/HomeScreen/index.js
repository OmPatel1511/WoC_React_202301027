import { useContext } from "react";
import "./index.scss";
import { RightComponent } from "./RightComponent";
import { modalConstants, ModalContext } from "../../Providers/ModalProvider";
import { Modal } from "../../Providers/Modals/Modal";

export const HomeScreen = () => {
  const modalFeatures = useContext(ModalContext);

  const openCreatePlaygroundModal = () => {
    modalFeatures.openModal(modalConstants.CREATE_PLAYGROUND);
  };

  return (
    <div className="home-container">
      <div className="left-container">
        <div className="items-container">
          <img src="logo.png" alt="Om-Code Logo" className="logo" />
          <h1 className="brand-name">Om-Code</h1>
          <h2 className="tagline">Innovate. Build. Succeed.</h2>
          <button className="primary-button" onClick={openCreatePlaygroundModal}>
            <span className="material-icons">add</span>
            Create Codeboard
          </button>
        </div>
      </div>
      <RightComponent />
      <Modal />
    </div>
  );
};