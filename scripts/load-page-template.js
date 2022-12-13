function loadSidebar() {
    let sidebarElement = document.getElementsByClassName('sidebar').item(0);
    sidebarElement.innerHTML = `
        <div class="sidebar__logo">
        <img src="images/jp11-logo.png" alt="Logo">
    </div>
    <nav class="sidebar__navigation">
        <ul class="sidebar__navigation__list">
            <li class="sidebar__navigation__item"><a href="java-fundamentals.html">Java fundamentals</a></li>
            <li class="sidebar__navigation__item"><a href="annotations.html">Annotations</a></li>
            <li class="sidebar__navigation__item"><a href="generics-and-collections.html">Generics and collections</a></li>
            <li class="sidebar__navigation__item"><a href="functional-programming.html">Functional programming</a></li>
            <li class="sidebar__navigation__item"><a href="exceptions-assertions-localization.html">Exceptions, assertions, localization</a></li>
            <li class="sidebar__navigation__item"><a href="modular-applications.html">Modular applications</a></li>
            <li class="sidebar__navigation__item"><a href="concurrency.html">Concurrency</a></li>
            <li class="sidebar__navigation__item"><a href="io.html">I/O</a></li>
            <li class="sidebar__navigation__item"><a href="nio-2.html">NIO.2</a></li>
        </ul>
    </nav>
    `;
}


function loadHeader() {
    let headerElement = document.getElementsByClassName('header').item(0);
    headerElement.innerHTML = `
            <nav class="header__menu">
            <div class="header__menu__item header__menu__input-field">
                <input type="text" placeholder="🔍 Найти">
            </div>
            <ul class="header__menu__list">
                <li class="header__menu__item full-text"><a href="index.html">🏠 Домой</a></li>
                <li class="header__menu__item short-text"><a href="index.html">🏠</a></li>
                <li class="header__menu__item full-text"><a href="articles.html">📰 Статьи</a></li>
                <li class="header__menu__item short-text"><a href="articles.html">📰</a></li>
                <li class="header__menu__item full-text"><a href="contacts.html">☎ Контакты</a></li>
                <li class="header__menu__item short-text"><a href="contacts.html">☎</a></li>
                <li class="header__menu__item full-text"><a href="notes.html">📃 Notes</a></li>
                <li class="header__menu__item short-text"><a href="notes.html">📃</a></li>
            </ul>
        </nav>
    `;
}


function loadFooter() {
    let footer = document.getElementsByTagName('footer').item(0);
    footer.innerHTML = `
            <div>Page load time is <span id="page-load-time">###</span> seconds</div>
        <br/>
        2022-2022 &copy; by mullerdaniil
    `;
}

window.addEventListener('DOMContentLoaded', loadSidebar);
window.addEventListener('DOMContentLoaded', loadHeader);
window.addEventListener('DOMContentLoaded', loadFooter);