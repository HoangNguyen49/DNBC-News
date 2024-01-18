const indiaBtn = document.getElementById("india");
const usBtn = document.getElementById("us");
const twBtn = document.getElementById("tw");
const japanBtn = document.getElementById("japan");
const koreaBtn = document.getElementById("kr");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

var newsDataArr = [];

const API_KEY = "9b653ea549f642d6a150464d1fb2ebd0";
const INDIA_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const US_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const KOREA_NEWS = "https://newsapi.org/v2/top-headlines?country=kr&apiKey=";
const JAPAN_NEWS ="https://newsapi.org/v2/top-headlines?country=jp&apiKey=";
const TW_NEWS ="https://newsapi.org/v2/top-headlines?country=nl&apiKey=";


indiaBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>India</h4>";
    fetchIndiaNews();
});

usBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>US</h4>";
    fetchUsNews();
});

twBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>TW</h4>";
    fetchTwNews();
});

japanBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>JP</h4>";
    fetchJapanNews();
});

koreaBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>HK</h4>";
    fetchKoreaNews();
});



const fetchIndiaNews = async () => {
    const response = await fetch(INDIA_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchUsNews = async () => {
    const response = await fetch(US_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchTwNews = async () => {
    const response = await fetch(TW_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchJapanNews = async () => {
    const response = await fetch(JAPAN_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchKoreaNews = async () => {
    const response = await fetch(KOREA_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

function displayNews() {
    newsdetails.innerHTML = "";

    if (newsDataArr.length == 0) {
        newsdetails.innerHTML = "<h5> No data found <h5>"
        return;
    }


    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="news-container";
        

        var card = document.createElement('div');
        card.className = "news-box";

        var image = document.createElement('img');
        image.setAttribute("height","70%");
        image.setAttribute("width","70%");
        image.src = news.urlToImage;

        var cardBody = document.createElement('div');
        cardBody.className='card-body';
        
        var dateHeading = document.createElement('h5');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];
        
        var newsHeading = document.createElement('a');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;
        newsHeading.setAttribute("target", "_blank");
        newsHeading.href = news.url;
        
        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;
        

        var link = document.createElement('a');
        link.className="btn";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(dateHeading);
        cardBody.appendChild(newsHeading);
        
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });
}