// Play button click sound
function playClickSound() {
  const sound = document.getElementById("clickSound");
  if (sound) sound.play();
}

// Save email and name to localStorage
function saveFormData(name, email) {
  localStorage.setItem("contactName", name);
  localStorage.setItem("contactEmail", email);
}

// Load saved contact info (optional: preload in future)
function loadContactInfo() {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const savedName = localStorage.getItem("contactName");
  const savedEmail = localStorage.getItem("contactEmail");

  if (savedName && nameField) nameField.value = savedName;
  if (savedEmail && emailField) emailField.value = savedEmail;
}

// Form validation and handling
document.addEventListener("DOMContentLoaded", () => {
  loadContactInfo();

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        status.style.color = "red";
        return;
      }

      // Save to localStorage
      saveFormData(name, email);

      // Show success feedback
      status.textContent = "Message sent successfully!";
      status.style.color = "green";

      // Optionally reset form
      form.reset();
    });
  }
});
