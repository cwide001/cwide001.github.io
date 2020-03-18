const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];
    let rowNumber = 0;
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == 'Preston' || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
        
        rowNumber = rowNumber + 1;
        
        let card = document.createElement('div');
        card.setAttribute('class', 'row' + rowNumber + ' townCard');

        let info = document.createElement('section');
        card.appendChild(info);

        let h2 = document.createElement('h2');
        h2.textContent = towns[i].name;
        info.appendChild(h2);

        let h3 = document.createElement('h3');
        h3.textContent = towns[i].motto;
        info.appendChild(h3);

        let founded = document.createElement('p');
        founded.textContent = "Founded: " + towns[i].yearFounded;
        info.appendChild(founded);

        let population = document.createElement('p');
        population.textContent = "Population: " + towns[i].currentPopulation;
        info.appendChild(population);

        let rainfall = document.createElement('p');
        rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
        info.appendChild(rainfall);

        let image = document.createElement('img');
        image.setAttribute('src', 'images/' + towns[i].photo);
        image.setAttribute('alt', 'Town of ' + towns[i].name)
        card.appendChild(image);
        
        
        document.querySelector('div.townInfo').appendChild(card); }

        else {
            continue;
        }
        const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

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


