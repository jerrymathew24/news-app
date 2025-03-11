document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.querySelector(".container");
    const button = document.querySelector(".get-news");

    button.addEventListener("click", async function () {
        try {
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=540f09daa44b48268d3683994f82e4e1");
            const data = await response.json();
            
            if (data.articles) {
                newsContainer.innerHTML = "<h1 class='heading'>Random News with API</h1><button class='get-news'>Get News</button>";
                
                data.articles.slice(0, 1).forEach(article => {
                    const newsDiv = document.createElement("div"); 
                    newsDiv.classList.add("news-container");
                    newsDiv.innerHTML = 
                        `<h3>${article.title}</h3>
                        <p>${article.description || "No description available."}</p>
                        <a href="${article.url}" target="_blank">Read more</a> `
                    ;
                    newsContainer.appendChild(newsDiv);
                });
            }
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    });
})