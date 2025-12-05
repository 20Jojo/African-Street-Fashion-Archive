/* -----------------------------------------
   1. LIGHTBOX VIEWER FOR GALLERY
----------------------------------------- */
const images = document.querySelectorAll('.gallery img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const img = document.createElement('img');
img.id = 'lightbox-img';
lightbox.appendChild(img);

const closeBtn = document.createElement('span');
closeBtn.classList.add('close');
closeBtn.innerHTML = '&times;';
lightbox.appendChild(closeBtn);

images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        img.src = image.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== img) {
        lightbox.style.display = 'none';
    }
});


/* -----------------------------------------
   2. SCROLL REVEAL ANIMATION
----------------------------------------- */
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    revealElements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


/* -----------------------------------------
   3. BACK TO TOP BUTTON
----------------------------------------- */
const backToTop = document.createElement('div');
backToTop.id = 'backToTop';
backToTop.innerHTML = '↑';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* -----------------------------------------
   4. ANIMATED HERO TEXT
----------------------------------------- */
const heroText = document.querySelector('.hero h1');
if (heroText) {
    heroText.style.opacity = 0;
    setTimeout(() => {
        heroText.style.transition = '1.3s ease';
        heroText.style.opacity = 1;
        heroText.style.transform = 'translateY(0)';
    }, 300);
}


/* -----------------------------------------
   5. MOBILE NAV MENU (Hamburger)
----------------------------------------- */
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('nav ul');

if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        burger.classList.toggle('active');
    });
}


/* -----------------------------------------
   6. HOMEPAGE IMAGE SLIDESHOW
----------------------------------------- */
let slideIndex = 0;

function autoSlide() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }
    setTimeout(autoSlide, 3000);
}

if (document.querySelector('.slide')) {
    autoSlide();
}


/* -----------------------------------------
   7. ACTIVE NAV LINK HIGHLIGHT
----------------------------------------- */
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
