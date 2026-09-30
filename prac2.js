function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");

    let valid = true;

    // Clear previous errors
    nameError.innerHTML = "";
    emailError.innerHTML = "";

    // Name validation
    let nameRegex = /^[A-Za-z ]+$/;

    if (name.length < 3) {
        nameError.innerHTML = "Name must be at least 3 characters long.";
        valid = false;
    } 
    else if (!nameRegex.test(name)) {
        nameError.innerHTML = "Name can contain only letters and spaces.";
        valid = false;
    }

    // Email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.innerHTML = "Please enter a valid email address.";
        valid = false;
    }

    // If everything is valid
    return valid;
}


