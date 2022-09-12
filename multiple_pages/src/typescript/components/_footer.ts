const footer = document.querySelector('#footer');
footer?.insertAdjacentHTML(
    'beforeend',
    `<ul>
        <li><a class="footer-link" href="about.html">About</a></li>
        <li><a class="footer-link" href="work.html">Work</a></li>
        <li><a class="footer-link" href="contact.html">Contact</a></li>
    </ul>
    <ul class="social-row">
        <li>
            <a class="footer-link" href="https://github.com/my-github-profile">
                <i class="fab fa-github"></i>
            </a>
        </li>
        <li>
            <a class="footer-link" href="https://twitter.com/my-twitter-profile">
                <i class="fab fa-twitter"></i>
            </a>
        </li>
        <li>
            <a class="footer-link" href="https://www.linkedin.com/in/my-linkedin-profile">
                <i class="fab fa-linkedin"></i>
            </a>
        </li>
    </ul>`,
);
