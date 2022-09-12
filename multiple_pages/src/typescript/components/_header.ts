const header = document.querySelector('#header');
header?.insertAdjacentHTML(
    'beforeend',
    `<nav>
        <ul>
            <li><a class="header-link" href="about.html">About</a></li>
            <li><a class="header-link" href="work.html">Work</a></li>
            <li><a class="header-link" href="contact.html">Contact</a></li>
        </ul>
    </nav>`,
);
