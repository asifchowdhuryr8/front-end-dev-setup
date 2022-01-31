import './utilities/inside_another_folder';
import './_optional_property';

const appTs: string = 'Main TypeScript file';
console.log(appTs);

// Dynamically Adding class to check is purgecss able to add it to the output
const paragraph = document.querySelector('p');
paragraph?.addEventListener('click', () => {
    paragraph?.classList.toggle('js-purgecss-test');
});
