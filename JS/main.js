let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick    = () => {
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('active')
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.toggle("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');
}

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right'});



// Function to handle the download of the CV
function downloadCV() {
    // The relative path to the CV file in your folder
    const cvPath = 'assets/cv/Dimaano (Resume).pdf';  // Make sure this path is correct
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = cvPath;  // Relative path to the CV file
    link.download = 'Dimaano (Resume).pdf';  // The name of the downloaded file
    
    // Programmatically click the link to trigger the download
    link.click();
}

// Event listener for the "Download CV" button
document.getElementById('downloadCV').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent default behavior (e.g., navigating to the link)
    downloadCV();  // Call the function to trigger the download
});