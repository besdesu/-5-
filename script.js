const fileInput = document.getElementById('fileInput');
const gallery = document.getElementById('gallery');

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    gallery.innerHTML = ''; // Clear the gallery first

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});
