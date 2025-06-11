// form controls for editing items
import { Clothing } from "./clothing.js";
import { addClothingItem, loadCloset } from "./actions.js";

export function openForm() {
    document.getElementById("addForm").style.display = "block";
}

export function closeForm() {
    document.getElementById("addForm").style.display = "none";
}

export function setupFormHandlers(formElement, onItemAddedCallback) {
    formElement.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();               
        const type = document.querySelector('select[name="type"]').value;
        const color = document.getElementById("color").value.trim();
        const image = document.getElementById("img").value.trim();
        const tagsInput = document.getElementById("tags").value;

        const tags = tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag);

        if (!name || !type || !color) {
        alert("Please fill out all required fields.");
        return;
        }

        const newClothingItem = new Clothing(name, type, color, image, tags);
        addClothingItem(newClothingItem);

        alert("Clothing Item Added!");
        formElement.reset();
        closeForm();

        if (typeof onItemAddedCallback === "function") {
            const updatedCloset = loadCloset();
            onItemAddedCallback(updatedCloset);
        }
    });
}

