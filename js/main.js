// Image Tilt Effect on Mouse Move (JavaScript)
const gridItems = document.querySelectorAll('.grid-item img');

gridItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left) / rect.width;
        const offsetY = (e.clientY - rect.top) / rect.height;
        
        const rotateX = (offsetY - 0.5) * 20;  // Tilt on X axis
        const rotateY = (offsetX - 0.5) * -20; // Tilt on Y axis
        
        item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'; // Reset tilt
    });
});

// Parallax Effect for Hero Section
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Parallax scrolling effect
});

// Random Quote Generator (Joker Quotes)
const quotes = [
    '"Why so serious?"',
    '"You either die a hero, or live long enough to see yourself become the villain."',
    '"Introduce a little anarchy."',
    '"The world is cruel, but I’m crueler."',
    '"Let’s put a smile on that face!"',
    '"Madness is the gift that keeps on giving."',
    '"I’m not a monster. I’m just ahead of the curve."'
];

const quoteElement = document.querySelector('.hero p'); // Target the paragraph in the hero section

// Function to change the quote randomly
function changeQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
}

// Change the quote every 5 seconds (or any interval you'd like)
setInterval(changeQuote, 5000); // 5000ms = 5 seconds

// Mouse Cursor Interaction
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX - 15}px`; // Adjust cursor position
    cursor.style.top = `${e.pageY - 15}px`;
});

document.addEventListener('mouseenter', (e) => {
    cursor.classList.add('active');
});

document.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
});

// Zoom-in Effect on Hover for Images
const images = document.querySelectorAll('.grid-item img');

images.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)'; // Slight zoom-in effect
        img.style.transition = 'transform 0.3s ease'; // Smooth zoom-in transition
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)'; // Reset zoom
    });
});