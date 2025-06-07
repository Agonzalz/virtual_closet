import { Clothing } from "./clothing";
import { loadCloset, addClothingItem, deleteClothingItem, updateClothingItem } from "./temp";
import { renderCloset } from "./render";

document.addEventListener('DOMContentLoaded', () => {
    const displayContainer = document.getElementById('display');
    const closet = loadCloset();

    const editHandler = (item, index) => {
        const newName = prompt('Edit name:', item.name);
        const newType = prompt('Edit type:', item.type);
        const newColor = prompt('Edit color:', item.color);
        const newImage = prompt('Edit image URL:', item.image);

        updateClothingItem(index, {
            name: newName || item.name,
            type: newType || item.type,
            color: newColor || item.color,
            image: newImage || item.image
        });
        location.reload();
    };
    const deleteHandler = (index) => {
        deleteClothingItem(index);
        location.reload();
    };
    renderCloset(closet, displayContainer, editHandler, deleteHandler);
});