const feedDisplay = document.getElementById('feed');

fetch('http://localhost:3001/articles')
    .then(response => response.json())
    .then(data => {
        const articles = data;
        articles.forEach((article) => {
            const articleItem = `<div><h3>${article.title}</h3><p>${article.url}</p></div>`;
            feedDisplay.insertAdjacentHTML('beforeend', articleItem);
        })
    }).catch(err => console.log(err.message))