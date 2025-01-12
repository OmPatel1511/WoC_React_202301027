import { useState } from "react"
import "./EditorContainer.scss"
import Editor from "@monaco-editor/react"
const editorOptions={
    fontSize: 18,
    wordWrap: 'on'
}
export const EditorContainer=()=>{
    const [code,setCode]=useState('');
    const onChangeCode=(newCode)=>{
            setCode(newCode);
    }
    const importCode=(event)=>{
        const file=event.target.files[0];
        const fileType=file.type.includes("text")
        if(fileType){
            const fileReader=new FileReader();
            fileReader.readAsText(file);
            fileReader.onload=function(value){
                const importedCode=value.target.result;
                setCode(importedCode);
            }
        }
        else{
            alert("Please choose a program file");
        }
    }
    const exportCode=()=>{

    }
    return (
        <div className="root-editor-container">
            <div className="editor-header">
                <div className="editor-left-container">
                    <b className="title">{"title of the card"}</b>
                    <span className="material-icons">edit</span>
                    <button>Save Code</button>
                </div>
                <div className="editor-right-container">
                    <select>
                        <option value="cpp">CPP</option>
                        <option value="javascript">javascript</option>
                        <option value="java">java</option>
                        <option value="python">python</option>
                    </select>
                    <select>
                        <option value="vs-dark">vs-dark</option>
                        <option value="vs-light">vs-light</option>
                    </select>
                </div>
            </div>
            <div className="editor-body">
                <Editor
                    height={"100%"}
                    language={"javascript"}
                    options={editorOptions}
                    theme={'vs-dark'}
                    onChange={onChangeCode}
                    value={code}
                />
            </div>
            <div className="editor-footer">
                <button className="btn">
                    <span className="material-icons">fullscreen</span>
                    <span>Full Screen</span>
                </button>
                <label htmlFor="import-code" className="btn">
                    <span className="material-icons">cloud_download</span>
                    <span>Import Code</span>
                </label>
                <input type="file" id="import-code" style={{display:'none'}} onChange={importCode} />
                <button className="btn" onClick={exportCode}>
                    <span className="material-icons">cloud_upload</span>
                    <span>Export Code</span>
                </button>
                <button className="btn">
                    <span className="material-icons">play_arrow</span>
                    <span>Run Code</span>
                </button>
            </div>
        </div>
    )
}