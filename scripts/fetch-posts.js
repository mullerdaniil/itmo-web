function getRandomUserId() {
    return Math.floor(Math.random() * 10) + 1;
}

async function fetchPosts() {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + getRandomUserId());
    return await posts.json();
}

async function renderPosts() {
    const contentElement = document.querySelector('.content');

    try {
        contentElement.innerHTML = '<h1 class="content__header">Посты</h1>';
        const posts = await fetchPosts();
        posts.forEach(post => contentElement.innerHTML += `
                <section class="content__section">
                    <h1 class="content__section__header">${post.title}</h1>
                    <p>${post.body}</p>
                </section>
        `);
    } catch (e) {
        contentElement.innerHTML = `<h1 class="content__section__header">⚠️Что-то пошло не так.</h1>`;
    }
}

window.addEventListener('load', () => setTimeout(renderPosts, 1_000));