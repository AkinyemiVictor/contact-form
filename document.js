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
const lastName2 = document.getElementById('surnName2Text')
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

    if(firstName.value.match(nameRegex)){
        data = {
            ...data, 
            firstName: firstName.value
        }

    }else {
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Invalid First Name')
        errorMessage.innerHTML = 'Invalid First Name';
    }

    if(lastName.value.match(nameRegex)){
        data = {
            ...data,
            lastName: lastName.value
        } 
    } else {
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Invalid Last Name')
        errorMessage.innerHTML = 'Invalid Last Name';
    }

    if(Email.value.match(emailRegex)){
        data = {
            ...data, 
            Email: Email.value
        }

    }else {
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Invalid Email Address')
        errorMessage.innerHTML =  "Invalid Email Address";
    }

    if(phoneNumber.value.match(phoneNumberRegex)){
        data = {
            ...data,
            phoneNumber: phoneNumber.value
        }
    } else {
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Invalid Phone Number')
        errorMessage.innerHTML = 'Invalid Phone Number';
    }

    if(Password.value.match(passwordRegex)){
        data = {
            ...data, 
            Password: Password.value
        }
    }else {
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Invalid Password')
        errorMessage.innerHTML = 'Invalid Password';
    }

    if(cPassword.value.match(passwordRegex)){
        data = {
            ...data,
            cPassword: cPassword.value
        }
    } else {
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        console.log('Invalid Password')
        errorMessage.innerHTML = 'Invalid Password';
    }

    if(cPassword.value != Password.value){
        errorMessage.style.color = "red";
        errorField.style.border = "2px solid red";
        errorField.style.backgroundColor = "#FFD6D6";
        errorMessage.innerHTML = '**Passwords do not match**';
        return false;
     } else {
        errorMessage.style.color = "green";
        errorField.style.border = "2px solid green";
        errorField.style.backgroundColor = "#DAF7A6";
        errorMessage.innerHTML = '**Submitted Succesfully**';
        return true;
     }
}/*, function display(){
firstName2.innerHTML = data[0],
lastName2.innerHTML = data[1],
email2.innerHTML = data[2],
phoneNumber2.innerHTML = data[3],
Password2.innerHTML = data[4],
}*/)

    
             //  firstName = document.getElementById('firstName').value;
    // document.getElementById('firstName2').value = firstName;
   
