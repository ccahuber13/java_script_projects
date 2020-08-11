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
function checkEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// test() method  tests for a match in a string. Returns true if found, or false if not.
	// Here verifying it's a string and matching RegEx parameters.
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, 'Email is not valid');
	}
}

// Check required fields - On submit, will
function checkRequired(inputArr) {
	// Array.forEach(function(items to loop through) {code to run}) input
	inputArr.forEach(function (input) {
		// Check input value and trim the whitespace out
		if (input.value.trim() === '') {
			// Grabbed inputs by id, so can access id of elements.
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
}

// Check input length. Get passed in data from the function params.
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(
			input,
			`${getFieldName(input)} must be at least ${min} characters`
		);
	} else if (input.value.length > max) {
		showError(
			input,
			`${getFieldName(input)} must be less than ${max} characters`
		);
	} else {
		showSuccess(input);
	}
}

// Check if passwords match. If password 1 is NOT equal to password 2 show error.
function checkPasswordMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Passwords do not match');
	}
}

// Get field name and capitalize first letter
function getFieldName(input) {
	// Get first character in input iD and make upper case. Join back with rest of string by getting all characters
	// with slice after first character.
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners=========================

form.addEventListener('submit', function (e) {
	// Prevents default action. Prevent from submitting.
	e.preventDefault();

	// Pass in an array of all inputs to check
	checkRequired([username, email, password, password2]);

	// Checking lengths. Pass in input and min max lengths.
	checkLength(username, 3, 15);
	checkLength(password, 6, 25);
	checkEmail(email);
	checkPasswordMatch(password, password2);
});
