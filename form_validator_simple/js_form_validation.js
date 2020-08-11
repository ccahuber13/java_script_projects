// Simple if / then statement validation BEFORE refactoring

// Bring everything in from the DOM - Grab form elements by ID
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Add event listener to the submit button .addEventListener('type', CallBack function(event object) {Code to run});

// Show input error message
function showError(input, message) {
	// Get the form control element by going to input and getting parent el.
	const formControl = input.parentElement;
	// Assign class to element. Overwrites so include classes already on el.
	formControl.className = 'form-control error';
	// Get the small css class by running querySelector on formControl.
	const small = formControl.querySelector('small');
	small.innerText = message;
}

// Show success outline
function showSuccess(input) {
	// Get the form control element by going to input and getting parent el.
	const formControl = input.parentElement;
	// Assign class to element. Overwrites so include classes already on el.
	formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// test() method  tests for a match in a string. Returns true if found, or false if not.
	// Here verifying it's a string and matching RegEx parameters.
	return re.test(String(email).toLowerCase());
}

// Event Listeners=========================

form.addEventListener('submit', function (e) {
	// Prevents default action. Prevent from submitting.
	e.preventDefault();

	if (username.value === '') {
		showError(username, 'Username is required');
	} else {
		showSuccess(username);
	}

	if (email.value === '') {
		showError(email, 'email is required');
	} else if (!isValidEmail(email.value)) {
		showError(email, 'Email is not valid');
	} else {
		showSuccess(email);
	}

	if (password.value === '') {
		showError(password, 'password is required');
	} else {
		showSuccess(password);
	}

	if (password2.value === '') {
		showError(password2, 'password2 is required');
	} else {
		showSuccess(password2);
	}
});
