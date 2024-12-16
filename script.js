document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Form submitted successfully!");
        });
    });
});
