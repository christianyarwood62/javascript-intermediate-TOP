const form = document.querySelector('#form')

const emailInput = document.querySelector('#email-input');
const countryInput = document.querySelector('#country-input');
const passwordInput = document.querySelector('#password-input');
const passwordConfirmation = document.querySelector('#password-confirmation');

const emailError = document.querySelector('#email-input + span');
const countryError = document.querySelector('#country-input + span')
const passwordError = document.querySelector('#password-input + span');
const passwordConfirmationError = document.querySelector('#password-confirmation + span');

form.addEventListener('submit', (e) => {
    if (!emailInput.validity.valid) {
        showEmailError();
        e.preventDefault();
    }
    if (!countryInput.validity.valid) {
        showCountryError();
        e.preventDefault();
    }
    if (!passwordInput.validity.valid) {
        showPasswordError();
        e.preventDefault();
    }
    if (!passwordConfirmation.validity.valid) {
        confirmPasswordMatch();
        e.preventDefault();
    }

})

emailInput.addEventListener('input', () => {
    if (emailInput.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showEmailError();
    }
})

countryInput.addEventListener('input', () => {
    if (countryInput.validity.valid) {
        countryError.textContent = '';
        countryError.className = 'error';
    } else {
        showCountryError();
    }
})

passwordInput.addEventListener('input', () => {
    if (passwordInput.validity.valid) {
        passwordError.textContent = '';
        passwordError.className = 'error';
    } else {
        showPasswordError();
    }
})

// passwordConfirmation.addEventListener('input', () => {
//     if (passwordConfirmation.validity.valid) {
//         passwordConfirmationError.textContent = '';
//         passwordConfirmationError.className = 'error';
//     } else {
//         confirmPasswordMatch();
//     }
// })



function showEmailError() {
    if (emailInput.validity.valueMissing) {
        emailError.textContent = 'You need to enter an email!';
    } else if (emailInput.validity.typeMismatch) {
        emailError.textContent= 'Entered value needs to be an email!'
    } else if (emailInput.validity.tooShort) {
        emailError.textContent = `Email should be at least ${emailInput.minLength} characters; you entered ${emailInput.value.length}`
    }
    emailError.className = 'error active'; 
}

function showCountryError() {
    if (countryInput.validity.valueMissing) {
        countryError.textContent = 'You need to enter a country!';
    }
    countryError.className = 'error active';
}

function showPasswordError() {
    if (passwordInput.validity.valueMissing) {
        passwordError.textContent = 'You need to enter a Password'
    }
    passwordError.className = 'error active';
}

function confirmPasswordMatch() {
    if (passwordConfirmation !== passwordInput) {
        passwordConfirmationError.textContent = 'Passwords must match!';
    }
    passwordConfirmationError.className = 'error active';
}