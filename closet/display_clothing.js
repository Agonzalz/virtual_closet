


// Function to create and display a clothing item in the UI
export function displayClothingItem(item) {
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