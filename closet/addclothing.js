import { Clothing } from "./clothing.js";

const form = document.getElementById('clothingForm');
const displayContainer = document.getElementById('display'); // Get the display area

// Function to create and display a clothing item in the UI
function displayClothingItem(item) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('clothing-item');

    itemDiv.innerHTML = `
        <p><strong>Name:</strong> ${item.name}</p>
        <p><strong>Type:</strong> ${item.type}</p>
        <p><strong>Color:</strong> ${item.color}</p>
        ${item.image ? `<img src="${item.image}" alt="${item.name}" width="100">` : ''}
        <hr>
    `;

    displayContainer.appendChild(itemDiv);
}

form.addEventListener('submit', function(e) {
    console.log('Form submitted');  // Check if this shows up in the console
    e.preventDefault();

    const name = document.getElementById('name').value;
    const type = document.querySelector('select[name="type"]').value;
    const color = document.getElementById('color').value;
    const image = document.getElementById('img').value;

    const newClothingItem = new Clothing(name, type, color, image);

    //store in local storage
    let closet = JSON.parse(localStorage.getItem('closet')) || [];
    closet.push(newClothingItem);
    localStorage.setItem('closet', JSON.stringify(closet));

    alert('Clothing Item added');
    form.reset();
    displayClothingItem(newClothingItem);
    console.log(closet);

});
