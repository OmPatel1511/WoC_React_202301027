import { createContext, useContext, useState,useEffect } from "react"
import {v4} from 'uuid'
export const PlaygroundContext=createContext();
const initialData=[
    {
        id:v4(),
        title:'Spring Boot',
        files:[
            {
                id:v4(),
                title:'index',
                code:`cout<<"hello world":`,
                language:'cpp'
            }
        ]
    },
    {
        id:v4(),
        title:'Frontend',
        files:[
            {
                id:v4(),
                title:'test',
                code:`console.log("hello frontend");`,
                language:'javascript'
            }
        ]
    }
]
const defaultCodes={
    ['cpp']:`#include <iostream>
int main(){
    std::cout<<"Hello World";
    return 0;
}`,
    ['javascript']:`console.log("hello javascript")`,
    ['python']:`print("hello python")`,
    ['java']:`public class Main{
	public static void main(String[] args) {
		System.out.println("Hello World");
	}
}`
}
export const PlaygroundProvider=({children})=>{
    const [folders,setFolders]=useState(()=>{
        const localData=localStorage.getItem('data')
        if(localData){
            return JSON.parse(localData);
        }
        return initialData;
    });
    const createNewPlayground=(newPlayground)=>{
        const {fileName,folderName,language}=newPlayground;
        const newFolders=[...folders];
        newFolders.push({
            id:v4(),
            title:folderName,
            files:[
                {
                    id:v4(),
                    title:fileName,
                    code:defaultCodes[language],
                    language
                }
            ]
        })
        localStorage.setItem('data',JSON.stringify(newFolders));
        setFolders(newFolders);
    }
    useEffect(() => {
        if(!localStorage.getItem('data')){
            localStorage.setItem('data',JSON.stringify(folders));
        }
    }, [])
    
    const playgroundFeatures={
        folders,
        createNewPlayground
    }

    return(
        <PlaygroundContext.Provider value={playgroundFeatures}>
            {children}
        </PlaygroundContext.Provider>
    )
}