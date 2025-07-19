// Prompt user name for welcome
const userName = prompt("Welcome! Please enter your name:");
if (userName && userName.trim()) {
    document.getElementById("user-name").textContent = userName;
}

// Handle form submission
document.getElementById("message-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message-text").value.trim();

    // Enhanced validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[\+]?[0-9\s\-\(\)]{8,15}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address (example: name@email.com)");
        document.getElementById("email").focus();
        return;
    }

    if (!phonePattern.test(phone)) {
        alert("Phone number should contain 8-15 digits and may include +, spaces, hyphens, or parentheses.");
        document.getElementById("phone").focus();
        return;
    }

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    if (message.length < 10) {
        alert("Please provide a more detailed message (at least 10 characters).");
        document.getElementById("message-text").focus();
        return;
    }

    // Display success message and submitted data
    const now = new Date();
    const formattedTime = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    document.getElementById("current-time").textContent = formattedTime;
    document.getElementById("submitted-name").textContent = name;
    document.getElementById("submitted-email").textContent = email;
    document.getElementById("submitted-phone").textContent = phone;
    document.getElementById("submitted-birthdate").textContent = birthdate;
    document.getElementById("submitted-gender").textContent = gender.value;
    document.getElementById("submitted-message").textContent = message;

    // Show submitted data with animation
    const submittedData = document.getElementById("submitted-data");
    submittedData.classList.add("show");
    
    // Scroll to the submitted data
    submittedData.scrollIntoView({ behavior: 'smooth' });

    // Reset form
    this.reset();
});

// Enhanced section toggler with smooth transitions
function showSection(sectionId) {
    const sections = ["home", "profile", "achievement", "message"];
    
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (id === sectionId) {
            section.classList.remove("section-hidden");
            // Smooth scroll to section
            setTimeout(() => {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        } else {
            section.classList.add("section-hidden");
        }
    });

    // Update active navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.style.background = '';
        link.style.color = '';
    });
    
    event.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    event.target.style.color = 'white';
}

// Add smooth scrolling and header effects
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.animation = 'fadeIn 1s ease';
});
