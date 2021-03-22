document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { deplay: 500 });
ScrollReveal().reveal('.cards-banner-one', { deplay: 500 });
ScrollReveal().reveal('.cards-banner-two', { deplay: 500 });