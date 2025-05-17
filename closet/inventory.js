
document.addEventListener('DOMContentLoaded', () => {
    const displayContainer = document.getElementById('display');
    const closet = JSON.parse(localStorage.getItem('closet')) || [];
    const randomButton = document.getElementById('randomButton');
    randomButton.addEventListener('click', displayRandomClothing);


    function openForm() {
        document.getElementById("addForm").style.display = "block";
    }
    function closeForm() {
        document.getElementById("addForm").style.display = "none";
    }
    function renderCloset(items) {
        displayContainer.innerHTML = '';

        items.forEach((item, index) => {createClothingCard(item, index)})
    }

    function deleteClothingItem(index) {
        const closet = JSON.parse(localStorage.getItem('closet')) || [];
        closet.splice(index, 1); // Remove the item at that index
        localStorage.setItem('closet', JSON.stringify(closet));
        location.reload(); // Refresh to update the display
    }

    function editClothingItem(item, index) {
        const newName = prompt('Edit name:', item.name);
        const newType = prompt('Edit type:', item.type);
        const newColor = prompt('Edit color:', item.color);
        const newImage = prompt('Edit image URL:', item.image);

        const updatedItem = {
            name: newName || item.name,
            type: newType || item.type,
            color: newColor || item.color,
            image: newImage || item.image
        };

        const closet = JSON.parse(localStorage.getItem('closet')) || [];
        closet[index] = updatedItem;
        localStorage.setItem('closet', JSON.stringify(closet));
        location.reload(); // Refresh to update the display
    }

    function createClothingCard(item, index) {
        const card = document.createElement('div')
        card.classList.add('item');

            card.innerHTML = `
                <p class="cloth-name">${item.name}</p>
                ${item.image ? `<img class="cloth-img" src="${item.image}" alt="${item.name}" width = "100">` : ''}
                <p class="cloth-desc">${item.color} ${item.type}</p>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            `;

        // Delete functionality
        card.querySelector('.delete-btn').addEventListener('click', () => {
            deleteClothingItem(index);
        });

        // Edit functionality
        card.querySelector('.edit-btn').addEventListener('click', () => {
            editClothingItem(item, index);
        });

        displayContainer.appendChild(card);
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

