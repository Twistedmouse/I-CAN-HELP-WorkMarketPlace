// const loginFormHandler = async (event) => {
//     event.preventDefault();

//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();

//     if (email && password) {
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('Failed to log in.');
//       }
//     }
//   };

const signupFormHandler = async (event) => {
    event.preventDefault();

    const firstname = document.querySelector('#firstname').value.trim();
    const lastname = document.querySelector('#lastname').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (firstname && lastname && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ firstname, lastname, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log("User SignUp complete.");
            // document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};

//   document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);



// TODO: login page
// WHEN: input email and Password
// IF: does not exist in db prompt to use the sign up button or
// IF: does exist in db direct to home page
// NOTE: all email and password info needs to be stored in db (password must be incripted)

// WHEN: remember me button is pressed
// THEN: logs email into the email section when page is revisited

// WHEN: sign up button is pressed
// THEN: redirect to singUp.html

// TODO: sign up page
// WHEN: All feilds are filled in and SIGN UP is pressed
// THEN: store info into db and create account.
// NOTE: confirm password should prompt if does not match password.
// NOTE: email should include @ and .com eg email@email.com

//WHEN: already registered button is pressed
//THEN: redirect to login page (index.html)
