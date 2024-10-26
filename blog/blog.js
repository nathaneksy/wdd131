const articles = [
    {
        id: 1,
        title: "Septimus Heap Book One: Magyk",
        date: "July 5, 2022",
        description: "If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
        imgAlt: "Book cover for Septimus Heap 1",
        ages: "10-14",
        genre: "Fantasy",
        stars: "****"
    },
    {
        id: 2,
        title: "Magnus Chase Book One: Sword of Summer",
        date: "December 12, 2021",
        description: "Join Magnus Chase as he discovers the truth about his family and his world.",
        imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
        imgAlt: "Book cover for Magnus Chase 1",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf -- a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }
];

function buildArticles() {
    const articleList = document.getElementById("article-list");

    articles.forEach(item => {
        const articleElement = document.createElement("article");
        articleElement.classList.add("book-review");

        const articleHTML = `
            <div class="book-info">
                <p>${item.date}</p>
                <p>${item.ages}</p>
                <p>${item.genre}</p>
                <p>${item.stars}</p>
            </div>
            <div class="book-details">
                <h2>${item.title}</h2>
                <img src="${item.imgSrc}" alt="${item.imgAlt}">
                <p>${item.description} <a href="#">Read More...</a></p>
            </div>
        `;

        articleElement.innerHTML = articleHTML;
        articleList.appendChild(articleElement);
    });
}

document.addEventListener("DOMContentLoaded", buildArticles);
