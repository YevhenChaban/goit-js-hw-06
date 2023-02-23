const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitFormHandler);

function submitFormHandler(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  if (email === "" || password === "") {
    alert("All fields should be complited");
  } else {
    console.log(formData);
    event.currentTarget.reset();
  }
}
