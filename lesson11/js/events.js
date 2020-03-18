 const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  

    const towns = jsonObject['towns'];

  for (let i = 0; i < towns.length; i++ ) {
    if (towns[i].name == 'Preston'){
    let card = document.createElement('section');
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    
    h2.textContent = towns[i].name + ' Upcoming Events';
    p1.textContent = towns[i].events[0];
    p2.textContent = towns[i].events[1];
    p3.textContent = towns[i].events[2];
    p4.textContent = towns[i].events[3];
  
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);
    card.appendChild(article);
    
    document.querySelector('div.events').appendChild(card);
    }
  }
  });
