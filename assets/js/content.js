(function () {
    "use strict";
    const bookmarks = [
        {
            name: "Youtube",
            link: "https://youtube.com",
            thumbnail: "./assets/thumbnails/youtube.png",
        },
        {
            name: "Facebook",
            link: "https://facebook.com",
            thumbnail: "./assets/thumbnails/facebook.png",
        },
        {
            name: "TDTU",
            link: "https://stdportal.tdtu.edu.vn",
            thumbnail: "./assets/thumbnails/tdtu.png",
        },
        {
            name: "Classroom",
            link: "https://classroom.google.com",
            thumbnail: "./assets/thumbnails/classroom.png",
        },
        {
            name: "Github",
            link: "https://github.com",
            thumbnail: "./assets/thumbnails/github.png",
        },
        {
            name: "My Pocket",
            link: "https://getpocket.com/saves",
            thumbnail: "./assets/thumbnails/pocket.png",
        },
        {
            name: "OpenAI",
            link: "https://platform.openai.com",
            thumbnail: "./assets/thumbnails/openai.png",
        },
    ];
    const timeCounter = function () {
        const time = new Date();
        const hour = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
        const min = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
        const sec = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
        return `${hour}:${min}:${sec}`;
    };
    (function installTimeCounter() {
        const timerElement = document.querySelector("h1#root_timer");
        if (!timerElement) return;
        setInterval(() => {
            timerElement.innerHTML = timeCounter();
        }, 1000);
    })();
    (function initGreeting() {
        const nowTime = new Date();
        const greeting = document.querySelector("span.root_title--greeting");
        if (!greeting) return;
        greeting.innerHTML =
            nowTime.getHours() >= 0 && nowTime.getHours() < 12 ? "Good morning" : nowTime.getHours() >= 12 && nowTime.getHours() < 18 ? "Good afternoon" : "Good evening";
    })();
    (function installBookmark() {
        const bookmarksElement = document.querySelector("div#root_bookmarks");
        if (!bookmarksElement) return;
        bookmarksElement.innerHTML = bookmarks
            .map((bookmark) => {
                return `
                <div class="root_bookmarks-item">
                    <a class="root_bookmarks-link" href="${bookmark.link}">
                        <div class="card">
                            <div class="card_thumbnail">
                                <img src="${bookmark.thumbnail}" width="50px" height="50px" />
                            </div>
                            <div class="card_title">
                                <p class="m-0">${bookmark.name}</p>
                            </div>
                        </div>
                    </a>
                </div>
                `;
            })
            .join("");
    })();
})();
