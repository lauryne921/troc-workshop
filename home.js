const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', handleSearch);
const containerSearchObject = document.querySelector('.container-search-object'); 

function handleSearch() {
    const searchTerm = searchBar.value.toLowerCase();
    const searchResults = itemsArray.filter(item => {
        const itemName = item.name.toLowerCase();
        const itemCategory = item.category.toLowerCase();
        return itemName.includes(searchTerm) || itemCategory.includes(searchTerm);
    });
    
    displaySearchResults(searchResults);

    if (searchBar.value === '') {
        containerSearchObject.innerHTML = '';
    } 
}

function displaySearchResults(results) {  
    containerSearchObject.innerHTML = ''; 
  
    results.forEach(item => {
        const resultItem = document.createElement('div');
      
        const imageElement = document.createElement('img');
        imageElement.src = item.image;
        imageElement.alt = item.name;
        imageElement.classList.add('image');
        resultItem.appendChild(imageElement);
      
        const nameElement = document.createElement('h4');
        nameElement.textContent = item.name;
        resultItem.appendChild(nameElement);
      
        containerSearchObject.appendChild(resultItem);
    });
}


let itemImage; 
const test = document.getElementById('test');
itemImage = itemsArray.slice(0, 5).map(item => {
    const trocObject = document.querySelector('[data-troc-object]');
    const card = trocObject.content.cloneNode(true).children[0];
    const images = card.querySelector('.image');
    const name= card.querySelector('.name');
    const category = card.querySelector('.category');

    images.style.backgroundImage = `url('${item.image}')`; 
    images.style.backgroundSize = 'cover';
    images.style.backgroundRepeat = 'no-repeat';
    name.textContent = `${item.name}`; 
    category.textContent = `${item.category}`;

    test.append(card);

    card.addEventListener('click', () => {
        window.location.href = './detail.html';
        localStorage.setItem('nameObject', item.name);
    });
});

const test2 = document.getElementById('test2');
itemImage = itemsArray.slice(6, 11).map(item => {
    const trocObject = document.querySelector('[data-troc-object]');
    const card = trocObject.content.cloneNode(true).children[0];
    const images = card.querySelector('.image');
    const name= card.querySelector('.name');
    const category = card.querySelector('.category');

    images.style.backgroundImage = `url('${item.image}')`; 
    images.style.backgroundSize = 'cover';
    images.style.backgroundRepeat = 'no-repeat';
    name.textContent = `${item.name}`; 
    category.textContent = `${item.category}`;

    test2.append(card);

    card.addEventListener('click', () => {
        window.location.href = './detail.html';
        localStorage.setItem('nameObject', item.name);
    });
});