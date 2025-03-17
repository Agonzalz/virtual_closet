import { Clothing } from "./clothing.js";

const form = document.getElementById('clothingForm');
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
    newClothingItem.displayClothing();
    console.log(closet);
});
