const hamburgerBtn = document.querySelector('.btn-hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const themeSlider = document.querySelector('.slider');

hamburgerBtn.addEventListener('click', toggleHideClass);
themeSlider.addEventListener('click', e => {


    if (document.body.dataset.theme === 'light' ||
        !document.body.dataset.theme
    ) {
        document.body.dataset.theme = 'dark';
    } else {
        document.body.dataset.theme = 'light';

    }
})


function toggleHideClass() {
    mobileNav.classList.toggle('hide');
}