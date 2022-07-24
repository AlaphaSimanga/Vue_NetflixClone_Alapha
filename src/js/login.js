//get the input via dom api

let email = document.getElementById("Email");
let password = document.getElementById("Password");

//localstorage
let getEmail = localStorage.getItem("email");


//class for user info

class user {
    constructor(email_address, password) {
        this._email_address = email_address;
        this._password = password;
    }

    get email_address() {
        return this._email_address;
    }

    get password() {
        return this._password;
    }
}

myButton.addEventListener('click', function(){
    localStorage.setItem('email', getEmail.value);
})

document.getElementById("myButton").onclick = function () {
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;
    if (email == "") {
        alert("Please enter a valid email or phone number");
        return false;
    }
    if (password == "") {
        alert("Please enter a valid password");
        return false;
    } 
        return window.location.assign('home.html');
    
    // window.location.assign ('home.html');
};