
import { Clothing } from "./clothing.js";

document.addEventListener('DOMContentLoaded', () => {
    const displayContainer = document.getElementById('display');
    const closet = JSON.parse(localStorage.getItem('closet')) || [];
    const randomButton = document.getElementById('randomButton');
    const addButton = document.getElementById('addButton');
    const cancelButton  = document.getElementById('cancelButton');
    const form = document.getElementById('clothingForm')

    randomButton.addEventListener('click', displayRandomClothing);
    addButton.addEventListener('click', openForm);
    cancelButton.addEventListener('click', closeForm);
    form.addEventListener('submit', function(e) {
        console.log('Form submitted');
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
        closeForm();
        location.reload();
        console.log(closet);
    })
    
    function openForm() {
        console.log("function called");
        document.getElementById("addForm").style.display = "block";
    }
    function closeForm() {
        document.getElementById("addForm").style.display = "none";
    }
 

    function applyFilters() {
        const selectedTypes = Array.from(document.querySelectorAll('.filter-type:checked')).map(cb=>cb.value);

        const closet = JSON.parse(localStorage.getItem('closet')) || [];
        const filteredCloset = selectedTypes.length ? closet.filter(item => selectedTypes.includes(item.type)) : closet;

        renderCloset(filteredCloset);
    }

    function getFilteredCloset() {
        const selectedTypes = Array.from(document.querySelectorAll('.filter-type:checked')).map(cb =>cb.value);

        let closet = JSON.parse(localStorage.getItem('closet')) || [];

        return selectedTypes.length ? closet.filter(item => selectedTypes.includes(item.type)) : closet;
    }

    function displayRandomClothing() {
        const filteredCloset = getFilteredCloset();
        console.log("Random button clicked!"); // Debug statement
        if (filteredCloset.length === 0) {
            alert("No clothing items available for selected filter");
            return;
        }
        const randomIndex = Math.floor(Math.random() * filteredCloset.length);
        const randomItem = filteredCloset[randomIndex];

        renderCloset([randomItem]);
    }



    document.querySelectorAll('.filter-type').forEach(cb => {
        cb.addEventListener('change', applyFilters);
    })

    renderCloset(closet);
    // Loop through items and create cards
    // closet.forEach(item => {
    //     createClothingCard(item);
    // });


});

