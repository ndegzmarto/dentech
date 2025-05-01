// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the send button element
    const sendButton = document.getElementById('sendMailBtn');
    
    // Add click event listener to the button
    if (sendButton) {
        sendButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value || 'Contact from Website';
            const message = document.getElementById('message').value;
            
            // Form validation
            if (!name || !email || !message) {
                alert('Please fill out all required fields.');
                return;
            }
            
            // Create mailto link with form data
            const mailtoLink = `mailto:dentechexpertise33@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Message: ${message}`)}`;
            
            // Open email client
            window.location.href = mailtoLink;
        });
    }
});


 document.getElementById('mobile-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('nav-menu').classList.toggle('active');
});
        
// Close menu when clicking a link
document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.remove('active');
        document.getElementById('nav-menu').classList.remove('active');
    });
});