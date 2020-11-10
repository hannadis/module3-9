let genderValue = male.checked ? "male" : "female"

// how to get the gender 
function getGender() {
    return document.querySelector('input[name="gender"]:checked')
}

//var fields = {};

document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.address = document.getElementById('address');
    fields.houseNumber = document.getElementById('houseNumber');
    fields.country = document.getElementById('country');
    fields.password = document.getElementById('password');
    fields.passwordCheck = document.getElementById('passwordCheck');
    fields.newsletter = document.getElementById('newsletter');
    fields.question = document.getElementById('question');
   })


function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

   //this is done so that a person has to add a number to housenumber
function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
} //isNAN is a js function that returns true if a value is not a number

//check password value 

function isPasswordValid(password) {
    if (password.length > 8) {
        return true; 
    }
    return false; 
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if(!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }
    return isFieldValid;
}


//isValid is to check the validity of the contact form 
function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.gender, isNotEmpty);
    valid &= fieldValidation(fields.address, isNotEmpty);
    valid &= fieldValidation(fields.country, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.houseNumber, isNumber);
    valid &= fieldValidation(fields.password, isPasswordValid);
    valid &= fieldValidation(fields.passwordCheck, isPasswordValid);
    valid &= fieldValidation(fields.question, isNotEmpty);
    valid &= arePasswordsEqual();
   
    return valid;
   }


//how to check if the password match 
function arePasswordsEqual() {
    if (fields.password.value == fields.passwordCheck.value) {
        fields.password.className = 'placeholderRed';
        fields.passwordCheck.className = 'placeholderRed';
        return true;
    }
    return false
}

//"user" to show that I am using  a class that is combined by multiple values 

class User {
    constructor(firstName, lastName, gender, address, country, email, newsletter, question) {
        this.firstName = firstName;
        this.lastName = lastName; 
        this.gender = gender; 
        this.address = address;
        this.country = country; 
        this.email = email; 
        this.newsletter = newsletter;
        this.question = question; 

    }
}


//how to send the information from the contact form 

function sendContact() {
    fields.gender = getGender();

    if (isValid()) { //used to check the if everything works 
        let user = new User(firstName.value, lastName.value, fields.gender.value, address.value, country.value, email.value, newsletter.checked);

        alert(`${user.firstName} thanks for registering.`)
    } else {
        alert("Error")
    
    }
}


