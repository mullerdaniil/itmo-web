const menuItems = [
    'index.html',
    'posts.html',
    'contacts.html',
    'notes.html'
];

function setActiveElements() {
    let addressTokens = document.location.toString().split('/');
    let page = addressTokens[addressTokens.length - 1];

    let linkElements = document.querySelectorAll(`a[href="${page}"]`);
    let parentElements = [];
    linkElements.forEach(element => parentElements.push(element.parentElement));
    let activeClassAttribute = (menuItems.includes(page)) ?
        'header__menu__item_active' :
        'sidebar__navigation__item_active';

    parentElements.forEach(element => element.classList.add(activeClassAttribute));
}

window.addEventListener('load', setActiveElements);