const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.createElement('div');

closeBtn.classList.add('close-btn');
closeBtn.innerHTML = '&times;';
document.body.appendChild(closeBtn);

// Toggle nav
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    closeBtn.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto'; // Disable scrolling when nav is open
    if (!navLinks.classList.contains('active')) {
        navLinks.style.animation = 'fadeOut 0.5s';
    }
});

document.getElementById('scroll-button').addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
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
