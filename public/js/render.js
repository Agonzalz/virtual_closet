// rendering the clothing items to screen

function handleDelete(index) {
    const closet = JSON.parse(localStorage.getItem('closet')) || [];
    closet.splice(index, 1);
    localStorage.setItem('closet', JSON.stringify(closet));
    location.reload();
}

function handleEdit(item, index) {
    const newName = prompt('Edit name:', item.name);
    const newType = prompt('Edit type:', item.type);
    const newColor = prompt('Edit color:', item.color);
    const newImage = prompt('Edit image URL:', item.image);
    const newtags = prompt('Edit tags:', item.tags);
    const updatedTags = newtags.split(',').map(tag => tag.trim()).filter(tag => tag);

    const updatedItem = {
        name: newName || item.name,
        type: newType || item.type,
        color: newColor || item.color,
        image: newImage || item.image,
        tags: updatedTags  || item.tags
    };

    const closet = JSON.parse(localStorage.getItem('closet')) || [];
    closet[index] = updatedItem;
    localStorage.setItem('closet', JSON.stringify(closet));
    location.reload();
}

export function renderCloset(items, container) {
    container.innerHTML = '';
    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('item');
        const tagHTML = (item.tags && item.tags.length > 0 )
            ?  `<div class ="tag-list">
                    ${item.tags.map(tag => `<span class="tag">#${tag}</span>`).join(' ')}
                </div>`
            :'';
        card.innerHTML = `
            <p class="cloth-name">${item.name}</p>
            ${item.image ? `<img class="cloth-img" src="${item.image}" alt="${item.name}" width = "100">` : ''}
            <p class="cloth-desc">${item.color} ${item.type}</p>
            ${tagHTML}
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
    // Add event listeners for Edit/Delete
        card.querySelector('.edit-btn').addEventListener('click', () => {
            handleEdit(item, index);
        });

        card.querySelector('.delete-btn').addEventListener('click', () => {
            handleDelete(index);
        });

        container.appendChild(card);
    });
}