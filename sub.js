document.addEventListener("DOMContentLoaded", function() {
    const mainContainer = document.querySelector(".main__container");
    const menuHTML = `
        <div class="menu">
            <h1>OTHER PROJECTS</h1>
            <div class="menu__data">
                <h2>Data analysis </h2>
                <a href="forest.html">Forestry Data Project</a>
                <h2>Design</h2>
                <a href="bag1.html">Denim patch round bag</a>
                <a href="des200.html">house design project</a>
            </div>
        </div>
    `;
    mainContainer.insertAdjacentHTML('beforeend', menuHTML);
});


document.addEventListener("DOMContentLoaded", function() {
    const mainContainer = document.querySelector(".navbar");
    const menuHTML = `
    <div class="navbar__container">
        <a href="/" id="navbar__logo">SOPHIE HU</a>
        <div class="navbar__toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <ul class="navbar__menu">
            <li class="navbar__item">
                <a href="/" class="navbar__links"> Home </a>
            </li>
            <li class="navbar__item">
                <a href="forest.html" class="navbar__links"> Data analysis </a>
            </li>
            <li class="navbar__item">
                <a href="bag1.html" class="navbar__links"> Product Design </a>
            </li>
            <li class="navbar__btn">
                <a href="https://www.linkedin.com/in/sophiejh" class="button"> LinkedIn </a>
            </li>
        </ul>
    </div>
    `;
    mainContainer.insertAdjacentHTML('beforeend', menuHTML);
});

