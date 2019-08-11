

const url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2a33073cc2ed4a96895e4c99f369e525';
const url2 = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=2a33073cc2ed4a96895e4c99f369e525';
const url3 = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=2a33073cc2ed4a96895e4c99f369e525';
const url4 = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=2a33073cc2ed4a96895e4c99f369e525';
const url5 = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=2a33073cc2ed4a96895e4c99f369e525';
const url6 = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=2a33073cc2ed4a96895e4c99f369e525';
const url8 = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=2a33073cc2ed4a96895e4c99f369e525';
const url9 = 'https://newsapi.org/v2/everything?q=apple&from=2019-07-13&to=2019-07-13&sortBy=popularity&pageSize=1&apiKey=2a33073cc2ed4a96895e4c99f369e525';

const loader = document.querySelector('.loader');
const business = document.querySelector('#business');
const entertainment = document.querySelector('#entertainment');
const health = document.querySelector('#health');
const science = document.querySelector('#science');
const sports = document.querySelector('#sports');
const technology = document.querySelector('#technology');
const topnews = document.querySelector('#top');





gettopnews();



// click all menu start
entertainment.addEventListener('click', getentertainment);
health.addEventListener('click', gethealth);
science.addEventListener('click', getscience);
sports.addEventListener('click', getsports);
technology.addEventListener('click', gettechnology);
topnews.addEventListener('click', gettopnews);
// click all menu end

function slider(){
loader.style.display="block";
  setTimeout(this, 1000);
  fetch(url9)
.then((res) => res.json())
      .then((data) => {
        const newurl = data.articles;
        let slider = '';
        newurl.forEach(function(post){
          slider += `
           <div class="col-md-12">
            <div class="mb-3">
            <img src="${post.urlToImage}" class="img-fluid">
              <div class="bottom">
                <h5>${post.title} </h5>
             
              <a href="${post.url}" class="btn btn-danger btn-sm">Read more</a>
              </div>
            </div>
            </div>
          `;
        });
        document.getElementById('slider').innerHTML = slider;
loader.style.display="none";

      });
}



function getmain(){
loader.style.display="block";
  setTimeout(this, 1000);
  fetch(url)
.then((res) => res.json())
      .then((data) => {
        const newurl = data.articles;
        let output = '';
        newurl.forEach(function(post){
          output += `
            <div class="main">
            <div class="col-md-5">
            <img src="${post.urlToImage}" class="img-fluid">
            </div>
              <div class="col-md-7">
              <h6>${post.title} </h6>
              <p>${post.content} </p>
             
              <a href="${post.url}" class="btn btn-danger btn-sm">Read more</a>
            </div>
            </div>
          `;
        });
        document.getElementById('output').innerHTML = output;
loader.style.display="none";

      });
}


function getentertainment(){
  loader.style.display="block";
  setTimeout(this, 1000);
  fetch(url3)
.then((res) => res.json())
      .then((data) => {
        const newurl = data.articles;
        let output = '';
        newurl.forEach(function(post){
          output += `
           <div class="main">
            <div class="col-md-5">
            <img src="${post.urlToImage}" class="img-fluid">
            </div>
              <div class="col-md-7">
              <h6>${post.title} </h6>
              <p>${post.content} </p>
             
              <a href="${post.url}" class="btn btn-danger btn-sm">Read more</a>
            </div>
            </div>
          `;
        });
        document.getElementById('output').innerHTML = output;
        loader.style.display="none";
       });
}

function gethealth(){
  loader.style.display="block";
  setTimeout(this, 1000);
  fetch(url2)
.then((res) => res.json())
      .then((data) => {
        const newurl = data.articles;
        let output = '';
        newurl.forEach(function(post){
          output += `
           <div class="main">
            <div class="col-md-5">
            <img src="${post.urlToImage}" class="img-fluid">
            </div>
              <div class="col-md-7">
              <h6>${post.title} </h6>
              <p>${post.content} </p>
             
              <a href="${post.url}" class="btn btn-danger btn-sm">Read more</a>
            </div>
            </div>
          `;
        });
        document.getElementById('output').innerHTML = output;
         loader.style.display="none";
      });
}


function getscience(){
   loader.style.display="block";
  setTimeout(this, 1000);
  fetch(url4)
.then((res) => res.json())
      .then((data) => {
        const newurl = data.articles;
        let output = '';
        newurl.forEach(function(post){
          output += `
           <div class="main">
            <div class="col-md-5">
            <img src="${post.urlToImage}" class="img-fluid">
            </div>
              <div class="col-md-7">
              <h6>${post.title} </h6>
              <p>${post.content} </p>
             
              <a href="${post.url}" class="btn btn-danger btn-sm">Read more</a>
            </div>
            </div>
          `;
        });
        document.getElementById('output').innerHTML = output;
         loader.style.display="none";
      });
}

function getsports(){
   loader.style.display="block";
  setTimeout(this, 1000);
  fetch(url5)
.then((res) => res.json())
      .then((data) => {
        const newurl = data.articles;
        let output = '';
        newurl.forEach(function(post){
          output += `
           <div class="main">
            <div class="col-md-5">
            <img src="${post.urlToImage}" class="img-fluid">
            </div>
              <div class="col-md-7">
              <h6>${post.title} </h6>
              <p>${post.content} </p>
             
              <a href="${post.url}" class="btn btn-danger btn-sm">Read more</a>
            </div>
            </div>
          `;
        });
        document.getElementById('output').innerHTML = output;
         loader.style.display="none";
      });
}

function gettechnology(){
   loader.style.display="block";
  setTimeout(this, 1000);
  fetch(url6)
.then((res) => res.json())
      .then((data) => {
        const newurl = data.articles;
        let output = '';
        newurl.forEach(function(post){
          output += `
           <div class="main">
            <div class="col-md-5">
            <img src="${post.urlToImage}" class="img-fluid">
            </div>
              <div class="col-md-7">
              <h6>${post.title} </h6>
              <p>${post.content} </p>
             
              <a href="${post.url}" class="btn btn-danger btn-sm">Read more</a>
            </div>
            </div>
          `;
        });
        document.getElementById('output').innerHTML = output;
         loader.style.display="none";
      });
}


function gettopnews(){
   loader.style.display="block";
  setTimeout(this, 1000);
//slider();
  fetch(url8)
.then((res) => res.json())
      .then((data) => {
        const newurl = data.articles;
        let output = '';
        newurl.forEach(function(post){
          output += `
           <div class="main">
            <div class="col-md-5">
            <img src="${post.urlToImage}" class="img-fluid">
            </div>
              <div class="col-md-7">
              <h6>${post.title} </h6>
              <p>${post.content} </p>
             
              <a href="${post.url}" class="btn btn-danger btn-sm">Read more</a>
            </div>
            </div>
          `;
        });
        document.getElementById('output').innerHTML = output;
         loader.style.display="none";

      });

}



// menu acivation
let header = document.getElementById("myDIV");
let btns = header.getElementsByClassName("nav-link");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


// .then(function (response) {
//   return response.text();
// })
// .then(function (body) {
//   console.log(body);
// });