// password output box
let output_password_box = document.querySelector('#output-password');

// buttons
let generate_btn = document.querySelector('#generate-btn')
let copy_btn = document.querySelector('#copy-btn');

// show error
let show_error = document.querySelector('#show-error')

// show copied message
let copied_message = document.querySelector('#copied-message')

// password complexity features inputbox
let password_length_input = document.querySelector('#password-length')
let uppercase_letters_input = document.querySelector('#uppercase-letters')
let lowercase_letters_input = document.querySelector('#lowercase-letters');
let numbers_input = document.querySelector('#numbers')
let special_characters_input = document.querySelector('#special-characters')

// ---------------------------

//  array for storing value witch will be used to increse password complexity
let uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numbers = ['1', '2','3','4','5','6','7','8','9', '0']
const specialCharacters = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '{', '}', '[', ']', '|', '\\', '\'', '<', '>', ',', '.', '?', '/'
];






// main funciton for generating password
function generatePassword(length){
     let finalPassword = "";

    let tempPassword = "";  //* This  is temporary password where we will store complexity pattern

    // this function is for uppercase letters complexity 
function randomUppercaseLetters(array){
    for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * (array.length - 1) ) ;
        tempPassword += uppercaseLetters[randomIndex]
    };
}

    // this function is for lowercase letters complexity
function randomLowercaseLetters(array){
    for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * (array.length - 1) ) ;
        tempPassword += lowercaseLetters[randomIndex]
    };
}

    // this function is for numbers complexity
function randomNumbers(array){
    for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * (array.length - 1) ) ;
        tempPassword += numbers[randomIndex]
    };
}

    // this function is for special characters complexity
function randomSpecialCharacters(array){
    for(i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * (array.length - 1));
        tempPassword += specialCharacters[randomIndex];
    }
}


// This function will create random password with complexity pattern include by user.
function finalCombinedPassword(tempPassword){
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * (tempPassword.length - 1))
        finalPassword += tempPassword[randomIndex]
    }
}






// This ternary operators will call specific function which complexity a user want to include in password.
uppercase_letters_input.checked ? randomUppercaseLetters(uppercaseLetters) : console.log('not checked uppercase letters input');
lowercase_letters_input.checked ? randomLowercaseLetters(lowercaseLetters) : console.log('not checked lowercase letters input')
numbers_input.checked ? randomNumbers(numbers) : console.log('not checked number input box')
special_characters_input.checked ? randomSpecialCharacters(specialCharacters) : console.log('not checked special characters input box')

    
finalCombinedPassword(tempPassword)// final password with all complexity a user wnat to include in password

output_password_box.value = finalPassword; // final password printed in output box

}


// if user don't want to include any complexity in password then this function will call and create 8 digit password where all char will be number
let randomPassword = "";
function defaultGenratePassword(length){
    randomPassword = ""
        // console.log('all not checked')
        for(i = 0; i < length ; i++){
            randomPassword += Math.floor(Math.random() * 10)
        }
    output_password_box.value = randomPassword;
}


// this function will copy password in clipboard
function copyToClipboard(){
    const copyText = output_password_box.value
//   navigator.clipboard.writeText(resultEl.textContent);

    navigator.clipboard.writeText(copyText);
    copied_message.innerHTML = "copied ✅";
}




// ----------- 

// event listener on generate button
generate_btn.addEventListener("click", () => {
    show_error.innerHTML = "";
    copied_message.innerHTML = ""
    const passwordLength = password_length_input.value;
    
    if (passwordLength >= 8 && passwordLength <= 20) {
        if(!uppercase_letters_input.checked && !lowercase_letters_input.checked && !numbers_input.checked && !special_characters_input.checked){
            show_error.innerHTML = "Select Atleast One Complexity";
        }else{
            generatePassword(passwordLength);
        }
    } 
    else if(passwordLength > 0 && (passwordLength < 8 || passwordLength > 20)){
      show_error.innerHTML = "Enter Password Length between 8 and 20 characters !!"  
    }
    else {
        if(passwordLength == 0 &&(!uppercase_letters_input.checked && !lowercase_letters_input.checked && !numbers_input.checked && !special_characters_input.checked)){
            defaultGenratePassword(8)
        }
        else{
            show_error.innerHTML = "Enter Password Length !!";
        }
    }
});


