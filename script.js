let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.createElement('div');

closeBtn.classList.add('close-btn');
closeBtn.innerHTML = '&times;';
document.body.appendChild(closeBtn);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down
        navbar.style.top = '-80px'; // Adjust this value based on your navbar height
    } else {
        // Scroll up
        navbar.style.top = '0';
    }

    lastScrollTop = scrollTop;
});

// Toggle nav
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    closeBtn.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto'; // Disable scrolling when nav is open
    if (!navLinks.classList.contains('active')) {
        navLinks.style.animation = 'fadeOut 0.5s';
    }
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
    closeBtn.classList.remove('active');
    document.body.style.overflow = 'auto'; // Enable scrolling when nav is closed
    navLinks.style.animation = 'fadeOut 0.5s';
});

// Modal functionality for expanding images and videos
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalVideo = document.getElementById('modal-video');
const items = document.getElementsByClassName('portfolio-item');

for (let i = 0; i < items.length; i++) {
    items[i].onclick = function () {
        modal.style.display = 'block';
        if (this.getElementsByTagName('img').length > 0) {
            modalImg.src = this.getElementsByTagName('img')[0].src;
            modalImg.style.display = 'block';
            modalVideo.style.display = 'none';
        } else if (this.getElementsByTagName('video').length > 0) {
            modalVideo.src = this.getElementsByTagName('video')[0].getElementsByTagName('source')[0].src;
            modalVideo.style.display = 'block';
            modalImg.style.display = 'none';
        }
    };
}

const span = document.getElementsByClassName('close')[0];

span.onclick = function () {
    modal.style.display = 'none';
    modalVideo.pause();
};

// Scroll navigation arrows functionality
const scrollContainers = document.querySelectorAll('.portfolio-scroll');

scrollContainers.forEach((container, index) => {
    const prevButton = container.parentElement.querySelector('.prev');
    const nextButton = container.parentElement.querySelector('.next');

    prevButton.addEventListener('click', () => {
        container.scrollBy({
            left: -container.clientWidth,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        container.scrollBy({
            left: container.clientWidth,
            behavior: 'smooth'
        });
    });

    container.addEventListener('scroll', () => {
        const scrollLeft = container.scrollLeft;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        prevButton.style.display = scrollLeft > 0 ? 'flex' : 'none';
        nextButton.style.display = scrollLeft < maxScrollLeft ? 'flex' : 'none';
    });

    // Initialize the buttons' visibility
    container.dispatchEvent(new Event('scroll'));
});
