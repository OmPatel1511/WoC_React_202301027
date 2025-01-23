// const button=document.getElementById("export")
// const textArea=document.getElementsByTagName("textarea")[0];
// button.addEventListener("click",()=>{
//     console.log(textArea.value)
//     const blob=new Blob([textArea.value],{type: 'text/plain'})
//     const url=URL.createObjectURL(blob);
//     console.log(url)
//     const link=document.createElement("a");
//     link.href=url;
//     link.download="myfile.txt"
//     link.click();
// })
const languageCodeMap={
    cpp: 54,
    python: 92,
    javascript: 93,
    java: 91,
}

const code=
`#include<iostream>
using namespace std;
int main(){
    int a,b;
    cin>>a>>b;
    cout<<2*a+3*b<<"Output"<<endl;
    return 0; 
}`

const input="10 12";
const url = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '19c9db555cmshb18632328e560c1p1b1efbjsn9e19a5f51a9b',
		'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		language_id: 54,
		source_code: btoa(code),
		stdin: btoa(input)
	})
};


//1e9e1d0f-ab5a-46b8-b6ff-df158bf1d549
async function callApi() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (!result || !result.token) {
            console.error("Error: Invalid response from API. Result:", result);
            return;
        }

        const tokenId = result.token;
        let statusCode = 2; // Initialize statusCode for the loop
        let maxRetries = 20; // Limit retries to prevent infinite loops
        let retries = 0;
        
        while ((statusCode === 2 || statusCode === 1) && retries < maxRetries) {
            // Delay polling to give the API time to process
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const submissionResult = await getSubmission(tokenId);
            if (!submissionResult) {
                console.error("Error: Submission result is incomplete", submissionResult);
                break;
            }

            statusCode = submissionResult.status_id;
            console.log(`Status: ${statusCode}`, { submissionResult });

            retries++;
        }

        if (retries >= maxRetries) {
            console.error("Max retries reached. Stopping.");
        }
    } catch (error) {
        console.log("Error occurred", { error });
    }
}

//callApi();


async function getSubmission(tokenId){
    const url = `https://judge0-ce.p.rapidapi.com/submissions/${tokenId}?base64_encoded=true&fields=*`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '19c9db555cmshb18632328e560c1p1b1efbjsn9e19a5f51a9b',
		'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    const submissionResult = JSON.parse(result);  // Parse the string into an object
        return submissionResult;
	//console.log(result);
} catch (error) {
	console.error(error);
}
}
//getSubmission("1e9e1d0f-ab5a-46b8-b6ff-df158bf1d549")
// let a = "aravind";
// let a64=btoa(a);
// console.log(a,a64)

// let b=atob(a64);
// console.log(b)

