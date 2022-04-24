import './utilities/inside_another_folder';
import './components/header';
import './components/footer';
import './_optional_property';

const appTs: string = 'Main TypeScript file';
console.log(appTs);

// Dynamically Adding class to check if purgecss able to add it to the output
const homePara = document.querySelector('.home-para');
homePara?.addEventListener('click', () => {
    homePara?.classList.toggle('js-purgecss-test');
});

const aboutPara = document.querySelector('.about-para');
aboutPara?.addEventListener('click', () => {
    aboutPara?.classList.toggle('js-purgecss-test-2');
});
