// rendering the clothing items to screen

export function renderCloset(items, container, editHandler, deleteHandler) {
    container.innerHTML = '';
    items.foreach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('item');
        card.innerHTML = `
            <p class="cloth-name">${item.name}</p>
            ${item.image ? `<img class="cloth-img" src="${item.image}" alt="${item.name}" width = "100">` : ''}
            <p class="cloth-desc">${item.color} ${item.type}</p>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        card.querySelector('delete-btn').addEventListener('click', () => deleteHandler(index));
        card.querySelector('.edit-btn').addEventListener('click', () => editHandler(item, index));
        container.appendChild(card);
    });
}