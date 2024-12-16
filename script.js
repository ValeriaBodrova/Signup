document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Form submitted successfully!");
        });
    });
});

// Отримуємо елементи форми
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

// Отримуємо посилання для перемикання
const showLogin = document.getElementById("show-login");
const showSignup = document.getElementById("show-signup");

// Додаємо події для перемикання
showLogin.addEventListener("click", (e) => {
    e.preventDefault();
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
});

showSignup.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
});
