window.onload=()=>{
  document.querySelector(".hamburger i").addEventListener("click",toggleNav);
  fetchRecent();
}

const navigate=(url)=>{
  location.href=url;
}


const toggleNav=()=>{
  if([...document.querySelector(".links").classList].includes("active")){
    document.querySelector(".links").classList.remove('active');
    document.querySelector(".hamburger i").className="fa-solid fa-bars";
  }else{
    document.querySelector(".links").classList.add('active');
    document.querySelector(".hamburger i").className="fa-solid fa-xmark";
  }
}

const fetchRecent=()=>{
  const container=document.querySelector("main .recent .posts");
  let markup="";
  for(let i=0;i<=4;i++){
  let article=articles[i];
    if(article){
      markup+=`<div class="post">
          <img src="${article.cover}">
          <div class="detail">
            <h2>${article.title}</h2>
            <p>${article.shortDesc}</p>
            <h4>Date : ${article.date}</h4>
          </div>
        </div>`;
    }
  }
  if(container){
    container.innerHTML=markup;
  }
}