// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
    while (true) {
        let characterLength = parseInt(prompt("How many characters? Must be between 8 and 128!"));

        if (characterLength >= 8 && characterLength <= 128) {
            let includeUppercase = confirm("Include uppercase letters?");
            let includeLowercase = confirm("Include lowercase letters?");
            let includeNumbers = confirm("Include numbers?");
            let includeSpecialCharacters = confirm("Include special characters?");

            return {
                characterLength,
                includeUppercase,
                includeLowercase,
                includeNumbers,
                includeSpecialCharacters
            };
        } else {
            alert("Invalid character length! Must be between 8 and 128.");
        }
    }
}

// Function for getting a random element from an array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


// Function to generate password with user input
function generatePassword() {
    const options = getPasswordOptions();
    const password = []; // Use an array to store characters for better handling

    // Ensure at least one character type is included, but if this time was not, it return an empty string
    if (!options.includeUppercase && !options.includeLowercase && !options.includeNumbers && !options.includeSpecialCharacters) {
        alert("Please select at least one character type to include in the password, otherwise create it in your mind.");
        return ""; // Return an empty string to prevent generating an invalid password
    }

    while (password.length < options.characterLength) {
        let characterTypes = [];

        if (options.includeUppercase) characterTypes.push(upperCasedCharacters);
        if (options.includeLowercase) characterTypes.push(lowerCasedCharacters);
        if (options.includeNumbers) characterTypes.push(numericCharacters);
        if (options.includeSpecialCharacters) characterTypes.push(specialCharacters);
        const chosenType = getRandom(characterTypes);
        password.push(getRandom(chosenType));
    }
    return password.join("");
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);