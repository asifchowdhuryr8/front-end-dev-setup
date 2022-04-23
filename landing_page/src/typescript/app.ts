import './components/header';
import './components/footer';

// Dynamically Adding class to check if purgecss able to add it to the output
const paragraph = document.querySelector('p');
paragraph?.addEventListener('click', () => {
    paragraph?.classList.toggle('js-purgecss-test');
});
