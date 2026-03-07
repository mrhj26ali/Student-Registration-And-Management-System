// This function handles the visibility of the newsletter preference dropdown
function togglePreferences() {
    var check = document.getElementById("newsletterCheck");
    var pref = document.getElementById("prefSection");
    
    if (check && pref) {
        pref.style.display = check.checked ? "block" : "none";
    }
}

// Ensure the function runs once the page is fully loaded to set initial state
document.addEventListener("DOMContentLoaded", function() {
    console.log("Student Management System UI Loaded");
    
    // If the newsletter checkbox exists, initialize its state
    if (document.getElementById("newsletterCheck")) {
        togglePreferences();
    }
});