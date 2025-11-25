const logo = document.getElementById('top-image');
const bgImage1 = document.getElementById('bg-image-1');
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        logo.classList.add('scrolled'); //doesn't really stay fixed at the top when scrolled...
        bgImage1.classList.add('hidden');
        header.classList.add('scrolled');
    } else {
        logo.classList.remove('scrolled');
        bgImage1.classList.remove('hidden');
        header.classList.remove('scrolled');
    }
});