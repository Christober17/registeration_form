const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-text"),
    login = document.querySelector(".login-link");
//new join



pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })

            }
        })
    })
})

signUp.addEventListener("click", () => {
    container.classList.add("active");

});

login.addEventListener("click", () => {
    container.classList.remove("active");
});

//document.addEventListener("DOMContentLoaded", function () {
//  logbtn = document.getElementById("logbtn");
document.addEventListener("DOMContentLoaded", function () {
    formslogin = document.getElementById("logbtn");


    // logbtn.addEventListener("click", e => {
    //     e.preventDefault();

    formslogin.addEventListener("click", e => {
        e.preventDefault();


        const email = document.querySelector(".email");
        const password = document.querySelector(".password");
        const error = document.querySelector(".error");



        if ((email.value === "")) {
            error.innerHTML = "Please fill the field";
            error.style.color = "red";
            error.style.fontSize = "12px";
            error.style.top = "10px";

        } else if (email.value.type = "text" && password.value === "") {
            error.innerHTML = "Please fill the Password field";
            error.style.color = "red";
            error.style.fontSize = "12px";
            error.style.top = "10px";

        } else if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) && password.value.length > 0) {
            error.innerHTML = "Please check the email Id and Password";
            error.style.color = "red";
            error.style.fontSize = "12px";
            error.style.top = "10px";
         } else if (((email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) && (password.value.length > 0)) && ((email.value.match("email")&&(password.value.match("password"))))) {
        
        error.innerHTML = "Success Email and Password";
            error.style.color = "green";
            error.style.fontSize = "14px";
            error.style.top = "10px";

            const data = {
                emailInput: email.value,
                passwordInput: password.value,
                applicationID:2
            };

            const xhr = new XMLHttpRequest();
            

            xhr.open("POST","URL",true);
            xhr.setRequestHeader("Content-Type", "application/json; charset-UTF8");
            xhr.onreadystatechange = () => {

                if (this.readyState === 4 && this.status === 200) {

                    console.log("Request succeeded!");

                }else{
                    console.log("error")
                }
                

            };

           xhr.send(JSON.stringify({
            Username: email.value,
            Password:password.value
           }));
           
        };























    });
});


