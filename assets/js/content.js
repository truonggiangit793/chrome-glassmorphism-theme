(function () {
    "use strict";
    const quotesArray = [
        "“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein",
        "“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi",
        "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain",
        "“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt",
        "“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale",
        "“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson",
        "“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”—Diane McLaren",
        '"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill',
        '"It is better to fail in originality than to succeed in imitation." — Herman Melville',
        '"The road to success and the road to failure are almost exactly the same." — Colin R. Davis',
        "“Success usually comes to those who are too busy looking for it.” — Henry David Thoreau",
        "“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” —Dale Carnegie",
        "“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.” —Mister Rogers",
        "“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.” —John Wooden",
        "“I never dreamed about success. I worked for it.” —Estée Lauder",
        "“Success is getting what you want, happiness is wanting what you get.” ―W. P. Kinsella",
        '“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty." — Winston Churchill',
        "“Don’t let yesterday take up too much of today.” — Will Rogers",
        "“You learn more from failure than from success. Don’t let it stop you. Failure builds character.” — Unknown ",
        "“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” — Steve Jobs",
        "“Experience is a hard teacher because she gives the test first, the lesson afterwards.” ―Vernon Sanders Law",
        "“To know how much there is to know is the beginning of learning to live.” —Dorothy West",
        "“He who conquers himself is the mightiest warrior.” — Confucius",
        "“Try not to become a man of success, but rather become a man of value.” – Albert Einstein",
        "“One secret of success in life is for a man to be ready for his opportunity when it comes.” – Benjamin Disraeli",
        "“A man who has committed a mistake and doesn’t correct it is committing another mistake.” – Confucius Kongzi",
        "“The successful man will profit from his mistakes and try again in a different way.” – Dale Carnegie",
        "“A successful man is one who can lay a firm foundation with the bricks others have thrown at him.” – David Brinkley",
        "“You've got to get up every morning with determination if you're going to go to bed with satisfaction.” — George Lorimer",
        "“Education is the most powerful weapon which you can use to change the world.” — Nelson Mandela",
        "“The greatest discovery of my generation is that a human being can alter his life by altering his attitudes.” — William James",
        "“One of the differences between some successful and unsuccessful people is that one group is full of doers, while the other is full of wishers.” — Edmond Mbiaka",
        "“I’d rather regret the things I’ve done than regret the things I haven’t done.” —Lucille Ball",
        "“Life is like riding a bicycle. To keep your balance you must keep moving.” —Albert Einstein",
        "“What you do speaks so loudly that I cannot hear what you say.” —Ralph Waldo Emerson",
        "“I have never let my schooling interfere with my education.” —Mark Twain",
        "“If you can't yet do great things, do small things in a great way.” ―Napoleon Hill",
        "“Be sure you put your feet in the right place, then stand firm.” ―Abraham Lincoln",
        "“The greater the difficulty, the more the glory in surmounting it.” ―Epicurus",
        "“If the decisions you make about where you invest your blood, sweat, and tears are not consistent with the person you aspire to be, you’ll never become that person.” ―Clayton M. Christensen",
    ];

    const bookmarks = [
        {
            name: "Youtube",
            link: "https://www.youtube.com",
            thumbnail: "./assets/thumbnails/youtube.png",
        },
        {
            name: "Facebook",
            link: "https://www.facebook.com",
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
            name: "IELTS",
            link: "https://meet.google.com/gwk-iryf-crf",
            thumbnail: "./assets/thumbnails/meet.png",
        },
        {
            name: "Github",
            link: "https://www.github.com",
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
        {
            name: "Translator",
            link: "https://translate.google.com/?hl=vi",
            thumbnail: "./assets/thumbnails/translate.png",
        },
        {
            name: "MacLife",
            link: "https://maclife.io",
            thumbnail: "./assets/thumbnails/maclife.png",
        },
    ];

    const timeCounter = function () {
        const time = new Date();
        const hour = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
        const min = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
        const sec = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
        return { hour, min, sec };
    };

    const storedBookmark = function (myBookmarks) {
        localStorage.setItem("bookmarks", JSON.stringify(myBookmarks));
    };

    const getBookmarks = function (params) {
        const bookmarks = localStorage.getItem("bookmarks");
        return bookmarks ? JSON.parse(bookmarks) : null;
    };

    (function setQuotes() {
        const quotesElement = document.querySelector("div.root_quote_container>p.root_quote");
        if (!quotesElement) return;
        const quoteIndex = Math.floor(Math.random() * quotesArray.length);
        quotesElement.innerHTML = quotesArray[quoteIndex];
    })();

    (function installDefaultBookmarks(params) {
        storedBookmark(bookmarks);
    })();

    (function installTimeCounter() {
        const timerElement = document.querySelector("div#root_timer");
        if (!timerElement) return;
        setInterval(() => {
            timerElement.innerHTML = `<p>${timeCounter()?.hour}</p>:<p>${timeCounter()?.min}</p>:<p>${timeCounter()?.sec}</p>`;
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
        const myBookmarks = getBookmarks() ? getBookmarks() : bookmarks;
        if (!bookmarksElement) return;
        bookmarksElement.innerHTML = myBookmarks
            .map((bookmark) => {
                return `
                <div class="root_bookmarks-item">
                    <a class="root_bookmarks-link" href="${bookmark.link}">
                        <div class="card">
                            <div class="card_thumbnail">
                                <img src="${bookmark.thumbnail}" height="50px" />
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
