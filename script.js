let itemImage; 
const test = document.getElementById('test'); 


const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', handleSearch);

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
    test.innerHTML = '';
  
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
      
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = item.description;
        resultItem.appendChild(descriptionElement);
      
        const categoryElement = document.createElement('p');
        categoryElement.textContent = `Catégorie: ${item.category}`;
        resultItem.appendChild(categoryElement);
      
        test.appendChild(resultItem);
    });
}





itemsArray.forEach(item => {
    const trocObject = document.querySelector('[data-troc-object]');
    const card = trocObject.content.cloneNode(true).children[0];
    const images = card.querySelector('.image');
    const name = card.querySelector('.name');
    const description = card.querySelector('.description');
    const category = card.querySelector('.category');

    images.style.backgroundImage = `url('${item.image}')`; 
    images.style.backgroundSize = 'cover';
    images.style.backgroundRepeat = 'no-repeat';
    category.textContent = `${item.category}`; 
    name.textContent = `${item.name}`; 
    description.textContent = `${item.description}`;

    test.append(card);

    card.addEventListener('click', () => {
        window.location.href = './detail.html';
        localStorage.setItem('nameObject', item.name);
    });
});
