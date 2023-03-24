const switchTab = (event) => {
  document.querySelectorAll("main .tabs button").forEach((element) => {
    [...element.classList].includes("active-tab") && element.classList.remove("active-tab");
  });
  event.target.classList.add("active-tab")
}

const fetchAllArticles = () => {
  const articleCont = document.querySelector(".articles");
  articleCont.innerHTML = articles.map((article, index) => {
    return `<div onclick="navigate('${article.articleUrl}')" class="article">
        <img src="${article.cover}" alt="article image">
        <div class="detail">
          <h2>${article.title}</h2>
          <p>${article.shortDesc}</p>
          <h3>Date : ${article.date}</h3>
        </div>
      </div>`;
  }).join("");
  if (articleCont.innerHTML === "") articleCont.innerHTML="<div class='nothing'><h2>No article to show.</h2></div>"
}

const fetchArticlesByCategory = (category) => {
  const articleCont = document.querySelector(".articles");
  articleCont.innerHTML = articles.map((article, index) => {
    if (article.category === category) {
      return `<div onclick="navigate('${article.articleUrl}')" class="article">
        <img src="${article.cover}" alt="article image">
        <div class="detail">
          <h2>${article.title}</h2>
          <p>${article.shortDesc}</p>
          <h3>Date : ${article.date}</h3>
        </div>
      </div>`;
    }
  }).join("");
  if(articleCont.innerHTML === "") articleCont.innerHTML = "<div class='nothing'><h2>No article to show.</h2></div>";
}

document.querySelectorAll("main .tabs button").forEach((element) => {
  element.addEventListener("click", switchTab);
});
fetchAllArticles();

