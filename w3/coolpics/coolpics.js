document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');
    const viewer = document.querySelector('.viewer');
    const closeViewer = document.querySelector('.close-viewer');
    const viewedImage = document.querySelector('.viewed-image');
    const galleryImages = document.querySelectorAll('.gallery img');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('active'); 
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 700) {
            nav.classList.remove('active'); 
        }
    });

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            viewedImage.src = image.src;
            viewer.style.display = 'flex'; 
        });
    });

    closeViewer.addEventListener('click', () => {
        viewer.style.display = 'none'; 
    });

    viewer.addEventListener('click', (e) => {
        if (e.target === viewer) { 
            viewer.style.display = 'none'; 
        }
    });
});
