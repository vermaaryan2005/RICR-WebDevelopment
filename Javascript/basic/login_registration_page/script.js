function login(){
    console.log("Login Button Clicked");

    const em = document.getElementById("LoginEmail").value;
    const ps = document.getElementById("LoginPassword").value;
    console.log("Email : "+ em);
    console.log("password :"+ ps)

    alert("login done");

    document.getElementById("LoginEmail").value = "";
    document.getElementById("LoginPassword").value = "";
}

function registration(){
    console.log("Registration Button Clicked");

    const name = document.getElementById("PersonName").value;
    const ema = document.getElementById("RegistrationEmail").value;
    const pas = document.getElementById("RegisteredPassword").value;
    const conpas = document.getElementById("ConfirmPassword").value;
    alert("registration done");

    document.getElementById("PersonName").value = "";
    document.getElementById("RegistrationEmail").value = "";
    document.getElementById("RegisteredPassword").value = "";
    document.getElementById("ConfirmPassword").value = "";

}
