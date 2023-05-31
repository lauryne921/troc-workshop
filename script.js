let itemImage; 
const test = document.getElementById('test'); 


function searchObject() {
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', e => {
      const value = e.target.value.toLowerCase(); // Convertissez la valeur saisie en minuscules
  
      itemsArray.forEach(item => {
        const isVisible = item.name.toLowerCase().includes(value) || item.category.toLowerCase().includes(value);
        // Vérifiez si le nom de l'élément ou la catégorie correspond à la recherche (en minuscules)
  
        if (item) {
          item.classList.toggle('hidden', !isVisible);
        }
      });
    });
  }

  searchObject();




    itemImage = itemsArray.map(item => {
        const trocObject = document.querySelector('[data-troc-object]');
        const card = trocObject.content.cloneNode(true);
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

        card.addEventListener('click', (event) => {
            event.stopPropagation();
            console.log('hello'); 
    });
});
