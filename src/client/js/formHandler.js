import axios from "axios";

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById("url").value || "";

    console.log("::: Form Submitted :::")

    if(!Client.checkForUrl) return alert("The entered url is incorrect");

    try {
        const { data: response } = await axios.post("http://localhost:8081/api", {url});
        if(response === "NO Data") return alert("The entered url is incorrect");
        document.getElementById("Agreement").innerHTML = `Agreement => ${response.agreement}`;
        document.getElementById("Subjectivity").innerHTML = `Subjectivity => ${response.subjectivity}`;
        document.getElementById("Confidence").innerHTML = `Confidence => ${response.confidence}`;
        document.getElementById("Irony").innerHTML = `Irony => ${response.irony}`;
        console.log(response);
    } catch(exp){
        alert("The entered url is not valid");
    }
    return true;
}

export { handleSubmit }
