import '../../images/images.ts';
import '../../sass/pages/_base.scss';
import '../components/_header.ts';
import '../components/_footer.ts';
import '../components/_sticky_navigation.ts';

const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton?.addEventListener('click', () => {
    navbarLinks?.classList.toggle('js-navbar-links--active');
});
