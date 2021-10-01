let divLinkWrapper;

document.addEventListener('DOMContentLoaded', function () {
    divLinkWrapper = document.getElementById('link-wrapper');
  
    createAllLinks();
    setLinkToActive();
});

function createAllLinks() {
    addLink('/da', 'Om mig');
    addLink('/da/courses', 'Kurser');
    addLink('/da/portfolio', 'Portfolie');
}

function addLink(link, text) {
    const newLink = document.createElement('a');

    newLink.href = link;
    newLink.innerHTML = text;
    newLink.classList.add('link', 'flex-center')
    newLink.id = link; /*to get element later*/

    divLinkWrapper.appendChild(newLink);
}

function setLinkToActive() {
    const activeLinkId = document.getElementById('navbar-script').getAttribute('activeLink');
    const activeLink = document.getElementById(activeLinkId);
    activeLink.classList.add('active');
}

/*
<div id="nav-bar">
    <div id="link-wrapper">
        <a class="link flex-center active" href="/da">Om mig</a>
        <a class="link flex-center" href="/da/courses">Kurser</a>
        <a class="link flex-center" href="/da/applications">Programmer</a>
    </div>
</div>
*/

