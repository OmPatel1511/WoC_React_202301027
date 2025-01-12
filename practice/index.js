const button=document.getElementById("export")
const textArea=document.getElementsByTagName("textarea")[0];
button.addEventListener("click",()=>{
    console.log(textArea.value)
    const blob=new Blob([textArea.value],{type: 'text/plain'})
    const url=URL.createObjectURL(blob);
    console.log(url)
    const link=document.createElement("a");
    link.href=url;
    link.download="myfile.txt"
    link.click();
})