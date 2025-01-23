import { useRef, useState } from "react"
import "./EditorContainer1.scss"
import Editor from "@monaco-editor/react"
const editorOptions={
    fontSize: 18,
    wordWrap: 'on'
}
const fileExtensionMapping={
    cpp:'cpp',
    javascript:'js',
    python:'py',
    java:'java'
}
const defaultCodes={
    'cpp':`#include <iostream>
int main(){
    std::cout<<"Hello World";
    return 0;
}`,
    'javascript':`console.log("hello javascript")`,
    'python':`print("hello python")`,
    "java":`public class Main{
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`
}
const getDefaultCode=(language)=>{
    const nCode=defaultCodes[language];
    return nCode;
}

export const EditorContainer1=({runCode})=>{
    const [code,setCode]=useState(()=>{
        return getDefaultCode('cpp');
    });
    const [language,setLanguage]=useState('cpp');
    const [theme,setTheme]=useState('vs-dark');
    const codeRef=useRef(code);
    const [isFullScreen,setIsFullScreen]=useState(false);
    const onChangeCode=(newCode)=>{
            codeRef.current=newCode;
    }
    const importCode = (event) => {
        const file = event.target.files[0];
        if (!file) return; // If no file is selected, exit early
    
        const validExtensions = ['cpp', 'js', 'py', 'java']; // Allowed extensions
        const fileExtension = file.name.split('.').pop(); // Extract file extension
    
        if (validExtensions.includes(fileExtension)) {
            const fileReader = new FileReader();
            fileReader.readAsText(file);
            fileReader.onload = function (value) {
                const importedCode = value.target.result;
                setCode(importedCode);
                codeRef.current = importedCode;
            };
        } else {
            alert("Please choose a valid program file (e.g., .cpp, .js, .py, .java)");
        }
    };
    

    const exportCode=()=>{
        const codeValue=codeRef.current?.trim();
        if(!codeValue){
            alert("Please Type Some code in the editor before exporting");
        }
        const codeBlob=new Blob([codeValue],{type: "text/plain"})
        const downloadUrl=URL.createObjectURL(codeBlob);
        const link=document.createElement("a");
        link.href=downloadUrl;
        link.download=`code.${fileExtensionMapping[language]}`
        link.click();
    }
    const onChangeLanguage=(e)=>{
        const language=e.target.value;
        const newCode=getDefaultCode(language);
        setCode(newCode);
        codeRef.current=newCode;
        setLanguage(e.target.value);
    }
    const onChangeTheme=(e)=>{
        setTheme(e.target.value);
    }
    const fullScreen=()=>{
        setIsFullScreen(!isFullScreen);
    }
    const onRunCode=()=>{
        runCode({code:codeRef.current,language})
    }
    return (
        <div className="root-editor-container" style={isFullScreen ? styles.fullScreen:{}}>
            <div className="editor-header1">
                <div className="editor-right-container">
                    <select onChange={onChangeLanguage} value={language}>
                        <option value="cpp">CPP</option>
                        <option value="javascript">javascript</option>
                        <option value="java">java</option>
                        <option value="python">python</option>
                    </select>
                    <select onChange={onChangeTheme} value={theme}>
                        <option value="vs-dark">vs-dark</option>
                        <option value="vs-light">vs-light</option>
                    </select>
                </div>
            </div>
            <div className="editor-body">
                <Editor
                    height={"100%"}
                    language={language}
                    options={editorOptions}
                    theme={theme}
                    onChange={onChangeCode}
                    value={code}
                />
            </div>
            <div className="editor-footer">
                <button className="btn" onClick={fullScreen}>
                    <span className="material-icons">fullscreen</span>
                    <span>{isFullScreen?"Minimize":"Full Screen"}</span>
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
                <button className="btn" onClick={onRunCode}>
                    <span className="material-icons">play_arrow</span>
                    <span>Run Code</span>
                </button>
            </div>
        </div>
    );
}

const styles={
    fullScreen: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        zIndex:10
    }
}