const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const Email = document.getElementById('emailAddress')
const phoneNumber = document.getElementById('phoneNumber')
const Password = document.getElementById('Password')
const cPassword = document.getElementById('confirmPassword')
const sButtton = document.getElementById('buttonFlex')
const form = document.getElementById('form')
const errorMessage = document.getElementById('errorMessage')
const errorField = document.getElementById('errorField')
// ============================================================================== display 
const firstName2 = document.getElementById('firstName2Text')
const lastName2 = document.getElementById('lastName2Text')
const email2 = document.getElementById('emailAddress2Text')
const phoneNumber2 = document.getElementById('phoneNumber2Text')
const Password2 = document.getElementById('Password2Text')
const form2 = document.getElementById('form2')
// ============================================================================== regular expressions
const nameRegex = /^([A-Za-z]{2,20})$/ // for both first & last name
const emailRegex = /^([\w].+)[@]([a-z].+)[.]([a-z]{2,3})$/
const phoneNumberRegex = /^(\+?\(?[\d]{3}\)?)[-\s]([\d]{2})[-\s]([\d]{4})[-\s]([\d]{4})$/
const passwordRegex = /^([A-Za-z0-9.]{8,})$/ // for both password & confirm password

let data = {
    firstName:  '',
    lastName: '',
    Email: '',
    phoneNumber: '',
    Password: '',
    cPassword: ''
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if(firstName.value === ""){
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Please input your first name')
        errorMessage.innerHTML = '**Please input your first name**';
    }else if (firstName.value.match(nameRegex)) {
        data = {
            ...data, 
            firstName: firstName.value
        }
    }else{
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Invalid first name')
        errorMessage.innerHTML = '**Invalid first name**';
        return;
    }

    if(lastName.value === ""){
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Please input your last name')
        errorMessage.innerHTML = '**Please input your last name**';
    } else if (lastName.value.match(nameRegex)) {
        data = {
            ...data,
            lastName: lastName.value
        }
    } else{
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Invalid last name')
        errorMessage.innerHTML = '**Invalid last name**';
        return;
    }

    if(Email.value === ""){
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Please input an email address')
        errorMessage.innerHTML = '**Please input an email address**'
    }else if (Email.value.match(emailRegex)) {
        data = {
            ...data, 
            Email: Email.value
        }
    } else {
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Invalid email address')
        errorMessage.innerHTML =  "**Invalid email address**";
        return;
    }

    if(phoneNumber.value === ""){
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Please input your phone number')
        errorMessage.innerHTML = '**Please input your phone number**';
    } else if (phoneNumber.value.match(phoneNumberRegex)){
        data = {
            ...data,
            phoneNumber: phoneNumber.value
        }
    } else {
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Invalid phone number')
        errorMessage.innerHTML = '**Invalid phone number**';
        return;
    }

    if(Password.value === ""){
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Please input a password')
        errorMessage.innerHTML = '**Please input a password**';
    }else if(Password.value.match(passwordRegex)){
        data = {
            ...data, 
            Password: Password.value
        }
    }else {
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Invalid password')
        errorMessage.innerHTML = '**Invalid password**';
        return;
    }

    if(cPassword.value === ""){
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Please confirm your pasword')
        errorMessage.innerHTML = '**Please confirm your pasword**';
    } else if(cPassword.value != Password.value) {
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Passwords do not match')
        errorMessage.innerHTML = '**Passwords do not match**';
        return;
    }

        firstName2.innerHTML = data.firstName,
        lastName2.innerHTML = data.lastName,
        email2.innerHTML = data.Email,
        phoneNumber2.innerHTML = data.phoneNumber,
        Password2.innerHTML = data.Password
})

        /*errorMessage.style.color = "green";
        errorField.style.border = "2px solid green";
        errorField.style.backgroundColor = "#DAF7A6";
        errorMessage.innerHTML = '**Submitted Succesfully**';  */