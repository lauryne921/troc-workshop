let itemImage; 
const test = document.getElementById('test');

function modifyWidgetValue(value) {
	let widget = document.getElementById('widgetValue');
	widget.value = parseInt(widget.value) + parseInt(value);
  if(widget.value < 0)
  	widget.value = 0;
}

function addClass(elm, klass) {
    if (elm.className.indexOf(klass) == -1) {
      elm.className += ' ' + klass;
    }
  }
  
  function removeClass(elm, klass) {
    if (elm.className.indexOf("selected") >= 0) {
      elm.className = elm.className.replace(klass, '').trim();
    }
  }
  
  function myButtonClicked(button) {
    
    let aoAllButtons = document.getElementsByClassName('myButtonClass');
      for (let i = 0; i < aoAllButtons.length; i++) {
        removeClass(aoAllButtons[i], 'selected');
    }
    

    addClass(button, 'selected');
    
    // on prend l'HTML interne du bouton, mais il faudrait plutot créer un attribut dans le bouton et prendre sa valeur. 
    document.getElementById('boutonSelectionne').value = button.innerHTML;
    
  }
  
  function addEventsToButtons() {
    let aoAllButtons = document.getElementsByClassName("myButtonClass2"); 
  
    for (let i = 0; i < aoAllButtons.length; i++) {
      let oButton = aoAllButtons[i];
      oButton.addEventListener('click', function() {
        myButtonClicked(oButton);
      });
    }
  }

  function myButtonClicked(button) {
    
    let aoAllButtons = document.getElementsByClassName('myButtonClass2');
      for (let i = 0; i < aoAllButtons.length; i++) {
        removeClass(aoAllButtons[i], 'selected');
    }
    

    addClass(button, 'selected');
    
    document.getElementById('boutonSelectionne2').value = button.innerHTML;
    
  }
  
  function addEventsToButtons() {
    let aoAllButtons = document.getElementsByClassName("myButtonClass2"); 
  
    for (let i = 0; i < aoAllButtons.length; i++) {
      let oButton = aoAllButtons[i];
      oButton.addEventListener('click', function() {
        myButtonClicked(oButton);
      });
    }
  }
  
  function myFilterClicked(button) {
	// indexOf retourne la position dans la string de ce qu'on cherche
  // il retourne -1 quand il trouve pas, donc si c'est plus que 0 alors on l'a déjà selectionné
	let bIsSelected = (button.className.indexOf('selected') >= 0); 
  
  // on met dans le dico que ce qu'on a cliqué est true
  // on fait l'inverse de son statut actuel, donc si selectionné alors on passe à non selectionné
  odCategoryFilter[button.getAttribute('data-type')] = !bIsSelected;
  console.log(odCategoryFilter);
  
  // on ajoute ou non la classe au bouton de filtre selon son status
  if(bIsSelected) {
  	removeClass(button, 'selected');
  } else {
  	addClass(button, 'selected');
  }
  
  // on rafraichis les filtres pour afficher/cache les annonces
  refreshFilters();
}

function addFilterButtons() {
  let aoAllButtons = document.getElementsByClassName("filterButton"); // on sélectionne tous les boutons dans un array

  // pour chaque bouton...
  for (let i = 0; i < aoAllButtons.length; i++) {
    let oButton = aoAllButtons[i];
    oButton.addEventListener('click', function() {
      myFilterClicked(oButton);
    });
  }
}

function addEventsToButtons() {
  let aoAllButtons = document.getElementsByClassName("myButtonClass"); // on sélectionne tous les boutons dans un array

  // pour chaque bouton...
  for (let i = 0; i < aoAllButtons.length; i++) {
    let oButton = aoAllButtons[i];
    oButton.addEventListener('click', function() {
      myButtonClicked(oButton);
    });
  }
}

// on vérifie les cards qu'on a et on cache celles qu'on veut pas
function refreshFilters() {
	aoAnnonces = document.getElementsByClassName('mesAnnonces');
  for(let i = 0; aoAnnonces.length > i; i++) {
  	let sAnnonceType = aoAnnonces[i].getAttribute('data-type');
    bShouldDisplay = odCategoryFilter[sAnnonceType]; // on regarde si ce type d'annonce devrait être affiché ou caché
    aoAnnonces[i].style.display = bShouldDisplay ? '' : 'none';
  }
}




window.addEventListener("DOMContentLoaded", (event) => {
    addEventsToButtons();
    addFilterButtons();
  });
  

window.addEventListener('load', () => {
    console.log('hey');

    itemImage = itemsArray.map(item => {
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
});
