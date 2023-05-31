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