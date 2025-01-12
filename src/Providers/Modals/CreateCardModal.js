import { useContext } from "react";
import { v4 } from "uuid";
import "./CreatePlaygroundModal.scss";
import { ModalContext } from "../ModalProvider";
import { defaultCodes, PlaygroundContext } from "../PlaygrondProvider";

export const CreateCardModal = () => {
  const { closeModal, modalPayload } = useContext(ModalContext);
  const { createPlayground } = useContext(PlaygroundContext);

  const onSubmitModal = (e) => {
    e.preventDefault();
    const fileName = e.target.fileName.value;
    const language = e.target.language.value;
    const file = {
      id: v4(),
      title: fileName,
      language,
      code: defaultCodes[language],
    };
    createPlayground(modalPayload, file);
    closeModal();
  };

  return (
    <div className="modal-container">
      <form className="modal-body card-modal" onSubmit={onSubmitModal}>
        <span onClick={closeModal} className="material-icons close">
          close
        </span>
        <h1>Create New File</h1>
        <div className="form-item">
          <input name="fileName" placeholder="Enter file title" required />
        </div>
        <div className="form-item">
          <select name="language" required>
            <option value="cpp">CPP</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Create File
        </button>
      </form>
    </div>
  );
};
