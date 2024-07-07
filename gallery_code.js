const galleryImages = document.getElementById('gallery').querySelectorAll('img');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'block';

        const lightboxImage = lightbox.querySelector('img');
        lightboxImage.src = image.src;
    });
});

// Opcional: funcionalidad para cerrar la galería

document.addEventListener('click', (event) => {
    const lightbox = document.getElementById('lightbox');
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
