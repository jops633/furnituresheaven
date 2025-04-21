document.addEventListener("DOMContentLoaded", () => {
    // Buy button alert
    document.querySelectorAll(".buy-button").forEach(button => {
        button.addEventListener("click", () => {
            alert("Thank you for your interest! We will contact you soon.");
        });
    });

    // Contact form submission
    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Message sent successfully!");
        this.reset();
    });
});
