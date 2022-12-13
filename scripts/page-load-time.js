(() => {
    let timeBefore = new Date().getTime();

    window.addEventListener('load', () => {
        let timeAfter = new Date().getTime();
        let pageLoadTimeElement = document.getElementById('page-load-time');

        pageLoadTimeElement.innerText = (timeAfter - timeBefore) / 1_000;
    })
})()