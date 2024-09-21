// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('pollForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const selectedOption = document.querySelector('input[name="poll"]:checked');

    if (selectedOption) {
        alert(`Thank you for your vote! You selected: ${selectedOption.value}`);
    } else {
        alert('Please select an option before submitting.');
    }

    this.reset();
});

