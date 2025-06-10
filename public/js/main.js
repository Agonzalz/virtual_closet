import { loadCloset, editClothingItem, deleteClothingItem } from "./actions.js";
import { renderCloset } from "./render.js";
import { filterClosetByType, getSelectedTypes } from "./filters.js";
import { openForm, closeForm, setupFormHandlers } from "./form.js";
import { getRandomItem } from "./randomizer.js"; 

document.addEventListener('DOMContentLoaded', () => {
    const displayContainer = document.getElementById('display');
    const form = document.getElementById("clothingForm");
    const addButton = document.getElementById("addButton");
    const cancelButton = document.getElementById("cancelButton");
    const randomButton = document.getElementById("randomButton");


     // General-purpose render function
    function render(closetItems) {
        renderCloset(closetItems, displayContainer);
    }

    // Form setup
    addButton.addEventListener("click", openForm);
    cancelButton.addEventListener("click", closeForm);
    setupFormHandlers(form, render);

    // Filter Checkboxes
    document.querySelectorAll('.filter-type').forEach((cb) => {
        cb.addEventListener("change", () => {
            const closet = loadCloset();
            const selectedTypes = getSelectedTypes();
            const filteredCloset = filterClosetByType(closet, selectedTypes);

            render(filteredCloset);
        });
    });

    // Random Item Display
    randomButton.addEventListener("click", () => {
        const selectedTypes = getSelectedTypes();
        const closet = loadCloset();
        const filtered = filterClosetByType(closet, selectedTypes);

        if (filtered.length === 0) {
            alert("No clothing items available for selected filter");
            return;
        }


        const randomItem = getRandomItem(filtered);
        render([randomItem]);
    });

    // Initial render
    render(loadCloset());
});