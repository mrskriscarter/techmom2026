
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    // Require at least one contact method
    if (email === "" && phone === "") {
        alert("Please enter an email or phone number.");
        return;
    }

    // Clear previous confirmation
    status.replaceChildren();

    const heading = document.createElement("h3");
    heading.textContent = "Form Submitted!";
    status.appendChild(heading);

    const details = [
        ["Name", name],
        ["Email", email || "Not provided"],
        ["Phone", phone || "Not provided"],
        ["Reason", subject],
        ["Message", message]
    ];

    details.forEach(function (detail) {
        const paragraph = document.createElement("p");
        const label = document.createElement("strong");

        label.textContent = detail[0] + ": ";
        paragraph.appendChild(label);
        paragraph.appendChild(
            document.createTextNode(detail[1])
        );

        status.appendChild(paragraph);
    });

    form.reset();
});



const contactOptions = document.querySelectorAll(
    'input[name="contactMethod"]'
);

const emailField = document.getElementById("emailField");
const phoneField = document.getElementById("phoneField");

const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

contactOptions.forEach(function (option) {

    option.addEventListener("change", function () {

        const useEmail = this.value === "email";

        emailField.hidden = !useEmail;
        phoneField.hidden = useEmail;

        emailInput.required = useEmail;
        phoneInput.required = !useEmail;

    });

});
