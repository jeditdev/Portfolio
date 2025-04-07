// Get the modal and the close button
const modal = document.getElementById('projectModal');
const closeModal = document.getElementById('closeModal');

// Select all portfolio boxes
const portfolioBoxes = document.querySelectorAll('.portfolio-box');

// Event listener for each portfolio box
portfolioBoxes.forEach(box => {
    const title = box.querySelector('h4').textContent;
    const description = box.querySelector('p').textContent;

    // When clicking on the portfolio box
    box.addEventListener('click', () => {
        // Set modal title and description
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalDescription').textContent = description;

        // Show the modal
        modal.style.display = 'flex';
    });
});

// Close the modal when the user clicks on the close button
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
