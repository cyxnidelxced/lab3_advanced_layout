/* JavaScript for Image Tilt Effect */
const gridItems = document.querySelectorAll('.grid-item img');

gridItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left) / rect.width;
        const offsetY = (e.clientY - rect.top) / rect.height;
        
        const rotateX = (offsetY - 0.5) * 20;
        const rotateY = (offsetX - 0.5) * -20;
        
        item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'; 
    });
});
