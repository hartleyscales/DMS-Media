// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeNavBtn = document.createElement('div');

closeNavBtn.classList.add('close-btn');
closeNavBtn.innerHTML = '&times;';
document.body.appendChild(closeNavBtn);

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    closeNavBtn.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    if (!navLinks.classList.contains('active')) {
        navLinks.style.animation = 'fadeOut 0.5s';
    }
});

closeNavBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
    closeNavBtn.classList.remove('active');
    document.body.style.overflow = 'auto';
    navLinks.style.animation = 'fadeOut 0.5s';
});

document.getElementById('scroll-button')?.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

// Modal functionality for portfolio items
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalVideo = document.getElementById("modal-video");
    const modalCloseBtn = document.getElementsByClassName("close")[0];

    const portfolioItems = document.querySelectorAll('.portfolio-item img, .portfolio-item video');

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log('Item clicked:', item.tagName, item.src);
            if (item.tagName.toLowerCase() === 'img') {
                modal.style.display = "block";
                modalImg.src = item.src;
                modalImg.style.display = "block";
                modalVideo.style.display = "none";
            } else if (item.tagName.toLowerCase() === 'video') {
                modal.style.display = "block";
                modalVideo.querySelector('source').src = item.querySelector('source').src;
                modalVideo.load();
                modalImg.style.display = "none";
                modalVideo.style.display = "block";
            }
        });
    });

    modalCloseBtn.onclick = function() {
        console.log('Close button clicked');
        modal.style.display = "none";
        modalVideo.pause();
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            console.log('Window clicked, closing modal');
            modal.style.display = "none";
            modalVideo.pause();
        }
    }
});

// Function to check screen size and switch media
function switchMedia() {
    const video = document.getElementById('hero-video');
    const image = document.getElementById('image');
    const mediaContainer = document.getElementById('media-container');

    if (window.innerWidth <= 768) { // Adjust the width breakpoint as needed
        video.style.display = 'none';
        image.style.display = 'block';
    } else {
        video.style.display = 'block';
        image.style.display = 'none';
    }
}

// Initial check
switchMedia();

// Add event listener to check when the window is resized
window.addEventListener('resize', switchMedia);