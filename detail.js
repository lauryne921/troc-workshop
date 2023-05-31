const object = localStorage.getItem('nameObject'); 

let currentObject = itemsArray.find(item => item.name === object); 


const nameObject = document.querySelector('.object-name'); 
const categoryObject = document.querySelector('.object-category');
const imageObject = document.querySelector('.object-image');
const descriptionObject = document.querySelector('.object-description');


nameObject.textContent = `${currentObject.name}`;
categoryObject.textContent = `${currentObject.category}`;
imageObject.style.backgroundImage = `url('${currentObject.image}')`; 
imageObject.style.backgroundSize = 'cover'; 
descriptionObject.textContent = `${currentObject.description}`;


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