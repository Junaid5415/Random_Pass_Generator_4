const passwordBox = document.querySelector('input');
const button = document.querySelector('#generate');

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz"; 
const number = "0123456789";
const symbol = "!@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

let desiredLength  = Number(prompt('Enter The Length Of Password & Click On Generate Password'))

function createPassword(){

    let password = "";
    while(desiredLength  > password.length){    
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    passwordBox.value = password
}

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}
