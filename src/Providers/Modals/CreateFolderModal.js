import "./createFolderModal.scss"
import "./CreatePlaygroundModal.scss"
export const CreateFolderModal = () => {
  return <div className="modal-container">
    <form className="modal-body">
    <span className="material-icons close">close</span>
    <h1>Create New Folder</h1>
    <div style={styles.inputContainer}>
    <input style={styles.input} placeholder="Enter Folder Name"/>
    <button style={styles.btn} type="submit">Create Folder</button>
    </div>
    </form>
  </div>
}
const styles={
    inputContainer:{
        display: 'flex',
        gap: 10
    },
    input:{
        flexGrow: 1,
        padding: 10
    },
    btn:{
        backgroundColor: '#241F21',
        border: 'none',
        borderRadius: 4,
        padding: '0px 10px',
        color:'white',
        cursor: 'pointer'
    }
}