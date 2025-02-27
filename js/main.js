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
