function submitForm(){
    const personName = document.getElementById("personName").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const email = document.getElementById("email").value;
    const qualification = document.getElementById("qualification").value;
    const collegeName = document.getElementById("collegeName").value;
    const year = document.getElementById("year").value;
    const branch = document.getElementById("branch").value;
    const sourceInfo = document.getElementById("sourceInfo").value;
    const executiveName = document.getElementById("executiveName").value;
    
    console.log("Person Name :"+ personName);
    console.log("Contact Number :"+ contactNumber);
    console.log("Email :"+ email);
    console.log("Qualification :"+ qualification);
    console.log("College/School Name :"+ collegeName);
    console.log("Year :"+ year);
    console.log("Branch :"+ branch);
    console.log("Source of Information :"+ sourceInfo);
    console.log("Executive Name :"+ executiveName);
    
    alert("form submitted");
    
    document.getElementById("personName").value = "";
    document.getElementById("contactNumber").value = "";
    document.getElementById("email").value = "";
    document.getElementById("qualification").value = "";
    document.getElementById("collegeName").value = "";
    document.getElementById("year").value = "";
    document.getElementById("branch").value = "";
    document.getElementById("sourceInfo").value = "";
    document.getElementById("executiveName").value = "";
}