import { useContext } from "react";
import "./CreatePlaygroundModal.scss";
import { ModalContext } from "../ModalProvider";
import { PlaygroundContext } from "../PlaygrondProvider";

export const CreatePlaygroundModal = () => {
  const modalFeatures = useContext(ModalContext);
  const playgroundFeatures = useContext(PlaygroundContext);

  const closeModal = () => {
    modalFeatures.closeModal();
  };

  const onSubmitModal = (e) => {
    e.preventDefault();
    const folderName = e.target.folderName.value;
    const fileName = e.target.fileName.value;
    const language = e.target.language.value;
    playgroundFeatures.createNewPlayground({
      folderName,
      fileName,
      language,
    });
    closeModal();
  };

  return (
    <div className="modal-container">
      <form className="modal-body" onSubmit={onSubmitModal}>
        <span onClick={closeModal} className="material-icons close">
          close
        </span>
        <h1 className="modal-title">Create New Codeboard</h1>
        <div className="form-item">
          <label htmlFor="folderName">Folder Name</label>
          <input name="folderName" id="folderName" placeholder="Enter folder name" required />
        </div>
        <div className="form-item">
          <label htmlFor="fileName">File Name</label>
          <input name="fileName" id="fileName" placeholder="Enter file name" required />
        </div>
        <div className="form-item">
          <label htmlFor="language">Language</label>
          <select name="language" id="language" required>
            <option value="cpp">CPP</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Create Codeboard
        </button>
      </form>
    </div>
  );
};
