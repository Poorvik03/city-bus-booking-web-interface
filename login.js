function login() {
    const mobileNumber = document.getElementById("mobile-number").value;
    if (mobileNumber) {
        alert("Logging in with mobile number: " + mobileNumber);
        // Add login logic here
        window.location.href = routesel.html?$mobile number=${mobile number};
    } else {
        alert("Please enter your mobile number.");
    }
}

function loginWithEmail() {
    alert("Redirecting to email login...");
    // Add email login logic here
}
