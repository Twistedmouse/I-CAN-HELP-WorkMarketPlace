const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const rememberMe = document.querySelector("#checkLogin").value;
  // double check how to get value from a checkbox then send info to the backend
  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password, rememberMe }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("everything is A OK!");
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

//rememberMe btn
if (rememberMe === true) {
  session.user_email = email.value;
}

const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstname = document.querySelector("#firstname").value.trim();
  const lastname = document.querySelector("#lastname").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const rememberMe = document.querySelector("#checkLogin").value;
  // double check how to get value from a checkbox then send info to the backend
  console.log(firstname, lastname, email, password);

  if (firstname && lastname && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        rememberMe,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("User SignUp complete.");
      document.location.replace("/login");
    } else {
      console.log(response.status);
      alert("Failed to sign up.");
    }
  }
};

if (document.querySelector(".login-btn") != null) {
  document
    .querySelector(".login-btn")
    .addEventListener("click", loginFormHandler);
}

if (document.querySelector(".signup-submit") != null) {
  document
    .querySelector(".signup-submit")
    .addEventListener("click", signupFormHandler);
}

// TODO: login page
// WHEN: input email and Password
// IF: does not exist in db prompt to use the sign up button or
// IF: does exist in db direct to home page
// NOTE: all email and password info needs to be stored in db (password must be incripted)

// WHEN: remember me button is pressed
// THEN: logs email into the email section when page is revisited

// WHEN: sign up button is pressed
// THEN: redirect to singUp.html

const signUpForm = document.querySelector("#signup-form");

if (signUpForm != null) {
  signUpForm.addEventListener("click", signUpPage);
}

function signUpPage() {
  document.location.replace("/signUp");
}

const takeBackToLogin = document.querySelector(".alreadyRegistered");

if (takeBackToLogin != null) {
  takeBackToLogin.addEventListener("click", alreadyRegisteredTakeBackToLogin);
}

function alreadyRegisteredTakeBackToLogin() {
  document.location.replace("/login");
}

// TODO: sign up page
// WHEN: All feilds are filled in and SIGN UP is pressed
// THEN: store info into db and create account.
// NOTE: confirm password should prompt if does not match password.
// NOTE: email should include @ and .com eg email@email.com

//WHEN: already registered button is pressed
//THEN: redirect to login page (index.html)
