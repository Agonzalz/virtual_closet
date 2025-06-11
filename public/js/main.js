import { loadCloset } from "./actions.js";
import { renderCloset } from "./render.js";
import { filterClosetByType, getSelectedTypes, getSelectedTags, applyFilters } from "./filters.js";
import { openForm, closeForm, setupFormHandlers } from "./form.js";
import { getRandomItem } from "./randomizer.js"; 

document.addEventListener('DOMContentLoaded', () => {
    const displayContainer = document.getElementById('display');
    const form = document.getElementById("clothingForm");
    const addButton = document.getElementById("addButton");
    const cancelButton = document.getElementById("cancelButton");
    const randomButton = document.getElementById("randomButton");
    const closet = loadCloset();
    const tagFilterInput = document.getElementById("tags-filter");

     // General-purpose render function
    function render(closetItems) {
        renderCloset(closetItems, displayContainer);
    }

    // Form setup
    addButton.addEventListener("click", openForm);
    cancelButton.addEventListener("click", closeForm);
    setupFormHandlers(form, render);

    // Filters
    document.querySelectorAll('.filter-type').forEach((cb) => {
        cb.addEventListener("change", () => {
            const selectedTypes = getSelectedTypes();
            const tagFilterValue = getSelectedTags();
            applyFilters(closet, selectedTypes, tagFilterValue);
        });
    });

    if (tagFilterInput) {
        tagFilterInput.addEventListener('input', () => {
            const selectedTypes = getSelectedTypes();
            const newTagFilterValue = getSelectedTags();
            applyFilters(closet, selectedTypes, newTagFilterValue);
        });
    }
    // Random Item Display
    randomButton.addEventListener("click", () => {
        const selectedTypes = getSelectedTypes();
        const selectedTags = getSelectedTags();

        // Apply the same filters used in applyFilters
        let filtered = closet;

        if (selectedTypes.length) {
            filtered = filtered.filter(item => selectedTypes.includes(item.type));
        }

        if (selectedTags.length > 0) {
            filtered = filtered.filter(item =>
                item.tags && item.tags.some(tag =>
                    selectedTags.map(t => t.toLowerCase()).includes(tag.toLowerCase())                )
            );
        }

        if (filtered.length === 0) {
            alert("No clothing items available for selected filters");
            return;
        }

        const randomItem = getRandomItem(filtered);
        render([randomItem]);
    });
    // Initial render using all items (no filters selected yet)
    const initialSelectedTypes = getSelectedTypes(); // should be empty array if nothing checked
    const initialSelectedTags = getSelectedTags();   // should be empty string or []
    applyFilters(closet, initialSelectedTypes, initialSelectedTags);


});