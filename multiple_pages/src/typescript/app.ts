import './components/header';
import './components/footer';

// Dynamically Adding class to check if purgecss able to add it to the output
const homePara = document.querySelector('.home-para');
homePara?.addEventListener('click', () => {
    homePara?.classList.toggle('js-purgecss-test');
});

// Dynamically Adding class to check if purgecss able to add it to the output
const aboutPara = document.querySelector('.about-para');
aboutPara?.addEventListener('click', () => {
    aboutPara?.classList.toggle('js-purgecss-test-2');
});
